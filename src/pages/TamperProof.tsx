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
  const [result, setResult] = useState<any>(null);

  const handleScan = () => {
    setLoading(true);
    setTimeout(() => {
      setResult({
        signature: 'Valid',
        tampered: true,
        metadata: {
          creationDate: '2024-01-15',
          modificationDate: '2024-10-10',
          editor: 'Adobe Acrobat Pro',
          pages: 5,
          producer: 'Adobe PDF Library 15.0',
        },
        embeddedFiles: false,
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
          
          <div className="border-2 border-dashed border-border rounded-lg p-12 text-center mb-6 hover:border-primary transition-colors cursor-pointer">
            <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground mb-2">Click to upload or drag and drop</p>
            <p className="text-sm text-muted-foreground">PDF files only (max 10MB)</p>
          </div>
          
          <Button 
            onClick={handleScan}
            disabled={loading}
            className="w-full"
            size="lg"
          >
            {loading ? 'Scanning Document...' : 'Scan for Tampering'}
          </Button>
        </Card>

        {/* Result Card */}
        {result && (
          <Card className="max-w-2xl mx-auto p-8 animate-fade-in border-2 border-destructive">
            <div className="flex items-start justify-between mb-6">
              <h3 className="text-2xl font-bold text-foreground">Scan Report</h3>
              <Badge className="bg-destructive text-white">
                <AlertTriangle className="h-4 w-4 mr-1" />
                Tampered
              </Badge>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-between py-3 border-b">
                <span className="text-muted-foreground">Signature</span>
                <span className="font-semibold flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  {result.signature}
                </span>
              </div>
              
              <div className="flex items-center justify-between py-3 border-b">
                <span className="text-muted-foreground">Tampering Detected</span>
                <Badge className={result.tampered ? 'bg-destructive' : 'bg-success'}>
                  {result.tampered ? <XCircle className="h-4 w-4 mr-1" /> : <CheckCircle className="h-4 w-4 mr-1" />}
                  {result.tampered ? 'Yes' : 'No'}
                </Badge>
              </div>
              
              <div className="flex items-center justify-between py-3 border-b">
                <span className="text-muted-foreground">Embedded Files</span>
                <span className="font-semibold">{result.embeddedFiles ? 'Yes' : 'No'}</span>
              </div>
            </div>

            <div className="bg-muted p-6 rounded-lg">
              <h4 className="font-semibold text-foreground mb-4">Document Metadata</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Creation Date</p>
                  <p className="font-medium">{result.metadata.creationDate}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Modification Date</p>
                  <p className="font-medium text-destructive">{result.metadata.modificationDate}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Editor</p>
                  <p className="font-medium">{result.metadata.editor}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Pages</p>
                  <p className="font-medium">{result.metadata.pages}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-sm text-muted-foreground mb-1">Producer</p>
                  <p className="font-medium">{result.metadata.producer}</p>
                </div>
              </div>
            </div>

            <Button variant="outline" className="w-full mt-6">
              View Highlighted Edits
            </Button>
          </Card>
        )}
      </div>
    </div>
  );
};

export default TamperProof;
