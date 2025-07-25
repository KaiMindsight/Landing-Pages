import { useState } from "react";
import CountdownBar from "@/components/CountdownBar";
import KineticWallArtHero from "@/components/kineticwallart/KineticWallArtHero";
import KineticWallArtFeatures from "@/components/kineticwallart/KineticWallArtFeatures";
import KineticWallArtBenefits from "@/components/kineticwallart/KineticWallArtBenefits";
import KineticWallArtTestimonials from "@/components/kineticwallart/KineticWallArtTestimonials";
import ProductComparison from "@/components/kineticwallart/ProductComparison";
import KineticWallArtPricing from "@/components/kineticwallart/KineticWallArtPricing";
import KineticWallArtFAQ from "@/components/kineticwallart/KineticWallArtFAQ";
import Footer from "@/components/Footer";
import StickyAddToCartWallArt from "@/components/product/StickyAddToCartWallArt";
import ProductSpecs from "@/components/kineticwallart/ProductSpecs";

const KineticWallArtPage = () => {
  const [selectedVariant, setSelectedVariant] = useState('ripple');
  const [selectedColor, setSelectedColor] = useState('brown');

  return (
    <div className="min-h-screen">
      <CountdownBar showFreeShipping={true} />
      <KineticWallArtHero 
        selectedVariant={selectedVariant}
        setSelectedVariant={setSelectedVariant}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
      />
      <KineticWallArtFeatures selectedVariant={selectedVariant} selectedColor={selectedColor} />
      <KineticWallArtBenefits />
      <KineticWallArtTestimonials />
      <ProductComparison selectedVariant={selectedVariant} selectedColor={selectedColor} />
      <ProductSpecs />
      <KineticWallArtPricing selectedVariant={selectedVariant} selectedColor={selectedColor} />
      <KineticWallArtFAQ />
      <Footer />
      <StickyAddToCartWallArt selectedVariant={selectedVariant} selectedColor={selectedColor} />
    </div>
  );
};

export default KineticWallArtPage;