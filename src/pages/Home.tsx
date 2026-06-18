import { useNavigate, useSearchParams } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
            Product Suites
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Eight focused suites covering the full verification stack — pick a suite to explore its APIs.
          </p>
        </div>

        <div className="space-y-10 max-w-6xl mx-auto">
          {suites.map((suite) => {
            const Icon = suite.icon;
            return (
              <section key={suite.id}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground leading-tight">{suite.title}</h2>
                    <p className="text-sm text-muted-foreground">{suite.tagline}</p>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {suite.items.map((item) => (
                    <Card
                      key={item.path + item.name}
                      className="p-4 cursor-pointer border hover:border-primary hover:shadow-md transition-all"
                      onClick={() => navigate(item.path)}
                    >
                      <h3 className="font-semibold text-foreground text-sm mb-1">{item.name}</h3>
                      <p className="text-xs text-muted-foreground leading-snug">{item.description}</p>
                    </Card>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
