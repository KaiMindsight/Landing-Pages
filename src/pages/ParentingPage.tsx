import CountdownBar from "@/components/CountdownBar";
import ParentingHero from "@/components/parenting/ParentingHero";
import ParentingFeatures from "@/components/parenting/ParentingFeatures";
import ParentingBenefits from "@/components/parenting/ParentingBenefits";
import ProductComparison from "@/components/product/ProductComparison";
import ProductSpecs from "@/components/ProductSpecs";
import Testimonials from "@/components/Testimonials";
import DoomScrollSection from "@/components/DoomScrollSection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import StickyAddToCart from "@/components/product/StickyAddToCart";

const ParentingPage = () => {
  return (
    <div className="min-h-screen">
      <CountdownBar />
      <ParentingHero />
      <ParentingFeatures />
      <ParentingBenefits />
      <Testimonials />
      <ProductSpecs />
      <ProductComparison />
      <DoomScrollSection />
      <FAQ />
      <Footer />
      <StickyAddToCart />
    </div>
  );
};

export default ParentingPage;
