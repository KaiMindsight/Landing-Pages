import { Book, Users, Phone, Globe, Download, ExternalLink, Clock, MapPin, Video, MessageCircle } from "lucide-react";
import { useState } from "react";

const AddictionResources = () => {
  const [activeTab, setActiveTab] = useState('support');

  const supportGroups = [
    {
      name: "Alcoholics Anonymous (AA)",
      description: "12-step program for alcohol addiction recovery",
      website: "aa.org",
      type: "In-person & Online",
      availability: "24/7",
      icon: <Users className="w-6 h-6" />
    },
    {
      name: "Narcotics Anonymous (NA)",
      description: "12-step program for drug addiction recovery",
      website: "na.org",
      type: "In-person & Online",
      availability: "24/7",
      icon: <Users className="w-6 h-6" />
    },
    {
      name: "SMART Recovery",
      description: "Science-based addiction recovery support",
      website: "smartrecovery.org",
      type: "In-person & Online",
      availability: "Multiple times daily",
      icon: <Users className="w-6 h-6" />
    },
    {
      name: "Refuge Recovery",
      description: "Buddhist-inspired recovery community",
      website: "refugerecovery.org",
      type: "In-person & Online",
      availability: "Daily meetings",
      icon: <Users className="w-6 h-6" />
    }
  ];

  const emergencyResources = [
    {
      name: "SAMHSA National Helpline",
      number: "1-800-662-4357",
      description: "Free, confidential treatment referral service",
      availability: "24/7, 365 days",
      languages: "English & Spanish",
      icon: <Phone className="w-6 h-6" />
    },
    {
      name: "Crisis Text Line",
      number: "Text HOME to 741741",
      description: "Free crisis support via text message",
      availability: "24/7",
      languages: "English",
      icon: <MessageCircle className="w-6 h-6" />
    },
    {
      name: "National Suicide Prevention Lifeline",
      number: "988",
      description: "Crisis counseling and suicide prevention",
      availability: "24/7",
      languages: "English & Spanish",
      icon: <Phone className="w-6 h-6" />
    }
  ];

  const educationalResources = [
    {
      title: "Understanding Addiction",
      description: "Learn about the science behind addiction and how it affects the brain",
      type: "Article Series",
      duration: "15-20 min read",
      icon: <Book className="w-6 h-6" />,
      topics: ["Brain Chemistry", "Triggers", "Recovery Process"]
    },
    {
      title: "Relapse Prevention Strategies",
      description: "Practical techniques to identify and manage triggers",
      type: "Interactive Guide",
      duration: "30 min",
      icon: <Book className="w-6 h-6" />,
      topics: ["Trigger Identification", "Coping Skills", "Emergency Plans"]
    },
    {
      title: "Building Healthy Habits",
      description: "Replace addictive behaviors with positive routines",
      type: "Video Course",
      duration: "45 min",
      icon: <Video className="w-6 h-6" />,
      topics: ["Habit Formation", "Routine Building", "Lifestyle Changes"]
    },
    {
      title: "Family & Friends Support Guide",
      description: "How loved ones can support someone in recovery",
      type: "PDF Guide",
      duration: "25 min read",
      icon: <Download className="w-6 h-6" />,
      topics: ["Communication", "Boundaries", "Self-Care"]
    }
  ];

  const onlineTools = [
    {
      name: "Recovery Tracker App",
      description: "Track your progress, mood, and milestones",
      platform: "iOS & Android",
      price: "Free",
      features: ["Daily check-ins", "Progress tracking", "Milestone celebrations"]
    },
    {
      name: "Meditation & Mindfulness",
      description: "Guided meditations specifically for recovery",
      platform: "Web & Mobile",
      price: "Free & Premium",
      features: ["Craving meditations", "Stress relief", "Sleep support"]
    },
    {
      name: "Virtual Support Groups",
      description: "Join online recovery meetings and communities",
      platform: "Web",
      price: "Free",
      features: ["24/7 meetings", "Anonymous participation", "Global community"]
    },
    {
      name: "Recovery Podcasts",
      description: "Inspiring stories and expert advice",
      platform: "All platforms",
      price: "Free",
      features: ["Personal stories", "Expert interviews", "Daily motivation"]
    }
  ];

  const tabs = [
    { id: 'support', label: 'Support Groups', icon: <Users className="w-5 h-5" /> },
    { id: 'emergency', label: 'Emergency Help', icon: <Phone className="w-5 h-5" /> },
    { id: 'education', label: 'Learn & Grow', icon: <Book className="w-5 h-5" /> },
    { id: 'tools', label: 'Digital Tools', icon: <Globe className="w-5 h-5" /> }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#171717' }}>
            Recovery Resources & Support
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#666666' }}>
            Access comprehensive support, educational materials, and tools to strengthen your recovery journey.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-purple-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Support Groups Tab */}
        {activeTab === 'support' && (
          <div className="grid md:grid-cols-2 gap-8">
            {supportGroups.map((group, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600">
                    {group.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2" style={{ color: '#171717' }}>{group.name}</h3>
                    <p className="text-gray-600 mb-4">{group.description}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{group.type}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{group.availability}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{group.website}</span>
                  </div>
                </div>
                
                <button className="w-full mt-6 px-6 py-3 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 transition-colors flex items-center justify-center gap-2">
                  Find Meetings
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Emergency Help Tab */}
        {activeTab === 'emergency' && (
          <div className="space-y-8">
            <div className="bg-red-50 border-2 border-red-200 rounded-3xl p-8 text-center">
              <h3 className="text-2xl font-bold text-red-800 mb-4">Crisis Support Available 24/7</h3>
              <p className="text-lg text-red-700 mb-6">
                If you're in immediate danger or having thoughts of self-harm, please reach out for help right away.
              </p>
            </div>
            
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
              {emergencyResources.map((resource, index) => (
                <div key={index} className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-red-600">
                      {resource.icon}
                    </div>
                    <h3 className="text-xl font-bold" style={{ color: '#171717' }}>{resource.name}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="text-2xl font-bold text-red-600">{resource.number}</div>
                    <p className="text-gray-600">{resource.description}</p>
                    
                    <div className="space-y-2 text-sm text-gray-500">
                      <div><strong>Available:</strong> {resource.availability}</div>
                      <div><strong>Languages:</strong> {resource.languages}</div>
                    </div>
                  </div>
                  
                  <button className="w-full mt-6 px-6 py-3 bg-red-600 text-white rounded-xl font-semibold hover:bg-red-700 transition-colors">
                    Call Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education Tab */}
        {activeTab === 'education' && (
          <div className="grid md:grid-cols-2 gap-8">
            {educationalResources.map((resource, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                    {resource.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2" style={{ color: '#171717' }}>{resource.title}</h3>
                    <p className="text-gray-600 mb-4">{resource.description}</p>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-sm px-3 py-1 bg-blue-100 text-blue-700 rounded-full">{resource.type}</span>
                    <span className="text-sm text-gray-500">{resource.duration}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {resource.topics.map((topic, topicIndex) => (
                      <span key={topicIndex} className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                  Access Resource
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Digital Tools Tab */}
        {activeTab === 'tools' && (
          <div className="grid md:grid-cols-2 gap-8">
            {onlineTools.map((tool, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#171717' }}>{tool.name}</h3>
                  <p className="text-gray-600 mb-4">{tool.description}</p>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span><strong>Platform:</strong> {tool.platform}</span>
                    <span><strong>Price:</strong> {tool.price}</span>
                  </div>
                </div>
                
                <div className="space-y-2 mb-6">
                  <h4 className="font-semibold text-gray-700">Key Features:</h4>
                  <ul className="space-y-1">
                    {tool.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-600 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="w-full px-6 py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
                  Get Started
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Your Recovery Journey Starts Today</h3>
          <p className="text-xl mb-8 opacity-90">
            Combine these resources with the Mindsight Lockbox for a comprehensive recovery toolkit.
          </p>
          <button 
            className="px-8 py-4 bg-white text-purple-600 rounded-xl font-semibold text-lg transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg"
            onClick={() => window.open('https://mindsightnow.com/cart/43571017711778:1?discount=LOCKIT25', '_blank')}
          >
            Get Your Lockbox - $30
          </button>
        </div>
      </div>
    </section>
  );
};

export default AddictionResources;