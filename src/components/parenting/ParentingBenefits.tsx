
import { Brain, Focus, Heart, Users } from "lucide-react";

const ParentingBenefits = () => {
  return (
    <section className="py-20 px-4" style={{ backgroundColor: '#F1F1F1' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#171717' }}>
            Strengthen Family Bonds Through Intentional Technology Use
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#888888' }}>
            Research shows that device-free family time significantly improves 
            parent-child relationships, communication, and children's emotional development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="rounded-full p-3" style={{ backgroundColor: '#5684C4' }}>
                  <Heart className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: '#171717' }}>Deeper Family Conversations</h3>
                  <p style={{ color: '#171717' }}>Device-free dinners increase meaningful family conversation by 68%. Create space for your children to share their thoughts and feelings.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-full p-3" style={{ backgroundColor: '#5684C4' }}>
                  <Focus className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: '#171717' }}>Present Parenting</h3>
                  <p style={{ color: '#171717' }}>Be fully engaged during homework help, bedtime stories, and play time. Your undivided attention builds stronger emotional connections.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1501286353178-1ec881214838?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Parent and child engaged in quality time together"
              className="rounded-2xl shadow-lg w-full h-auto"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <img 
              src="https://cdn.shopify.com/s/files/1/0562/5505/3986/files/Lockbox_Family_Photo.jpg?v=1749086207"
              alt="Family using Mindsight Lockbox together"
              className="rounded-2xl shadow-lg w-full h-auto"
            />
          </div>

          <div className="order-1 lg:order-2">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="rounded-full p-3" style={{ backgroundColor: '#5684C4' }}>
                  <Brain className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: '#171717' }}>Teaching Digital Wisdom</h3>
                  <p style={{ color: '#171717' }}>Model healthy tech boundaries for your children. When they see you choosing presence over phones, they learn valuable life skills.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-full p-3" style={{ backgroundColor: '#5684C4' }}>
                  <Users className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: '#171717' }}>Family Team Building</h3>
                  <p style={{ color: '#171717' }}>Create shared experiences and memories. Board games, outdoor activities, and creative projects become more engaging without digital distractions.</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="font-semibold mb-3" style={{ color: '#171717' }}>Parenting Benefits</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#5684C4' }}></div>
                    <span style={{ color: '#171717' }}>Increased family conversation quality</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#5684C4' }}></div>
                    <span style={{ color: '#171717' }}>Better emotional connection with children</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#5684C4' }}></div>
                    <span style={{ color: '#171717' }}>Teaching healthy screen boundaries</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#5684C4' }}></div>
                    <span style={{ color: '#171717' }}>Creating lasting family memories</span>
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

export default ParentingBenefits;
