import { Button } from "@/components/ui/button";
import { Star, Shield, Award, ChevronLeft, ChevronRight, Truck, RotateCcw, Phone, Check } from "lucide-react";
import { useState } from "react";
import AmbassadorVideos from "@/components/AmbassadorVideos";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AddictionHero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  const productImages = [
    "https://cdn.shopify.com/s/files/1/0562/5505/3986/files/LB_1_Updated_2.jpg?v=1750452524",
    "https://cdn.shopify.com/s/files/1/0562/5505/3986/files/LB_2.png?v=1750391581",
    "https://cdn.shopify.com/s/files/1/0562/5505/3986/files/LB_3.png?v=1750391581",
    "https://cdn.shopify.com/s/files/1/0562/5505/3986/files/LB_6.png?v=1750391581",
    "https://cdn.shopify.com/s/files/1/0562/5505/3986/files/LB_4.png?v=1750391581",
    "https://cdn.shopify.com/s/files/1/0562/5505/3986/files/LB_7.png?v=1750391581"
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  return (
    <section className="py-16 px-4" style={{ backgroundColor: '#f8fafc' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Image Gallery */}
          <div className="space-y-4 lg:sticky lg:top-8">
            {/* Main Image */}
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              <img 
                src={productImages[currentImage]}
                alt={`Mindsight Timed Lockbox - Image ${currentImage + 1}`}
                className="w-full h-[400px] md:h-[600px] object-contain md:object-cover"
              />
              
              {/* Navigation Arrows */}
              <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all border border-gray-200"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700" />
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all border border-gray-200"
              >
                <ChevronRight className="w-6 h-6 text-gray-700" />
              </button>
              
              {/* Image Counter */}
              <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                {currentImage + 1} / {productImages.length}
              </div>
            </div>
            
            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-2">
              {productImages.slice(0, 4).map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`relative rounded-lg overflow-hidden border-2 transition-all bg-white shadow-sm ${
                    currentImage === index ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <img 
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-24 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {/* Product Title */}
            <div>
              <h1 className="text-4xl font-bold mb-3" style={{ color: '#171717' }}>
                Mindsight Timed Lockbox
              </h1>
              <p className="text-xl mb-4" style={{ color: '#888888' }}>
                Break free from addiction and build healthier habits
              </p>
              
              {/* Star Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-lg font-semibold" style={{ color: '#171717' }}>
                  4.6 out of 5
                </span>
                <span className="text-base" style={{ color: '#888888' }}>
                  (1200+ reviews)
                </span>
              </div>
            </div>

            {/* Price - Moved above description */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold" style={{ color: '#171717' }}>$30.00</span>
                <span className="text-xl text-gray-400 line-through">$40.00</span>
              </div>
            </div>
            
            {/* Product Description */}
            <p className="text-lg mb-6" style={{ color: '#666666' }}>
              The Mindsight Timed Lockbox is a simple, science-backed tool that helps you break addiction cycles, build healthier habits, and stay committed to recovery—one locked moment at a time.
            </p>

            {/* Key Features */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center w-6 h-6 rounded-full text-white text-sm font-bold" style={{ backgroundColor: '#5684C4' }}>1</div>
                <div>
                  <div className="font-semibold mb-1" style={{ color: '#171717' }}>Break the Addiction Cycle</div>
                  <div className="text-sm" style={{ color: '#888888' }}>Create physical distance between you and your triggers.</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center w-6 h-6 rounded-full text-white text-sm font-bold" style={{ backgroundColor: '#5684C4' }}>2</div>
                <div>
                  <div className="font-semibold mb-1" style={{ color: '#171717' }}>Recovery Starts Today</div>
                  <div className="text-sm" style={{ color: '#888888' }}>Create a routine your mind and body will thank you for.</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center w-6 h-6 rounded-full text-white text-sm font-bold" style={{ backgroundColor: '#5684C4' }}>3</div>
                <div>
                  <div className="font-semibold mb-1" style={{ color: '#171717' }}>Temptation Is the Default</div>
                  <div className="text-sm" style={{ color: '#888888' }}>Choose control instead. Lock away triggers and make time for what matters.</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center w-6 h-6 rounded-full text-white text-sm font-bold" style={{ backgroundColor: '#5684C4' }}>4</div>
                <div>
                  <div className="font-semibold mb-1" style={{ color: '#171717' }}>Build Healthier Habits</div>
                  <div className="text-sm" style={{ color: '#888888' }}>Out of sight, out of mind. Replace harmful behaviors with mindful moments.</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-4">
              <Button 
                className="w-full text-lg py-6 font-semibold btn-orange"
                onClick={() => window.open('https://mindsightnow.com/cart/43571017711778:1?discount=LOCKIT25', '_blank')}
              >
                Buy Now - $30.00
              </Button>
              
              {/* 30-Day Money Back Guarantee */}
              <div className="flex items-center justify-center gap-2 text-sm" style={{ color: '#666666' }}>
                <div className="flex items-center justify-center w-5 h-5 rounded-full" style={{ backgroundColor: '#5684C4' }}>
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span>30-day money back guarantee</span>
              </div>
            </div>

            {/* FAQ Accordion */}
            <div className="space-y-4">
              <Accordion type="multiple" defaultValue={["features", "benefits"]} className="w-full">
                <AccordionItem value="features">
                  <AccordionTrigger className="text-left">Features and Benefits</AccordionTrigger>
                  <AccordionContent>
                    The Mindsight Timed Lockbox features a secure timed lockbox that prevents access for set periods, helping you build healthy boundaries with addictive substances or behaviors. Its compact design fits various items while the durable construction ensures long-lasting use for breaking addiction habits.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="fits">
                  <AccordionTrigger className="text-left">What Fits in The Lockbox?</AccordionTrigger>
                  <AccordionContent>
                    The lockbox can hold cigarettes, vapes, alcohol, snacks, medication bottles, credit cards and cash, or other triggers. Its spacious interior accommodates various items you want to keep away during recovery or habit-breaking sessions.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="modes">
                  <AccordionTrigger className="text-left">What's the difference between the three modes?</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li><strong>Lockbox</strong> – No timed countdown</li>
                      <li><strong>Standard</strong> – Timed countdown & override code</li>
                      <li><strong>Fortress</strong> – No override once locked</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="emergency">
                  <AccordionTrigger className="text-left">Can I still access it in case of an emergency?</AccordionTrigger>
                  <AccordionContent>
                    In Lockbox and Standard mode, your items are always accessible when needed. In Fortress Mode, you can only access your items with a special code from our support staff, ensuring maximum commitment to your focus or habit-breaking goals.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            
            {/* Ambassador Videos */}
            <AmbassadorVideos />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddictionHero;