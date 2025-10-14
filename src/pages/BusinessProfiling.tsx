import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import Navbar from "@/components/Navbar";
import { ArrowLeft, Building2, MapPin, Phone, Mail, Calendar, CheckCircle2, Factory, Eye, EyeOff } from "lucide-react";
import { maskData, maskEmail, maskPhone } from "@/lib/utils";

const BusinessProfiling = () => {
  const navigate = useNavigate();
  const [mobileNumber, setMobileNumber] = useState("+91-9876543210");
  const [responseData, setResponseData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [showData, setShowData] = useState(false);
  const [consent, setConsent] = useState(true);

  const mockResponse = {
    mobile: "+91-9876543210",
    gst_registrations: [
      {
        gstin: "27ABCDE1234F1Z5",
        trade_name: "Tech Innovations Pvt Ltd",
        legal_name: "Tech Innovations Private Limited",
        registration_date: "2018-07-15",
        status: "Active",
        taxpayer_type: "Regular",
        state: "Maharashtra",
        address: "Plot 45, MIDC Industrial Area, Andheri East, Mumbai - 400093"
      },
      {
        gstin: "09ABCDE1234F1Z8",
        trade_name: "Digital Solutions LLP",
        legal_name: "Digital Solutions Limited Liability Partnership",
        registration_date: "2020-03-22",
        status: "Active",
        taxpayer_type: "Regular",
        state: "Uttar Pradesh",
        address: "Sector 62, Noida - 201301"
      }
    ],
    iec_codes: [
      {
        iec_code: "0512345678",
        firm_name: "Tech Innovations Pvt Ltd",
        address: "Plot 45, MIDC Industrial Area, Andheri East, Mumbai - 400093",
        date_of_issue: "2019-01-10",
        file_number: "IEC2019/12345",
        status: "Active"
      }
    ],
    udyam_registration: {
      udyam_number: "UDYAM-MH-27-0012345",
      enterprise_name: "Tech Innovations Pvt Ltd",
      enterprise_type: "Manufacturing",
      major_activity: "Computer and Electronics Manufacturing",
      social_category: "General",
      date_of_incorporation: "2018-05-20",
      date_of_udyam_registration: "2020-07-01",
      dic_office: "District Industries Centre, Mumbai",
      msme_office: "Office of the Development Commissioner (MSME), Mumbai",
      nic_2_digit: "26",
      nic_4_digit: "2620",
      nic_5_digit: "26209",
      plant_details: [
        {
          address: "Plot 45, MIDC Industrial Area, Andheri East, Mumbai - 400093",
          area_type: "Industrial",
          plant_type: "Manufacturing Unit"
        }
      ],
      enterprise_details: {
        investment_in_plant: "₹50,00,000",
        turnover: "₹5,00,00,000",
        number_of_employees: 45,
        classification: "Medium Enterprise"
      },
      contact: {
        email: "info@techinnovations.com",
        mobile: "+91-9876543210",
        landline: "022-12345678"
      }
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
            <h1 className="text-4xl font-bold">Business Profiling</h1>
            <p className="text-muted-foreground">Complete business profile and registrations based on mobile number</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Enter Mobile Number</CardTitle>
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
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">GST Registrations</p>
                      <Badge variant="default">{responseData.gst_registrations.length}</Badge>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">IEC Codes</p>
                      <Badge variant="default">{responseData.iec_codes.length}</Badge>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Udyam Registered</p>
                      <Badge variant="default">Yes</Badge>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Enterprise Type</p>
                      <Badge variant="secondary">{responseData.udyam_registration.enterprise_type}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* GST Registrations */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building2 className="h-5 w-5" />
                    GST Registrations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {responseData.gst_registrations.map((gst: any, idx: number) => (
                      <Card key={idx}>
                        <CardContent className="pt-6">
                          <div className="space-y-4">
                            <div className="flex items-start justify-between">
                              <div>
                                <p className="font-semibold text-lg">{gst.trade_name}</p>
                                <p className="text-sm text-muted-foreground">{gst.legal_name}</p>
                              </div>
                              <Badge variant={gst.status === "Active" ? "default" : "secondary"}>
                                {gst.status}
                              </Badge>
                            </div>
                            <div className="grid md:grid-cols-3 gap-4">
                              <div>
                                <p className="text-sm text-muted-foreground">GSTIN</p>
                                <p className="font-mono text-sm">{gst.gstin}</p>
                              </div>
                              <div>
                                <p className="text-sm text-muted-foreground">Registration Date</p>
                                <p className="text-sm">{new Date(gst.registration_date).toLocaleDateString('en-IN')}</p>
                              </div>
                              <div>
                                <p className="text-sm text-muted-foreground">Taxpayer Type</p>
                                <p className="text-sm">{gst.taxpayer_type}</p>
                              </div>
                              <div>
                                <p className="text-sm text-muted-foreground">State</p>
                                <p className="text-sm">{gst.state}</p>
                              </div>
                              <div className="md:col-span-2">
                                <p className="text-sm text-muted-foreground">Address</p>
                                <p className="text-sm">{gst.address}</p>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* IEC Codes */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building2 className="h-5 w-5" />
                    IEC Registrations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {responseData.iec_codes.map((iec: any, idx: number) => (
                      <Card key={idx}>
                        <CardContent className="pt-6">
                          <div className="grid md:grid-cols-3 gap-4">
                            <div>
                              <p className="text-sm text-muted-foreground">IEC Code</p>
                              <p className="font-mono">{iec.iec_code}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Firm Name</p>
                              <p>{iec.firm_name}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Status</p>
                              <Badge variant={iec.status === "Active" ? "default" : "secondary"}>
                                {iec.status}
                              </Badge>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Date of Issue</p>
                              <p className="text-sm">{new Date(iec.date_of_issue).toLocaleDateString('en-IN')}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">File Number</p>
                              <p className="text-sm">{iec.file_number}</p>
                            </div>
                            <div className="md:col-span-3">
                              <p className="text-sm text-muted-foreground">Address</p>
                              <p className="text-sm">{iec.address}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Udyam Registration */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Factory className="h-5 w-5" />
                    Udyam Registration Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Basic Info */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Udyam Number</p>
                        <p className="font-mono text-lg font-semibold">{responseData.udyam_registration.udyam_number}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Enterprise Name</p>
                        <p className="font-semibold">{responseData.udyam_registration.enterprise_name}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Enterprise Type</p>
                        <Badge>{responseData.udyam_registration.enterprise_type}</Badge>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Major Activity</p>
                        <p>{responseData.udyam_registration.major_activity}</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Date of Incorporation</p>
                        <p className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          {new Date(responseData.udyam_registration.date_of_incorporation).toLocaleDateString('en-IN')}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Udyam Registration Date</p>
                        <p className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          {new Date(responseData.udyam_registration.date_of_udyam_registration).toLocaleDateString('en-IN')}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Social Category</p>
                        <p>{responseData.udyam_registration.social_category}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Classification</p>
                        <Badge variant="secondary">{responseData.udyam_registration.enterprise_details.classification}</Badge>
                      </div>
                    </div>
                  </div>

                  {/* NIC Codes */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">NIC Codes</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <p className="text-sm text-muted-foreground">2-Digit</p>
                          <p className="font-mono">{responseData.udyam_registration.nic_2_digit}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">4-Digit</p>
                          <p className="font-mono">{responseData.udyam_registration.nic_4_digit}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">5-Digit</p>
                          <p className="font-mono">{responseData.udyam_registration.nic_5_digit}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Enterprise Details */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Enterprise Details</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-muted-foreground">Investment in Plant</p>
                          <p className="font-semibold">{responseData.udyam_registration.enterprise_details.investment_in_plant}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Annual Turnover</p>
                          <p className="font-semibold">{responseData.udyam_registration.enterprise_details.turnover}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Number of Employees</p>
                          <p className="font-semibold">{responseData.udyam_registration.enterprise_details.number_of_employees}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Plant Details */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        Plant Details
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      {responseData.udyam_registration.plant_details.map((plant: any, idx: number) => (
                        <div key={idx} className="space-y-2">
                          <div className="grid md:grid-cols-3 gap-4">
                            <div>
                              <p className="text-sm text-muted-foreground">Area Type</p>
                              <p>{plant.area_type}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Plant Type</p>
                              <p>{plant.plant_type}</p>
                            </div>
                            <div className="md:col-span-3">
                              <p className="text-sm text-muted-foreground">Address</p>
                              <p className="text-sm">{plant.address}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  {/* Office Details */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">DIC Office</p>
                      <p className="text-sm">{responseData.udyam_registration.dic_office}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">MSME Office</p>
                      <p className="text-sm">{responseData.udyam_registration.msme_office}</p>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base flex items-center gap-2">
                        <Phone className="h-4 w-4" />
                        Contact Information
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-muted-foreground" />
                          <div>
                            <p className="text-sm text-muted-foreground">Email</p>
                            <p className="text-sm">{responseData.udyam_registration.contact.email}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-muted-foreground" />
                          <div>
                            <p className="text-sm text-muted-foreground">Mobile</p>
                            <p className="text-sm">{responseData.udyam_registration.contact.mobile}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-muted-foreground" />
                          <div>
                            <p className="text-sm text-muted-foreground">Landline</p>
                            <p className="text-sm">{responseData.udyam_registration.contact.landline}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>

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

export default BusinessProfiling;
