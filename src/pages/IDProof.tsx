import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Upload, ScanFace, CheckCircle, Shield, FileText, Car, CreditCard, User, Building, MapPin, FileCheck, Phone, Scan } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import Navbar from '@/components/Navbar';

const IDProof = () => {
  const navigate = useNavigate();

  const verificationSteps = [
    { label: 'Upload ID', icon: Upload, progress: 100 },
    { label: 'OCR Extract', icon: FileText, progress: 100 },
    { label: 'Face Match', icon: ScanFace, progress: 100 },
    { label: 'Liveliness', icon: Shield, progress: 100 },
    { label: 'Verified', icon: CheckCircle, progress: 100 },
  ];

  const products = [
    { name: 'ID Verification Workflow', icon: Shield, description: 'Complete verification flow' },
    { name: 'Digilocker Aadhaar', icon: FileText, description: 'Aadhaar verification via Digilocker' },
    { name: 'Aadhaar Workflow', icon: FileCheck, description: 'End-to-end Aadhaar verification' },
    { name: 'PAN Verification', icon: CreditCard, description: 'PAN card verification & profiling' },
    { name: 'Driving License', icon: Car, description: 'DL verification & details' },
    { name: 'Voter ID', icon: User, description: 'Voter card verification' },
    { name: 'Passport', icon: FileText, description: 'Passport verification' },
    { name: 'LPG Verification', icon: Phone, description: 'LPG connection via mobile' },
    { name: 'Customer Profiling', icon: User, description: 'Profile insights via mobile' },
    { name: 'Business Profiling', icon: Building, description: 'Company data visualization' },
    { name: 'Address Tracing', icon: MapPin, description: 'Address mapping via mobile' },
    { name: 'RC Advanced V3', icon: Car, description: 'Vehicle registration verification' },
    { name: 'Challan Details', icon: FileCheck, description: 'Traffic violation records' },
    { name: 'Chassis to RC V2', icon: Scan, description: 'Vehicle chassis verification' },
    { name: 'Bank Verification - Penny Drop', icon: CreditCard, description: 'Bank account verification' },
    { name: 'Bank Verification - Pennyless', icon: CreditCard, description: 'Non-monetary verification' },
    { name: 'UAN History V3', icon: FileText, description: 'Employment history via UAN' },
    { name: 'Captcha Reader', icon: Scan, description: 'Automated captcha solving' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <Button
          variant="ghost"
          className="mb-6"
          onClick={() => navigate('/home')}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Products
        </Button>

        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-foreground mb-4">
            Digital identity verification made instant.
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Verify IDs, faces, and liveliness in seconds. Confirm real users before fraud enters your system.
          </p>
        </div>

        {/* Verification Timeline */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Verification Flow</h2>
          <div className="grid grid-cols-5 gap-4 max-w-4xl mx-auto">
            {verificationSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-success flex items-center justify-center mb-3">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <p className="text-sm font-medium text-center">{step.label}</p>
                  <CheckCircle className="h-5 w-5 text-success mt-2" />
                </div>
              );
            })}
          </div>
          <Progress value={100} className="max-w-4xl mx-auto mt-6" />
        </div>

        {/* Result Card */}
        <Card className="max-w-2xl mx-auto p-8 mb-16 border-2 border-success">
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
          </div>
        </Card>

        {/* Product Cards */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Available Products</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => {
              const Icon = product.icon;
              return (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-all hover:scale-[1.02] cursor-pointer border-2 hover:border-primary group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{product.name}</h3>
                      <p className="text-sm text-muted-foreground">{product.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IDProof;
