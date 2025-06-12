
import CountdownBar from "@/components/CountdownBar";
import PhoneHero from "@/components/phone/PhoneHero";
import PhoneFeatures from "@/components/phone/PhoneFeatures";
import PhoneBenefits from "@/components/phone/PhoneBenefits";
import ProductComparison from "@/components/product/ProductComparison";
import ProductSpecs from "@/components/ProductSpecs";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
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

export default PhonePage;
