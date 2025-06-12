
import { Brain, Focus, Heart, Users } from "lucide-react";

const SleepBenefits = () => {
  return (
    <section className="py-20 px-4" style={{ backgroundColor: '#F1F1F1' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#171717' }}>
            The Science of Phone-Free Sleep
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#888888' }}>
            Research shows that removing phones from the bedroom significantly 
            improves sleep quality, duration, and overall well-being.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="rounded-full p-3" style={{ backgroundColor: '#5684C4' }}>
                  <Brain className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: '#171717' }}>Reduce Blue Light Exposure</h3>
                  <p style={{ color: '#171717' }}>Blue light suppresses melatonin production by up to 50%. Lock your phone away 1-2 hours before bed for better sleep onset.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-full p-3" style={{ backgroundColor: '#5684C4' }}>
                  <Focus className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: '#171717' }}>Stop Stress-Inducing Content</h3>
                  <p style={{ color: '#171717' }}>Avoid late-night news, emails, or social media that can trigger cortisol and keep your mind racing when you should be winding down.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Peaceful bedroom environment for better sleep"
              className="rounded-2xl shadow-lg w-full h-auto"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <img 
              src="https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Morning routine without phone distractions"
              className="rounded-2xl shadow-lg w-full h-auto"
            />
          </div>

          <div className="order-1 lg:order-2">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="rounded-full p-3" style={{ backgroundColor: '#5684C4' }}>
                  <Heart className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: '#171717' }}>Improve Sleep Quality</h3>
                  <p style={{ color: '#171717' }}>Studies show phone-free bedrooms lead to 37% better sleep quality and 23 more minutes of sleep per night.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-full p-3" style={{ backgroundColor: '#5684C4' }}>
                  <Users className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: '#171717' }}>Mindful Morning Routine</h3>
                  <p style={{ color: '#171717' }}>Start your day with intention instead of immediately checking notifications. Create space for meditation, exercise, or journaling.</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="font-semibold mb-3" style={{ color: '#171717' }}>Sleep Optimization Benefits</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#5684C4' }}></div>
                    <span style={{ color: '#171717' }}>Faster sleep onset (fall asleep 23% quicker)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#5684C4' }}></div>
                    <span style={{ color: '#171717' }}>Deeper REM sleep cycles</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#5684C4' }}></div>
                    <span style={{ color: '#171717' }}>Reduced morning grogginess</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#5684C4' }}></div>
                    <span style={{ color: '#171717' }}>Improved mood and energy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SleepBenefits;
