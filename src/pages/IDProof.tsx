import { useNavigate, useSearchParams } from 'react-router-dom';
import { ArrowLeft, Shield, FileText, Car, CreditCard, User, Building, MapPin, FileCheck, Phone, Scan, Briefcase, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navbar from '@/components/Navbar';

const IDProof = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const defaultTab = searchParams.get('tab') || 'products';

  const solutions = [
    { name: 'Vehicle Verification', icon: Car, description: 'Complete vehicle verification with RC, Challan & Chassis', path: '/product/id-proof/vehicle-verification' },
    { name: 'PAN Profiling', icon: CreditCard, description: 'PAN card verification & profiling', path: '/product/id-proof/pan-verification' },
    { name: 'Customer Profiling', icon: User, description: 'Profile insights via mobile', path: '/product/id-proof/customer-profiling' },
    { name: 'Business Profiling', icon: Building, description: 'Company data visualization', path: '/product/id-proof/business-profiling' },
    { name: 'Address Tracing', icon: MapPin, description: 'Address mapping via mobile', path: '/product/id-proof/address-tracing' },
    { name: 'Employment Verification', icon: Briefcase, description: 'UAN & employment history verification', path: '/product/id-proof/employment-verification' },
  ];

  const products = [
    { name: 'ID Verification Workflow', icon: Shield, description: 'Complete verification flow', path: '/id-verification-workflow' },
    { name: 'Digilocker Aadhaar', icon: FileText, description: 'Aadhaar verification via Digilocker', path: '/product/id-proof/digilocker-aadhaar' },
    { name: 'Driving License', icon: Car, description: 'DL verification & details', path: '/product/id-proof/driving-license' },
    { name: 'Voter ID', icon: User, description: 'Voter card verification', path: '/product/id-proof/voter-id-verification' },
    { name: 'LPG Verification', icon: Phone, description: 'LPG connection via mobile', path: '/product/id-proof/lpg-verification' },
    { name: 'Bank Verification - Penny Drop', icon: CreditCard, description: 'Bank account verification', path: '/product/id-proof/bank-verification-pennydrop' },
    { name: 'Bank Verification - Pennyless', icon: CreditCard, description: 'Non-monetary verification', path: '/product/id-proof/bank-verification-pennyless' },
    { name: 'UAN Details', icon: FileText, description: 'Employment history via UAN', path: '/product/id-proof/uan-history' },
    { name: 'Captcha Reader', icon: Scan, description: 'Automated captcha solving', path: '/product/id-proof/captcha-reader' },
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
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
            Verify IDs, faces, and liveliness in seconds. Confirm real users before fraud enters your system.
          </p>
          <Button
            size="lg"
            onClick={() => navigate('/product/id-proof/api-catalog')}
            className="gap-2"
          >
            <BookOpen className="h-5 w-5" />
            Browse All APIs
          </Button>
        </div>

        {/* Tabs Section */}
        <Tabs defaultValue={defaultTab} className="w-full">
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
                      className="p-6 hover:shadow-lg transition-all hover:scale-[1.02] cursor-pointer border-2 hover:border-primary group"
                      onClick={() => product.path && navigate(product.path)}
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                          <Icon className="h-6 w-6 text-primary" />
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
                      className="p-6 hover:shadow-lg transition-all hover:scale-[1.02] cursor-pointer border-2 hover:border-primary group"
                      onClick={() => solution.path && navigate(solution.path)}
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">{solution.name}</h3>
                          <p className="text-sm text-muted-foreground">{solution.description}</p>
                        </div>
                      </div>
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
