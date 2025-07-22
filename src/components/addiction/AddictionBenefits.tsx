import { Brain, Focus, Heart, Users, Clock, Shield, Battery, Award } from "lucide-react";

const AddictionBenefits = () => {
  return (
    <section className="py-20 px-4" style={{ backgroundColor: '#F1F1F1' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#171717' }}>
            <span style={{ textDecoration: 'underline', textDecorationColor: '#5684C4' }}>Designed</span> to Help You Break Free From Addiction
          </h2>
          <p className="text-xl max-w-3xl mx-auto mb-12" style={{ color: '#888888' }}>
            The Mindsight Timed Lockbox is a simple, effective tool that creates a physical barrier between you and your triggers. Set your timer, lock your temptations away, and rediscover life without constant cravings and urges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
            <div 
              className="rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:opacity-80 transition-colors"
              style={{ backgroundColor: '#5684C4' }}
            >
              <Clock className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-3" style={{ color: '#171717' }}>Break the Addiction Cycle</h3>
            <p className="leading-relaxed" style={{ color: '#171717' }}>Lock away triggers when willpower isn't enough.</p>
          </div>

          <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
            <div 
              className="rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:opacity-80 transition-colors"
              style={{ backgroundColor: '#5684C4' }}
            >
              <Shield className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-3" style={{ color: '#171717' }}>Fight Back Against Cravings</h3>
            <p className="leading-relaxed" style={{ color: '#171717' }}>Take control with built-in accountability.</p>
          </div>

          <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
            <div 
              className="rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:opacity-80 transition-colors"
              style={{ backgroundColor: '#5684C4' }}
            >
              <Battery className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-3" style={{ color: '#171717' }}>Set It and Forget It</h3>
            <p className="leading-relaxed" style={{ color: '#171717' }}>Timed lock feature puts your triggers on pause—so you don't have to rely on self-control.</p>
          </div>
        </div>

        {/* Trust Signals */}
        <div className="mt-16">
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-white rounded-full px-6 py-3 shadow-lg border-2" style={{ borderColor: '#5684C4' }}>
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full" style={{ backgroundColor: '#5684C4' }}>
                  <Users className="w-4 h-4 text-white" />
                </div>
                <div className="text-2xl font-bold" style={{ color: '#5684C4' }}>100k</div>
                <div className="text-sm font-medium" style={{ color: '#171717' }}>Happy Customers</div>
              </div>
            </div>
            
            <div className="bg-white rounded-full px-6 py-3 shadow-lg border-2" style={{ borderColor: '#5684C4' }}>
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full" style={{ backgroundColor: '#5684C4' }}>
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <div className="text-2xl font-bold" style={{ color: '#5684C4' }}>30 Day</div>
                <div className="text-sm font-medium" style={{ color: '#171717' }}>Money Back Guarantee</div>
              </div>
            </div>
            
            <div className="bg-white rounded-full px-6 py-3 shadow-lg border-2" style={{ borderColor: '#5684C4' }}>
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full" style={{ backgroundColor: '#5684C4' }}>
                  <Award className="w-4 h-4 text-white" />
                </div>
                <div className="text-2xl font-bold" style={{ color: '#5684C4' }}>Lifetime</div>
                <div className="text-sm font-medium" style={{ color: '#171717' }}>Warranty</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddictionBenefits;