import { Clock, Shield, Battery, Brain, Heart, Target } from "lucide-react";

const PhoneFeatures = () => {
  return (
    <section 
      className="py-20 px-4 relative" 
      style={{ 
        backgroundColor: '#5684C4',
        backgroundImage: 'url(https://cdn.shopify.com/s/files/1/0562/5505/3986/files/Untitled_design_18.png?v=1749702417)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Optional overlay to ensure text readability */}
      <div className="absolute inset-0 bg-blue-600/20"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Statistics */}
          <div className="text-white">
            <h3 className="text-lg font-medium mb-8 tracking-wide">Digital Detox Research Results</h3>
            
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <div className="text-6xl font-bold mb-2">91%</div>
                <div className="text-lg leading-tight">Participants experienced improved mental health after digital detox</div>
              </div>
              
              <div>
                <div className="text-6xl font-bold mb-2">27%</div>
                <div className="text-lg leading-tight">Reduction in depressive symptoms within 3 weeks</div>
              </div>
              
              <div>
                <div className="text-6xl font-bold mb-2">73%</div>
                <div className="text-lg leading-tight">Reported better overall well-being and life satisfaction</div>
              </div>
              
              <div>
                <div className="text-6xl font-bold mb-2">10yr</div>
                <div className="text-lg leading-tight">Cognitive improvement equivalent to being 10 years younger</div>
              </div>
            </div>
            
            <div className="text-sm opacity-90 leading-relaxed">
              *Results based on randomized controlled trials conducted by universities studying smartphone screen time reduction. Research published in peer-reviewed medical journals.
            </div>
          </div>

          {/* Right side - Content */}
          <div className="text-white">
            <h2 className="text-4xl font-bold mb-4">
              Clinically Proven.<br/>
              Better Focus.<br/>
              A Healthier Mind.*
            </h2>
            
            <p className="text-lg mb-8 leading-relaxed opacity-90">
              The Mindsight Timed Lockbox uses evidence-based behavioral intervention principles, 
              proven effective in clinical trials for reducing problematic smartphone use and 
              improving mental health outcomes.
            </p>
            
            <div className="space-y-4">
              <button 
                className="bg-orange-400 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-500 transition-all duration-300 block w-fit"
                onClick={() => window.open('https://mindsightnow.com/cart/43571017711778:1?discount=LOCKIT25', '_blank')}
              >
                ORDER NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhoneFeatures;
