
const ProductShowcase = () => {
  const showcaseItems = [
    {
      title: "Perfect for Focus Sessions",
      description: "Lock away distractions during work or study time",
      image: "Study Session"
    },
    {
      title: "Better Sleep Hygiene", 
      description: "Keep your phone away from the bedside",
      image: "Sleep Mode"
    },
    {
      title: "Quality Family Time",
      description: "Be present during meals and conversations", 
      image: "Family Time"
    },
    {
      title: "Mindful Breaks",
      description: "Take real breaks without digital interruption",
      image: "Meditation"
    }
  ];

  return (
    <section className="py-20 px-4" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#171717' }}>
            Real Life Applications
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#888888' }}>
            See how the Mindsight Lockbox fits seamlessly into your daily routine
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {showcaseItems.map((item, index) => (
            <div key={index} className="group hover:scale-105 transition-transform duration-300">
              <div 
                className="rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                style={{ backgroundColor: '#F8F9FA' }}
              >
                <div 
                  className="w-full h-48 rounded-xl flex items-center justify-center text-white text-lg font-semibold mb-6"
                  style={{ backgroundColor: '#5684C4' }}
                >
                  {item.image}
                </div>
                <h3 className="text-2xl font-bold mb-3" style={{ color: '#171717' }}>
                  {item.title}
                </h3>
                <p className="text-lg" style={{ color: '#888888' }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
