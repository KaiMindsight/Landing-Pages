
import CountdownBar from "@/components/CountdownBar";
import SleepHero from "@/components/sleep/SleepHero";
import SleepFeatures from "@/components/sleep/SleepFeatures";
import SleepBenefits from "@/components/sleep/SleepBenefits";
import ProductComparison from "@/components/product/ProductComparison";
import ProductSpecs from "@/components/ProductSpecs";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import StickyAddToCart from "@/components/product/StickyAddToCart";

const SleepPage = () => {
  return (
    <div className="min-h-screen">
      <CountdownBar />
      <SleepHero />
      <SleepFeatures />
      <SleepBenefits />
      <ProductComparison />
      <ProductSpecs />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
      <StickyAddToCart />
    </div>
  );
};

export default SleepPage;
