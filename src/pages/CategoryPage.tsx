import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Search } from 'lucide-react';
import Navbar from '@/components/Navbar';
import APICard from '@/components/APICard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { categories, apiEndpoints } from '@/data/apiData';
import { useState } from 'react';

const CategoryPage = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const category = categories.find(c => c.id === categoryId);
  const apis = apiEndpoints
    .filter(api => api.category === categoryId)
    .filter(api => 
      api.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      api.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

  if (!category) {
    return <div>Category not found</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate('/home')}
          className="mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Products
        </Button>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">{category.name}</h1>
          <p className="text-muted-foreground mb-6">{category.description}</p>

          {/* Search Bar */}
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search APIs..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {apis.map((api) => (
            <APICard
              key={api.id}
              name={api.name}
              description={api.description}
              onClick={() => navigate(`/api/${api.id}`)}
            />
          ))}
        </div>

        {apis.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No APIs found matching your search.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default CategoryPage;
