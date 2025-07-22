import { Clock, Shield, Battery, Brain, Heart, Target } from "lucide-react";

const AddictionFeatures = () => {
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
            <h3 className="text-lg font-medium mb-8 tracking-wide">Addiction Recovery Research Results</h3>
            
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <div className="text-6xl font-bold mb-2">87%</div>
                <div className="text-lg leading-tight">Participants experienced reduced cravings with physical barriers to access</div>
              </div>
              
              <div>
                <div className="text-6xl font-bold mb-2">32%</div>
                <div className="text-lg leading-tight">Reduction in relapse rates within first month of recovery</div>
              </div>
              
              <div>
                <div className="text-6xl font-bold mb-2">68%</div>
                <div className="text-lg leading-tight">Reported better overall well-being and life satisfaction</div>
              </div>
              
              <div>
                <div className="text-6xl font-bold mb-2">79%</div>
                <div className="text-lg leading-tight">Improved ability to maintain recovery goals with physical barriers</div>
              </div>
            </div>
            
            <div className="text-sm opacity-90 leading-relaxed">
              *Results based on randomized controlled trials conducted by universities studying addiction recovery methods. Research published in peer-reviewed medical journals.
            </div>
          </div>

          {/* Right side - Content */}
          <div className="text-white">
            <h2 className="text-4xl font-bold mb-4">
              Clinically Proven.<br/>
              Better Control.<br/>
              A Healthier Life.*
            </h2>
            
            <p className="text-lg mb-8 leading-relaxed opacity-90">
              The Mindsight Timed Lockbox uses evidence-based behavioral intervention principles, 
              proven effective in clinical trials for reducing access to addictive substances and 
              improving recovery outcomes.
            </p>
            
            <div className="space-y-4">
              <button 
                className="text-white px-8 py-4 rounded-full font-bold text-lg btn-orange transition-all duration-300 block w-fit"
                onClick={() => window.open('https://mindsightnow.com/cart/43571017711778:1?discount=LOCKIT25', '_blank')}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddictionFeatures;