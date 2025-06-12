import { Check, X } from "lucide-react";

const ProductComparison = () => {
  const comparisonData = [
    {
      feature: "Timed Lock Mechanism",
      mindsight: true,
      competitor: true,
      mindsightDetail: "1 minute to 30 days timing",
      competitorDetail: "1 minute to 10 days timing"
    },
    {
      feature: "Tamper Resistant Design",
      mindsight: true,
      competitor: true,
      mindsightDetail: "ABS & PP plastic construction",
      competitorDetail: "BPA free materials"
    },
    {
      feature: "Universal Phone Compatibility",
      mindsight: true,
      competitor: false,
      mindsightDetail: "Fits 3-4 phones, multiple device types",
      competitorDetail: "Primarily designed for kitchen items"
    },
    {
      feature: "Emergency Override",
      mindsight: true,
      competitor: false,
      mindsightDetail: "Standard mode includes override code",
      competitorDetail: "No emergency access available"
    },
    {
      feature: "Multiple Lock Modes",
      mindsight: true,
      competitor: false,
      mindsightDetail: "3 modes: Lockbox, Standard, Fortress",
      competitorDetail: "Single timed lock mode only"
    },
    {
      feature: "Charge While Locked",
      mindsight: true,
      competitor: false,
      mindsightDetail: "Built-in cable slot for device charging",
      competitorDetail: "No charging capability"
    },
    {
      feature: "Lifetime Warranty",
      mindsight: true,
      competitor: false,
      mindsightDetail: "Full warranty coverage included",
      competitorDetail: "Limited warranty coverage"
    },
    {
      feature: "Batteries Included",
      mindsight: true,
      competitor: false,
      mindsightDetail: "2x AA batteries, 6+ months life",
      competitorDetail: "Batteries sold separately"
    }
  ];

  return (
    <section 
      className="py-20 px-4 relative" 
      style={{ 
        backgroundColor: '#F8F9FA',
        backgroundImage: 'url(https://cdn.shopify.com/s/files/1/0562/5505/3986/files/2_920fe594-cefa-4aae-ab6c-79a36da6d670.png?v=1749702114)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Optional overlay to ensure content readability */}
      <div className="absolute inset-0 bg-white/10"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#171717' }}>
            Mindsight vs Others
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#888888' }}>
            See how the Mindsight Lockbox compares to other timed lockboxes on the market
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl shadow-2xl">
          {/* Header */}
          <div className="grid grid-cols-3 gap-0">
            <div className="p-6 text-center flex items-center justify-center" style={{ backgroundColor: '#5684C4' }}>
              <h3 className="text-xl font-bold text-white">Features</h3>
            </div>
            <div className="p-6 text-center" style={{ backgroundColor: '#5684C4' }}>
              <div className="w-20 h-20 mx-auto mb-2 rounded-lg flex items-center justify-center bg-white p-1">
                <img 
                  src="https://cdn.shopify.com/s/files/1/0562/5505/3986/files/Timed_Lockbox_W_Shadow.png?v=1741265966" 
                  alt="Mindsight Timed Lockbox"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-lg font-bold text-white">Mindsight Lockbox</h3>
              <p className="text-sm text-blue-100 mt-1">$30.00</p>
            </div>
            <div className="p-6 text-center" style={{ backgroundColor: '#888888' }}>
              <div className="w-20 h-20 mx-auto mb-2 rounded-lg flex items-center justify-center bg-white p-1">
                <img 
                  src="https://cdn.shopify.com/s/files/1/0562/5505/3986/files/Untitled_design_16_36b53ba3-8b23-406d-94fa-7516d5d6da28.png?v=1749673981" 
                  alt="Kitchen Safe Competitor"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-lg font-bold text-white">Others</h3>
              <p className="text-sm text-gray-300 mt-1">$69.00</p>
            </div>
          </div>

          {/* Comparison Rows */}
          {comparisonData.map((item, index) => (
            <div key={index} className="grid grid-cols-3 gap-0 border-b border-gray-200 last:border-b-0">
              <div className="p-6 bg-white flex items-center justify-center">
                <h4 className="font-semibold text-lg text-center" style={{ color: '#171717' }}>
                  {item.feature}
                </h4>
              </div>
              
              <div className="p-6 bg-white border-l border-r border-gray-200 text-center">
                <div className="flex items-center justify-center mb-2">
                  {item.mindsight ? (
                    <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#5684C4' }}>
                      <Check className="w-5 h-5 text-white" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full flex items-center justify-center bg-red-500">
                      <X className="w-5 h-5 text-white" />
                    </div>
                  )}
                </div>
                {item.mindsightDetail && (
                  <p className="text-sm" style={{ color: '#888888' }}>
                    {item.mindsightDetail}
                  </p>
                )}
              </div>
              
              <div className="p-6 bg-gray-50 text-center">
                <div className="flex items-center justify-center mb-2">
                  {item.competitor ? (
                    <div className="w-8 h-8 rounded-full flex items-center justify-center bg-green-500">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full flex items-center justify-center bg-red-500">
                      <X className="w-5 h-5 text-white" />
                    </div>
                  )}
                </div>
                {item.competitorDetail && (
                  <p className="text-sm" style={{ color: '#888888' }}>
                    {item.competitorDetail}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductComparison;
