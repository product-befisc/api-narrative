import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, User, Phone, Mail, MapPin, CreditCard, Briefcase, Calendar, Eye, EyeOff, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import Navbar from '@/components/Navbar';
import { maskData, maskPhone, maskEmail } from '@/lib/utils';

const EmploymentVerification = () => {
  const navigate = useNavigate();
  const [mobile, setMobile] = useState('9876543210');
  const [allScenarios, setAllScenarios] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [showData, setShowData] = useState(false);
  const [consent, setConsent] = useState(true);
  const [activeScenario, setActiveScenario] = useState<'single' | 'multiple' | 'flagged'>('single');

  const baseData = {
    personal_information: {
      full_name: "RAM SINGH",
      gender: "Male",
      age: "20",
      date_of_birth: "1999-01-01",
      income: "987987"
    },
    alternate_phone: [
      { serial_number: "1", value: "00004311234" },
      { serial_number: "2", value: "00004311234" },
      { serial_number: "3", value: "9877654321" },
      { serial_number: "4", value: "01146534321" },
      { serial_number: "5", value: "1112011111111" }
    ],
    email: [{ serial_number: "1", value: "RAM@GMAIL.COM" }],
    address: [{
      detailed_address: "11 ABC COLONY PHASE I ABC COLONY PHASE I",
      state: "UP",
      pincode: "202001",
      type: "Primary",
      date_of_reporting: "2024-07-18"
    }],
    document_data: {
      pan: [{ serial_number: "1", value: "ABCPD1234D" }],
      uan: "1000087654321"
    },
    uan_details: {
      name: "RAM SINGH",
      guardian_name: "SHAM SINGH",
      employment_history: [
        { establishment_name: "ABC PRIVATE LIMITED", member_id: "MRNOI12345430000012345", date_of_joining: "2025-01-01", date_of_exit: "" },
        { establishment_name: "XYZ PRIVATE LIMITED", member_id: "UKDDN0123450000001230", date_of_joining: "2024-01-01", date_of_exit: "2024-12-01" }
      ],
      passbook: [
        { member_id: "MRNOI14624540000010947", credit_debit_flag: "C", transaction_category: "ob_interest", employee_share: "0", employer_share: "0", pension_share: "0", approved_on: "2017-04-01", year: "2017", month: "04", description: "OB Int. Updated upto 31/03/2017" },
        { member_id: "MRNOI14624540000010947", credit_debit_flag: "C", transaction_category: "contribution", employee_share: "310", employer_share: "95", pension_share: "215", approved_on: "2017-06-15", year: "2017", month: "06", description: "Cont. For Due-Month 062017" },
        { member_id: "MRNOI14624540000010947", credit_debit_flag: "C", transaction_category: "contribution", employee_share: "960", employer_share: "294", pension_share: "666", approved_on: "2017-07-14", year: "2017", month: "07", description: "Cont. For Due-Month 072017" },
        { member_id: "MRNOI14624540000010947", credit_debit_flag: "C", transaction_category: "contribution", employee_share: "960", employer_share: "294", pension_share: "666", approved_on: "2017-08-11", year: "2017", month: "08", description: "Cont. For Due-Month 082017" },
        { member_id: "MRNOI14624540000010947", credit_debit_flag: "C", transaction_category: "contribution", employee_share: "960", employer_share: "294", pension_share: "666", approved_on: "2017-09-15", year: "2017", month: "09", description: "Cont. For Due-Month 092017" },
        { member_id: "MRNOI14624540000010947", credit_debit_flag: "C", transaction_category: "contribution", employee_share: "960", employer_share: "294", pension_share: "666", approved_on: "2017-10-14", year: "2017", month: "10", description: "Cont. For Due-Month 102017" },
        { member_id: "MRNOI14624540000010947", credit_debit_flag: "C", transaction_category: "contribution", employee_share: "960", employer_share: "294", pension_share: "666", approved_on: "2017-11-11", year: "2017", month: "11", description: "Cont. For Due-Month 112017" },
        { member_id: "MRNOI14624540000010947", credit_debit_flag: "C", transaction_category: "contribution", employee_share: "960", employer_share: "294", pension_share: "666", approved_on: "2017-12-15", year: "2017", month: "12", description: "Cont. For Due-Month 122017" },
        { member_id: "MRNOI14624540000010947", credit_debit_flag: "C", transaction_category: "contribution", employee_share: "960", employer_share: "294", pension_share: "666", approved_on: "2018-01-15", year: "2018", month: "01", description: "Cont. For Due-Month 012018" },
        { member_id: "MRNOI14624540000010947", credit_debit_flag: "C", transaction_category: "contribution", employee_share: "960", employer_share: "294", pension_share: "666", approved_on: "2018-02-12", year: "2018", month: "02", description: "Cont. For Due-Month 022018" },
        { member_id: "MRNOI14624540000010947", credit_debit_flag: "C", transaction_category: "contribution", employee_share: "960", employer_share: "294", pension_share: "666", approved_on: "2018-03-12", year: "2018", month: "03", description: "Cont. For Due-Month 032018" },
        { member_id: "MRNOI14624540000010947", credit_debit_flag: "C", transaction_category: "interest", employee_share: "266", employer_share: "82", pension_share: "0", approved_on: "2018-08-05", year: "2017", month: "04", description: "Int. Updated upto 31/03/2018" },
        { member_id: "MRNOI14624540000010947", credit_debit_flag: "C", transaction_category: "contribution", employee_share: "960", employer_share: "294", pension_share: "666", approved_on: "2018-04-13", year: "2018", month: "04", description: "Cont. For Due-Month 042018" },
        { member_id: "MRNOI14624540000010947", credit_debit_flag: "C", transaction_category: "contribution", employee_share: "960", employer_share: "294", pension_share: "666", approved_on: "2018-05-11", year: "2018", month: "05", description: "Cont. For Due-Month 052018" },
        { member_id: "MRNOI14624540000010947", credit_debit_flag: "C", transaction_category: "contribution", employee_share: "960", employer_share: "294", pension_share: "666", approved_on: "2018-06-12", year: "2018", month: "06", description: "Cont. For Due-Month 062018" },
        { member_id: "MRNOI14624540000010947", credit_debit_flag: "C", transaction_category: "contribution", employee_share: "960", employer_share: "294", pension_share: "666", approved_on: "2018-07-14", year: "2018", month: "07", description: "Cont. For Due-Month 072018" },
        { member_id: "MRNOI14624540000010947", credit_debit_flag: "C", transaction_category: "contribution", employee_share: "960", employer_share: "294", pension_share: "666", approved_on: "2018-08-13", year: "2018", month: "08", description: "Cont. For Due-Month 082018" },
        { member_id: "MRNOI14624540000010947", credit_debit_flag: "C", transaction_category: "contribution", employee_share: "960", employer_share: "294", pension_share: "666", approved_on: "2018-09-11", year: "2018", month: "09", description: "Cont. For Due-Month 092018" }
      ]
    },
    timestamp: new Date().toISOString()
  };

  const handleFetch = () => {
    setLoading(true);
    setTimeout(() => {
      // Scenario 1: Single UAN
      const singleUAN: any = { ...baseData };
      
      // Scenario 2: Multiple UANs
      const multipleUANs: any = { ...baseData };
      multipleUANs.document_data.uan = ["1000087654321", "1000098765432", "1000109876543"];
      multipleUANs.uan_details = {
        ...multipleUANs.uan_details,
        multiple_uans: [
          { uan: "1000087654321", establishment: "ABC PRIVATE LIMITED", joining_date: "2025-01-01", exit_date: "Present" },
          { uan: "1000098765432", establishment: "XYZ PRIVATE LIMITED", joining_date: "2024-01-01", exit_date: "2024-12-01" },
          { uan: "1000109876543", establishment: "DEF INDUSTRIES LTD", joining_date: "2022-03-01", exit_date: "2023-02-01" }
        ]
      };
      
      // Scenario 3: Flagged
      const flaggedUAN: any = { ...baseData };
      flaggedUAN.uan_details.employment_history = [
        { establishment_name: "ABC PRIVATE LIMITED", member_id: "MRNOI12345430000012345", date_of_joining: "2024-03-01", date_of_exit: "2025-01-01" },
        { establishment_name: "XYZ PRIVATE LIMITED", member_id: "UKDDN0123450000001230", date_of_joining: "2024-05-01", date_of_exit: "2024-12-01" }
      ];
      flaggedUAN.flagged = {
        reason: "Overlapping employment dates detected",
        overlap_period: "May 2024 to Dec 2024",
        details: "Employee appears to have worked at two companies during overlapping months."
      };
      
      setAllScenarios({
        single: singleUAN,
        multiple: multipleUANs,
        flagged: flaggedUAN
      });
      setLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Button variant="ghost" className="mb-6" onClick={() => navigate('/product/id-proof?tab=solutions')}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Solutions
        </Button>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-3">Employment Verification</h1>
            <p className="text-muted-foreground">Comprehensive employment history and UAN verification</p>
          </div>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Enter Mobile Number</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="mobile">Mobile Number</Label>
                <div className="flex gap-4">
                  <Input
                    id="mobile"
                    type="tel"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    placeholder="e.g., 9876543210"
                    className="flex-1"
                    autoComplete="tel"
                  />
                  <Button onClick={handleFetch} disabled={loading || !consent}>
                    {loading ? 'Fetching...' : 'Fetch Employment Data'}
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

          {allScenarios && (
            <div className="space-y-6 animate-fade-in">
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Switch Between Scenarios</CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs value={activeScenario} onValueChange={(v) => setActiveScenario(v as any)}>
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="single">✅ Single UAN</TabsTrigger>
                      <TabsTrigger value="multiple">⚠️ Multiple UANs</TabsTrigger>
                      <TabsTrigger value="flagged">🚩 Flagged</TabsTrigger>
                    </TabsList>
                  </Tabs>
                </CardContent>
              </Card>

              <div className="flex justify-end mb-4">
                <Button variant="outline" size="sm" onClick={() => setShowData(!showData)}>
                  {showData ? <EyeOff className="h-4 w-4 mr-2" /> : <Eye className="h-4 w-4 mr-2" />}
                  {showData ? 'Hide' : 'Show'} Data
                </Button>
              </div>

              {/* Status Banner */}
              {activeScenario === 'single' && (
                <Card className="border-2 border-green-500 bg-green-50 dark:bg-green-950">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                      <div>
                        <h3 className="font-semibold text-green-900 dark:text-green-100">✅ Verified – Single UAN Found</h3>
                        <p className="text-sm text-green-700 dark:text-green-300">Clean Employment Record</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {activeScenario === 'multiple' && (
                <Card className="border-2 border-yellow-500 bg-yellow-50 dark:bg-yellow-950">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3">
                      <AlertTriangle className="h-6 w-6 text-yellow-600" />
                      <div>
                        <h3 className="font-semibold text-yellow-900 dark:text-yellow-100">⚠️ Multiple UANs Found</h3>
                        <p className="text-sm text-yellow-700 dark:text-yellow-300">Cross-check Required</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {activeScenario === 'flagged' && allScenarios.flagged.flagged && (
                <Card className="border-2 border-red-500 bg-red-50 dark:bg-red-950">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3">
                      <XCircle className="h-6 w-6 text-red-600" />
                      <div>
                        <h3 className="font-semibold text-red-900 dark:text-red-100">🚩 Flagged Employment Record</h3>
                        <p className="text-sm text-red-700 dark:text-red-300">{allScenarios.flagged.flagged.reason}</p>
                        <p className="text-xs text-red-600 dark:text-red-400 mt-1">
                          Overlap: {allScenarios.flagged.flagged.overlap_period} - {allScenarios.flagged.flagged.details}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Personal Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5 text-primary" />
                    Personal Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Full Name</p>
                      <p className="font-semibold">{maskData(allScenarios[activeScenario].personal_information.full_name, showData)}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Gender</p>
                      <p className="font-semibold">{allScenarios[activeScenario].personal_information.gender}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Age</p>
                      <p className="font-semibold">{allScenarios[activeScenario].personal_information.age}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Date of Birth</p>
                      <p className="font-semibold">{allScenarios[activeScenario].personal_information.date_of_birth}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Income</p>
                      <p className="font-semibold">₹{allScenarios[activeScenario].personal_information.income}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-primary" />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">📞 Alternate Phone Numbers</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {allScenarios[activeScenario].alternate_phone.map((phone: any) => (
                        <div key={phone.serial_number} className="text-sm">
                          {maskPhone(phone.value, showData)}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">📧 Email</p>
                    {allScenarios[activeScenario].email.map((email: any) => (
                      <div key={email.serial_number} className="text-sm">
                        {maskEmail(email.value, showData)}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Address */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    Address
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {allScenarios[activeScenario].address.map((addr: any, idx: number) => (
                    <div key={idx} className="space-y-2">
                      <div>
                        <Badge>{addr.type}</Badge>
                      </div>
                      <p className="text-sm">{maskData(addr.detailed_address, showData)}</p>
                      <div className="flex gap-4 text-sm">
                        <span><strong>State:</strong> {addr.state}</span>
                        <span><strong>Pincode:</strong> {addr.pincode}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">Reported: {addr.date_of_reporting}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Document Data */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5 text-primary" />
                    Document Data
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-sm text-muted-foreground">💳 PAN</p>
                    {allScenarios[activeScenario].document_data.pan.map((pan: any) => (
                      <p key={pan.serial_number} className="font-semibold">{maskData(pan.value, showData)}</p>
                    ))}
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">🧾 UAN</p>
                    {Array.isArray(allScenarios[activeScenario].document_data.uan) ? (
                      allScenarios[activeScenario].document_data.uan.map((uan: string, idx: number) => (
                        <p key={idx} className="font-semibold">{maskData(uan, showData)}</p>
                      ))
                    ) : (
                      <p className="font-semibold">{maskData(allScenarios[activeScenario].document_data.uan, showData)}</p>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Multiple UANs Details */}
              {activeScenario === 'multiple' && allScenarios.multiple.uan_details.multiple_uans && (
                <Card>
                  <CardHeader>
                    <CardTitle>Multiple UAN Records</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead className="bg-muted">
                          <tr>
                            <th className="p-3 text-left">UAN</th>
                            <th className="p-3 text-left">Establishment</th>
                            <th className="p-3 text-left">Joining Date</th>
                            <th className="p-3 text-left">Exit Date</th>
                          </tr>
                        </thead>
                        <tbody>
                          {allScenarios.multiple.uan_details.multiple_uans.map((uan: any, idx: number) => (
                            <tr key={idx} className="border-b">
                              <td className="p-3">{maskData(uan.uan, showData)}</td>
                              <td className="p-3">{uan.establishment}</td>
                              <td className="p-3">{uan.joining_date}</td>
                              <td className="p-3">{uan.exit_date}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <p className="text-sm text-muted-foreground mt-4">
                      ⚠️ Please verify the correct UAN before proceeding.
                    </p>
                  </CardContent>
                </Card>
              )}

              {/* Employment History */}
              <Card className={activeScenario === 'flagged' ? 'border-2 border-red-500' : ''}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-primary" />
                    Employment History
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {allScenarios[activeScenario].uan_details.employment_history.map((job: any, index: number) => (
                      <Card key={index} className="border-2">
                        <CardContent className="pt-6">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h4 className="font-semibold text-lg">{maskData(job.establishment_name, showData)}</h4>
                              <p className="text-sm text-muted-foreground">{maskData(job.member_id, showData)}</p>
                            </div>
                            {!job.date_of_exit && (
                              <Badge className="bg-gradient-primary text-white">Current</Badge>
                            )}
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4 text-muted-foreground" />
                              <div>
                                <p className="text-xs text-muted-foreground">Joined</p>
                                <p className="text-sm font-medium">{job.date_of_joining}</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4 text-muted-foreground" />
                              <div>
                                <p className="text-xs text-muted-foreground">Exit</p>
                                <p className="text-sm font-medium">{job.date_of_exit || 'Present'}</p>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      ))}
                  </div>
                  {activeScenario === 'flagged' && (
                    <Button variant="destructive" className="w-full mt-4">
                      View Risk Details
                    </Button>
                  )}
                </CardContent>
              </Card>

              {/* Passbook */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-primary" />
                    UAN Passbook
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto max-h-96 overflow-y-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-muted sticky top-0">
                        <tr>
                          <th className="p-3 text-left">Month-Year</th>
                          <th className="p-3 text-left">Transaction Type</th>
                          <th className="p-3 text-right">Employee Share</th>
                          <th className="p-3 text-right">Employer Share</th>
                          <th className="p-3 text-right">Pension Share</th>
                          <th className="p-3 text-left">Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        {allScenarios[activeScenario].uan_details.passbook.map((entry: any, idx: number) => (
                          <tr key={idx} className="border-b hover:bg-muted/50">
                            <td className="p-3">{entry.month}/{entry.year}</td>
                            <td className="p-3">
                              <Badge variant="outline" className="text-xs">
                                {entry.transaction_category}
                              </Badge>
                            </td>
                            <td className="p-3 text-right">₹{entry.employee_share}</td>
                            <td className="p-3 text-right">₹{entry.employer_share}</td>
                            <td className="p-3 text-right">₹{entry.pension_share}</td>
                            <td className="p-3 text-xs">{entry.description}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              <div className="text-xs text-muted-foreground text-right">
                Response Time: {new Date(allScenarios[activeScenario].timestamp).toLocaleString()}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmploymentVerification;
