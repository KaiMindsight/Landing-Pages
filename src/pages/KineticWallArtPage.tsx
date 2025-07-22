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
  return (
    <div className="min-h-screen">
      <CountdownBar />
      <KineticWallArtHero />
      <KineticWallArtFeatures />
      <KineticWallArtBenefits />
      <KineticWallArtTestimonials />
      <ProductComparison />
      <ProductSpecs />
      <KineticWallArtPricing />
      <KineticWallArtFAQ />
      <Footer />
      <StickyAddToCartWallArt />
    </div>
  );
};

export default KineticWallArtPage;