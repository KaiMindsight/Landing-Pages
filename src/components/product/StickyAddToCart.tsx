import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useState, useEffect } from "react";

const StickyAddToCart = () => {
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
                src="https://mindsightnow.com/cdn/shop/files/Kinetic_Wall_Art_Front_720x.jpg?v=1749004376" 
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
              onClick={() => window.open('https://mindsightnow.com/products/kinetic-wall-art', '_blank')}
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
                  src="https://mindsightnow.com/cdn/shop/files/Kinetic_Wall_Art_Front_720x.jpg?v=1749004376" 
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
              onClick={() => window.open('https://mindsightnow.com/products/kinetic-wall-art', '_blank')}
            >
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyAddToCart;
