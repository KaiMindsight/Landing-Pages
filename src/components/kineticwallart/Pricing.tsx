import { Check, Shield, HeartHandshake } from "lucide-react";

const Pricing = () => {
  return (
    <section className="pt-10 pb-20 px-4" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#171717' }}>
            Start Building Better Habits Today
          </h2>
          <p className="text-xl max-w-3xl mx-auto mb-4" style={{ color: '#888888' }}>
            Transform your space and mind with the Mindsight Kinetic Wall Art. 
            Join thousands who have discovered the power of mindful motion.
          </p>
          <div className="flex justify-center">
            <span className="bg-red-500 text-white px-4 py-2 rounded-full text-lg font-bold">Limited Time Offer</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="flex justify-center lg:justify-end">
            <img 
              src="https://cdn.shopify.com/s/files/1/0562/5505/3986/files/Side_Image_-_Kinetic_Wall_9ed57d8f-a0a2-4300-bd00-bee7a70388f8.png?v=1752209210"
              alt="Kinetic Wall Art in modern living space"
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </div>

          {/* Right side - Pricing */}
          <div className="flex justify-center lg:justify-start">
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-8 border-2 relative w-full max-w-md" style={{ borderColor: '#563232' }}>
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="px-4 py-2 rounded-full text-sm font-semibold" style={{ backgroundColor: '#563232', color: '#FFFFFF' }}>
                  PREMIUM QUALITY
                </span>
              </div>
              
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <span className="text-2xl text-gray-400 line-through">$450.00</span>
                  <span className="text-5xl font-bold" style={{ color: '#171717' }}>$370.00</span>
                </div>
                <div style={{ color: '#171717' }}>One-time purchase</div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Check style={{ color: '#563232' }} size={20} />
                  <span style={{ color: '#171717' }}>Mindsight Kinetic Wall Art</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check style={{ color: '#563232' }} size={20} />
                  <span style={{ color: '#171717' }}>Four unique motion patterns</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check style={{ color: '#563232' }} size={20} />
                  <span style={{ color: '#171717' }}>12+ hours of continuous motion</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check style={{ color: '#563232' }} size={20} />
                  <span style={{ color: '#171717' }}>Sustainable wood construction</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check style={{ color: '#563232' }} size={20} />
                  <span style={{ color: '#171717' }}>Complete assembly kit included</span>
                </div>
              </div>

              <button 
                className="w-full py-4 text-lg font-semibold rounded-md border-0 transition-all duration-100 ease-in-out btn-orange"
                onClick={() => window.open('https://mindsightnow.com/products/kinetic-wall-art', '_blank')}
              >
                Buy Now - $370.00
              </button>
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <Shield className="mx-auto mb-4" style={{ color: '#563232' }} size={48} />
            <h3 className="text-lg font-semibold mb-2" style={{ color: '#171717' }}>30-Day Guarantee</h3>
            <p className="text-gray-600">Not satisfied? Return for a full refund within 30 days.</p>
          </div>
          <div className="text-center">
            <HeartHandshake className="mx-auto mb-4" style={{ color: '#563232' }} size={48} />
            <h3 className="text-lg font-semibold mb-2" style={{ color: '#171717' }}>Lifetime Support</h3>
            <p className="text-gray-600">We're here to help you get the most from your kinetic art.</p>
          </div>
          <div className="text-center">
            <Check className="mx-auto mb-4" style={{ color: '#563232' }} size={48} />
            <h3 className="text-lg font-semibold mb-2" style={{ color: '#171717' }}>Premium Quality</h3>
            <p className="text-gray-600">Handcrafted with sustainable materials for lasting beauty.</p>
          </div>
        </div>


      </div>
    </section>
  );
};

export default Pricing;