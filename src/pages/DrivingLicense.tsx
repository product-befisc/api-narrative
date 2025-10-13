import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import Navbar from "@/components/Navbar";
import { ArrowLeft, User, Calendar, MapPin, IdCard, Car, CheckCircle2, Eye, EyeOff } from "lucide-react";
import { maskData, maskEmail, maskPhone } from "@/lib/utils";

const DrivingLicense = () => {
  const navigate = useNavigate();
  const [dlNumber, setDlNumber] = useState("DL-0720220123456");
  const [responseData, setResponseData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [showData, setShowData] = useState(false);
  const [consent, setConsent] = useState(true);

  const mockResponse = {
    dl_number: "DL-0720220123456",
    full_name: "Amit Kumar Singh",
    father_husband_name: "Rajendra Singh",
    dob: "1990-08-25",
    blood_group: "B+",
    status: "Active",
    issue_date: "2015-03-10",
    expiry_date: "2035-03-09",
    non_transport_validity: {
      from: "2015-03-10",
      to: "2035-03-09"
    },
    transport_validity: {
      from: "2018-06-15",
      to: "2038-06-14"
    },
    permanent_address: {
      line1: "House No 456",
      line2: "Sector 21",
      street: "Dwarka",
      city: "New Delhi",
      state: "Delhi",
      pincode: "110075",
      full_address: "House No 456, Sector 21, Dwarka, New Delhi, Delhi - 110075"
    },
    present_address: {
      line1: "Flat 302, Residency Tower",
      line2: "Gurugram Phase 2",
      street: "MG Road",
      city: "Gurugram",
      state: "Haryana",
      pincode: "122002",
      full_address: "Flat 302, Residency Tower, Gurugram Phase 2, MG Road, Gurugram, Haryana - 122002"
    },
    endorse_number: "END-2018-001",
    vehicle_categories: [
      {
        cov: "LMV",
        description: "Light Motor Vehicle (Car, Jeep)",
        issue_date: "2015-03-10"
      },
      {
        cov: "MCWG",
        description: "Motorcycle With Gear",
        issue_date: "2015-03-10"
      },
      {
        cov: "TRANS",
        description: "Transport Vehicle",
        issue_date: "2018-06-15"
      }
    ],
    image_url: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400",
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

        <div className="max-w-5xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-4xl font-bold">Driving License Verification</h1>
            <p className="text-muted-foreground">Verify driving license details and validity</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Enter DL Number</CardTitle>
              <CardDescription>Format: DL-0720220123456</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-4">
                <Input
                  placeholder="Enter DL number"
                  value={dlNumber}
                  onChange={(e) => setDlNumber(e.target.value.toUpperCase())}
                />
                <Button onClick={handleFetch} disabled={loading || !consent}>
                  {loading ? "Fetching..." : "Fetch Details"}
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
              {/* Profile Card with Image */}
              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <img
                        src={responseData.image_url}
                        alt="License holder"
                        className="w-32 h-32 rounded-lg object-cover border-2 border-primary/20"
                      />
                    </div>
                    <div className="flex-1 space-y-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Full Name</p>
                        <p className="text-2xl font-bold">{maskData(responseData.full_name, showData)}</p>
                      </div>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <p className="text-sm text-muted-foreground">DL Number</p>
                          <p className="font-mono font-semibold">{maskData(responseData.dl_number, showData)}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Status</p>
                          <Badge variant={responseData.status === "Active" ? "default" : "secondary"}>
                            <CheckCircle2 className="h-3 w-3 mr-1" />
                            {responseData.status}
                          </Badge>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Blood Group</p>
                          <Badge variant="outline">{responseData.blood_group}</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Personal Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    Personal Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Father/Husband Name</p>
                        <p className="font-medium">{maskData(responseData.father_husband_name, showData)}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Date of Birth</p>
                        <p className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          {new Date(responseData.dob).toLocaleDateString('en-IN', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Endorse Number</p>
                        <p className="font-mono text-sm">{responseData.endorse_number}</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Issue Date</p>
                        <p className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          {new Date(responseData.issue_date).toLocaleDateString('en-IN')}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Expiry Date</p>
                        <p className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          {new Date(responseData.expiry_date).toLocaleDateString('en-IN')}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Validity Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-base">
                      <IdCard className="h-5 w-5" />
                      Non-Transport Validity
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <p className="text-sm text-muted-foreground">Valid From</p>
                      <p>{new Date(responseData.non_transport_validity.from).toLocaleDateString('en-IN')}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Valid Until</p>
                      <p>{new Date(responseData.non_transport_validity.to).toLocaleDateString('en-IN')}</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-base">
                      <Car className="h-5 w-5" />
                      Transport Validity
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <p className="text-sm text-muted-foreground">Valid From</p>
                      <p>{new Date(responseData.transport_validity.from).toLocaleDateString('en-IN')}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Valid Until</p>
                      <p>{new Date(responseData.transport_validity.to).toLocaleDateString('en-IN')}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Vehicle Categories */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Car className="h-5 w-5" />
                    Vehicle Categories (CoV)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {responseData.vehicle_categories.map((category: any, idx: number) => (
                      <Card key={idx}>
                        <CardContent className="pt-6">
                          <div className="grid md:grid-cols-3 gap-4">
                            <div>
                              <p className="text-sm text-muted-foreground">Category</p>
                              <Badge variant="default" className="font-mono">{category.cov}</Badge>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Description</p>
                              <p className="text-sm">{category.description}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Issue Date</p>
                              <p className="text-sm">{new Date(category.issue_date).toLocaleDateString('en-IN')}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Address Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-base">
                      <MapPin className="h-5 w-5" />
                      Permanent Address
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed">{maskData(responseData.permanent_address.full_address, showData)}</p>
                    <div className="grid grid-cols-2 gap-3 mt-4">
                      <div>
                        <p className="text-sm text-muted-foreground">City</p>
                        <p className="text-sm">{maskData(responseData.permanent_address.city, showData)}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">State</p>
                        <p className="text-sm">{maskData(responseData.permanent_address.state, showData)}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Pincode</p>
                        <p className="text-sm font-mono">{maskData(responseData.permanent_address.pincode, showData)}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-base">
                      <MapPin className="h-5 w-5" />
                      Present Address
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed">{maskData(responseData.present_address.full_address, showData)}</p>
                    <div className="grid grid-cols-2 gap-3 mt-4">
                      <div>
                        <p className="text-sm text-muted-foreground">City</p>
                        <p className="text-sm">{maskData(responseData.present_address.city, showData)}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">State</p>
                        <p className="text-sm">{maskData(responseData.present_address.state, showData)}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Pincode</p>
                        <p className="text-sm font-mono">{maskData(responseData.present_address.pincode, showData)}</p>
                      </div>
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

export default DrivingLicense;
