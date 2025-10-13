import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CategoryCard from '@/components/CategoryCard';
import { categories } from '@/data/apiData';

const ProductPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const productTitles: Record<string, string> = {
    'id-proof': 'ID Proof Solutions',
    'tamper-proof': 'Tamper Proof Solutions',
    'bounce-proof': 'Bounce Proof Solutions',
    'bsa': 'Bank Statement Analyzer',
  };

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

      <div className="container mx-auto px-4 py-8">
        <Button
          variant="ghost"
          className="mb-6"
          onClick={() => navigate('/home')}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Products
        </Button>

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            {productTitles[productId || ''] || 'Product Solutions'}
          </h1>
          <p className="text-muted-foreground">
            Explore API categories and test live demonstrations
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              name={category.name}
              description={category.description}
              icon={category.icon}
              count={category.count}
              color={category.color}
              onClick={() => navigate(`/category/${category.id}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
