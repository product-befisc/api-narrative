import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import Navbar from "@/components/Navbar";
import { ArrowLeft, User, CreditCard, Briefcase, Phone, MapPin, Building2, Fuel, CheckCircle2, Eye, EyeOff, FileText, ChevronDown, ChevronUp } from "lucide-react";
import { maskData, maskEmail, maskPhone } from "@/lib/utils";

const CustomerProfiling = () => {
  const navigate = useNavigate();
  const [mobileNumber, setMobileNumber] = useState("+91-9876543210");
  const [responseData, setResponseData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [showData, setShowData] = useState(false);
  const [consent, setConsent] = useState(true);
  const [showFullBureauReport, setShowFullBureauReport] = useState(false);

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
    bureau_report: {
      name: "RAM SINGH",
      mobile: "9876543210",
      pan: "ABCPD1234E",
      credit_score: 759,
      credit_report: {
        CreditProfileHeader: {
          ReportDate: 20250520,
          ReportTime: 150911,
          Version: "V2.4",
          ReportNumber: 1747733876789
        },
        Current_Application: {
          Current_Application_Details: {
            Enquiry_Reason: "99",
            Finance_Purpose: "99",
            Amount_Financed: "0",
            Duration_Of_Agreement: "0",
            Current_Applicant_Details: {
              Last_Name: "SINGH",
              First_Name: "RAM",
              Middle_Name1: "",
              Gender_Code: "1",
              IncomeTaxPan: "ABCPD1234E",
              Date_Of_Birth_Applicant: "19876546",
              Telephone_Number_Applicant_1st: "9876543210",
              EMailId: "RAMSINGH@EMAIL.COM"
            },
            Current_Applicant_Address_Details: {
              FlatNoPlotNoHouseNo: "ABC COLONY",
              State: "27",
              PINCode: "400612",
              Country_Code: "IB"
            }
          }
        },
        CAIS_Account: {
          CAIS_Summary: {
            Credit_Account: {
              CreditAccountTotal: "2",
              CreditAccountActive: "1",
              CreditAccountDefault: "0",
              CreditAccountClosed: "1"
            },
            Total_Outstanding_Balance: {
              Outstanding_Balance_Secured: "21234",
              Outstanding_Balance_UnSecured: "0",
              Outstanding_Balance_All: "21234"
            }
          },
          CAIS_Account_DETAILS: [
            {
              Identification_Number: "NBFXXXXXXXX",
              Subscriber_Name: "XXXXXXXXXX",
              Account_Number: "XXXXX4748",
              Portfolio_Type: "I",
              Account_Type: "06",
              Open_Date: "20230627",
              Highest_Credit_or_Original_Loan_Amount: "11234",
              Terms_Duration: "010",
              Account_Status: "13",
              Current_Balance: "0",
              Date_Reported: "20240531",
              Date_Closed: "20240510",
              CAIS_Holder_Details: [
                {
                  Surname_Non_Normalized: "RAM SINGH",
                  First_Name_Non_Normalized: "",
                  Middle_Name_1_Non_Normalized: "SHAM",
                  Gender_Code: "1",
                  Income_TAX_PAN: "ABCPD1234E",
                  Date_of_birth: "19990101"
                }
              ],
              CAIS_Holder_Address_Details: [
                {
                  First_Line_Of_Address_non_normalized: "ABC COLONY",
                  State_non_normalized: "27",
                  ZIP_Postal_Code_non_normalized: "400612"
                }
              ]
            }
          ]
        },
        TotalCAPS_Summary: {
          TotalCAPSLast7Days: "6",
          TotalCAPSLast30Days: "6",
          TotalCAPSLast90Days: "6",
          TotalCAPSLast180Days: "6"
        },
        SCORE: {
          FCIREXScore: 999
        }
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
          <div className="text-center space-y-2">
            <h1 className="text-4xl font-bold">Customer Profiling</h1>
            <p className="text-muted-foreground">Comprehensive customer profile based on mobile number</p>
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
                        <p className="text-sm text-muted-foreground">Branch Address</p>
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

              {/* Bureau Report */}
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Bureau Report
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Key Highlights */}
                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                    <div className="grid md:grid-cols-4 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Name</p>
                        <p className="font-semibold break-words">{maskData(responseData.bureau_report.name, showData)}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Mobile</p>
                        <p className="font-semibold break-all">{maskPhone(responseData.bureau_report.mobile, showData)}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">PAN</p>
                        <p className="font-mono font-semibold break-all">{maskData(responseData.bureau_report.pan, showData)}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Credit Score</p>
                        <p className="text-2xl font-bold text-primary">{responseData.bureau_report.credit_score}</p>
                      </div>
                    </div>
                  </div>

                  {/* Credit Summary */}
                  <div className="space-y-3">
                    <h4 className="font-semibold">Credit Account Summary</h4>
                    <div className="grid md:grid-cols-4 gap-4">
                      <div className="bg-muted/50 p-3 rounded-lg">
                        <p className="text-xs text-muted-foreground">Total Accounts</p>
                        <p className="text-lg font-bold">{responseData.bureau_report.credit_report.CAIS_Account.CAIS_Summary.Credit_Account.CreditAccountTotal}</p>
                      </div>
                      <div className="bg-muted/50 p-3 rounded-lg">
                        <p className="text-xs text-muted-foreground">Active Accounts</p>
                        <p className="text-lg font-bold text-green-600">{responseData.bureau_report.credit_report.CAIS_Account.CAIS_Summary.Credit_Account.CreditAccountActive}</p>
                      </div>
                      <div className="bg-muted/50 p-3 rounded-lg">
                        <p className="text-xs text-muted-foreground">Closed Accounts</p>
                        <p className="text-lg font-bold">{responseData.bureau_report.credit_report.CAIS_Account.CAIS_Summary.Credit_Account.CreditAccountClosed}</p>
                      </div>
                      <div className="bg-muted/50 p-3 rounded-lg">
                        <p className="text-xs text-muted-foreground">Outstanding Balance</p>
                        <p className="text-lg font-bold">₹{responseData.bureau_report.credit_report.CAIS_Account.CAIS_Summary.Total_Outstanding_Balance.Outstanding_Balance_All}</p>
                      </div>
                    </div>
                  </div>

                  {/* Enquiries Summary */}
                  <div className="space-y-3">
                    <h4 className="font-semibold">Credit Enquiries</h4>
                    <div className="grid md:grid-cols-4 gap-4">
                      <div className="bg-muted/50 p-3 rounded-lg">
                        <p className="text-xs text-muted-foreground">Last 7 Days</p>
                        <p className="text-lg font-bold">{responseData.bureau_report.credit_report.TotalCAPS_Summary.TotalCAPSLast7Days}</p>
                      </div>
                      <div className="bg-muted/50 p-3 rounded-lg">
                        <p className="text-xs text-muted-foreground">Last 30 Days</p>
                        <p className="text-lg font-bold">{responseData.bureau_report.credit_report.TotalCAPS_Summary.TotalCAPSLast30Days}</p>
                      </div>
                      <div className="bg-muted/50 p-3 rounded-lg">
                        <p className="text-xs text-muted-foreground">Last 90 Days</p>
                        <p className="text-lg font-bold">{responseData.bureau_report.credit_report.TotalCAPS_Summary.TotalCAPSLast90Days}</p>
                      </div>
                      <div className="bg-muted/50 p-3 rounded-lg">
                        <p className="text-xs text-muted-foreground">Last 180 Days</p>
                        <p className="text-lg font-bold">{responseData.bureau_report.credit_report.TotalCAPS_Summary.TotalCAPSLast180Days}</p>
                      </div>
                    </div>
                  </div>

                  {/* Show More Button */}
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => setShowFullBureauReport(!showFullBureauReport)}
                  >
                    {showFullBureauReport ? (
                      <>
                        <ChevronUp className="h-4 w-4 mr-2" />
                        Show Less
                      </>
                    ) : (
                      <>
                        <ChevronDown className="h-4 w-4 mr-2" />
                        Show More Details
                      </>
                    )}
                  </Button>

                  {/* Expanded Content */}
                  {showFullBureauReport && (
                    <div className="space-y-4 animate-fade-in">
                      {/* Report Header */}
                      <div className="border-t pt-4">
                        <h4 className="font-semibold mb-3">Credit Profile Header</h4>
                        <div className="grid md:grid-cols-2 gap-4 bg-muted/30 p-4 rounded-lg">
                          <div>
                            <p className="text-sm text-muted-foreground">Report Date</p>
                            <p className="font-mono text-sm">{responseData.bureau_report.credit_report.CreditProfileHeader.ReportDate}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Report Time</p>
                            <p className="font-mono text-sm">{responseData.bureau_report.credit_report.CreditProfileHeader.ReportTime}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Version</p>
                            <p className="font-mono text-sm">{responseData.bureau_report.credit_report.CreditProfileHeader.Version}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Report Number</p>
                            <p className="font-mono text-sm break-all">{responseData.bureau_report.credit_report.CreditProfileHeader.ReportNumber}</p>
                          </div>
                        </div>
                      </div>

                      {/* Current Application Details */}
                      <div>
                        <h4 className="font-semibold mb-3">Current Application Details</h4>
                        <div className="space-y-4">
                          <div className="bg-muted/30 p-4 rounded-lg">
                            <h5 className="text-sm font-semibold mb-3">Applicant Details</h5>
                            <div className="grid md:grid-cols-3 gap-4">
                              <div>
                                <p className="text-sm text-muted-foreground">First Name</p>
                                <p className="text-sm break-words">{maskData(responseData.bureau_report.credit_report.Current_Application.Current_Application_Details.Current_Applicant_Details.First_Name, showData)}</p>
                              </div>
                              <div>
                                <p className="text-sm text-muted-foreground">Last Name</p>
                                <p className="text-sm break-words">{maskData(responseData.bureau_report.credit_report.Current_Application.Current_Application_Details.Current_Applicant_Details.Last_Name, showData)}</p>
                              </div>
                              <div>
                                <p className="text-sm text-muted-foreground">PAN</p>
                                <p className="text-sm font-mono break-all">{maskData(responseData.bureau_report.credit_report.Current_Application.Current_Application_Details.Current_Applicant_Details.IncomeTaxPan, showData)}</p>
                              </div>
                              <div>
                                <p className="text-sm text-muted-foreground">Email</p>
                                <p className="text-sm break-all">{maskEmail(responseData.bureau_report.credit_report.Current_Application.Current_Application_Details.Current_Applicant_Details.EMailId, showData)}</p>
                              </div>
                              <div>
                                <p className="text-sm text-muted-foreground">Phone</p>
                                <p className="text-sm break-all">{maskPhone(responseData.bureau_report.credit_report.Current_Application.Current_Application_Details.Current_Applicant_Details.Telephone_Number_Applicant_1st, showData)}</p>
                              </div>
                            </div>
                          </div>

                          <div className="bg-muted/30 p-4 rounded-lg">
                            <h5 className="text-sm font-semibold mb-3">Address Details</h5>
                            <div className="grid md:grid-cols-3 gap-4">
                              <div>
                                <p className="text-sm text-muted-foreground">Address</p>
                                <p className="text-sm break-words">{maskData(responseData.bureau_report.credit_report.Current_Application.Current_Application_Details.Current_Applicant_Address_Details.FlatNoPlotNoHouseNo, showData)}</p>
                              </div>
                              <div>
                                <p className="text-sm text-muted-foreground">PIN Code</p>
                                <p className="text-sm">{maskData(responseData.bureau_report.credit_report.Current_Application.Current_Application_Details.Current_Applicant_Address_Details.PINCode, showData)}</p>
                              </div>
                              <div>
                                <p className="text-sm text-muted-foreground">State Code</p>
                                <p className="text-sm">{responseData.bureau_report.credit_report.Current_Application.Current_Application_Details.Current_Applicant_Address_Details.State}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Account Details */}
                      <div>
                        <h4 className="font-semibold mb-3">Account Details</h4>
                        {responseData.bureau_report.credit_report.CAIS_Account.CAIS_Account_DETAILS.map((account: any, idx: number) => (
                          <Card key={idx} className="mb-4">
                            <CardContent className="pt-6 space-y-4">
                              <div className="grid md:grid-cols-3 gap-4">
                                <div>
                                  <p className="text-sm text-muted-foreground">Subscriber Name</p>
                                  <p className="text-sm break-words">{account.Subscriber_Name}</p>
                                </div>
                                <div>
                                  <p className="text-sm text-muted-foreground">Account Number</p>
                                  <p className="text-sm font-mono break-all">{maskData(account.Account_Number, showData)}</p>
                                </div>
                                <div>
                                  <p className="text-sm text-muted-foreground">Account Type</p>
                                  <Badge variant="outline">{account.Account_Type}</Badge>
                                </div>
                                <div>
                                  <p className="text-sm text-muted-foreground">Open Date</p>
                                  <p className="text-sm">{account.Open_Date}</p>
                                </div>
                                <div>
                                  <p className="text-sm text-muted-foreground">Loan Amount</p>
                                  <p className="text-sm">₹{account.Highest_Credit_or_Original_Loan_Amount}</p>
                                </div>
                                <div>
                                  <p className="text-sm text-muted-foreground">Current Balance</p>
                                  <p className="text-sm font-semibold">₹{account.Current_Balance}</p>
                                </div>
                                <div>
                                  <p className="text-sm text-muted-foreground">Account Status</p>
                                  <Badge>{account.Account_Status}</Badge>
                                </div>
                                <div>
                                  <p className="text-sm text-muted-foreground">Date Closed</p>
                                  <p className="text-sm">{account.Date_Closed || "N/A"}</p>
                                </div>
                              </div>

                              {/* Holder Details */}
                              {account.CAIS_Holder_Details && account.CAIS_Holder_Details.length > 0 && (
                                <div className="border-t pt-3">
                                  <p className="text-sm font-semibold mb-2">Account Holder Details</p>
                                  <div className="grid md:grid-cols-3 gap-3 text-sm">
                                    <div>
                                      <p className="text-muted-foreground">Name</p>
                                      <p className="break-words">{maskData(account.CAIS_Holder_Details[0].Surname_Non_Normalized, showData)}</p>
                                    </div>
                                    <div>
                                      <p className="text-muted-foreground">PAN</p>
                                      <p className="font-mono break-all">{maskData(account.CAIS_Holder_Details[0].Income_TAX_PAN, showData)}</p>
                                    </div>
                                    <div>
                                      <p className="text-muted-foreground">DOB</p>
                                      <p>{account.CAIS_Holder_Details[0].Date_of_birth}</p>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </CardContent>
                          </Card>
                        ))}
                      </div>

                      {/* Score Section */}
                      <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-lg text-center">
                        <p className="text-sm text-muted-foreground mb-2">FCIREX Score</p>
                        <p className="text-4xl font-bold text-primary">{responseData.bureau_report.credit_report.SCORE.FCIREXScore}</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

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
