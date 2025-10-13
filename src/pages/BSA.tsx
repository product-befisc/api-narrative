import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Upload, FileText, TrendingUp, TrendingDown, PieChart, BarChart3, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import Navbar from '@/components/Navbar';

const BSA = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleAnalyze = () => {
    setLoading(true);
    setTimeout(() => {
      setResult({
        incomeSummary: {
          totalInflow: '₹5,45,000',
          totalOutflow: '₹4,32,000',
          avgBalance: '₹1,13,000',
        },
        tampering: 'Not Detected',
        categories: [
          { name: 'Salary', amount: '₹3,50,000', percentage: 64 },
          { name: 'EMI', amount: '₹85,000', percentage: 20 },
          { name: 'Transfers', amount: '₹1,20,000', percentage: 28 },
          { name: 'Bills', amount: '₹45,000', percentage: 10 },
        ],
        behaviorScore: 82,
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
          
          <div className="border-2 border-dashed border-border rounded-lg p-12 text-center mb-6 hover:border-primary transition-colors cursor-pointer">
            <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground mb-2">Click to upload or drag and drop</p>
            <p className="text-sm text-muted-foreground">PDF or Excel files (max 20MB)</p>
          </div>
          
          <Button 
            onClick={handleAnalyze}
            disabled={loading}
            className="w-full"
            size="lg"
          >
            {loading ? 'Analyzing Statement...' : 'Analyze Statement'}
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
          <div className="animate-fade-in space-y-8">
            {/* Summary Cards */}
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="p-6 border-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-success" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Total Inflow</p>
                    <p className="text-2xl font-bold text-foreground">{result.incomeSummary.totalInflow}</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center">
                    <TrendingDown className="h-6 w-6 text-destructive" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Total Outflow</p>
                    <p className="text-2xl font-bold text-foreground">{result.incomeSummary.totalOutflow}</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <BarChart3 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Avg Balance</p>
                    <p className="text-2xl font-bold text-foreground">{result.incomeSummary.avgBalance}</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Category Breakdown */}
            <Card className="p-8 border-2">
              <div className="flex items-center gap-2 mb-6">
                <PieChart className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">Category Breakdown</h3>
              </div>
              <div className="space-y-4">
                {result.categories.map((cat: any, index: number) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">{cat.name}</span>
                      <span className="font-bold">{cat.amount}</span>
                    </div>
                    <Progress value={cat.percentage} />
                  </div>
                ))}
              </div>
            </Card>

            {/* Behavioral Score */}
            <Card className="p-8 border-2 border-primary">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Behavioral Insights</h3>
              <div className="flex flex-col items-center">
                <div className="relative w-40 h-40 mb-4">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="80"
                      cy="80"
                      r="70"
                      stroke="currentColor"
                      strokeWidth="12"
                      fill="none"
                      className="text-muted"
                    />
                    <circle
                      cx="80"
                      cy="80"
                      r="70"
                      stroke="currentColor"
                      strokeWidth="12"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 70}`}
                      strokeDashoffset={`${2 * Math.PI * 70 * (1 - result.behaviorScore / 100)}`}
                      className="text-primary"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl font-bold text-foreground">{result.behaviorScore}</span>
                  </div>
                </div>
                <p className="text-lg font-semibold text-muted-foreground">Financial Health Score</p>
              </div>
              
              <div className="mt-8 p-4 bg-success/10 rounded-lg">
                <p className="font-semibold text-foreground mb-1">Tampering Check</p>
                <p className="text-success font-bold">{result.tampering}</p>
              </div>
            </Card>

            {/* Download Button */}
            <div className="flex justify-center">
              <Button size="lg" className="px-8">
                <Download className="mr-2 h-5 w-5" />
                Download Complete Report
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BSA;
