import React from "react";
import { Check, X } from "lucide-react";

const KineticWallArtComparison = () => {
  const keyComparisons = [
    { feature: "Price", us: "$370", them: "$450", advantage: true },
    { feature: "Motion Patterns", us: "4 unique designs", them: "1-2 patterns", advantage: true },
    { feature: "Runtime", us: "Up to 12 hours", them: "2-4 hours", advantage: true },
    { feature: "Material Quality", us: "Sustainable wood", them: "Plastic/Metal", advantage: true },
    { feature: "Assembly Time", us: "30-45 minutes", them: "2-3 hours", advantage: true },
    { feature: "Warranty", us: "Lifetime", them: "1 year", advantage: true },
    { feature: "Handcrafted", us: "Yes", them: "No", advantage: true },
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
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#888888' }}>
            See how Mindsight Kinetic Wall Art compares to other kinetic sculptures and wall art pieces.
          </p>
        </div>

        {/* Main Comparison */}
        <div className="relative">
          <div className="grid lg:grid-cols-5 gap-8 items-start">
            
            {/* Competitor Product */}
            <div className="lg:col-span-1 text-center order-2 lg:order-1">
              <div className="w-40 h-40 mx-auto mb-4 flex items-center justify-center p-4">
                <img 
                  src="https://cdn.shopify.com/s/files/1/0562/5505/3986/files/competitor-kinetic-art.png?v=1749673981" 
                  alt="Competitor Kinetic Art"
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
                  <div className="px-6 py-4 font-bold text-center border-b-2 text-lg" style={{ backgroundColor: '#fff5f2', color: '#563232', borderColor: '#563232' }}>Mindsight</div>
                  
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
                      <div className="px-6 py-4 text-center border-t border-gray-100 flex items-center justify-center text-base" style={{ color: item.us === item.them ? '#171717' : '#563232', fontWeight: '700' }}>
                        {item.us === "Yes" ? (
                          <div className="flex items-center justify-center w-6 h-6 rounded-full" style={{ backgroundColor: '#563232' }}>
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
                  src="https://mindsightnow.com/cdn/shop/files/Kinetic_Wall_Art_Front_720x.jpg?v=1749004376" 
                  alt="Mindsight Kinetic Wall Art"
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

export default KineticWallArtComparison;