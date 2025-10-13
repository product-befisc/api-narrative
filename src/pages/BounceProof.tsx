import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Mail, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';

const BounceProof = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleVerify = () => {
    setLoading(true);
    setTimeout(() => {
      setResult({
        email: email || 'gaurav@befisc.com',
        reason: 'Safe',
        domain: 'Active',
        mxFound: true,
        firstName: 'Gaurav',
        lastName: 'Bhardwaj',
        companyName: 'Befisc',
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <Button
          variant="ghost"
          className="mb-6"
          onClick={() => navigate('/home')}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Products
        </Button>

        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-foreground mb-4">
            Email validation that keeps your network clean.
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Identify invalid, disposable, or risky addresses before sending. Protect deliverability and domain reputation.
          </p>
        </div>

        {/* Input Section */}
        <Card className="max-w-2xl mx-auto p-8 mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Mail className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">Verify Email Address</h2>
          </div>
          
          <div className="flex gap-4">
            <Input
              type="email"
              placeholder="Enter email address to verify"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1"
            />
            <Button 
              onClick={handleVerify}
              disabled={loading}
              className="px-8"
            >
              {loading ? 'Verifying...' : 'Verify'}
            </Button>
          </div>
        </Card>

        {/* Result Card */}
        {result && (
          <Card className="max-w-2xl mx-auto p-8 animate-fade-in border-2 border-success">
            <div className="flex items-start justify-between mb-6">
              <h3 className="text-2xl font-bold text-foreground">Verification Result</h3>
              <Badge className="bg-success text-white">
                <CheckCircle className="h-4 w-4 mr-1" />
                {result.reason}
              </Badge>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b">
                <span className="text-muted-foreground">Email</span>
                <span className="font-semibold">{result.email}</span>
              </div>
              
              <div className="flex items-center justify-between py-3 border-b">
                <span className="text-muted-foreground">Reason</span>
                <Badge className="bg-success text-white">{result.reason}</Badge>
              </div>
              
              <div className="flex items-center justify-between py-3 border-b">
                <span className="text-muted-foreground">Domain</span>
                <span className="font-semibold flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  {result.domain}
                </span>
              </div>
              
              <div className="flex items-center justify-between py-3 border-b">
                <span className="text-muted-foreground">MX Found</span>
                <span className="font-semibold flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  {result.mxFound ? 'True' : 'False'}
                </span>
              </div>
              
              <div className="flex items-center justify-between py-3 border-b">
                <span className="text-muted-foreground">First Name</span>
                <span className="font-semibold">{result.firstName}</span>
              </div>
              
              <div className="flex items-center justify-between py-3 border-b">
                <span className="text-muted-foreground">Last Name</span>
                <span className="font-semibold">{result.lastName}</span>
              </div>
              
              <div className="flex items-center justify-between py-3">
                <span className="text-muted-foreground">Company Name</span>
                <span className="font-semibold">{result.companyName}</span>
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default BounceProof;
