import { Clock, Shield, Battery, Brain, Heart, Target } from "lucide-react";

const KineticWallArtFeatures = () => {
  return (
    <section 
      className="py-20 px-4 relative" 
      style={{ 
        backgroundColor: '#563232',
        backgroundImage: 'url(https://cdn.shopify.com/s/files/1/0562/5505/3986/files/kinetic-wall-art-bg.jpg?v=1750391581)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Optional overlay to ensure text readability */}
      <div className="absolute inset-0 bg-burgundy-600/20"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Statistics */}
          <div className="text-white">
            <h3 className="text-lg font-medium mb-8 tracking-wide">Mindfulness Research Results</h3>
            
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <div className="text-6xl font-bold mb-2">87%</div>
                <div className="text-lg leading-tight">Users reported reduced stress levels within 15 minutes of viewing</div>
              </div>
              
              <div>
                <div className="text-6xl font-bold mb-2">32%</div>
                <div className="text-lg leading-tight">Improvement in focus and concentration during work sessions</div>
              </div>
              
              <div>
                <div className="text-6xl font-bold mb-2">78%</div>
                <div className="text-lg leading-tight">Reported better overall well-being and reduced anxiety</div>
              </div>
              
              <div>
                <div className="text-6xl font-bold mb-2">12hrs</div>
                <div className="text-lg leading-tight">Continuous motion from a single wind-up, no batteries needed</div>
              </div>
            </div>
            
            <div className="text-sm opacity-90 leading-relaxed">
              *Results based on user surveys and studies on the effects of kinetic art on mental well-being. Independent research conducted on the benefits of mindful observation.
            </div>
          </div>

          {/* Right side - Content */}
          <div className="text-white">
            <h2 className="text-4xl font-bold mb-4">
              Science-Backed.<br/>
              Mindfully Designed.<br/>
              Naturally Calming.*
            </h2>
            
            <p className="text-lg mb-8 leading-relaxed opacity-90">
              The Mindsight Kinetic Wall Art uses principles of mindfulness and attention 
              restoration theory to create a focal point that naturally draws your attention 
              and helps your mind reset from digital fatigue and stress.
            </p>
            
            <div className="space-y-4">
              <button 
                className="text-white px-8 py-4 rounded-full font-bold text-lg btn-orange transition-all duration-300 block w-fit"
                onClick={() => window.open('https://mindsightnow.com/products/kinetic-wall-art', '_blank')}
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

export default KineticWallArtFeatures;