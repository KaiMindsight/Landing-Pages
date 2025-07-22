import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const AddictionLockingSection = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Image */}
          <div className="order-2 lg:order-1">
            <img 
              src="https://cdn.shopify.com/s/files/1/0562/5505/3986/files/LB_1_Updated_2.jpg?v=1750452524" 
              alt="Mindsight Timed Lockbox for addiction recovery" 
              className="rounded-2xl shadow-xl w-full"
            />
          </div>
          
          {/* Right side - Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl font-bold mb-6" style={{ color: '#171717' }}>
              Locking Away Your Triggers Has Never Been This Effective
            </h2>
            
            <p className="text-lg mb-8 leading-relaxed" style={{ color: '#171717' }}>
              The Mindsight Timed Lockbox creates a physical barrier between you and your addiction triggers, 
              giving you the space and time you need to make healthier choices. With customizable lock durations 
              and a tamper-resistant design, it's the perfect tool for your recovery journey.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-green-100 rounded-full p-1">
                  <Check className="text-green-600" size={16} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1" style={{ color: '#171717' }}>Secure Time Lock</h3>
                  <p style={{ color: '#171717' }}>Set lock durations from 1 minute to 999 hours to create boundaries during vulnerable moments</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-green-100 rounded-full p-1">
                  <Check className="text-green-600" size={16} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1" style={{ color: '#171717' }}>Fortress Mode</h3>
                  <p style={{ color: '#171717' }}>For maximum commitment, this mode prevents any override once activated</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-green-100 rounded-full p-1">
                  <Check className="text-green-600" size={16} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1" style={{ color: '#171717' }}>Versatile Storage</h3>
                  <p style={{ color: '#171717' }}>Spacious enough for various addiction triggers - from substances to credit cards</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <Button 
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 rounded-full font-bold text-lg transition-all duration-300"
                onClick={() => window.open('https://mindsightnow.com/cart/43571017711778:1?discount=LOCKIT25', '_blank')}
              >
                Get Your Lockbox Today
              </Button>
              
              <div className="text-sm opacity-70 mt-2" style={{ color: '#171717' }}>
                *30-day money-back guarantee. Free shipping on all orders.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddictionLockingSection;