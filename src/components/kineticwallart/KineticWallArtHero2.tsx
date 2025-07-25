import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Check, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import KineticWallArtAmbassadorVideos from './KineticWallArtAmbassadorVideos';

interface KineticWallArtHero2Props {
  selectedVariant: string;
  setSelectedVariant: (variant: string) => void;
  selectedColor: string;
  setSelectedColor: (color: string) => void;
}

const KineticWallArtHero2: React.FC<KineticWallArtHero2Props> = ({ selectedVariant, setSelectedVariant, selectedColor, setSelectedColor }) => {
  const [currentImage, setCurrentImage] = useState(0);

  // Checkout URLs mapping
  const checkoutUrls = {
    bloom: {
      brown: 'https://mindsightnow.com/cart/45547855806626:1',
      gray: 'https://mindsightnow.com/cart/45547855773858:1'
    },
    wander: {
      brown: 'https://mindsightnow.com/cart/45547855872162:1',
      gray: 'https://mindsightnow.com/cart/45547855904930:1'
    },
    glide: {
      brown: 'https://mindsightnow.com/cart/45547855970466:1',
      gray: 'https://mindsightnow.com/cart/45547856003234:1'
    },
    ripple: {
      brown: 'https://mindsightnow.com/cart/45547856134306:1',
      gray: 'https://mindsightnow.com/cart/45547856101538:1'
    }
  };

  // Product images organized by variant
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
        'https://mindsightnow.com/cdn/shop/files/Kinetic_Wall_Art_Variant_Bloom_Gray_720x.jpg?v=1749004376',
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
      handCrafted: 'https://mindsightnow.com/cdn/shop/files/81MuJHuTpWL._AC_SL1500_720x.jpg?v=1749004376',
      testimonials: 'https://mindsightnow.com/cdn/shop/files/Kinetic_Wall_Art_Testimonials_720x.png?v=1749004376'
    }
  };

  // Current display images based on selected variant and color
  const getCurrentImages = () => {
    const variantImages = [];
    if (productImages[selectedVariant] && productImages[selectedVariant][selectedColor]) {
      variantImages.push(...productImages[selectedVariant][selectedColor]);
    }
    
    // Add informational images
    variantImages.push(
      productImages.info.howItWorks,
      productImages.info.assembly,
      productImages.info.handCrafted,
      productImages.info.testimonials
    );
    
    return variantImages;
  };

  // Get current checkout URL
  const getCurrentCheckoutUrl = () => {
    return checkoutUrls[selectedVariant]?.[selectedColor] || 'https://mindsightnow.com/products/kinetic-wall-art';
  };

  const currentImages = getCurrentImages();

  // Reset current image when variant changes
  useEffect(() => {
    setCurrentImage(0);
  }, [selectedVariant]);

  // Ambassador videos
  const kineticWallArtVideos = [
    {
      id: 1,
      url: 'https://cdn.shopify.com/videos/c/o/v/bc19467c99d142a297c83d4ce18dc2b5.mp4',
      handle: '@homemagazines',
      followers: '5.4K',
      quote: 'The kinetic wall art became the star of our photo shoot—mesmerizing movement and whisper-quiet.'
    },
    {
      id: 2,
      url: 'https://cdn.shopify.com/videos/c/o/v/4a6b0b2f909d4da7b9434c6ed468fdb5.mp4',
      handle: '@carlivalentineauthor',
      followers: '3.4K',
      quote: 'Writing hours feel calmer now; every ripple reminds me to pause, breathe, and refocus.'
    },
    {
      id: 3,
      url: 'https://cdn.shopify.com/videos/c/o/v/96593219a4924869b713c518f886c7ff.mp4',
      handle: '@mindsightnow',
      followers: '3.2K',
      quote: 'Surreal watching our own piece spin—no batteries, just pure physics and mindful motion.'
    },
    {
      id: 4,
      url: 'https://cdn.shopify.com/videos/c/o/v/2b60bf952fbd4a9193839877e9fcd9da.mp4',
      handle: '@whitehollowhome',
      followers: '1.2K',
      quote: 'Clients are drawn to the warm wood grain and hypnotic patterns—this art sells itself.'
    },
  ];

  // Variants
  const variants = [
    { id: 'ripple', name: 'Ripple', price: 370, originalPrice: 450 },
    { id: 'bloom', name: 'Bloom', price: 370, originalPrice: 450 },
    { id: 'wander', name: 'Wander', price: 370, originalPrice: 450 },
    { id: 'glide', name: 'Glide', price: 370, originalPrice: 450 },
  ];

  // Get current variant
  const currentVariant = variants.find(v => v.id === selectedVariant) || variants[0];

  // Navigation functions
  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % currentImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + currentImages.length) % currentImages.length);
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Image Gallery - Fixed Position */}
          <div className="space-y-6 lg:sticky lg:top-8">
            {/* Main Image */}
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
              <img 
                src={currentImages[currentImage]}
                alt={`Mindsight Kinetic Wall Art - Image ${currentImage + 1}`}
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover hover:scale-105 transition-transform duration-300"
              />
              
              {/* Navigation Arrows */}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all border border-gray-200"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700" />
              </button>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
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
            <div className="grid grid-cols-4 gap-3">
              {currentImages.map((image, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImage(index);
                  }}
                  className={`relative rounded-lg overflow-hidden border-2 transition-all bg-white shadow-sm hover:shadow-md cursor-pointer ${
                    currentImage === index ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-200 hover:border-gray-300'
                  }`}
                  title="Click to view image"
                >
                  <img 
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-24 object-cover hover:scale-105 transition-transform duration-200"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-8 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            {/* Product Title and Rating */}
            <div>
              <h1 className="text-4xl font-bold mb-3" style={{ color: '#171717' }}>
                Mindsight Kinetic Wall Art
              </h1>
              <p className="text-xl mb-4" style={{ color: '#888888' }}>
                Transform your space with handcrafted kinetic art that calms your mind and inspires creativity
              </p>
              
              {/* Star Rating */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-lg font-semibold" style={{ color: '#171717' }}>
                  4.8
                </span>
                <span className="text-base" style={{ color: '#888888' }}>
                  (800+ reviews)
                </span>
              </div>
            </div>
            
            {/* Product Description */}
            <div>
              <p className="text-lg" style={{ color: '#666666' }}>
                The Mindsight Kinetic Wall Art is a living, wind-up sculpture that turns motion into daily mindfulness. Hand-crafted from sustainable wood, it creates mesmerizing patterns that calm your mind and transform any space.
              </p>
            </div>

            {/* Variant Selection */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold" style={{ color: '#171717' }}>Select Motion Pattern</h3>
              <div className="grid grid-cols-2 gap-4">
                {variants.map((variant) => {
                  const icons = {
                    ripple: '🌊',
                    bloom: '🌸', 
                    wander: '🌀',
                    glide: '✨'
                  };
                  return (
                    <button
                       key={variant.id}
                       onClick={() => setSelectedVariant(variant.id)}
                       className={`group relative p-3 rounded-lg border-2 transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                         selectedVariant === variant.id 
                           ? 'border-blue-500 bg-gradient-to-br from-blue-50 to-blue-100 shadow-md' 
                           : 'border-gray-200 bg-white hover:border-blue-300 hover:bg-blue-50/30'
                       }`}
                     >
                       {/* Selection indicator */}
                       {selectedVariant === variant.id && (
                         <div className="absolute -top-1 -right-1 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                           <Check className="w-3 h-3 text-white" />
                         </div>
                       )}
                       
                       {/* Icon */}
                       <div className="text-lg mb-1">{icons[variant.id]}</div>
                       
                       {/* Name */}
                       <div className="font-semibold text-base mb-1" style={{ color: '#171717' }}>
                         {variant.name}
                       </div>
                       
                       {/* Price */}
                       <div className="flex items-center justify-center gap-1">
                         <span className="font-bold text-lg" style={{ color: '#563232' }}>
                           ${variant.price}
                         </span>
                         <span className="text-xs text-gray-400 line-through">
                           ${variant.originalPrice}
                         </span>
                       </div>
                       
                       {/* Hover effect overlay */}
                       <div className={`absolute inset-0 rounded-lg transition-opacity duration-300 ${
                         selectedVariant === variant.id 
                           ? 'opacity-0' 
                           : 'opacity-0 group-hover:opacity-10 bg-blue-500'
                       }`} />
                     </button>
                  );
                })}
              </div>
            </div>

            {/* Color Selection */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold" style={{ color: '#171717' }}>Select Color</h3>
              <div className="flex gap-3">
                <button
                  onClick={() => setSelectedColor('brown')}
                  className={`flex-1 p-4 rounded-lg border-2 transition-all text-center ${selectedColor === 'brown' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}
                >
                  <div className="w-8 h-8 rounded-full mx-auto mb-2" style={{ backgroundColor: '#8B4513' }}></div>
                  <div className="font-medium" style={{ color: '#171717' }}>Brown</div>
                </button>
                <button
                  onClick={() => setSelectedColor('gray')}
                  className={`flex-1 p-4 rounded-lg border-2 transition-all text-center ${selectedColor === 'gray' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}
                >
                  <div className="w-8 h-8 rounded-full mx-auto mb-2" style={{ backgroundColor: '#808080' }}></div>
                  <div className="font-medium" style={{ color: '#171717' }}>Gray</div>
                </button>
              </div>
            </div>

            {/* Key Features */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold" style={{ color: '#171717' }}>Key Features</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full text-white text-sm font-bold" style={{ backgroundColor: '#563232' }}>1</div>
                  <div>
                    <div className="font-semibold mb-1" style={{ color: '#171717' }}>Motion That Calms</div>
                    <div className="text-sm" style={{ color: '#888888' }}>Ripples soothe stress in seconds.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full text-white text-sm font-bold" style={{ backgroundColor: '#563232' }}>2</div>
                  <div>
                    <div className="font-semibold mb-1" style={{ color: '#171717' }}>Sustainable Wood</div>
                    <div className="text-sm" style={{ color: '#888888' }}>Handcrafted from natural timber.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full text-white text-sm font-bold" style={{ backgroundColor: '#563232' }}>3</div>
                  <div>
                    <div className="font-semibold mb-1" style={{ color: '#171717' }}>Battery-Free</div>
                    <div className="text-sm" style={{ color: '#888888' }}>No cords—just wind-up motion.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full text-white text-sm font-bold" style={{ backgroundColor: '#563232' }}>4</div>
                  <div>
                    <div className="font-semibold mb-1" style={{ color: '#171717' }}>Mindful Focus Tool</div>
                    <div className="text-sm" style={{ color: '#888888' }}>Silent timer for focus sessions.</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Price and CTA */}
            <div className="space-y-4 pt-4 border-t border-gray-100">
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold" style={{ color: '#171717' }}>${currentVariant.price}.00</span>
                <span className="text-xl text-gray-400 line-through">${currentVariant.originalPrice}.00</span>
                <span className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded">
                  Save ${currentVariant.originalPrice - currentVariant.price}
                </span>
              </div>
              
              <Button 
                className="w-full text-lg py-6 font-semibold btn-orange"
                onClick={() => window.open(getCurrentCheckoutUrl(), '_blank')}
              >
                Buy Now - ${currentVariant.price}.00
              </Button>
              
              {/* 30-Day Money Back Guarantee */}
              <div className="flex items-center justify-center gap-2 text-sm" style={{ color: '#666666' }}>
                <div className="flex items-center justify-center w-5 h-5 rounded-full" style={{ backgroundColor: '#563232' }}>
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span>30-day money back guarantee</span>
              </div>
            </div>

            {/* See It In Action */}
            <div className="space-y-4 pt-4 border-t border-gray-100">
              <h3 className="text-lg font-semibold" style={{ color: '#171717' }}>See It In Action</h3>
              <div className="grid grid-cols-1 gap-4">
                {kineticWallArtVideos.slice(0, 2).map((video, index) => (
                  <div key={video.id} className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                    <div className="relative aspect-[16/9] w-full">
                      <video 
                        src={video.url} 
                        className="w-full h-full object-cover"
                        autoPlay 
                        muted 
                        loop 
                        playsInline
                      />
                    </div>
                    <div className="p-4">
                      <p className="font-semibold" style={{ color: '#563232' }}>
                        {video.handle} <span className="text-gray-500 font-normal">({video.followers})</span>
                      </p>
                      <p className="text-gray-700 text-sm mt-1">"{video.quote}"</p>
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

export default KineticWallArtHero2;