import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import SiteLayout from "@/components/site/SiteLayout";
import PageLoader from "@/components/site/PageLoader";

// Eagerly load the home page — it's the first thing users see
import Index from "./pages/Index.tsx";

// All other pages are code-split and loaded only when navigated to
const CollectionPage    = lazy(() => import("./pages/CollectionPage.tsx"));
const ProductDetailPage = lazy(() => import("./pages/ProductDetailPage.tsx"));
const RepairPage        = lazy(() => import("./pages/RepairPage.tsx"));
const AboutPage         = lazy(() => import("./pages/AboutPage.tsx"));
const ContactPage       = lazy(() => import("./pages/ContactPage.tsx"));
const NotFound          = lazy(() => import("./pages/NotFound.tsx"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // cache results 5 min — avoids redundant re-fetches
      retry: 1,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <PageLoader />
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SiteLayout>
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/collection" element={<CollectionPage />} />
              <Route path="/product/:id" element={<ProductDetailPage />} />
              <Route path="/repair" element={<RepairPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </SiteLayout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
