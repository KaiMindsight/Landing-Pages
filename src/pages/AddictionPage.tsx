import CountdownBar from "@/components/CountdownBar";
import AddictionHero from "@/components/addiction/AddictionHero";
import AddictionFeatures from "@/components/addiction/AddictionFeatures";
import AddictionBenefits from "@/components/addiction/AddictionBenefits";

import AddictionTestimonials from "@/components/addiction/AddictionTestimonials";
import AddictionComparison from "@/components/addiction/AddictionComparison";
import AddictionSpecs from "@/components/addiction/AddictionSpecs";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import StickyAddToCartLockbox from "@/components/product/StickyAddToCartLockbox";

const AddictionPage = () => {
  return (
    <div className="min-h-screen">
      <CountdownBar />
      <AddictionHero />
      <AddictionFeatures />
      <AddictionBenefits />

      <AddictionTestimonials />
      <AddictionSpecs />
      <AddictionComparison />
      <Pricing />
      <FAQ />
      <Footer />
      <StickyAddToCartLockbox />
    </div>
  );
};

export default AddictionPage;