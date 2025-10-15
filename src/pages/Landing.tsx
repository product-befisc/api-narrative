import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, TrendingUp, Users, Award } from "lucide-react";
import { EmailVerificationModal } from "@/components/EmailVerificationModal";
import logo from '@/assets/BeFiSc_New_Logo.svg';
import saloraCapitalLogo from '@/assets/clients/salora-capital.png';
import founderPhoto from '@/assets/founder-photo.svg';
import emailBounceIcon from '@/assets/products/email-bounce.svg';
import idProofIcon from '@/assets/products/id-proof-2.svg';
import ocrProofIcon from '@/assets/products/ocr-proof.svg';
import tamperProofIcon from '@/assets/products/tamper-proof-2.svg';
import trustiifyIcon from '@/assets/products/trustiify.svg';
import affordplanLogo from '@/assets/clients/affordplan.svg';
import arthanFinanceLogo from '@/assets/clients/arthan-finance.svg';
import bajajLogo from '@/assets/clients/bajaj.svg';
import supermoneyLogo from '@/assets/clients/supermoney.png';
import cashrichLogo from '@/assets/clients/cashrich.svg';
import credflowLogo from '@/assets/clients/credflow.svg';
import epaylaterLogo from '@/assets/clients/epaylater.svg';
import eximpeLogo from '@/assets/clients/eximpe.svg';
import freoLogo from '@/assets/clients/freo.svg';
import godigitLogo from '@/assets/clients/godigit.svg';
import healthcredLogo from '@/assets/clients/healthcred.svg';
import indiamartLogo from '@/assets/clients/indiamart.svg';
import lendboxLogo from '@/assets/clients/lendbox.svg';
import muthootLogo from '@/assets/clients/muthoot.svg';
import naviLogo from '@/assets/clients/navi.svg';
import niroLogo from '@/assets/clients/niro.svg';
import quidLogo from '@/assets/clients/quid.svg';
import rupyaLogo from '@/assets/clients/rupya.svg';
import sabpaisaLogo from '@/assets/clients/sabpaisa.svg';
import snapmintLogo from '@/assets/clients/snapmint.svg';
import varthanaLogo from '@/assets/clients/varthana.svg';
import vibrantLogo from '@/assets/clients/vibrant.svg';
import yaperLogo from '@/assets/clients/yaper.svg';
import firstAdvisorsLogo from '@/assets/clients/first-advisors.svg';
import velocityLogo from '@/assets/clients/velocity.svg';
import amsInformLogo from '@/assets/clients/ams-inform.svg';
import gaadiBookingLogo from '@/assets/clients/gaadi-booking.svg';
import ongridLogo from '@/assets/clients/ongrid.svg';
import secureSearchLogo from '@/assets/clients/securesearch.svg';
import verificationStreetLogo from '@/assets/clients/verification-street.svg';
import veriprobusLogo from '@/assets/clients/veriprobus.svg';
import fourSlLogo from '@/assets/clients/4sl-background-check.svg';

const Landing = () => {
  const navigate = useNavigate();
  const [showVerification, setShowVerification] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    // Check if user has already verified
    const verified = localStorage.getItem("emailVerified");
    if (verified === "true") {
      setIsVerified(true);
    } else {
      // Show modal after a brief delay for better UX
      setTimeout(() => setShowVerification(true), 500);
    }
  }, []);

  const handleVerified = () => {
    localStorage.setItem("emailVerified", "true");
    setIsVerified(true);
    setShowVerification(false);
  };

  return (
    <div className="min-h-screen bg-background relative">
      {/* Email Verification Modal */}
      <EmailVerificationModal open={showVerification} onVerified={handleVerified} />

      {/* Blur overlay when modal is open */}
      {showVerification && (
        <div className="fixed inset-0 backdrop-blur-md bg-background/40 z-40" />
      )}
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

        {/* Floating Decorative Cards */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Top Left Card */}
          <div className="absolute top-1/4 left-[10%] hidden lg:block animate-float" style={{ animationDelay: '0s' }}>
            <div className="group relative bg-background/80 backdrop-blur-xl rounded-2xl p-4 border border-primary/20 shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:scale-110 hover:border-primary/40">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl opacity-50"></div>
              <img src={emailBounceIcon} alt="Email Bounce" className="w-16 h-16 relative z-10" />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary/20 rounded-full blur-xl"></div>
            </div>
          </div>

          {/* Top Right Card */}
          <div className="absolute top-1/4 right-[10%] hidden lg:block animate-float" style={{ animationDelay: '0.5s' }}>
            <div className="group relative bg-background/80 backdrop-blur-xl rounded-2xl p-4 border border-primary/20 shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:scale-110 hover:border-primary/40">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl opacity-50"></div>
              <img src={idProofIcon} alt="ID Proof" className="w-16 h-16 relative z-10" />
              <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-primary/20 rounded-full blur-xl"></div>
            </div>
          </div>

          {/* Middle Left Card */}
          <div className="absolute top-1/2 left-[5%] hidden lg:block animate-float" style={{ animationDelay: '1s' }}>
            <div className="group relative bg-background/80 backdrop-blur-xl rounded-2xl p-4 border border-primary/20 shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:scale-110 hover:border-primary/40">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl opacity-50"></div>
              <img src={ocrProofIcon} alt="OCR Proof" className="w-16 h-16 relative z-10" />
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary/20 rounded-full blur-xl"></div>
            </div>
          </div>

          {/* Middle Right Card */}
          <div className="absolute top-1/2 right-[5%] hidden lg:block animate-float" style={{ animationDelay: '1.5s' }}>
            <div className="group relative bg-background/80 backdrop-blur-xl rounded-2xl p-4 border border-primary/20 shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:scale-110 hover:border-primary/40">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl opacity-50"></div>
              <img src={tamperProofIcon} alt="Tamper Proof" className="w-16 h-16 relative z-10" />
              <div className="absolute -top-2 -left-2 w-8 h-8 bg-primary/20 rounded-full blur-xl"></div>
            </div>
          </div>

          {/* Bottom Center Card */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:block animate-float" style={{ animationDelay: '2s' }}>
            <div className="group relative bg-background/80 backdrop-blur-xl rounded-2xl p-4 border border-primary/20 shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:scale-110 hover:border-primary/40">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl opacity-50"></div>
              <img src={trustiifyIcon} alt="Trustiify" className="w-16 h-16 relative z-10" />
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-8 bg-primary/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>

        <div className="container relative mx-auto px-4 text-center">
          <h1 className="mb-6 text-6xl font-bold text-foreground">Beyond Financial Score</h1>
          <p className="mb-8 text-xl text-muted-foreground max-w-2xl mx-auto">
            Built to make fraud detection effortless.
          </p>
        </div>
      </section>

      {/* Stats Showcase Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
              {/* 3.5 Mn ARR */}
              <div className="group relative bg-background/60 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col items-center justify-center h-full min-h-[100px]">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">3.5M</div>
                  <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide text-center">ARR</div>
                </div>
              </div>

              {/* ISO Certified */}
              <div className="group relative bg-background/60 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col items-center justify-center h-full min-h-[100px] gap-1">
                  <div className="text-4xl md:text-5xl font-bold text-primary">ISO</div>
                  <div className="text-lg font-semibold text-primary/80">27001:2022</div>
                  <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide text-center mt-1">Certified</div>
                </div>
              </div>

              {/* 30M+ API Calls */}
              <div className="group relative bg-background/60 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col items-center justify-center h-full min-h-[100px]">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">30M+</div>
                  <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide text-center leading-tight">API Calls<br />/ Month</div>
                </div>
              </div>

              {/* 99.99% Uptime */}
              <div className="group relative bg-background/60 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col items-center justify-center h-full min-h-[100px]">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">99.99%</div>
                  <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide text-center">Uptime</div>
                </div>
              </div>

              {/* FinTech CX Awardee */}
              <div className="group relative bg-background/60 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col items-center justify-center h-full min-h-[100px]">
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-2">FinTech</div>
                  <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide text-center leading-tight">CX<br />Awardee</div>
                </div>
              </div>

              {/* 150+ Services */}
              <div className="group relative bg-background/60 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col items-center justify-center h-full min-h-[100px]">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">150+</div>
                  <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide text-center">Services</div>
                </div>
              </div>

              {/* 140+ Clients */}
              <div className="group relative bg-background/60 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col items-center justify-center h-full min-h-[100px]">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">140+</div>
                  <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide text-center">Clients</div>
                </div>
              </div>

              {/* 3s Avg Response */}
              <div className="group relative bg-background/60 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col items-center justify-center h-full min-h-[100px]">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">3s</div>
                  <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide text-center leading-tight">Avg<br />Response</div>
                </div>
              </div>

              {/* 98.2% OCR Accuracy */}
              <div className="group relative bg-background/60 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col items-center justify-center h-full min-h-[100px]">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">98.2%</div>
                  <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide text-center leading-tight">OCR<br />Accuracy</div>
                </div>
              </div>

              {/* Modular Product Suite */}
              <div className="group relative bg-background/60 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col items-center justify-center h-full min-h-[100px]">
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-2">Modular</div>
                  <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide text-center leading-tight">Product<br />Suite</div>
                </div>
              </div>
            </div>
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
                  { name: "Roopya", logo: rupyaLogo },
                  { name: "SuperMoney", logo: supermoneyLogo },
                  { name: "EPay Later", logo: epaylaterLogo },
                  { name: "Snapmint", logo: snapmintLogo },
                  { name: "Arthan Finance", logo: arthanFinanceLogo },
                  { name: "Lendbox", logo: lendboxLogo },
                  { name: "Varthana", logo: varthanaLogo },
                  { name: "Salora Capital", logo: saloraCapitalLogo },
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
                  { name: "Go Digit Life Insurance", logo: godigitLogo },
                  { name: "Go Digit General Insurance", logo: godigitLogo },
                  { name: "First Advisors Insurance", logo: firstAdvisorsLogo },
                  { name: "HealthCred", logo: healthcredLogo },
                  { name: "Velocity", logo: velocityLogo },
                  { name: "Freo", logo: freoLogo },
                  { name: "CashRich", logo: cashrichLogo },
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
                  { name: "Gaadi Booking", logo: gaadiBookingLogo },
                  { name: "Ongrid", logo: ongridLogo },
                  { name: "4SL Background Check", logo: fourSlLogo },
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
                {[
                  { name: "AMS Inform", logo: amsInformLogo },
                  { name: "Verification Street", logo: verificationStreetLogo },
                  { name: "SecureSearch", logo: secureSearchLogo },
                  { name: "VeriProbus", logo: veriprobusLogo },
                ].map((company, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-card rounded-xl px-6 py-4 border border-border hover:border-primary hover:scale-105 transition-all shadow-sm hover:shadow-md"
                    style={{ animationDelay: `${(i + 26) * 0.1}s` }}
                  >
                    {company.logo ? (
                      <img src={company.logo} alt={company.name} className="w-12 h-12 object-contain flex-shrink-0" />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                        <Award className="w-6 h-6 text-muted-foreground" />
                      </div>
                    )}
                    <span className="font-medium text-foreground whitespace-nowrap">{company.name}</span>
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
