import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Play, Copy, FileText } from 'lucide-react';
import Navbar from '@/components/Navbar';
import ResponseCard from '@/components/ResponseCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { apiEndpoints } from '@/data/apiData';
import { toast } from 'sonner';

const APIDetailPage = () => {
  const { apiId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<{ [key: string]: string }>({});
  const [consent, setConsent] = useState(false);
  const [response, setResponse] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const api = apiEndpoints.find(a => a.id === apiId);

  if (!api) {
    return <div>API not found</div>;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!consent) {
      toast.error('Please accept the consent terms');
      return;
    }

    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setResponse(api.sampleResponse);
      setLoading(false);
      toast.success('API response received successfully');
    }, 1000);
  };

  const handleCopyResponse = () => {
    navigator.clipboard.writeText(JSON.stringify(response, null, 2));
    toast.success('Response copied to clipboard');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar onSearch={() => {}} />
      
      <main className="container mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left Column - API Details & Form */}
          <div className="space-y-6">
            <Card className="p-6 bg-gradient-card border-border">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-2xl font-bold text-foreground mb-2">{api.name}</h1>
                  <p className="text-muted-foreground">{api.description}</p>
                </div>
                <Badge className="bg-success text-success-foreground">Live</Badge>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                <div className="text-center">
                  <div className="text-xs text-muted-foreground mb-1">Method</div>
                  <Badge variant="secondary">POST</Badge>
                </div>
                <div className="text-center">
                  <div className="text-xs text-muted-foreground mb-1">Response</div>
                  <Badge variant="secondary">JSON</Badge>
                </div>
                <div className="text-center">
                  <div className="text-xs text-muted-foreground mb-1">Avg Time</div>
                  <Badge variant="secondary">~150ms</Badge>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-card border-border">
              <h2 className="text-lg font-semibold text-foreground mb-4">Try It Out</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                {api.inputFields.map((field) => (
                  <div key={field.name} className="space-y-2">
                    <Label htmlFor={field.name}>
                      {field.label}
                      {field.required && <span className="text-destructive ml-1">*</span>}
                    </Label>
                    <Input
                      id={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                      required={field.required}
                      value={formData[field.name] || ''}
                      onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                    />
                  </div>
                ))}

                <div className="flex items-start space-x-2 pt-4">
                  <Checkbox
                    id="consent"
                    checked={consent}
                    onCheckedChange={(checked) => setConsent(checked as boolean)}
                  />
                  <label
                    htmlFor="consent"
                    className="text-sm text-muted-foreground leading-relaxed cursor-pointer"
                  >
                    I consent to the processing of this data for demo purposes
                  </label>
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={loading}
                >
                  <Play className="h-4 w-4 mr-2" />
                  {loading ? 'Fetching Response...' : 'Fetch Response'}
                </Button>
              </form>
            </Card>
          </div>

          {/* Right Column - Response */}
          <div className="space-y-6">
            {response ? (
              <>
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-foreground">Response</h2>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={handleCopyResponse}>
                      <Copy className="h-4 w-4 mr-2" />
                      Copy
                    </Button>
                    <Button variant="outline" size="sm">
                      <FileText className="h-4 w-4 mr-2" />
                      Generate Report
                    </Button>
                  </div>
                </div>
                <ResponseCard data={response} apiName={api.name} />
              </>
            ) : (
              <Card className="p-12 bg-gradient-card border-border border-dashed">
                <div className="text-center">
                  <div className="mb-4 text-muted-foreground">
                    <Play className="h-12 w-12 mx-auto mb-3 opacity-50" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    No Response Yet
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Fill in the required fields and click "Fetch Response" to see the API output
                  </p>
                </div>
              </Card>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default APIDetailPage;
