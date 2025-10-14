import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, FileStack, Lock, CheckCircle, Download, Palette, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Navbar from '@/components/Navbar';

const DigiLockerAadhaar = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(1);
  const [showOTPModal, setShowOTPModal] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);

  const steps = [
    {
      id: 1,
      title: 'Auto-Filled Request',
      icon: FileStack,
      description: 'Input document request details',
    },
    {
      id: 2,
      title: 'DigiLocker Redirect',
      icon: Lock,
      description: 'Secure redirect for authentication',
    },
    {
      id: 3,
      title: 'OTP Authentication',
      icon: CheckCircle,
      description: 'User verification via OTP',
    },
    {
      id: 4,
      title: 'Document Download',
      icon: Download,
      description: 'API call to fetch verified document',
    },
    {
      id: 5,
      title: 'White-label Customization',
      icon: Palette,
      description: 'Brand with your company identity',
    },
  ];

  const handleNextStep = () => {
    if (activeStep === 2) {
      setShowOTPModal(true);
    } else if (activeStep < 5) {
      setActiveStep(activeStep + 1);
    }
  };

  const handleOTPVerify = () => {
    setOtpVerified(true);
    setShowOTPModal(false);
    setActiveStep(3);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <Button
          variant="ghost"
          className="mb-6"
          onClick={() => navigate('/product/id-proof')}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to ID Proof
        </Button>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-foreground mb-4">
            DigiLocker Aadhaar Verification Journey
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A step-by-step visual walkthrough of how DigiLocker verification works
          </p>
        </div>

        {/* Journey Timeline */}
        <div className="mb-12">
          <div className="flex items-center justify-between max-w-5xl mx-auto relative">
            {/* Progress Line */}
            <div className="absolute top-6 left-0 right-0 h-0.5 bg-muted -z-10">
              <div 
                className="h-full bg-primary transition-all duration-500"
                style={{ width: `${((activeStep - 1) / 4) * 100}%` }}
              />
            </div>

            {steps.map((step) => {
              const Icon = step.icon;
              const isActive = step.id === activeStep;
              const isCompleted = step.id < activeStep;

              return (
                <div key={step.id} className="flex flex-col items-center relative">
                  <button
                    onClick={() => step.id <= activeStep && setActiveStep(step.id)}
                    className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 transition-all duration-300 ${
                      isActive
                        ? 'bg-primary text-primary-foreground scale-110 shadow-lg'
                        : isCompleted
                        ? 'bg-primary/20 text-primary'
                        : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </button>
                  <span className={`text-sm font-medium text-center max-w-[100px] ${
                    isActive || isCompleted ? 'text-foreground' : 'text-muted-foreground'
                  }`}>
                    {step.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Step Content */}
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Step 1: Auto-Filled Request */}
          {activeStep === 1 && (
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <FileStack className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Step 1: Auto-Filled Request</CardTitle>
                </div>
                <p className="text-muted-foreground">Document request details ready for submission</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-4">
                  <div className="space-y-2">
                    <Label htmlFor="doc_type">Document Type</Label>
                    <Input id="doc_type" value="Aadhaar, PAN" readOnly className="bg-muted/50" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="aadhaar">Aadhaar Number</Label>
                    <Input id="aadhaar" value="1234 5678 9123" readOnly className="bg-muted/50" placeholder="12 digits, spaced every 4 digits" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="udf1">Transaction ID</Label>
                      <Input id="udf1" value="368e4d358b5f" readOnly className="bg-muted/50" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="consent">Consent</Label>
                      <Input id="consent" value="Yes" readOnly className="bg-muted/50" />
                    </div>
                  </div>
                </div>
                <div className="bg-primary/10 rounded-lg p-4 mb-6">
                  <p className="text-sm text-foreground">
                    ✓ Valid customer consent obtained for data processing.
                  </p>
                </div>
                <Button onClick={handleNextStep} className="w-full" size="lg">
                  Submit Request
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Step 2: DigiLocker Redirect */}
          {activeStep === 2 && (
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Lock className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Step 2: Redirect to DigiLocker</CardTitle>
                </div>
                <p className="text-muted-foreground">Secure redirect for user authentication</p>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-8 mb-6 text-center">
                  <Lock className="h-16 w-16 text-primary mx-auto mb-4 animate-pulse" />
                  <p className="text-lg font-semibold text-foreground mb-2">
                    Redirecting securely to DigiLocker...
                  </p>
                  <p className="text-muted-foreground">
                    User authentication in progress
                  </p>
                </div>
                <Button onClick={handleNextStep} className="w-full" size="lg">
                  View Authentication Process
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          )}

          {/* OTP Modal */}
          {showOTPModal && (
            <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in">
              <Card className="w-full max-w-md border-2 border-primary/20 animate-scale-in">
                <CardHeader>
                  <CardTitle className="text-center">DigiLocker Authentication</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Mobile / Aadhaar Number</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-input rounded-md bg-background"
                        placeholder="Enter mobile or Aadhaar number"
                        defaultValue="1234 5678 9123"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Enter OTP</label>
                      <div className="flex gap-2 justify-center">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                          <input
                            key={i}
                            type="text"
                            maxLength={1}
                            className="w-12 h-12 text-center text-lg border border-input rounded-md bg-background focus:border-primary focus:ring-2 focus:ring-primary/20"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <Button onClick={handleOTPVerify} className="w-full" size="lg">
                    Verify OTP
                  </Button>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Step 3: Authentication Success */}
          {activeStep === 3 && (
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Step 3: User Authentication</CardTitle>
                </div>
                <p className="text-muted-foreground">OTP verification completed successfully</p>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-8 mb-6 text-center">
                  <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 animate-scale-in">
                    <CheckCircle className="h-12 w-12 text-primary" />
                  </div>
                  <p className="text-xl font-semibold text-foreground mb-2">
                    ✓ User authenticated successfully
                  </p>
                  <p className="text-muted-foreground">
                    User has granted DigiLocker access to their documents.
                  </p>
                </div>
                <Button onClick={handleNextStep} className="w-full" size="lg">
                  Proceed to Download
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Step 4: Document Download */}
          {activeStep === 4 && (
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Download className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Step 4: Document Download API</CardTitle>
                </div>
                <p className="text-muted-foreground">Retrieve verified document from DigiLocker</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2 mb-4">
                    <Label htmlFor="transaction_id">Transaction ID</Label>
                    <Input id="transaction_id" value="98bcd0-871gssd-1asd3nd" readOnly className="bg-muted/50 font-mono" />
                  </div>
                  <div className="bg-primary/10 rounded-lg p-4">
                    <p className="text-sm font-medium text-foreground mb-2">
                      Now call the second API to download the verified document.
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-muted/50 to-muted/30 rounded-lg p-6 text-center">
                    <Download className="h-12 w-12 text-primary mx-auto mb-3" />
                    <Button variant="outline" size="lg" className="mb-2">
                      <Download className="mr-2 h-4 w-4" />
                      Download document.pdf
                    </Button>
                    <p className="text-xs text-muted-foreground">Verified Aadhaar Document</p>
                  </div>
                </div>
                <Button onClick={handleNextStep} className="w-full mt-6" size="lg">
                  View Customization Options
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Step 5: White-label Customization */}
          {activeStep === 5 && (
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Palette className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Step 5: Custom Branding & White-Labeling</CardTitle>
                </div>
                <p className="text-muted-foreground">Personalize the journey with your brand identity</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-8 border-2 border-dashed border-primary/30">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <p className="text-lg font-semibold text-foreground mb-2">
                          Fully Customizable Journey
                        </p>
                        <p className="text-muted-foreground text-sm">
                          This journey can be fully customized with your company's logo, color theme, and consent copy.
                        </p>
                      </div>
                      <div className="w-16 h-16 rounded-lg bg-background border-2 border-dashed border-primary/40 flex items-center justify-center text-xs text-muted-foreground">
                        Your Logo
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="bg-background rounded-lg p-3 text-center">
                        <div className="w-8 h-8 rounded-full bg-primary/20 mx-auto mb-2"></div>
                        <p className="text-xs text-muted-foreground">Brand Colors</p>
                      </div>
                      <div className="bg-background rounded-lg p-3 text-center">
                        <Palette className="w-8 h-8 text-primary mx-auto mb-2" />
                        <p className="text-xs text-muted-foreground">Custom Theme</p>
                      </div>
                      <div className="bg-background rounded-lg p-3 text-center">
                        <FileStack className="w-8 h-8 text-primary mx-auto mb-2" />
                        <p className="text-xs text-muted-foreground">Consent Copy</p>
                      </div>
                    </div>
                  </div>

                  <div className="text-center py-4">
                    <p className="text-sm text-muted-foreground">
                      Powered by <span className="font-semibold text-primary">SmartAuth DigiLocker Integration</span>
                    </p>
                  </div>

                  <Button onClick={() => setActiveStep(1)} variant="outline" className="w-full" size="lg">
                    Restart Journey
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default DigiLockerAadhaar;
