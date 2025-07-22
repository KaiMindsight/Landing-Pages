import { Calendar, Clock, DollarSign, Heart, TrendingUp, Award, Target, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";

const AddictionRecoveryTracker = () => {
  const [selectedAddiction, setSelectedAddiction] = useState('smoking');
  const [daysClean, setDaysClean] = useState(30);
  const [isAnimating, setIsAnimating] = useState(false);

  const addictionTypes = {
    smoking: {
      name: 'Smoking',
      dailyCost: 15,
      healthBenefits: [
        { time: '20 minutes', benefit: 'Heart rate and blood pressure drop' },
        { time: '12 hours', benefit: 'Carbon monoxide level normalizes' },
        { time: '2 weeks', benefit: 'Circulation improves, lung function increases' },
        { time: '1 month', benefit: 'Coughing and shortness of breath decrease' },
        { time: '3 months', benefit: 'Risk of heart attack decreases significantly' }
      ],
      milestones: [1, 7, 30, 90, 365]
    },
    alcohol: {
      name: 'Alcohol',
      dailyCost: 25,
      healthBenefits: [
        { time: '24 hours', benefit: 'Body starts detoxifying' },
        { time: '1 week', benefit: 'Better sleep quality, reduced anxiety' },
        { time: '2 weeks', benefit: 'Improved liver function' },
        { time: '1 month', benefit: 'Better skin, weight loss, mental clarity' },
        { time: '3 months', benefit: 'Significant improvement in overall health' }
      ],
      milestones: [1, 7, 30, 90, 365]
    },
    vaping: {
      name: 'Vaping',
      dailyCost: 8,
      healthBenefits: [
        { time: '20 minutes', benefit: 'Nicotine cravings begin to subside' },
        { time: '24 hours', benefit: 'Anxiety peaks then begins to decrease' },
        { time: '3 days', benefit: 'Nicotine completely out of system' },
        { time: '2 weeks', benefit: 'Improved taste and smell' },
        { time: '1 month', benefit: 'Lung function begins to improve' }
      ],
      milestones: [1, 3, 7, 30, 90]
    },
    shopping: {
      name: 'Compulsive Shopping',
      dailyCost: 50,
      healthBenefits: [
        { time: '1 day', benefit: 'Reduced financial anxiety' },
        { time: '1 week', benefit: 'Better sleep, less guilt' },
        { time: '2 weeks', benefit: 'Improved self-control' },
        { time: '1 month', benefit: 'Better financial awareness' },
        { time: '3 months', benefit: 'Significant debt reduction' }
      ],
      milestones: [1, 7, 30, 90, 365]
    }
  };

  const currentAddiction = addictionTypes[selectedAddiction];
  const moneySaved = (daysClean * currentAddiction.dailyCost).toLocaleString();
  const nextMilestone = currentAddiction.milestones.find(milestone => milestone > daysClean) || currentAddiction.milestones[currentAddiction.milestones.length - 1];
  const daysToNextMilestone = Math.max(0, nextMilestone - daysClean);
  const progressPercentage = Math.min(100, (daysClean / nextMilestone) * 100);

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [selectedAddiction, daysClean]);

  return (
    <section className="py-20 px-4" style={{ backgroundColor: '#f0f9ff' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#171717' }}>
            Track Your Recovery Progress
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#666666' }}>
            See the real impact of your recovery journey. Every day clean is a victory worth celebrating.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Controls */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold mb-4" style={{ color: '#171717' }}>Recovery Calculator</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#666666' }}>Addiction Type</label>
                  <select 
                    value={selectedAddiction}
                    onChange={(e) => setSelectedAddiction(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {Object.entries(addictionTypes).map(([key, addiction]) => (
                      <option key={key} value={key}>{addiction.name}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#666666' }}>Days Clean</label>
                  <input 
                    type="range"
                    min="0"
                    max="365"
                    value={daysClean}
                    onChange={(e) => setDaysClean(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>0 days</span>
                    <span className="font-bold" style={{ color: '#171717' }}>{daysClean} days</span>
                    <span>1 year</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Milestones */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-lg font-bold mb-4" style={{ color: '#171717' }}>Quick Milestones</h3>
              <div className="space-y-2">
                {currentAddiction.milestones.map((milestone) => (
                  <button
                    key={milestone}
                    onClick={() => setDaysClean(milestone)}
                    className={`w-full p-3 rounded-lg text-left transition-all duration-300 ${
                      daysClean >= milestone 
                        ? 'bg-green-100 border-green-300 text-green-800' 
                        : 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100'
                    } border`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{milestone} day{milestone !== 1 ? 's' : ''}</span>
                      {daysClean >= milestone && <CheckCircle className="w-5 h-5 text-green-600" />}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Progress Display */}
          <div className="lg:col-span-2 space-y-6">
            {/* Stats Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 transition-all duration-500 ${
                isAnimating ? 'transform scale-105' : ''
              }`}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold" style={{ color: '#171717' }}>{daysClean}</div>
                    <div className="text-sm text-gray-600">Days Clean</div>
                  </div>
                </div>
              </div>

              <div className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 transition-all duration-500 ${
                isAnimating ? 'transform scale-105' : ''
              }`}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold" style={{ color: '#171717' }}>${moneySaved}</div>
                    <div className="text-sm text-gray-600">Money Saved</div>
                  </div>
                </div>
              </div>

              <div className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 transition-all duration-500 ${
                isAnimating ? 'transform scale-105' : ''
              }`}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                    <Target className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold" style={{ color: '#171717' }}>{daysToNextMilestone}</div>
                    <div className="text-sm text-gray-600">Days to Next Goal</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold" style={{ color: '#171717' }}>Progress to {nextMilestone} Days</h3>
                <span className="text-sm font-medium" style={{ color: '#666666' }}>{Math.round(progressPercentage)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
                <div 
                  className="h-4 rounded-full transition-all duration-1000 ease-out"
                  style={{ 
                    width: `${progressPercentage}%`,
                    background: 'linear-gradient(90deg, #10b981 0%, #059669 100%)'
                  }}
                ></div>
              </div>
              <div className="text-center">
                <p className="text-lg font-semibold" style={{ color: '#10b981' }}>
                  {daysClean >= nextMilestone ? '🎉 Milestone Achieved!' : `${daysToNextMilestone} days to go!`}
                </p>
              </div>
            </div>

            {/* Health Benefits */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-lg font-bold mb-4" style={{ color: '#171717' }}>Health Benefits Timeline</h3>
              <div className="space-y-4">
                {currentAddiction.healthBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-green-50 rounded-lg border border-green-200">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <Heart className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-green-800">{benefit.time}</div>
                      <div className="text-green-700">{benefit.benefit}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Recovery Journey?</h3>
              <p className="text-lg mb-6 opacity-90">
                The Mindsight Lockbox can help you achieve these milestones and more.
              </p>
              <button 
                className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold text-lg transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg"
                onClick={() => window.open('https://mindsightnow.com/cart/43571017711778:1?discount=LOCKIT25', '_blank')}
              >
                Get Your Lockbox - $30
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddictionRecoveryTracker;