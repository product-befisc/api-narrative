import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/Navbar";
import { ArrowLeft, MapPin, Phone, Mail, User, Eye, EyeOff } from "lucide-react";
import { maskData, maskEmail, maskPhone } from "@/lib/utils";

const AddressTracing = () => {
  const navigate = useNavigate();
  const [mobileNumber, setMobileNumber] = useState("+91-9876543210");
  const [responseData, setResponseData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [showData, setShowData] = useState(false);
  const [consent, setConsent] = useState(true);

  const mockResponse = {
    mobile: "+91-9876543210",
    addresses: [
      {
        id: 1,
        full_name: "Neha Sharma",
        mobile: "+91-9876543210",
        email: "neha.sharma@example.com",
        address1: "Flat 501, Skyline Apartments",
        address2: "Sector 45, Golf Course Road",
        city: "Gurugram",
        state: "Haryana",
        pincode: "122003",
        country: "India",
        type: "Residential",
        is_primary: true,
        tags: ["Home", "Delivery Address"]
      },
      {
        id: 2,
        full_name: "Neha Sharma",
        mobile: "+91-9876543210",
        email: "neha.sharma@example.com",
        address1: "Tech Hub, Office 302",
        address2: "Cyber City, DLF Phase 2",
        city: "Gurugram",
        state: "Haryana",
        pincode: "122002",
        country: "India",
        type: "Office",
        is_primary: false,
        tags: ["Work", "Office Address"]
      },
      {
        id: 3,
        full_name: "Neha Sharma",
        mobile: "+91-9876543210",
        email: "neha.work@techcorp.com",
        address1: "456, Green Valley Society",
        address2: "Near Metro Station, Sohna Road",
        city: "Gurugram",
        state: "Haryana",
        pincode: "122018",
        country: "India",
        type: "Residential",
        is_primary: false,
        tags: ["Secondary", "Weekend Home"]
      }
    ],
    total_addresses: 3,
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
          onClick={() => navigate("/product/id-proof?tab=solutions")}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to ID Proof
        </Button>

        <div className="max-w-6xl mx-auto space-y-6">
          <div className="mb-8">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div className="flex-1">
                <h1 className="text-4xl font-bold">Address Tracing</h1>
                <p className="text-muted-foreground">Trace all addresses associated with a mobile number</p>
              </div>
              <div className="flex flex-col items-end gap-2 min-w-[200px]">
                <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  APIs Included
                </h4>
                <div className="flex flex-col items-end gap-1.5">
                  <span className="text-sm font-medium text-foreground/80">Mobile to Address</span>
                  <span className="text-sm font-medium text-foreground/80">Geolocation</span>
                  <span className="text-sm font-medium text-foreground/80">Address Verification</span>
                </div>
              </div>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Enter Mobile Number</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="mobileNumber">Mobile Number</Label>
                <div className="flex gap-4">
                  <Input
                    id="mobileNumber"
                    placeholder="e.g., +91-9876543210"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                  />
                  <Button onClick={handleFetch} disabled={loading || !mobileNumber || !consent}>
                    {loading ? "Fetching..." : "Trace Addresses"}
                  </Button>
                </div>
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
              {/* Summary Card */}
              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Total Addresses Found</p>
                      <p className="text-3xl font-bold">{responseData.total_addresses}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Mobile Number</p>
                      <p className="font-mono font-semibold">{responseData.mobile}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Address Cards */}
              <div className="space-y-4">
                {responseData.addresses.map((address: any) => (
                  <Card key={address.id} className={address.is_primary ? "border-primary/40" : ""}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="space-y-1">
                          <CardTitle className="flex items-center gap-2">
                            <User className="h-5 w-5" />
                            {maskData(address.full_name, showData)}
                            {address.is_primary && (
                              <Badge variant="default" className="ml-2">Primary</Badge>
                            )}
                          </CardTitle>
                          <CardDescription>
                            <Badge variant="outline">{address.type}</Badge>
                          </CardDescription>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {address.tags.map((tag: string, idx: number) => (
                            <Badge key={idx} variant="secondary">{tag}</Badge>
                          ))}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Address Details */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div className="flex items-start gap-3">
                            <MapPin className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                            <div className="space-y-1">
                              <p className="text-sm text-muted-foreground">Full Address</p>
                              <p className="font-medium leading-relaxed">
                                {maskData(address.address1, showData)}<br />
                                {maskData(address.address2, showData)}<br />
                                {maskData(address.city, showData)}, {maskData(address.state, showData)} - {maskData(address.pincode, showData)}<br />
                                {address.country}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div className="flex items-center gap-3">
                            <Phone className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                            <div>
                              <p className="text-sm text-muted-foreground">Mobile</p>
                              <p className="font-mono text-sm">{maskPhone(address.mobile, showData)}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <Mail className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                            <div>
                              <p className="text-sm text-muted-foreground">Email</p>
                              <p className="text-sm break-all">{maskEmail(address.email, showData)}</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Location Details */}
                      <Card>
                        <CardContent className="pt-6">
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div>
                              <p className="text-sm text-muted-foreground">City</p>
                              <p className="font-medium">{address.city}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">State</p>
                              <p className="font-medium">{address.state}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Pincode</p>
                              <p className="font-mono font-medium">{address.pincode}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Country</p>
                              <p className="font-medium">{address.country}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                    </CardContent>
                  </Card>
                ))}
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

export default AddressTracing;
