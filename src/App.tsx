
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import FloatingPetals from "./components/FloatingPetals";
import Home from "./pages/Home";
import Bouquets from "./pages/Bouquets";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-background">
          <Navigation />
          <FloatingPetals />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bouquets" element={<Bouquets />} />
            <Route path="/weddings" element={<div className="pt-16 min-h-screen flex items-center justify-center"><h1 className="font-playfair text-4xl">Weddings & Events - Coming Soon</h1></div>} />
            <Route path="/about" element={<div className="pt-16 min-h-screen flex items-center justify-center"><h1 className="font-playfair text-4xl">About Us - Coming Soon</h1></div>} />
            <Route path="/contact" element={<div className="pt-16 min-h-screen flex items-center justify-center"><h1 className="font-playfair text-4xl">Contact - Coming Soon</h1></div>} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
