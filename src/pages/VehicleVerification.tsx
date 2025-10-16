import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Car, User, FileText, Shield, Calendar, AlertTriangle, IndianRupee, Building2, CreditCard, CheckCircle2, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import Navbar from '@/components/Navbar';
import { maskData, maskEmail, maskPhone } from '@/lib/utils';

const VehicleVerification = () => {
  const navigate = useNavigate();
  const [vehicleNo, setVehicleNo] = useState('DL1ABC1234');
  const [loading, setLoading] = useState(false);
  const [showData, setShowData] = useState(false);
  const [consent, setConsent] = useState(true);
  
  const [rcResponse, setRcResponse] = useState<any>(null);
  const [challanResponse, setChallanResponse] = useState<any>(null);
  const [chassisResponse, setChassisResponse] = useState<any>(null);

  const handleFetch = () => {
    setLoading(true);
    setTimeout(() => {
      // RC Advance Response
      setRcResponse({
        owner: {
          name: 'RAJESH KUMAR SHARMA',
          father_name: 'RAMESH KUMAR SHARMA',
          present_address: 'H NO 123, SECTOR 15, NOIDA',
          permanent_address: 'H NO 123, SECTOR 15, NOIDA, UTTAR PRADESH',
          mobile: '9876543210',
          email: 'rajesh.sharma@email.com',
          pan: 'ABCDE1234F',
          aadhaar: 'XXXX-XXXX-5678',
          state: 'UTTAR PRADESH',
        },
        vehicle: {
          registration_no: 'DL1ABC1234',
          registration_date: '2020-05-15',
          maker: 'MARUTI SUZUKI INDIA LIMITED',
          model: 'SWIFT VXI',
          class: 'MOTOR CAR(LMV)',
          engine_no: 'K12MN1234567',
          chassis_no: 'MA3EJKD1S00123456',
          fuel_type: 'PETROL',
          color: 'SUPERIOR WHITE',
          seating_capacity: '5',
          body_type: 'SALOON',
          vehicle_type: 'PRIVATE',
          norms: 'BS VI',
          fit_upto: '2035-05-14',
          status: 'ACTIVE',
          vehicle_age: '4 Years 8 Months',
        },
        insurance: {
          policy_no: 'POL1234567890123',
          company: 'BAJAJ ALLIANZ GENERAL INSURANCE',
          valid_from: '2024-05-15',
          valid_till: '2025-05-14',
        },
        highlights: {
          status: 'ACTIVE',
          ownership: 'INDIVIDUAL',
          insurance_valid_till: '2025-05-14',
          fitness_valid_till: '2035-05-14',
          registered_on: '2020-05-15',
          office_name: 'NOIDA',
          financed: true
        }
      });

      // Challan Response
      setChallanResponse({
        challan_number: 'UP173997231123456789',
        offense_details: 'Driving Two-wheeled without helmets',
        challan_date: '2022-12-23 11:11:11',
        accused_name: 'RAJESH KUMAR SHARMA',
        amount: 1000,
        challan_status: 'Pending',
        court_challan: true,
        state: 'UP',
        vehicle_number: 'DL1ABC1234',
      });

      // Chassis to RC Response
      setChassisResponse({
        owner_name: 'RAJESH KUMAR SHARMA',
        father_name: 'RAMESH KUMAR SHARMA',
        vehicle_number: 'DL1ABC1234',
        registration_date: '2020-05-15',
        status: 'ACTIVE',
        vehicle_details: {
          make: 'MARUTI SUZUKI',
          model: 'SWIFT VXI',
          fuel_type: 'PETROL',
          color: 'SUPERIOR WHITE',
          category: 'LIGHT MOTOR VEHICLE',
          cubic_capacity: '1197',
          seating_capacity: '5',
        },
        registration_details: {
          rto: 'DL01 - NEW DELHI',
          state_code: 'DL',
          insurance_expiry: '2025-05-14',
          fitness_expiry: '2035-05-14',
        },
        insurance: {
          provider: 'BAJAJ ALLIANZ GENERAL INSURANCE',
          policy_number: 'POL1234567890123',
          valid_till: '2025-05-14',
        },
      });

      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Button variant="ghost" className="mb-6" onClick={() => navigate('/product/id-proof?tab=solutions')}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to ID Proof
        </Button>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-3">Vehicle Verification</h1>
            <p className="text-muted-foreground">Complete vehicle verification with RC, Challan, and Chassis details</p>
          </div>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Enter Vehicle Number</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-4">
                <Input
                  value={vehicleNo}
                  onChange={(e) => setVehicleNo(e.target.value)}
                  placeholder="Vehicle Number"
                  className="flex-1"
                />
                <Button onClick={handleFetch} disabled={loading || !consent}>
                  {loading ? 'Fetching...' : 'Verify Vehicle'}
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

          {rcResponse && challanResponse && chassisResponse && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex justify-end mb-4">
                <Button variant="outline" size="sm" onClick={() => setShowData(!showData)}>
                  {showData ? <EyeOff className="h-4 w-4 mr-2" /> : <Eye className="h-4 w-4 mr-2" />}
                  {showData ? 'Hide' : 'Show'} Data
                </Button>
              </div>

              {/* RC Advance Details Section */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                  <Car className="h-6 w-6 text-primary" />
                  RC Advance Details
                </h2>

                {/* Highlights Card */}
                <Card className="border-2 border-primary">
                  <CardContent className="pt-6">
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                        <div>
                          <p className="text-xs text-muted-foreground">Status</p>
                          <Badge className="bg-gradient-primary text-white">{rcResponse.highlights.status}</Badge>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Shield className="h-5 w-5 text-primary" />
                        <div>
                          <p className="text-xs text-muted-foreground">Insurance Valid Till</p>
                          <p className="font-semibold text-sm">{rcResponse.highlights.insurance_valid_till}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Calendar className="h-5 w-5 text-primary" />
                        <div>
                          <p className="text-xs text-muted-foreground">Fitness Valid Till</p>
                          <p className="font-semibold text-sm">{rcResponse.highlights.fitness_valid_till}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <User className="h-5 w-5 text-primary" />
                        <div>
                          <p className="text-xs text-muted-foreground">Ownership</p>
                          <p className="font-semibold text-sm">{rcResponse.highlights.ownership}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Building2 className="h-5 w-5 text-primary" />
                        <div>
                          <p className="text-xs text-muted-foreground">RTO Office</p>
                          <p className="font-semibold text-sm">{rcResponse.highlights.office_name}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        {rcResponse.highlights.financed ? (
                          <CreditCard className="h-5 w-5 text-primary" />
                        ) : (
                          <CheckCircle2 className="h-5 w-5 text-primary" />
                        )}
                        <div>
                          <p className="text-xs text-muted-foreground">Finance Status</p>
                          <Badge variant={rcResponse.highlights.financed ? 'default' : 'secondary'}>
                            {rcResponse.highlights.financed ? 'FINANCED' : 'NO FINANCE'}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Owner & Vehicle Details */}
                <div className="grid md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <User className="h-5 w-5 text-primary" />
                        Owner Details
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div>
                        <p className="text-sm text-muted-foreground">Full Name</p>
                        <p className="font-semibold text-foreground">{maskData(rcResponse.owner.name, showData)}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Father's Name</p>
                        <p className="font-medium text-foreground">{maskData(rcResponse.owner.father_name, showData)}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Mobile</p>
                        <p className="font-medium text-foreground">{maskPhone(rcResponse.owner.mobile, showData)}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <p className="font-medium text-foreground">{maskEmail(rcResponse.owner.email, showData)}</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <Car className="h-5 w-5 text-primary" />
                        Vehicle Details
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div>
                        <p className="text-sm text-muted-foreground">Registration Number</p>
                        <p className="font-semibold text-lg text-foreground">{rcResponse.vehicle.registration_no}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Make & Model</p>
                        <p className="font-medium text-foreground">{rcResponse.vehicle.maker} {rcResponse.vehicle.model}</p>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <p className="text-sm text-muted-foreground">Fuel Type</p>
                          <p className="font-medium text-foreground">{rcResponse.vehicle.fuel_type}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Color</p>
                          <p className="font-medium text-foreground">{rcResponse.vehicle.color}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Insurance Details */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Shield className="h-5 w-5 text-primary" />
                      Insurance Details
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Insurance Company</p>
                        <p className="font-medium text-foreground">{rcResponse.insurance.company}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Policy Number</p>
                        <p className="font-medium text-foreground">{maskData(rcResponse.insurance.policy_no, showData)}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Valid Till</p>
                        <p className="font-medium text-foreground">{rcResponse.insurance.valid_till}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Challan Details Section */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                  <AlertTriangle className="h-6 w-6 text-destructive" />
                  Challan Details
                </h2>

                <Card className="border-2 border-destructive">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-12 w-12 rounded-full bg-destructive/10 flex items-center justify-center">
                        <AlertTriangle className="h-6 w-6 text-destructive" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground">Challan Status</p>
                        <Badge variant="destructive">{challanResponse.challan_status}</Badge>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">Amount</p>
                        <div className="flex items-center gap-1 text-xl font-bold text-destructive">
                          <IndianRupee className="h-5 w-5" />
                          {challanResponse.amount}
                        </div>
                      </div>
                    </div>
                    <div className="bg-muted rounded-lg p-4 mb-4">
                      <p className="text-sm text-muted-foreground mb-1">Challan Number</p>
                      <p className="font-mono text-foreground">{maskData(challanResponse.challan_number, showData)}</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <FileText className="h-5 w-5 text-primary" />
                      Offense Details
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Offense Description</p>
                      <p className="font-semibold text-foreground">{challanResponse.offense_details}</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <p className="text-xs text-muted-foreground">Challan Date</p>
                          <p className="text-sm font-medium">{challanResponse.challan_date}</p>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">State</p>
                        <p className="font-medium text-foreground">{challanResponse.state}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* RC Details (Chassis to RC) Section */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                  <FileText className="h-6 w-6 text-primary" />
                  RC Details
                </h2>

                <div className="grid md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <Car className="h-5 w-5 text-primary" />
                        Vehicle Information
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div>
                        <p className="text-sm text-muted-foreground">Make & Model</p>
                        <p className="font-semibold text-foreground">{chassisResponse.vehicle_details.make} {chassisResponse.vehicle_details.model}</p>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <p className="text-sm text-muted-foreground">Fuel Type</p>
                          <p className="font-medium text-foreground">{chassisResponse.vehicle_details.fuel_type}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Color</p>
                          <p className="font-medium text-foreground">{chassisResponse.vehicle_details.color}</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <p className="text-sm text-muted-foreground">Cubic Capacity</p>
                          <p className="font-medium text-foreground">{chassisResponse.vehicle_details.cubic_capacity} CC</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Seating</p>
                          <p className="font-medium text-foreground">{chassisResponse.vehicle_details.seating_capacity} Seats</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <FileText className="h-5 w-5 text-primary" />
                        Registration Information
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div>
                        <p className="text-sm text-muted-foreground">RTO</p>
                        <p className="font-medium text-foreground">{chassisResponse.registration_details.rto}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <p className="text-xs text-muted-foreground">Insurance Expiry</p>
                          <p className="text-sm font-medium">{chassisResponse.registration_details.insurance_expiry}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <p className="text-xs text-muted-foreground">Fitness Expiry</p>
                          <p className="text-sm font-medium">{chassisResponse.registration_details.fitness_expiry}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VehicleVerification;
