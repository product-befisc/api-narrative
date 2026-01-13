import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface EmailVerificationModalProps {
  open: boolean;
  onVerified: () => void;
}

export const EmailVerificationModal = ({ open, onVerified }: EmailVerificationModalProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const { toast } = useToast();

  const ALLOWED_PASSWORD = "portal@Befisc34";
  const WHITELISTED_EMAIL_PASSWORD = "access@Befisc23";
  const USER_PASSWORD = "Befisc@123";
  const SPINNY_PASSWORD = "portal@befisc123";

  const handleVerify = () => {
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    // Check if email is from befisc.com domain or whitelisted
    const domain = email.split("@")[1]?.toLowerCase();
    const isWhitelisted =
      email.toLowerCase() === "sukhjinder@finfactor.in" ||
      email.toLowerCase() === "gaurav.singh@easebuzz.in" ||
      email.toLowerCase() === "prateek.singh@rezo.ai";
    const isUserEmail = email.toLowerCase() === "user@befisc.com";
    const isSpinnyEmail = email.toLowerCase() === "user@spinny.com";

    if (domain !== "befisc.com" && !isWhitelisted && !isSpinnyEmail) {
      toast({
        title: "Access Restricted",
        description: "Only @befisc.com emails are allowed. Please contact support@befisc.com for access.",
        variant: "destructive",
      });
      return;
    }

    // Check password
    if (!password) {
      toast({
        title: "Password Required",
        description: "Please enter the password",
        variant: "destructive",
      });
      return;
    }

    // Validate password based on email
    let correctPassword = ALLOWED_PASSWORD;
    if (isWhitelisted) {
      correctPassword = WHITELISTED_EMAIL_PASSWORD;
    } else if (isUserEmail) {
      correctPassword = USER_PASSWORD;
    } else if (isSpinnyEmail) {
      correctPassword = SPINNY_PASSWORD;
    }
    if (password !== correctPassword) {
      toast({
        title: "Invalid Password",
        description: "Incorrect password. Please try again.",
        variant: "destructive",
      });
      return;
    }

    setIsVerifying(true);

    setTimeout(() => {
      toast({
        title: "Verification Successful!",
        description: "Welcome to BeFiSc",
      });
      onVerified();
      setIsVerifying(false);
    }, 800);
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
            <Mail className="w-8 h-8 text-primary" />
          </div>

          {/* Email & Password Step */}
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-foreground">Verify your Email to Continue</h2>
            <p className="text-muted-foreground">Enter your @befisc.com email and password to access the portal.</p>
          </div>

          <div className="w-full space-y-4">
            <div className="space-y-2 text-left">
              <label className="text-sm font-semibold text-foreground">Enter your email address</label>
              <Input
                type="email"
                placeholder="you@befisc.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 text-base"
              />
            </div>

            <div className="space-y-2 text-left">
              <label className="text-sm font-semibold text-foreground">Enter password</label>
              <Input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleVerify()}
                className="h-12 text-base"
              />
            </div>

            <Button
              onClick={handleVerify}
              disabled={isVerifying}
              className="w-full h-12 text-base bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 disabled:opacity-50"
            >
              {isVerifying ? "Verifying..." : "Continue"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
