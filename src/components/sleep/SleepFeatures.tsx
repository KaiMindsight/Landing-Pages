
import { Moon, Clock, Battery } from "lucide-react";

const SleepFeatures = () => {
  const features = [
    {
      icon: Moon,
      title: "Bedtime Ritual Builder",
      description: "Set your phone to lock 1-2 hours before bedtime. Create a peaceful evening routine without digital distractions."
    },
    {
      icon: Clock,
      title: "Morning Delay Timer",
      description: "Lock your phone overnight and delay morning access. Start your day mindfully instead of immediately scrolling."
    },
    {
      icon: Battery,
      title: "Charge While You Sleep",
      description: "Built-in charging slot keeps your phone powered up as your alarm while staying locked away from late-night temptation."
    }
  ];

  return (
    <section className="py-20 px-4" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#171717' }}>
            Designed for Better Sleep Hygiene
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#888888' }}>
            The Mindsight Timed Lockbox helps you build healthy sleep habits by 
            removing the biggest barrier to quality rest: your smartphone.
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

export default SleepFeatures;
