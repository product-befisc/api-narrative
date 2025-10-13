import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, TrendingUp, Users, Award } from 'lucide-react';

const Landing = () => {
  const navigate = useNavigate();

  const stats = [
    { label: '3.5 Mn ARR', icon: TrendingUp },
    { label: 'ISO Certified', icon: Shield },
    { label: 'CISA Certified', icon: Shield },
    { label: 'Secure & Compliant', icon: Shield },
    { label: 'FinTech Customer Experience Awardee', icon: Award },
  ];

  const performanceStats = [
    { value: '20M+', label: 'API Calls / Month' },
    { value: '150+', label: 'Formats' },
    { value: '99.99%', label: 'Uptime' },
    { value: '3s', label: 'Avg Response' },
    { value: '98.2%', label: 'OCR Accuracy' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="border-b border-border bg-card/95 backdrop-blur">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary">
                <span className="text-lg font-bold text-white">B</span>
              </div>
              <h1 className="text-xl font-bold text-foreground">BeFiSc</h1>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-24">
        <div className="absolute inset-0 opacity-10">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="container relative mx-auto px-4 text-center">
          <h1 className="mb-6 text-6xl font-bold text-foreground">
            Beyond Financial Score
          </h1>
          <p className="mb-12 text-xl text-muted-foreground max-w-2xl mx-auto">
            Built to make fraud detection effortless.
          </p>
          <Button 
            size="lg" 
            className="h-14 px-8 text-lg"
            onClick={() => navigate('/home')}
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">About BeFiSc</h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Founded in 2022, BeFiSc builds technology that helps companies trust what they see. 
              We specialize in fraud detection, identity verification, and document intelligence — 
              empowering businesses to make confident decisions with AI-powered verification tools.
            </p>
            
            {/* Stats Bar */}
            <div className="flex flex-wrap justify-center gap-6 items-center">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="flex items-center gap-2">
                    <Icon className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium text-foreground">{stat.label}</span>
                    {index < stats.length - 1 && (
                      <div className="hidden sm:block w-px h-6 bg-border ml-6" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-foreground text-center mb-4">
            Trusted by the World's Most Dependable Businesses
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Leading companies across industries rely on BeFiSc for verification and fraud detection
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="flex items-center justify-center h-24 bg-muted rounded-lg border border-border hover:border-primary transition-colors">
                <Users className="h-12 w-12 text-muted-foreground" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl shadow-lg p-8 md:p-12 border border-border">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-48 h-48 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <span className="text-6xl font-bold text-white">SG</span>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-3xl font-bold text-foreground mb-2">Shobhit Goyal</h3>
                  <p className="text-primary font-semibold mb-4">Founder & CEO</p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    With a vision to revolutionize fraud detection and identity verification, 
                    Shobhit founded BeFiSc to empower businesses with cutting-edge AI-driven solutions. 
                    His commitment to innovation and security has positioned BeFiSc as a leader in the fintech space.
                  </p>
                  <blockquote className="border-l-4 border-primary pl-4 italic text-foreground">
                    "Fraud will evolve. So will we; faster."
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Performance isn't a promise. It's proof.
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto mb-8">
            {performanceStats.map((stat, index) => (
              <div key={index} className="bg-muted rounded-xl p-6 text-center border border-border hover:border-primary transition-colors">
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
          
          <p className="text-center text-muted-foreground text-lg">
            Accuracy, speed, and security; built in from day one.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2025 BeFiSc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
