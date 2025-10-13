import { useNavigate } from 'react-router-dom';
import { ShieldCheck, FileCheck, MailCheck, FileBarChart } from 'lucide-react';
import { Card } from '@/components/ui/card';
import Navbar from '@/components/Navbar';

const Home = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 'id-proof',
      title: 'ID Proof',
      description: 'Digital identity verification made instant',
      icon: ShieldCheck,
    },
    {
      id: 'bounce-proof',
      title: 'Bounce Proof',
      description: 'Email validation that keeps your network clean',
      icon: MailCheck,
    },
    {
      id: 'tamper-proof',
      title: 'Tamper Proof',
      description: 'Document integrity, verified automatically',
      icon: FileCheck,
    },
    {
      id: 'bsa',
      title: 'BSA',
      description: 'Bank Statement Analyzer - Financial statements analyzed',
      icon: FileBarChart,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-4">
            Product Dashboard
          </h1>
          <p className="text-xl text-muted-foreground">
            Choose a product to explore its capabilities
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <Card
                key={product.id}
                className="cursor-pointer hover:shadow-xl transition-all hover:scale-[1.02] border-2 hover:border-primary p-8 group"
                onClick={() => navigate(`/product/${product.id}`)}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {product.description}
                  </p>
                  <span className="text-primary font-semibold group-hover:underline">
                    Explore →
                  </span>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
