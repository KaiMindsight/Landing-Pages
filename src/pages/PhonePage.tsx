import CountdownBar from "@/components/CountdownBar";
import PhoneHero from "@/components/phone/PhoneHero";
import PhoneFeatures from "@/components/phone/PhoneFeatures";
import PhoneBenefits from "@/components/phone/PhoneBenefits";
import Testimonials from "@/components/Testimonials";
import ProductComparison from "@/components/product/ProductComparison";
import ProductSpecs from "@/components/ProductSpecs";
import DoomScrollSection from "@/components/DoomScrollSection";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import StickyAddToCartLockbox from "@/components/product/StickyAddToCartLockbox";

const PhonePage = () => {
  return (
    <div className="min-h-screen">
      <CountdownBar />
      <PhoneHero />
      <PhoneFeatures />
      <PhoneBenefits />
      <Testimonials />
      <ProductSpecs />
      <ProductComparison />
      <DoomScrollSection />
      <Pricing />
      <FAQ />
      <Footer />
      <StickyAddToCartLockbox />
    </div>
  );
};

export default PhonePage;
