import React from "react";
import { Check, X } from "lucide-react";

const ProductComparison = () => {
  const keyComparisons = [
    { feature: "Price", us: "$30", them: "$69", advantage: true },
    { feature: "Phone Compatibility", us: "3-4 phones", them: "3-4 phones", advantage: true },
    { feature: "Lock Duration", us: "1min - 30 days", them: "1min - 10 days", advantage: true },
    { feature: "Emergency Access", us: "Yes", them: "No", advantage: true },
    { feature: "Charge While Locked", us: "Yes", them: "No", advantage: true },
    { feature: "Batteries Included", us: "Yes", them: "No", advantage: true },
    { feature: "Multiple Willpower Modes", us: "Yes", them: "No", advantage: true },
  ];

  return (
    <section 
      className="py-16 px-4" 
      style={{ 
        backgroundColor: '#eef2f5',
        background: `linear-gradient(to bottom, #eef2f5 0%, #eef2f5 60%, #3e6daf 100%)`
      }}
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#171717' }}>
            How We Stack Up
          </h2>
        </div>

        {/* Main Comparison */}
        <div className="relative">
          <div className="grid lg:grid-cols-5 gap-8 items-start">
            
            {/* Competitor Product */}
            <div className="lg:col-span-1 text-center order-2 lg:order-1">
              <div className="w-40 h-40 mx-auto mb-4 flex items-center justify-center p-4">
                <img 
                  src="https://cdn.shopify.com/s/files/1/0562/5505/3986/files/Untitled_design_16_36b53ba3-8b23-406d-94fa-7516d5d6da28.png?v=1749673981" 
                  alt="Competitor Product"
                  className="w-full h-full object-contain opacity-80"
                />
              </div>
            </div>

            {/* Center Comparison Table */}
            <div className="lg:col-span-3 order-1 lg:order-2">
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden mx-auto max-w-4xl">
                <div className="grid grid-cols-3">
                  <div className="px-6 py-4 bg-gray-50 font-bold text-gray-700 text-center border-b-2 border-gray-200 text-lg">Feature</div>
                  <div className="px-6 py-4 bg-gray-100 font-bold text-gray-600 text-center border-b-2 border-gray-200 text-lg">Competitor</div>
                  <div className="px-6 py-4 font-bold text-center border-b-2 text-lg" style={{ backgroundColor: '#fff5f2', color: '#ff6b35', borderColor: '#ff6b35' }}>Mindsight</div>
                  
                  {keyComparisons.map((item, index) => (
                    <React.Fragment key={index}>
                      <div className="px-6 py-4 text-gray-800 font-medium text-left border-t border-gray-100 text-base">{item.feature}</div>
                      <div className="px-6 py-4 text-gray-600 text-center border-t border-gray-100 flex items-center justify-center text-base">
                        {item.them === "No" ? (
                          <div className="flex items-center justify-center w-6 h-6 rounded-full bg-red-600">
                            <X className="w-4 h-4 text-white" />
                          </div>
                        ) : item.them}
                      </div>
                      <div className="px-6 py-4 text-center border-t border-gray-100 flex items-center justify-center text-base" style={{ color: item.us === item.them ? '#171717' : '#ff6b35', fontWeight: '700' }}>
                        {item.us === "Yes" ? (
                          <div className="flex items-center justify-center w-6 h-6 rounded-full" style={{ backgroundColor: '#ff6b35' }}>
                            <Check className="w-4 h-4 text-white" />
                          </div>
                        ) : item.us}
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>

            {/* Our Product */}
            <div className="lg:col-span-1 text-center order-3">
              <div className="w-40 h-40 mx-auto mb-4 flex items-center justify-center p-4">
                <img 
                  src="https://cdn.shopify.com/s/files/1/0562/5505/3986/files/Timed_Lockbox_W_Shadow.png?v=1741265966" 
                  alt="Mindsight Lockbox"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductComparison;
