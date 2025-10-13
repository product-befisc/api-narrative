import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Shield, FileText, Car, CreditCard, User, Building, MapPin, FileCheck, Phone, Scan } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Navbar from '@/components/Navbar';

const IDProof = () => {
  const navigate = useNavigate();

  const products = [
    { name: 'ID Verification Workflow', icon: Shield, description: 'Complete verification flow', path: '/id-verification-workflow' },
    { name: 'Digilocker Aadhaar', icon: FileText, description: 'Aadhaar verification via Digilocker' },
    { name: 'Aadhaar Workflow', icon: FileCheck, description: 'End-to-end Aadhaar verification' },
    { name: 'PAN Verification', icon: CreditCard, description: 'PAN card verification & profiling', path: '/product/id-proof/pan-verification' },
    { name: 'Driving License', icon: Car, description: 'DL verification & details', path: '/product/id-proof/driving-license' },
    { name: 'Voter ID', icon: User, description: 'Voter card verification' },
    { name: 'Passport', icon: FileText, description: 'Passport verification' },
    { name: 'LPG Verification', icon: Phone, description: 'LPG connection via mobile' },
    { name: 'Customer Profiling', icon: User, description: 'Profile insights via mobile', path: '/product/id-proof/customer-profiling' },
    { name: 'Business Profiling', icon: Building, description: 'Company data visualization', path: '/product/id-proof/business-profiling' },
    { name: 'Address Tracing', icon: MapPin, description: 'Address mapping via mobile', path: '/product/id-proof/address-tracing' },
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
                  onClick={() => product.path && navigate(product.path)}
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
