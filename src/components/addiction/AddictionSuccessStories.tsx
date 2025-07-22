import { Star, Quote, Heart, Calendar, TrendingUp, Users } from "lucide-react";
import { useState } from "react";

const AddictionSuccessStories = () => {
  const [activeStory, setActiveStory] = useState(0);

  const successStories = [
    {
      name: "Sarah M.",
      age: 34,
      addiction: "Smoking",
      timeClean: "8 months",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      story: "I tried everything to quit smoking - patches, gum, apps. Nothing worked until I got the Mindsight Lockbox. Being able to physically lock away my cigarettes when cravings hit was a game-changer. I'm now 8 months smoke-free and feel amazing.",
      beforeAfter: {
        before: "2 packs a day for 15 years",
        after: "Completely smoke-free"
      },
      keyMoment: "Day 3 was the hardest. I wanted to smoke so badly, but my cigarettes were locked away for 2 more hours. By the time the box opened, the craving had passed."
    },
    {
      name: "Michael R.",
      age: 28,
      addiction: "Alcohol",
      timeClean: "6 months",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      story: "Recovery felt impossible until I found a way to create physical distance from alcohol. The lockbox helped me get through those critical first weeks. Now I use it for my credit cards when I feel tempted to buy alcohol.",
      beforeAfter: {
        before: "Drinking daily, lost my job",
        after: "6 months sober, new career"
      },
      keyMoment: "Week 2 was when I realized this was actually working. For the first time in years, I made it through a weekend without drinking."
    },
    {
      name: "Jessica L.",
      age: 42,
      addiction: "Shopping/Spending",
      timeClean: "4 months",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      story: "My compulsive spending was destroying my family's finances. I lock my credit cards in the Mindsight box every evening and weekend. It's given me the pause I needed to break the impulse buying cycle.",
      beforeAfter: {
        before: "$50k in credit card debt",
        after: "Paid off $15k, budget on track"
      },
      keyMoment: "The first time I wanted to buy something online and couldn't access my cards, I realized how automatic my spending had become."
    },
    {
      name: "David K.",
      age: 39,
      addiction: "Vaping",
      timeClean: "3 months",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      story: "I was vaping constantly - at work, at home, even waking up at night to vape. The lockbox helped me create vape-free zones and times. I started with just 2-hour locks and worked my way up. Now I'm completely vape-free.",
      beforeAfter: {
        before: "Vaping every 15 minutes",
        after: "3 months completely vape-free"
      },
      keyMoment: "When I realized I could go 4 hours without even thinking about vaping, I knew I was getting my life back."
    }
  ];

  const stats = [
    { number: "87%", label: "Success Rate", description: "Users who stay clean for 30+ days" },
    { number: "156", label: "Days Average", description: "Time to break addiction cycle" },
    { number: "92%", label: "Recommend", description: "Would recommend to others" },
    { number: "$2,847", label: "Money Saved", description: "Average savings in first year" }
  ];

  return (
    <section className="py-20 px-4" style={{ backgroundColor: '#171717' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Real People, Real Recovery
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            These are real stories from people who broke free from addiction using the Mindsight Lockbox. Your story could be next.
          </p>
        </div>

        {/* Success Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
              <div className="text-4xl font-bold mb-2" style={{ color: '#ff6b35' }}>
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-white mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-gray-400">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Story Navigation */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-6">Success Stories</h3>
            <div className="space-y-4">
              {successStories.map((story, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStory(index)}
                  className={`w-full p-4 rounded-xl text-left transition-all duration-300 border-2 ${
                    activeStory === index 
                      ? 'bg-white/10 border-orange-500' 
                      : 'bg-white/5 border-white/10 hover:bg-white/8'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <img 
                      src={story.image}
                      alt={story.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="font-semibold text-white">{story.name}</div>
                      <div className="text-sm text-gray-400">{story.addiction} • {story.timeClean} clean</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Active Story Details */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={successStories[activeStory].image}
                  alt={successStories[activeStory].name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-2xl font-bold" style={{ color: '#171717' }}>
                    {successStories[activeStory].name}
                  </h3>
                  <div className="flex items-center gap-4 text-gray-600">
                    <span>Age {successStories[activeStory].age}</span>
                    <span>•</span>
                    <span>{successStories[activeStory].addiction} Recovery</span>
                    <span>•</span>
                    <span className="font-semibold" style={{ color: '#10b981' }}>
                      {successStories[activeStory].timeClean} clean
                    </span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <Quote className="w-8 h-8 text-gray-300 mb-4" />
                <p className="text-lg leading-relaxed" style={{ color: '#666666' }}>
                  {successStories[activeStory].story}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="p-4 bg-red-50 rounded-xl border border-red-200">
                  <h4 className="font-semibold text-red-800 mb-2">Before</h4>
                  <p className="text-red-700">{successStories[activeStory].beforeAfter.before}</p>
                </div>
                <div className="p-4 bg-green-50 rounded-xl border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">After</h4>
                  <p className="text-green-700">{successStories[activeStory].beforeAfter.after}</p>
                </div>
              </div>

              <div className="p-4 bg-blue-50 rounded-xl border border-blue-200 mb-6">
                <h4 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  Key Moment
                </h4>
                <p className="text-blue-700 italic">
                  "{successStories[activeStory].keyMoment}"
                </p>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-2 text-gray-600">Verified Recovery Story</span>
                </div>
                <button 
                  className="px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:transform hover:scale-105 btn-orange"
                  onClick={() => window.open('https://mindsightnow.com/cart/43571017711778:1?discount=LOCKIT25', '_blank')}
                >
                  Start Your Story
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddictionSuccessStories;