import CountdownBar from "@/components/CountdownBar";
import SmokingHero from "@/components/smoking/SmokingHero";
import SmokingFeatures from "@/components/smoking/SmokingFeatures";
import SmokingBenefits from "@/components/smoking/SmokingBenefits";
import ProductComparison from "@/components/product/ProductComparison";
import ProductSpecs from "@/components/ProductSpecs";
import Testimonials from "@/components/Testimonials";
import DoomScrollSection from "@/components/DoomScrollSection";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import StickyAddToCart from "@/components/product/StickyAddToCart";

const SmokingPage = () => {
  return (
    <div className="min-h-screen">
      <CountdownBar />
      <SmokingHero />
      <SmokingFeatures />
      <SmokingBenefits />
      <Testimonials />
      <ProductSpecs />
      <ProductComparison />
      <DoomScrollSection />
      <Pricing />
      <FAQ />
      <Footer />
      <StickyAddToCart />
    </div>
  );
};

export default SmokingPage;
