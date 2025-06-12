
import { Brain, Focus, Heart, Users } from "lucide-react";

const Benefits = () => {
  return (
    <section className="py-20 px-4" style={{ backgroundColor: '#F1F1F1' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#171717' }}>
            Transform Your Life, One Lock at a Time
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#888888' }}>
            Discover how the Mindsight Timed Lockbox can help you reclaim your focus, 
            build better habits, and create meaningful connections.
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
                  <h3 className="text-xl font-semibold mb-2" style={{ color: '#171717' }}>Enhanced Focus</h3>
                  <p style={{ color: '#171717' }}>Remove distractions and improve concentration during work or study sessions. Studies show 23 minutes to refocus after interruption.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-full p-3" style={{ backgroundColor: '#5684C4' }}>
                  <Brain className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: '#171717' }}>Stronger Self-Control</h3>
                  <p style={{ color: '#171717' }}>Build willpower muscle by resisting impulses. Perfect for managing phone addiction, snacking, or any habit you want to change.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://cdn.shopify.com/s/files/1/0562/5505/3986/files/How_to_Improve_Focus_and_Mental_Clarity_with_a_Timed_Lockbox.png?v=1742237982"
              alt="Person using Mindsight Lockbox for improved focus"
              className="rounded-2xl shadow-lg w-full h-auto"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <img 
              src="https://cdn.shopify.com/s/files/1/0562/5505/3986/files/Timed_Lockbox_In_Use_-_Case_Scenario.png?v=1749005344"
              alt="Mindsight Lockbox in use case scenario"
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
                  <h3 className="text-xl font-semibold mb-2" style={{ color: '#171717' }}>Healthier Habits</h3>
                  <p style={{ color: '#171717' }}>Support the development of routines that prioritize well-being and productivity. Create lasting positive changes.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-full p-3" style={{ backgroundColor: '#5684C4' }}>
                  <Users className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: '#171717' }}>Better Relationships</h3>
                  <p style={{ color: '#171717' }}>Create tech-free times to foster more meaningful interactions with family and friends. Be present in the moment.</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="font-semibold mb-3" style={{ color: '#171717' }}>Popular Use Cases</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#5684C4' }}></div>
                    <span style={{ color: '#171717' }}>Smartphone & social media detox</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#5684C4' }}></div>
                    <span style={{ color: '#171717' }}>Better sleep hygiene</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#5684C4' }}></div>
                    <span style={{ color: '#171717' }}>Study session focus enhancement</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#5684C4' }}></div>
                    <span style={{ color: '#171717' }}>Gaming device time limits</span>
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

export default Benefits;
