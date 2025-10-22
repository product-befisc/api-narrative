import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import { ArrowLeft, User, CreditCard, Briefcase, Phone, MapPin, Building2, Fuel, CheckCircle2, Eye, EyeOff, FileText, ChevronDown, ChevronUp } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { maskData, maskEmail, maskPhone } from "@/lib/utils";

const CustomerProfiling = () => {
  const navigate = useNavigate();
  const [mobileNumber, setMobileNumber] = useState("+91-9876543210");
  const [responseData, setResponseData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [showData, setShowData] = useState(false);
  const [consent, setConsent] = useState(true);
  const [showFullBureauReport, setShowFullBureauReport] = useState(false);
  const [showFullESICDetails, setShowFullESICDetails] = useState(false);
  const [showFullAdditionalDetails, setShowFullAdditionalDetails] = useState(false);
  const [showUdyamDetails, setShowUdyamDetails] = useState(false);
  const [activeTab, setActiveTab] = useState("salaried");

  // Helper function to get credit score band
  const getCreditScoreBand = (score: number) => {
    const bandStart = Math.floor(score / 10) * 10;
    const bandEnd = bandStart + 10;
    return `${bandStart}-${bandEnd}`;
  };

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
      udyam_number: "UDYAM-WB-12-7654321",
      enterprise_name: "ABC PRIVATE LIMITED",
      udyam_details: {
        enterprise_name: "ABC PRIVATE LIMITED",
        organisation_type: "Proprietary",
        service_type: "Services",
        gender: "Female",
        social_category: "General",
        date_of_incorporation: "01/04/2024",
        date_of_commencement: "01/06/2024",
        address: {
          flat_no: "FLAT NO 101",
          building: "RAVI CLASSIC , S NO 112, 113",
          village: "BANER ROAD",
          block: "CONTAI III",
          street: "SH5",
          district: "EAST MEDINIPUR",
          city: "CONTAI",
          state: "WEST BENGAL",
          pin: "721452"
        },
        mobile: "98*****210",
        email: "ramsingh@gmail.com",
        plant_details: [
          {
            unit_name: "LEENA BAKE",
            flat: "FLAT NO 101",
            building: "RAVI CLASSIC , S NO 112, 113",
            village: "PASCHIM PARULIA",
            block: "CONTAI III",
            road: "SH5",
            district: "EAST MEDINIPUR",
            city: "CONTAI",
            state: "WEST BENGAL",
            pin: "721452"
          }
        ],
        enterprise_type: [
          {
            classification_year: "2024-25",
            enterprise_type: "Micro",
            classification_date: "01/01/2025"
          }
        ],
        nic_code: [
          {
            nic_2_digit: "20 - Manufacture of chemicals and chemical products",
            nic_4_digit: "2023 - Manufacture of soap and detergents, cleaning and polishing preparations, perfumes and toilet preparations",
            nic_5_digit: "20235 - Manufacture of preparations for oral or dental hygiene (includes manufacture of toothpastes, toothpowder, mouthwash, oral, perfumes, dental fixative pastes and powders etc.)",
            activity: "Manufacturing",
            date: "10/01/2025"
          }
        ],
        dic: "PURBA MEDINIPUR",
        "msme-dfo": "KOLKATA",
        date_of_udyam_registeration: "01/01/2025"
      }
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
    esic_details: [
      {
        esic_number: "6543214933",
        name: "RAM SINGH",
        employer_code: "28000540987654321",
        employer_name: "ABC ENGINEERING",
        mobile: "9876543210",
        uan_number: "1021987654321",
        bank_name: "HDFC BANK",
        branch_name: "KOLKATA - STEPHEN HOUSE (BBD BAG)",
        bank_account_status: "Not Verified",
        uhid_number: "",
        date_of_birth: "01/01/1999",
        registration_date: "04/11/2024",
        dispensary_name: "Renukoot, Sonbhadra, UP (ESIS Disp.)",
        disability_type: "",
        first_date_of_appointment: "26/10/2024",
        employer_details: {
          employer_code: "12345678987654321",
          employer_name: "ABC Private Limited",
          address: "Nirayan Sales&Marketing,Mehmoorgaj Varanasi",
          state: "Uttar Pradesh",
          district: "Varanasi",
          pincode: "221001",
          email: "abc@email.com",
          mobile: ""
        },
        address: "SHIV MANDIR RENUSAGAR Sonbhadra Uttar Pradesh 231218",
        age: "26",
        gender: "Male"
      },
      {
        esic_number: "1234567833",
        name: "RAM SINGH",
        employer_code: "43210540987654321",
        employer_name: "ABC Private Limited",
        mobile: "9876543210",
        uan_number: "102145654321",
        bank_name: "HDFC BANK",
        branch_name: "KOLKATA - STEPHEN HOUSE (BBD BAG)",
        bank_account_status: "Not Verified",
        uhid_number: "",
        date_of_birth: "01/01/1999",
        registration_date: "04/11/2024",
        dispensary_name: "Renukoot, Sonbhadra, UP (ESIS Disp.)",
        disability_type: "",
        first_date_of_appointment: "26/10/2024",
        employer_details: {
          employer_code: "12345678987654321",
          employer_name: "ABC Private Limited",
          address: "Nirayan Sales&Marketing,Mehmoorgaj Varanasi",
          state: "Uttar Pradesh",
          district: "Varanasi",
          pincode: "221001",
          email: "abc@email.com",
          mobile: ""
        },
        address: "SHIV MANDIR RENUSAGAR Sonbhadra Uttar Pradesh 231218",
        age: "26",
        gender: "Male"
      }
    ],
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
    additional_details: {
      personal_information: {
        full_name: "RAM SINGH",
        gender: "Male",
        age: "20",
        date_of_birth: "1999-01-01",
        income: "987987"
      },
      alternate_phone: [
        {
          serial_number: "1",
          value: "00004311234"
        },
        {
          serial_number: "2",
          value: "00004311234"
        },
        {
          serial_number: "3",
          value: "9877654321"
        },
        {
          serial_number: "4",
          value: "01146534321"
        },
        {
          serial_number: "5",
          value: "1112011111111"
        }
      ],
      email: [
        {
          serial_number: "1",
          value: "RAM@GMAIL.COM"
        }
      ],
      address: [
        {
          detailed_address: "11 ABC COLONY PHASE I ABC COLONY PHASE I",
          state: "UP",
          pincode: "202001",
          type: "Primary",
          date_of_reporting: "2024-07-18"
        }
      ],
      document_data: {
        pan: [
          {
            serial_number: "1",
            value: "ABCPD1234D"
          }
        ]
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

  // Render Digital Payment ID Card
  const renderDigitalPaymentCard = () => (
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
              <p className="text-sm text-muted-foreground mb-1">Name</p>
              <p className="font-semibold break-words">{maskData(responseData.digital_payment_id.name, showData)}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">UPI ID</p>
              <p className="font-mono text-sm break-all">{maskData(responseData.digital_payment_id.upi_id, showData)}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Contact</p>
              <p className="break-words">{maskPhone(responseData.digital_payment_id.contact, showData)}</p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Bank</p>
              <p className="break-words">{responseData.digital_payment_id.bank}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Branch</p>
              <p className="break-words">{responseData.digital_payment_id.branch}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Branch Address</p>
              <p className="text-sm break-words">{maskData(responseData.digital_payment_id.address, showData)}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  // Render LPG Connections Card
  const renderLPGCard = () => (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Fuel className="h-5 w-5" />
          LPG Connection
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {responseData.lpg_connections.map((lpg: any, idx: number) => (
            <Card key={idx}>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Provider</p>
                    <p className="font-semibold break-words">{lpg.provider}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Consumer ID</p>
                    <p className="font-mono text-sm break-all">{maskData(lpg.consumer_id, showData)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Distributor</p>
                    <p className="text-sm break-words">{lpg.distributor}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Contact</p>
                    <p className="text-sm break-words">{maskPhone(lpg.distributor_contact, showData)}</p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-sm text-muted-foreground mb-1">Address</p>
                    <p className="text-sm break-words">{lpg.address}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  // Render EPFO Card
  const renderEPFOCard = () => (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Briefcase className="h-5 w-5" />
          EPFO Info
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <p className="text-sm text-muted-foreground mb-1">UAN</p>
          <p className="font-mono text-sm break-all">{maskData(responseData.epfo.uan, showData)}</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground mb-1">Name</p>
          <p className="break-words">{maskData(responseData.epfo.name, showData)}</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground mb-1">Status</p>
          <Badge variant={responseData.epfo.active ? "default" : "secondary"}>
            {responseData.epfo.active ? "Active" : "Inactive"}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );

  // Render Bureau Card
  const renderBureauCard = () => (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="h-5 w-5" />
          Bureau Check
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Name</p>
            <p className="font-semibold break-words">{maskData(responseData.bureau_report.name, showData)}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Mobile</p>
            <p className="break-words">{maskPhone(responseData.bureau_report.mobile, showData)}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">PAN</p>
            <p className="font-mono text-sm break-all">{maskData(responseData.bureau_report.pan, showData)}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Credit Score Range</p>
            <div className="flex items-center gap-2">
              <p className="text-2xl font-bold text-primary">{getCreditScoreBand(responseData.bureau_report.credit_score)}</p>
            </div>
          </div>
        </div>

        {/* Bureau Report Details */}
        <div className="pt-4">
          <Collapsible open={showFullBureauReport} onOpenChange={setShowFullBureauReport}>
            <CollapsibleTrigger asChild>
              <Button variant="outline" className="w-full">
                {showFullBureauReport ? (
                  <>
                    <ChevronUp className="h-4 w-4 mr-2" />
                    Hide Full Report
                  </>
                ) : (
                  <>
                    <ChevronDown className="h-4 w-4 mr-2" />
                    Show Full Report
                  </>
                )}
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-4 pt-4">
              {/* Credit Profile Header */}
              <div className="space-y-3 border-t pt-3">
                <h4 className="font-semibold text-sm">Credit Profile</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  <div>
                    <p className="text-xs text-muted-foreground">Report Number</p>
                    <p className="text-sm break-all">{responseData.bureau_report.credit_report.CreditProfileHeader.ReportNumber}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Version</p>
                    <p className="text-sm">{responseData.bureau_report.credit_report.CreditProfileHeader.Version}</p>
                  </div>
                </div>
              </div>

              {/* CAIS Summary */}
              <div className="space-y-3 border-t pt-3">
                <h4 className="font-semibold text-sm">Account Summary</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  <div>
                    <p className="text-xs text-muted-foreground">Total Accounts</p>
                    <p className="text-sm">{responseData.bureau_report.credit_report.CAIS_Account.CAIS_Summary.Credit_Account.CreditAccountTotal}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Active Accounts</p>
                    <p className="text-sm">{responseData.bureau_report.credit_report.CAIS_Account.CAIS_Summary.Credit_Account.CreditAccountActive}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Total Outstanding</p>
                    <p className="text-sm">₹{responseData.bureau_report.credit_report.CAIS_Account.CAIS_Summary.Total_Outstanding_Balance.Outstanding_Balance_All}</p>
                  </div>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </CardContent>
    </Card>
  );

  // Render Telco Card
  const renderTelcoCard = () => (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Phone className="h-5 w-5" />
          Telco
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Operator</p>
            <p className="break-words">{responseData.telco_info.operator}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Circle</p>
            <p className="break-words">{responseData.telco_info.circle}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Mobile Age (Months)</p>
            <p>{responseData.telco_info.mobile_age_months}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Status</p>
            <Badge variant={responseData.telco_info.status === "Active" ? "default" : "secondary"}>
              {responseData.telco_info.status}
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  // Render Additional Details Card
  const renderAdditionalDetailsCard = () => (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="h-5 w-5" />
          Additional Details
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Full Name</p>
            <p className="font-semibold break-words">{maskData(responseData.additional_details.personal_information.full_name, showData)}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Gender</p>
            <p className="break-words">{responseData.additional_details.personal_information.gender}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Age</p>
            <p>{responseData.additional_details.personal_information.age}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Date of Birth</p>
            <p className="break-words">{maskData(responseData.additional_details.personal_information.date_of_birth, showData)}</p>
          </div>
        </div>

        {/* Show More Details */}
        <div className="pt-4">
          <Collapsible open={showFullAdditionalDetails} onOpenChange={setShowFullAdditionalDetails}>
            <CollapsibleTrigger asChild>
              <Button variant="outline" className="w-full">
                {showFullAdditionalDetails ? (
                  <>
                    <ChevronUp className="h-4 w-4 mr-2" />
                    Hide Details
                  </>
                ) : (
                  <>
                    <ChevronDown className="h-4 w-4 mr-2" />
                    Show More Details
                  </>
                )}
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-4 pt-4">
              {/* Alternate Phones */}
              {responseData.additional_details.alternate_phone && responseData.additional_details.alternate_phone.length > 0 && (
                <div className="space-y-3 border-t pt-3">
                  <h4 className="font-semibold text-sm">Alternate Phone Numbers</h4>
                  <div className="space-y-2">
                    {responseData.additional_details.alternate_phone.map((phone: any, idx: number) => (
                      <p key={idx} className="text-sm break-words">{maskPhone(phone.value, showData)}</p>
                    ))}
                  </div>
                </div>
              )}

              {/* Email */}
              {responseData.additional_details.email && responseData.additional_details.email.length > 0 && (
                <div className="space-y-3 border-t pt-3">
                  <h4 className="font-semibold text-sm">Email</h4>
                  <div className="space-y-2">
                    {responseData.additional_details.email.map((email: any, idx: number) => (
                      <p key={idx} className="text-sm break-all">{maskEmail(email.value, showData)}</p>
                    ))}
                  </div>
                </div>
              )}

              {/* Address */}
              {responseData.additional_details.address && responseData.additional_details.address.length > 0 && (
                <div className="space-y-3 border-t pt-3">
                  <h4 className="font-semibold text-sm">Address</h4>
                  {responseData.additional_details.address.map((addr: any, idx: number) => (
                    <div key={idx} className="bg-muted/50 p-3 rounded-lg space-y-2">
                      <Badge variant="outline">{addr.type}</Badge>
                      <p className="text-sm break-words">{addr.detailed_address}</p>
                      <div className="grid md:grid-cols-2 gap-2">
                        <p className="text-xs text-muted-foreground">State: {addr.state}</p>
                        <p className="text-xs text-muted-foreground">Pincode: {addr.pincode}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CollapsibleContent>
          </Collapsible>
        </div>
      </CardContent>
    </Card>
  );

  // Render ESIC Card
  const renderESICCard = () => (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <User className="h-5 w-5" />
          ESIC
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <p className="text-sm text-muted-foreground mb-1">Status</p>
          <Badge variant={responseData.esic_info.registered ? "default" : "secondary"}>
            {responseData.esic_info.registered ? "Registered" : "Not Registered"}
          </Badge>
        </div>
        {responseData.esic_info.insurance_number && (
          <div>
            <p className="text-sm text-muted-foreground mb-1">Insurance Number</p>
            <p className="font-mono text-sm break-all">{maskData(responseData.esic_info.insurance_number, showData)}</p>
          </div>
        )}

        {/* ESIC Details */}
        {responseData.esic_details && responseData.esic_details.length > 0 && (
          <div className="pt-4">
            <Collapsible open={showFullESICDetails} onOpenChange={setShowFullESICDetails}>
              <CollapsibleTrigger asChild>
                <Button variant="outline" className="w-full">
                  {showFullESICDetails ? (
                    <>
                      <ChevronUp className="h-4 w-4 mr-2" />
                      Hide Details
                    </>
                  ) : (
                    <>
                      <ChevronDown className="h-4 w-4 mr-2" />
                      Show Details
                    </>
                  )}
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-4 pt-4">
                {responseData.esic_details.map((esic: any, idx: number) => (
                  <div key={idx} className="space-y-3 border-t pt-3">
                    <h4 className="font-semibold text-sm">Record {idx + 1}</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      <div>
                        <p className="text-xs text-muted-foreground">ESIC Number</p>
                        <p className="text-sm break-all">{maskData(esic.esic_number, showData)}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Name</p>
                        <p className="text-sm break-words">{maskData(esic.name, showData)}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Employer</p>
                        <p className="text-sm break-words">{esic.employer_name}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Registration Date</p>
                        <p className="text-sm">{esic.registration_date}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </CollapsibleContent>
            </Collapsible>
          </div>
        )}
      </CardContent>
    </Card>
  );

  // Render Director Info Card
  const renderDirectorInfoCard = () => (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Building2 className="h-5 w-5" />
          Director Info
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <p className="text-sm text-muted-foreground mb-1">Is Director</p>
          <Badge variant={responseData.director_info.is_director ? "default" : "secondary"}>
            {responseData.director_info.is_director ? "Yes" : "No"}
          </Badge>
        </div>
        {responseData.director_info.is_director && (
          <>
            <div>
              <p className="text-sm text-muted-foreground mb-1">PAN</p>
              <p className="font-mono text-sm break-all">{maskData(responseData.director_info.pan, showData)}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">DIN</p>
              <p className="font-mono text-sm break-all">{maskData(responseData.director_info.din, showData)}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Companies</p>
              <div className="space-y-1">
                {responseData.director_info.companies.map((company: string, idx: number) => (
                  <Badge key={idx} variant="outline" className="mr-2">
                    {company}
                  </Badge>
                ))}
              </div>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );

  // Render GST & IEC Card
  const renderGSTIECCard = () => (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="h-5 w-5" />
          GST & IEC Info
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          <div>
            <p className="text-sm text-muted-foreground mb-1">GST Status</p>
            <Badge variant={responseData.gst_info.registered ? "default" : "secondary"}>
              {responseData.gst_info.registered ? "Registered" : "Not Registered"}
            </Badge>
          </div>
          {responseData.gst_info.registered && (
            <>
              <div>
                <p className="text-sm text-muted-foreground mb-1">GSTIN</p>
                <p className="font-mono text-sm break-all">{maskData(responseData.gst_info.gstin, showData)}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Trade Name</p>
                <p className="break-words">{responseData.gst_info.trade_name}</p>
              </div>
            </>
          )}
        </div>

        <div className="space-y-3 border-t pt-3">
          <div>
            <p className="text-sm text-muted-foreground mb-1">IEC Status</p>
            <Badge variant={responseData.iec_info.registered ? "default" : "secondary"}>
              {responseData.iec_info.registered ? "Registered" : "Not Registered"}
            </Badge>
          </div>
          {responseData.iec_info.registered && (
            <div>
              <p className="text-sm text-muted-foreground mb-1">IEC Code</p>
              <p className="font-mono text-sm break-all">{maskData(responseData.iec_info.iec_code, showData)}</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );

  // Render MSME Card
  const renderMSMECard = () => (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Building2 className="h-5 w-5" />
          MSME
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <p className="text-sm text-muted-foreground mb-1">Status</p>
          <Badge variant={responseData.msme_info.registered ? "default" : "secondary"}>
            {responseData.msme_info.registered ? "Registered" : "Not Registered"}
          </Badge>
        </div>
        {responseData.msme_info.udyam_number && (
          <div>
            <p className="text-sm text-muted-foreground mb-1">Udyam Number</p>
            <p className="font-mono text-sm break-all">{responseData.msme_info.udyam_number}</p>
          </div>
        )}
        {responseData.msme_info.enterprise_name && (
          <div>
            <p className="text-sm text-muted-foreground mb-1">Enterprise Name</p>
            <p className="break-words">{responseData.msme_info.enterprise_name}</p>
          </div>
        )}

        {responseData.msme_info.udyam_details && (
          <div className="pt-4">
            <Collapsible open={showUdyamDetails} onOpenChange={setShowUdyamDetails}>
              <CollapsibleTrigger asChild>
                <Button variant="outline" className="w-full">
                  {showUdyamDetails ? (
                    <>
                      <ChevronUp className="h-4 w-4 mr-2" />
                      Hide Details
                    </>
                  ) : (
                    <>
                      <ChevronDown className="h-4 w-4 mr-2" />
                      Show Details
                    </>
                  )}
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-4 pt-4">
                <div className="space-y-3 border-t pt-3">
                  <h4 className="font-semibold text-sm">Enterprise Information</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div>
                      <p className="text-xs text-muted-foreground">Organisation Type</p>
                      <p className="text-sm break-words">{responseData.msme_info.udyam_details.organisation_type}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Service Type</p>
                      <p className="text-sm break-words">{responseData.msme_info.udyam_details.service_type}</p>
                    </div>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
        )}
      </CardContent>
    </Card>
  );

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

              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="salaried">Salaried</TabsTrigger>
                  <TabsTrigger value="blue-collar">Blue Collar</TabsTrigger>
                  <TabsTrigger value="business">Business/Salaried</TabsTrigger>
                </TabsList>

                {/* Salaried Tab */}
              <TabsContent value="salaried" className="space-y-6 mt-6">
                {/* Key Highlights */}
                <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      Key Highlights - Salaried
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-background/50 p-3 rounded-lg">
                        <p className="text-xs text-muted-foreground mb-1">Employment Status</p>
                        <p className="font-semibold text-sm">Active</p>
                      </div>
                      <div className="bg-background/50 p-3 rounded-lg">
                        <p className="text-xs text-muted-foreground mb-1">Credit Score Range</p>
                        <p className="font-semibold text-sm text-primary">{getCreditScoreBand(responseData.bureau_report.credit_score)}</p>
                      </div>
                      <div className="bg-background/50 p-3 rounded-lg">
                        <p className="text-xs text-muted-foreground mb-1">Digital Payment</p>
                        <p className="font-semibold text-sm">Verified</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {renderDigitalPaymentCard()}
                {renderLPGCard()}
                {renderEPFOCard()}
                {renderBureauCard()}
                {renderTelcoCard()}
                {renderAdditionalDetailsCard()}
              </TabsContent>

                {/* Blue Collar Tab */}
              <TabsContent value="blue-collar" className="space-y-6 mt-6">
                {/* Key Highlights */}
                <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      Key Highlights - Blue Collar
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-background/50 p-3 rounded-lg">
                        <p className="text-xs text-muted-foreground mb-1">ESIC Status</p>
                        <p className="font-semibold text-sm">{responseData.esic_info.registered ? "Registered" : "Not Registered"}</p>
                      </div>
                      <div className="bg-background/50 p-3 rounded-lg">
                        <p className="text-xs text-muted-foreground mb-1">Credit Score Range</p>
                        <p className="font-semibold text-sm text-primary">{getCreditScoreBand(responseData.bureau_report.credit_score)}</p>
                      </div>
                      <div className="bg-background/50 p-3 rounded-lg">
                        <p className="text-xs text-muted-foreground mb-1">EPFO Status</p>
                        <p className="font-semibold text-sm">{responseData.epfo.active ? "Active" : "Inactive"}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {renderDigitalPaymentCard()}
                {renderLPGCard()}
                {renderBureauCard()}
                {renderESICCard()}
                {renderEPFOCard()}
                {renderTelcoCard()}
                {renderAdditionalDetailsCard()}
              </TabsContent>

                {/* Business/Salaried Tab */}
                <TabsContent value="business" className="space-y-6 mt-6">
                  {/* Key Highlights */}
                  <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                        Key Highlights - Business/Salaried
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-background/50 p-3 rounded-lg">
                          <p className="text-xs text-muted-foreground mb-1">Director Status</p>
                          <p className="font-semibold text-sm">{responseData.director_info.is_director ? "Yes" : "No"}</p>
                        </div>
                        <div className="bg-background/50 p-3 rounded-lg">
                          <p className="text-xs text-muted-foreground mb-1">GST Status</p>
                          <p className="font-semibold text-sm">{responseData.gst_info.registered ? "Registered" : "Not Registered"}</p>
                        </div>
                        <div className="bg-background/50 p-3 rounded-lg">
                          <p className="text-xs text-muted-foreground mb-1">Credit Score Range</p>
                          <p className="font-semibold text-sm text-primary">{getCreditScoreBand(responseData.bureau_report.credit_score)}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {renderDigitalPaymentCard()}
                  {renderLPGCard()}
                  {renderBureauCard()}
                  {renderDirectorInfoCard()}
                  {renderGSTIECCard()}
                  {renderMSMECard()}
                  {renderTelcoCard()}
                  {renderAdditionalDetailsCard()}
                </TabsContent>
              </Tabs>

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
