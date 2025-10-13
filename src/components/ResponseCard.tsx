import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, AlertCircle, Mail, MapPin, Calendar, Phone, User, Building2, CreditCard, TrendingUp } from 'lucide-react';

interface ResponseCardProps {
  data: any;
  apiName: string;
}

const ResponseCard = ({ data, apiName }: ResponseCardProps) => {
  const renderValue = (value: any): string => {
    if (typeof value === 'boolean') return value ? 'Yes' : 'No';
    if (Array.isArray(value)) return value.join(', ');
    if (typeof value === 'object' && value !== null) {
      return Object.values(value).join(', ');
    }
    return String(value);
  };

  const getStatusBadge = (verified: boolean) => {
    return verified ? (
      <Badge className="bg-success text-success-foreground">
        <CheckCircle2 className="h-3 w-3 mr-1" />
        Verified
      </Badge>
    ) : (
      <Badge variant="destructive">
        <AlertCircle className="h-3 w-3 mr-1" />
        Unverified
      </Badge>
    );
  };

  const getIcon = (key: string) => {
    const iconMap: { [key: string]: any } = {
      name: User,
      email: Mail,
      mobile: Phone,
      address: MapPin,
      dob: Calendar,
      companyName: Building2,
      gstin: CreditCard,
      creditScore: TrendingUp,
    };
    
    for (const [iconKey, IconComponent] of Object.entries(iconMap)) {
      if (key.toLowerCase().includes(iconKey.toLowerCase())) {
        return <IconComponent className="h-4 w-4 text-primary" />;
      }
    }
    return null;
  };

  return (
    <Card className="p-6 bg-gradient-card border-border">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-foreground mb-1">API Response</h3>
          <p className="text-sm text-muted-foreground">{apiName}</p>
        </div>
        {data.verified !== undefined && getStatusBadge(data.verified)}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {Object.entries(data).map(([key, value]) => {
          if (key === 'verified') return null;
          
          // Special handling for score
          if (key === 'score') {
            const score = Number(value);
            return (
              <div key={key} className="col-span-full">
                <Card className="p-4 bg-background border-border">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-foreground capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </span>
                    <span className="text-2xl font-bold text-primary">{score}/100</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-primary transition-all duration-500"
                      style={{ width: `${score}%` }}
                    />
                  </div>
                </Card>
              </div>
            );
          }

          // Special handling for arrays
          if (Array.isArray(value) && key !== 'directors') {
            return (
              <div key={key} className="col-span-full">
                <Card className="p-4 bg-background border-border">
                  <div className="flex items-center gap-2 mb-3">
                    {getIcon(key)}
                    <span className="text-sm font-medium text-foreground capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </span>
                    <Badge variant="secondary" className="ml-auto">{value.length} found</Badge>
                  </div>
                  <div className="space-y-2">
                    {value.map((item, idx) => (
                      <div key={idx} className="text-sm text-muted-foreground pl-6 py-1 border-l-2 border-primary/30">
                        {typeof item === 'object' ? JSON.stringify(item) : item}
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            );
          }

          // Special handling for directors array
          if (key === 'directors' && Array.isArray(value)) {
            return (
              <div key={key} className="col-span-full">
                <Card className="p-4 bg-background border-border">
                  <div className="flex items-center gap-2 mb-3">
                    <User className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-foreground">Directors</span>
                    <Badge variant="secondary" className="ml-auto">{value.length} total</Badge>
                  </div>
                  <div className="space-y-3">
                    {value.map((director: any, idx) => (
                      <div key={idx} className="p-3 bg-muted/50 rounded-lg">
                        <div className="font-medium text-foreground">{director.name}</div>
                        <div className="text-xs text-muted-foreground mt-1">
                          {director.designation} • DIN: {director.din}
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            );
          }

          // Special handling for nested objects
          if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
            return (
              <div key={key} className="col-span-full">
                <Card className="p-4 bg-background border-border">
                  <div className="flex items-center gap-2 mb-3">
                    {getIcon(key)}
                    <span className="text-sm font-medium text-foreground capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </span>
                  </div>
                  <div className="text-sm text-muted-foreground pl-6">
                    {renderValue(value)}
                  </div>
                </Card>
              </div>
            );
          }

          // Regular fields
          return (
            <div key={key} className="flex items-start gap-3 p-3 rounded-lg bg-background border border-border">
              <div className="mt-0.5">{getIcon(key)}</div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-muted-foreground mb-1 capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </p>
                <p className="text-sm font-semibold text-foreground break-words">
                  {renderValue(value)}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 pt-4 border-t border-border">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>Response Time: <span className="font-semibold text-foreground">145ms</span></span>
          <span>Status Code: <span className="font-semibold text-success">200 OK</span></span>
        </div>
      </div>
    </Card>
  );
};

export default ResponseCard;
