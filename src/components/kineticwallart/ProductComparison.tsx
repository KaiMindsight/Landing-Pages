import { Check, X } from "lucide-react";

interface ProductComparisonProps {
  selectedVariant?: string;
  selectedColor?: string;
}

const ProductComparison: React.FC<ProductComparisonProps> = ({ selectedVariant = 'ripple', selectedColor = 'brown' }) => {
  // Checkout URLs mapping
  const checkoutUrls = {
    bloom: {
      brown: 'https://mindsightnow.com/cart/45547855806626:1',
      gray: 'https://mindsightnow.com/cart/45547855773858:1'
    },
    wander: {
      brown: 'https://mindsightnow.com/cart/45547855872162:1',
      gray: 'https://mindsightnow.com/cart/45547855904930:1'
    },
    glide: {
      brown: 'https://mindsightnow.com/cart/45547855970466:1',
      gray: 'https://mindsightnow.com/cart/45547856003234:1'
    },
    ripple: {
      brown: 'https://mindsightnow.com/cart/45547856134306:1',
      gray: 'https://mindsightnow.com/cart/45547856101538:1'
    }
  };

  // Get current checkout URL
  const getCurrentCheckoutUrl = () => {
    return checkoutUrls[selectedVariant]?.[selectedColor] || 'https://mindsightnow.com/products/kinetic-wall-art';
  };
  return (
    <section className="py-20 px-4" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#171717' }}>
            Why Choose Mindsight Kinetic Wall Art?
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#888888' }}>
            See how our mindfully designed kinetic art compares to traditional alternatives
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[768px] border-collapse">
            <thead>
              <tr>
                <th className="p-4 text-left border-b-2 border-gray-200" style={{ minWidth: '200px' }}></th>
                <th className="p-4 text-center border-b-2 border-gray-200" style={{ backgroundColor: '#F9F7F4', minWidth: '200px' }}>
                  <div className="flex flex-col items-center">
                    <span className="text-lg font-bold mb-1" style={{ color: '#563232' }}>Mindsight</span>
                    <span className="text-lg font-bold" style={{ color: '#563232' }}>Kinetic Wall Art</span>
                  </div>
                </th>
                <th className="p-4 text-center border-b-2 border-gray-200" style={{ minWidth: '200px' }}>
                  <span className="text-lg font-bold" style={{ color: '#171717' }}>Generic Wall Art</span>
                </th>
                <th className="p-4 text-center border-b-2 border-gray-200" style={{ minWidth: '200px' }}>
                  <span className="text-lg font-bold" style={{ color: '#171717' }}>Digital Art Displays</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Feature Row: Mindfulness Benefits */}
              <tr>
                <td className="p-4 border-b border-gray-200 font-medium" style={{ color: '#171717' }}>
                  Mindfulness Benefits
                </td>
                <td className="p-4 border-b border-gray-200 text-center" style={{ backgroundColor: '#F9F7F4' }}>
                  <div className="flex flex-col items-center">
                    <Check className="text-green-600 mb-1" size={24} />
                    <span className="text-sm">Proven stress reduction</span>
                  </div>
                </td>
                <td className="p-4 border-b border-gray-200 text-center">
                  <div className="flex flex-col items-center">
                    <Check className="text-gray-400 mb-1" size={24} />
                    <span className="text-sm text-gray-500">Minimal</span>
                  </div>
                </td>
                <td className="p-4 border-b border-gray-200 text-center">
                  <div className="flex flex-col items-center">
                    <X className="text-red-400 mb-1" size={24} />
                    <span className="text-sm text-gray-500">Can increase screen time</span>
                  </div>
                </td>
              </tr>

              {/* Feature Row: Power Source */}
              <tr>
                <td className="p-4 border-b border-gray-200 font-medium" style={{ color: '#171717' }}>
                  Power Source
                </td>
                <td className="p-4 border-b border-gray-200 text-center" style={{ backgroundColor: '#F9F7F4' }}>
                  <div className="flex flex-col items-center">
                    <Check className="text-green-600 mb-1" size={24} />
                    <span className="text-sm">No batteries or electricity</span>
                  </div>
                </td>
                <td className="p-4 border-b border-gray-200 text-center">
                  <div className="flex flex-col items-center">
                    <Check className="text-green-600 mb-1" size={24} />
                    <span className="text-sm">None needed</span>
                  </div>
                </td>
                <td className="p-4 border-b border-gray-200 text-center">
                  <div className="flex flex-col items-center">
                    <X className="text-red-400 mb-1" size={24} />
                    <span className="text-sm text-gray-500">Requires outlet & electricity</span>
                  </div>
                </td>
              </tr>

              {/* Feature Row: Movement */}
              <tr>
                <td className="p-4 border-b border-gray-200 font-medium" style={{ color: '#171717' }}>
                  Movement
                </td>
                <td className="p-4 border-b border-gray-200 text-center" style={{ backgroundColor: '#F9F7F4' }}>
                  <div className="flex flex-col items-center">
                    <Check className="text-green-600 mb-1" size={24} />
                    <span className="text-sm">Handcrafted kinetic motion</span>
                  </div>
                </td>
                <td className="p-4 border-b border-gray-200 text-center">
                  <div className="flex flex-col items-center">
                    <X className="text-red-400 mb-1" size={24} />
                    <span className="text-sm text-gray-500">Static</span>
                  </div>
                </td>
                <td className="p-4 border-b border-gray-200 text-center">
                  <div className="flex flex-col items-center">
                    <Check className="text-gray-400 mb-1" size={24} />
                    <span className="text-sm text-gray-500">Digital animation only</span>
                  </div>
                </td>
              </tr>

              {/* Feature Row: Sustainability */}
              <tr>
                <td className="p-4 border-b border-gray-200 font-medium" style={{ color: '#171717' }}>
                  Sustainability
                </td>
                <td className="p-4 border-b border-gray-200 text-center" style={{ backgroundColor: '#F9F7F4' }}>
                  <div className="flex flex-col items-center">
                    <Check className="text-green-600 mb-1" size={24} />
                    <span className="text-sm">Eco-friendly materials</span>
                  </div>
                </td>
                <td className="p-4 border-b border-gray-200 text-center">
                  <div className="flex flex-col items-center">
                    <Check className="text-gray-400 mb-1" size={24} />
                    <span className="text-sm text-gray-500">Varies widely</span>
                  </div>
                </td>
                <td className="p-4 border-b border-gray-200 text-center">
                  <div className="flex flex-col items-center">
                    <X className="text-red-400 mb-1" size={24} />
                    <span className="text-sm text-gray-500">Electronic waste concern</span>
                  </div>
                </td>
              </tr>

              {/* Feature Row: Craftsmanship */}
              <tr>
                <td className="p-4 border-b border-gray-200 font-medium" style={{ color: '#171717' }}>
                  Craftsmanship
                </td>
                <td className="p-4 border-b border-gray-200 text-center" style={{ backgroundColor: '#F9F7F4' }}>
                  <div className="flex flex-col items-center">
                    <Check className="text-green-600 mb-1" size={24} />
                    <span className="text-sm">Handcrafted premium quality</span>
                  </div>
                </td>
                <td className="p-4 border-b border-gray-200 text-center">
                  <div className="flex flex-col items-center">
                    <Check className="text-gray-400 mb-1" size={24} />
                    <span className="text-sm text-gray-500">Varies by price point</span>
                  </div>
                </td>
                <td className="p-4 border-b border-gray-200 text-center">
                  <div className="flex flex-col items-center">
                    <Check className="text-gray-400 mb-1" size={24} />
                    <span className="text-sm text-gray-500">Mass-produced electronics</span>
                  </div>
                </td>
              </tr>

              {/* Feature Row: Conversation Piece */}
              <tr>
                <td className="p-4 border-b border-gray-200 font-medium" style={{ color: '#171717' }}>
                  Conversation Piece
                </td>
                <td className="p-4 border-b border-gray-200 text-center" style={{ backgroundColor: '#F9F7F4' }}>
                  <div className="flex flex-col items-center">
                    <Check className="text-green-600 mb-1" size={24} />
                    <span className="text-sm">Unique & captivating</span>
                  </div>
                </td>
                <td className="p-4 border-b border-gray-200 text-center">
                  <div className="flex flex-col items-center">
                    <Check className="text-gray-400 mb-1" size={24} />
                    <span className="text-sm text-gray-500">Depends on design</span>
                  </div>
                </td>
                <td className="p-4 border-b border-gray-200 text-center">
                  <div className="flex flex-col items-center">
                    <Check className="text-gray-400 mb-1" size={24} />
                    <span className="text-sm text-gray-500">Initially, then becomes familiar</span>
                  </div>
                </td>
              </tr>

              {/* Feature Row: Price */}
              <tr>
                <td className="p-4 border-b border-gray-200 font-medium" style={{ color: '#171717' }}>
                  Price
                </td>
                <td className="p-4 border-b border-gray-200 text-center" style={{ backgroundColor: '#F9F7F4' }}>
                  <div className="flex flex-col items-center">
                    <span className="font-semibold mb-1" style={{ color: '#563232' }}>$370</span>
                    <span className="text-sm">One-time investment</span>
                  </div>
                </td>
                <td className="p-4 border-b border-gray-200 text-center">
                  <div className="flex flex-col items-center">
                    <span className="font-semibold text-gray-600 mb-1">$50-200</span>
                    <span className="text-sm text-gray-500">Static art pieces</span>
                  </div>
                </td>
                <td className="p-4 border-b border-gray-200 text-center">
                  <div className="flex flex-col items-center">
                    <span className="font-semibold text-gray-600 mb-1">$300-1000+</span>
                    <span className="text-sm text-gray-500">Plus electricity costs</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-12 text-center">
          <button 
            className="px-8 py-3 rounded-full font-semibold text-white transition-all duration-300"
            style={{ backgroundColor: '#563232' }}
            onClick={() => window.open(getCurrentCheckoutUrl(), '_blank')}
          >
            Buy Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductComparison;