
import { Ruler, Weight, Zap, Usb } from "lucide-react";

const ProductSpecs = () => {
  return (
    <section className="py-20 px-4" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#171717' }}>
            Engineered for Security & Convenience
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#171717' }}>
            Every detail of the Mindsight Timed Lockbox has been carefully designed 
            to provide maximum security while maintaining ease of use.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="rounded-2xl p-8 text-white" style={{ backgroundColor: '#5684C4' }}>
              <h3 className="text-2xl font-bold mb-6">Technical Specifications</h3>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Ruler className="text-blue-200" size={20} />
                    <div>
                      <div className="font-semibold">Dimensions</div>
                      <div className="text-blue-100 text-sm">8" × 2.75" × 4.75"</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Weight className="text-blue-200" size={20} />
                    <div>
                      <div className="font-semibold">Material</div>
                      <div className="text-blue-100 text-sm">ABS & PP plastic, impact & heat resistant</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Zap className="text-blue-200" size={20} />
                    <div>
                      <div className="font-semibold">Battery</div>
                      <div className="text-blue-100 text-sm">2× AA (6+ months life)</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Usb className="text-blue-200" size={20} />
                    <div>
                      <div className="font-semibold">Charging</div>
                      <div className="text-blue-100 text-sm">Built-in cable slot</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-blue-400">
                <h4 className="font-semibold mb-3">Fits These Items:</h4>
                <div className="grid grid-cols-2 gap-2 text-sm text-blue-100">
                  <div>• 3-4 smartphones</div>
                  <div>• Medication bottles</div>
                  <div>• Vape devices</div>
                  <div>• Small electronics</div>
                  <div>• Snack packages</div>
                  <div>• Credit cards</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6" style={{ color: '#171717' }}>Three Willpower Modes</h3>
              
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-4 border-l-4" style={{ borderColor: '#171717' }}>
                  <h4 className="font-semibold mb-2" style={{ color: '#171717' }}>🔓 Lockbox Only</h4>
                  <p className="text-sm" style={{ color: '#171717' }}>Functions as a simple lockbox without timer. Perfect for general storage and organization.</p>
                </div>
                
                <div className="bg-white rounded-lg p-4 border-l-4" style={{ borderColor: '#5684C4' }}>
                  <h4 className="font-semibold mb-2" style={{ color: '#171717' }}>⏱️ Standard Mode</h4>
                  <p className="text-sm" style={{ color: '#171717' }}>Includes timer with override code for flexibility. Great for building habits with a safety net.</p>
                </div>
                
                <div className="bg-white rounded-lg p-4 border-l-4" style={{ borderColor: '#D72923' }}>
                  <h4 className="font-semibold mb-2" style={{ color: '#171717' }}>🏰 Fortress Mode</h4>
                  <p className="text-sm" style={{ color: '#171717' }}>Strict mode with no override option. Maximum discipline for serious habit change.</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl p-6" style={{ backgroundColor: '#F1F1F1' }}>
              <h4 className="font-semibold mb-3" style={{ color: '#171717' }}>What's Included</h4>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2">
                  <span style={{ color: '#5684C4' }}>✓</span>
                  <span style={{ color: '#171717' }}>Mindsight Timed Lockbox</span>
                </div>
                <div className="flex items-center gap-2">
                  <span style={{ color: '#5684C4' }}>✓</span>
                  <span style={{ color: '#171717' }}>2× AA batteries</span>
                </div>
                <div className="flex items-center gap-2">
                  <span style={{ color: '#5684C4' }}>✓</span>
                  <span style={{ color: '#171717' }}>Quick start guide</span>
                </div>
                <div className="flex items-center gap-2">
                  <span style={{ color: '#5684C4' }}>✓</span>
                  <span style={{ color: '#171717' }}>Lifetime warranty</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSpecs;
