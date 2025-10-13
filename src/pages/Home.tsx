import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Shield, Mail, FileCheck, BarChart3 } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 'id-proof',
      name: 'ID Proof',
      description: 'Comprehensive identity verification with OCR, face match, and liveliness detection',
      icon: Shield,
      gradient: 'from-primary to-accent',
    },
    {
      id: 'tamper-proof',
      name: 'Tamper Proof',
      description: 'Advanced document tampering detection with metadata analysis and signature validation',
      icon: FileCheck,
      gradient: 'from-accent to-primary',
    },
    {
      id: 'bounce-proof',
      name: 'Bounce Proof',
      description: 'Email verification and validation with domain checks and deliverability scoring',
      icon: Mail,
      gradient: 'from-primary to-info',
    },
    {
      id: 'bsa',
      name: 'BSA',
      description: 'Bank Statement Analyzer with behavioral scoring and spending pattern analysis',
      icon: BarChart3,
      gradient: 'from-info to-primary',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="border-b border-border bg-card/95 backdrop-blur">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary">
                <span className="text-lg font-bold text-white">B</span>
              </div>
              <h1 className="text-xl font-bold text-foreground">BeFiSc</h1>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Choose Your Product
          </h1>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Select a product to explore live demos with visual responses and real-time data intelligence
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="container mx-auto px-4 pb-20">
        <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <Card
                key={product.id}
                className="group relative overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-[1.02] border-2 hover:border-primary bg-card p-8"
                onClick={() => navigate(`/product/${product.id}`)}
              >
                <div className="relative z-10">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${product.gradient} mb-6`}>
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </Card>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Home;
