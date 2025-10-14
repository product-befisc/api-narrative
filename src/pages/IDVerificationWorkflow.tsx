import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Upload, FileText, Camera, Shield, ScanFace, MapPin, CheckCircle, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Navbar from '@/components/Navbar';

const IDVerificationWorkflow = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(1);
  const [showDocument, setShowDocument] = useState(false);
  const [showSelfie, setShowSelfie] = useState(false);
  const [extractionProgress, setExtractionProgress] = useState(0);
  const [livenessChecks, setLivenessChecks] = useState<number[]>([]);
  const [matchProgress, setMatchProgress] = useState(0);

  const steps = [
    {
      id: 1,
      title: 'Upload ID Document',
      icon: Upload,
      description: 'Submit your government-issued ID',
    },
    {
      id: 2,
      title: 'OCR Data Extraction',
      icon: FileText,
      description: 'Extract information from document',
    },
    {
      id: 3,
      title: 'Selfie Capture',
      icon: Camera,
      description: 'Capture photo for face verification',
    },
    {
      id: 4,
      title: 'Liveliness Detection',
      icon: Shield,
      description: 'Verify you are a real person',
    },
    {
      id: 5,
      title: 'Face Matching',
      icon: ScanFace,
      description: 'Compare selfie with ID photo',
    },
    {
      id: 6,
      title: 'Address Verification',
      icon: MapPin,
      description: 'Verify address details',
    },
  ];

  const handleNextStep = () => {
    if (activeStep === 1) {
      // Show document upload animation
      setShowDocument(true);
      setTimeout(() => {
        setActiveStep(2);
        // Start extraction animation
        let progress = 0;
        const interval = setInterval(() => {
          progress += 20;
          setExtractionProgress(progress);
          if (progress >= 100) {
            clearInterval(interval);
          }
        }, 300);
      }, 1500);
    } else if (activeStep === 2) {
      setActiveStep(3);
      setExtractionProgress(0);
    } else if (activeStep === 3) {
      // Show selfie capture
      setShowSelfie(true);
      setTimeout(() => {
        setActiveStep(4);
        // Start liveliness checks animation
        [0, 1, 2].forEach((index) => {
          setTimeout(() => {
            setLivenessChecks(prev => [...prev, index]);
          }, index * 800);
        });
      }, 1500);
    } else if (activeStep === 4) {
      setActiveStep(5);
      setLivenessChecks([]);
      // Start face matching animation
      let progress = 0;
      const interval = setInterval(() => {
        progress += 5;
        setMatchProgress(progress);
        if (progress >= 98) {
          clearInterval(interval);
        }
      }, 50);
    } else if (activeStep < 6) {
      setActiveStep(activeStep + 1);
      setMatchProgress(0);
    }
  };

  const resetJourney = () => {
    setActiveStep(1);
    setShowDocument(false);
    setShowSelfie(false);
    setExtractionProgress(0);
    setLivenessChecks([]);
    setMatchProgress(0);
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
            ID Verification Workflow Journey
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A step-by-step visual walkthrough of complete identity verification with OCR, face matching, and liveliness detection
          </p>
        </div>

        {/* Journey Timeline */}
        <div className="mb-12">
          <div className="flex items-center justify-between max-w-6xl mx-auto relative">
            {/* Progress Line */}
            <div className="absolute top-6 left-0 right-0 h-0.5 bg-muted -z-10">
              <div 
                className="h-full bg-primary transition-all duration-500"
                style={{ width: `${((activeStep - 1) / 5) * 100}%` }}
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
          {/* Step 1: Upload ID Document */}
          {activeStep === 1 && (
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Upload className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Step 1: Upload ID Document</CardTitle>
                </div>
                <p className="text-muted-foreground">Submit a clear photo of your government-issued ID</p>
              </CardHeader>
              <CardContent>
                {!showDocument ? (
                  <>
                    <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-8 mb-6 text-center">
                      <Upload className="h-16 w-16 text-primary mx-auto mb-4" />
                      <p className="text-lg font-semibold text-foreground mb-2">
                        Upload your PAN Card, Aadhaar, or Driving License
                      </p>
                      <p className="text-muted-foreground mb-4">
                        Ensure the document is clear and all details are visible
                      </p>
                      <Button variant="outline" size="lg">
                        <Upload className="mr-2 h-4 w-4" />
                        Select Document
                      </Button>
                    </div>
                    <div className="bg-primary/10 rounded-lg p-4 mb-6">
                      <p className="text-sm text-foreground">
                        ✓ Supports PAN, Aadhaar, Driving License, Passport, and Voter ID
                      </p>
                    </div>
                    <Button onClick={handleNextStep} className="w-full" size="lg">
                      Continue with Sample PAN Card
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </>
                ) : (
                  <div className="space-y-4 animate-fade-in">
                    <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-6">
                      <div className="bg-white rounded-lg p-6 shadow-lg max-w-md mx-auto">
                        <div className="border-2 border-primary/20 rounded-lg p-4">
                          <div className="text-center mb-4">
                            <p className="text-xs text-muted-foreground mb-2">INCOME TAX DEPARTMENT</p>
                            <p className="text-sm font-bold text-foreground">PERMANENT ACCOUNT NUMBER</p>
                          </div>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Name:</span>
                              <span className="font-semibold">ROHIT SHARMA</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Father's Name:</span>
                              <span className="font-semibold">GURUNATH SHARMA</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Date of Birth:</span>
                              <span className="font-semibold">20/06/1990</span>
                            </div>
                            <div className="mt-4 text-center">
                              <div className="inline-block bg-primary/10 px-6 py-2 rounded">
                                <span className="text-lg font-bold tracking-wider">ABCD1234E</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/20 animate-scale-in">
                      <p className="text-sm text-foreground text-center">
                        ✓ Document uploaded successfully
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {/* Step 2: OCR Data Extraction */}
          {activeStep === 2 && (
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Step 2: OCR Data Extraction</CardTitle>
                </div>
                <p className="text-muted-foreground">Automatically extract information from the document</p>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-6 mb-6">
                  <div className="flex items-center justify-center mb-4">
                    <FileText className={`h-12 w-12 text-primary ${extractionProgress < 100 ? 'animate-pulse' : ''}`} />
                  </div>
                  <p className="text-center text-muted-foreground mb-4">
                    {extractionProgress < 100 ? 'Extracting data from document...' : 'Extraction complete!'}
                  </p>
                  <div className="w-full bg-muted rounded-full h-2 mb-4">
                    <div 
                      className="bg-primary h-2 rounded-full transition-all duration-300"
                      style={{ width: `${extractionProgress}%` }}
                    />
                  </div>
                </div>
                
                {extractionProgress === 100 && (
                  <div className="space-y-4 mb-6 animate-fade-in">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" value="Rohit Sharma" readOnly className="bg-muted/50" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="dob">Date of Birth</Label>
                        <Input id="dob" value="20/06/1990" readOnly className="bg-muted/50" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="id_number">ID Number</Label>
                        <Input id="id_number" value="ABCD1234E" readOnly className="bg-muted/50" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="father_name">Father's Name</Label>
                      <Input id="father_name" value="Gurunath Sharma" readOnly className="bg-muted/50" />
                    </div>
                  </div>
                )}
                
                {extractionProgress === 100 && (
                  <>
                    <div className="bg-primary/10 rounded-lg p-4 mb-6 animate-scale-in">
                      <p className="text-sm text-foreground">
                        ✓ Data extracted successfully using AI-powered OCR
                      </p>
                    </div>
                    <Button onClick={handleNextStep} className="w-full" size="lg">
                      Proceed to Selfie Capture
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </>
                )}
              </CardContent>
            </Card>
          )}

          {/* Step 3: Selfie Capture */}
          {activeStep === 3 && (
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Camera className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Step 3: Selfie Capture</CardTitle>
                </div>
                <p className="text-muted-foreground">Take a selfie for identity verification</p>
              </CardHeader>
              <CardContent>
                {!showSelfie ? (
                  <>
                    <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-8 mb-6 text-center">
                      <Camera className="h-16 w-16 text-primary mx-auto mb-4" />
                      <p className="text-lg font-semibold text-foreground mb-2">
                        Position your face in the frame
                      </p>
                      <p className="text-muted-foreground mb-4">
                        Make sure your face is clearly visible and well-lit
                      </p>
                      <div className="w-48 h-48 mx-auto bg-muted/30 rounded-lg border-2 border-dashed border-primary/40 flex items-center justify-center">
                        <Camera className="h-12 w-12 text-muted-foreground" />
                      </div>
                    </div>
                    <Button onClick={handleNextStep} className="w-full" size="lg">
                      Capture Selfie
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </>
                ) : (
                  <div className="space-y-4 animate-fade-in">
                    <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-6">
                      <div className="w-64 h-64 mx-auto bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center shadow-lg">
                        <div className="w-56 h-56 bg-background rounded-full flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-32 h-32 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-2">
                              <Camera className="h-16 w-16 text-primary" />
                            </div>
                            <p className="text-sm font-semibold text-foreground">Selfie Captured</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/20 animate-scale-in">
                      <p className="text-sm text-foreground text-center">
                        ✓ Selfie captured successfully
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {/* Step 4: Liveliness Detection */}
          {activeStep === 4 && (
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Step 4: Liveliness Detection</CardTitle>
                </div>
                <p className="text-muted-foreground">Verify you are a real person</p>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-8 mb-6">
                  <div className="flex items-center justify-center mb-6">
                    <div className={`w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center ${livenessChecks.length < 3 ? 'animate-pulse' : 'animate-scale-in'}`}>
                      <Shield className="h-12 w-12 text-primary" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className={`flex items-center gap-3 p-3 bg-background rounded-lg transition-all ${livenessChecks.includes(0) ? 'animate-fade-in' : 'opacity-30'}`}>
                      {livenessChecks.includes(0) ? (
                        <CheckCircle className="h-5 w-5 text-green-600 animate-scale-in" />
                      ) : (
                        <div className="h-5 w-5 rounded-full border-2 border-muted-foreground" />
                      )}
                      <span className={`${livenessChecks.includes(0) ? 'text-foreground' : 'text-muted-foreground'}`}>
                        Face detected successfully
                      </span>
                    </div>
                    <div className={`flex items-center gap-3 p-3 bg-background rounded-lg transition-all ${livenessChecks.includes(1) ? 'animate-fade-in' : 'opacity-30'}`}>
                      {livenessChecks.includes(1) ? (
                        <CheckCircle className="h-5 w-5 text-green-600 animate-scale-in" />
                      ) : (
                        <div className="h-5 w-5 rounded-full border-2 border-muted-foreground" />
                      )}
                      <span className={`${livenessChecks.includes(1) ? 'text-foreground' : 'text-muted-foreground'}`}>
                        Movement verified
                      </span>
                    </div>
                    <div className={`flex items-center gap-3 p-3 bg-background rounded-lg transition-all ${livenessChecks.includes(2) ? 'animate-fade-in' : 'opacity-30'}`}>
                      {livenessChecks.includes(2) ? (
                        <CheckCircle className="h-5 w-5 text-green-600 animate-scale-in" />
                      ) : (
                        <div className="h-5 w-5 rounded-full border-2 border-muted-foreground" />
                      )}
                      <span className={`${livenessChecks.includes(2) ? 'text-foreground' : 'text-muted-foreground'}`}>
                        Liveliness confirmed
                      </span>
                    </div>
                  </div>
                </div>
                {livenessChecks.length === 3 && (
                  <Button onClick={handleNextStep} className="w-full animate-fade-in" size="lg">
                    Continue to Face Matching
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                )}
              </CardContent>
            </Card>
          )}

          {/* Step 5: Face Matching */}
          {activeStep === 5 && (
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <ScanFace className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Step 5: Face Matching</CardTitle>
                </div>
                <p className="text-muted-foreground">Compare selfie with ID document photo</p>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-8 mb-6">
                  <div className="flex items-center justify-center gap-8 mb-6">
                    {/* ID Photo */}
                    <div className="relative">
                      <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center border-2 border-primary/30">
                        <FileText className="h-16 w-16 text-primary" />
                      </div>
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-background px-2 py-1 rounded text-xs font-medium">
                        ID Photo
                      </div>
                    </div>

                    {/* Matching Animation */}
                    <div className="flex flex-col items-center">
                      <div className="relative h-24 flex items-center">
                        <div className={`absolute inset-0 flex items-center justify-center ${matchProgress < 98 ? 'animate-pulse' : ''}`}>
                          <div className="flex gap-1">
                            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                          </div>
                        </div>
                        <ScanFace className="h-12 w-12 text-primary relative z-10" />
                      </div>
                      <div className="w-full bg-muted rounded-full h-1.5 mt-2">
                        <div 
                          className="bg-primary h-1.5 rounded-full transition-all duration-100"
                          style={{ width: `${matchProgress}%` }}
                        />
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">
                        {matchProgress < 98 ? 'Analyzing...' : 'Match complete'}
                      </p>
                    </div>

                    {/* Selfie Photo */}
                    <div className="relative">
                      <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center border-2 border-primary/30">
                        <Camera className="h-16 w-16 text-primary" />
                      </div>
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-background px-2 py-1 rounded text-xs font-medium">
                        Selfie
                      </div>
                    </div>
                  </div>

                  {matchProgress >= 98 && (
                    <div className="bg-background rounded-lg p-6 text-center animate-scale-in">
                      <p className="text-5xl font-bold text-primary mb-2">98.5%</p>
                      <p className="text-sm text-muted-foreground">Match Confidence Score</p>
                    </div>
                  )}
                </div>
                
                {matchProgress >= 98 && (
                  <>
                    <div className="bg-primary/10 rounded-lg p-4 mb-6 animate-fade-in">
                      <p className="text-sm text-foreground">
                        ✓ Face match successful - Identity verified
                      </p>
                    </div>
                    <Button onClick={handleNextStep} className="w-full" size="lg">
                      Proceed to Address Verification
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </>
                )}
              </CardContent>
            </Card>
          )}

          {/* Step 6: Address Verification */}
          {activeStep === 6 && (
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Step 6: Address Verification</CardTitle>
                </div>
                <p className="text-muted-foreground">Verify address details from the ID document</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-6">
                  <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    <Input id="address" value="123, Marine Drive, Mumbai" readOnly className="bg-muted/50" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input id="city" value="Mumbai" readOnly className="bg-muted/50" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">State</Label>
                      <Input id="state" value="Maharashtra" readOnly className="bg-muted/50" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="pincode">Pincode</Label>
                      <Input id="pincode" value="400001" readOnly className="bg-muted/50" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="country">Country</Label>
                      <Input id="country" value="India" readOnly className="bg-muted/50" />
                    </div>
                  </div>
                </div>
                <div className="bg-primary/10 rounded-lg p-4 mb-6">
                  <p className="text-sm text-foreground">
                    ✓ Address verified successfully
                  </p>
                </div>
                <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 border-2 border-green-500/20 rounded-lg p-6 mb-6 text-center">
                  <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4 animate-scale-in">
                    <CheckCircle className="h-12 w-12 text-green-600" />
                  </div>
                  <p className="text-xl font-semibold text-foreground mb-2">
                    ✓ Verification Complete!
                  </p>
                  <p className="text-muted-foreground">
                    All checks passed successfully
                  </p>
                </div>
                <Button onClick={resetJourney} variant="outline" className="w-full" size="lg">
                  Restart Journey
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default IDVerificationWorkflow;
