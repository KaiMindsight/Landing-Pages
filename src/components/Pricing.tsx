import { Check, Shield, HeartHandshake } from "lucide-react";

const Pricing = () => {
  return (
    <section className="pt-10 pb-20 px-4" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#171717' }}>
            Start Building Better Habits Today
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#888888' }}>
            Invest in your focus, productivity, and well-being. Join thousands of people 
            who have already transformed their habits with the Mindsight Timed Lockbox.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border-2 relative" style={{ borderColor: '#5684C4' }}>
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="px-4 py-2 rounded-full text-sm font-semibold" style={{ backgroundColor: '#5684C4', color: '#FFFFFF' }}>
                BEST VALUE
              </span>
            </div>
            
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-3 mb-2">
                <span className="text-2xl text-gray-400 line-through">$40.00</span>
                <span className="text-5xl font-bold" style={{ color: '#171717' }}>$30.00</span>
              </div>
              <div style={{ color: '#171717' }}>One-time purchase</div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <Check style={{ color: '#5684C4' }} size={20} />
                <span style={{ color: '#171717' }}>Mindsight Timed Lockbox</span>
              </div>
              <div className="flex items-center gap-3">
                <Check style={{ color: '#5684C4' }} size={20} />
                <span style={{ color: '#171717' }}>Three willpower modes</span>
              </div>
              <div className="flex items-center gap-3">
                <Check style={{ color: '#5684C4' }} size={20} />
                <span style={{ color: '#171717' }}>2× AA batteries included</span>
              </div>

              <div className="flex items-center gap-3">
                <Check style={{ color: '#5684C4' }} size={20} />
                <span style={{ color: '#171717' }}>Quick start guide & support</span>
              </div>
            </div>

            <button 
              className="w-full py-4 text-lg font-semibold rounded-md border-0 transition-all duration-100 ease-in-out btn-orange"
              onClick={() => window.open('https://mindsightnow.com/cart/43571017711778:1?discount=LOCKIT25', '_blank')}
            >
              Buy Now - $30.00
            </button>

            <div className="text-center mt-4 text-sm" style={{ color: '#171717' }}>
              30 Day Money Back Guarantee • Lifetime Warranty • Free shipping over $75
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
