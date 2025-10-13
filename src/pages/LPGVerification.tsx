import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Flame, MapPin, User, Phone, CheckCircle2, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import Navbar from '@/components/Navbar';
import { maskData, maskPhone } from '@/lib/utils';

const LPGVerification = () => {
  const navigate = useNavigate();
  const [mobileNo, setMobileNo] = useState('9876543210');
  const [response, setResponse] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [showData, setShowData] = useState(false);
  const [consent, setConsent] = useState(true);

  const handleFetch = () => {
    setLoading(true);
    setTimeout(() => {
      setResponse({
        connections: [
          {
            provider: 'INDANE GAS',
            distributor_name: 'SHRI BALAJI GAS SERVICE',
            distributor_code: 'IND12345',
            distributor_contact: '011-12345678',
            distributor_address: 'PLOT NO 45, SECTOR 18, NOIDA, UTTAR PRADESH - 201301',
            consumer_name: 'RAJESH KUMAR SHARMA',
            consumer_mobile: '9876543210',
            consumer_id: '12345678901234',
            status: 'ACTIVE',
            connection_type: 'SINGLE BOTTLE',
            address: 'H NO 123, SECTOR 15, NOIDA, UTTAR PRADESH - 201301'
          },
          {
            provider: 'BHARAT GAS',
            distributor_name: 'MODERN GAS AGENCY',
            distributor_code: 'BHR67890',
            distributor_contact: '011-98765432',
            distributor_address: 'SHOP NO 12, MARKET COMPLEX, SECTOR 27, NOIDA, UP - 201301',
            consumer_name: 'RAJESH KUMAR SHARMA',
            consumer_mobile: '9876543210',
            consumer_id: '98765432109876',
            status: 'ACTIVE',
            connection_type: 'DOUBLE BOTTLE',
            address: 'H NO 123, SECTOR 15, NOIDA, UTTAR PRADESH - 201301'
          },
          {
            provider: 'HP GAS',
            distributor_name: 'SUNRISE GAS DISTRIBUTORS',
            distributor_code: 'HP54321',
            distributor_contact: '011-55667788',
            distributor_address: 'NEAR CITY CENTER, SECTOR 32, NOIDA, UTTAR PRADESH - 201301',
            consumer_name: 'RAJESH K SHARMA',
            consumer_mobile: '9876543210',
            consumer_id: '11223344556677',
            status: 'INACTIVE',
            connection_type: 'SINGLE BOTTLE',
            address: 'H NO 123, SECTOR 15, NOIDA, UTTAR PRADESH - 201301'
          }
        ],
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

        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-3">LPG Verification</h1>
            <p className="text-muted-foreground">Verify LPG connections linked to mobile number</p>
          </div>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Enter Mobile Number</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-4">
                <Input
                  value={mobileNo}
                  onChange={(e) => setMobileNo(e.target.value)}
                  placeholder="Mobile Number"
                  className="flex-1"
                />
                <Button onClick={handleFetch} disabled={loading || !consent}>
                  {loading ? 'Verifying...' : 'Fetch'}
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
              {/* Highlights Section */}
              <Card className="border-2 border-primary">
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">Total Connections</p>
                        <p className="font-semibold text-lg">{response.connections.length}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Flame className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">Active Connections</p>
                        <p className="font-semibold text-lg">{response.connections.filter((c: any) => c.status === 'ACTIVE').length}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">Providers</p>
                        <div className="flex gap-1">
                          {response.connections.map((conn: any, idx: number) => (
                            <Badge key={idx} variant="outline" className="text-xs">{conn.provider.split(' ')[0]}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* LPG Connections */}
              {response.connections.map((connection: any, index: number) => (
                <Card key={index} className={connection.status === 'ACTIVE' ? 'border-primary' : ''}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-2">
                        <Flame className="h-5 w-5 text-primary" />
                        {connection.provider}
                      </CardTitle>
                      <Badge variant={connection.status === 'ACTIVE' ? 'default' : 'secondary'}>
                        {connection.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Distributor Details */}
                    <div className="bg-muted p-4 rounded-lg space-y-3">
                      <p className="text-sm font-semibold text-foreground mb-2">Distributor Details</p>
                      <div className="grid md:grid-cols-2 gap-3">
                        <div>
                          <p className="text-xs text-muted-foreground">Distributor Name</p>
                          <p className="font-medium text-foreground">{connection.distributor_name}</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Distributor Code</p>
                          <p className="font-medium text-foreground">{connection.distributor_code}</p>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-3">
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-muted-foreground" />
                          <div>
                            <p className="text-xs text-muted-foreground">Contact</p>
                            <p className="font-medium text-foreground">{connection.distributor_contact}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <div>
                            <p className="text-xs text-muted-foreground">Location</p>
                            <p className="font-medium text-foreground text-sm">{connection.distributor_address}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Consumer Details */}
                    <div className="space-y-3">
                      <p className="text-sm font-semibold text-foreground">Consumer Details</p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-xs text-muted-foreground">Consumer Name</p>
                          <p className="font-semibold text-foreground">{maskData(connection.consumer_name, showData)}</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Consumer ID</p>
                          <p className="font-semibold text-foreground">{maskData(connection.consumer_id, showData)}</p>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-muted-foreground" />
                          <div>
                            <p className="text-xs text-muted-foreground">Mobile</p>
                            <p className="font-medium text-foreground">{maskPhone(connection.consumer_mobile, showData)}</p>
                          </div>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Connection Type</p>
                          <Badge variant="outline">{connection.connection_type}</Badge>
                        </div>
                      </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Address</p>
                          <p className="font-medium text-foreground">{maskData(connection.address, showData)}</p>
                        </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

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

export default LPGVerification;
