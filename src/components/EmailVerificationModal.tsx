import { useState, useEffect, useRef } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface EmailVerificationModalProps {
  open: boolean;
  onVerified: () => void;
}

export const EmailVerificationModal = ({ open, onVerified }: EmailVerificationModalProps) => {
  const [email, setEmail] = useState("");
  const [step, setStep] = useState<"email" | "otp">("email");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [resendTimer, setResendTimer] = useState(0);
  const [isVerifying, setIsVerifying] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [token, setToken] = useState("");
  const otpRefs = useRef<(HTMLInputElement | null)[]>([]);
  const { toast } = useToast();

  const API_URL = "https://7xyx6aw7jes7vfkec2humb7spm0ibcqx.lambda-url.ap-south-1.on.aws/";

  // Base64 encode email
  const encodeEmail = (email: string) => btoa(email);

  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [resendTimer]);

  const handleSendOtp = async () => {
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    setIsSending(true);

    try {
      // Step 1: Generate OTP
      const encodedEmail = encodeEmail(email);
      const generateResponse = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "GENERATE_OTP",
          email: encodedEmail,
        }),
      });

      if (!generateResponse.ok) {
        throw new Error("Failed to send OTP");
      }

      const generateData = await generateResponse.json();
      const otpToken = generateData.token;

      if (!otpToken) {
        throw new Error("No token received");
      }

      // Step 2: Validate OTP Token (silent)
      const validateResponse = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "VALIDATE_OTP_TOKEN",
          token: otpToken,
        }),
      });

      if (!validateResponse.ok) {
        throw new Error("Token validation failed");
      }

      const validateData = await validateResponse.json();
      
      if (!validateData.valid) {
        throw new Error("Session expired, please try again");
      }

      // Success - store token and move to OTP entry
      setToken(otpToken);
      toast({
        title: "OTP Sent!",
        description: `Verification code sent to ${email}`,
      });

      setStep("otp");
      setResendTimer(60);
      setTimeout(() => otpRefs.current[0]?.focus(), 100);
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send OTP. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSending(false);
    }
  };

  const handleResendOtp = () => {
    if (resendTimer === 0) {
      handleSendOtp();
    }
  };

  const handleOtpChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      otpRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  };

  const handleVerifyOtp = async () => {
    setIsVerifying(true);
    const enteredOtp = otp.join("");

    try {
      // Step 3: Verify OTP
      const encodedEmail = encodeEmail(email);
      const verifyResponse = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "VALIDATE_OTP",
          email: encodedEmail,
          token: token,
          otp: enteredOtp,
        }),
      });

      if (!verifyResponse.ok) {
        throw new Error("Failed to verify OTP");
      }

      const verifyData = await verifyResponse.json();

      if (verifyData.valid) {
        // Store session token
        if (verifyData.sessionToken) {
          sessionStorage.setItem("befiscSessionToken", verifyData.sessionToken);
        }
        
        toast({
          title: "✨ Verification Successful!",
          description: "Welcome to BeFiSc",
        });
        
        onVerified();
      } else {
        throw new Error("Invalid OTP");
      }
    } catch (error) {
      toast({
        title: "Invalid OTP",
        description: error instanceof Error ? error.message : "Please check the code and try again",
        variant: "destructive",
      });
      setOtp(["", "", "", "", "", ""]);
      otpRefs.current[0]?.focus();
    } finally {
      setIsVerifying(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={() => {}}>
      <DialogContent 
        className="sm:max-w-md border-2 border-primary/20 bg-background/95 backdrop-blur-xl shadow-2xl animate-scale-in"
        hideClose
      >
        <div className="flex flex-col items-center text-center space-y-6 py-4">
          {/* Icon */}
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
            {step === "email" ? (
              <Mail className="w-8 h-8 text-primary" />
            ) : (
              <Shield className="w-8 h-8 text-primary" />
            )}
          </div>

          {step === "email" ? (
            <>
              {/* Email Step */}
              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-foreground">
                  Verify your Email to Continue
                </h2>
                <p className="text-muted-foreground">
                  We'll send a one-time password (OTP) to your email for quick verification.
                </p>
              </div>

              <div className="w-full space-y-4">
                <div className="space-y-2 text-left">
                  <label className="text-sm font-semibold text-foreground">
                    Enter your email address
                  </label>
                  <Input
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSendOtp()}
                    className="h-12 text-base"
                  />
                </div>

                <Button
                  onClick={handleSendOtp}
                  disabled={isSending}
                  className="w-full h-12 text-base bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSending ? "Sending OTP to your email..." : "Send OTP"}
                </Button>
              </div>
            </>
          ) : (
            <>
              {/* OTP Step */}
              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-foreground">
                  Enter the OTP
                </h2>
                <p className="text-muted-foreground">
                  Sent to <span className="font-semibold text-foreground">{email}</span>
                </p>
              </div>

              <div className="w-full space-y-6">
                {/* OTP Input Boxes */}
                <div className="flex justify-center gap-2">
                  {otp.map((digit, index) => (
                    <Input
                      key={index}
                      ref={(el) => (otpRefs.current[index] = el)}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      onKeyDown={(e) => handleOtpKeyDown(index, e)}
                      className="w-12 h-14 text-center text-xl font-bold border-2 focus:border-primary"
                    />
                  ))}
                </div>

                <Button
                  onClick={handleVerifyOtp}
                  disabled={otp.join("").length !== 6 || isVerifying}
                  className="w-full h-12 text-base bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isVerifying ? "Verifying..." : "Verify & Continue"}
                </Button>

                <button
                  onClick={handleResendOtp}
                  disabled={resendTimer > 0}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {resendTimer > 0
                    ? `Resend OTP in ${resendTimer}s`
                    : "Resend OTP"}
                </button>
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
