import { useState, useEffect } from "react";
import { ShoppingCart, X } from "lucide-react";

const StickyAddToCart = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState("standard");

  useEffect(() => {
    const handleScroll = () => {
      // Show the sticky bar after scrolling down 800px
      if (window.scrollY > 800) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getPrice = () => {
    return "$370";
  };

  if (!isVisible) return null;

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 py-3 px-4 z-50 transition-all duration-300"
      style={{ transform: isVisible ? 'translateY(0)' : 'translateY(100%)' }}
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <img 
            src="https://mindsightnow.com/cdn/shop/files/Kinetic_Wall_Art_Front_720x.jpg?v=1749004376" 
            alt="Kinetic Wall Art" 
            className="w-16 h-16 object-cover rounded-lg hidden sm:block"
          />
          <div>
            <h3 className="font-semibold text-lg" style={{ color: '#171717' }}>Mindsight Kinetic Wall Art</h3>
            <div className="flex items-center gap-2">
              <span className="font-medium" style={{ color: '#563232' }}>{getPrice()}</span>
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                ))}
                <span className="text-xs ml-1 text-gray-500">(128)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">


          <button 
            className="px-6 py-2 rounded-full font-semibold text-white flex items-center gap-2 transition-all duration-300"
            style={{ backgroundColor: '#563232' }}
            onClick={() => window.open('https://mindsightnow.com/products/kinetic-wall-art', '_blank')}
          >
            <ShoppingCart size={18} />
            <span>Buy Now</span>
          </button>

          <button 
            onClick={() => setIsVisible(false)}
            className="p-2 rounded-full hover:bg-gray-100 transition-all duration-300"
          >
            <X size={20} className="text-gray-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StickyAddToCart;