import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Image, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Navbar from '@/components/Navbar';

const CaptchaReader = () => {
  const navigate = useNavigate();
  const [captchaImage, setCaptchaImage] = useState('captcha_sample.png');
  const [response, setResponse] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleFetch = () => {
    setLoading(true);
    setTimeout(() => {
      setResponse({
        captcha_text: 'A7K9M2',
        confidence_score: 98.5,
        timestamp: new Date().toISOString(),
      });
      setLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Button variant="ghost" className="mb-6" onClick={() => navigate('/product/id-proof')}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to ID Proof
        </Button>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-3">Captcha Reader</h1>
            <p className="text-muted-foreground">Automated captcha recognition and extraction</p>
          </div>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Upload Captcha Image</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <Input
                  value={captchaImage}
                  onChange={(e) => setCaptchaImage(e.target.value)}
                  placeholder="captcha_sample.png"
                  className="flex-1"
                />
                <Button onClick={handleFetch} disabled={loading}>
                  {loading ? 'Reading...' : 'Read Captcha'}
                </Button>
              </div>
            </CardContent>
          </Card>

          {response && (
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  Captcha Recognition Result
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-center justify-center bg-muted rounded-lg p-8">
                    <Image className="h-24 w-24 text-muted-foreground" />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Extracted Text</p>
                      <p className="text-3xl font-bold text-foreground tracking-wider">{response.captcha_text}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Confidence Score</p>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-primary transition-all"
                            style={{ width: `${response.confidence_score}%` }}
                          />
                        </div>
                        <span className="text-sm font-semibold">{response.confidence_score}%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t text-xs text-muted-foreground text-right">
                  Response Time: {new Date(response.timestamp).toLocaleString()}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default CaptchaReader;
