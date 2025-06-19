import React from "react";
import { Check, X } from "lucide-react";

const ProductComparison = () => {
  const keyComparisons = [
    { feature: "Price", us: "$30", them: "$69", advantage: true },
    { feature: "Phone Compatibility", us: "3-4 phones", them: "3-4 phones", advantage: true },
    { feature: "Lock Duration", us: "1min - 30 days", them: "1min - 10 days", advantage: true },
    { feature: "Emergency Access", us: "Yes", them: "No", advantage: true },
    { feature: "Charge While Locked", us: "Yes", them: "No", advantage: true },
  ];

      return (
      <section className="py-16 px-4" style={{ backgroundColor: '#F1F1F1', backgroundImage: 'url(https://cdn.shopify.com/s/files/1/0562/5505/3986/files/Gradient_Background_Main.png?v=1750287513)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3" style={{ color: '#171717' }}>
            How We Stack Up
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Better features, better price, better family connection
          </p>
        </div>

        {/* Main Comparison */}
        <div className="relative">
          <div className="grid lg:grid-cols-5 gap-8 items-center">
            
            {/* Competitor Info */}
            <div className="lg:col-span-1 text-center lg:text-right order-2 lg:order-1">
              <div className="inline-block">
                 <div className="w-40 h-40 mx-auto lg:mx-0 mb-3 flex items-center justify-center p-2">
                   <img 
                     src="https://cdn.shopify.com/s/files/1/0562/5505/3986/files/Untitled_design_16_36b53ba3-8b23-406d-94fa-7516d5d6da28.png?v=1749673981" 
                     alt="Competitor"
                     className="w-full h-full object-contain opacity-80"
                   />
                 </div>
                <h4 className="font-semibold text-gray-600 text-sm mb-1">Others</h4>
                <p className="text-lg font-bold text-white">$69</p>
              </div>
            </div>

            {/* Center Image */}
            <div className="lg:col-span-3 order-1 lg:order-2">
              <div className="relative mx-auto max-w-lg">
                <img 
                  src="https://cdn.shopify.com/s/files/1/0562/5505/3986/files/Center_Image.png?v=1750269565"
                  alt="Family using Mindsight lockbox for better connection"
                  className="w-full h-auto rounded-xl shadow-lg"
                />
                
                                 {/* Comparison Table Overlay */}
                 <div className="absolute -bottom-28 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden min-w-max">
                  <div className="grid grid-cols-3 text-xs">
                    <div className="px-3 py-2 bg-gray-50 font-semibold text-gray-600 text-center">Feature</div>
                    <div className="px-3 py-2 bg-gray-100 font-semibold text-gray-500 text-center">Others</div>
                    <div className="px-3 py-2 font-semibold text-center" style={{ backgroundColor: '#fff5f2', color: '#ff6b35' }}>Mindsight</div>
                    
                    {keyComparisons.map((item, index) => (
                      <React.Fragment key={index}>
                        <div className="px-3 py-2 text-gray-700 text-left border-t border-gray-100">{item.feature}</div>
                        <div className="px-3 py-2 text-gray-500 text-center border-t border-gray-100">{item.them}</div>
                        <div className="px-3 py-2 text-center border-t border-gray-100" style={{ color: '#ff6b35', fontWeight: '600' }}>
                          {item.us}
                        </div>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Our Product Info */}
            <div className="lg:col-span-1 text-center lg:text-left order-3">
              <div className="inline-block">
                 <div className="w-40 h-40 mx-auto lg:mx-0 mb-3 flex items-center justify-center p-2">
                   <img 
                     src="https://cdn.shopify.com/s/files/1/0562/5505/3986/files/Timed_Lockbox_W_Shadow.png?v=1741265966" 
                     alt="Mindsight Lockbox"
                     className="w-full h-full object-contain"
                   />
                 </div>
                <h4 className="font-semibold text-sm mb-1" style={{ color: '#171717' }}>Mindsight</h4>
                <p className="text-lg font-bold text-white">$30</p>
              </div>
            </div>
          </div>
        </div>

                 {/* Bottom Message */}
         <div className="text-center mt-40">
          <p className="text-sm text-white">
            Join thousands of families reconnecting with what matters most
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductComparison;
