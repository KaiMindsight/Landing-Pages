import { Sunrise, Brain, Shield, Heart, RefreshCw, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const AddictionMotivation = () => {
  const [currentTip, setCurrentTip] = useState(0);
  const [currentAffirmation, setCurrentAffirmation] = useState(0);

  const dailyTips = [
    {
      title: "Start Your Day with Intention",
      tip: "Each morning, set a clear intention for staying clean. Write it down and put it where you'll see it throughout the day.",
      icon: <Sunrise className="w-6 h-6" />,
      category: "Morning Routine"
    },
    {
      title: "Use the 5-Minute Rule",
      tip: "When cravings hit, tell yourself you'll wait just 5 minutes. Often, the craving will pass. If not, wait another 5 minutes.",
      icon: <Brain className="w-6 h-6" />,
      category: "Craving Management"
    },
    {
      title: "Create Physical Barriers",
      tip: "Use your lockbox to create distance between you and triggers. The physical act of locking something away reinforces your commitment.",
      icon: <Shield className="w-6 h-6" />,
      category: "Practical Strategy"
    },
    {
      title: "Practice Self-Compassion",
      tip: "Recovery isn't linear. If you slip up, treat yourself with the same kindness you'd show a good friend. Get back on track without self-judgment.",
      icon: <Heart className="w-6 h-6" />,
      category: "Mindset"
    },
    {
      title: "Replace the Habit",
      tip: "When you feel the urge to engage in addictive behavior, immediately do something else: take a walk, call a friend, or practice deep breathing.",
      icon: <RefreshCw className="w-6 h-6" />,
      category: "Habit Replacement"
    },
    {
      title: "Celebrate Small Wins",
      tip: "Acknowledge every victory, no matter how small. Made it through one hour? That's worth celebrating. One day? Even better.",
      icon: <Star className="w-6 h-6" />,
      category: "Motivation"
    }
  ];

  const affirmations = [
    "I am stronger than my addiction.",
    "Every moment I choose recovery, I choose myself.",
    "I have the power to change my life.",
    "My past does not define my future.",
    "I am worthy of a healthy, fulfilling life.",
    "Each day clean is a victory I can be proud of.",
    "I choose progress over perfection.",
    "I am building the life I truly want.",
    "My recovery journey is unique and valuable.",
    "I have everything I need within me to succeed."
  ];

  const recoveryQuotes = [
    {
      quote: "Recovery is not a race. You don't have to feel guilty if it takes you longer than you thought it would.",
      author: "Unknown"
    },
    {
      quote: "The greatest revolution of our generation is the discovery that human beings, by changing the inner attitudes of their minds, can change the outer aspects of their lives.",
      author: "William James"
    },
    {
      quote: "You are not your addiction. You are not your disease. You are a human being with infinite potential.",
      author: "Recovery Wisdom"
    },
    {
      quote: "Every day you choose recovery is a day you choose to live.",
      author: "Recovery Community"
    }
  ];

  const nextTip = () => {
    setCurrentTip((prev) => (prev + 1) % dailyTips.length);
  };

  const prevTip = () => {
    setCurrentTip((prev) => (prev - 1 + dailyTips.length) % dailyTips.length);
  };

  // Auto-rotate affirmations
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAffirmation((prev) => (prev + 1) % affirmations.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-4" style={{ backgroundColor: '#fef7ff' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#171717' }}>
            Daily Recovery Support
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#666666' }}>
            Practical tips, daily affirmations, and motivational support to keep you strong on your recovery journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Daily Tips Section */}
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold" style={{ color: '#171717' }}>Daily Recovery Tip</h3>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={prevTip}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5 text-gray-600" />
                  </button>
                  <span className="text-sm text-gray-500">{currentTip + 1} / {dailyTips.length}</span>
                  <button 
                    onClick={nextTip}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  >
                    <ChevronRight className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                    {dailyTips[currentTip].icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold" style={{ color: '#171717' }}>
                      {dailyTips[currentTip].title}
                    </h4>
                    <span className="text-sm px-3 py-1 bg-purple-100 text-purple-700 rounded-full">
                      {dailyTips[currentTip].category}
                    </span>
                  </div>
                </div>
                
                <p className="text-lg leading-relaxed" style={{ color: '#666666' }}>
                  {dailyTips[currentTip].tip}
                </p>
              </div>
            </div>

            {/* Affirmations */}
            <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6">Daily Affirmation</h3>
                <div className="text-center">
                  <p className="text-2xl font-medium leading-relaxed mb-4 min-h-[3rem] flex items-center justify-center">
                    "{affirmations[currentAffirmation]}"
                  </p>
                  <div className="flex justify-center gap-2">
                    {affirmations.map((_, index) => (
                      <div 
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentAffirmation ? 'bg-white' : 'bg-white/30'
                        }`}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Inspirational Quotes & Emergency Support */}
          <div className="space-y-8">
            {/* Quotes */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              <h3 className="text-2xl font-bold mb-6" style={{ color: '#171717' }}>Words of Wisdom</h3>
              <div className="space-y-6">
                {recoveryQuotes.map((quote, index) => (
                  <div key={index} className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                    <p className="text-lg italic mb-3" style={{ color: '#666666' }}>
                      "{quote.quote}"
                    </p>
                    <p className="text-sm font-semibold" style={{ color: '#171717' }}>— {quote.author}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Emergency Support */}
            <div className="bg-red-50 rounded-3xl p-8 border-2 border-red-200">
              <h3 className="text-2xl font-bold mb-4 text-red-800">Need Immediate Support?</h3>
              <p className="text-lg mb-6 text-red-700">
                If you're struggling with intense cravings or thoughts of relapse, reach out for help immediately.
              </p>
              
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-xl border border-red-200">
                  <h4 className="font-bold text-red-800 mb-2">Crisis Hotlines</h4>
                  <div className="space-y-2 text-red-700">
                    <div>SAMHSA National Helpline: <span className="font-mono">1-800-662-4357</span></div>
                    <div>Crisis Text Line: Text HOME to <span className="font-mono">741741</span></div>
                  </div>
                </div>
                
                <div className="p-4 bg-white rounded-xl border border-red-200">
                  <h4 className="font-bold text-red-800 mb-2">Quick Coping Strategies</h4>
                  <ul className="list-disc list-inside space-y-1 text-red-700">
                    <li>Use your lockbox immediately</li>
                    <li>Call a trusted friend or sponsor</li>
                    <li>Practice deep breathing for 5 minutes</li>
                    <li>Go for a walk or do physical exercise</li>
                    <li>Remember: This feeling will pass</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-3xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Your Recovery Toolkit</h3>
              <p className="text-lg mb-6 opacity-90">
                The Mindsight Lockbox is more than a tool—it's your partner in recovery.
              </p>
              <button 
                className="px-8 py-4 bg-white text-green-600 rounded-xl font-semibold text-lg transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg"
                onClick={() => window.open('https://mindsightnow.com/cart/43571017711778:1?discount=LOCKIT25', '_blank')}
              >
                Start Your Recovery - $30
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddictionMotivation;