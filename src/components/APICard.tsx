import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

interface APICardProps {
  name: string;
  description: string;
  onClick: () => void;
}

const APICard = ({ name, description, onClick }: APICardProps) => {
  return (
    <Card
      className="group p-5 cursor-pointer transition-all duration-300 hover:shadow-md hover:border-primary/50 bg-card"
      onClick={onClick}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
              {name}
            </h3>
            <Badge variant="outline" className="text-xs">Live</Badge>
          </div>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>
        </div>
        <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
      </div>
    </Card>
  );
};

export default APICard;
