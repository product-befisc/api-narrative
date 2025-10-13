import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import { ArrowLeft, Calendar, CheckCircle2, User, MapPin, Phone, Mail, Building } from "lucide-react";

const PANVerification = () => {
  const navigate = useNavigate();
  const [panNumber, setPanNumber] = useState("");
  const [responseData, setResponseData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const mockResponse = {
    pan: "ABCDE1234F",
    full_name: "Rajesh Kumar Sharma",
    first_name: "Rajesh",
    middle_name: "Kumar",
    last_name: "Sharma",
    masked_aadhaar: "XXXX-XXXX-5678",
    dob: "1985-06-15",
    gender: "Male",
    address: {
      line1: "123, Green Park",
      line2: "Near City Mall",
      street: "MG Road",
      zip: "110016",
      city: "New Delhi",
      state: "Delhi",
      country: "India",
      full_address: "123, Green Park, Near City Mall, MG Road, New Delhi, Delhi - 110016, India"
    },
    contact: {
      email: "rajesh.sharma@example.com",
      phone: "+91-9876543210"
    },
    taxable_status: "Taxable",
    is_director: true,
    is_sole_proprietor: false,
    din: "01234567",
    doj: "2015-03-20",
    category: "Individual",
    aadhaar_linked: true,
    gst_registered: true,
    udyam_registered: false,
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

        <div className="max-w-4xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-4xl font-bold">PAN Verification</h1>
            <p className="text-muted-foreground">Verify PAN details and get comprehensive profile information</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Enter PAN Number</CardTitle>
              <CardDescription>Format: ABCDE1234F</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-4">
                <Input
                  placeholder="Enter PAN number"
                  value={panNumber}
                  onChange={(e) => setPanNumber(e.target.value.toUpperCase())}
                  maxLength={10}
                />
                <Button onClick={handleFetch} disabled={loading || !panNumber}>
                  {loading ? "Fetching..." : "Fetch Details"}
                </Button>
              </div>
            </CardContent>
          </Card>

          {responseData && (
            <div className="space-y-6 animate-fade-in">
              {/* Key Highlights */}
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    Key Highlights
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Tax Status</p>
                      <Badge variant={responseData.taxable_status === "Taxable" ? "default" : "secondary"}>
                        {responseData.taxable_status}
                      </Badge>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Aadhaar Linked</p>
                      <Badge variant={responseData.aadhaar_linked ? "default" : "secondary"}>
                        {responseData.aadhaar_linked ? "Yes" : "No"}
                      </Badge>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">GST Registered</p>
                      <Badge variant={responseData.gst_registered ? "default" : "secondary"}>
                        {responseData.gst_registered ? "Yes" : "No"}
                      </Badge>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Director</p>
                      <Badge variant={responseData.is_director ? "default" : "secondary"}>
                        {responseData.is_director ? "Yes" : "No"}
                      </Badge>
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
                        <p className="text-sm text-muted-foreground">PAN Number</p>
                        <p className="font-semibold text-lg">{responseData.pan}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Full Name</p>
                        <p className="font-semibold">{responseData.full_name}</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          First: {responseData.first_name} | Middle: {responseData.middle_name} | Last: {responseData.last_name}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Masked Aadhaar</p>
                        <p className="font-mono">{responseData.masked_aadhaar}</p>
                      </div>
                    </div>
                    <div className="space-y-4">
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
                        <p className="text-sm text-muted-foreground">Gender</p>
                        <p>{responseData.gender}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Category</p>
                        <p>{responseData.category}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Address Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    Address Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-muted-foreground">Full Address</p>
                      <p className="font-medium">{responseData.address.full_address}</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4 pt-2">
                      <div>
                        <p className="text-sm text-muted-foreground">City</p>
                        <p>{responseData.address.city}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">State</p>
                        <p>{responseData.address.state}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">ZIP Code</p>
                        <p>{responseData.address.zip}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact & Business Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Phone className="h-5 w-5" />
                      Contact Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <p className="text-sm">{responseData.contact.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm text-muted-foreground">Phone</p>
                        <p className="text-sm">{responseData.contact.phone}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Building className="h-5 w-5" />
                      Business Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <p className="text-sm text-muted-foreground">Director Status</p>
                      <p>{responseData.is_director ? "Active Director" : "Not a Director"}</p>
                    </div>
                    {responseData.din && (
                      <div>
                        <p className="text-sm text-muted-foreground">DIN</p>
                        <p className="font-mono">{responseData.din}</p>
                      </div>
                    )}
                    {responseData.doj && (
                      <div>
                        <p className="text-sm text-muted-foreground">Date of Joining</p>
                        <p>{new Date(responseData.doj).toLocaleDateString('en-IN')}</p>
                      </div>
                    )}
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

export default PANVerification;
