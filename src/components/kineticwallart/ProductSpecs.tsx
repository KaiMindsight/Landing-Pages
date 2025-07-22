import { Check } from "lucide-react";

const ProductSpecs = () => {
  return (
    <section className="py-20 px-4" style={{ backgroundColor: '#F9F7F4' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#171717' }}>
            Product Specifications
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#888888' }}>
            Crafted with precision and designed for mindfulness
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="https://cdn.shopify.com/s/files/1/0562/5505/3986/files/Easy_Assembly_-_Kinetic_Wall.png?v=1752205278" 
              alt="Easy Assembly - Kinetic Wall Art" 
              className="w-full h-auto"
            />
          </div>

          {/* Right Column - Specifications */}
          <div>
            <div className="space-y-8">
              {/* Dimensions */}
              <div>
                <h3 className="text-2xl font-semibold mb-4" style={{ color: '#171717' }}>Dimensions</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 text-green-600" size={18} />
                    <span><strong>Overall Size:</strong> 15.75" diameter × 2.5" depth (40cm × 6.35cm)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 text-green-600" size={18} />
                    <span><strong>Weight:</strong> 2.2 lbs (1 kg)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 text-green-600" size={18} />
                    <span><strong>Wall Mounting:</strong> Includes secure hanging hardware</span>
                  </li>
                </ul>
              </div>



              {/* Package Contents */}
              <div>
                <h3 className="text-2xl font-semibold mb-4" style={{ color: '#171717' }}>Package Contents</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 text-green-600" size={18} />
                    <span>1 × Kinetic Wall Art</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 text-green-600" size={18} />
                    <span>1 × Wall mounting hardware kit</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 text-green-600" size={18} />
                    <span>1 × Assembly guide</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 text-green-600" size={18} />
                    <span>1 × Care instructions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSpecs;