const DoomScrollSection = () => {
  return (
    <section className="py-20 px-4" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#171717' }}>
            Stop Doom Scrolling, Start Living
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#888888' }}>
            Break the cycle of endless scrolling and reclaim your time. See how simple it is to go from distraction to peaceful sleep.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Step 1: Doom Scrolling */}
          <div className="text-center">
            <div className="mb-6">
              <img 
                src="https://cdn.shopify.com/s/files/1/0562/5505/3986/files/1.gif?v=1750300573" 
                alt="Person doom scrolling on phone"
                className="w-full max-w-xs mx-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="mb-4">
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
                src="https://cdn.shopify.com/s/files/1/0562/5505/3986/files/2.gif?v=1750300574" 
                alt="Locking phone in Mindsight lockbox"
                className="w-full max-w-xs mx-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="mb-4">
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
                src="https://cdn.shopify.com/s/files/1/0562/5505/3986/files/3.gif?v=1750300572" 
                alt="Person going to sleep peacefully"
                className="w-full max-w-xs mx-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="mb-4">
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

        {/* Call to action */}
        <div className="text-center mt-12">
          <button 
            className="px-8 py-4 text-lg font-semibold rounded-md border-0 transition-all duration-100 ease-in-out btn-orange"
            onClick={() => window.open('https://mindsightnow.com/cart/43571017711778:1?discount=LOCKIT25', '_blank')}
          >
            Break the Cycle Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default DoomScrollSection; 