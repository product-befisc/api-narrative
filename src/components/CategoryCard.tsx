import { LucideIcon } from 'lucide-react';
import * as Icons from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface CategoryCardProps {
  name: string;
  description: string;
  icon: string;
  count: number;
  color: string;
  onClick: () => void;
}

const CategoryCard = ({ name, description, icon, count, color, onClick }: CategoryCardProps) => {
  const IconComponent = (Icons as any)[icon] as LucideIcon;

  return (
    <Card
      className="group relative overflow-hidden border-border bg-gradient-card p-6 cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
      onClick={onClick}
    >
      <div className={`absolute top-0 right-0 h-32 w-32 bg-gradient-to-br ${color} opacity-10 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform`} />
      
      <div className="relative">
        <div className="flex items-start justify-between mb-4">
          <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${color} shadow-md`}>
            {IconComponent && <IconComponent className="h-6 w-6 text-white" />}
          </div>
          <Badge variant="secondary" className="font-semibold">
            {count} APIs
          </Badge>
        </div>

        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {name}
        </h3>
        <p className="text-sm text-muted-foreground">
          {description}
        </p>

        <div className="mt-4 flex items-center text-sm font-medium text-primary group-hover:gap-2 transition-all">
          <span>Explore APIs</span>
          <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
        </div>
      </div>
    </Card>
  );
};

export default CategoryCard;
