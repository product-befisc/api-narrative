import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, TrendingUp, Users, Award, Linkedin, Newspaper } from "lucide-react";
import { EmailVerificationModal } from "@/components/EmailVerificationModal";
import logo from "@/assets/BeFiSc_New_Logo.svg";
import saloraCapitalLogo from "@/assets/clients/salora-capital.png";
import founderPhoto from "@/assets/founder-photo.png";
import linkedinBanner from "@/assets/linkedin-banner.png";
import emailBounceIcon from "@/assets/products/email-bounce.svg";
import idProofIcon from "@/assets/products/id-proof-2.svg";
import ocrProofIcon from "@/assets/products/ocr-proof.svg";
import tamperProofIcon from "@/assets/products/tamper-proof-2.svg";
import trustiifyIcon from "@/assets/products/trustiify.svg";
import financialStatementIcon from "@/assets/products/financial-statement.svg";
import affordplanLogo from "@/assets/clients/affordplan.svg";
import arthanFinanceLogo from "@/assets/clients/arthan-finance.svg";
import bajajLogo from "@/assets/clients/bajaj.svg";
import supermoneyLogo from "@/assets/clients/supermoney.png";
import cashrichLogo from "@/assets/clients/cashrich.svg";
import credflowLogo from "@/assets/clients/credflow.svg";
import epaylaterLogo from "@/assets/clients/epaylater.svg";
import eximpeLogo from "@/assets/clients/eximpe.svg";
import freoLogo from "@/assets/clients/freo.svg";
import godigitLogo from "@/assets/clients/godigit.svg";
import healthcredLogo from "@/assets/clients/healthcred.svg";
import indiamartLogo from "@/assets/clients/indiamart.svg";
import lendboxLogo from "@/assets/clients/lendbox.svg";
import muthootLogo from "@/assets/clients/muthoot.svg";
import naviLogo from "@/assets/clients/navi.svg";
import niroLogo from "@/assets/clients/niro.svg";
import quidLogo from "@/assets/clients/quid.svg";
import rupyaLogo from "@/assets/clients/rupya.svg";
import sabpaisaLogo from "@/assets/clients/sabpaisa.svg";
import snapmintLogo from "@/assets/clients/snapmint.svg";
import varthanaLogo from "@/assets/clients/varthana.svg";
import vibrantLogo from "@/assets/clients/vibrant.svg";
import yaperLogo from "@/assets/clients/yaper.svg";
import firstAdvisorsLogo from "@/assets/clients/first-advisors.svg";
import velocityLogo from "@/assets/clients/velocity.svg";
import amsInformLogo from "@/assets/clients/ams-inform.svg";
import gaadiBookingLogo from "@/assets/clients/gaadi-booking.svg";
import ongridLogo from "@/assets/clients/ongrid.svg";
import secureSearchLogo from "@/assets/clients/securesearch.svg";
import verificationStreetLogo from "@/assets/clients/verification-street.svg";
import veriprobusLogo from "@/assets/clients/veriprobus.svg";
import fourSlLogo from "@/assets/clients/4sl-background-check.svg";
import swipeloanLogo from "@/assets/clients/swipeloan.png";
import pjCapitalLogo from "@/assets/clients/pj-capital.png";
import piceLogo from "@/assets/clients/pice.png";
import loksuvidhaLogo from "@/assets/clients/loksuvidha.png";
import vastuFinanceLogo from "@/assets/clients/vastu-finance.png";

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
      {showVerification && <div className="fixed inset-0 backdrop-blur-md bg-background/40 z-40" />}
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
        {/* Static Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Running Lights Through Grid */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Horizontal Lights */}
          <div
            className="absolute left-0 h-[2px] w-full animate-grid-light-h"
            style={{ top: "20%", animationDelay: "0s" }}
          >
            <div className="w-40 h-full bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_20px_rgba(var(--primary),0.8)]"></div>
          </div>
          <div
            className="absolute left-0 h-[2px] w-full animate-grid-light-h"
            style={{ top: "45%", animationDelay: "1.5s" }}
          >
            <div className="w-40 h-full bg-gradient-to-r from-transparent via-primary/70 to-transparent shadow-[0_0_20px_rgba(var(--primary),0.6)]"></div>
          </div>
          <div
            className="absolute left-0 h-[2px] w-full animate-grid-light-h"
            style={{ top: "70%", animationDelay: "3s" }}
          >
            <div className="w-40 h-full bg-gradient-to-r from-transparent via-primary/80 to-transparent shadow-[0_0_20px_rgba(var(--primary),0.7)]"></div>
          </div>

          {/* Vertical Lights */}
          <div
            className="absolute top-0 w-[2px] h-full animate-grid-light-v"
            style={{ left: "25%", animationDelay: "0.5s" }}
          >
            <div className="h-40 w-full bg-gradient-to-b from-transparent via-primary to-transparent shadow-[0_0_20px_rgba(var(--primary),0.8)]"></div>
          </div>
          <div
            className="absolute top-0 w-[2px] h-full animate-grid-light-v"
            style={{ left: "60%", animationDelay: "2s" }}
          >
            <div className="h-40 w-full bg-gradient-to-b from-transparent via-primary/70 to-transparent shadow-[0_0_20px_rgba(var(--primary),0.6)]"></div>
          </div>
          <div
            className="absolute top-0 w-[2px] h-full animate-grid-light-v"
            style={{ left: "80%", animationDelay: "3.5s" }}
          >
            <div className="h-40 w-full bg-gradient-to-b from-transparent via-primary/80 to-transparent shadow-[0_0_20px_rgba(var(--primary),0.7)]"></div>
          </div>
        </div>

        {/* Floating Decorative Cards */}
        <div className="absolute inset-0 pointer-events-none z-10">
          {/* Top Left Card - Email Bounce */}
          <div className="absolute top-[20%] left-[8%] hidden md:block animate-float" style={{ animationDelay: "0s" }}>
            <div className="group relative bg-background/80 backdrop-blur-xl rounded-2xl p-4 border border-primary/20 shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:scale-110 hover:border-primary/40">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl opacity-50"></div>
              <img src={emailBounceIcon} alt="Email Bounce" className="w-16 h-16 relative z-10" />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary/20 rounded-full blur-xl"></div>
            </div>
          </div>

          {/* Top Right Card - ID Proof */}
          <div
            className="absolute top-[20%] right-[8%] hidden md:block animate-float"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="group relative bg-background/80 backdrop-blur-xl rounded-2xl p-4 border border-primary/20 shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:scale-110 hover:border-primary/40">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl opacity-50"></div>
              <img src={idProofIcon} alt="ID Proof" className="w-16 h-16 relative z-10" />
              <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-primary/20 rounded-full blur-xl"></div>
            </div>
          </div>

          {/* Middle Left Card - OCR Proof */}
          <div className="absolute top-[45%] left-[3%] hidden md:block animate-float" style={{ animationDelay: "1s" }}>
            <div className="group relative bg-background/80 backdrop-blur-xl rounded-2xl p-4 border border-primary/20 shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:scale-110 hover:border-primary/40">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl opacity-50"></div>
              <img src={ocrProofIcon} alt="OCR Proof" className="w-16 h-16 relative z-10" />
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary/20 rounded-full blur-xl"></div>
            </div>
          </div>

          {/* Middle Right Card - Tamper Proof */}
          <div
            className="absolute top-[45%] right-[3%] hidden md:block animate-float"
            style={{ animationDelay: "1.5s" }}
          >
            <div className="group relative bg-background/80 backdrop-blur-xl rounded-2xl p-4 border border-primary/20 shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:scale-110 hover:border-primary/40">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl opacity-50"></div>
              <img src={tamperProofIcon} alt="Tamper Proof" className="w-16 h-16 relative z-10" />
              <div className="absolute -top-2 -left-2 w-8 h-8 bg-primary/20 rounded-full blur-xl"></div>
            </div>
          </div>

          {/* Bottom Right Card - Trustiify */}
          <div
            className="absolute bottom-[15%] right-[12%] hidden md:block animate-float"
            style={{ animationDelay: "2s" }}
          >
            <div className="group relative bg-background/80 backdrop-blur-xl rounded-2xl p-4 border border-primary/20 shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:scale-110 hover:border-primary/40">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl opacity-50"></div>
              <img src={trustiifyIcon} alt="Trustiify" className="w-16 h-16 relative z-10" />
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-8 bg-primary/20 rounded-full blur-xl"></div>
            </div>
          </div>

          {/* Bottom Left Card - Financial Statement */}
          <div
            className="absolute bottom-[15%] left-[12%] hidden md:block animate-float"
            style={{ animationDelay: "2.5s" }}
          >
            <div className="group relative bg-background/80 backdrop-blur-xl rounded-2xl p-4 border border-primary/20 shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:scale-110 hover:border-primary/40">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl opacity-50"></div>
              <img src={financialStatementIcon} alt="Financial Statement" className="w-16 h-16 relative z-10" />
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary/20 rounded-full blur-xl"></div>
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
          <div className="max-w-7xl mx-auto space-y-8">
            {/* First Row - Bigger boxes */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
              {/* 2023 Incorporated */}
              <div className="group relative bg-background/60 backdrop-blur-sm rounded-2xl p-8 border border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col items-center justify-center h-full min-h-[140px]">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">2023</div>
                  <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide text-center">
                    Launched
                  </div>
                </div>
              </div>

              {/* 145+ Clients */}
              <div className="group relative bg-background/60 backdrop-blur-sm rounded-2xl p-8 border border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col items-center justify-center h-full min-h-[140px]">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">145+</div>
                  <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide text-center">
                    Clients
                  </div>
                </div>
              </div>

              {/* 180+ Services */}
              <div className="group relative bg-background/60 backdrop-blur-sm rounded-2xl p-8 border border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col items-center justify-center h-full min-h-[140px]">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">180+</div>
                  <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide text-center">
                    Services
                  </div>
                </div>
              </div>

              {/* 50M+ API Calls Monthly */}
              <div className="group relative bg-background/60 backdrop-blur-sm rounded-2xl p-8 border border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col items-center justify-center h-full min-h-[140px]">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">50M+</div>
                  <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide text-center">
                    API Calls Monthly
                  </div>
                </div>
              </div>

              {/* 99.99% Uptime */}
              <div className="group relative bg-background/60 backdrop-blur-sm rounded-2xl p-8 border border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col items-center justify-center h-full min-h-[140px]">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">99.99%</div>
                  <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide text-center">
                    Uptime
                  </div>
                </div>
              </div>
            </div>

            {/* Second Row - Smaller boxes */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
              {/* ISO 27001:2022 Certified */}
              <div className="group relative bg-background/60 backdrop-blur-sm rounded-xl p-5 border border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col items-center justify-center h-full min-h-[100px] gap-1">
                  <div className="text-2xl md:text-3xl font-bold text-primary">ISO</div>
                  <div className="text-sm font-semibold text-primary/80">27001:2022</div>
                  <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide text-center mt-1">
                    Certified
                  </div>
                </div>
              </div>

              {/* CISA Certified 2022 */}
              <div className="group relative bg-background/60 backdrop-blur-sm rounded-xl p-5 border border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col items-center justify-center h-full min-h-[100px] gap-1">
                  <div className="text-2xl md:text-3xl font-bold text-primary">CISA</div>
                  <div className="text-sm font-semibold text-primary/80">2022</div>
                  <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide text-center mt-1">
                    Certified
                  </div>
                </div>
              </div>

              {/* 3s Avg Response Time */}
              <div className="group relative bg-background/60 backdrop-blur-sm rounded-xl p-5 border border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col items-center justify-center h-full min-h-[100px]">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-1">3s</div>
                  <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide text-center leading-tight">
                    Avg Response
                    <br />
                    Time
                  </div>
                </div>
              </div>

              {/* 98.2% Accuracy */}
              <div className="group relative bg-background/60 backdrop-blur-sm rounded-xl p-5 border border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col items-center justify-center h-full min-h-[100px]">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-1">98.2%</div>
                  <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide text-center">
                    Accuracy
                  </div>
                </div>
              </div>

              {/* Fintech CX Awardee */}
              <div className="group relative bg-background/60 backdrop-blur-sm rounded-xl p-5 border border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col items-center justify-center h-full min-h-[100px]">
                  <div className="text-xl md:text-2xl font-bold text-primary mb-1">Fintech CX</div>
                  <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide text-center">
                    Awardee
                  </div>
                </div>
              </div>

              {/* Modular Product Suite */}
              <div className="group relative bg-background/60 backdrop-blur-sm rounded-xl p-5 border border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col items-center justify-center h-full min-h-[100px]">
                  <div className="text-xl md:text-2xl font-bold text-primary mb-1">Modular</div>
                  <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide text-center leading-tight">
                    Product
                    <br />
                    Suite
                  </div>
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
              detection, identity verification, and document intelligence-empowering businesses to make confident
              decisions with AI-powered verification tools.
            </p>
          </div>
        </div>
      </section>

      {/* Trusted By Section - Pyramid Layout */}
      <section className="py-20 bg-gradient-to-b from-background via-muted/20 to-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-4">
            Trusted by the World's Most Dependable Businesses
          </h2>
          <p className="text-center text-muted-foreground mb-20 max-w-3xl mx-auto text-lg">
            BeFiSc partners with leading organizations across lending, fintech, and verification ecosystems to power
            real-time trust.
          </p>

          <div className="max-w-7xl mx-auto space-y-16">
            {/* Row 1 - NBFC & Lending (Top, Widest - 7 cards) */}
            <div className="animate-fade-in" style={{ animationDelay: "0s" }}>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-primary mb-2">NBFC & Lending</h3>
                <div className="h-1 w-32 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"></div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 max-w-7xl mx-auto">
                {[
                  { name: "Bajaj Finserv", logo: bajajLogo },
                  { name: "Muthoot Capital", logo: muthootLogo },
                  { name: "Navi", logo: naviLogo },
                  { name: "Lendbox", logo: lendboxLogo },
                  { name: "Vastu Finance", logo: vastuFinanceLogo },
                  { name: "Arthan Finance", logo: arthanFinanceLogo },
                  { name: "Affordplan", logo: affordplanLogo },
                  { name: "Freo", logo: freoLogo },
                  { name: "Varthana", logo: varthanaLogo },
                  { name: "Roopya", logo: rupyaLogo },
                  { name: "Cashrich", logo: cashrichLogo },
                  { name: "Epaylater", logo: epaylaterLogo },
                  { name: "Eximpe", logo: eximpeLogo },
                  { name: "Supermoney", logo: supermoneyLogo },
                  { name: "Swipeloan", logo: swipeloanLogo },
                  { name: "PJ Capital", logo: pjCapitalLogo },
                  { name: "Pice", logo: piceLogo },
                  { name: "Loksuvidha", logo: loksuvidhaLogo },
                  { name: "Salora Capital", logo: saloraCapitalLogo },
                ].map((company, i) => (
                  <div
                    key={i}
                    className="group bg-card rounded-xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10"
                    style={{ animationDelay: `${i * 0.05}s` }}
                  >
                    <div className="flex flex-col items-center justify-center gap-3 h-full">
                      <div className="w-16 h-16 flex items-center justify-center">
                        <img
                          src={company.logo}
                          alt={company.name}
                          className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <span className="font-semibold text-foreground text-center text-xs">{company.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Row 2 - Fintech (6 cards) */}
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-primary mb-2">Fintech</h3>
                <div className="h-1 w-32 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"></div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
                {[
                  { name: "CredFlow", logo: credflowLogo },
                  { name: "Quid", logo: quidLogo },
                  { name: "Sabpaisa", logo: sabpaisaLogo },
                  { name: "Vibrant", logo: vibrantLogo },
                  { name: "Yaper", logo: yaperLogo },
                  { name: "Snapmint", logo: snapmintLogo },
                ].map((company, i) => (
                  <div
                    key={i}
                    className="group bg-card rounded-xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10"
                    style={{ animationDelay: `${i * 0.05}s` }}
                  >
                    <div className="flex flex-col items-center justify-center gap-3 h-full">
                      <div className="w-16 h-16 flex items-center justify-center">
                        <img
                          src={company.logo}
                          alt={company.name}
                          className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <span className="font-semibold text-foreground text-center text-xs">{company.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Row 3 - Insurance & Wealth (4 cards) */}
            <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-primary mb-2">Insurance & Wealth</h3>
                <div className="h-1 w-32 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"></div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {[
                  { name: "Go Digit", logo: godigitLogo },
                  { name: "First Advisors", logo: firstAdvisorsLogo },
                  { name: "HealthCred", logo: healthcredLogo },
                  { name: "Velocity", logo: velocityLogo },
                ].map((company, i) => (
                  <div
                    key={i}
                    className="group bg-card rounded-xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10"
                    style={{ animationDelay: `${i * 0.05}s` }}
                  >
                    <div className="flex flex-col items-center justify-center gap-3 h-full">
                      <div className="w-16 h-16 flex items-center justify-center">
                        <img
                          src={company.logo}
                          alt={company.name}
                          className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <span className="font-semibold text-foreground text-center text-xs">{company.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Row 4 - Marketplaces (3 cards) */}
            <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-primary mb-2">Marketplaces</h3>
                <div className="h-1 w-32 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"></div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
                {[
                  { name: "Indiamart", logo: indiamartLogo },
                  { name: "Gaadi Booking", logo: gaadiBookingLogo },
                  { name: "4SL", logo: fourSlLogo },
                ].map((company, i) => (
                  <div
                    key={i}
                    className="group bg-card rounded-xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10"
                    style={{ animationDelay: `${i * 0.05}s` }}
                  >
                    <div className="flex flex-col items-center justify-center gap-3 h-full">
                      <div className="w-16 h-16 flex items-center justify-center">
                        <img
                          src={company.logo}
                          alt={company.name}
                          className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <span className="font-semibold text-foreground text-center text-xs">{company.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Row 5 - Verification & HR (Bottom - 5 cards) */}
            <div className="animate-fade-in" style={{ animationDelay: "0.8s" }}>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-primary mb-2">Verification & HR</h3>
                <div className="h-1 w-32 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"></div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-3xl mx-auto">
                {[
                  { name: "Ongrid", logo: ongridLogo },
                  { name: "AMS Inform", logo: amsInformLogo },
                  { name: "Secure Search", logo: secureSearchLogo },
                  { name: "Verification Street", logo: verificationStreetLogo },
                  { name: "Veriprobus", logo: veriprobusLogo },
                ].map((company, i) => (
                  <div
                    key={i}
                    className="group bg-card rounded-xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10"
                    style={{ animationDelay: `${i * 0.05}s` }}
                  >
                    <div className="flex flex-col items-center justify-center gap-3 h-full">
                      <div className="w-16 h-16 flex items-center justify-center">
                        <img
                          src={company.logo}
                          alt={company.name}
                          className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <span className="font-semibold text-foreground text-center text-xs">{company.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl shadow-lg overflow-hidden border border-border">
              {/* Banner */}
              <div className="h-48 md:h-64 w-full overflow-hidden bg-muted">
                <img src={linkedinBanner} alt="BeFiSc Banner" className="w-full h-full object-contain" />
              </div>
              
              {/* Profile Section */}
              <div className="px-8 pb-8">
                {/* Profile Image - Overlapping Banner */}
                <div className="relative -mt-16 md:-mt-20 mb-6">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-card bg-muted">
                    <img src={founderPhoto} alt="Shobhit Goyal" className="w-full h-full object-cover" />
                  </div>
                </div>
                
                {/* Name and Title */}
                <div className="mb-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-1">Shobhit Goyal</h3>
                  <p className="text-muted-foreground font-medium mb-2">Founder & CEO, BeFiSc (Beyond Financial Score)</p>
                </div>
                
                {/* Quote */}
                <blockquote className="text-lg md:text-xl text-foreground italic mb-6">
                  "Making digital trust effortless, one verification at a time."
                </blockquote>
                
                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  <Button 
                    variant="outline" 
                    className="gap-2"
                    asChild
                  >
                    <a href="https://www.linkedin.com/in/shobhitgoyal07/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-5 h-5" />
                      LinkedIn
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="gap-2"
                    asChild
                  >
                    <a href="https://takh7ucwgg0.typeform.com/to/kG2iZbDL?typeform-source=www.linkedin.com" target="_blank" rel="noopener noreferrer">
                      <Newspaper className="w-5 h-5" />
                      Newsletter
                    </a>
                  </Button>
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
