import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, TrendingUp, Users, Award } from "lucide-react";
import logo from '@/assets/BeFiSc_New_Logo.svg';
import founderPhoto from '@/assets/founder-photo.svg';
import affordplanLogo from '@/assets/clients/affordplan.svg';
import bajajLogo from '@/assets/clients/bajaj.svg';
import bharatxLogo from '@/assets/clients/bharatx.svg';
import cashrichLogo from '@/assets/clients/cashrich.svg';
import credflowLogo from '@/assets/clients/credflow.svg';
import epaylaterLogo from '@/assets/clients/epaylater.svg';
import eximpeLogo from '@/assets/clients/eximpe.svg';
import freoLogo from '@/assets/clients/freo.svg';
import indiamartLogo from '@/assets/clients/indiamart.svg';
import muthootLogo from '@/assets/clients/muthoot.svg';
import naviLogo from '@/assets/clients/navi.svg';
import niroLogo from '@/assets/clients/niro.svg';
import quidLogo from '@/assets/clients/quid.svg';
import rupyaLogo from '@/assets/clients/rupya.svg';
import sabpaisaLogo from '@/assets/clients/sabpaisa.svg';
import snapmintLogo from '@/assets/clients/snapmint.svg';
import vibrantLogo from '@/assets/clients/vibrant.svg';
import yaperLogo from '@/assets/clients/yaper.svg';

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
                  { name: "Muthoot Capital", logo: muthootLogo },
                  { name: "Navi", logo: naviLogo },
                  { name: "Affordplan", logo: affordplanLogo },
                  { name: "Rupya", logo: rupyaLogo },
                  { name: "BharatX", logo: bharatxLogo },
                  { name: "EPay Later", logo: epaylaterLogo },
                  { name: "Snapmint", logo: snapmintLogo },
                  { name: "CashRich", logo: cashrichLogo },
                ].map((company, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-card rounded-xl px-6 py-4 border border-border hover:border-primary hover:scale-105 transition-all shadow-sm hover:shadow-md"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    {company.logo ? (
                      <img src={company.logo} alt={company.name} className="w-12 h-12 object-contain flex-shrink-0" />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                        <Users className="w-6 h-6 text-muted-foreground" />
                      </div>
                    )}
                    <span className="font-medium text-foreground whitespace-nowrap">{company.name}</span>
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
                  { name: "Go Digit Life Insurance", logo: null },
                  { name: "Go Digit General Insurance", logo: null },
                  { name: "First Advisors Insurance", logo: null },
                  { name: "HealthCred", logo: null },
                  { name: "Velocity", logo: null },
                  { name: "Freo", logo: freoLogo },
                ].map((company, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-card rounded-xl px-6 py-4 border border-border hover:border-primary hover:scale-105 transition-all shadow-sm hover:shadow-md"
                    style={{ animationDelay: `${(i + 8) * 0.1}s` }}
                  >
                    {company.logo ? (
                      <img src={company.logo} alt={company.name} className="w-12 h-12 object-contain flex-shrink-0" />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                        <Shield className="w-6 h-6 text-muted-foreground" />
                      </div>
                    )}
                    <span className="font-medium text-foreground whitespace-nowrap">{company.name}</span>
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
                  { name: "CredFlow", logo: credflowLogo },
                  { name: "Quid", logo: quidLogo },
                  { name: "Sabpaisa", logo: sabpaisaLogo },
                  { name: "Vibrant", logo: vibrantLogo },
                  { name: "Yaper", logo: yaperLogo },
                  { name: "EximPe", logo: eximpeLogo },
                  { name: "Niro", logo: niroLogo },
                ].map((company, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-card rounded-xl px-6 py-4 border border-border hover:border-primary hover:scale-105 transition-all shadow-sm hover:shadow-md"
                    style={{ animationDelay: `${(i + 15) * 0.1}s` }}
                  >
                    {company.logo ? (
                      <img src={company.logo} alt={company.name} className="w-12 h-12 object-contain flex-shrink-0" />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="w-6 h-6 text-muted-foreground" />
                      </div>
                    )}
                    <span className="font-medium text-foreground whitespace-nowrap">{company.name}</span>
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
                  { name: "Indiamart", logo: indiamartLogo },
                  { name: "Ratify Global", logo: null },
                  { name: "Human Crayon", logo: null },
                  { name: "Gaadi Booking", logo: null },
                  { name: "Ongrid", logo: null },
                  { name: "4SL Background Check", logo: null },
                ].map((company, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 bg-card rounded-xl px-6 py-4 border border-border hover:border-primary hover:scale-105 transition-all shadow-sm hover:shadow-md"
                      style={{ animationDelay: `${(i + 21) * 0.1}s` }}
                    >
                      {company.logo ? (
                        <img src={company.logo} alt={company.name} className="w-12 h-12 object-contain flex-shrink-0" />
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                          <Users className="w-6 h-6 text-muted-foreground" />
                        </div>
                      )}
                      <span className="font-medium text-foreground whitespace-nowrap">{company.name}</span>
                    </div>
                  ),
                )}
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
                {["AMS Inform", "Verification Street", "SecureSearch", "VeriProbus"].map((company, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-card rounded-xl px-6 py-4 border border-border hover:border-primary hover:scale-105 transition-all shadow-sm hover:shadow-md"
                    style={{ animationDelay: `${(i + 26) * 0.1}s` }}
                  >
                    <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-muted-foreground" />
                    </div>
                    <span className="font-medium text-foreground whitespace-nowrap">{company}</span>
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
                  <img src={founderPhoto} alt="Shobhit Goyal" className="w-full h-full object-cover" />
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

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <Button size="lg" className="h-14 px-8 text-lg" onClick={() => navigate("/home")}>
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
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
