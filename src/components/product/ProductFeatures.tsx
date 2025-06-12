
import { Clock, Shield, Smartphone, Brain } from "lucide-react";

const ProductFeatures = () => {
  const features = [
    {
      icon: Clock,
      title: "Timed Lock System",
      description: "Set custom lock durations from 5 minutes to 10 hours. Perfect for study sessions, meals, or sleep."
    },
    {
      icon: Shield,
      title: "Tamper Resistant",
      description: "Secure locking mechanism prevents easy access. Built to withstand the urge to check your device."
    },
    {
      icon: Smartphone,
      title: "Universal Compatibility",
      description: "Fits most smartphones and small devices. Accommodates phones with or without cases."
    },
    {
      icon: Brain,
      title: "Mindful Living",
      description: "Develop healthier habits and improve focus. Reduce anxiety and increase present-moment awareness."
    }
  ];

  return (
    <section className="py-20 px-4" style={{ backgroundColor: '#F8F9FA' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#171717' }}>
            Designed for Your Digital Wellbeing
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#888888' }}>
            Every feature is carefully crafted to help you build a healthier relationship with technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div 
                className="rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: '#5684C4' }}
              >
                <feature.icon className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#171717' }}>
                {feature.title}
              </h3>
              <p className="leading-relaxed" style={{ color: '#888888' }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;
