import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, User, Briefcase, Calendar, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import Navbar from '@/components/Navbar';
import { maskData } from '@/lib/utils';

const UANHistory = () => {
  const navigate = useNavigate();
  const [uan, setUan] = useState('1000087654321');
  const [response, setResponse] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [showData, setShowData] = useState(false);
  const [consent, setConsent] = useState(true);

  const handleFetch = () => {
    setLoading(true);
    setTimeout(() => {
      setResponse({
        uan: '1000087654321',
        name: 'RAM SINGH',
        guardian_name: 'SHAM SINGH',
        employment_history: [
          {
            establishment_name: 'ABC PRIVATE LIMITED',
            member_id: 'MRNOI12345430000012345',
            date_of_joining: '2025-01-01',
            date_of_exit: '',
          },
          {
            establishment_name: 'XYZ PRIVATE LIMITED',
            member_id: 'UKDDN0123450000001230',
            date_of_joining: '2024-01-01',
            date_of_exit: '2024-12-01',
          },
        ],
        timestamp: new Date().toISOString(),
      });
      setLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Button variant="ghost" className="mb-6" onClick={() => navigate('/product/id-proof')}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to ID Proof
        </Button>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-3">UAN Details</h1>
            <p className="text-muted-foreground">Comprehensive employment history via Universal Account Number</p>
          </div>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Enter UAN Number</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-4">
                <Input
                  value={uan}
                  onChange={(e) => setUan(e.target.value)}
                  placeholder="Enter UAN"
                  className="flex-1"
                />
                <Button onClick={handleFetch} disabled={loading || !consent}>
                  {loading ? 'Fetching...' : 'Fetch History'}
                </Button>
              </div>
              <div className="flex items-start space-x-2">
                <Checkbox id="consent" checked={consent} onCheckedChange={(checked) => setConsent(checked === true)} />
                <label htmlFor="consent" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                  I authorize BeFiSc to verify and fetch details linked to the information I've provided from authorized data sources for compliance and risk checks, in line with the DPDP Act, 2023.
                </label>
              </div>
            </CardContent>
          </Card>

          {response && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex justify-end mb-4">
                <Button variant="outline" size="sm" onClick={() => setShowData(!showData)}>
                  {showData ? <EyeOff className="h-4 w-4 mr-2" /> : <Eye className="h-4 w-4 mr-2" />}
                  {showData ? 'Hide' : 'Show'} Data
                </Button>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5 text-primary" />
                    Profile Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Name</p>
                      <p className="font-semibold text-foreground">{maskData(response.name, showData)}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Guardian Name</p>
                      <p className="font-semibold text-foreground">{maskData(response.guardian_name, showData)}</p>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-sm text-muted-foreground">UAN Number</p>
                      <p className="font-semibold text-foreground">{maskData(response.uan, showData)}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-primary" />
                    Employment History
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {response.employment_history.map((job: any, index: number) => (
                      <Card key={index} className="border-2">
                        <CardContent className="pt-6">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h4 className="font-semibold text-lg text-foreground">{maskData(job.establishment_name, showData)}</h4>
                              <p className="text-sm text-muted-foreground">{maskData(job.member_id, showData)}</p>
                            </div>
                            {!job.date_of_exit && (
                              <Badge className="bg-gradient-primary text-white">Current</Badge>
                            )}
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4 text-muted-foreground" />
                              <div>
                                <p className="text-xs text-muted-foreground">Joined</p>
                                <p className="text-sm font-medium">{job.date_of_joining}</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4 text-muted-foreground" />
                              <div>
                                <p className="text-xs text-muted-foreground">Exit</p>
                                <p className="text-sm font-medium">{job.date_of_exit || 'Present'}</p>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="text-xs text-muted-foreground text-right">
                Response Time: {new Date(response.timestamp).toLocaleString()}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UANHistory;
