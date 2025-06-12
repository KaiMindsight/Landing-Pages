
import { Clock, Shield, Battery } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Clock,
      title: "Customizable Timer",
      description: "Set lock durations from 1 minute to 30 days. Take control of your commitment level with flexible timing options."
    },
    {
      icon: Shield,
      title: "Three Willpower Modes",
      description: "Choose from Lockbox Only, Standard Mode with override, or Fortress Mode for maximum discipline."
    },
    {
      icon: Battery,
      title: "Lifetime Warranty",
      description: "Powered by 2× AA batteries with 6+ months of operation. Includes charging slot for devices inside."
    }
  ];

  return (
    <section className="py-20 px-4" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#171717' }}>
            Powerful Features for Better Self-Control
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#888888' }}>
            The Mindsight Timed Lockbox combines cutting-edge technology with thoughtful design 
            to help you build lasting habits and break free from distractions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div 
                className="rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:opacity-80 transition-colors"
                style={{ backgroundColor: '#5684C4' }}
              >
                <feature.icon className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#171717' }}>{feature.title}</h3>
              <p className="leading-relaxed" style={{ color: '#171717' }}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
