import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, User, Car, Building2, Shield, CreditCard, Store, CheckCircle2, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';

const RCAdvance = () => {
  const navigate = useNavigate();
  const [vehicleNo, setVehicleNo] = useState('DL1ABC1234');
  const [response, setResponse] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleFetch = () => {
    setLoading(true);
    setTimeout(() => {
      setResponse({
        owner: {
          name: 'RAJESH KUMAR SHARMA',
          father_name: 'RAMESH KUMAR SHARMA',
          present_address: 'H NO 123, SECTOR 15, NOIDA',
          permanent_address: 'H NO 123, SECTOR 15, NOIDA, UTTAR PRADESH',
          mobile: '9876543210',
          email: 'rajesh.sharma@email.com',
          pan: 'ABCDE1234F',
          aadhaar: 'XXXX-XXXX-5678',
          passport_no: 'T1234567',
          ration_card: 'UP1234567890',
          voter_id: 'ABC1234567',
          dl_no: 'DL-1234567890123',
          state: 'UTTAR PRADESH',
          vehicle_class_desc: 'Motor Car(LMV)'
        },
        vehicle: {
          registration_no: 'DL1ABC1234',
          registration_date: '2020-05-15',
          maker: 'MARUTI SUZUKI INDIA LIMITED',
          model: 'SWIFT VXI',
          class: 'MOTOR CAR(LMV)',
          category: 'LMV',
          engine_no: 'K12MN1234567',
          chassis_no: 'MA3EJKD1S00123456',
          fuel_type: 'PETROL',
          color: 'SUPERIOR WHITE',
          seating_capacity: '5',
          unladen_weight: '865',
          wheelbase: '2450',
          manufactured_date: '2020-04',
          body_type: 'SALOON',
          vehicle_type: 'PRIVATE',
          norms: 'BS VI',
          fit_upto: '2035-05-14',
          status: 'ACTIVE',
          vehicle_age: '4 Years 8 Months',
          verified_on: new Date().toISOString()
        },
        financier: {
          hp_type: 'HYPOTHECATION',
          financer_name: 'HDFC BANK LIMITED',
          address: 'HDFC HOUSE, SENAPATI BAPAT MARG, LOWER PAREL, MUMBAI',
          pincode: '400013',
          hypothecation_date: '2020-05-15',
          operation_date: '2020-05-15'
        },
        insurance: {
          policy_no: 'POL1234567890123',
          company: 'BAJAJ ALLIANZ GENERAL INSURANCE',
          valid_from: '2024-05-15',
          valid_till: '2025-05-14',
          remaining_duration: '5 months',
          insurance_expired: 'N'
        },
        tax: {
          tax_mode: 'LIFETIME TAX',
          payment_mode: 'ONLINE',
          amount: '45000',
          fine: '0',
          from_date: '2020-05-15',
          to_date: '2035-05-14',
          receipt_no: 'RCP123456789',
          collected_by: 'NOIDA RTO',
          tax_upto: '2035-05-14'
        },
        dealer: {
          dealer_code: 'DLR001',
          name: 'AUTOCAR INDIA PVT LTD',
          address: 'SECTOR 18, NOIDA',
          district: 'GAUTAM BUDDHA NAGAR',
          pincode: '201301',
          sale_amount: '685000',
          purchase_date: '2020-05-10'
        },
        highlights: {
          status: 'ACTIVE',
          ownership: 'INDIVIDUAL',
          insurance_valid_till: '2025-05-14',
          fitness_valid_till: '2035-05-14',
          registered_on: '2020-05-15',
          office_name: 'NOIDA',
          financed: true
        },
        timestamp: new Date().toISOString()
      });
      setLoading(false);
    }, 900);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Button variant="ghost" className="mb-6" onClick={() => navigate('/product/id-proof')}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to ID Proof
        </Button>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-3">RC Advance v3</h1>
            <p className="text-muted-foreground">Comprehensive vehicle registration certificate verification</p>
          </div>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Enter Vehicle Details</CardTitle>
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
                  {loading ? 'Fetching...' : 'Fetch'}
                </Button>
              </div>
            </CardContent>
          </Card>

          {response && (
            <div className="space-y-6 animate-fade-in">
              {/* Highlights Section */}
              <Card className="border-2 border-primary">
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">Status</p>
                        <Badge className="bg-gradient-primary text-white">{response.highlights.status}</Badge>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Shield className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">Insurance Valid Till</p>
                        <p className="font-semibold text-sm">{response.highlights.insurance_valid_till}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">Fitness Valid Till</p>
                        <p className="font-semibold text-sm">{response.highlights.fitness_valid_till}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <User className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">Ownership</p>
                        <p className="font-semibold text-sm">{response.highlights.ownership}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Building2 className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">RTO Office</p>
                        <p className="font-semibold text-sm">{response.highlights.office_name}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      {response.highlights.financed ? (
                        <CreditCard className="h-5 w-5 text-primary" />
                      ) : (
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                      )}
                      <div>
                        <p className="text-xs text-muted-foreground">Finance Status</p>
                        <Badge variant={response.highlights.financed ? 'default' : 'secondary'}>
                          {response.highlights.financed ? 'FINANCED' : 'NO FINANCE'}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t text-center">
                    <p className="text-sm text-muted-foreground">
                      Registered on {response.highlights.registered_on} • Verified on {new Date(response.vehicle.verified_on).toLocaleDateString()}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Owner Profile */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5 text-primary" />
                    Owner Profile
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Full Name</p>
                      <p className="font-semibold text-foreground">{response.owner.name}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Father's Name</p>
                      <p className="font-semibold text-foreground">{response.owner.father_name}</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Present Address</p>
                      <p className="font-medium text-foreground">{response.owner.present_address}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Permanent Address</p>
                      <p className="font-medium text-foreground">{response.owner.permanent_address}</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Mobile</p>
                      <p className="font-semibold text-foreground">{response.owner.mobile}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-semibold text-foreground">{response.owner.email}</p>
                    </div>
                  </div>
                  <div className="border-t pt-4">
                    <p className="text-sm text-muted-foreground mb-3">Identity Documents</p>
                    <div className="grid md:grid-cols-3 gap-3">
                      <div className="bg-muted p-3 rounded-lg">
                        <p className="text-xs text-muted-foreground">PAN</p>
                        <p className="font-semibold">{response.owner.pan}</p>
                      </div>
                      <div className="bg-muted p-3 rounded-lg">
                        <p className="text-xs text-muted-foreground">Aadhaar</p>
                        <p className="font-semibold">{response.owner.aadhaar}</p>
                      </div>
                      <div className="bg-muted p-3 rounded-lg">
                        <p className="text-xs text-muted-foreground">Passport</p>
                        <p className="font-semibold">{response.owner.passport_no}</p>
                      </div>
                      <div className="bg-muted p-3 rounded-lg">
                        <p className="text-xs text-muted-foreground">Voter ID</p>
                        <p className="font-semibold">{response.owner.voter_id}</p>
                      </div>
                      <div className="bg-muted p-3 rounded-lg">
                        <p className="text-xs text-muted-foreground">DL Number</p>
                        <p className="font-semibold">{response.owner.dl_no}</p>
                      </div>
                      <div className="bg-muted p-3 rounded-lg">
                        <p className="text-xs text-muted-foreground">State</p>
                        <p className="font-semibold">{response.owner.state}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Vehicle Details */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Car className="h-5 w-5 text-primary" />
                    Vehicle Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Registration Number</p>
                      <p className="font-semibold text-lg text-foreground">{response.vehicle.registration_no}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Registration Date</p>
                      <p className="font-semibold text-foreground">{response.vehicle.registration_date}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Vehicle Age</p>
                      <p className="font-semibold text-foreground">{response.vehicle.vehicle_age}</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Maker</p>
                      <p className="font-semibold text-foreground">{response.vehicle.maker}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Model</p>
                      <p className="font-semibold text-foreground">{response.vehicle.model}</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-4 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Engine No</p>
                      <p className="font-medium text-foreground">{response.vehicle.engine_no}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Chassis No</p>
                      <p className="font-medium text-foreground">{response.vehicle.chassis_no}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Fuel Type</p>
                      <p className="font-medium text-foreground">{response.vehicle.fuel_type}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Color</p>
                      <p className="font-medium text-foreground">{response.vehicle.color}</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-4 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Seating Capacity</p>
                      <p className="font-medium text-foreground">{response.vehicle.seating_capacity}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Unladen Weight</p>
                      <p className="font-medium text-foreground">{response.vehicle.unladen_weight} kg</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Wheelbase</p>
                      <p className="font-medium text-foreground">{response.vehicle.wheelbase} mm</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Body Type</p>
                      <p className="font-medium text-foreground">{response.vehicle.body_type}</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Vehicle Type</p>
                      <p className="font-medium text-foreground">{response.vehicle.vehicle_type}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Emission Norms</p>
                      <Badge>{response.vehicle.norms}</Badge>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Fitness Valid Upto</p>
                      <p className="font-medium text-foreground">{response.vehicle.fit_upto}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Financier Details */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5 text-primary" />
                    Financier Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">HP Type</p>
                      <Badge variant="outline">{response.financier.hp_type}</Badge>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Financer Name</p>
                      <p className="font-semibold text-foreground">{response.financier.financer_name}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Address</p>
                    <p className="font-medium text-foreground">{response.financier.address}</p>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Pincode</p>
                      <p className="font-medium text-foreground">{response.financier.pincode}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Hypothecation Date</p>
                      <p className="font-medium text-foreground">{response.financier.hypothecation_date}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Operation Date</p>
                      <p className="font-medium text-foreground">{response.financier.operation_date}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Insurance Details */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    Insurance Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Policy Number</p>
                      <p className="font-semibold text-foreground">{response.insurance.policy_no}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Insurance Company</p>
                      <p className="font-semibold text-foreground">{response.insurance.company}</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Valid From</p>
                      <p className="font-medium text-foreground">{response.insurance.valid_from}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Valid Till</p>
                      <p className="font-medium text-foreground">{response.insurance.valid_till}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Remaining Duration</p>
                      <Badge className="bg-gradient-primary text-white">{response.insurance.remaining_duration}</Badge>
                    </div>
                  </div>
                  <div className="flex items-center justify-between bg-muted p-4 rounded-lg">
                    <span className="text-sm text-muted-foreground">Insurance Expired</span>
                    <Badge variant={response.insurance.insurance_expired === 'N' ? 'default' : 'destructive'}>
                      {response.insurance.insurance_expired === 'N' ? 'ACTIVE' : 'EXPIRED'}
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Tax Details */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-primary" />
                    Tax Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Tax Mode</p>
                      <Badge className="bg-gradient-primary text-white">{response.tax.tax_mode}</Badge>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Payment Mode</p>
                      <p className="font-medium text-foreground">{response.tax.payment_mode}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Amount</p>
                      <p className="font-semibold text-lg text-foreground">₹{response.tax.amount}</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Tax Period</p>
                      <p className="font-medium text-foreground">{response.tax.from_date} to {response.tax.to_date}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Receipt Number</p>
                      <p className="font-medium text-foreground">{response.tax.receipt_no}</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Collected By</p>
                      <p className="font-medium text-foreground">{response.tax.collected_by}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Tax Valid Upto</p>
                      <p className="font-medium text-foreground">{response.tax.tax_upto}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Dealer Details */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Store className="h-5 w-5 text-primary" />
                    Dealer Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Dealer Code</p>
                      <p className="font-medium text-foreground">{response.dealer.dealer_code}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Dealer Name</p>
                      <p className="font-semibold text-foreground">{response.dealer.name}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Address</p>
                    <p className="font-medium text-foreground">{response.dealer.address}, {response.dealer.district} - {response.dealer.pincode}</p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Sale Amount</p>
                      <p className="font-semibold text-lg text-foreground">₹{response.dealer.sale_amount}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Purchase Date</p>
                      <p className="font-medium text-foreground">{response.dealer.purchase_date}</p>
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

export default RCAdvance;
