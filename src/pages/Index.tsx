
import CountdownBar from "@/components/CountdownBar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Benefits from "@/components/Benefits";
import ProductSpecs from "@/components/ProductSpecs";
import Testimonials from "@/components/Testimonials";
import DoomScrollSection from "@/components/DoomScrollSection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <CountdownBar />
      <Hero />
      <Features />
      <Benefits />
      <ProductSpecs />
      <Testimonials />
      <DoomScrollSection />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
