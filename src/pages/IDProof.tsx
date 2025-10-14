import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Shield, FileText, Car, CreditCard, User, Building, MapPin, FileCheck, Phone, Scan } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navbar from '@/components/Navbar';

const IDProof = () => {
  const navigate = useNavigate();

  const solutions = [
    { name: 'PAN Verification', icon: CreditCard, description: 'PAN card verification & profiling', path: '/product/id-proof/pan-verification', inputLabel: 'Enter PAN Number', placeholder: 'e.g., ABCDE1234F' },
    { name: 'Customer Profiling', icon: User, description: 'Profile insights via mobile', path: '/product/id-proof/customer-profiling', inputLabel: 'Enter Mobile Number', placeholder: 'e.g., 9876543210' },
    { name: 'Business Profiling', icon: Building, description: 'Company data visualization', path: '/product/id-proof/business-profiling', inputLabel: 'Enter Company Name', placeholder: 'e.g., ABC Pvt Ltd' },
    { name: 'Address Tracing', icon: MapPin, description: 'Address mapping via mobile', path: '/product/id-proof/address-tracing', inputLabel: 'Enter Mobile Number', placeholder: 'e.g., 9876543210' },
  ];

  const products = [
    { name: 'ID Verification Workflow', icon: Shield, description: 'Complete verification flow', path: '/id-verification-workflow', inputLabel: 'Enter ID Number', placeholder: 'e.g., ID12345' },
    { name: 'Digilocker Aadhaar', icon: FileText, description: 'Aadhaar verification via Digilocker', inputLabel: 'Enter Aadhaar Number', placeholder: 'e.g., 1234 5678 9012' },
    { name: 'Aadhaar Workflow', icon: FileCheck, description: 'End-to-end Aadhaar verification', inputLabel: 'Enter Aadhaar Number', placeholder: 'e.g., 1234 5678 9012' },
    { name: 'Driving License', icon: Car, description: 'DL verification & details', path: '/product/id-proof/driving-license', inputLabel: 'Enter DL Number', placeholder: 'e.g., MH0120210012345' },
    { name: 'Voter ID', icon: User, description: 'Voter card verification', path: '/product/id-proof/voter-id-verification', inputLabel: 'Enter Voter ID Number', placeholder: 'e.g., ABC1234567' },
    { name: 'Passport', icon: FileText, description: 'Passport verification', path: '/product/id-proof/passport-verification', inputLabel: 'Enter Passport Number', placeholder: 'e.g., A1234567' },
    { name: 'LPG Verification', icon: Phone, description: 'LPG connection via mobile', path: '/product/id-proof/lpg-verification', inputLabel: 'Enter Mobile Number', placeholder: 'e.g., 9876543210' },
    { name: 'RC Advanced V3', icon: Car, description: 'Vehicle registration verification', path: '/product/id-proof/rc-advance', inputLabel: 'Enter Vehicle Number', placeholder: 'e.g., MH12AB1234' },
    { name: 'Challan Details', icon: FileCheck, description: 'Traffic violation records', path: '/product/id-proof/challan-details', inputLabel: 'Enter Vehicle Number', placeholder: 'e.g., MH12AB1234' },
    { name: 'Chassis to RC V2', icon: Scan, description: 'Vehicle chassis verification', path: '/product/id-proof/chassis-to-rc', inputLabel: 'Enter Chassis Number', placeholder: 'e.g., MA3FEB81S00000000' },
    { name: 'Bank Verification - Penny Drop', icon: CreditCard, description: 'Bank account verification', path: '/product/id-proof/bank-verification-pennydrop', inputLabel: 'Enter Account Number', placeholder: 'e.g., 1234567890' },
    { name: 'Bank Verification - Pennyless', icon: CreditCard, description: 'Non-monetary verification', path: '/product/id-proof/bank-verification-pennyless', inputLabel: 'Enter Account Number', placeholder: 'e.g., 1234567890' },
    { name: 'UAN History V3', icon: FileText, description: 'Employment history via UAN', path: '/product/id-proof/uan-history', inputLabel: 'Enter UAN Number', placeholder: 'e.g., 123456789012' },
    { name: 'Captcha Reader', icon: Scan, description: 'Automated captcha solving', path: '/product/id-proof/captcha-reader', inputLabel: 'Upload Captcha Image', placeholder: 'Select image file' },
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

        {/* Tabs Section */}
        <Tabs defaultValue="products" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="products" className="text-base">Products</TabsTrigger>
            <TabsTrigger value="solutions" className="text-base">Solutions</TabsTrigger>
          </TabsList>

          <TabsContent value="products" className="mt-0">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Our Products</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {products.map((product, index) => {
                  const Icon = product.icon;
                  return (
                    <Card
                      key={index}
                      className="p-6 hover:shadow-lg transition-all border-2 hover:border-primary group bg-gradient-card"
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground mb-1">{product.name}</h3>
                          <p className="text-sm text-muted-foreground">{product.description}</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label className="text-sm font-medium text-foreground">{product.inputLabel}</Label>
                        <Input 
                          placeholder={product.placeholder}
                          className="w-full"
                          onClick={(e) => e.stopPropagation()}
                        />
                      </div>
                      {product.path && (
                        <Button 
                          className="w-full mt-4" 
                          variant="outline"
                          onClick={() => navigate(product.path)}
                        >
                          Verify Now
                        </Button>
                      )}
                    </Card>
                  );
                })}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="solutions" className="mt-0">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Our Solutions</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {solutions.map((solution, index) => {
                  const Icon = solution.icon;
                  return (
                    <Card
                      key={index}
                      className="p-6 hover:shadow-lg transition-all border-2 hover:border-primary group bg-gradient-card"
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground mb-1">{solution.name}</h3>
                          <p className="text-sm text-muted-foreground">{solution.description}</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label className="text-sm font-medium text-foreground">{solution.inputLabel}</Label>
                        <Input 
                          placeholder={solution.placeholder}
                          className="w-full"
                          onClick={(e) => e.stopPropagation()}
                        />
                      </div>
                      <Button 
                        className="w-full mt-4" 
                        variant="outline"
                        onClick={() => navigate(solution.path)}
                      >
                        Verify Now
                      </Button>
                    </Card>
                  );
                })}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default IDProof;
