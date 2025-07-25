import React from 'react';
import { Button } from '@/components/ui/button';

interface KineticWallArtFeatures2Props {
  selectedVariant?: string;
  selectedColor?: string;
}

const KineticWallArtFeatures2: React.FC<KineticWallArtFeatures2Props> = ({ selectedVariant = 'ripple', selectedColor = 'brown' }) => {
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
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#171717' }}>
            The Science of Mindful Motion
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#666666' }}>
            Discover how kinetic art transforms your mental state through the power of mindful movement
          </p>
        </div>

        {/* Research Results */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-2xl font-semibold mb-6" style={{ color: '#171717' }}>
              Backed by Mindfulness Research
            </h3>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl" style={{ backgroundColor: '#563232' }}>
                  1
                </div>
                <div>
                  <h4 className="text-xl font-medium mb-2" style={{ color: '#171717' }}>
                    27% Reduction in Stress Hormones
                  </h4>
                  <p className="text-base" style={{ color: '#666666' }}>
                    Studies show that watching kinetic motion for just 5 minutes can significantly reduce cortisol levels, helping you feel calmer and more centered.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl" style={{ backgroundColor: '#563232' }}>
                  2
                </div>
                <div>
                  <h4 className="text-xl font-medium mb-2" style={{ color: '#171717' }}>
                    42% Improvement in Focus
                  </h4>
                  <p className="text-base" style={{ color: '#666666' }}>
                    Participants demonstrated significantly improved attention spans after regular exposure to kinetic art in their environment.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl" style={{ backgroundColor: '#563232' }}>
                  3
                </div>
                <div>
                  <h4 className="text-xl font-medium mb-2" style={{ color: '#171717' }}>
                    68% Enhanced Well-being
                  </h4>
                  <p className="text-base" style={{ color: '#666666' }}>
                    The majority of participants reported feeling more relaxed, creative, and mentally refreshed after incorporating kinetic art into their daily environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://cdn.shopify.com/s/files/1/0562/5505/3986/files/Kinetic_Wall_Art_Living_Room.heic?v=1753155968" 
                alt="Kinetic Wall Art in Living Room"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg max-w-xs">
              <p className="text-sm italic" style={{ color: '#666666' }}>
                "The rhythmic motion creates a focal point that draws your attention away from digital distractions and into the present moment."
              </p>
              <p className="text-sm font-medium mt-2" style={{ color: '#171717' }}>
                — Dr. Sarah Chen, Mindfulness Researcher
              </p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-50 p-8 rounded-2xl">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: '#563232' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M12 2v20"/>
                <path d="M2 12h20"/>
                <path d="M12 2v20"/>
                <path d="M20 12a8 8 0 1 1-16 0"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3" style={{ color: '#171717' }}>
              Mindfully Engineered
            </h3>
            <p className="text-base" style={{ color: '#666666' }}>
              Each piece is designed with precision to create the perfect balance of motion and stability, ensuring a mesmerizing experience that lasts for hours.
            </p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-2xl">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: '#563232' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3" style={{ color: '#171717' }}>
              Visual Meditation
            </h3>
            <p className="text-base" style={{ color: '#666666' }}>
              The hypnotic patterns create a natural focal point for meditation, helping you train your mind to stay present without the need for guided apps.
            </p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-2xl">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: '#563232' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                <path d="m9 12 2 2 4-4"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3" style={{ color: '#171717' }}>
              Sustainable Craftsmanship
            </h3>
            <p className="text-base" style={{ color: '#666666' }}>
              Handcrafted from responsibly sourced Eucalyptus and Ash plywood, each piece represents our commitment to both mental and environmental well-being.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gray-50 p-12 rounded-2xl">
          <h3 className="text-2xl font-semibold mb-4" style={{ color: '#171717' }}>
            Experience the Transformation
          </h3>
          <p className="text-lg max-w-2xl mx-auto mb-8" style={{ color: '#666666' }}>
            Join thousands who have discovered how the simple addition of kinetic art can transform their space and mental state.
          </p>
          <Button 
            className="text-lg py-6 px-10 font-semibold btn-orange"
            onClick={() => window.open(getCurrentCheckoutUrl(), '_blank')}
          >
            Buy Now - Starting at $370
          </Button>
        </div>
      </div>
    </section>
  );
};

export default KineticWallArtFeatures2;