
import { Brain, Focus, Heart, Users } from "lucide-react";

const SmokingBenefits = () => {
  return (
    <section className="py-20 px-4" style={{ backgroundColor: '#F1F1F1' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#171717' }}>
            Transform Your Health, One Lock at a Time
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#888888' }}>
            Break free from smoking addiction and discover the immediate and long-term 
            health benefits of a smoke-free lifestyle.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="rounded-full p-3" style={{ backgroundColor: '#5684C4' }}>
                  <Focus className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: '#171717' }}>Break the Trigger Cycle</h3>
                  <p style={{ color: '#171717' }}>Cravings typically last 3-5 minutes. Lock away cigarettes/vapes to ride out the urge and break automatic responses.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-full p-3" style={{ backgroundColor: '#5684C4' }}>
                  <Brain className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: '#171717' }}>Gradual Habit Change</h3>
                  <p style={{ color: '#171717' }}>Start with short lock periods and gradually increase duration. Build new neural pathways without going cold turkey.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://cdn.shopify.com/s/files/1/0562/5505/3986/files/Lockbox_Vaping_Photo.jpg?v=1749085786"
              alt="Vaping device locked in Mindsight Lockbox"
              className="rounded-2xl shadow-lg w-full h-auto"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <img 
              src="https://cdn.shopify.com/s/files/1/0562/5505/3986/files/Lockbox_Cigarette_Photo.jpg?v=1749085789"
              alt="Cigarettes locked away for health benefits"
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
                  <h3 className="text-xl font-semibold mb-2" style={{ color: '#171717' }}>Immediate Health Benefits</h3>
                  <p style={{ color: '#171717' }}>Within 20 minutes heart rate drops, within 12 hours CO levels normalize, within 2 weeks circulation improves.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-full p-3" style={{ backgroundColor: '#5684C4' }}>
                  <Users className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: '#171717' }}>Support Your Loved Ones</h3>
                  <p style={{ color: '#171717' }}>Protect family from secondhand smoke and set a positive example. Show commitment to your health and theirs.</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="font-semibold mb-3" style={{ color: '#171717' }}>Quit Smoking Strategies</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#5684C4' }}></div>
                    <span style={{ color: '#171717' }}>Lock cigarettes during trigger times</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#5684C4' }}></div>
                    <span style={{ color: '#171717' }}>Gradual reduction schedule</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#5684C4' }}></div>
                    <span style={{ color: '#171717' }}>Emergency craving support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#5684C4' }}></div>
                    <span style={{ color: '#171717' }}>Building new routines</span>
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

export default SmokingBenefits;
