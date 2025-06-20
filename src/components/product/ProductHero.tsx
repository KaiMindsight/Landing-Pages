import { Button } from "@/components/ui/button";
import { Star, Shield, Award, ChevronLeft, ChevronRight, Truck, RotateCcw, Phone } from "lucide-react";
import { useState } from "react";

const ProductHero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  const productImages = [
    "https://cdn.shopify.com/s/files/1/0562/5505/3986/files/Copy_of_1200_5_Star_Reviews_3.png?v=1749704376",
    "https://mindsightnow.com/cdn/shop/files/2_4ab61a8e-ab22-4092-afed-e9bd0f866e49_720x.jpg?v=1749270876",
    "https://mindsightnow.com/cdn/shop/files/3_89e33379-0867-4a00-9dd2-f91fd88fd457_720x.jpg?v=1749270876",
    "https://mindsightnow.com/cdn/shop/files/4_d1e12971-ee23-4d1b-b5c0-0c9e90fd5039_720x.jpg?v=1749270876",
    "https://mindsightnow.com/cdn/shop/files/5_09d9a3fc-117a-4b72-b666-0e91ccb194c1_720x.jpg?v=1749270876",
    "https://mindsightnow.com/cdn/shop/files/6_988a0177-e964-4b39-ae07-fcf9ce012882_720x.jpg?v=1749270876",
    "https://mindsightnow.com/cdn/shop/files/7_72007fef-35da-4845-ab7a-c74c18cebe0e_720x.jpg?v=1749270876",
    "https://mindsightnow.com/cdn/shop/files/8_b9b0a5e5-1a24-432e-9f21-313c946313dc_720x.jpg?v=1749270876"
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  return (
    <section className="py-16 px-4" style={{ backgroundColor: '#f8fafc' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative bg-gray-50 rounded-2xl overflow-hidden">
              <img 
                src={productImages[currentImage]}
                alt={`Mindsight Timed Lockbox - Image ${currentImage + 1}`}
                className="w-full h-[500px] object-cover"
              />
              
              {/* Navigation Arrows */}
              <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700" />
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all"
              >
                <ChevronRight className="w-6 h-6 text-gray-700" />
              </button>
              
              {/* Image Counter */}
              <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                {currentImage + 1} / {productImages.length}
              </div>
            </div>
            
            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-2">
              {productImages.slice(0, 4).map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`relative rounded-lg overflow-hidden border-2 transition-all ${
                    currentImage === index ? 'border-blue-500' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <img 
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-20 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">


            {/* Product Title */}
            <div>
              <h1 className="text-4xl font-bold mb-3" style={{ color: '#171717' }}>
                Mindsight Timed Lockbox
              </h1>
              <p className="text-xl mb-4" style={{ color: '#888888' }}>
                Break free from your phone and build healthier digital habits
              </p>
              <p className="text-lg mb-6" style={{ color: '#666666' }}>
                The Mindsight Timed Lockbox is a simple, science-backed tool that helps you reduce screen time, break bad habits, and stay focused—one locked moment at a time.
              </p>
            </div>

            {/* Price */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold" style={{ color: '#171717' }}>$30.00</span>
                <span className="text-xl text-gray-400 line-through">$60.00</span>
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">50% OFF</span>
              </div>
              <div className="text-sm font-medium" style={{ color: '#5684C4' }}>
                🔥 Limited time offer - Save $30.00!
              </div>
            </div>

            {/* Key Features */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#5684C4' }}></div>
                <span style={{ color: '#171717' }}>1 minute to 30 days timer settings</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#5684C4' }}></div>
                <span style={{ color: '#171717' }}>3 willpower modes for different needs</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#5684C4' }}></div>
                <span style={{ color: '#171717' }}>Fits 3-4 phones with charging slot</span>
              </div>
            </div>

            {/* Trust Signals */}
            <div className="flex items-center gap-6 py-4">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" style={{ color: '#5684C4' }} />
                <span className="text-sm" style={{ color: '#171717' }}>30-Day Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-5 h-5" style={{ color: '#5684C4' }} />
                <span className="text-sm" style={{ color: '#171717' }}>Free Shipping</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5" style={{ color: '#5684C4' }} />
                <span className="text-sm" style={{ color: '#171717' }}>Lifetime Warranty</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-4">
              <Button 
                className="w-full text-lg py-6 font-semibold"
                style={{ backgroundColor: '#1b2b4a', color: 'white' }}
                onClick={() => window.open('https://mindsightnow.com/cart/43571017711778:1?discount=LOCKIT25', '_blank')}
              >
                Buy Now - $30.00
              </Button>
              
              <div className="grid grid-cols-2 gap-3">
                <Button 
                  variant="outline" 
                  className="flex items-center gap-2"
                  style={{ borderColor: '#5684C4', color: '#5684C4' }}
                >
                  <Phone className="w-4 h-4" />
                  Ask a Question
                </Button>
                <Button 
                  variant="outline"
                  className="flex items-center gap-2"
                  style={{ borderColor: '#5684C4', color: '#5684C4' }}
                >
                  <RotateCcw className="w-4 h-4" />
                  Size Guide
                </Button>
              </div>
            </div>

            {/* Additional Info */}
            <div className="pt-4 border-t border-gray-200">
              <div className="text-sm space-y-2" style={{ color: '#888888' }}>
                <p>✓ Ships within 24 hours</p>
                <p>✓ Secure checkout with SSL encryption</p>
                <p>✓ Over 50,000 satisfied customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
