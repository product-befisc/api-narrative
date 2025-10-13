import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, AlertTriangle, FileText, Calendar, IndianRupee, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';

const ChallanDetails = () => {
  const navigate = useNavigate();
  const [vehicleNo, setVehicleNo] = useState('DL3SFF1234');
  const [response, setResponse] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleFetch = () => {
    setLoading(true);
    setTimeout(() => {
      setResponse({
        challan_number: 'UP173997231123456789',
        offense_details: 'Driving Two-wheeled without helmets',
        challan_date: '2022-12-23 11:11:11',
        accused_name: 'RAM KUMAR SHAM',
        amount: 1000,
        challan_status: 'Pending',
        court_challan: true,
        state: 'UP',
        vehicle_number: 'DL3SFF1234',
        pdf_url: 'https://example.com/challan.pdf',
        receipt_url: 'https://example.com/receipt.pdf',
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
            <h1 className="text-4xl font-bold text-foreground mb-3">Challan Details</h1>
            <p className="text-muted-foreground">Traffic violation and challan records</p>
          </div>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Enter Vehicle Number</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <Input
                  value={vehicleNo}
                  onChange={(e) => setVehicleNo(e.target.value)}
                  placeholder="Vehicle Number"
                  className="flex-1"
                />
                <Button onClick={handleFetch} disabled={loading}>
                  {loading ? 'Fetching...' : 'Fetch Challan'}
                </Button>
              </div>
            </CardContent>
          </Card>

          {response && (
            <div className="space-y-6 animate-fade-in">
              <Card className="border-2 border-destructive">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-12 w-12 rounded-full bg-destructive/10 flex items-center justify-center">
                      <AlertTriangle className="h-6 w-6 text-destructive" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">Challan Status</p>
                      <Badge variant="destructive">{response.challan_status}</Badge>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Amount</p>
                      <div className="flex items-center gap-1 text-xl font-bold text-destructive">
                        <IndianRupee className="h-5 w-5" />
                        {response.amount}
                      </div>
                    </div>
                  </div>
                  <div className="bg-muted rounded-lg p-4">
                    <p className="text-sm text-muted-foreground mb-1">Challan Number</p>
                    <p className="font-mono text-foreground">{response.challan_number}</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    Offense Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Offense Description</p>
                    <p className="font-semibold text-foreground text-lg">{response.offense_details}</p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-xs text-muted-foreground">Challan Date</p>
                        <p className="text-sm font-medium">{response.challan_date}</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">State</p>
                      <p className="font-medium text-foreground">{response.state}</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Accused Name</p>
                      <p className="font-medium text-foreground">{response.accused_name}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Vehicle Number</p>
                      <p className="font-semibold text-foreground">{response.vehicle_number}</p>
                    </div>
                  </div>
                  <div className="pt-2">
                    {response.court_challan && (
                      <Badge variant="outline" className="border-destructive text-destructive">
                        Court Challan
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Document Access</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    <Button variant="outline" className="flex-1" onClick={() => window.open(response.pdf_url, '_blank')}>
                      <Download className="mr-2 h-4 w-4" />
                      Download Challan PDF
                    </Button>
                    <Button variant="outline" className="flex-1" onClick={() => window.open(response.receipt_url, '_blank')}>
                      <Download className="mr-2 h-4 w-4" />
                      Download Receipt
                    </Button>
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

export default ChallanDetails;
