import { useState } from "react";
import CountdownBar from "@/components/CountdownBar";
import KineticWallArtHero2 from "@/components/kineticwallart/KineticWallArtHero2";
import KineticWallArtFeatures2 from "@/components/kineticwallart/KineticWallArtFeatures2";
import KineticWallArtBenefits2 from "@/components/kineticwallart/KineticWallArtBenefits2";
import KineticWallArtTestimonials2 from "@/components/kineticwallart/KineticWallArtTestimonials2";
import ProductComparison from "@/components/kineticwallart/ProductComparison";
import KineticWallArtFAQ from "@/components/kineticwallart/KineticWallArtFAQ";
import Footer from "@/components/Footer";
import StickyAddToCartWallArt from "@/components/product/StickyAddToCartWallArt";

const KineticWallArtPage2 = () => {
  const [selectedVariant, setSelectedVariant] = useState('ripple');
  const [selectedColor, setSelectedColor] = useState('brown');

  return (
    <div className="min-h-screen">
      <CountdownBar showFreeShipping={true} />
      <KineticWallArtHero2 
        selectedVariant={selectedVariant}
        setSelectedVariant={setSelectedVariant}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
      />
      <KineticWallArtFeatures2 selectedVariant={selectedVariant} selectedColor={selectedColor} />
      <KineticWallArtBenefits2 />
      <KineticWallArtTestimonials2 />
      <ProductComparison selectedVariant={selectedVariant} selectedColor={selectedColor} />
      <KineticWallArtFAQ />
      <Footer />
      <StickyAddToCartWallArt selectedVariant={selectedVariant} selectedColor={selectedColor} />
    </div>
  );
};

export default KineticWallArtPage2;