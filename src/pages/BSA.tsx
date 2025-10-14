import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Upload, FileText, Download, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';

const BSA = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [showData, setShowData] = useState(false);

  const maskEmail = (email: string) => {
    if (showData) return email;
    const [user, domain] = email.split('@');
    return `${user.slice(0, 2)}${'X'.repeat(user.length - 2)}@${domain}`;
  };

  const maskPhone = (phone: string) => {
    if (showData) return phone;
    return `XXXXXX${phone.slice(-4)}`;
  };

  const maskAccount = (account: string) => {
    if (showData) return account;
    return `XXXX${account.slice(-4)}`;
  };

  const maskPAN = (pan: string) => {
    if (showData) return pan;
    return `${pan.slice(0, 3)}XXXXX${pan.slice(-2)}`;
  };

  const handleAnalyze = () => {
    setUploaded(true);
    setLoading(true);
    setTimeout(() => {
      setResult({
        fileName: 'HDFC_Bank_Statement_Q3_2024.pdf',
        customerId: 'idhed553-hrf',
        reportDate: '14-10-2025, 12:24',
        referenceId: 'referenceID_yaymqPEIrUJSPnpPLu',
        healthScore: 488,
        maxScore: 900,
        userInfo: {
          name: 'SHIVAM AGGARWAL',
          email: 'appXXXX38@gmail.com',
          mobile: 'XXXXXX1118',
          address: '30A GALI NO 5 AGGARWAL COLONY BAHADUSGARHNEIR MUNCIPAL PARK JHAJJAR HARYANA-INDIA 124507',
          pan: 'BMQPA8051C',
        },
        bankDetails: {
          bankName: 'Axis Bank',
          accountNumber: '914010022475388',
          ifsc: 'UTIB0000627',
          accountOpeningDate: '-',
          accountType: 'Savings',
          odFacility: 'No',
          nomineeName: '-',
        },
        statementDetails: {
          period: '01-04-2023 to 31-03-2024',
          duration: '366 days',
          analysisPeriod: '01-04-2023 to 31-03-2024',
          generationGap: '562 days',
          availableBalance: '934326.16',
        },
        insights: {
          account: {
            primaryAccount: 'Yes',
            abb6Months: '278436.23',
            avgMonthlyCredits: '690686.83',
            foir: '0.11',
          },
          income: {
            salaryDetected: 'No',
            occupationType: 'Non-salaried',
            primaryIncomeSource: '-',
            creditMode: '-',
          },
          loanEmi: {
            loanLast60Days: 'No',
            bouncing: 'No',
            emiBestProposed: 'Last day of the month, 25th',
          },
          tampering: {
            statementTampered: 'No',
            dateMismatch: 'No',
            balanceMismatch: 'No',
          },
        },
        abbSummary: [
          { particular: 'ABB of last 6 months', amount: '278,436.23', count: '-' },
          { particular: 'ABB of last 3 months', amount: '488,938.15', count: '-' },
          { particular: 'ABB of last 30 days', amount: '795,717.94', count: '-' },
          { particular: 'Net change in Savings balance', amount: '-', count: '-' },
          { particular: 'Current balance', amount: '914,398.15', count: '-' },
          { particular: 'Minimum ABB month', amount: '11,412.96', count: 'Oct 2023' },
          { particular: 'Maximum ABB month', amount: '1,093,157.51', count: 'May 2023' },
        ],
        caution: [
          { particular: 'ABB < 20% of income', value: 'Yes', count: '7' },
          { particular: 'EMI Missed in last 30 days', value: 'No', count: '0' },
          { particular: 'Monthly Credit < Rs 21,000/-', value: 'No', count: '0' },
          { particular: 'Low transactions (<4 txns. in 30 days) Dr & Cr', value: 'No', count: '0' },
          { particular: 'Dormant Days', value: 'Yes', count: '7 days' },
          { particular: 'Dormant months', value: 'No', count: '0 months' },
          { particular: 'Missed EMI', value: 'No', count: '0' },
        ],
        positiveIndicators: [
          { particular: 'ABB > 150% of Salary', value: 'Yes', count: '1' },
          { particular: 'Dividend / Investment Income', value: 'Yes', count: '2' },
          { particular: 'Life Insurance Premium', value: 'No', count: '0' },
          { particular: 'Mediclaim Premium', value: 'No', count: '0' },
          { particular: 'Loan Closure (Indicator)', value: 'No', count: '0' },
        ],
      });
      setLoading(false);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <Button
          variant="ghost"
          className="mb-6"
          onClick={() => navigate('/home')}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Products
        </Button>

        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-foreground mb-4">
            Financial statements, analyzed for what's unseen.
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Review bank data for tampering, irregularities, and risk. Detect cashflow issues, hidden liabilities, and anomalies before credit decisions.
          </p>
        </div>

        {/* Upload Section */}
        <Card className="max-w-2xl mx-auto p-8 mb-12">
          <div className="flex items-center gap-2 mb-6">
            <FileText className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">Upload Bank Statement</h2>
          </div>
          
          {!uploaded ? (
            <div className="border-2 border-dashed border-border rounded-lg p-12 text-center mb-6 hover:border-primary transition-colors">
              <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground mb-2">Upload bank statement for analysis</p>
              <p className="text-sm text-muted-foreground">PDF or Excel files (max 20MB)</p>
            </div>
          ) : (
            <div className="border-2 border-success rounded-lg p-6 mb-6 bg-success/5">
              <div className="flex items-center gap-3">
                <FileText className="h-8 w-8 text-success" />
                <div className="text-left">
                  <p className="font-semibold text-foreground">HDFC_Bank_Statement_Q3_2024.pdf</p>
                  <p className="text-sm text-muted-foreground">Statement uploaded successfully</p>
                </div>
              </div>
            </div>
          )}
          
          <Button 
            onClick={handleAnalyze}
            disabled={loading || uploaded}
            className="w-full"
            size="lg"
          >
            {loading ? 'Analyzing Statement...' : uploaded ? 'Analyzing...' : 'Upload & Analyze'}
          </Button>

          {loading && (
            <div className="mt-6">
              <Progress value={65} />
              <p className="text-center text-sm text-muted-foreground mt-2">Processing transactions...</p>
            </div>
          )}
        </Card>

        {/* Results Dashboard */}
        {result && (
          <div className="animate-fade-in space-y-6">
            {/* Header with Score */}
            <Card className="p-6 bg-primary text-primary-foreground">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold">BANK STATEMENT ANALYZER REPORT</h2>
                <div className="text-right">
                  <div className="text-3xl font-bold">{result.healthScore}/{result.maxScore}</div>
                  <div className="text-sm opacity-90">BEFISC FINANCIAL HEALTH SCORE</div>
                  <div className="text-xs opacity-75 mt-1">({result.abbSummary.length} pages of {result.abbSummary.length})</div>
                </div>
              </div>
              <div className="mt-2 text-sm opacity-90">
                Customer ID: {result.customerId} | Report generated on: {result.reportDate} | Reference ID: {result.referenceId}
              </div>
            </Card>

            {/* Show/Hide Data Toggle */}
            <div className="flex justify-end">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowData(!showData)}
                className="gap-2"
              >
                {showData ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                {showData ? 'Hide' : 'Show'} Personal Data
              </Button>
            </div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Left Column - User & Account Info */}
              <div className="lg:col-span-2 space-y-6">
                {/* User & Account Information */}
                <Card className="p-6">
                  <div className="bg-primary/10 border-2 border-primary p-3 mb-4">
                    <h3 className="font-bold text-lg text-center">USER & ACCOUNT INFORMATION</h3>
                  </div>
                  <div className="bg-primary text-primary-foreground p-3 mb-2">
                    <h4 className="font-bold">Personal Details</h4>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex py-2 border-b">
                      <span className="w-32 text-muted-foreground">Name</span>
                      <span className="font-semibold">{result.userInfo.name}</span>
                    </div>
                    <div className="flex py-2 border-b">
                      <span className="w-32 text-muted-foreground">Email</span>
                      <span className="font-semibold">{maskEmail(result.userInfo.email)}</span>
                    </div>
                    <div className="flex py-2 border-b">
                      <span className="w-32 text-muted-foreground">Mobile No.</span>
                      <span className="font-semibold">{maskPhone(result.userInfo.mobile)}</span>
                    </div>
                    <div className="flex py-2 border-b">
                      <span className="w-32 text-muted-foreground">Address</span>
                      <span className="font-semibold">{showData ? result.userInfo.address : 'XXXX XXXX XX XXXXXXXX XXXXXX XXXXXXXXXXXX XXXXXXXX XXXX XXXXXX XXXXXXX-XXXXX 124507'}</span>
                    </div>
                    <div className="flex py-2">
                      <span className="w-32 text-muted-foreground">PAN</span>
                      <span className="font-semibold">{maskPAN(result.userInfo.pan)}</span>
                    </div>
                  </div>
                </Card>

                {/* Bank Account Details */}
                <Card className="p-6">
                  <div className="bg-primary text-primary-foreground p-3 mb-4">
                    <h3 className="font-bold text-center">Bank Account Details</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex py-2 border-b">
                      <span className="w-48 text-muted-foreground">Bank Name</span>
                      <span className="font-semibold">{result.bankDetails.bankName}</span>
                    </div>
                    <div className="flex py-2 border-b">
                      <span className="w-48 text-muted-foreground">Account Number</span>
                      <span className="font-semibold">{maskAccount(result.bankDetails.accountNumber)}</span>
                    </div>
                    <div className="flex py-2 border-b">
                      <span className="w-48 text-muted-foreground">IFSC Code</span>
                      <span className="font-semibold">{result.bankDetails.ifsc}</span>
                    </div>
                    <div className="flex py-2 border-b">
                      <span className="w-48 text-muted-foreground">Account Opening Date</span>
                      <span className="font-semibold">{result.bankDetails.accountOpeningDate}</span>
                    </div>
                    <div className="flex py-2 border-b">
                      <span className="w-48 text-muted-foreground">Account Type</span>
                      <span className="font-semibold">{result.bankDetails.accountType}</span>
                    </div>
                    <div className="flex py-2 border-b">
                      <span className="w-48 text-muted-foreground">OD Facility</span>
                      <span className="font-semibold">{result.bankDetails.odFacility}</span>
                    </div>
                    <div className="flex py-2">
                      <span className="w-48 text-muted-foreground">Nominee Name</span>
                      <span className="font-semibold">{result.bankDetails.nomineeName}</span>
                    </div>
                  </div>
                </Card>

                {/* Account Statement Details */}
                <Card className="p-6">
                  <div className="bg-primary text-primary-foreground p-3 mb-4">
                    <h3 className="font-bold text-center">Account Statement Details</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex py-2 border-b">
                      <span className="w-48 text-muted-foreground">Statement Period</span>
                      <span className="font-semibold">{result.statementDetails.period}</span>
                    </div>
                    <div className="flex py-2 border-b">
                      <span className="w-48 text-muted-foreground">Statement Duration</span>
                      <span className="font-semibold">{result.statementDetails.duration}</span>
                    </div>
                    <div className="flex py-2 border-b">
                      <span className="w-48 text-muted-foreground">Analysis Period</span>
                      <span className="font-semibold">{result.statementDetails.analysisPeriod}</span>
                    </div>
                    <div className="flex py-2 border-b">
                      <span className="w-48 text-muted-foreground">Statement Generation to Submission Gap</span>
                      <span className="font-semibold text-destructive">{result.statementDetails.generationGap}</span>
                    </div>
                    <div className="flex py-2">
                      <span className="w-48 text-muted-foreground">Available Balance (as on 31-03-2024)</span>
                      <span className="font-semibold">{result.statementDetails.availableBalance}</span>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Right Column - Insights */}
              <div className="space-y-6">
                <Card className="p-6">
                  <div className="bg-primary/10 border-2 border-primary p-3 mb-4">
                    <h3 className="font-bold text-lg text-center">INSIGHTS</h3>
                  </div>

                  {/* Account Insights */}
                  <div className="mb-6">
                    <div className="bg-primary text-primary-foreground p-2 mb-2">
                      <h4 className="font-bold text-sm">Account Insights</h4>
                    </div>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between py-1">
                        <span className="text-muted-foreground">Primary Account</span>
                        <span className="font-semibold">{result.insights.account.primaryAccount}</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span className="text-muted-foreground">ABB (6 Months)</span>
                        <span className="font-semibold text-primary">{result.insights.account.abb6Months}</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span className="text-muted-foreground">Average Monthly Credits (6 months)</span>
                        <span className="font-semibold">{result.insights.account.avgMonthlyCredits}</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span className="text-muted-foreground">FOIR</span>
                        <span className="font-semibold">{result.insights.account.foir}</span>
                      </div>
                    </div>
                  </div>

                  {/* Income Insights */}
                  <div className="mb-6">
                    <div className="bg-primary text-primary-foreground p-2 mb-2">
                      <h4 className="font-bold text-sm">Income Insights</h4>
                    </div>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between py-1">
                        <span className="text-muted-foreground">Salary Income Detected</span>
                        <span className="font-semibold">{result.insights.income.salaryDetected}</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span className="text-muted-foreground">Occupation Type</span>
                        <span className="font-semibold">{result.insights.income.occupationType}</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span className="text-muted-foreground">Primary Income Source</span>
                        <span className="font-semibold">{result.insights.income.primaryIncomeSource}</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span className="text-muted-foreground">Credit Mode</span>
                        <span className="font-semibold">{result.insights.income.creditMode}</span>
                      </div>
                    </div>
                  </div>

                  {/* Loan & EMI Insights */}
                  <div className="mb-6">
                    <div className="bg-primary text-primary-foreground p-2 mb-2">
                      <h4 className="font-bold text-sm">Loan & EMI Insights</h4>
                    </div>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between py-1">
                        <span className="text-muted-foreground">Loan Taken in last 60 Days</span>
                        <span className="font-semibold">{result.insights.loanEmi.loanLast60Days}</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span className="text-muted-foreground">Bouncing</span>
                        <span className="font-semibold">{result.insights.loanEmi.bouncing}</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span className="text-muted-foreground">EMI Best 2 Proposed Dates</span>
                        <span className="font-semibold">{result.insights.loanEmi.emiBestProposed}</span>
                      </div>
                    </div>
                  </div>

                  {/* Tampering Insights */}
                  <div>
                    <div className="bg-primary text-primary-foreground p-2 mb-2">
                      <h4 className="font-bold text-sm">Tampering Insights</h4>
                    </div>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between py-1">
                        <span className="text-muted-foreground">Statement Tampered</span>
                        <Badge variant="outline" className="bg-success/10 text-success border-success">{result.insights.tampering.statementTampered}</Badge>
                      </div>
                      <div className="flex justify-between py-1">
                        <span className="text-muted-foreground">Date Mismatch</span>
                        <Badge variant="outline" className="bg-success/10 text-success border-success">{result.insights.tampering.dateMismatch}</Badge>
                      </div>
                      <div className="flex justify-between py-1">
                        <span className="text-muted-foreground">Balance Mismatch</span>
                        <Badge variant="outline" className="bg-success/10 text-success border-success">{result.insights.tampering.balanceMismatch}</Badge>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Financial Summary */}
            <Card className="p-6">
              <div className="bg-primary/10 border-2 border-primary p-3 mb-6">
                <h3 className="font-bold text-lg text-center">FINANCIAL SUMMARY</h3>
              </div>

              {/* ABB Summary */}
              <div className="mb-6">
                <div className="bg-primary text-primary-foreground p-3 mb-2">
                  <h4 className="font-bold text-center">ABB Summary</h4>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-muted">
                      <tr>
                        <th className="text-left p-2 font-semibold">Particular</th>
                        <th className="text-right p-2 font-semibold">Amount</th>
                        <th className="text-right p-2 font-semibold">Count</th>
                      </tr>
                    </thead>
                    <tbody>
                      {result.abbSummary.map((item: any, index: number) => (
                        <tr key={index} className="border-b">
                          <td className="p-2">{item.particular}</td>
                          <td className="p-2 text-right font-semibold">{item.amount}</td>
                          <td className="p-2 text-right">{item.count}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </Card>

            {/* Caution & Positive Indicators */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Caution */}
              <Card className="p-6">
                <div className="bg-destructive text-destructive-foreground p-3 mb-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold">Caution</h3>
                    <span className="text-sm">(2/7)</span>
                  </div>
                </div>
                <div className="space-y-2">
                  {result.caution.map((item: any, index: number) => (
                    <div key={index} className="flex items-center justify-between py-2 border-b text-sm">
                      <span className="flex-1">{item.particular}</span>
                      <Badge variant={item.value === 'Yes' ? 'destructive' : 'outline'} className="ml-2">
                        {item.value}
                      </Badge>
                      <span className="ml-2 w-16 text-right font-semibold">{item.count}</span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Positive Indicators */}
              <Card className="p-6">
                <div className="bg-success text-white p-3 mb-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold">Positive Indicators</h3>
                    <span className="text-sm">(2/5)</span>
                  </div>
                </div>
                <div className="space-y-2">
                  {result.positiveIndicators.map((item: any, index: number) => (
                    <div key={index} className="flex items-center justify-between py-2 border-b text-sm">
                      <span className="flex-1">{item.particular}</span>
                      <Badge variant={item.value === 'Yes' ? 'default' : 'outline'} className={item.value === 'Yes' ? 'bg-success' : ''}>
                        {item.value}
                      </Badge>
                      <span className="ml-2 w-16 text-right font-semibold">{item.count}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BSA;
