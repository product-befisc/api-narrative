import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import IDProof from "./pages/IDProof";
import IDVerificationWorkflow from "./pages/IDVerificationWorkflow";
import BounceProof from "./pages/BounceProof";
import TamperProof from "./pages/TamperProof";
import BSA from "./pages/BSA";
import ProductPage from "./pages/ProductPage";
import CategoryPage from "./pages/CategoryPage";
import APIDetailPage from "./pages/APIDetailPage";
import NotFound from "./pages/NotFound";
import PANVerification from "./pages/PANVerification";
import CustomerProfiling from "./pages/CustomerProfiling";
import BusinessProfiling from "./pages/BusinessProfiling";
import DrivingLicense from "./pages/DrivingLicense";
import AddressTracing from "./pages/AddressTracing";
import CaptchaReader from "./pages/CaptchaReader";
import UANHistory from "./pages/UANHistory";
import BankVerificationPennyless from "./pages/BankVerificationPennyless";
import BankVerificationPennyDrop from "./pages/BankVerificationPennyDrop";
import ChassisToRC from "./pages/ChassisToRC";
import ChallanDetails from "./pages/ChallanDetails";
import RCAdvance from "./pages/RCAdvance";
import LPGVerification from "./pages/LPGVerification";
import PassportVerification from "./pages/PassportVerification";
import VoterIDVerification from "./pages/VoterIDVerification";
import DigiLockerAadhaar from "./pages/DigiLockerAadhaar";
import VehicleVerification from "./pages/VehicleVerification";
import EmploymentVerification from "./pages/EmploymentVerification";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/product/id-proof" element={<IDProof />} />
          <Route path="/product/id-proof/vehicle-verification" element={<VehicleVerification />} />
          <Route path="/product/id-proof/digilocker-aadhaar" element={<DigiLockerAadhaar />} />
          <Route path="/id-verification-workflow" element={<IDVerificationWorkflow />} />
          <Route path="/product/bounce-proof" element={<BounceProof />} />
          <Route path="/product/tamper-proof" element={<TamperProof />} />
          <Route path="/product/bsa" element={<BSA />} />
          <Route path="/product/id-proof/pan-verification" element={<PANVerification />} />
          <Route path="/product/id-proof/customer-profiling" element={<CustomerProfiling />} />
          <Route path="/product/id-proof/business-profiling" element={<BusinessProfiling />} />
          <Route path="/product/id-proof/driving-license" element={<DrivingLicense />} />
          <Route path="/product/id-proof/address-tracing" element={<AddressTracing />} />
          <Route path="/product/id-proof/captcha-reader" element={<CaptchaReader />} />
          <Route path="/product/id-proof/uan-history" element={<UANHistory />} />
          <Route path="/product/id-proof/bank-verification-pennyless" element={<BankVerificationPennyless />} />
          <Route path="/product/id-proof/bank-verification-pennydrop" element={<BankVerificationPennyDrop />} />
          <Route path="/product/id-proof/chassis-to-rc" element={<ChassisToRC />} />
          <Route path="/product/id-proof/challan-details" element={<ChallanDetails />} />
          <Route path="/product/id-proof/rc-advance" element={<RCAdvance />} />
          <Route path="/product/id-proof/lpg-verification" element={<LPGVerification />} />
          <Route path="/product/id-proof/passport-verification" element={<PassportVerification />} />
          <Route path="/product/id-proof/voter-id-verification" element={<VoterIDVerification />} />
          <Route path="/product/id-proof/employment-verification" element={<EmploymentVerification />} />
          <Route path="/product/:productId" element={<ProductPage />} />
          <Route path="/category/:categoryId" element={<CategoryPage />} />
          <Route path="/api/:apiId" element={<APIDetailPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
