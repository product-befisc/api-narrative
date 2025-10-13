import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import CategoryCard from '@/components/CategoryCard';
import { categories } from '@/data/apiData';

const Index = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar onSearch={setSearchQuery} />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Welcome to API Demo Portal
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Interactive showcase of 150+ APIs for KYC, KYB, Utilities, Mobile Intelligence, and Financial verification services
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {filteredCategories.map((category) => (
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

        <div className="grid gap-6 md:grid-cols-3 text-center">
          <div className="p-6 rounded-lg bg-gradient-card border border-border">
            <div className="text-3xl font-bold text-primary mb-2">150+</div>
            <div className="text-sm text-muted-foreground">Total APIs</div>
          </div>
          <div className="p-6 rounded-lg bg-gradient-card border border-border">
            <div className="text-3xl font-bold text-success mb-2">99.9%</div>
            <div className="text-sm text-muted-foreground">Uptime</div>
          </div>
          <div className="p-6 rounded-lg bg-gradient-card border border-border">
            <div className="text-3xl font-bold text-info mb-2">&lt;200ms</div>
            <div className="text-sm text-muted-foreground">Avg Response Time</div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
