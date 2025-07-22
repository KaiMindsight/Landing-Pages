import { Button } from "@/components/ui/button";
import { Star, Shield, Award, ChevronLeft, ChevronRight, Truck, RotateCcw, Check } from "lucide-react";
import { useState, useEffect } from "react";
import AmbassadorVideos from "@/components/AmbassadorVideos";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const KineticWallArtHero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('ripple');
  
  const productImages = {
    ripple: {
      brown: [
        'https://mindsightnow.com/cdn/shop/files/Kinetic_Wall_Art_Front_720x.jpg?v=1749004376'
      ],
      gray: [
        'https://mindsightnow.com/cdn/shop/files/Kinetic_Wall_Art_Variant_Gray_720x.jpg?v=1749004376'
      ]
    },
    bloom: {
      brown: [
        'https://mindsightnow.com/cdn/shop/files/WB_-_bloom_brown_720x.jpg?v=1748883454'
      ],
      gray: [
        'https://mindsightnow.com/cdn/shop/files/Kinetic_Wall_Art_Variant_Bloom_Gray_720x.jpg?v=1749004376'
      ],
      custom: [
        'https://mindsightnow.com/cdn/shop/files/Collage_720x.png?v=1751640287'
      ]
    },
    wander: {
      brown: [
        'https://mindsightnow.com/cdn/shop/files/Wander_Brown_e9e9a763-c38b-4c1b-a66a-75de6f2d83fd_720x.png?v=1752591704'
      ],
      gray: [
        'https://mindsightnow.com/cdn/shop/files/Wander_Gray_385baf0a-9613-4b72-9051-161f1c1d2767_720x.png?v=1752591690'
      ]
    },
    glide: {
      brown: [
        'https://mindsightnow.com/cdn/shop/files/Glide_Brown_685724c5-9fc4-411b-953d-aa0f866e8901_720x.png?v=1752591674'
      ],
      gray: [
        'https://mindsightnow.com/cdn/shop/files/Glide_Gray_a5694e52-87d5-4e5c-8991-83156eb6d7a7_720x.png?v=1752591654'
      ]
    },
    info: {
      howItWorks: 'https://mindsightnow.com/cdn/shop/files/KWA_master_720x.jpg?v=1749004376',
      assembly: 'https://mindsightnow.com/cdn/shop/files/Kinetic_Wall_Art_Assembly_Information_720x.jpg?v=1749004376',
      handcrafted: 'https://mindsightnow.com/cdn/shop/files/81MuJHuTpWL._AC_SL1500_720x.jpg?v=1749004376',
      testimonials: 'https://mindsightnow.com/cdn/shop/files/Kinetic_Wall_Art_Testimonials_720x.png?v=1749004376'
    }
  };

  const getCurrentImages = () => {
    const variantImages = [];
    if (productImages[selectedVariant]) {
      Object.values(productImages[selectedVariant]).forEach(colorImages => {
        if (Array.isArray(colorImages)) {
          variantImages.push(...colorImages);
        } else {
          variantImages.push(colorImages);
        }
      });
    }
    
    // Add informational images
    variantImages.push(
      productImages.info.howItWorks,
      productImages.info.assembly,
      productImages.info.handcrafted,
      productImages.info.testimonials
    );
    
    return variantImages;
  };

  const currentImages = getCurrentImages();

  useEffect(() => {
    setCurrentImage(0);
  }, [selectedVariant]);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % currentImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + currentImages.length) % currentImages.length);
  };

  // Custom Ambassador Videos for Kinetic Wall Art
  const kineticWallArtVideos = [
    {
      id: "video1",
      url: "https://cdn.shopify.com/videos/c/o/v/bc19467c99d142a297c83d4ce18dc2b5.mp4"
    },
    {
      id: "video2", 
      url: "https://cdn.shopify.com/videos/c/o/v/4a6b0b2f909d4da7b9434c6ed468fdb5.mp4"
    },
    {
      id: "video3",
      url: "https://cdn.shopify.com/videos/c/o/v/96593219a4924869b713c518f886c7ff.mp4"
    },
    {
      id: "video4",
      url: "https://cdn.shopify.com/videos/c/o/v/2b60bf952fbd4a9193839877e9fcd9da.mp4"
    }
  ];

  return (
    <section className="py-16 px-4" style={{ backgroundColor: '#f8fafc' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Image Gallery */}
          <div className="space-y-4 lg:sticky lg:top-8">
            {/* Main Image */}
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              <img 
                src={currentImages[currentImage]}
                alt={`Mindsight Kinetic Wall Art - Image ${currentImage + 1}`}
                className="w-full h-[400px] md:h-[600px] object-contain md:object-cover"
              />
              
              {/* Navigation Arrows */}
              <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all border border-gray-200"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700" />
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all border border-gray-200"
              >
                <ChevronRight className="w-6 h-6 text-gray-700" />
              </button>
              
              {/* Image Counter */}
              <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                {currentImage + 1} / {currentImages.length}
              </div>
            </div>
            
            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-2">
              {currentImages.slice(0, 4).map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`relative rounded-lg overflow-hidden border-2 transition-all bg-white shadow-sm ${
                    currentImage === index ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <img 
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-24 object-cover"
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
                Mindsight Kinetic Wall Art
              </h1>
              <p className="text-xl mb-4" style={{ color: '#888888' }}>
                Handcrafted kinetic art that transforms your space and calms your mind
              </p>
              
              {/* Star Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-lg font-semibold" style={{ color: '#171717' }}>
                  4.8 out of 5
                </span>
                <span className="text-base" style={{ color: '#888888' }}>
                  (800+ reviews)
                </span>
              </div>
            </div>

            {/* Price - Moved above description */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold" style={{ color: '#171717' }}>$370.00</span>
                <span className="text-xl text-gray-400 line-through">$450.00</span>
              </div>
            </div>
            
            {/* Product Description */}
            <p className="text-lg mb-6" style={{ color: '#666666' }}>
              The Mindsight Kinetic Wall Art is a living, wind-up sculpture that turns motion into daily mindfulness. Hand-crafted from sustainable wood, it creates mesmerizing patterns that calm your mind and transform any space.
            </p>

            {/* Motion Pattern Selection */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold" style={{ color: '#171717' }}>Select Motion Pattern</h3>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setSelectedVariant('ripple')}
                  className={`p-4 rounded-lg border-2 transition-all text-left ${selectedVariant === 'ripple' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg">🌊</span>
                    <div className="font-medium" style={{ color: '#171717' }}>Ripple</div>
                  </div>
                  <div className="text-sm" style={{ color: '#666666' }}>Concentric circles create a hypnotic rippling effect that soothes the mind.</div>
                </button>
                <button
                  onClick={() => setSelectedVariant('bloom')}
                  className={`p-4 rounded-lg border-2 transition-all text-left ${selectedVariant === 'bloom' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg">🌸</span>
                    <div className="font-medium" style={{ color: '#171717' }}>Bloom</div>
                  </div>
                  <div className="text-sm" style={{ color: '#666666' }}>Flower-like pattern that opens and closes, perfect for creative inspiration.</div>
                </button>
                <button
                  onClick={() => setSelectedVariant('wander')}
                  className={`p-4 rounded-lg border-2 transition-all text-left ${selectedVariant === 'wander' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg">🌀</span>
                    <div className="font-medium" style={{ color: '#171717' }}>Wander</div>
                  </div>
                  <div className="text-sm" style={{ color: '#666666' }}>Flowing lines that create a journey-like motion for deep contemplation.</div>
                </button>
                <button
                  onClick={() => setSelectedVariant('glide')}
                  className={`p-4 rounded-lg border-2 transition-all text-left ${selectedVariant === 'glide' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg">✨</span>
                    <div className="font-medium" style={{ color: '#171717' }}>Glide</div>
                  </div>
                  <div className="text-sm" style={{ color: '#666666' }}>Smooth, graceful movements that flow like gentle waves, creating a serene and peaceful atmosphere.</div>
                </button>
              </div>
            </div>

            {/* Key Features */}
            <div className="space-y-6">
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="font-semibold mb-3" style={{ color: '#171717' }}>What's Included</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2">
                    <div className="flex-shrink-0 text-green-600">✓</div>
                    <span className="text-sm" style={{ color: '#666666' }}>Mindsight Kinetic Wall Art</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-shrink-0 text-green-600">✓</div>
                    <span className="text-sm" style={{ color: '#666666' }}>Mounting hardware</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-shrink-0 text-green-600">✓</div>
                    <span className="text-sm" style={{ color: '#666666' }}>Quick start guide</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-shrink-0 text-green-600">✓</div>
                    <span className="text-sm" style={{ color: '#666666' }}>Lifetime warranty</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-4">
              <Button 
                className="w-full text-lg py-6 font-semibold btn-orange"
                onClick={() => window.open('https://mindsightnow.com/products/kinetic-wall-art', '_blank')}
              >
                Buy Now - $370.00
              </Button>
              
              {/* 30-Day Money Back Guarantee */}
              <div className="flex items-center justify-center gap-2 text-sm" style={{ color: '#666666' }}>
                <div className="flex items-center justify-center w-5 h-5 rounded-full" style={{ backgroundColor: '#563232' }}>
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span>30-day money back guarantee</span>
              </div>
            </div>



            {/* Custom Ambassador Videos Section */}
            <div className="mt-8">
              <h3 className="text-lg font-medium mb-4" style={{ color: '#171717' }}>
                What our Ambassadors are saying
              </h3>
              
              {/* Video Container with improved distribution */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {kineticWallArtVideos.map((video, index) => (
                  <div key={video.id} className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                    <div className="relative aspect-[9/16] w-full">
                      <video 
                        src={video.url} 
                        className="w-full h-full object-cover"
                        autoPlay 
                        muted 
                        loop 
                        playsInline
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KineticWallArtHero;