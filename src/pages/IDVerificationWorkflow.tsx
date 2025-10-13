import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Upload, FileText, Camera, Shield, ScanFace, MapPin, CheckCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import Navbar from '@/components/Navbar';

const IDVerificationWorkflow = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);

  const steps = [
    { id: 0, label: 'Upload ID', icon: Upload, description: 'Upload your government-issued ID' },
    { id: 1, label: 'OCR Extract', icon: FileText, description: 'Extracting data from document' },
    { id: 2, label: 'Selfie Capture', icon: Camera, description: 'Capture a selfie for verification' },
    { id: 3, label: 'Liveliness Check', icon: Shield, description: 'Verifying you are a real person' },
    { id: 4, label: 'Face Match', icon: ScanFace, description: 'Matching face with ID photo' },
    { id: 5, label: 'Address Match', icon: MapPin, description: 'Verifying address details' },
    { id: 6, label: 'Verified', icon: CheckCircle, description: 'Verification complete' },
  ];

  const handleNextStep = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1);
      }
    }, 1500);
  };

  const handleFileUpload = () => {
    // Auto-populate with dummy PAN card
    handleNextStep();
  };

  const progressPercentage = ((currentStep + 1) / steps.length) * 100;

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

        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            ID Verification Workflow
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Complete end-to-end identity verification with OCR, face matching, and liveliness detection
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex justify-between items-start max-w-5xl mx-auto mb-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isCompleted = index < currentStep;
              const isCurrent = index === currentStep;
              
              return (
                <div key={step.id} className="flex flex-col items-center flex-1">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center mb-3 transition-all ${
                      isCompleted
                        ? 'bg-success'
                        : isCurrent
                        ? 'bg-primary animate-pulse'
                        : 'bg-muted'
                    }`}
                  >
                    <Icon className={`h-8 w-8 ${isCompleted || isCurrent ? 'text-white' : 'text-muted-foreground'}`} />
                  </div>
                  <p className={`text-xs font-medium text-center ${isCurrent ? 'text-foreground' : 'text-muted-foreground'}`}>
                    {step.label}
                  </p>
                  {isCompleted && (
                    <CheckCircle className="h-5 w-5 text-success mt-2" />
                  )}
                </div>
              );
            })}
          </div>
          <Progress value={progressPercentage} className="max-w-5xl mx-auto" />
        </div>

        {/* Action Card */}
        <Card className="max-w-2xl mx-auto p-8 mb-8">
          <div className="text-center">
            {currentStep === 0 && (
              <div className="space-y-6">
                <div className="flex justify-center">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                    <Upload className="h-10 w-10 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Upload Your ID</h3>
                  <p className="text-muted-foreground mb-6">
                    Upload a clear photo of your government-issued ID card (Aadhaar, PAN, Driving License, etc.)
                  </p>
                  <Button size="lg" onClick={handleFileUpload}>
                    Upload PAN Card
                  </Button>
                  <p className="text-xs text-muted-foreground mt-4">
                    Demo will auto-upload a sample PAN card
                  </p>
                </div>
              </div>
            )}

            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="flex justify-center">
                  <Loader2 className="h-16 w-16 text-primary animate-spin" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Extracting Data</h3>
                  <p className="text-muted-foreground mb-4">
                    Using OCR to extract information from your ID...
                  </p>
                  <div className="text-left max-w-md mx-auto space-y-2 text-sm">
                    <p className="flex justify-between">
                      <span className="text-muted-foreground">Name:</span>
                      <span className="font-semibold">Rohit Sharma</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-muted-foreground">DOB:</span>
                      <span className="font-semibold">20/06/1990</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-muted-foreground">ID Number:</span>
                      <span className="font-semibold">XXXX-XXXX-2547</span>
                    </p>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="flex justify-center">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                    <Camera className="h-10 w-10 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Capture Selfie</h3>
                  <p className="text-muted-foreground mb-6">
                    Take a selfie to verify your identity matches the ID document
                  </p>
                  <Button size="lg" onClick={handleNextStep} disabled={isProcessing}>
                    {isProcessing ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Camera className="mr-2 h-4 w-4" />}
                    Capture Selfie
                  </Button>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="flex justify-center">
                  <Loader2 className="h-16 w-16 text-primary animate-spin" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Liveliness Check</h3>
                  <p className="text-muted-foreground">
                    Detecting signs of life to ensure you're a real person...
                  </p>
                  <div className="mt-4 space-y-2 text-sm">
                    <p className="flex items-center justify-center gap-2 text-success">
                      <CheckCircle className="h-4 w-4" />
                      Face detected
                    </p>
                    <p className="flex items-center justify-center gap-2 text-success">
                      <CheckCircle className="h-4 w-4" />
                      Movement verified
                    </p>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div className="space-y-6">
                <div className="flex justify-center">
                  <Loader2 className="h-16 w-16 text-primary animate-spin" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Face Matching</h3>
                  <p className="text-muted-foreground mb-4">
                    Comparing your selfie with the ID photo...
                  </p>
                  <div className="text-center">
                    <p className="text-4xl font-bold text-success">98.5%</p>
                    <p className="text-sm text-muted-foreground">Match Score</p>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 5 && (
              <div className="space-y-6">
                <div className="flex justify-center">
                  <Loader2 className="h-16 w-16 text-primary animate-spin" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Address Verification</h3>
                  <p className="text-muted-foreground mb-4">
                    Verifying address details from your ID...
                  </p>
                  <div className="text-left max-w-md mx-auto space-y-2 text-sm">
                    <p className="flex justify-between">
                      <span className="text-muted-foreground">Address:</span>
                      <span className="font-semibold">Mumbai, Maharashtra</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-muted-foreground">Pincode:</span>
                      <span className="font-semibold">400001</span>
                    </p>
                    <p className="flex items-center justify-end gap-2 text-success">
                      <CheckCircle className="h-4 w-4" />
                      Verified
                    </p>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 6 && (
              <div className="space-y-6">
                <div className="flex justify-center">
                  <div className="w-20 h-20 rounded-full bg-success flex items-center justify-center animate-scale-in">
                    <CheckCircle className="h-12 w-12 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Verification Complete!</h3>
                  <p className="text-muted-foreground mb-6">
                    Your identity has been successfully verified
                  </p>
                </div>
              </div>
            )}
          </div>
        </Card>

        {/* Result Card - Only show when verified */}
        {currentStep === 6 && (
          <Card className="max-w-2xl mx-auto p-8 border-2 border-success animate-fade-in">
            <div className="flex items-start justify-between mb-6">
              <h3 className="text-2xl font-bold text-foreground">Verification Result</h3>
              <span className="bg-success text-white px-4 py-1 rounded-full text-sm font-semibold">
                ✓ Verified
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Full Name</p>
                <p className="font-semibold">Rohit Sharma</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Date of Birth</p>
                <p className="font-semibold">20/06/1990</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Address</p>
                <p className="font-semibold">Mumbai, Maharashtra</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Match Score</p>
                <p className="font-semibold text-success">98.5%</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">ID Number</p>
                <p className="font-semibold">XXXX-XXXX-2547</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Liveliness</p>
                <p className="font-semibold text-success">Confirmed ✓</p>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t">
              <Button onClick={() => setCurrentStep(0)} variant="outline" className="w-full">
                Start New Verification
              </Button>
            </div>
          </Card>
        )}

        {/* Auto-progress for processing steps */}
        {currentStep > 0 && currentStep < 6 && !isProcessing && (
          <div className="text-center">
            <Button
              onClick={handleNextStep}
              disabled={isProcessing}
              size="lg"
              className="animate-fade-in"
            >
              {isProcessing ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : (
                'Continue'
              )}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default IDVerificationWorkflow;
