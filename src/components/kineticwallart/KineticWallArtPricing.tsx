import { Check, Shield, HeartHandshake } from "lucide-react";

const KineticWallArtPricing = () => {
  return (
    <section className="pt-10 pb-20 px-4" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#171717' }}>
            Start Building Better Habits Today
          </h2>
          <p className="text-xl max-w-3xl mx-auto mb-4" style={{ color: '#888888' }}>
            Transform your space and calm your mind with handcrafted kinetic art. 
            Join hundreds of customers who have discovered the meditative power of motion.
          </p>
          <div className="flex justify-center">
            <span className="bg-red-500 text-white px-4 py-2 rounded-full text-lg font-bold">LIMITED TIME</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="flex justify-center lg:justify-end">
            <img 
              src="https://mindsightnow.com/cdn/shop/files/Kinetic_Wall_Art_Front_720x.jpg?v=1749004376"
              alt="Mindsight Kinetic Wall Art in home setting"
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </div>

          {/* Right side - Pricing card */}
          <div className="flex justify-center lg:justify-start">
            <div className="bg-white rounded-2xl p-8 border-2 relative w-full max-w-md shadow-lg" style={{ borderColor: '#563232' }}>
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="px-4 py-2 rounded-full text-sm font-semibold" style={{ backgroundColor: '#563232', color: '#FFFFFF' }}>
                  HANDCRAFTED
                </span>
              </div>
              
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <span className="text-2xl text-gray-400 line-through">$450.00</span>
                  <span className="text-5xl font-bold" style={{ color: '#171717' }}>$370.00</span>
                </div>
                <div style={{ color: '#171717' }}>One-time investment</div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Check style={{ color: '#563232' }} size={20} />
                  <span style={{ color: '#171717' }}>Mindsight Kinetic Wall Art</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check style={{ color: '#563232' }} size={20} />
                  <span style={{ color: '#171717' }}>Four motion patterns included</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check style={{ color: '#563232' }} size={20} />
                  <span style={{ color: '#171717' }}>All mounting hardware</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check style={{ color: '#563232' }} size={20} />
                  <span style={{ color: '#171717' }}>Quick start guide & support</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check style={{ color: '#563232' }} size={20} />
                  <span style={{ color: '#171717' }}>Lifetime warranty</span>
                </div>
              </div>

              <button 
                className="w-full py-4 text-lg font-semibold rounded-md border-0 transition-all duration-100 ease-in-out btn-orange"
                onClick={() => window.open('https://mindsightnow.com/products/kinetic-wall-art', '_blank')}
              >
                Buy Now - $370.00
              </button>

              <div className="text-center mt-4 text-sm" style={{ color: '#171717' }}>
                30 Day Money Back Guarantee • Lifetime Warranty • Free shipping
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KineticWallArtPricing;