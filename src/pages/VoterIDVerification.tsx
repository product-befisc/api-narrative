import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Vote, User, MapPin, Building2, Calendar, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';

const VoterIDVerification = () => {
  const navigate = useNavigate();
  const [voterId, setVoterId] = useState('ABC1234567');
  const [response, setResponse] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleFetch = () => {
    setLoading(true);
    setTimeout(() => {
      setResponse({
        voter: {
          name_english: 'RAJESH KUMAR SHARMA',
          name_vernacular: 'राजेश कुमार शर्मा',
          age: '34',
          gender: 'Male',
          relative_name: 'RAMESH KUMAR SHARMA',
          relation: 'FATHER',
          epic_number: 'ABC1234567',
          last_updated: '08/02/2023'
        },
        address: {
          district_name_english: 'RANGAREDDY',
          district_name_vernacular: 'रंगा रेड्डी',
          state: 'TELANGANA',
          district_code: 'D21',
          state_code: 'S29',
          assembly_constituency_english: 'LAL BAHADUR NAGAR',
          assembly_constituency_vernacular: 'लाल बहादुर नगर',
          part_name: 'PART 45',
          part_number: '45',
          section_number: '3',
          parliamentary_constituency_name: 'CHEVELLA',
          parliamentary_constituency_number: '15'
        },
        polling_booth: {
          booth_name_english: 'GOVERNMENT PRIMARY SCHOOL, LAL BAHADUR NAGAR',
          booth_name_vernacular: 'सरकारी प्राथमिक विद्यालय, लाल बहादुर नगर',
          booth_number: 'PB145',
          latitude: '17.3850',
          longitude: '78.4867'
        },
        highlights: {
          verified: true,
          district: 'RANGAREDDY',
          state: 'TELANGANA',
          constituency: 'LAL BAHADUR NAGAR',
          updated_on: '08/02/2023'
        },
        timestamp: new Date().toISOString()
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
            <h1 className="text-4xl font-bold text-foreground mb-3">Voter ID Verification</h1>
            <p className="text-muted-foreground">Verify voter registration and electoral details</p>
          </div>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Enter Voter ID</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <Input
                  value={voterId}
                  onChange={(e) => setVoterId(e.target.value)}
                  placeholder="Voter ID / EPIC Number"
                  className="flex-1"
                />
                <Button onClick={handleFetch} disabled={loading}>
                  {loading ? 'Verifying...' : 'Fetch'}
                </Button>
              </div>
            </CardContent>
          </Card>

          {response && (
            <div className="space-y-6 animate-fade-in">
              {/* Highlights Section */}
              <Card className="border-2 border-primary">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 rounded-full bg-gradient-primary flex items-center justify-center">
                      <CheckCircle2 className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Verification Status</p>
                      <Badge className="bg-gradient-primary text-white text-base">
                        {response.highlights.verified ? 'VERIFIED VOTER ID' : 'NOT VERIFIED'}
                      </Badge>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">District</p>
                        <p className="font-semibold text-sm">{response.highlights.district}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Building2 className="h-4 w-4 text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">State</p>
                        <p className="font-semibold text-sm">{response.highlights.state}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Vote className="h-4 w-4 text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">Constituency</p>
                        <p className="font-semibold text-sm">{response.highlights.constituency}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">Updated On</p>
                        <p className="font-semibold text-sm">{response.highlights.updated_on}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Voter Details */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5 text-primary" />
                    Voter Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Name (English)</p>
                      <p className="font-semibold text-lg text-foreground">{response.voter.name_english}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Name (Vernacular)</p>
                      <p className="font-semibold text-lg text-foreground">{response.voter.name_vernacular}</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Age</p>
                      <p className="font-semibold text-foreground">{response.voter.age} years</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Gender</p>
                      <Badge variant="outline">{response.voter.gender}</Badge>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">EPIC Number</p>
                      <p className="font-semibold text-foreground">{response.voter.epic_number}</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Relative Name</p>
                      <p className="font-medium text-foreground">{response.voter.relative_name}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Relation</p>
                      <Badge variant="outline">{response.voter.relation}</Badge>
                    </div>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground">Last Updated</p>
                    <p className="font-semibold text-foreground">{response.voter.last_updated}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Address Details */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    Address Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">District (English)</p>
                      <p className="font-semibold text-foreground">{response.address.district_name_english}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">District (Vernacular)</p>
                      <p className="font-semibold text-foreground">{response.address.district_name_vernacular}</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">State</p>
                      <p className="font-semibold text-foreground">{response.address.state}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">District Code</p>
                      <p className="font-medium text-foreground">{response.address.district_code}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">State Code</p>
                      <p className="font-medium text-foreground">{response.address.state_code}</p>
                    </div>
                  </div>
                  <div className="border-t pt-4">
                    <p className="text-sm font-semibold text-foreground mb-3">Constituency Details</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Assembly Constituency (English)</p>
                        <p className="font-semibold text-foreground">{response.address.assembly_constituency_english}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Assembly Constituency (Vernacular)</p>
                        <p className="font-semibold text-foreground">{response.address.assembly_constituency_vernacular}</p>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Parliamentary Constituency</p>
                        <p className="font-semibold text-foreground">{response.address.parliamentary_constituency_name}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Constituency Number</p>
                        <p className="font-medium text-foreground">{response.address.parliamentary_constituency_number}</p>
                      </div>
                    </div>
                  </div>
                  <div className="border-t pt-4">
                    <p className="text-sm font-semibold text-foreground mb-3">Part & Section Details</p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-muted p-3 rounded-lg">
                        <p className="text-xs text-muted-foreground">Part Name</p>
                        <p className="font-semibold">{response.address.part_name}</p>
                      </div>
                      <div className="bg-muted p-3 rounded-lg">
                        <p className="text-xs text-muted-foreground">Part Number</p>
                        <p className="font-semibold">{response.address.part_number}</p>
                      </div>
                      <div className="bg-muted p-3 rounded-lg">
                        <p className="text-xs text-muted-foreground">Section Number</p>
                        <p className="font-semibold">{response.address.section_number}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Polling Booth Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Vote className="h-5 w-5 text-primary" />
                    Polling Booth Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Booth Name (English)</p>
                      <p className="font-semibold text-foreground">{response.polling_booth.booth_name_english}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Booth Name (Vernacular)</p>
                      <p className="font-semibold text-foreground">{response.polling_booth.booth_name_vernacular}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Booth Number</p>
                    <Badge variant="outline" className="text-base">{response.polling_booth.booth_number}</Badge>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <p className="text-sm font-semibold text-foreground">GPS Coordinates</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs text-muted-foreground">Latitude</p>
                        <p className="font-mono font-semibold text-foreground">{response.polling_booth.latitude}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Longitude</p>
                        <p className="font-mono font-semibold text-foreground">{response.polling_booth.longitude}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="text-xs text-muted-foreground text-right">
                Response Time: {new Date(response.timestamp).toLocaleString()}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VoterIDVerification;
