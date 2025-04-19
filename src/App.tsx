import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Academic pages
import PreSchool from "./pages/academics/PreSchool";
import PrimarySchool from "./pages/academics/PrimarySchool";

// Import placeholder pages we'll create for now
import Academics from "./pages/academics/Academics";
import MiddleSchool from "./pages/academics/MiddleSchool";
import HighSchool from "./pages/academics/HighSchool";
import PlusTwo from "./pages/academics/PlusTwo";
import Library from "./pages/facilities/Library";
import Labs from "./pages/facilities/Labs";
import Sports from "./pages/facilities/Sports";
import Facilities from "./pages/facilities/Facilities";
import Admissions from "./pages/Admissions";
import Gallery from "./pages/Gallery";
import SchoolHistory from "./pages/about/History";
import Mission from "./pages/about/Mission";
import PrincipalMessage from "./pages/about/PrincipalMessage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* About Routes */}
          <Route path="/about" element={<About />} />
          <Route path="/about/history" element={<SchoolHistory />} />
          <Route path="/about/mission" element={<Mission />} />
          <Route path="/about/message" element={<PrincipalMessage />} />
          
          {/* Academic Routes */}
          <Route path="/academics" element={<Academics />} />
          <Route path="/academics/pre-school" element={<PreSchool />} />
          <Route path="/academics/primary" element={<PrimarySchool />} />
          <Route path="/academics/middle" element={<MiddleSchool />} />
          <Route path="/academics/high" element={<HighSchool />} />
          <Route path="/academics/plus-two" element={<PlusTwo />} />
          
          {/* Facilities Routes */}
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/facilities/library" element={<Library />} />
          <Route path="/facilities/labs" element={<Labs />} />
          <Route path="/facilities/sports" element={<Sports />} />
          
          {/* Other Routes */}
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
