import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import Navbar from "@/components/Navbar";
import { ArrowLeft, User, CreditCard, Briefcase, Phone, MapPin, Building2, Fuel, CheckCircle2, Eye, EyeOff } from "lucide-react";
import { maskData, maskEmail, maskPhone } from "@/lib/utils";

const CustomerProfiling = () => {
  const navigate = useNavigate();
  const [mobileNumber, setMobileNumber] = useState("+91-9876543210");
  const [responseData, setResponseData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [showData, setShowData] = useState(false);
  const [consent, setConsent] = useState(true);

  const mockResponse = {
    mobile: "+91-9876543210",
    digital_payment_id: {
      name: "Priya Sharma",
      upi_id: "priya.sharma@okaxis",
      bank: "Axis Bank",
      branch: "Mumbai Central",
      contact: "+91-9876543210",
      address: "456 Marine Drive, Mumbai, Maharashtra - 400020"
    },
    lpg_connections: [
      {
        provider: "Bharat Gas",
        consumer_id: "BG12345678",
        distributor: "Mumbai Gas Agency",
        distributor_contact: "022-12345678",
        address: "456 Marine Drive, Mumbai"
      },
      {
        provider: "HP Gas",
        consumer_id: "HP87654321",
        distributor: "HP Distributor Mumbai",
        distributor_contact: "022-87654321",
        address: "456 Marine Drive, Mumbai"
      }
    ],
    msme_info: {
      registered: true,
      udyam_number: "UDYAM-MH-01-0012345",
      enterprise_name: "Sharma Enterprises"
    },
    epfo: {
      uan: "101234567890",
      name: "Priya Sharma",
      active: true
    },
    director_info: {
      is_director: true,
      pan: "ABCDE1234F",
      din: "01234567",
      companies: ["Tech Solutions Pvt Ltd", "Digital Innovations LLP"]
    },
    telco_info: {
      operator: "Airtel",
      circle: "Maharashtra",
      mobile_age_months: 84,
      status: "Active"
    },
    gst_info: {
      registered: true,
      gstin: "27ABCDE1234F1Z5",
      trade_name: "Sharma Enterprises"
    },
    iec_info: {
      registered: true,
      iec_code: "0512345678"
    },
    whatsapp_info: {
      registered: true,
      business_account: false
    },
    esic_info: {
      registered: true,
      insurance_number: "1234567890123456"
    },
    timestamp: new Date().toISOString()
  };

  const handleFetch = () => {
    setLoading(true);
    setTimeout(() => {
      setResponseData(mockResponse);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate("/product/id-proof")}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to ID Proof
        </Button>

        <div className="max-w-6xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-4xl font-bold">Customer Profiling</h1>
            <p className="text-muted-foreground">Comprehensive customer profile based on mobile number</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Enter Mobile Number</CardTitle>
              <CardDescription>Format: +91-XXXXXXXXXX or 10 digits</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-4">
                <Input
                  placeholder="Enter mobile number"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                />
                <Button onClick={handleFetch} disabled={loading || !mobileNumber || !consent}>
                  {loading ? "Fetching..." : "Fetch Profile"}
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

          {responseData && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex justify-end mb-4">
                <Button variant="outline" size="sm" onClick={() => setShowData(!showData)}>
                  {showData ? <EyeOff className="h-4 w-4 mr-2" /> : <Eye className="h-4 w-4 mr-2" />}
                  {showData ? 'Hide' : 'Show'} Data
                </Button>
              </div>
              {/* Key Highlights */}
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    Key Highlights
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">MSME</p>
                      <Badge variant={responseData.msme_info.registered ? "default" : "secondary"}>
                        {responseData.msme_info.registered ? "Registered" : "Not Registered"}
                      </Badge>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">GST</p>
                      <Badge variant={responseData.gst_info.registered ? "default" : "secondary"}>
                        {responseData.gst_info.registered ? "Registered" : "Not Registered"}
                      </Badge>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">IEC</p>
                      <Badge variant={responseData.iec_info.registered ? "default" : "secondary"}>
                        {responseData.iec_info.registered ? "Registered" : "Not Registered"}
                      </Badge>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">EPFO</p>
                      <Badge variant={responseData.epfo.active ? "default" : "secondary"}>
                        {responseData.epfo.active ? "Active" : "Inactive"}
                      </Badge>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Director</p>
                      <Badge variant={responseData.director_info.is_director ? "default" : "secondary"}>
                        {responseData.director_info.is_director ? "Yes" : "No"}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Digital Payment Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5" />
                    Digital Payment ID
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Name</p>
                        <p className="font-semibold">{maskData(responseData.digital_payment_id.name, showData)}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">UPI ID</p>
                        <p className="font-mono text-sm">{maskData(responseData.digital_payment_id.upi_id, showData)}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Contact</p>
                        <p>{maskPhone(responseData.digital_payment_id.contact, showData)}</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Bank</p>
                        <p>{responseData.digital_payment_id.bank}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Branch</p>
                        <p>{responseData.digital_payment_id.branch}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Address</p>
                        <p className="text-sm">{maskData(responseData.digital_payment_id.address, showData)}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* LPG Connections */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Fuel className="h-5 w-5" />
                    LPG Connections
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {responseData.lpg_connections.map((lpg: any, idx: number) => (
                      <Card key={idx}>
                        <CardContent className="pt-6">
                          <div className="grid md:grid-cols-3 gap-4">
                            <div>
                              <p className="text-sm text-muted-foreground">Provider</p>
                              <p className="font-semibold">{lpg.provider}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Consumer ID</p>
                              <p className="font-mono text-sm">{maskData(lpg.consumer_id, showData)}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Distributor</p>
                              <p className="text-sm">{lpg.distributor}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Contact</p>
                              <p className="text-sm">{maskPhone(lpg.distributor_contact, showData)}</p>
                            </div>
                            <div className="md:col-span-2">
                              <p className="text-sm text-muted-foreground">Address</p>
                              <p className="text-sm">{lpg.address}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Business & Employment Info */}
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Building2 className="h-5 w-5" />
                      MSME Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <p className="text-sm text-muted-foreground">Status</p>
                      <Badge variant={responseData.msme_info.registered ? "default" : "secondary"}>
                        {responseData.msme_info.registered ? "Registered" : "Not Registered"}
                      </Badge>
                    </div>
                    {responseData.msme_info.udyam_number && (
                      <div>
                        <p className="text-sm text-muted-foreground">Udyam Number</p>
                        <p className="font-mono text-sm">{responseData.msme_info.udyam_number}</p>
                      </div>
                    )}
                    {responseData.msme_info.enterprise_name && (
                      <div>
                        <p className="text-sm text-muted-foreground">Enterprise Name</p>
                        <p>{responseData.msme_info.enterprise_name}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Briefcase className="h-5 w-5" />
                      EPFO Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <p className="text-sm text-muted-foreground">UAN</p>
                      <p className="font-mono">{responseData.epfo.uan}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Name</p>
                      <p>{responseData.epfo.name}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Status</p>
                      <Badge variant={responseData.epfo.active ? "default" : "secondary"}>
                        {responseData.epfo.active ? "Active" : "Inactive"}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Director Information */}
              {responseData.director_info.is_director && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <User className="h-5 w-5" />
                      Director Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">PAN</p>
                        <p className="font-mono">{maskData(responseData.director_info.pan, showData)}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">DIN</p>
                        <p className="font-mono">{maskData(responseData.director_info.din, showData)}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Companies</p>
                        <div className="space-y-1">
                          {responseData.director_info.companies.map((company: string, idx: number) => (
                            <p key={idx} className="text-sm">{company}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Telco & Other Services */}
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Phone className="h-5 w-5" />
                      Telco Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Operator</p>
                        <p>{responseData.telco_info.operator}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Circle</p>
                        <p>{responseData.telco_info.circle}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Mobile Age</p>
                        <p>{responseData.telco_info.mobile_age_months} months</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Status</p>
                        <Badge>{responseData.telco_info.status}</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>GST & IEC Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground">GSTIN</p>
                      <p className="font-mono text-sm">{maskData(responseData.gst_info.gstin, showData)}</p>
                      <p className="text-sm mt-1">{responseData.gst_info.trade_name}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">IEC Code</p>
                      <p className="font-mono text-sm">{maskData(responseData.iec_info.iec_code, showData)}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Response Metadata */}
              <Card className="bg-muted/50">
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground">
                    Response Time: {new Date(responseData.timestamp).toLocaleString('en-IN')}
                  </p>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomerProfiling;
