
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Scans from "./pages/dashboard/Scans";
import Reports from "./pages/dashboard/Reports";
import Threats from "./pages/dashboard/Threats";
import AutomatedScan from "./pages/dashboard/AutomatedScan";
import ManualTesting from "./pages/dashboard/ManualTesting";
import SocialEngineering from "./pages/dashboard/SocialEngineering";
import Compliance from "./pages/dashboard/Compliance";
import Settings from "./pages/dashboard/Settings";
import Assistant from "./pages/dashboard/Assistant";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/scans" element={<Scans />} />
            <Route path="/dashboard/reports" element={<Reports />} />
            <Route path="/dashboard/threats" element={<Threats />} />
            <Route path="/dashboard/automated-scan" element={<AutomatedScan />} />
            <Route path="/dashboard/manual-testing" element={<ManualTesting />} />
            <Route path="/dashboard/social-engineering" element={<SocialEngineering />} />
            <Route path="/dashboard/compliance" element={<Compliance />} />
            <Route path="/dashboard/settings" element={<Settings />} />
            <Route path="/dashboard/assistant" element={<Assistant />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
