import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LeadPopup from "./components/LeadPopup";
import WhatsAppFloat from "./components/WhatsAppFloat";
import Index from "./pages/Index";
import ServicesPage from "./pages/ServicesPage";
import ProcessPage from "./pages/ProcessPage";
import ResultsPage from "./pages/ResultsPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import ContactPage from "./pages/ContactPage";
import DigitalEngineeringPage from "./pages/DigitalEngineeringPage";
import OttPlatformPage from "./pages/OttPlatformPage";
import IntellectualPropertyPage from "./pages/IntellectualPropertyPage";
import AiAutomationPage from "./pages/AiAutomationPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <LeadPopup />
        <WhatsAppFloat />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services/digital-engineering" element={<DigitalEngineeringPage />} />
          <Route path="/services/ott-platform" element={<OttPlatformPage />} />
          <Route path="/services/ai-automation" element={<AiAutomationPage />} />
          <Route path="/services/intellectual-property" element={<IntellectualPropertyPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
