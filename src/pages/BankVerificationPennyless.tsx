import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Building2, CheckCircle2, Shield, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import Navbar from '@/components/Navbar';
import { maskData } from '@/lib/utils';

const BankVerificationPennyless = () => {
  const navigate = useNavigate();
  const [accountNo, setAccountNo] = useState('XXXXXXXXXXXX');
  const [ifscCode, setIfscCode] = useState('XXXXXXXX');
  const [response, setResponse] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [showData, setShowData] = useState(false);
  const [consent, setConsent] = useState(true);

  const handleFetch = () => {
    setLoading(true);
    setTimeout(() => {
      setResponse({
        account_status: 'SUCCESS',
        details: {
          bank_reference: 'BNK202501234567',
          ifsc: 'SBIN0001234',
          registered_name: 'RAM KUMAR SHARMA',
        },
        name_match: {
          match_result: 'yes',
          nameMatchScore: '100.00',
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
            <h1 className="text-4xl font-bold text-foreground mb-3">Bank Verification - Pennyless</h1>
            <p className="text-muted-foreground">Non-monetary bank account verification</p>
          </div>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Enter Bank Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <Input
                  value={accountNo}
                  onChange={(e) => setAccountNo(e.target.value)}
                  placeholder="Account Number"
                />
                <div className="flex gap-4">
                  <Input
                    value={ifscCode}
                    onChange={(e) => setIfscCode(e.target.value)}
                    placeholder="IFSC Code"
                    className="flex-1"
                  />
                  <Button onClick={handleFetch} disabled={loading || !consent}>
                    {loading ? 'Verifying...' : 'Verify'}
                  </Button>
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
              <Card className="border-2 border-primary">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-12 w-12 rounded-full bg-gradient-primary flex items-center justify-center">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Verification Status</p>
                      <Badge className="bg-gradient-primary text-white">{response.account_status}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-primary" />
                    Account Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-sm text-muted-foreground">Registered Name</p>
                    <p className="font-semibold text-foreground">{maskData(response.details.registered_name, showData)}</p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">IFSC Code</p>
                      <p className="font-semibold text-foreground">{maskData(response.details.ifsc, showData)}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Bank Reference</p>
                      <p className="font-semibold text-foreground">{maskData(response.details.bank_reference, showData)}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    Name Match Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-muted-foreground">Match Status</span>
                    <Badge variant={response.name_match.match_result === 'yes' ? 'default' : 'destructive'}>
                      {response.name_match.match_result.toUpperCase()}
                    </Badge>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Match Score</span>
                      <span className="text-sm font-semibold">{response.name_match.nameMatchScore}%</span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-primary transition-all"
                        style={{ width: `${response.name_match.nameMatchScore}%` }}
                      />
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

export default BankVerificationPennyless;
