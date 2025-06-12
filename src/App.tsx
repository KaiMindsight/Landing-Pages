
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PhonePage from "./pages/PhonePage";
import SmokingPage from "./pages/SmokingPage";
import SleepPage from "./pages/SleepPage";
import ParentingPage from "./pages/ParentingPage";
import ProductPage from "./pages/ProductPage";
import NotFound from "./pages/NotFound";
import TermsConditions from "./components/TermsConditions";
import ReturnPolicy from "./components/ReturnPolicy";
import PrivacyPolicy from "./components/PrivacyPolicy";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/phone" element={<PhonePage />} />
          <Route path="/smoking" element={<SmokingPage />} />
          <Route path="/sleep" element={<SleepPage />} />
          <Route path="/parenting" element={<ParentingPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/refund-policy" element={<ReturnPolicy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
