import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useState, useEffect } from "react";

const StickyAddToCartWallArt = ({ selectedVariant = 'ripple', selectedColor = 'brown' }) => {
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

  // Product images organized by variant and color
  const productImages = {
    ripple: {
      brown: 'https://mindsightnow.com/cdn/shop/files/Kinetic_Wall_Art_Front_720x.jpg?v=1749004376',
      gray: 'https://mindsightnow.com/cdn/shop/files/Kinetic_Wall_Art_Variant_Gray_720x.jpg?v=1749004376'
    },
    bloom: {
      brown: 'https://mindsightnow.com/cdn/shop/files/WB_-_bloom_brown_720x.jpg?v=1748883454',
      gray: 'https://mindsightnow.com/cdn/shop/files/Kinetic_Wall_Art_Variant_Bloom_Gray_720x.jpg?v=1749004376'
    },
    wander: {
      brown: 'https://mindsightnow.com/cdn/shop/files/Wander_Brown_e9e9a763-c38b-4c1b-a66a-75de6f2d83fd_720x.png?v=1752591704',
      gray: 'https://mindsightnow.com/cdn/shop/files/Wander_Gray_385baf0a-9613-4b72-9051-161f1c1d2767_720x.png?v=1752591690'
    },
    glide: {
      brown: 'https://mindsightnow.com/cdn/shop/files/Glide_Brown_685724c5-9fc4-411b-953d-aa0f866e8901_720x.png?v=1752591674',
      gray: 'https://mindsightnow.com/cdn/shop/files/Glide_Gray_a5694e52-87d5-4e5c-8991-83156eb6d7a7_720x.png?v=1752591654'
    }
  };

  // Get current checkout URL
  const getCurrentCheckoutUrl = () => {
    return checkoutUrls[selectedVariant]?.[selectedColor] || 'https://mindsightnow.com/products/kinetic-wall-art';
  };

  // Get current product image
  const getCurrentImage = () => {
    return productImages[selectedVariant]?.[selectedColor] || productImages.ripple.brown;
  };
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      
      // Show the sticky cart when user scrolls down to 15% of the page
      // But hide it when they're at the very top (within 200px of top)
      // Also hide it when they're near the bottom (within 300px of bottom)
      const distanceFromBottom = docHeight - scrollTop;
      setIsVisible(scrollPercent >= 15 && scrollTop > 200 && distanceFromBottom > 300);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Check initial scroll position
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-2 md:p-4">
      <div className="max-w-4xl mx-auto shadow-2xl rounded-xl" style={{ backgroundColor: '#FFFFFF' }}>
        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-between gap-4 p-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-white p-2">
              <img 
                src={getCurrentImage()} 
                alt="Mindsight Kinetic Wall Art"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h3 className="font-bold" style={{ color: '#171717' }}>Mindsight Kinetic Wall Art</h3>
              <p className="text-sm" style={{ color: '#888888' }}>Handcrafted mindfulness for your space</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="text-right">
              <div className="flex items-center gap-2">
                <span className="text-lg text-gray-400 line-through">$450.00</span>
                <span className="text-2xl font-bold" style={{ color: '#171717' }}>$370.00</span>
                <span className="text-sm bg-red-500 text-white px-2 py-1 rounded">SAVE $80</span>
              </div>
            </div>
            <Button 
              className="text-lg px-8 py-6 font-semibold btn-orange"
              onClick={() => window.open(getCurrentCheckoutUrl(), '_blank')}
            >
              Buy Now
            </Button>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden p-3">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-white p-1">
                <img 
                  src={getCurrentImage()} 
                  alt="Mindsight Kinetic Wall Art"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="font-bold text-sm" style={{ color: '#171717' }}>Kinetic Wall Art</h3>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-400 line-through">$450.00</span>
                  <span className="text-lg font-bold" style={{ color: '#171717' }}>$370.00</span>
                </div>
              </div>
            </div>
            
            <Button 
              className="text-sm px-4 py-3 font-semibold whitespace-nowrap btn-orange"
              onClick={() => window.open(getCurrentCheckoutUrl(), '_blank')}
            >
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyAddToCartWallArt;