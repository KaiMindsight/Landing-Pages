
import CountdownBar from "@/components/CountdownBar";
import ProductHero from "@/components/product/ProductHero";
import ProductFeatures from "@/components/product/ProductFeatures";
import ProductShowcase from "@/components/product/ProductShowcase";
import ProductComparison from "@/components/product/ProductComparison";
import ProductTestimonials from "@/components/product/ProductTestimonials";
import ProductSpecs from "@/components/ProductSpecs";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import StickyAddToCart from "@/components/product/StickyAddToCart";

const ProductPage = () => {
  return (
    <div className="min-h-screen">
      <CountdownBar />
      <ProductHero />
      <ProductFeatures />
      <ProductShowcase />
      <ProductComparison />
      <ProductTestimonials />
      <ProductSpecs />
      <Pricing />
      <FAQ />
      <Footer />
      <StickyAddToCart />
    </div>
  );
};

export default ProductPage;
