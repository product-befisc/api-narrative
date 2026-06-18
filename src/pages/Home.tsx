import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import Navbar from '@/components/Navbar';
import {
  Briefcase,
  ShieldCheck,
  Building2,
  AlertTriangle,
  Car,
  Banknote,
  Phone,
  Flame,
  CreditCard,
  User,
  Building,
  MapPin,
  type LucideIcon,
} from 'lucide-react';

type SubProduct = {
  name: string;
  description: string;
  path: string;
};

type Suite = {
  id: string;
  title: string;
  tagline: string;
  icon: LucideIcon;
  items: SubProduct[];
};

const suites: Suite[] = [
  {
    id: 'employment-check',
    title: 'Employment Check',
    tagline: 'Verify employment history and UAN records',
    icon: Briefcase,
    items: [
      { name: 'Employment Verification', description: 'UAN & employment history verification', path: '/product/id-proof/employment-verification' },
      { name: 'UAN Details', description: 'Employment history via UAN', path: '/product/id-proof/uan-history' },
    ],
  },
  {
    id: 'customer-kyc',
    title: 'Customer Verification (KYC)',
    tagline: 'Identity verification for individuals',
    icon: ShieldCheck,
    items: [
      { name: 'ID Verification Workflow', description: 'Complete verification flow', path: '/id-verification-workflow' },
      { name: 'Digilocker Authentication', description: 'Document verification via Digilocker', path: '/product/id-proof/digilocker-aadhaar' },
      { name: 'PAN Profiling', description: 'PAN card verification & profiling', path: '/product/id-proof/pan-verification' },
      { name: 'Driving License', description: 'DL verification & details', path: '/product/id-proof/driving-license' },
      { name: 'Voter ID', description: 'Voter card verification', path: '/product/id-proof/voter-id-verification' },
      { name: 'Passport Verification', description: 'Passport authenticity check', path: '/product/id-proof/passport-verification' },
      { name: 'Customer Profiling', description: 'Profile insights via mobile', path: '/product/id-proof/customer-profiling' },
    ],
  },
  {
    id: 'business-kyb',
    title: 'Business Verification (KYB)',
    tagline: 'Validate companies and entities',
    icon: Building2,
    items: [
      { name: 'Business Profiling', description: 'Company data visualization', path: '/product/id-proof/business-profiling' },
    ],
  },
  {
    id: 'fraud-indicator',
    title: 'Fraud Indicator',
    tagline: 'Detect risk, fraud and document tampering',
    icon: AlertTriangle,
    items: [
      { name: 'BSA', description: 'Bank Statement Analyzer — financial statements analyzed', path: '/product/bsa' },
      { name: 'BounceProof', description: 'Email validation that keeps your network clean', path: '/product/bounce-proof' },
      { name: 'TamperProof', description: 'Document integrity, verified automatically', path: '/product/tamper-proof' },
    ],
  },
  {
    id: 'vehicle-verification',
    title: 'Vehicle Verification',
    tagline: 'RC, chassis and challan intelligence',
    icon: Car,
    items: [
      { name: 'Vehicle Verification', description: 'Complete vehicle verification suite', path: '/product/id-proof/vehicle-verification' },
      { name: 'Chassis to RC', description: 'Map chassis number to RC details', path: '/product/id-proof/chassis-to-rc' },
      { name: 'Challan Details', description: 'Traffic challan lookup', path: '/product/id-proof/challan-details' },
      { name: 'RC Advance', description: 'Advanced RC details lookup', path: '/product/id-proof/rc-advance' },
    ],
  },
  {
    id: 'financial-check',
    title: 'Financial Check',
    tagline: 'Bank account validation and financial signals',
    icon: Banknote,
    items: [
      { name: 'Bank Verification — Penny Drop', description: 'Monetary bank account verification', path: '/product/id-proof/bank-verification-pennydrop' },
      { name: 'Bank Verification — Pennyless', description: 'Non-monetary bank account verification', path: '/product/id-proof/bank-verification-pennyless' },
    ],
  },
  {
    id: 'mobile-lookup',
    title: 'Mobile Number Lookup',
    tagline: 'Insights and address tracing via mobile',
    icon: Phone,
    items: [
      { name: 'Address Tracing', description: 'Address mapping via mobile', path: '/product/id-proof/address-tracing' },
      { name: 'Customer Profiling', description: 'Profile insights via mobile', path: '/product/id-proof/customer-profiling' },
    ],
  },
  {
    id: 'utility-verification',
    title: 'Utility Verification',
    tagline: 'Utility connection checks',
    icon: Flame,
    items: [
      { name: 'LPG Verification', description: 'LPG connection via mobile', path: '/product/id-proof/lpg-verification' },
    ],
  },
];

const solutions = [
  { name: 'Vehicle Verification', icon: Car, description: 'Complete vehicle verification with RC, Challan & Chassis', path: '/product/id-proof/vehicle-verification' },
  { name: 'PAN Profiling', icon: CreditCard, description: 'PAN card verification & profiling', path: '/product/id-proof/pan-verification' },
  { name: 'Customer Profiling', icon: User, description: 'Profile insights via mobile', path: '/product/id-proof/customer-profiling' },
  { name: 'Business Profiling', icon: Building, description: 'Company data visualization', path: '/product/id-proof/business-profiling' },
  { name: 'Address Tracing', icon: MapPin, description: 'Address mapping via mobile', path: '/product/id-proof/address-tracing' },
  { name: 'Employment Verification', icon: Briefcase, description: 'UAN & employment history verification', path: '/product/id-proof/employment-verification' },
];

const Home = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const defaultTab = searchParams.get('tab') || 'products';
  const [openSuiteId, setOpenSuiteId] = useState<string | null>(null);
  const openSuite = suites.find((s) => s.id === openSuiteId) || null;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
            Explore the Platform
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse our product suites or jump into a ready-made solution.
          </p>
        </div>

        <Tabs defaultValue={defaultTab} className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-10">
            <TabsTrigger value="products" className="text-base">Products</TabsTrigger>
            <TabsTrigger value="solutions" className="text-base">Solutions</TabsTrigger>
          </TabsList>

          <TabsContent value="products" className="mt-0">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Product Suites</h2>
            <div className="grid gap-6 grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
              {suites.map((suite) => {
                const Icon = suite.icon;
                return (
                  <Card
                    key={suite.id}
                    className="p-6 cursor-pointer border-2 hover:border-primary hover:shadow-lg transition-all hover:-translate-y-1 group"
                    onClick={() => setOpenSuiteId(suite.id)}
                  >
                    <div className="flex flex-col items-start gap-3">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground leading-tight mb-1">{suite.title}</h3>
                        <p className="text-xs text-muted-foreground leading-snug">{suite.tagline}</p>
                      </div>
                      <span className="text-[11px] text-primary font-medium mt-1">
                        {suite.items.length} {suite.items.length === 1 ? 'product' : 'products'} →
                      </span>
                    </div>
                  </Card>
                );
              })}
            </div>

            <Dialog open={openSuiteId !== null} onOpenChange={(o) => !o && setOpenSuiteId(null)}>
              <DialogContent className="max-w-3xl">
                {openSuite && (
                  <>
                    <DialogHeader>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <openSuite.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div className="text-left">
                          <DialogTitle className="text-2xl">{openSuite.title}</DialogTitle>
                          <DialogDescription>{openSuite.tagline}</DialogDescription>
                        </div>
                      </div>
                    </DialogHeader>
                    <div className="grid gap-3 sm:grid-cols-2 mt-4">
                      {openSuite.items.map((item) => (
                        <Card
                          key={item.path + item.name}
                          className="p-4 cursor-pointer border hover:border-primary hover:shadow-md transition-all"
                          onClick={() => {
                            setOpenSuiteId(null);
                            navigate(item.path);
                          }}
                        >
                          <h4 className="font-semibold text-foreground text-sm mb-1">{item.name}</h4>
                          <p className="text-xs text-muted-foreground leading-snug">{item.description}</p>
                        </Card>
                      ))}
                    </div>
                  </>
                )}
              </DialogContent>
            </Dialog>
          </TabsContent>


          <TabsContent value="solutions" className="mt-0">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Our Solutions</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              {solutions.map((solution, index) => {
                const Icon = solution.icon;
                return (
                  <Card
                    key={index}
                    className="p-6 hover:shadow-lg transition-all hover:scale-[1.02] cursor-pointer border-2 hover:border-primary group"
                    onClick={() => navigate(solution.path)}
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
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Home;
