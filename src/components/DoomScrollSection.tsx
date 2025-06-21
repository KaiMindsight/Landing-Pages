const DoomScrollSection = () => {
  return (
    <section 
      className="pt-12 md:pt-20 pb-8 md:pb-10 px-4 relative" 
      style={{ 
        background: `linear-gradient(to bottom, #3e6daf 0%, #3e6daf 15%, #FFFFFF 100%)`
      }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">
            Stop Doom Scrolling, Start Living
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-white">
            Break the cycle of endless scrolling and reclaim your time. See how simple it is to go from distraction to peaceful sleep.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {/* Step 1: Doom Scrolling */}
          <div className="text-center">
            <div className="mb-6">
              <img 
                src="https://cdn.shopify.com/s/files/1/0562/5505/3986/files/Sleeping_Gif_1_-_Lighter.gif?v=1750457092" 
                alt="Person doom scrolling on phone"
                className="w-full max-w-xs mx-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="mb-4 flex justify-center">
              <span className="inline-block w-8 h-8 rounded-full text-white font-bold flex items-center justify-center" style={{ backgroundColor: '#5684C4' }}>
                1
              </span>
            </div>
            <h3 className="text-xl font-semibold mb-3" style={{ color: '#171717' }}>
              Endless Scrolling
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: '#888888' }}>
              Caught in the cycle of mindless scrolling, losing hours to social media and endless content.
            </p>
          </div>

          {/* Step 2: Locking Phone */}
          <div className="text-center">
            <div className="mb-6">
              <img 
                src="https://cdn.shopify.com/s/files/1/0562/5505/3986/files/Sleeping_Gif_2_-_Lighter.gif?v=1750457093" 
                alt="Locking phone in Mindsight lockbox"
                className="w-full max-w-xs mx-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="mb-4 flex justify-center">
              <span className="inline-block w-8 h-8 rounded-full text-white font-bold flex items-center justify-center" style={{ backgroundColor: '#5684C4' }}>
                2
              </span>
            </div>
            <h3 className="text-xl font-semibold mb-3" style={{ color: '#171717' }}>
              Lock It Away
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: '#888888' }}>
              Place your phone in the Mindsight lockbox and set your timer. Create a physical barrier when willpower isn't enough.
            </p>
          </div>

          {/* Step 3: Peaceful Sleep */}
          <div className="text-center">
            <div className="mb-6">
              <img 
                src="https://cdn.shopify.com/s/files/1/0562/5505/3986/files/Sleeping_Gif_3_-_Lighter.gif?v=1750457090" 
                alt="Person going to sleep peacefully"
                className="w-full max-w-xs mx-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="mb-4 flex justify-center">
              <span className="inline-block w-8 h-8 rounded-full text-white font-bold flex items-center justify-center" style={{ backgroundColor: '#5684C4' }}>
                3
              </span>
            </div>
            <h3 className="text-xl font-semibold mb-3" style={{ color: '#171717' }}>
              Peaceful Sleep
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: '#888888' }}>
              Enjoy quality rest without the blue light and stimulation. Wake up refreshed and ready for a productive day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoomScrollSection; 