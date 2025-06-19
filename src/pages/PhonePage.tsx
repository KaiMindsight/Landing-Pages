import CountdownBar from "@/components/CountdownBar";
import PhoneHero from "@/components/phone/PhoneHero";
import PhoneFeatures from "@/components/phone/PhoneFeatures";
import PhoneBenefits from "@/components/phone/PhoneBenefits";
import Testimonials from "@/components/Testimonials";
import ProductComparison from "@/components/product/ProductComparison";
import ProductSpecs from "@/components/ProductSpecs";
import DoomScrollSection from "@/components/DoomScrollSection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import StickyAddToCart from "@/components/product/StickyAddToCart";

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
      <FAQ />
      <Footer />
      <StickyAddToCart />
    </div>
  );
};

export default PhonePage;
