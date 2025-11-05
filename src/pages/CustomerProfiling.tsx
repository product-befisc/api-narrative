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
import { ArrowLeft, User, CreditCard, Briefcase, Phone, MapPin, Building2, Fuel, CheckCircle2, Eye, EyeOff, FileText, ChevronDown, ChevronUp, AlertTriangle, Info, Shield } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { maskData, maskEmail, maskPhone } from "@/lib/utils";

const CustomerProfiling = () => {
  const navigate = useNavigate();
  const [mobileNumber, setMobileNumber] = useState("+91-9876543210");
  const [responseData, setResponseData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [showData, setShowData] = useState(false);
  const [consent, setConsent] = useState(true);
  const [activeTab, setActiveTab] = useState("salaried");
  const [statsDialogOpen, setStatsDialogOpen] = useState(false);
  const [selectedStat, setSelectedStat] = useState<string>("");
  const [expandedGst, setExpandedGst] = useState<{ [key: number]: boolean }>({});
  const [expandedMsme, setExpandedMsme] = useState(false);
  const [expandedIec, setExpandedIec] = useState(false);
  const [expandedEsic, setExpandedEsic] = useState<{ [key: number]: boolean }>({});

  // Comprehensive mock response generator
  const getMockResponse = (profileType: string) => ({
    mobile: "+91-9876543210",
    digital_payment_id_info: {
      code: "SUC",
      data: {
        name: "Ramesh Kumar",
        branch: "Noida Branch",
        address: "B-121, Sector-5, Noida-201301",
        state: "UTTAR PRADESH",
        contact: "+911133996699",
        city: "NOIDA",
        centre: "Gautam Buddh Nagar",
        district: "Gautam Buddh Nagar",
        bank: "Paytm Payments Bank"
      }
    },
    lpg_info: {
      code: "SUC",
      data: [
        {
          gas_provider: "Indane Gas",
          name: "RAM KUMAR",
          consumer_details: {
            consumer_mobile: "6789999999",
            consumer_id: "7500000901234567",
            consumer_status: "ACTIVE",
            consumer_type: "Single Bottle Connection"
          },
          address: "123 ABC Colony XYZ",
          distributor_details: {
            distributor_code: "000987654",
            distributor_name: "GAYATRI INDANE SERVICE",
            distributor_contact: "1800987654",
            distributor_address: "456 MNOP Marg XYZ"
          }
        },
        {
          gas_provider: "Bharat Gas",
          name: "Sham Kumar",
          consumer_details: {
            consumer_mobile: "",
            consumer_id: "1234567890",
            consumer_status: "",
            consumer_type: ""
          },
          address: "123 ABC Colony XYZ",
          distributor_details: {
            distributor_code: "1234567",
            distributor_name: "CHANDAN GAS SERVICE",
            distributor_contact: "",
            distributor_address: ""
          }
        },
        {
          gas_provider: "HP Gas",
          name: "Sham Kumar",
          consumer_details: {
            consumer_mobile: "",
            consumer_id: "",
            consumer_status: "",
            consumer_type: ""
          },
          address: "1XX ABC Colony GXXXX 123456",
          distributor_details: {
            distributor_code: "1234567",
            distributor_name: "CHITRA GAS SERVICE",
            distributor_contact: "",
            distributor_address: ""
          }
        }
      ]
    },
    msme_info: {
      code: profileType === "business" ? "SUC" : "NRF",
      data: profileType === "business" ? [
        {
          udyam_number: "UDYAM-MH-11-12345678",
          type_of_enterprise: "MICRO",
          major_activity: "Services",
          type_of_organisation: "Hindu Undivided Family",
          name_of_enterprise: "ABC Enterprise",
          owner_name: "Ram Singh",
          pan: "ABCPD1234D",
          do_you_have_gstin: "",
          mobile_no: "9876543210",
          email_id: "ram@email.com",
          social_category: "General",
          gender: "Male",
          specially_abled_divyang: "No",
          date_of_incorporation: "29/02/2024",
          date_of_commencement_of_production_business: "",
          male: "4",
          female: "0",
          other: "0",
          total: "4",
          unit_sn: "1",
          unit_unit_name: "ABC Unit",
          unit_flat: "123",
          unit_building: "ABC colony",
          "unit_village/town": "ABC",
          unit_block: "ABC",
          unit_road: "ABC colony",
          unit_city: "ABC",
          unit_pin: "121212",
          unit_state: "Delhi",
          unit_district: "ABC",
          flat_door_block_no: "123",
          name_of_premises_building: "ABC colony",
          village_town: "ABC Village",
          block: "ABC Block",
          road_street_lane: "ABC colony",
          city: "ABC",
          state: "TELANGANA",
          district: "Delhi",
          pin: "121212",
          mobile: "9876543210",
          email: "ram@email.com",
          "sno.": "",
          nic_2_digit: "10 - Manufacture of food products",
          nic_4_digit: "1079 - Manufacture of other food products n.e.c.",
          nic_5_digit: "10796 - Manufacture of papads, appalam and similar food products",
          activity: "Manufacturing",
          gem_interest: "No",
          treds_interest: "No",
          ncs_interest: "No",
          dic: "Delhi",
          msme_di: "Delhi",
          date_of_udyam_registration: "10/06/2025"
        }
      ] : []
    },
    epfo_info: {
      code: profileType !== "business" ? "SUC" : "NRF",
      data: profileType !== "business" ? [
        {
          uan: "111XXXXXXXXX",
          name: "RAM RAM",
          guardian_name: "SHIV RAM",
          establishment_name: "ABCD PVT LTD.",
          member_id: "ABCDE98765430000012345",
          date_of_joining: "08/01/2019",
          date_of_exit: "",
          last_pf_submitted: "08/01/2019"
        },
        {
          uan: "111XXXXXXXXX",
          name: "RAM RAM",
          guardian_name: "SHIV RAM",
          establishment_name: "TEST FOUNDATION OF INDIA",
          member_id: "EDCBA09876543210012345",
          date_of_joining: "04/03/2018",
          date_of_exit: "",
          last_pf_submitted: "01/01/2019"
        }
      ] : []
    },
    director_pan_info: {
      code: profileType === "business" ? "SUC" : "NRF",
      data: profileType === "business" ? ["ABCPD1234E"] : []
    },
    din_info: {
      code: profileType === "business" ? "SUC" : "NRF",
      data: profileType === "business" ? [
        {
          pan: "ABCPD1234E",
          data: {
            pan: "ABCPD1234D",
            din: "87654321",
            name: "RAM SINGH",
            mobile: "987654321",
            email: "ABC@GMAIL.COM"
          }
        }
      ] : []
    },
    telco_info: {
      code: "SUC",
      data: {
        is_valid: true,
        subscriber_status: "CONNECTED",
        connection_status: {
          status_code: "DELIVERED",
          error_code_id: ""
        },
        connection_type: "prepaid",
        msisdn: {
          msisdn_country_code: "IN",
          msisdn: "+919582773885",
          type: "MOBILE",
          mnc: "109",
          imsi: "404109582773885",
          mcc: "404",
          mcc_mnc: "40410"
        },
        current_service_provider: {
          network_prefix: "81302",
          network_name: "Airtel",
          network_region: "Delhi",
          mcc: "404",
          mnc: "109",
          country_prefix: "+91",
          country_code: "IN",
          country_name: "India"
        },
        original_service_provider: {
          network_prefix: "95827",
          network_name: "Vodafone",
          network_region: "Delhi",
          mcc: "404",
          mnc: "109",
          country_prefix: "+91",
          country_code: "IN",
          country_name: "India"
        },
        is_roaming: false
      }
    },
    mobile_age_info: {
      code: "SUC",
      data: {
        is_ported: "Yes",
        mobile_age: "15 to 16 Years",
        number_active: "Yes",
        number_valid: "Yes",
        ported_region: "Delhi",
        ported_telecom: "Airtel",
        region: "Delhi",
        roaming: "No",
        telecom: "Vodafone"
      }
    },
    gst_list: {
      code: profileType === "business" ? "SUC" : "NRF",
      data: profileType === "business" ? [
        {
          authorized_signatory: ["XXXXXXXX", "XXXXXXXXX", "XXXXXXXXX"],
          business_constitution: "Private Limited Company",
          business_details: [
            { saccd: "998313", sdes: "Information technology (IT) consulting and support services" },
            { saccd: "998599", sdes: "Other support services n.e.c." },
            { saccd: "998598", sdes: "Other information services n.e.c." }
          ],
          business_nature: ["Supplier of Services", "Recipient of Goods or Services"],
          can_flag: "NA",
          central_jurisdiction: "Commissionerate - GAUTAM BUDDHA NAGAR, Division - DIVISION I GAUTAM BUDH NAGAR, Range - RANGE - 1",
          compliance_rating: "NA",
          current_registration_status: "Active",
          filing_status: [
            [
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
            ]
          ],
          gstin: "XXXXXXXXXX",
          is_field_visit_conducted: "No",
          legal_name: "XXXXXXX PRIVATE LIMITED",
          mandate_e_invoice: "NA",
          aggregate_turn_over: "NA",
          primary_business_address: {
            business_nature: "Supplier of Services, Recipient of Goods or Services",
            detailed_address: "NA",
            last_updated_date: "NA",
            registered_address: "XXXXXXXX County, GREATER NOIDA, Greater Noida, Gautam Buddha Nagar, Uttar Pradesh, 201306"
          },
          other_business_address: {},
          register_cancellation_date: "",
          register_date: "31/01/XXXX",
          state_jurisdiction: "State - Uttar Pradesh, Zone - Gautambudha Nagar, Range - Gautambudha Nagar(B), Sector - Sector-1, Gautambudha Nagar (Jurisdictional Office)",
          tax_payer_type: "Regular",
          trade_name: "XXXXX PRIVATE LIMITED",
          gross_total_income: "NA",
          gross_total_income_financial_year: "",
          business_email: "XYZ@gmail.com",
          business_mobile: "0987654432"
        }
      ] : []
    },
    iec_list: {
      code: profileType === "business" ? "SUC" : "NRF",
      data: profileType === "business" ? {
        iec_number: "0011223344",
        pan_number: "ABCDPE1234E",
        date_of_incorporation: "14/02/2019",
        iec_issuance_date: "06/08/2019",
        iec_status: "Valid",
        del_status: "N",
        file_number: "HYDQAZWSXCDF00123456AM12",
        file_date: "Thu Jun 27 05:30:00 IST 2024",
        dgft_ra_office: "RA HYDERABAD",
        nature_of_firm: "Private Limited",
        category_of_exporters: "Manufacturer Exporter",
        firm_name: "ABC PRIVATE LIMITED",
        address: "ROAD NO.60, HYDERABAD, TELANGANA, 500033",
        firm_mobile: "9876543210",
        firm_email: "email@mail.com",
        branch_details: [
          {
            branch_code: "1",
            gstin: "12ABCDPE1234E1ZS",
            branch_address: "BACHUPALLY- VILLAGE, HYDERABAD, TELANGANA, 500090"
          }
        ],
        proprietor_partner_director_details: [
          {
            name: "RAM SINGH",
            father_name: "SHAM SINGH",
            pan_number: "ABCPD1234H",
            address: "JUBILEEHILLS, HYDERABAD"
          }
        ],
        rcmc_details: [
          {
            rcmc_number: "AB/123/2020-2021",
            issue_date: "20/02/2020",
            issue_authority: "Federation of Indian Export Organisations",
            products_for_which_registered: "Aluminium windows and doors",
            expiry_date: "31/03/2025",
            firm_web: "email@mail.com",
            firm_profile: "Manufacturer Exporter",
            status: "Active",
            source: "Issued through e-RCMC module",
            exporter_type: "Manufacturer Exporter",
            validity_period: "567",
            validated_by_epc: "Y"
          }
        ]
      } : {}
    },
    whatsapp_info: {
      code: "SUC",
      data: {
        status: "Account Found",
        is_business: "0"
      }
    },
    revoke_info: {
      code: "SUC",
      data: {
        revoke_date: "",
        revoke_status: "No"
      }
    },
    esic_info: {
      code: profileType === "salaried" ? "SUC" : profileType === "bluecollar" ? "SUC" : "NRF",
      data: (profileType === "bluecollar" || profileType === "salaried") ? {
        esic_details: [
          {
            esic_number: "987654321",
            name: "RAM SINGH",
            employer_code: "12345678987654321",
            employer_name: "ABC Private Limited",
            mobile: "987654321",
            uan_number: "",
            bank_name: "ABC BANK OF INDIA",
            branch_name: "Delhi",
            bank_account_status: "Not Verified",
            uhid_number: "",
            date_of_birth: "01/01/1999",
            registration_date: "28/10/2024",
            dispensary_name: "Lahuravir, Varanasi, UP (ESIS Disp.)",
            first_date_of_appointment: "19/10/2024",
            employer_details: {
              employer_code: "12345678987654321",
              employer_name: "ABC Private Limited",
              address: "Nirayan Sales & Marketing, Mehmoorgaj Varanasi",
              state: "Uttar Pradesh",
              district: "Varanasi",
              pincode: "221001",
              email: "abc@email.com",
              mobile: ""
            },
            address: "House No 123, Chandauli, Mughalsarai, Uttar Pradesh, Varanasi, Uttar Pradesh",
            age: "24",
            gender: "Male"
          }
        ]
      } : {},
      datetime: "2024-12-24 07:15:53.41087"
    },
    profile_advance: profileType === "salaried" ? {
      full_name: "RAM SINGH",
      gender: "Male",
      age: "20",
      date_of_birth: "1999-01-01",
      income: "987987",
      alternate_phones: ["4311234", "4311234", "9877654321", "1146534321", "1112011111111"],
      email: "RAM@GMAIL.COM",
      detailed_address: "11 ABC COLONY PHASE I ABC COLONY PHASE I",
      address_state: "UP",
      address_pincode: "202001",
      address_type: "Primary",
      address_date_of_reporting: "2024-07-18",
      document_pan: "ABCPD1234D"
    } : {},
    bureau_data: profileType === "salaried" ? {
      credit_score: "759",
      fcirex_score: "999",
      address: {
        flat_house_no: "ABC COLONY",
        building_society: "",
        road_area_locality: "",
        city: "",
        landmark: "",
        state_code: "27",
        pin_code: "400612",
        country_code: "IB",
        first_line: "ABC COLONY",
        second_line: "1981",
        third_line: "MAHARASHTRA",
        cais_city: "",
        fifth_line: "",
        cais_state_code: "27",
        zip_postal_code: "400612",
        cais_country_code: "IB",
        address_indicator: "2",
        residence_code: ""
      },
      credit_accounts: {
        total: "2",
        active: "1",
        closed: "1",
        default: "0"
      },
      account_details: {
        identification_number: "NBFXXXXXXXX",
        subscriber_name: "XXXXXXXXXX",
        account_number: "XXXXX4748",
        account_type: "6",
        open_date: "20230627",
        terms_duration_months: "10",
        account_status: "13",
        current_balance: "0",
        date_closed: "20240510",
        date_of_last_payment: "20240503",
        amount_past_due: "0",
        days_past_due: "0",
        past_loan_account_number: "XXXXX4748",
        past_loan_date_closed: "20240510",
        highest_credit_original_loan: "11234",
        repayment_tenure_months: "10",
        payment_history_profile: "00000000000?????????????????????????",
        past_loan_amount_past_due: "0",
        credit_account_default: "0",
        suit_filed_willful_default: "0",
        default_amount_past_due: "0",
        default_days_past_due: "0",
        payment_rating: "0",
        default_status_date: ""
      },
      contact: {
        primary_mobile: "9876543210",
        alternate_numbers: "",
        email_address: "RAMSINGH@EMAIL.COM"
      }
    } : {},
    timestamp: new Date().toISOString()
  });

  // Calculate stats from response data
  const calculateStats = (data: any) => {
    const namesSources: string[] = [];
    const addressesSources: string[] = [];
    const gstinSources: string[] = [];
    const esicSources: string[] = [];
    const highlights: string[] = [];

    // Count names
    if (data.digital_payment_id_info?.data?.name) namesSources.push("Digital Payment ID");
    if (data.lpg_info?.data?.length > 0) {
      data.lpg_info.data.forEach((lpg: any) => {
        if (lpg.name) namesSources.push(`LPG - ${lpg.gas_provider}`);
      });
    }
    if (data.epfo_info?.data?.length > 0) {
      data.epfo_info.data.forEach(() => namesSources.push("EPFO"));
    }
    if (data.msme_info?.data?.[0]?.owner_name) namesSources.push("MSME");
    if (data.din_info?.data?.[0]?.data?.name) namesSources.push("DIN");

    // Count addresses
    if (data.digital_payment_id_info?.data?.address) addressesSources.push("Digital Payment ID");
    if (data.lpg_info?.data?.length > 0) {
      data.lpg_info.data.forEach((lpg: any) => {
        if (lpg.address) addressesSources.push(`LPG - ${lpg.gas_provider}`);
      });
    }
    if (data.msme_info?.data?.[0]?.flat_door_block_no) addressesSources.push("MSME");
    if (data.gst_list?.data?.[0]?.primary_business_address?.registered_address) addressesSources.push("GST");
    if (data.esic_info?.data?.esic_details?.[0]?.address) addressesSources.push("ESIC");

    // Count GSTIN
    if (data.gst_list?.data?.length > 0) {
      data.gst_list.data.forEach(() => gstinSources.push("GST Registration"));
    }

    // Count ESIC
    if (data.esic_info?.data?.esic_details?.length > 0) {
      data.esic_info.data.esic_details.forEach(() => esicSources.push("ESIC Record"));
    }

    // Generate highlights
    if (data.lpg_info?.data?.length > 1) {
      highlights.push(`${data.lpg_info.data.length} LPG connections found`);
    }
    if (data.epfo_info?.data?.length > 0) {
      highlights.push(`${data.epfo_info.data.length} EPFO establishments`);
    }
    if (data.mobile_age_info?.data?.mobile_age) {
      highlights.push(`Mobile age: ${data.mobile_age_info.data.mobile_age}`);
    }
    if (data.telco_info?.data?.connection_type) {
      highlights.push(`${data.telco_info.data.connection_type} connection`);
    }
    if (data.gst_list?.data?.length > 0) {
      highlights.push("GST registered");
    }
    if (data.iec_list?.code === "SUC") {
      highlights.push("IEC registered - Import/Export business");
    }
    if (data.whatsapp_info?.data?.status === "Account Found") {
      highlights.push("WhatsApp verified");
    }

    return {
      namesCount: namesSources.length,
      namesSources,
      addressesCount: addressesSources.length,
      addressesSources,
      gstinCount: gstinSources.length,
      gstinSources,
      esicCount: esicSources.length,
      esicSources,
      highlights
    };
  };

  const stats = responseData ? calculateStats(responseData) : null;

  const handleFetch = () => {
    setLoading(true);
    setTimeout(() => {
      setResponseData(getMockResponse(activeTab));
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
                <h1 className="text-4xl font-bold">Customer Profiling</h1>
                <p className="text-muted-foreground">Comprehensive customer profile based on mobile number</p>
              </div>
              <div className="flex flex-col items-end gap-2 min-w-[200px]">
                <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  APIs Included
                </h4>
                <div className="flex flex-col items-end gap-1.5">
                  <span className="text-sm font-medium text-foreground/80">Mobile Verification</span>
                  <span className="text-sm font-medium text-foreground/80">LPG Verification</span>
                  <span className="text-sm font-medium text-foreground/80">EPFO/ESIC Lookup</span>
                  <span className="text-sm font-medium text-foreground/80">GST/IEC Details</span>
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
              <div className="flex justify-between items-center mb-4">
                <Button variant="outline" size="sm" onClick={() => setShowData(!showData)}>
                  {showData ? <EyeOff className="h-4 w-4 mr-2" /> : <Eye className="h-4 w-4 mr-2" />}
                  {showData ? 'Hide' : 'Show'} Data
                </Button>
              </div>

              {/* Stats Section */}
              {stats && (
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
                  <Dialog open={statsDialogOpen} onOpenChange={setStatsDialogOpen}>
                    <DialogTrigger asChild>
                      <Card className="cursor-pointer hover:shadow-lg transition-all hover:scale-105" onClick={() => setSelectedStat("names")}>
                        <CardContent className="pt-6">
                          <div className="text-center">
                            <p className="text-3xl font-bold text-primary">{stats.namesCount}</p>
                            <p className="text-sm text-muted-foreground mt-1">Names Found</p>
                          </div>
                        </CardContent>
                      </Card>
                    </DialogTrigger>
                    <DialogTrigger asChild>
                      <Card className="cursor-pointer hover:shadow-lg transition-all hover:scale-105" onClick={() => setSelectedStat("addresses")}>
                        <CardContent className="pt-6">
                          <div className="text-center">
                            <p className="text-3xl font-bold text-primary">{stats.addressesCount}</p>
                            <p className="text-sm text-muted-foreground mt-1">Addresses Found</p>
                          </div>
                        </CardContent>
                      </Card>
                    </DialogTrigger>
                    <DialogTrigger asChild>
                      <Card className="cursor-pointer hover:shadow-lg transition-all hover:scale-105" onClick={() => setSelectedStat("gstin")}>
                        <CardContent className="pt-6">
                          <div className="text-center">
                            <p className="text-3xl font-bold text-primary">{stats.gstinCount}</p>
                            <p className="text-sm text-muted-foreground mt-1">GSTIN Found</p>
                          </div>
                        </CardContent>
                      </Card>
                    </DialogTrigger>
                    <DialogTrigger asChild>
                      <Card className="cursor-pointer hover:shadow-lg transition-all hover:scale-105" onClick={() => setSelectedStat("esic")}>
                        <CardContent className="pt-6">
                          <div className="text-center">
                            <p className="text-3xl font-bold text-primary">{stats.esicCount}</p>
                            <p className="text-sm text-muted-foreground mt-1">ESIC Found</p>
                          </div>
                        </CardContent>
                      </Card>
                    </DialogTrigger>
                    <Card>
                      <CardContent className="pt-6">
                        <div className="text-center">
                          <p className="text-3xl font-bold text-green-600">{stats.highlights.length}</p>
                          <p className="text-sm text-muted-foreground mt-1">Highlights</p>
                        </div>
                      </CardContent>
                    </Card>

                    <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>Data Sources</DialogTitle>
                        <DialogDescription>
                          {selectedStat === "names" && "Sources where names were found"}
                          {selectedStat === "addresses" && "Sources where addresses were found"}
                          {selectedStat === "gstin" && "Sources where GSTIN was found"}
                          {selectedStat === "esic" && "Sources where ESIC was found"}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-2 mt-4">
                        {selectedStat === "names" && stats.namesSources.map((source, idx) => (
                          <div key={idx} className="flex items-center gap-2 p-3 bg-muted rounded-lg">
                            <CheckCircle2 className="h-4 w-4 text-green-600" />
                            <span>{source}</span>
                          </div>
                        ))}
                        {selectedStat === "addresses" && stats.addressesSources.map((source, idx) => (
                          <div key={idx} className="flex items-center gap-2 p-3 bg-muted rounded-lg">
                            <MapPin className="h-4 w-4 text-blue-600" />
                            <span>{source}</span>
                          </div>
                        ))}
                        {selectedStat === "gstin" && stats.gstinSources.map((source, idx) => (
                          <div key={idx} className="flex items-center gap-2 p-3 bg-muted rounded-lg">
                            <Building2 className="h-4 w-4 text-purple-600" />
                            <span>{source}</span>
                          </div>
                        ))}
                        {selectedStat === "esic" && stats.esicSources.map((source, idx) => (
                          <div key={idx} className="flex items-center gap-2 p-3 bg-muted rounded-lg">
                            <FileText className="h-4 w-4 text-orange-600" />
                            <span>{source}</span>
                          </div>
                        ))}
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              )}

              <Tabs value={activeTab} onValueChange={(value) => { setActiveTab(value); setResponseData(getMockResponse(value)); }} className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="salaried">Salaried</TabsTrigger>
                  <TabsTrigger value="bluecollar">Blue Collar</TabsTrigger>
                  <TabsTrigger value="business">Business</TabsTrigger>
                </TabsList>

                {/* Salaried Profile */}
                <TabsContent value="salaried" className="space-y-6 mt-6">
                  <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                        Key Highlights - Salaried Profile
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-3 gap-4">
                        {stats?.highlights.map((highlight, idx) => (
                          <div key={idx} className="bg-background/50 p-3 rounded-lg">
                            <p className="text-sm font-semibold">{highlight}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Scenarios/Insights Section */}
                  <Card className="border-2 border-orange-200 bg-orange-50/50 dark:bg-orange-950/10">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <AlertTriangle className="h-5 w-5 text-orange-600" />
                        Risk Insights & Anomalies
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {/* Dual PF employment without exit */}
                        {responseData.epfo_info?.data && responseData.epfo_info.data.length > 1 && 
                         responseData.epfo_info.data.every((emp: any) => !emp.date_of_exit) && (
                          <div className="flex items-start gap-2 p-3 rounded-lg bg-destructive/10 border border-destructive/20">
                            <AlertTriangle className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="text-sm font-semibold text-destructive">Dual PF Employment Without Exit</p>
                              <p className="text-xs text-muted-foreground mt-1">
                                Multiple active EPFO records detected without exit dates
                              </p>
                            </div>
                          </div>
                        )}

                        {/* Employer name mismatch (EPFO vs ESIC) */}
                        {responseData.epfo_info?.data?.[0]?.establishment_name && 
                         responseData.esic_info?.data?.esic_details?.[0]?.employer_name &&
                         responseData.epfo_info.data[0].establishment_name !== responseData.esic_info.data.esic_details[0].employer_name && (
                          <div className="flex items-start gap-2 p-3 rounded-lg bg-destructive/10 border border-destructive/20">
                            <AlertTriangle className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="text-sm font-semibold text-destructive">Employer Name Mismatch</p>
                              <p className="text-xs text-muted-foreground mt-1">
                                EPFO: {responseData.epfo_info.data[0].establishment_name} vs ESIC: {responseData.esic_info.data.esic_details[0].employer_name}
                              </p>
                            </div>
                          </div>
                        )}

                        {/* Multi-state address footprint */}
                        {(() => {
                          const states = new Set();
                          if (responseData.digital_payment_id_info?.data?.state) states.add(responseData.digital_payment_id_info.data.state);
                          if (responseData.profile_advance?.address_state) states.add(responseData.profile_advance.address_state);
                          if (responseData.bureau_data?.address?.third_line) states.add(responseData.bureau_data.address.third_line);
                          return states.size > 1 ? (
                            <div className="flex items-start gap-2 p-3 rounded-lg bg-destructive/10 border border-destructive/20">
                              <AlertTriangle className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" />
                              <div>
                                <p className="text-sm font-semibold text-destructive">Multi-State Address Footprint</p>
                                <p className="text-xs text-muted-foreground mt-1">
                                  Addresses found across {states.size} different states: {Array.from(states).join(', ')}
                                </p>
                              </div>
                            </div>
                          ) : null;
                        })()}

                        {/* PAN variation - if different PANs found */}
                        {responseData.profile_advance?.document_pan && 
                         responseData.bureau_data?.account_details?.identification_number &&
                         !responseData.bureau_data.account_details.identification_number.includes(responseData.profile_advance.document_pan.substring(0, 5)) && (
                          <div className="flex items-start gap-2 p-3 rounded-lg bg-destructive/10 border border-destructive/20">
                            <AlertTriangle className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="text-sm font-semibold text-destructive">PAN Variation Across Documents</p>
                              <p className="text-xs text-muted-foreground mt-1">
                                Possible PAN mismatch detected across different data sources
                              </p>
                            </div>
                          </div>
                        )}

                        {/* EPFO join date vs recent records mismatch */}
                        {responseData.epfo_info?.data?.[0] && 
                         responseData.esic_info?.data?.esic_details?.[0] && (
                          (() => {
                            const epfoDate = new Date(responseData.epfo_info.data[0].date_of_joining.split('/').reverse().join('-'));
                            const esicDate = new Date(responseData.esic_info.data.esic_details[0].first_date_of_appointment.split('/').reverse().join('-'));
                            const daysDiff = Math.abs((epfoDate.getTime() - esicDate.getTime()) / (1000 * 3600 * 24));
                            
                            return daysDiff > 365 ? (
                              <div className="flex items-start gap-2 p-3 rounded-lg bg-destructive/10 border border-destructive/20">
                                <AlertTriangle className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" />
                                <div>
                                  <p className="text-sm font-semibold text-destructive">Employment Date Mismatch</p>
                                  <p className="text-xs text-muted-foreground mt-1">
                                    Significant gap between EPFO join date and ESIC appointment date ({Math.floor(daysDiff)} days)
                                  </p>
                                </div>
                              </div>
                            ) : null;
                          })()
                        )}

                        {/* If no anomalies */}
                        {!((responseData.epfo_info?.data && responseData.epfo_info.data.length > 1 && responseData.epfo_info.data.every((emp: any) => !emp.date_of_exit)) ||
                           (responseData.epfo_info?.data?.[0]?.establishment_name && responseData.esic_info?.data?.esic_details?.[0]?.employer_name && 
                            responseData.epfo_info.data[0].establishment_name !== responseData.esic_info.data.esic_details[0].employer_name)) && (
                          <div className="flex items-start gap-2 p-3 rounded-lg bg-green-50 border border-green-200 dark:bg-green-950/10 dark:border-green-800">
                            <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="text-sm font-semibold text-green-700 dark:text-green-400">No Critical Anomalies Detected</p>
                              <p className="text-xs text-muted-foreground mt-1">
                                Profile data appears consistent across all verification sources
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>

                  <p className="text-2xl font-bold">Profile Data</p>

                  {/* Digital Payment ID Info */}
                  {responseData.digital_payment_id_info?.code === "SUC" && (
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <CreditCard className="h-5 w-5" />
                          Digital Payment ID Info
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">Name</p>
                            <p className="text-sm font-semibold">{maskData(responseData.digital_payment_id_info.data.name, showData)}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">Bank</p>
                            <p className="text-sm">{responseData.digital_payment_id_info.data.bank}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">Branch</p>
                            <p className="text-sm">{responseData.digital_payment_id_info.data.branch}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">Contact</p>
                            <p className="text-sm">{maskPhone(responseData.digital_payment_id_info.data.contact, showData)}</p>
                          </div>
                          <div className="md:col-span-2">
                            <p className="text-sm text-muted-foreground mb-1">Branch Address</p>
                            <p className="text-sm">{responseData.digital_payment_id_info.data.address}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">City</p>
                            <p className="text-sm">{responseData.digital_payment_id_info.data.city}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">State</p>
                            <p className="text-sm">{responseData.digital_payment_id_info.data.state}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">District</p>
                            <p className="text-sm">{responseData.digital_payment_id_info.data.district}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* Telco Info */}
                  {responseData.telco_info?.code === "SUC" && (
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Phone className="h-5 w-5" />
                          Telco Info
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">Mobile Number</p>
                            <p className="text-sm font-semibold">{maskPhone(responseData.telco_info.data.msisdn.msisdn, showData)}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">Connection Type</p>
                            <p className="text-sm capitalize">{responseData.telco_info.data.connection_type}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">Current Network</p>
                            <p className="text-sm">{responseData.telco_info.data.current_service_provider.network_name}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">Original Network</p>
                            <p className="text-sm">{responseData.telco_info.data.original_service_provider.network_name}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">Roaming</p>
                            <p className="text-sm">{responseData.telco_info.data.is_roaming ? "Yes" : "No"}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">Valid</p>
                            <Badge variant={responseData.telco_info.data.is_valid ? "default" : "destructive"}>
                              {responseData.telco_info.data.is_valid ? "TRUE" : "FALSE"}
                            </Badge>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">Subscriber Status</p>
                            <Badge variant="default">{responseData.telco_info.data.subscriber_status}</Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* Mobile Age Info */}
                  {responseData.mobile_age_info?.code === "SUC" && (
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Phone className="h-5 w-5" />
                          Mobile Age Info
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">Ported</p>
                            <p className="text-sm font-semibold">{responseData.mobile_age_info.data.is_ported}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">Age</p>
                            <Badge variant="outline">{responseData.mobile_age_info.data.mobile_age}</Badge>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">Region</p>
                            <p className="text-sm">{responseData.mobile_age_info.data.region}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">Active</p>
                            <Badge variant={responseData.mobile_age_info.data.number_active === "Yes" ? "default" : "destructive"}>
                              {responseData.mobile_age_info.data.number_active}
                            </Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* WhatsApp Info */}
                  {responseData.whatsapp_info?.code === "SUC" && (
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Phone className="h-5 w-5" />
                          WhatsApp Info
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">Status</p>
                            <Badge variant="default">{responseData.whatsapp_info.data.status}</Badge>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">Is Business</p>
                            <p className="text-sm">{responseData.whatsapp_info.data.is_business === "0" ? "0 (Personal)" : "1 (Business)"}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* Revoke Info */}
                  {responseData.revoke_info?.code === "SUC" && (
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Info className="h-5 w-5" />
                          Revoke Info
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">Revoke Status</p>
                            <Badge variant={responseData.revoke_info.data.revoke_status === "No" ? "default" : "destructive"}>
                              {responseData.revoke_info.data.revoke_status}
                            </Badge>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">Revoke Date</p>
                            <p className="text-sm">{responseData.revoke_info.data.revoke_date || "—"}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* EPFO Info */}
                  {responseData.epfo_info?.code === "SUC" && responseData.epfo_info.data && (
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Briefcase className="h-5 w-5" />
                          EPFO Info
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">UAN</p>
                            <p className="text-sm font-semibold">{maskData(responseData.epfo_info.data[0]?.uan, showData)}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">Guardian Name</p>
                            <p className="text-sm">{maskData(responseData.epfo_info.data[0]?.guardian_name, showData)}</p>
                          </div>
                          <div className="md:col-span-2">
                            <p className="text-sm text-muted-foreground mb-2">Establishment Names</p>
                            <div className="flex flex-wrap gap-2">
                              {responseData.epfo_info.data.map((emp: any, idx: number) => (
                                <Badge key={idx} variant="outline">{emp.establishment_name}</Badge>
                              ))}
                            </div>
                          </div>
                          <div className="md:col-span-2">
                            <p className="text-sm text-muted-foreground mb-2">Date of Joining</p>
                            <div className="flex flex-wrap gap-2">
                              {responseData.epfo_info.data.map((emp: any, idx: number) => (
                                <Badge key={idx} variant="secondary">{emp.date_of_joining}</Badge>
                              ))}
                            </div>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">Date of Exit</p>
                            <p className="text-sm">{responseData.epfo_info.data.every((emp: any) => !emp.date_of_exit) ? "None" : responseData.epfo_info.data.map((emp: any) => emp.date_of_exit).filter(Boolean).join(", ")}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* Profile Advance */}
                  {responseData.profile_advance?.full_name && (
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <User className="h-5 w-5" />
                          Profile Advance
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">Full Name</p>
                            <p className="text-sm font-semibold">{maskData(responseData.profile_advance.full_name, showData)}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">Gender</p>
                            <p className="text-sm">{responseData.profile_advance.gender}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">Age</p>
                            <p className="text-sm">{responseData.profile_advance.age}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">Date of Birth</p>
                            <p className="text-sm">{responseData.profile_advance.date_of_birth}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">Income</p>
                            <p className="text-sm font-semibold">₹{responseData.profile_advance.income}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">Email</p>
                            <p className="text-sm">{maskEmail(responseData.profile_advance.email, showData)}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">Document (PAN)</p>
                            <p className="text-sm">{maskData(responseData.profile_advance.document_pan, showData)}</p>
                          </div>
                          <div className="md:col-span-2">
                            <p className="text-sm text-muted-foreground mb-1">Alternate Phones</p>
                            <div className="flex flex-wrap gap-2 mt-1">
                              {responseData.profile_advance.alternate_phones.map((phone: string, idx: number) => (
                                <Badge key={idx} variant="outline">{maskPhone(phone, showData)}</Badge>
                              ))}
                            </div>
                          </div>
                          <div className="md:col-span-2">
                            <p className="text-sm text-muted-foreground mb-1">Detailed Address</p>
                            <p className="text-sm">{responseData.profile_advance.detailed_address}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">Address State</p>
                            <p className="text-sm">{responseData.profile_advance.address_state}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">Address Pincode</p>
                            <p className="text-sm">{responseData.profile_advance.address_pincode}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">Address Type</p>
                            <p className="text-sm">{responseData.profile_advance.address_type}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">Date of Reporting</p>
                            <p className="text-sm">{responseData.profile_advance.address_date_of_reporting}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* Bureau Data */}
                  {responseData.bureau_data?.credit_score && (
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <FileText className="h-5 w-5" />
                          Bureau Data
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        {/* Credit Scores */}
                        <div className="grid md:grid-cols-2 gap-4 p-4 bg-muted/50 rounded-lg">
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">Credit Score</p>
                            <p className="text-2xl font-bold text-primary">{responseData.bureau_data.credit_score}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">FCIREX Score</p>
                            <p className="text-2xl font-bold text-primary">{responseData.bureau_data.fcirex_score}</p>
                          </div>
                        </div>

                        {/* Address Details */}
                        <div>
                          <p className="text-sm font-semibold mb-3">Address Details</p>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <p className="text-sm text-muted-foreground mb-1">Flat / House No</p>
                              <p className="text-sm">{responseData.bureau_data.address.flat_house_no}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground mb-1">First Line</p>
                              <p className="text-sm">{responseData.bureau_data.address.first_line}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground mb-1">Second Line</p>
                              <p className="text-sm">{responseData.bureau_data.address.second_line}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground mb-1">Third Line</p>
                              <p className="text-sm">{responseData.bureau_data.address.third_line}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground mb-1">PIN Code</p>
                              <p className="text-sm">{responseData.bureau_data.address.pin_code}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground mb-1">State Code</p>
                              <p className="text-sm">{responseData.bureau_data.address.state_code}</p>
                            </div>
                          </div>
                        </div>

                        {/* Credit Accounts Summary */}
                        <div>
                          <p className="text-sm font-semibold mb-3">Credit Accounts Summary</p>
                          <div className="grid md:grid-cols-4 gap-4">
                            <div className="p-3 bg-muted/50 rounded-lg text-center">
                              <p className="text-2xl font-bold">{responseData.bureau_data.credit_accounts.total}</p>
                              <p className="text-xs text-muted-foreground mt-1">Total</p>
                            </div>
                            <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded-lg text-center">
                              <p className="text-2xl font-bold text-green-600">{responseData.bureau_data.credit_accounts.active}</p>
                              <p className="text-xs text-muted-foreground mt-1">Active</p>
                            </div>
                            <div className="p-3 bg-muted/50 rounded-lg text-center">
                              <p className="text-2xl font-bold">{responseData.bureau_data.credit_accounts.closed}</p>
                              <p className="text-xs text-muted-foreground mt-1">Closed</p>
                            </div>
                            <div className="p-3 bg-red-50 dark:bg-red-950/20 rounded-lg text-center">
                              <p className="text-2xl font-bold text-red-600">{responseData.bureau_data.credit_accounts.default}</p>
                              <p className="text-xs text-muted-foreground mt-1">Default</p>
                            </div>
                          </div>
                        </div>

                        {/* Account Details */}
                        <div>
                          <p className="text-sm font-semibold mb-3">Account Details</p>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <p className="text-sm text-muted-foreground mb-1">Account Number</p>
                              <p className="text-sm">{maskData(responseData.bureau_data.account_details.account_number, showData)}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground mb-1">Subscriber Name</p>
                              <p className="text-sm">{maskData(responseData.bureau_data.account_details.subscriber_name, showData)}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground mb-1">Open Date</p>
                              <p className="text-sm">{responseData.bureau_data.account_details.open_date}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground mb-1">Date Closed</p>
                              <p className="text-sm">{responseData.bureau_data.account_details.date_closed}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground mb-1">Current Balance</p>
                              <p className="text-sm font-semibold">₹{responseData.bureau_data.account_details.current_balance}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground mb-1">Highest Credit / Original Loan</p>
                              <p className="text-sm">₹{responseData.bureau_data.account_details.highest_credit_original_loan}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground mb-1">Payment Rating</p>
                              <Badge variant={responseData.bureau_data.account_details.payment_rating === "0" ? "default" : "destructive"}>
                                {responseData.bureau_data.account_details.payment_rating}
                              </Badge>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground mb-1">Days Past Due</p>
                              <p className="text-sm">{responseData.bureau_data.account_details.days_past_due}</p>
                            </div>
                          </div>
                        </div>

                        {/* Contact Details */}
                        <div>
                          <p className="text-sm font-semibold mb-3">Contact Details</p>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <p className="text-sm text-muted-foreground mb-1">Primary Mobile</p>
                              <p className="text-sm">{maskPhone(responseData.bureau_data.contact.primary_mobile, showData)}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground mb-1">Email Address</p>
                              <p className="text-sm">{maskEmail(responseData.bureau_data.contact.email_address, showData)}</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </TabsContent>

                {/* Blue Collar Profile */}
                <TabsContent value="bluecollar" className="space-y-6 mt-6">
                  <Card className="bg-gradient-to-br from-blue-500/5 to-blue-500/10 border-blue-500/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <CheckCircle2 className="h-5 w-5 text-blue-600" />
                        Key Highlights - Blue Collar Profile
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-3 gap-4">
                        {stats?.highlights.map((highlight, idx) => (
                          <div key={idx} className="bg-background/50 p-3 rounded-lg">
                            <p className="text-sm font-semibold">{highlight}</p>
                          </div>
                        ))}
                        {responseData.esic_info?.code === "SUC" && (
                          <div className="bg-background/50 p-3 rounded-lg">
                            <p className="text-xs text-muted-foreground mb-1">ESIC Status</p>
                            <p className="font-semibold text-sm">Registered</p>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>

                  <p className="text-2xl font-bold">Profile Data</p>

                  {responseData.esic_info?.code === "SUC" && responseData.esic_info.data?.esic_details && (
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Shield className="h-5 w-5" />
                          ESIC Records ({responseData.esic_info.data.esic_details.length})
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {responseData.esic_info.data.esic_details.map((record: any, idx: number) => {
                          const bankNotVerified = record.bank_account_status === "Not Verified";

                          return (
                            <Card key={idx} className={bankNotVerified ? "border-orange-200" : ""}>
                              <CardHeader>
                                <div className="flex justify-between items-start">
                                  <div>
                                    <CardTitle className="text-base">{maskData(record.name, showData)}</CardTitle>
                                    <CardDescription>ESIC: {maskData(record.esic_number, showData)}</CardDescription>
                                  </div>
                                  {bankNotVerified && (
                                    <Badge variant="outline" className="text-orange-600 border-orange-600 gap-1">
                                      <AlertTriangle className="h-3 w-3" />
                                      Bank Not Verified
                                    </Badge>
                                  )}
                                </div>
                              </CardHeader>
                              <CardContent>
                                <Collapsible open={expandedEsic[idx]} onOpenChange={(open) => setExpandedEsic({ ...expandedEsic, [idx]: open })}>
                                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                                    <div>
                                      <p className="text-sm text-muted-foreground mb-1">Employer</p>
                                      <p className="text-sm font-semibold">{record.employer_name}</p>
                                    </div>
                                    <div>
                                      <p className="text-sm text-muted-foreground mb-1">Mobile</p>
                                      <p className="text-sm">{maskPhone(record.mobile, showData)}</p>
                                    </div>
                                    <div>
                                      <p className="text-sm text-muted-foreground mb-1">Bank</p>
                                      <p className="text-sm">{record.bank_name}</p>
                                    </div>
                                    <div>
                                      <p className="text-sm text-muted-foreground mb-1">Branch</p>
                                      <p className="text-sm">{record.branch_name}</p>
                                    </div>
                                  </div>

                                  <CollapsibleTrigger asChild>
                                    <Button variant="outline" size="sm" className="w-full">
                                      {expandedEsic[idx] ? <ChevronUp className="h-4 w-4 mr-2" /> : <ChevronDown className="h-4 w-4 mr-2" />}
                                      {expandedEsic[idx] ? "Show Less Details" : "Show More Details"}
                                    </Button>
                                  </CollapsibleTrigger>

                                  <CollapsibleContent className="mt-4 space-y-4">
                                    <div className="grid md:grid-cols-2 gap-4 pt-4 border-t">
                                      <div>
                                        <p className="text-sm text-muted-foreground mb-1">Date of Birth</p>
                                        <p className="text-sm">{record.date_of_birth}</p>
                                      </div>
                                      <div>
                                        <p className="text-sm text-muted-foreground mb-1">Age</p>
                                        <p className="text-sm">{record.age} years</p>
                                      </div>
                                      <div>
                                        <p className="text-sm text-muted-foreground mb-1">Gender</p>
                                        <p className="text-sm">{record.gender}</p>
                                      </div>
                                      <div>
                                        <p className="text-sm text-muted-foreground mb-1">Registration Date</p>
                                        <p className="text-sm">{record.registration_date}</p>
                                      </div>
                                      <div>
                                        <p className="text-sm text-muted-foreground mb-1">First Appointment</p>
                                        <p className="text-sm">{record.first_date_of_appointment}</p>
                                      </div>
                                      <div>
                                        <p className="text-sm text-muted-foreground mb-1">Dispensary</p>
                                        <p className="text-sm">{record.dispensary_name}</p>
                                      </div>
                                      <div className="md:col-span-2">
                                        <p className="text-sm text-muted-foreground mb-1">Address</p>
                                        <p className="text-sm">{maskData(record.address, showData)}</p>
                                      </div>
                                      <div className="md:col-span-2">
                                        <p className="text-sm font-semibold mb-2">Employer Details</p>
                                        <div className="grid md:grid-cols-2 gap-2 text-sm bg-muted/50 p-3 rounded-lg">
                                          <div><span className="text-muted-foreground">Name:</span> {record.employer_details?.employer_name}</div>
                                          <div><span className="text-muted-foreground">Code:</span> {record.employer_details?.employer_code}</div>
                                          <div><span className="text-muted-foreground">State:</span> {record.employer_details?.state}</div>
                                          <div><span className="text-muted-foreground">District:</span> {record.employer_details?.district}</div>
                                          <div><span className="text-muted-foreground">Pincode:</span> {record.employer_details?.pincode}</div>
                                          <div><span className="text-muted-foreground">Email:</span> {maskEmail(record.employer_details?.email, showData)}</div>
                                          <div className="md:col-span-2"><span className="text-muted-foreground">Address:</span> {record.employer_details?.address}</div>
                                        </div>
                                      </div>
                                    </div>
                                  </CollapsibleContent>
                                </Collapsible>
                              </CardContent>
                            </Card>
                          );
                        })}
                      </CardContent>
                    </Card>
                  )}
                </TabsContent>

                {/* Business Profile */}
                <TabsContent value="business" className="space-y-6 mt-6">
                  <Card className="bg-gradient-to-br from-purple-500/5 to-purple-500/10 border-purple-500/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <CheckCircle2 className="h-5 w-5 text-purple-600" />
                        Key Highlights - Business Profile
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-3 gap-4">
                        {stats?.highlights.map((highlight, idx) => (
                          <div key={idx} className="bg-background/50 p-3 rounded-lg">
                            <p className="text-sm font-semibold">{highlight}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <p className="text-2xl font-bold">Business Data</p>

                  {/* GST Information */}
                  {responseData.gst_list?.code === "SUC" && responseData.gst_list.data?.length > 0 && (
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Building2 className="h-5 w-5" />
                          GST Registrations ({responseData.gst_list.data.length})
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {responseData.gst_list.data.map((gst: any, idx: number) => (
                          <Card key={idx}>
                            <CardHeader>
                              <div className="flex justify-between items-start">
                                <div>
                                  <CardTitle className="text-base">{gst.trade_name}</CardTitle>
                                  <CardDescription>GSTIN: {maskData(gst.gstin, showData)}</CardDescription>
                                </div>
                                <Badge variant={gst.current_registration_status === "Active" ? "default" : "secondary"}>
                                  {gst.current_registration_status}
                                </Badge>
                              </div>
                            </CardHeader>
                            <CardContent>
                              <Collapsible open={expandedGst[idx]} onOpenChange={(open) => setExpandedGst({ ...expandedGst, [idx]: open })}>
                                <div className="grid md:grid-cols-2 gap-4 mb-4">
                                  <div>
                                    <p className="text-sm text-muted-foreground mb-1">Legal Name</p>
                                    <p className="text-sm font-semibold">{gst.legal_name}</p>
                                  </div>
                                  <div>
                                    <p className="text-sm text-muted-foreground mb-1">Business Constitution</p>
                                    <p className="text-sm">{gst.business_constitution}</p>
                                  </div>
                                  <div>
                                    <p className="text-sm text-muted-foreground mb-1">Registration Date</p>
                                    <p className="text-sm">{gst.register_date}</p>
                                  </div>
                                  <div>
                                    <p className="text-sm text-muted-foreground mb-1">Taxpayer Type</p>
                                    <p className="text-sm">{gst.tax_payer_type}</p>
                                  </div>
                                </div>

                                <CollapsibleTrigger asChild>
                                  <Button variant="outline" size="sm" className="w-full">
                                    {expandedGst[idx] ? <ChevronUp className="h-4 w-4 mr-2" /> : <ChevronDown className="h-4 w-4 mr-2" />}
                                    {expandedGst[idx] ? "Show Less Details" : "Show More Details"}
                                  </Button>
                                </CollapsibleTrigger>

                                <CollapsibleContent className="mt-4 space-y-4">
                                  <div className="grid md:grid-cols-2 gap-4 pt-4 border-t">
                                    <div>
                                      <p className="text-sm text-muted-foreground mb-1">Business Email</p>
                                      <p className="text-sm">{maskEmail(gst.business_email, showData)}</p>
                                    </div>
                                    <div>
                                      <p className="text-sm text-muted-foreground mb-1">Business Mobile</p>
                                      <p className="text-sm">{maskPhone(gst.business_mobile, showData)}</p>
                                    </div>
                                    <div className="md:col-span-2">
                                      <p className="text-sm text-muted-foreground mb-1">Registered Address</p>
                                      <p className="text-sm">{gst.primary_business_address?.registered_address}</p>
                                    </div>
                                    <div className="md:col-span-2">
                                      <p className="text-sm text-muted-foreground mb-1">Business Nature</p>
                                      <div className="flex flex-wrap gap-2 mt-2">
                                        {gst.business_nature?.map((nature: string, nIdx: number) => (
                                          <Badge key={nIdx} variant="outline">{nature}</Badge>
                                        ))}
                                      </div>
                                    </div>
                                    <div className="md:col-span-2">
                                      <p className="text-sm text-muted-foreground mb-2">Business Details</p>
                                      <div className="space-y-2">
                                        {gst.business_details?.map((detail: any, dIdx: number) => (
                                          <div key={dIdx} className="text-sm bg-muted/50 p-2 rounded">
                                            <span className="font-semibold">{detail.saccd}:</span> {detail.sdes}
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                    <div className="md:col-span-2">
                                      <p className="text-sm text-muted-foreground mb-1">Central Jurisdiction</p>
                                      <p className="text-sm">{gst.central_jurisdiction}</p>
                                    </div>
                                    <div className="md:col-span-2">
                                      <p className="text-sm text-muted-foreground mb-1">State Jurisdiction</p>
                                      <p className="text-sm">{gst.state_jurisdiction}</p>
                                    </div>
                                    <div>
                                      <p className="text-sm text-muted-foreground mb-1">Aggregate Turnover</p>
                                      <p className="text-sm">{gst.aggregate_turn_over}</p>
                                    </div>
                                    <div>
                                      <p className="text-sm text-muted-foreground mb-1">Field Visit Conducted</p>
                                      <p className="text-sm">{gst.is_field_visit_conducted}</p>
                                    </div>
                                    <div className="md:col-span-2">
                                      <p className="text-sm text-muted-foreground mb-2">Authorized Signatories</p>
                                      <div className="flex flex-wrap gap-2">
                                        {gst.authorized_signatory?.map((signatory: string, sIdx: number) => (
                                          <Badge key={sIdx} variant="secondary">{maskData(signatory, showData)}</Badge>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                </CollapsibleContent>
                              </Collapsible>
                            </CardContent>
                          </Card>
                        ))}
                      </CardContent>
                    </Card>
                  )}

                  {/* IEC Information */}
                  {responseData.iec_list?.code === "SUC" && responseData.iec_list.data?.iec_number && (
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Building2 className="h-5 w-5" />
                          IEC (Import Export Code) Details
                          <Badge variant="default" className="ml-2">Import/Export Business</Badge>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <Collapsible open={expandedIec} onOpenChange={setExpandedIec}>
                          <div className="grid md:grid-cols-2 gap-4 mb-4">
                            <div>
                              <p className="text-sm text-muted-foreground mb-1">IEC Number</p>
                              <p className="font-mono text-sm font-semibold">{maskData(responseData.iec_list.data.iec_number, showData)}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground mb-1">PAN Number</p>
                              <p className="font-mono text-sm">{maskData(responseData.iec_list.data.pan_number, showData)}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground mb-1">Firm Name</p>
                              <p className="text-sm font-semibold">{responseData.iec_list.data.firm_name}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground mb-1">IEC Status</p>
                              <Badge variant={responseData.iec_list.data.iec_status === "Valid" ? "default" : "secondary"}>
                                {responseData.iec_list.data.iec_status}
                              </Badge>
                            </div>
                          </div>

                          <CollapsibleTrigger asChild>
                            <Button variant="outline" size="sm" className="w-full">
                              {expandedIec ? <ChevronUp className="h-4 w-4 mr-2" /> : <ChevronDown className="h-4 w-4 mr-2" />}
                              {expandedIec ? "Show Less Details" : "Show More Details"}
                            </Button>
                          </CollapsibleTrigger>

                          <CollapsibleContent className="mt-4 space-y-4">
                            <div className="grid md:grid-cols-2 gap-4 pt-4 border-t">
                              <div>
                                <p className="text-sm text-muted-foreground mb-1">Date of Incorporation</p>
                                <p className="text-sm">{responseData.iec_list.data.date_of_incorporation}</p>
                              </div>
                              <div>
                                <p className="text-sm text-muted-foreground mb-1">IEC Issuance Date</p>
                                <p className="text-sm">{responseData.iec_list.data.iec_issuance_date}</p>
                              </div>
                              <div>
                                <p className="text-sm text-muted-foreground mb-1">Nature of Firm</p>
                                <p className="text-sm">{responseData.iec_list.data.nature_of_firm}</p>
                              </div>
                              <div>
                                <p className="text-sm text-muted-foreground mb-1">Category</p>
                                <p className="text-sm">{responseData.iec_list.data.category_of_exporters}</p>
                              </div>
                              <div>
                                <p className="text-sm text-muted-foreground mb-1">DGFT Office</p>
                                <p className="text-sm">{responseData.iec_list.data.dgft_ra_office}</p>
                              </div>
                              <div>
                                <p className="text-sm text-muted-foreground mb-1">Mobile</p>
                                <p className="text-sm">{maskPhone(responseData.iec_list.data.firm_mobile, showData)}</p>
                              </div>
                              <div className="md:col-span-2">
                                <p className="text-sm text-muted-foreground mb-1">Email</p>
                                <p className="text-sm">{maskEmail(responseData.iec_list.data.firm_email, showData)}</p>
                              </div>
                              <div className="md:col-span-2">
                                <p className="text-sm text-muted-foreground mb-1">Address</p>
                                <p className="text-sm">{responseData.iec_list.data.address}</p>
                              </div>

                              {responseData.iec_list.data.branch_details?.length > 0 && (
                                <div className="md:col-span-2">
                                  <p className="text-sm font-semibold mb-2">Branch Details</p>
                                  {responseData.iec_list.data.branch_details.map((branch: any, bIdx: number) => (
                                    <div key={bIdx} className="bg-muted/50 p-3 rounded-lg mb-2">
                                      <div className="grid md:grid-cols-2 gap-2 text-sm">
                                        <div><span className="text-muted-foreground">Branch Code:</span> {branch.branch_code}</div>
                                        <div><span className="text-muted-foreground">GSTIN:</span> {maskData(branch.gstin, showData)}</div>
                                        <div className="md:col-span-2"><span className="text-muted-foreground">Address:</span> {branch.branch_address}</div>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              )}

                              {responseData.iec_list.data.proprietor_partner_director_details?.length > 0 && (
                                <div className="md:col-span-2">
                                  <p className="text-sm font-semibold mb-2">Director/Partner Details</p>
                                  {responseData.iec_list.data.proprietor_partner_director_details.map((director: any, dIdx: number) => (
                                    <div key={dIdx} className="bg-muted/50 p-3 rounded-lg mb-2">
                                      <div className="grid md:grid-cols-2 gap-2 text-sm">
                                        <div><span className="text-muted-foreground">Name:</span> {maskData(director.name, showData)}</div>
                                        <div><span className="text-muted-foreground">Father Name:</span> {director.father_name}</div>
                                        <div><span className="text-muted-foreground">PAN:</span> {maskData(director.pan_number, showData)}</div>
                                        <div><span className="text-muted-foreground">Address:</span> {director.address}</div>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              )}

                              {responseData.iec_list.data.rcmc_details?.length > 0 && (
                                <div className="md:col-span-2">
                                  <p className="text-sm font-semibold mb-2">RCMC Details</p>
                                  {responseData.iec_list.data.rcmc_details.map((rcmc: any, rIdx: number) => (
                                    <div key={rIdx} className="bg-muted/50 p-3 rounded-lg mb-2">
                                      <div className="grid md:grid-cols-2 gap-2 text-sm">
                                        <div><span className="text-muted-foreground">RCMC Number:</span> {rcmc.rcmc_number}</div>
                                        <div><span className="text-muted-foreground">Status:</span> <Badge variant="outline">{rcmc.status}</Badge></div>
                                        <div><span className="text-muted-foreground">Issue Date:</span> {rcmc.issue_date}</div>
                                        <div><span className="text-muted-foreground">Expiry Date:</span> {rcmc.expiry_date}</div>
                                        <div><span className="text-muted-foreground">Issue Authority:</span> {rcmc.issue_authority}</div>
                                        <div><span className="text-muted-foreground">Exporter Type:</span> {rcmc.exporter_type}</div>
                                        <div className="md:col-span-2"><span className="text-muted-foreground">Products:</span> {rcmc.products_for_which_registered}</div>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          </CollapsibleContent>
                        </Collapsible>
                      </CardContent>
                    </Card>
                  )}

                  {/* MSME Information */}
                  {responseData.msme_info?.code === "SUC" && responseData.msme_info.data?.length > 0 && (
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Briefcase className="h-5 w-5" />
                          MSME Registration
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        {responseData.msme_info.data.map((msme: any, idx: number) => (
                          <Collapsible key={idx} open={expandedMsme} onOpenChange={setExpandedMsme}>
                            <div className="grid md:grid-cols-2 gap-4 mb-4">
                              <div>
                                <p className="text-sm text-muted-foreground mb-1">Udyam Number</p>
                                <p className="font-mono text-sm font-semibold">{msme.udyam_number}</p>
                              </div>
                              <div>
                                <p className="text-sm text-muted-foreground mb-1">Enterprise Name</p>
                                <p className="text-sm font-semibold">{msme.name_of_enterprise}</p>
                              </div>
                              <div>
                                <p className="text-sm text-muted-foreground mb-1">Owner Name</p>
                                <p className="text-sm">{maskData(msme.owner_name, showData)}</p>
                              </div>
                              <div>
                                <p className="text-sm text-muted-foreground mb-1">Type</p>
                                <Badge variant="outline">{msme.type_of_enterprise}</Badge>
                              </div>
                            </div>

                            <CollapsibleTrigger asChild>
                              <Button variant="outline" size="sm" className="w-full">
                                {expandedMsme ? <ChevronUp className="h-4 w-4 mr-2" /> : <ChevronDown className="h-4 w-4 mr-2" />}
                                {expandedMsme ? "Show Less Details" : "Show More Details"}
                              </Button>
                            </CollapsibleTrigger>

                            <CollapsibleContent className="mt-4 space-y-4">
                              <div className="grid md:grid-cols-2 gap-4 pt-4 border-t">
                                <div>
                                  <p className="text-sm text-muted-foreground mb-1">Major Activity</p>
                                  <p className="text-sm">{msme.major_activity}</p>
                                </div>
                                <div>
                                  <p className="text-sm text-muted-foreground mb-1">Organisation Type</p>
                                  <p className="text-sm">{msme.type_of_organisation}</p>
                                </div>
                                <div>
                                  <p className="text-sm text-muted-foreground mb-1">PAN</p>
                                  <p className="font-mono text-sm">{maskData(msme.pan, showData)}</p>
                                </div>
                                <div>
                                  <p className="text-sm text-muted-foreground mb-1">Mobile</p>
                                  <p className="text-sm">{maskPhone(msme.mobile_no, showData)}</p>
                                </div>
                                <div>
                                  <p className="text-sm text-muted-foreground mb-1">Email</p>
                                  <p className="text-sm">{maskEmail(msme.email_id, showData)}</p>
                                </div>
                                <div>
                                  <p className="text-sm text-muted-foreground mb-1">Date of Incorporation</p>
                                  <p className="text-sm">{msme.date_of_incorporation}</p>
                                </div>
                                <div>
                                  <p className="text-sm text-muted-foreground mb-1">Registration Date</p>
                                  <p className="text-sm">{msme.date_of_udyam_registration}</p>
                                </div>
                                <div>
                                  <p className="text-sm text-muted-foreground mb-1">Social Category</p>
                                  <p className="text-sm">{msme.social_category}</p>
                                </div>
                                <div className="md:col-span-2">
                                  <p className="text-sm text-muted-foreground mb-1">NIC Classification</p>
                                  <div className="space-y-1 text-sm">
                                    <div>{msme.nic_2_digit}</div>
                                    <div>{msme.nic_4_digit}</div>
                                    <div>{msme.nic_5_digit}</div>
                                  </div>
                                </div>
                                <div className="md:col-span-2">
                                  <p className="text-sm text-muted-foreground mb-1">Address</p>
                                  <p className="text-sm">{`${msme.flat_door_block_no}, ${msme.name_of_premises_building}, ${msme.village_town}, ${msme.city}, ${msme.state} - ${msme.pin}`}</p>
                                </div>
                                <div className="md:col-span-2">
                                  <p className="text-sm font-semibold mb-2">Employee Count</p>
                                  <div className="grid grid-cols-4 gap-2">
                                    <div className="bg-muted/50 p-2 rounded text-center">
                                      <p className="text-xs text-muted-foreground">Male</p>
                                      <p className="font-semibold">{msme.male}</p>
                                    </div>
                                    <div className="bg-muted/50 p-2 rounded text-center">
                                      <p className="text-xs text-muted-foreground">Female</p>
                                      <p className="font-semibold">{msme.female}</p>
                                    </div>
                                    <div className="bg-muted/50 p-2 rounded text-center">
                                      <p className="text-xs text-muted-foreground">Other</p>
                                      <p className="font-semibold">{msme.other}</p>
                                    </div>
                                    <div className="bg-muted/50 p-2 rounded text-center">
                                      <p className="text-xs text-muted-foreground">Total</p>
                                      <p className="font-semibold">{msme.total}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </CollapsibleContent>
                          </Collapsible>
                        ))}
                      </CardContent>
                    </Card>
                  )}
                </TabsContent>
              </Tabs>

              <div className="text-sm text-muted-foreground text-center">
                Response generated at: {new Date(responseData.timestamp).toLocaleString()}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomerProfiling;
