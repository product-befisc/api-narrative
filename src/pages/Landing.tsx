import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, TrendingUp, Users, Award } from "lucide-react";
import logo from '@/assets/BeFiSc_New_Logo.svg';
import bajajLogo from '@/assets/logos/bajaj-finserv.png';
import naviLogo from '@/assets/logos/navi.png';
import indiamartLogo from '@/assets/logos/indiamart.png';
import finboxLogo from '@/assets/logos/finbox.png';
import goDigitLogo from '@/assets/logos/go-digit.png';

const Landing = () => {
  const navigate = useNavigate();

  const quickFacts = ["3.5 Mn ARR", "ISO Certified", "30M+ API Calls / Month", "99.99% Uptime", "FinTech CX Awardee"];

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="border-b border-border bg-card/95 backdrop-blur">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <img src={logo} alt="BeFiSc" className="h-10" />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-32">
        <div className="absolute inset-0 opacity-5">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="container relative mx-auto px-4 text-center">
          <h1 className="mb-6 text-6xl font-bold text-foreground">Beyond Financial Score</h1>
          <p className="mb-8 text-xl text-muted-foreground max-w-2xl mx-auto">
            Built to make fraud detection effortless.
          </p>
          <Button size="lg" className="h-14 px-8 text-lg mb-12" onClick={() => navigate("/home")}>
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          {/* Quick Facts Bar */}
          <div className="flex flex-wrap justify-center gap-4 items-center text-sm text-muted-foreground">
            {quickFacts.map((fact, index) => (
              <div key={index} className="flex items-center gap-4">
                <span className="font-medium">{fact}</span>
                {index < quickFacts.length - 1 && <div className="w-px h-4 bg-border" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">About BeFiSc</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded in 2023, BeFiSc builds technology that helps companies trust what they see. We specialize in fraud
              detection, identity verification, and document intelligence — empowering businesses to make confident
              decisions with AI-powered verification tools.
            </p>
          </div>
        </div>
      </section>

      {/* Trusted By Section - Inverted Pyramid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-foreground text-center mb-4">
            Trusted by the World's Most Dependable Businesses
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
            BeFiSc partners with leading organizations across lending, fintech, and verification ecosystems to power
            real-time trust.
          </p>

          {/* Row 1 - NBFC & Lending (Widest - 8 companies) */}
          <div className="mb-12 animate-fade-in">
            <div className="flex items-center justify-center gap-8 pb-6">
              <div className="text-left">
                <h3 className="text-sm font-semibold text-primary uppercase tracking-wide whitespace-nowrap mb-2">
                  NBFC & Lending
                </h3>
                <div className="h-0.5 w-24 bg-gradient-to-r from-primary to-transparent"></div>
              </div>
              <div className="flex flex-wrap justify-center gap-4 max-w-7xl">
                {[
                  { name: "Bajaj Finserv", logo: bajajLogo },
                  { name: "Muthoot Capital" },
                  { name: "Navi", logo: naviLogo },
                  { name: "Varthana" },
                  { name: "Lendbox" },
                  { name: "Arthan Finance" },
                  { name: "Cashflo" },
                  { name: "Snapmint" },
                ].map((company, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-center bg-card rounded-xl px-6 py-4 border border-border hover:border-primary hover:scale-105 transition-all shadow-sm hover:shadow-md min-w-[140px]"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    {company.logo ? (
                      <img src={company.logo} alt={company.name} className="h-8 w-auto object-contain" />
                    ) : (
                      <span className="font-semibold text-foreground whitespace-nowrap text-sm">{company.name}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="h-px bg-gradient-to-r from-border via-primary/30 to-border max-w-7xl mx-auto"></div>
          </div>

          {/* Row 2 - Insurance & Wealth (7 companies) */}
          <div className="mb-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center justify-center gap-8 pb-6">
              <div className="text-left">
                <h3 className="text-sm font-semibold text-primary uppercase tracking-wide whitespace-nowrap mb-2">
                  Insurance & Wealth
                </h3>
                <div className="h-0.5 w-24 bg-gradient-to-r from-primary to-transparent"></div>
              </div>
              <div className="flex flex-wrap justify-center gap-4 max-w-6xl">
                {[
                  { name: "Go Digit Life Insurance", logo: goDigitLogo },
                  { name: "Go Digit General Insurance", logo: goDigitLogo },
                  { name: "First Advisors Insurance" },
                  { name: "Mufkam Insurance Marketing" },
                  { name: "HealthCred" },
                  { name: "Velocity" },
                  { name: "Freo" },
                ].map((company, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-center bg-card rounded-xl px-6 py-4 border border-border hover:border-primary hover:scale-105 transition-all shadow-sm hover:shadow-md min-w-[140px]"
                    style={{ animationDelay: `${(i + 8) * 0.1}s` }}
                  >
                    {company.logo ? (
                      <img src={company.logo} alt={company.name} className="h-8 w-auto object-contain" />
                    ) : (
                      <span className="font-semibold text-foreground whitespace-nowrap text-sm">{company.name}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="h-px bg-gradient-to-r from-border via-primary/30 to-border max-w-6xl mx-auto"></div>
          </div>

          {/* Row 3 - Fintechs (6 companies) */}
          <div className="mb-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center justify-center gap-8 pb-6">
              <div className="text-left">
                <h3 className="text-sm font-semibold text-primary uppercase tracking-wide whitespace-nowrap mb-2">
                  Fintechs
                </h3>
                <div className="h-0.5 w-24 bg-gradient-to-r from-primary to-transparent"></div>
              </div>
              <div className="flex flex-wrap justify-center gap-4 max-w-5xl">
                {[
                  { name: "FinBox", logo: finboxLogo },
                  { name: "Paytail" },
                  { name: "MoneyWide" },
                  { name: "Indiamart", logo: indiamartLogo },
                  { name: "Proptension" },
                  { name: "Voorent" },
                ].map((company, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-center bg-card rounded-xl px-6 py-4 border border-border hover:border-primary hover:scale-105 transition-all shadow-sm hover:shadow-md min-w-[140px]"
                    style={{ animationDelay: `${(i + 15) * 0.1}s` }}
                  >
                    {company.logo ? (
                      <img src={company.logo} alt={company.name} className="h-8 w-auto object-contain" />
                    ) : (
                      <span className="font-semibold text-foreground whitespace-nowrap text-sm">{company.name}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="h-px bg-gradient-to-r from-border via-primary/30 to-border max-w-5xl mx-auto"></div>
          </div>

          {/* Row 4 - Marketplaces (5 companies) */}
          <div className="mb-12 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="flex items-center justify-center gap-8 pb-6">
              <div className="text-left">
                <h3 className="text-sm font-semibold text-primary uppercase tracking-wide whitespace-nowrap mb-2">
                  Marketplaces
                </h3>
                <div className="h-0.5 w-24 bg-gradient-to-r from-primary to-transparent"></div>
              </div>
              <div className="flex flex-wrap justify-center gap-4 max-w-4xl">
                {[
                  { name: "Ratify Global" },
                  { name: "Human Crayon" },
                  { name: "Gaadi Booking" },
                  { name: "Ongrid" },
                  { name: "4SL Background Check" },
                ].map((company, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-center bg-card rounded-xl px-6 py-4 border border-border hover:border-primary hover:scale-105 transition-all shadow-sm hover:shadow-md min-w-[140px]"
                    style={{ animationDelay: `${(i + 21) * 0.1}s` }}
                  >
                    <span className="font-semibold text-foreground whitespace-nowrap text-sm">{company.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="h-px bg-gradient-to-r from-border via-primary/30 to-border max-w-4xl mx-auto"></div>
          </div>

          {/* Row 5 - Verification & HR (Narrowest - 4 companies) */}
          <div className="animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <div className="flex items-center justify-center gap-8 pb-6">
              <div className="text-left">
                <h3 className="text-sm font-semibold text-primary uppercase tracking-wide whitespace-nowrap mb-2">
                  Verification & HR
                </h3>
                <div className="h-0.5 w-24 bg-gradient-to-r from-primary to-transparent"></div>
              </div>
              <div className="flex flex-wrap justify-center gap-4 max-w-3xl">
                {[
                  { name: "AMS Inform" },
                  { name: "Verification Street" },
                  { name: "SecureSearch" },
                  { name: "VeriProbus" },
                ].map((company, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-center bg-card rounded-xl px-6 py-4 border border-border hover:border-primary hover:scale-105 transition-all shadow-sm hover:shadow-md min-w-[140px]"
                    style={{ animationDelay: `${(i + 26) * 0.1}s` }}
                  >
                    <span className="font-semibold text-foreground whitespace-nowrap text-sm">{company.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="h-px bg-gradient-to-r from-border via-primary/30 to-border max-w-3xl mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl shadow-lg p-8 md:p-12 border border-border">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-48 h-48 rounded-full overflow-hidden flex-shrink-0 bg-muted">
                  <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop" alt="Shobhit Goyal" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-3xl font-bold text-foreground mb-2">Shobhit Goyal</h3>
                  <p className="text-primary font-semibold mb-4">Founder & CEO</p>
                  <blockquote className="text-2xl font-semibold text-foreground italic">
                    "Fraud will evolve. So will we; faster."
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Performance isn't a promise. It's proof.</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto mb-8">
            <div className="bg-muted rounded-xl p-6 text-center border border-border">
              <div className="text-4xl font-bold text-primary mb-2">30M+</div>
              <div className="text-sm text-muted-foreground">API Calls / Month</div>
            </div>
            <div className="bg-muted rounded-xl p-6 text-center border border-border">
              <div className="text-4xl font-bold text-primary mb-2">150+</div>
              <div className="text-sm text-muted-foreground">Formats</div>
            </div>
            <div className="bg-muted rounded-xl p-6 text-center border border-border">
              <div className="text-4xl font-bold text-primary mb-2">99.99%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
            <div className="bg-muted rounded-xl p-6 text-center border border-border">
              <div className="text-4xl font-bold text-primary mb-2">3s</div>
              <div className="text-sm text-muted-foreground">Avg Response</div>
            </div>
            <div className="bg-muted rounded-xl p-6 text-center border border-border">
              <div className="text-4xl font-bold text-primary mb-2">98.2%</div>
              <div className="text-sm text-muted-foreground">OCR Accuracy</div>
            </div>
          </div>

          <p className="text-center text-muted-foreground text-lg">
            Accuracy, speed, and security; built in from day one.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">© 2025 BeFiSc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
