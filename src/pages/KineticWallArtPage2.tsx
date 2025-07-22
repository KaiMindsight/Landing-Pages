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
  return (
    <div className="min-h-screen">
      <CountdownBar />
      <KineticWallArtHero2 />
      <KineticWallArtFeatures2 />
      <KineticWallArtBenefits2 />
      <KineticWallArtTestimonials2 />
      <ProductComparison />
      <KineticWallArtFAQ />
      <Footer />
      <StickyAddToCartWallArt />
    </div>
  );
};

export default KineticWallArtPage2;