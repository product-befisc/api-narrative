import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Car, User, FileText, Shield, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';

const ChassisToRC = () => {
  const navigate = useNavigate();
  const [chassisNo, setChassisNo] = useState('MBLJAW141MHC21171');
  const [response, setResponse] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleFetch = () => {
    setLoading(true);
    setTimeout(() => {
      setResponse({
        owner_name: 'RAJESH KUMAR SHARMA',
        father_name: 'SURESH KUMAR SHARMA',
        vehicle_number: 'MH12AB1234',
        registration_date: '2021-03-15',
        status: 'ACTIVE',
        vehicle_details: {
          make: 'MAHINDRA',
          model: 'BOLERO',
          fuel_type: 'DIESEL',
          color: 'WHITE',
          category: 'LIGHT MOTOR VEHICLE',
          cubic_capacity: '2523',
          seating_capacity: '7',
        },
        registration_details: {
          rto: 'MH12 - PUNE',
          state_code: 'MH',
          insurance_expiry: '2025-12-31',
          fitness_expiry: '2026-03-15',
          permit_expiry: '2025-06-30',
        },
        insurance: {
          provider: 'ICICI LOMBARD GENERAL INSURANCE',
          policy_number: 'POL123456789',
          valid_till: '2025-12-31',
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
            <h1 className="text-4xl font-bold text-foreground mb-3">Chassis to RC V2</h1>
            <p className="text-muted-foreground">Vehicle registration details via chassis number</p>
          </div>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Enter Chassis Number</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <Input
                  value={chassisNo}
                  onChange={(e) => setChassisNo(e.target.value)}
                  placeholder="Chassis Number"
                  className="flex-1"
                />
                <Button onClick={handleFetch} disabled={loading}>
                  {loading ? 'Fetching...' : 'Fetch Details'}
                </Button>
              </div>
            </CardContent>
          </Card>

          {response && (
            <div className="space-y-6 animate-fade-in">
              <Card className="border-2 border-primary">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5 text-primary" />
                    Owner Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Owner Name</p>
                      <p className="font-semibold text-foreground text-lg">{response.owner_name}</p>
                    </div>
                    <Badge className="bg-gradient-primary text-white">{response.status}</Badge>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Father's Name</p>
                      <p className="font-medium text-foreground">{response.father_name}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Vehicle Number</p>
                      <p className="font-semibold text-foreground">{response.vehicle_number}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Registration Date</p>
                      <p className="font-medium text-foreground">{response.registration_date}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Car className="h-5 w-5 text-primary" />
                    Vehicle Details
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Make & Model</p>
                      <p className="font-semibold text-foreground">{response.vehicle_details.make} {response.vehicle_details.model}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Fuel Type</p>
                      <p className="font-medium text-foreground">{response.vehicle_details.fuel_type}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Color</p>
                      <p className="font-medium text-foreground">{response.vehicle_details.color}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Category</p>
                      <p className="font-medium text-foreground">{response.vehicle_details.category}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Cubic Capacity</p>
                      <p className="font-medium text-foreground">{response.vehicle_details.cubic_capacity} CC</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Seating Capacity</p>
                      <p className="font-medium text-foreground">{response.vehicle_details.seating_capacity} Seats</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    Registration Details
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">RTO</p>
                      <p className="font-medium text-foreground">{response.registration_details.rto}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">State Code</p>
                      <p className="font-medium text-foreground">{response.registration_details.state_code}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-xs text-muted-foreground">Insurance Expiry</p>
                        <p className="text-sm font-medium">{response.registration_details.insurance_expiry}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-xs text-muted-foreground">Fitness Expiry</p>
                        <p className="text-sm font-medium">{response.registration_details.fitness_expiry}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-xs text-muted-foreground">Permit Expiry</p>
                        <p className="text-sm font-medium">{response.registration_details.permit_expiry}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    Insurance Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-muted-foreground">Insurance Provider</p>
                      <p className="font-semibold text-foreground">{response.insurance.provider}</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Policy Number</p>
                        <p className="font-medium text-foreground">{response.insurance.policy_number}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Valid Till</p>
                        <p className="font-medium text-foreground">{response.insurance.valid_till}</p>
                      </div>
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

export default ChassisToRC;
