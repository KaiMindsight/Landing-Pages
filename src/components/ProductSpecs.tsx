const ProductSpecs = () => {
  return (
    <section 
      className="py-20 px-4 relative" 
      style={{ 
        backgroundColor: '#F1F1F1',
        backgroundImage: 'url(https://cdn.shopify.com/s/files/1/0562/5505/3986/files/Circle_Background.png?v=1750288943)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Optional overlay to ensure content readability */}
      <div className="absolute inset-0 bg-gray-100/20"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#171717' }}>
            Locking Away Your Phone Has Never Been This Easy
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#171717' }}>
            Every detail of the Mindsight Timed Lockbox has been carefully designed 
            to provide maximum security while maintaining ease of use.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="rounded-2xl overflow-hidden">
              <img 
                src="https://cdn.shopify.com/s/files/1/0562/5505/3986/files/Dropping_Phone_In_Lockbox.png?v=1750288074"
                alt="Dropping phone in lockbox demonstration"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6" style={{ color: '#171717' }}>Three Willpower Modes</h3>
              
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-4 border-l-4" style={{ borderColor: '#171717' }}>
                  <h4 className="font-semibold mb-2" style={{ color: '#171717' }}>🔓 Lockbox Only</h4>
                  <p className="text-sm" style={{ color: '#171717' }}>Functions as a simple lockbox without timer. Perfect for general storage and organization.</p>
                </div>
                
                <div className="bg-white rounded-lg p-4 border-l-4" style={{ borderColor: '#5684C4' }}>
                  <h4 className="font-semibold mb-2" style={{ color: '#171717' }}>⏱️ Standard Mode</h4>
                  <p className="text-sm" style={{ color: '#171717' }}>Includes timer with override code for flexibility. Great for building habits with a safety net.</p>
                </div>
                
                <div className="bg-white rounded-lg p-4 border-l-4" style={{ borderColor: '#D72923' }}>
                  <h4 className="font-semibold mb-2" style={{ color: '#171717' }}>🏰 Fortress Mode</h4>
                  <p className="text-sm" style={{ color: '#171717' }}>Strict mode with no override option. Maximum discipline for serious habit change.</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl p-6" style={{ backgroundColor: '#F1F1F1' }}>
              <h4 className="font-semibold mb-3" style={{ color: '#171717' }}>What's Included</h4>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2">
                  <span style={{ color: '#5684C4' }}>✓</span>
                  <span style={{ color: '#171717' }}>Mindsight Timed Lockbox</span>
                </div>
                <div className="flex items-center gap-2">
                  <span style={{ color: '#5684C4' }}>✓</span>
                  <span style={{ color: '#171717' }}>2× AA batteries</span>
                </div>
                <div className="flex items-center gap-2">
                  <span style={{ color: '#5684C4' }}>✓</span>
                  <span style={{ color: '#171717' }}>Quick start guide</span>
                </div>
                <div className="flex items-center gap-2">
                  <span style={{ color: '#5684C4' }}>✓</span>
                  <span style={{ color: '#171717' }}>Lifetime warranty</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSpecs;
