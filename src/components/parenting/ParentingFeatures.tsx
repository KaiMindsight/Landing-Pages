
import { Users, Clock, Heart } from "lucide-react";

const ParentingFeatures = () => {
  const features = [
    {
      icon: Users,
      title: "Family Screen Time Rules",
      description: "Set consistent boundaries for the whole family. Lock away devices during meals, homework time, or family activities."
    },
    {
      icon: Clock,
      title: "Modeling Good Behavior",
      description: "Show your children healthy tech habits by example. When you lock your phone away, they learn the importance of being present."
    },
    {
      icon: Heart,
      title: "Quality Connection Time",
      description: "Create distraction-free moments for meaningful conversations, bedtime stories, and family bonding without device interruptions."
    }
  ];

  return (
    <section className="py-20 px-4" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#171717' }}>
            Building Healthy Family Tech Habits
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#888888' }}>
            The Mindsight Timed Lockbox helps parents create intentional boundaries 
            around technology use, fostering deeper family connections and teaching 
            children valuable digital wellness skills.
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

export default ParentingFeatures;
