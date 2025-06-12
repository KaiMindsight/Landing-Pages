
import { Clock, Shield, Battery } from "lucide-react";

const SmokingFeatures = () => {
  const features = [
    {
      icon: Clock,
      title: "Gradual Reduction Timer",
      description: "Start with shorter intervals and gradually increase lock times to ease into your quit journey at your own pace."
    },
    {
      icon: Shield,
      title: "Craving Defense System",
      description: "When cravings hit, your cigarettes or vape are safely locked away, giving you time to let the urge pass."
    },
    {
      icon: Battery,
      title: "Reliable Long-Term Use",
      description: "Powered by 2× AA batteries with 6+ months of operation. Perfect for extended quit attempts and maintenance."
    }
  ];

  return (
    <section className="py-20 px-4" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#171717' }}>
            Your Smoking Cessation Companion
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#888888' }}>
            The Mindsight Timed Lockbox provides the physical barrier you need 
            to break smoking habits and support your journey to better health.
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

export default SmokingFeatures;
