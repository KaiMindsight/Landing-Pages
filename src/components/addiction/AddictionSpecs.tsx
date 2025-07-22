import { Calendar, Target, Trophy, Heart, ArrowRight, CheckCircle } from "lucide-react";
import { useState } from "react";

const AddictionSpecs = () => {
  const [selectedDay, setSelectedDay] = useState(1);

  const journeySteps = [
    {
      day: 1,
      title: "Day 1: Take Control",
      description: "Lock away your triggers and start your recovery journey. The hardest step is the first one.",
      milestone: "First Step Taken",
      color: "#ff6b35",
      benefits: ["Reduced immediate access to triggers", "Commitment to change", "Breaking the automatic response"]
    },
    {
      day: 7,
      title: "Week 1: Building Momentum",
      description: "Your brain starts adapting to new patterns. Cravings may still be strong, but you're building resilience.",
      milestone: "First Week Complete",
      color: "#5684C4",
      benefits: ["Improved sleep quality", "Reduced anxiety", "Increased self-confidence"]
    },
    {
      day: 30,
      title: "Month 1: New Habits",
      description: "Significant neuroplasticity changes occur. Your brain is rewiring itself for healthier patterns.",
      milestone: "30-Day Milestone",
      color: "#10b981",
      benefits: ["Better mood regulation", "Improved relationships", "Increased energy levels"]
    },
    {
      day: 90,
      title: "3 Months: Transformation",
      description: "Major psychological and physical improvements. You've built a strong foundation for lasting recovery.",
      milestone: "Recovery Milestone",
      color: "#8b5cf6",
      benefits: ["Stable mood patterns", "Restored self-esteem", "Clear thinking and focus"]
    }
  ];

  const selectedStep = journeySteps.find(step => step.day === selectedDay) || journeySteps[0];

  return (
    <section className="py-20 px-4" style={{ backgroundColor: '#F1F1F1' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#171717' }}>
            Your Recovery Journey
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#888888' }}>
            See how the Mindsight Lockbox supports you through each milestone of your healing journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Timeline Navigation */}
          <div className="space-y-6">
            {journeySteps.map((step, index) => (
              <div key={step.day} className="relative">
                <button
                  onClick={() => setSelectedDay(step.day)}
                  className={`w-full text-left p-6 rounded-2xl border-2 transition-all duration-300 hover:shadow-lg ${
                    selectedDay === step.day ? 'shadow-xl transform scale-105' : 'hover:transform hover:scale-102'
                  }`}
                  style={{
                    backgroundColor: selectedDay === step.day ? step.color : '#ffffff',
                    borderColor: step.color,
                    color: selectedDay === step.day ? '#ffffff' : '#171717'
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg"
                      style={{
                        backgroundColor: selectedDay === step.day ? 'rgba(255,255,255,0.2)' : step.color,
                        color: selectedDay === step.day ? '#ffffff' : '#ffffff'
                      }}
                    >
                      {step.day === 1 ? <Target className="w-6 h-6" /> :
                       step.day === 7 ? <Calendar className="w-6 h-6" /> :
                       step.day === 30 ? <Heart className="w-6 h-6" /> :
                       <Trophy className="w-6 h-6" />}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-1">{step.title}</h3>
                      <p className={`text-sm opacity-90 ${selectedDay === step.day ? 'text-white' : 'text-gray-600'}`}>
                        {step.milestone}
                      </p>
                    </div>
                    <ArrowRight className={`w-5 h-5 transition-transform ${
                      selectedDay === step.day ? 'transform rotate-90' : ''
                    }`} />
                  </div>
                </button>
              </div>
            ))}
          </div>

          {/* Selected Step Details */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
            <div className="mb-6">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: selectedStep.color }}
              >
                {selectedStep.day === 1 ? <Target className="w-8 h-8 text-white" /> :
                 selectedStep.day === 7 ? <Calendar className="w-8 h-8 text-white" /> :
                 selectedStep.day === 30 ? <Heart className="w-8 h-8 text-white" /> :
                 <Trophy className="w-8 h-8 text-white" />}
              </div>
              <h3 className="text-2xl font-bold mb-3" style={{ color: '#171717' }}>
                {selectedStep.title}
              </h3>
              <p className="text-lg leading-relaxed" style={{ color: '#666666' }}>
                {selectedStep.description}
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold" style={{ color: '#171717' }}>Benefits You'll Experience:</h4>
              <div className="space-y-3">
                {selectedStep.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span style={{ color: '#666666' }}>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100">
               <button 
                 className="w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 hover:transform hover:scale-105 bg-gradient-to-r from-orange-500 to-red-500 text-white hover:shadow-lg"
                 onClick={() => window.open('https://mindsightnow.com/cart/43571017711778:1?discount=LOCKIT25', '_blank')}
               >
                 Buy Now - $30.00
               </button>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddictionSpecs;