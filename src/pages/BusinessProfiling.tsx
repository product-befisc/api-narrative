import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import Navbar from "@/components/Navbar";
import { ArrowLeft, Building2, MapPin, Phone, Mail, Calendar, CheckCircle2, Factory, Eye, EyeOff, ChevronDown, ChevronUp } from "lucide-react";
import { maskData, maskEmail, maskPhone } from "@/lib/utils";

const BusinessProfiling = () => {
  const navigate = useNavigate();
  const [mobileNumber, setMobileNumber] = useState("+91-9876543210");
  const [responseData, setResponseData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [showData, setShowData] = useState(false);
  const [consent, setConsent] = useState(true);
  const [expandedGst, setExpandedGst] = useState<{ [key: number]: boolean }>({});

  const mockResponse = {
    mobile: "+91-9876543210",
    gst_registrations: [
      {
        gstin: "27ABCDE1234F1Z5",
        trade_name: "Tech Innovations Pvt Ltd",
        legal_name: "Tech Innovations Private Limited",
        registration_date: "2018-07-15",
        register_date: "15/07/2018",
        status: "Active",
        current_registration_status: "Active",
        taxpayer_type: "Regular",
        tax_payer_type: "Regular",
        state: "Maharashtra",
        address: "Plot 45, MIDC Industrial Area, Andheri East, Mumbai - 400093",
        aggregate_turn_over: "Slab: Rs. 40 lakhs to 1.5 crores",
        authorized_signatory: ["Rajesh Kumar", "Priya Sharma", "Amit Singh"],
        business_constitution: "Private Limited Company",
        business_details: [
          {
            saccd: "998313",
            sdes: "Information technology (IT) consulting and support services"
          },
          {
            saccd: "998599",
            sdes: "Other support services n.e.c."
          },
          {
            saccd: "998598",
            sdes: "Other information services n.e.c."
          }
        ],
        business_nature: ["Supplier of Services", "Recipient of Goods or Services"],
        can_flag: "NA",
        central_jurisdiction: "Commissionerate - MUMBAI,Division - DIVISION ANDHERI,Range - RANGE - 2",
        compliance_rating: "NA",
        filing_status: [
          {
            fy: "2022-2023",
            taxp: "January",
            mof: "ONLINE",
            dof: "11/02/2023",
            rtntype: "GSTR1",
            arn: "NA",
            status: "Filed"
          },
          {
            fy: "2022-2023",
            taxp: "January",
            mof: "ONLINE",
            dof: "16/02/2023",
            rtntype: "GSTR3B",
            arn: "NA",
            status: "Filed"
          }
        ],
        is_field_visit_conducted: "No",
        mandate_e_invoice: "No",
        primary_business_address: {
          business_nature: "Supplier of Services, Recipient of Goods or Services",
          detailed_address: "NA",
          last_updated_date: "NA",
          registered_address: "Plot 45, MIDC Industrial Area, Andheri East, Mumbai, Maharashtra, 400093"
        },
        register_cancellation_date: "",
        state_jurisdiction: "State - Maharashtra,Division - Division - 3,Range - Range - 7",
        gross_total_income: "NA",
        gross_total_income_financial_year: "2019-2020",
        business_email: "contact@techinnovations.com",
        business_mobile: "9876543210"
      },
      {
        gstin: "09ABCDE1234F1Z8",
        trade_name: "Digital Solutions LLP",
        legal_name: "Digital Solutions Limited Liability Partnership",
        registration_date: "2020-03-22",
        register_date: "22/03/2020",
        status: "Active",
        current_registration_status: "Active",
        taxpayer_type: "Regular",
        tax_payer_type: "Regular",
        state: "Uttar Pradesh",
        address: "Sector 62, Noida - 201301",
        aggregate_turn_over: "Slab: Rs. 20 lakhs to 40 lakhs",
        authorized_signatory: ["Neha Verma", "Suresh Patel"],
        business_constitution: "Limited Liability Partnership",
        business_details: [
          {
            saccd: "998314",
            sdes: "Software development and programming services"
          }
        ],
        business_nature: ["Supplier of Services"],
        can_flag: "NA",
        central_jurisdiction: "Commissionerate - GAUTAM BUDDHA NAGAR,Division - DIVISION I GAUTAM BUDH NAGAR,Range - RANGE - 1",
        compliance_rating: "NA",
        filing_status: [
          {
            fy: "2022-2023",
            taxp: "February",
            mof: "ONLINE",
            dof: "12/03/2023",
            rtntype: "GSTR1",
            arn: "NA",
            status: "Filed"
          }
        ],
        is_field_visit_conducted: "No",
        mandate_e_invoice: "No",
        primary_business_address: {
          business_nature: "Supplier of Services",
          detailed_address: "NA",
          last_updated_date: "NA",
          registered_address: "Sector 62, Noida, Gautam Buddha Nagar, Uttar Pradesh, 201301"
        },
        register_cancellation_date: "",
        state_jurisdiction: "State - Uttar Pradesh,Zone - Gautambudha Nagar,Range - Gautambudha Nagar(A)",
        gross_total_income: "NA",
        gross_total_income_financial_year: "2019-2020",
        business_email: "info@digitalsolutions.com",
        business_mobile: "9012345678"
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
                <h1 className="text-4xl font-bold">Business Profiling</h1>
                <p className="text-muted-foreground">Complete business profile and registrations based on mobile number</p>
              </div>
              <div className="flex flex-col items-end gap-2 min-w-[200px]">
                <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  APIs Included
                </h4>
                <div className="flex flex-col items-end gap-1.5">
                  <span className="text-sm font-medium text-foreground/80">GST Details</span>
                  <span className="text-sm font-medium text-foreground/80">CIN Lookup</span>
                  <span className="text-sm font-medium text-foreground/80">Company Master Data</span>
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
                    {loading ? "Fetching..." : "Fetch Profile"}
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
                          <div className="space-y-6">
                            {/* Header */}
                            <div className="flex items-start justify-between">
                              <div>
                                <p className="font-semibold text-lg">{gst.trade_name}</p>
                                <p className="text-sm text-muted-foreground">{gst.legal_name}</p>
                              </div>
                              <Badge variant={gst.current_registration_status === "Active" ? "default" : "secondary"}>
                                {gst.current_registration_status}
                              </Badge>
                            </div>

                            {/* Basic Info - Always Visible */}
                            <div className="grid md:grid-cols-3 gap-4">
                              <div>
                                <p className="text-sm text-muted-foreground">GSTIN</p>
                                <p className="font-mono text-sm">{gst.gstin}</p>
                              </div>
                              <div>
                                <p className="text-sm text-muted-foreground">Registration Date</p>
                                <p className="text-sm">{gst.register_date}</p>
                              </div>
                              <div>
                                <p className="text-sm text-muted-foreground">Taxpayer Type</p>
                                <p className="text-sm">{gst.tax_payer_type}</p>
                              </div>
                              <div>
                                <p className="text-sm text-muted-foreground">Business Constitution</p>
                                <p className="text-sm">{gst.business_constitution}</p>
                              </div>
                              <div>
                                <p className="text-sm text-muted-foreground">Aggregate Turnover</p>
                                <p className="text-sm">{gst.aggregate_turn_over}</p>
                              </div>
                              <div>
                                <p className="text-sm text-muted-foreground">State</p>
                                <p className="text-sm">{gst.state}</p>
                              </div>
                            </div>

                            {/* Contact Info */}
                            <div className="grid md:grid-cols-2 gap-4">
                              <div className="flex items-center gap-2">
                                <Mail className="h-4 w-4 text-muted-foreground" />
                                <div>
                                  <p className="text-sm text-muted-foreground">Business Email</p>
                                  <p className="text-sm break-all">{maskEmail(gst.business_email, showData)}</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <Phone className="h-4 w-4 text-muted-foreground" />
                                <div>
                                  <p className="text-sm text-muted-foreground">Business Mobile</p>
                                  <p className="text-sm">{maskPhone(gst.business_mobile, showData)}</p>
                                </div>
                              </div>
                            </div>

                            {/* Business Nature */}
                            <div>
                              <p className="text-sm text-muted-foreground mb-2">Business Nature</p>
                              <div className="flex flex-wrap gap-2">
                                {gst.business_nature.map((nature: string, nIdx: number) => (
                                  <Badge key={nIdx} variant="secondary">{nature}</Badge>
                                ))}
                              </div>
                            </div>

                            {/* Authorized Signatories */}
                            <div>
                              <p className="text-sm text-muted-foreground mb-2">Authorized Signatories</p>
                              <div className="flex flex-wrap gap-2">
                                {gst.authorized_signatory.map((signatory: string, sIdx: number) => (
                                  <Badge key={sIdx} variant="outline">{maskData(signatory, showData)}</Badge>
                                ))}
                              </div>
                            </div>

                            {/* Collapsible Section - Show More */}
                            <Collapsible open={expandedGst[idx]} onOpenChange={(open) => setExpandedGst({ ...expandedGst, [idx]: open })}>
                              <CollapsibleTrigger asChild>
                                <Button variant="outline" className="w-full">
                                  {expandedGst[idx] ? (
                                    <>
                                      <ChevronUp className="h-4 w-4 mr-2" />
                                      Show Less Details
                                    </>
                                  ) : (
                                    <>
                                      <ChevronDown className="h-4 w-4 mr-2" />
                                      Show More Details
                                    </>
                                  )}
                                </Button>
                              </CollapsibleTrigger>
                              <CollapsibleContent className="space-y-6 mt-6">
                                {/* Business Details/Services */}
                                <Card className="bg-muted/50">
                                  <CardHeader>
                                    <CardTitle className="text-base">Business Details & Services</CardTitle>
                                  </CardHeader>
                                  <CardContent className="space-y-3">
                                    {gst.business_details.map((detail: any, dIdx: number) => (
                                      <div key={dIdx} className="flex gap-3">
                                        <Badge variant="outline" className="font-mono">{detail.saccd}</Badge>
                                        <p className="text-sm">{detail.sdes}</p>
                                      </div>
                                    ))}
                                  </CardContent>
                                </Card>

                                {/* Jurisdiction Info */}
                                <div className="grid md:grid-cols-2 gap-4">
                                  <Card className="bg-muted/50">
                                    <CardHeader>
                                      <CardTitle className="text-base">Central Jurisdiction</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                      <p className="text-sm">{gst.central_jurisdiction}</p>
                                    </CardContent>
                                  </Card>
                                  <Card className="bg-muted/50">
                                    <CardHeader>
                                      <CardTitle className="text-base">State Jurisdiction</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                      <p className="text-sm">{gst.state_jurisdiction}</p>
                                    </CardContent>
                                  </Card>
                                </div>

                                {/* Primary Business Address */}
                                <Card className="bg-muted/50">
                                  <CardHeader>
                                    <CardTitle className="text-base flex items-center gap-2">
                                      <MapPin className="h-4 w-4" />
                                      Primary Business Address
                                    </CardTitle>
                                  </CardHeader>
                                  <CardContent className="space-y-3">
                                    <div>
                                      <p className="text-sm text-muted-foreground">Registered Address</p>
                                      <p className="text-sm">{gst.primary_business_address.registered_address}</p>
                                    </div>
                                    <div>
                                      <p className="text-sm text-muted-foreground">Business Nature</p>
                                      <p className="text-sm">{gst.primary_business_address.business_nature}</p>
                                    </div>
                                  </CardContent>
                                </Card>

                                {/* Filing Status */}
                                <Card className="bg-muted/50">
                                  <CardHeader>
                                    <CardTitle className="text-base">Filing Status</CardTitle>
                                  </CardHeader>
                                  <CardContent>
                                    <div className="space-y-3">
                                      {gst.filing_status.map((filing: any, fIdx: number) => (
                                        <div key={fIdx} className="grid grid-cols-2 md:grid-cols-5 gap-3 text-sm p-3 border rounded-lg">
                                          <div>
                                            <p className="text-muted-foreground">FY</p>
                                            <p className="font-medium">{filing.fy}</p>
                                          </div>
                                          <div>
                                            <p className="text-muted-foreground">Tax Period</p>
                                            <p className="font-medium">{filing.taxp}</p>
                                          </div>
                                          <div>
                                            <p className="text-muted-foreground">Return Type</p>
                                            <p className="font-medium">{filing.rtntype}</p>
                                          </div>
                                          <div>
                                            <p className="text-muted-foreground">Date of Filing</p>
                                            <p className="font-medium">{filing.dof}</p>
                                          </div>
                                          <div>
                                            <p className="text-muted-foreground">Status</p>
                                            <Badge variant={filing.status === "Filed" ? "default" : "secondary"}>
                                              {filing.status}
                                            </Badge>
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  </CardContent>
                                </Card>

                                {/* Additional Details */}
                                <div className="grid md:grid-cols-3 gap-4">
                                  <div>
                                    <p className="text-sm text-muted-foreground">Field Visit Conducted</p>
                                    <p className="text-sm font-medium">{gst.is_field_visit_conducted}</p>
                                  </div>
                                  <div>
                                    <p className="text-sm text-muted-foreground">E-Invoice Mandate</p>
                                    <p className="text-sm font-medium">{gst.mandate_e_invoice}</p>
                                  </div>
                                  <div>
                                    <p className="text-sm text-muted-foreground">Compliance Rating</p>
                                    <p className="text-sm font-medium">{gst.compliance_rating}</p>
                                  </div>
                                  <div>
                                    <p className="text-sm text-muted-foreground">CAN Flag</p>
                                    <p className="text-sm font-medium">{gst.can_flag}</p>
                                  </div>
                                  <div>
                                    <p className="text-sm text-muted-foreground">Gross Total Income (FY)</p>
                                    <p className="text-sm font-medium">{gst.gross_total_income} ({gst.gross_total_income_financial_year})</p>
                                  </div>
                                </div>
                              </CollapsibleContent>
                            </Collapsible>
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
