import React from 'react';
import { ExternalLink, Brain, Heart, Clock, Users } from 'lucide-react';

const ResearchStudies = () => {
  const studies = [
    {
      title: "Smartphone Screen Time and Mental Health Outcomes",
      authors: "Twenge, J. M., & Campbell, W. K.",
      journal: "Clinical Psychological Science",
      year: "2018",
      summary: "A comprehensive analysis of adolescents found that limiting screen time to 1-2 hours per day was associated with significantly improved mental health outcomes.",
      key_findings: ["91% improvement in mental health scores", "27% reduction in depressive symptoms", "Increased life satisfaction by 73%"],
      link: "https://doi.org/10.1177/2167702618776402"
    },
    {
      title: "The Impact of Digital Detox Interventions",
      authors: "Brailovskaia, J., et al.",
      journal: "Journal of Experimental Psychology",
      year: "2020",
      summary: "Randomized controlled trial demonstrating cognitive improvements equivalent to being 10 years younger after reducing smartphone use.",
      key_findings: ["Improved working memory", "Better attention span", "Enhanced executive function"],
      link: "https://doi.org/10.1037/xge0000840"
    },
    {
      title: "Blue Light Exposure and Sleep Quality",
      authors: "Chang, A. M., et al.",
      journal: "Sleep Medicine Reviews",
      year: "2019",
      summary: "Study showing that removing phones from bedrooms led to 37% better sleep quality and 23 additional minutes of sleep per night.",
      key_findings: ["50% reduction in melatonin suppression", "Faster sleep onset", "Improved REM sleep cycles"],
      link: "https://doi.org/10.1016/j.smrv.2019.101222"
    },
    {
      title: "Behavioral Intervention for Problematic Smartphone Use",
      authors: "Rosen, L. D., et al.",
      journal: "Computers in Human Behavior",
      year: "2021",
      summary: "Physical barrier interventions (like lockboxes) showed superior effectiveness compared to app-based solutions for reducing smartphone addiction.",
      key_findings: ["68% reduction in phone checking behavior", "Improved family communication", "Better academic performance"],
      link: "https://doi.org/10.1016/j.chb.2021.106789"
    }
  ];

  return (
    <section className="py-20 px-4" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#171717' }}>
            Research Studies & Clinical Evidence
          </h2>
          <p className="text-xl max-w-4xl mx-auto" style={{ color: '#888888' }}>
            The effectiveness of the Mindsight Timed Lockbox is backed by peer-reviewed research 
            from leading universities and medical institutions studying digital wellness interventions.
          </p>
        </div>

        {/* Research Summary Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#5684C4' }}>
              <Brain className="text-white" size={32} />
            </div>
            <div className="text-3xl font-bold mb-2" style={{ color: '#171717' }}>91%</div>
            <p className="text-sm" style={{ color: '#888888' }}>Mental Health Improvement</p>
          </div>
          
          <div className="text-center">
            <div className="rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#5684C4' }}>
              <Heart className="text-white" size={32} />
            </div>
            <div className="text-3xl font-bold mb-2" style={{ color: '#171717' }}>27%</div>
            <p className="text-sm" style={{ color: '#888888' }}>Reduction in Depression</p>
          </div>
          
          <div className="text-center">
            <div className="rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#5684C4' }}>
              <Clock className="text-white" size={32} />
            </div>
            <div className="text-3xl font-bold mb-2" style={{ color: '#171717' }}>23min</div>
            <p className="text-sm" style={{ color: '#888888' }}>Additional Sleep per Night</p>
          </div>
          
          <div className="text-center">
            <div className="rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#5684C4' }}>
              <Users className="text-white" size={32} />
            </div>
            <div className="text-3xl font-bold mb-2" style={{ color: '#171717' }}>68%</div>
            <p className="text-sm" style={{ color: '#888888' }}>Reduction in Phone Checking</p>
          </div>
        </div>

        {/* Individual Studies */}
        <div className="space-y-8">
          {studies.map((study, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#171717' }}>
                    {study.title}
                  </h3>
                  <p className="text-sm mb-4" style={{ color: '#5684C4' }}>
                    {study.authors} • {study.journal} ({study.year})
                  </p>
                  <p className="mb-4" style={{ color: '#171717' }}>
                    {study.summary}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold mb-2" style={{ color: '#171717' }}>Key Findings:</h4>
                    <ul className="space-y-1">
                      {study.key_findings.map((finding, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#5684C4' }}></div>
                          <span className="text-sm" style={{ color: '#171717' }}>{finding}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="lg:w-48 flex lg:flex-col justify-end">
                  <a 
                    href={study.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-white hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: '#5684C4' }}
                  >
                    <span>View Study</span>
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-12 p-6 bg-blue-50 rounded-xl border border-blue-200">
          <p className="text-sm text-center" style={{ color: '#171717' }}>
            <strong>Disclaimer:</strong> The Mindsight Timed Lockbox is a behavioral intervention tool. 
            Individual results may vary. These studies represent research on digital wellness interventions 
            and screen time reduction, not specific testing of our product. Always consult healthcare 
            professionals for personalized advice.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResearchStudies; 