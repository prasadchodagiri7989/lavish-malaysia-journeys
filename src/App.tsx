import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Packages from "./pages/Packages";
import AllPackages from "./pages/AllPackages";
import Destinations from "./pages/Destinations";
import TravelInfo from "./pages/TravelInfo";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import SEO from "./components/SEO"; // ✅ import SEO

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SEO /> {/* ✅ dynamic Helmet here */}
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/all-packages" element={<AllPackages />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/travel-info" element={<TravelInfo />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
