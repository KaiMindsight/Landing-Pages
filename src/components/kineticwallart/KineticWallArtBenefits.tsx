import { Brain, Focus, Heart, Users, Clock, Shield, Battery, Award } from "lucide-react";

const KineticWallArtBenefits = () => {
  return (
    <section className="py-20 px-4" style={{ backgroundColor: '#F1F1F1' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#171717' }}>
            <span style={{ textDecoration: 'underline', textDecorationColor: '#563232' }}>Designed</span> to Transform Your Space and Mind
          </h2>
          <p className="text-xl max-w-3xl mx-auto mb-12" style={{ color: '#888888' }}>
            The Mindsight Kinetic Wall Art combines artistry with mindfulness to create a living sculpture that brings movement, beauty, and calm into your everyday spaces.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
            <div 
              className="rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:opacity-80 transition-colors"
              style={{ backgroundColor: '#563232' }}
            >
              <Brain className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-3" style={{ color: '#171717' }}>Stress Reduction</h3>
            <p className="leading-relaxed" style={{ color: '#171717' }}>The hypnotic motion creates a natural focal point that calms your nervous system.</p>
          </div>

          <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
            <div 
              className="rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:opacity-80 transition-colors"
              style={{ backgroundColor: '#563232' }}
            >
              <Focus className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-3" style={{ color: '#171717' }}>Enhanced Focus</h3>
            <p className="leading-relaxed" style={{ color: '#171717' }}>Use the gentle rhythm as a visual timer or meditation aid to improve concentration.</p>
          </div>

          <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
            <div 
              className="rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:opacity-80 transition-colors"
              style={{ backgroundColor: '#563232' }}
            >
              <Heart className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-3" style={{ color: '#171717' }}>Aesthetic Beauty</h3>
            <p className="leading-relaxed" style={{ color: '#171717' }}>Handcrafted from sustainable wood with natural grain patterns that make each piece unique.</p>
          </div>
        </div>

        {/* Trust Signals */}
        <div className="mt-16">
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-white rounded-full px-6 py-3 shadow-lg border-2" style={{ borderColor: '#563232' }}>
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full" style={{ backgroundColor: '#563232' }}>
                  <Users className="w-4 h-4 text-white" />
                </div>
                <div className="text-2xl font-bold" style={{ color: '#563232' }}>10k+</div>
                <div className="text-sm font-medium" style={{ color: '#171717' }}>Happy Customers</div>
              </div>
            </div>
            
            <div className="bg-white rounded-full px-6 py-3 shadow-lg border-2" style={{ borderColor: '#563232' }}>
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full" style={{ backgroundColor: '#563232' }}>
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <div className="text-2xl font-bold" style={{ color: '#563232' }}>30 Day</div>
                <div className="text-sm font-medium" style={{ color: '#171717' }}>Money Back Guarantee</div>
              </div>
            </div>
            
            <div className="bg-white rounded-full px-6 py-3 shadow-lg border-2" style={{ borderColor: '#563232' }}>
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full" style={{ backgroundColor: '#563232' }}>
                  <Award className="w-4 h-4 text-white" />
                </div>
                <div className="text-2xl font-bold" style={{ color: '#563232' }}>Lifetime</div>
                <div className="text-sm font-medium" style={{ color: '#171717' }}>Warranty</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KineticWallArtBenefits;