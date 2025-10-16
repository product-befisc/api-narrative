import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, FileText, User, Calendar, Package, CheckCircle2, Truck, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import Navbar from '@/components/Navbar';
import { maskData } from '@/lib/utils';

const PassportVerification = () => {
  const navigate = useNavigate();
  const [passportNo, setPassportNo] = useState('T1234567');
  const [fileNo, setFileNo] = useState('UP1234567890122');
  const [dob, setDob] = useState('01/01/1990');
  const [response, setResponse] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [showData, setShowData] = useState(false);
  const [consent, setConsent] = useState(true);

  const handleFetch = () => {
    setLoading(true);
    setTimeout(() => {
      setResponse({
        applicant: {
          full_name: 'RAJESH KUMAR SHARMA',
          first_name: 'RAJESH',
          last_name: 'SHARMA',
          dob: '01/01/1990',
          passport_number: 'T1234567',
          file_number: 'UP1234567890122',
          application_type: 'NORMAL'
        },
        status: {
          application_received_on: '21/05/2019',
          dispatch_status: 'DISPATCHED',
          dispatch_date: '17/06/2019',
          speed_post_tracking: 'EE123456789IN',
          type_of_application: 'FRESH',
          status_message: 'Your passport has been dispatched and is on its way to your registered address.'
        },
        highlights: {
          status: 'DISPATCHED',
          received_date: '21/05/2019',
          dispatched_date: '17/06/2019',
          tracking_available: true
        },
        timestamp: new Date().toISOString()
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
            <h1 className="text-4xl font-bold text-foreground mb-3">Passport Verification</h1>
            <p className="text-muted-foreground">Track passport application status and details</p>
          </div>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Enter Passport Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="passportNo">Passport Number</Label>
                    <Input
                      id="passportNo"
                      value={passportNo}
                      onChange={(e) => setPassportNo(e.target.value)}
                      placeholder="e.g., T1234567"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="fileNo">File Number</Label>
                    <Input
                      id="fileNo"
                      value={fileNo}
                      onChange={(e) => setFileNo(e.target.value)}
                      placeholder="e.g., UP1234567890122"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dob">Date of Birth</Label>
                  <div className="flex gap-4">
                    <Input
                      id="dob"
                      value={dob}
                      onChange={(e) => setDob(e.target.value)}
                      placeholder="DD/MM/YYYY"
                      className="flex-1"
                    />
                    <Button onClick={handleFetch} disabled={loading || !consent}>
                      {loading ? 'Verifying...' : 'Fetch'}
                    </Button>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <Checkbox id="consent" checked={consent} onCheckedChange={(checked) => setConsent(checked === true)} />
                  <label htmlFor="consent" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                    I authorize BeFiSc to verify and fetch details linked to the information I've provided from authorized data sources for compliance and risk checks, in line with the DPDP Act, 2023.
                  </label>
                </div>
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
              {/* Highlights Section */}
              <Card className="border-2 border-primary">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 rounded-full bg-gradient-primary flex items-center justify-center">
                      <CheckCircle2 className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">Passport Status</p>
                      <Badge className="bg-gradient-primary text-white text-base">{response.highlights.status}</Badge>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">Received</p>
                        <p className="font-semibold text-sm">{response.highlights.received_date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Truck className="h-4 w-4 text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">Dispatched</p>
                        <p className="font-semibold text-sm">{response.highlights.dispatched_date}</p>
                      </div>
                    </div>
                  </div>
                  {response.highlights.tracking_available && (
                    <div className="mt-4 pt-4 border-t">
                      <div className="flex items-center gap-2">
                        <Package className="h-4 w-4 text-primary" />
                        <p className="text-xs text-muted-foreground">Track via Speed Post</p>
                      </div>
                      <p className="font-semibold text-foreground mt-1">{response.status.speed_post_tracking}</p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Applicant Details */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5 text-primary" />
                    Applicant Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Full Name</p>
                      <p className="font-semibold text-lg text-foreground break-words">{maskData(response.applicant.full_name, showData)}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Date of Birth</p>
                      <p className="font-semibold text-foreground">{maskData(response.applicant.dob, showData)}</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Passport Number</p>
                      <p className="font-semibold text-foreground break-all">{maskData(response.applicant.passport_number, showData)}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">File Number</p>
                      <p className="font-semibold text-foreground break-all">{maskData(response.applicant.file_number, showData)}</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">First Name</p>
                      <p className="font-medium text-foreground">{maskData(response.applicant.first_name, showData)}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Last Name</p>
                      <p className="font-medium text-foreground">{maskData(response.applicant.last_name, showData)}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Application Type</p>
                    <Badge variant="outline">{response.applicant.application_type}</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Status Summary */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    Status Summary
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Application Received On</p>
                      <p className="font-semibold text-foreground">{response.status.application_received_on}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Dispatch Date</p>
                      <p className="font-semibold text-foreground">{response.status.dispatch_date}</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Dispatch Status</p>
                      <Badge className="bg-gradient-primary text-white">{response.status.dispatch_status}</Badge>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Type of Application</p>
                      <Badge variant="outline">{response.status.type_of_application}</Badge>
                    </div>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Package className="h-4 w-4 text-primary" />
                      <p className="text-sm font-semibold text-foreground">Speed Post Tracking</p>
                    </div>
                    <p className="font-mono text-lg font-bold text-foreground break-all">{response.status.speed_post_tracking}</p>
                  </div>
                  <div className="bg-primary/10 border border-primary/20 p-4 rounded-lg">
                    <p className="text-sm font-medium text-foreground break-words">{response.status.status_message}</p>
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

export default PassportVerification;
