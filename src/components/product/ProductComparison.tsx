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
      <section className="py-8 md:py-16 px-4" style={{ backgroundColor: '#F1F1F1', backgroundImage: 'url(https://cdn.shopify.com/s/files/1/0562/5505/3986/files/Gradient_Background_Main.png?v=1750287513)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
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
            <div className="lg:col-span-1 text-center lg:text-right order-2 lg:order-1 hidden md:block">
              <div className="inline-block">
                 <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto lg:mx-0 mb-3 flex items-center justify-center p-2">
                   <img 
                     src="https://cdn.shopify.com/s/files/1/0562/5505/3986/files/Untitled_design_16_36b53ba3-8b23-406d-94fa-7516d5d6da28.png?v=1749673981" 
                     alt="Competitor"
                     className="w-full h-full object-contain opacity-80"
                   />
                 </div>
                <h4 className="font-semibold text-gray-600 text-sm mb-1 hidden sm:block">Others</h4>
                <p className="text-lg font-bold text-white hidden sm:block">$69</p>
              </div>
            </div>

            {/* Center Image */}
            <div className="lg:col-span-3 md:col-span-5 order-1 lg:order-2">
              <div className="relative mx-auto max-w-lg">
                <img 
                  src="https://cdn.shopify.com/s/files/1/0562/5505/3986/files/Center_Image.png?v=1750269565"
                  alt="Family using Mindsight lockbox for better connection"
                  className="w-full h-auto rounded-xl shadow-lg"
                />
                
                {/* Comparison Table Overlay - Improved Mobile Layout */}
                <div className="absolute -bottom-60 sm:-bottom-80 md:-bottom-72 left-1/2 transform -translate-x-1/2 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden w-full max-w-sm sm:max-w-md md:max-w-lg lg:min-w-max">
                  <div className="grid grid-cols-3 text-xs sm:text-sm">
                    <div className="px-3 sm:px-6 py-3 sm:py-4 bg-gray-50 font-bold text-gray-700 text-center border-b-2 border-gray-200">Feature</div>
                    <div className="px-3 sm:px-6 py-3 sm:py-4 bg-gray-100 font-bold text-gray-600 text-center border-b-2 border-gray-200">Others</div>
                    <div className="px-3 sm:px-6 py-3 sm:py-4 font-bold text-center border-b-2" style={{ backgroundColor: '#fff5f2', color: '#ff6b35', borderColor: '#ff6b35' }}>Mindsight</div>
                    
                    {keyComparisons.map((item, index) => (
                      <React.Fragment key={index}>
                        <div className="px-2 sm:px-6 py-2 sm:py-3 text-gray-800 font-medium text-left border-t border-gray-100 text-xs sm:text-sm">{item.feature}</div>
                        <div className="px-2 sm:px-6 py-2 sm:py-3 text-gray-600 text-center border-t border-gray-100 flex items-center justify-center text-xs sm:text-sm">
                          {item.them === "No" ? <X className="text-red-500" size={16} /> : item.them}
                        </div>
                        <div className="px-2 sm:px-6 py-2 sm:py-3 text-center border-t border-gray-100 flex items-center justify-center text-xs sm:text-sm" style={{ color: '#ff6b35', fontWeight: '700' }}>
                          {item.us === "Yes" ? <Check className="text-green-500" size={16} /> : item.us}
                        </div>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Our Product Info */}
            <div className="lg:col-span-1 text-center lg:text-left order-3 hidden md:block">
              <div className="inline-block">
                 <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto lg:mx-0 mb-3 flex items-center justify-center p-2">
                   <img 
                     src="https://cdn.shopify.com/s/files/1/0562/5505/3986/files/Timed_Lockbox_W_Shadow.png?v=1741265966" 
                     alt="Mindsight Lockbox"
                     className="w-full h-full object-contain"
                   />
                 </div>
                <h4 className="font-semibold text-sm mb-1 hidden sm:block" style={{ color: '#171717' }}>Mindsight</h4>
                <p className="text-lg font-bold text-white hidden sm:block">$30</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom spacing for table - Adjusted for mobile */}
        <div className="mt-60 sm:mt-80 md:mt-72">
        </div>
      </div>
    </section>
  );
};

export default ProductComparison;
