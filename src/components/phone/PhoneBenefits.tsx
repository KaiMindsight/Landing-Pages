import { Brain, Focus, Heart, Users, Clock, Shield, Battery } from "lucide-react";

const PhoneBenefits = () => {
  return (
    <section className="py-20 px-4" style={{ backgroundColor: '#F1F1F1' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#171717' }}>
            <span style={{ textDecoration: 'underline', textDecorationColor: '#5684C4' }}>Designed</span> to Help You Break Habits
          </h2>
          <p className="text-xl max-w-3xl mx-auto mb-12" style={{ color: '#888888' }}>
            The Mindsight Timed Lockbox is a simple, effective tool that creates a physical barrier between you and your phone. Set your timer, lock your device away, and rediscover life without constant digital distractions.
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
            <h3 className="text-xl font-semibold mb-3" style={{ color: '#171717' }}>Set Your Timer</h3>
            <p className="leading-relaxed" style={{ color: '#171717' }}>Choose from 1 minute to 30 days. Perfect for study sessions, family time, or breaking scrolling habits.</p>
          </div>

          <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
            <div 
              className="rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:opacity-80 transition-colors"
              style={{ backgroundColor: '#5684C4' }}
            >
              <Shield className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-3" style={{ color: '#171717' }}>Lock It Away</h3>
            <p className="leading-relaxed" style={{ color: '#171717' }}>Three willpower modes: Standard for flexibility, or Fortress Mode for complete phone separation during important tasks.</p>
          </div>

          <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
            <div 
              className="rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:opacity-80 transition-colors"
              style={{ backgroundColor: '#5684C4' }}
            >
              <Battery className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-3" style={{ color: '#171717' }}>Stay Charged</h3>
            <p className="leading-relaxed" style={{ color: '#171717' }}>Built-in charging slot keeps your phone powered while locked away. Wake up to a fully charged, distraction-free morning.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhoneBenefits;
