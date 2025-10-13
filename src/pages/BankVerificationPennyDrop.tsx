import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Building2, CheckCircle2, CreditCard, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';

const BankVerificationPennyDrop = () => {
  const navigate = useNavigate();
  const [accountNo, setAccountNo] = useState('XXXXXXXXXXXX5678');
  const [ifscCode, setIfscCode] = useState('FDRL1234567');
  const [name, setName] = useState('RAM KUMAR');
  const [response, setResponse] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleFetch = () => {
    setLoading(true);
    setTimeout(() => {
      setResponse({
        beneficiary_name: 'RAM KUMAR',
        transaction_remark: 'Transaction Successful',
        verification_status: 'VERIFIED',
        name_match: {
          name_match_status: 'yes',
          name_match_score: '86',
        },
        ifsc_info: {
          BANK: 'Federal Bank',
          BRANCH: 'ALUVA BANK JUNCTION',
          CITY: 'ERNAKULAM',
          STATE: 'KERALA',
          IFSC: 'FDRL1234567',
          UPI: true,
          RTGS: true,
          IMPS: true,
        },
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
            <h1 className="text-4xl font-bold text-foreground mb-3">Bank Verification - Penny Drop</h1>
            <p className="text-muted-foreground">Monetary bank account verification with transaction</p>
          </div>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Enter Bank Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Input
                  value={accountNo}
                  onChange={(e) => setAccountNo(e.target.value)}
                  placeholder="Account Number"
                />
                <Input
                  value={ifscCode}
                  onChange={(e) => setIfscCode(e.target.value)}
                  placeholder="IFSC Code"
                />
                <div className="flex gap-4">
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Account Holder Name"
                    className="flex-1"
                  />
                  <Button onClick={handleFetch} disabled={loading}>
                    {loading ? 'Verifying...' : 'Verify'}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {response && (
            <div className="space-y-6 animate-fade-in">
              <Card className="border-2 border-primary">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-12 w-12 rounded-full bg-gradient-primary flex items-center justify-center">
                      <CheckCircle2 className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">Verification Status</p>
                      <Badge className="bg-gradient-primary text-white">{response.verification_status}</Badge>
                    </div>
                  </div>
                  <div className="bg-muted rounded-lg p-4">
                    <p className="text-sm text-muted-foreground mb-1">Transaction Remark</p>
                    <p className="font-medium text-foreground">{response.transaction_remark}</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5 text-primary" />
                    Beneficiary Details
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Beneficiary Name</p>
                      <p className="font-semibold text-foreground text-lg">{response.beneficiary_name}</p>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                      <div>
                        <p className="text-sm text-muted-foreground">Name Match Status</p>
                        <Badge variant={response.name_match.name_match_status === 'yes' ? 'default' : 'destructive'}>
                          {response.name_match.name_match_status.toUpperCase()}
                        </Badge>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">Match Score</p>
                        <p className="text-2xl font-bold text-primary">{response.name_match.name_match_score}%</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-primary" />
                    IFSC Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Bank Name</p>
                      <p className="font-semibold text-foreground">{response.ifsc_info.BANK}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Branch</p>
                      <p className="font-semibold text-foreground">{response.ifsc_info.BRANCH}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">IFSC Code</p>
                      <p className="font-semibold text-foreground">{response.ifsc_info.IFSC}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm text-muted-foreground">Location</p>
                        <p className="font-semibold text-foreground">{response.ifsc_info.CITY}, {response.ifsc_info.STATE}</p>
                      </div>
                    </div>
                  </div>
                  <div className="border-t pt-4">
                    <p className="text-sm text-muted-foreground mb-3">Payment Services Available</p>
                    <div className="flex gap-2">
                      {response.ifsc_info.UPI && <Badge>UPI</Badge>}
                      {response.ifsc_info.RTGS && <Badge>RTGS</Badge>}
                      {response.ifsc_info.IMPS && <Badge>IMPS</Badge>}
                    </div>
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

export default BankVerificationPennyDrop;
