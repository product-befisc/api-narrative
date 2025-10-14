import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Upload, FileCheck, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';

const TamperProof = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleScan = () => {
    setUploaded(true);
    setLoading(true);
    setTimeout(() => {
      setResult({
        fileName: 'Trips_Flight_Downloa...pdf',
        creditsUsed: 1,
        pages: 3,
        date: '06 Oct 2025',
        verdict: 'SAFE',
        metadataCheck: {
          status: 'issue',
          created: '01 Oct 2025 at 12:53',
          modified: '01 Oct 2025 at 12:53',
        },
        structureCheck: {
          status: 'ok',
          description: 'No Structural Change',
        },
        editorUsed: {
          status: 'ok',
          editors: 'NO Suspicious editor detected',
        },
        digitalSignature: {
          status: 'issue',
          presence: 'No',
          authentic: 'No',
        },
        embeddedFile: {
          status: 'ok',
          description: 'No embedded files are present',
        },
        suspectedText: '[NONE]',
      });
      setLoading(false);
    }, 2000);
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
            Document integrity, verified automatically.
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Detect forged or edited PDFs with precision. Uncover hidden changes, mismatched text, or altered metadata in a single scan.
          </p>
        </div>

        {/* Upload Section */}
        <Card className="max-w-2xl mx-auto p-8 mb-12">
          <div className="flex items-center gap-2 mb-6">
            <FileCheck className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">Upload Document</h2>
          </div>
          
          {!uploaded ? (
            <div className="border-2 border-dashed border-border rounded-lg p-12 text-center mb-6 hover:border-primary transition-colors">
              <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground mb-2">Upload documents for verification</p>
              <p className="text-sm text-muted-foreground">PDF files only (max 10MB)</p>
            </div>
          ) : (
            <div className="space-y-4 mb-6">
              <div className="border-2 border-success rounded-lg p-6 bg-success/5">
                <div className="flex items-center gap-3">
                  <FileCheck className="h-8 w-8 text-success" />
                  <div className="text-left">
                    <p className="font-semibold text-foreground">Bank_Statement_Sep_2024.pdf</p>
                    <p className="text-sm text-muted-foreground">Document uploaded successfully</p>
                  </div>
                </div>
              </div>
              <div className="border-2 border-success rounded-lg p-6 bg-success/5">
                <div className="flex items-center gap-3">
                  <FileCheck className="h-8 w-8 text-success" />
                  <div className="text-left">
                    <p className="font-semibold text-foreground">Salary_Slip_Oct_2024.pdf</p>
                    <p className="text-sm text-muted-foreground">Document uploaded successfully</p>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <Button 
            onClick={handleScan}
            disabled={loading || uploaded}
            className="w-full"
            size="lg"
          >
            {loading ? 'Scanning Document...' : uploaded ? 'Scanning...' : 'Upload & Scan'}
          </Button>
        </Card>

        {/* Result Card */}
        {result && (
          <Card className="max-w-5xl mx-auto animate-fade-in">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-background border-b p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FileCheck className="h-8 w-8 text-primary" />
                  <h2 className="text-3xl font-bold text-foreground">TamperProof Report</h2>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground mb-1">Your Plan</p>
                  <Badge className="bg-success text-white text-sm px-4 py-1">Supreme</Badge>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                {/* Document Details */}
                <Card className="lg:col-span-2 p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">Document Details</h3>
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm text-muted-foreground">File Name : </span>
                      <span className="font-medium text-foreground">{result.fileName}</span>
                    </div>
                    <div className="flex gap-8 items-center">
                      <div>
                        <div className="text-2xl font-bold text-foreground">{String(result.creditsUsed).padStart(2, '0')}</div>
                        <div className="text-sm text-muted-foreground">Credits used</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-foreground">{String(result.pages).padStart(2, '0')}</div>
                        <div className="text-sm text-muted-foreground">No. of pages</div>
                      </div>
                      <div className="ml-auto text-right">
                        <span className="text-sm text-muted-foreground">Date : </span>
                        <span className="font-medium text-foreground">{result.date}</span>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Verdict Card */}
                <Card className="p-6 border-2 border-primary/30 bg-primary/5">
                  <div className="text-center">
                    <p className="text-sm text-primary mb-2">Verdict</p>
                    <h3 className="text-4xl font-bold text-primary">{result.verdict}</h3>
                  </div>
                </Card>
              </div>

              {/* Checks Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {/* Metadata Check */}
                <Card className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-lg font-bold text-destructive">Metadata Check</h4>
                    <div className="w-3 h-3 rounded-full bg-destructive"></div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Document timestamps and creation metadata analyzed for authenticity
                  </p>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="text-muted-foreground">Created: </span>
                      <span className="text-foreground">{result.metadataCheck.created}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Modified: </span>
                      <span className="text-foreground">{result.metadataCheck.modified}</span>
                    </div>
                  </div>
                </Card>

                {/* Structure Change Check */}
                <Card className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-lg font-bold text-primary">Structure Change Check</h4>
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Checks for hidden object stream issues, font mismatches, and size variations in your PDFs to keep them authentic.
                  </p>
                  <p className="text-sm font-medium text-primary">Status: {result.structureCheck.description}</p>
                </Card>

                {/* Editor Used */}
                <Card className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-lg font-bold text-primary">Editor Used</h4>
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{result.editorUsed.editors}</p>
                  <p className="text-sm font-medium text-primary">Detected Editors:</p>
                </Card>

                {/* Digital Signature */}
                <Card className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-lg font-bold text-destructive">Digital Signature Validation</h4>
                    <div className="w-3 h-3 rounded-full bg-destructive"></div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Check digital signatures to ensure the document is trusted.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="text-muted-foreground">Presence: </span>
                      <span className="text-foreground">{result.digitalSignature.presence}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Authentic: </span>
                      <span className="text-foreground">{result.digitalSignature.authentic}</span>
                    </div>
                  </div>
                </Card>

                {/* Embedded File Check */}
                <Card className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-lg font-bold text-primary">Embedded File Check</h4>
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Detecting harmful file injections inside PDFs to protect from hidden threats.
                  </p>
                  <p className="text-sm font-medium text-primary">Status: {result.embeddedFile.description}</p>
                </Card>
              </div>

              {/* Suspected Text */}
              <Card className="p-6 bg-muted/50">
                <div className="flex items-start gap-2 mb-4">
                  <h4 className="text-lg font-bold text-foreground">Suspected Text (Edited)</h4>
                  <div className="w-3 h-3 rounded-full bg-primary mt-1"></div>
                </div>
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                  <p className="text-primary font-mono">{result.suspectedText}</p>
                </div>
              </Card>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default TamperProof;
