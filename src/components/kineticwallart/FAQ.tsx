import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([0]); // First item open by default

  const toggleItem = (index: number) => {
    if (openItems.includes(index)) {
      setOpenItems(openItems.filter(item => item !== index));
    } else {
      setOpenItems([...openItems, index]);
    }
  };

  const faqItems = [
    {
      question: "How does the Kinetic Wall Art work?",
      answer: "Our Kinetic Wall Art operates on a precision-engineered mechanical system that requires no batteries or electricity. Simply wind it up by hand, and the intricate wooden elements will move in mesmerizing patterns for up to 12 hours. The movement is powered by potential energy stored in a spring mechanism, creating a sustainable, screen-free focal point for mindfulness and relaxation."
    },
    {
      question: "How do I install the Kinetic Wall Art?",
      answer: "Installation is simple and requires minimal tools. Your Kinetic Wall Art comes with all necessary mounting hardware and clear instructions. You'll need a drill, level, and screwdriver. The piece hangs like a standard wall clock using the included secure mounting bracket. Most customers complete installation in under 15 minutes."
    },
    {
      question: "How long does the movement last after winding?",
      answer: "After a full wind-up (about 20 gentle turns), the Kinetic Wall Art will move continuously for approximately 10-12 hours. The movement is subtle and mesmerizing, perfect for creating a calming atmosphere in any space. You can wind it partially for shorter durations if preferred."
    },
    {
      question: "Is assembly required?",
      answer: "The Kinetic Wall Art arrives partially assembled. Final assembly is straightforward and takes about 10-15 minutes. Clear, illustrated instructions are included, and no special tools are required. The assembly process is designed to be simple while ensuring the mechanism functions perfectly."
    },
    {
      question: "How do I care for and maintain my Kinetic Wall Art?",
      answer: "Maintenance is minimal. Occasionally dust with a soft, dry cloth or a gentle duster. Avoid using water or cleaning chemicals on the wood. The mechanism is designed for years of trouble-free operation and doesn't require oiling or adjustment. If stored, keep in a dry place at room temperature."
    },
    {
      question: "What are the dimensions and weight?",
      answer: "The Kinetic Wall Art measures 15.75 inches (40cm) in diameter and extends 2.5 inches (6.35cm) from the wall. It weighs approximately 2.2 pounds (1kg), making it suitable for mounting on standard residential walls with the included hardware."
    },
    {
      question: "What materials is it made from?",
      answer: "Our Kinetic Wall Art is crafted from sustainably sourced Eucalyptus and premium Ash plywood. The mechanism features precision-engineered metal components for durability and smooth operation. All materials are finished with non-toxic, eco-friendly coatings, making it safe for all environments including homes with children."
    },
    {
      question: "Does it make noise while operating?",
      answer: "The Kinetic Wall Art operates with a whisper-quiet mechanism. You might hear a very subtle, gentle ticking sound if you're standing close in a completely silent room, but it's designed to be virtually silent from normal viewing distances. Many customers report that the quiet operation adds to its meditative quality."
    },
    {
      question: "What's your return policy and warranty?",
      answer: "We offer a 30-day satisfaction guarantee. If you're not completely satisfied, return your Kinetic Wall Art in its original packaging for a full refund. Additionally, each piece comes with a lifetime warranty against manufacturing defects. We're committed to your complete satisfaction and the longevity of your Mindsight product."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship worldwide! International shipping rates and delivery times vary by location. All international orders include tracking information, and we handle any customs documentation required. Please note that any import duties or taxes are the responsibility of the recipient."
    },
  ];

  return (
    <section className="py-20 px-4" style={{ backgroundColor: '#F9F7F4' }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#171717' }}>
            Frequently Asked Questions
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#888888' }}>
            Everything you need to know about your Kinetic Wall Art
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className="border border-gray-200 rounded-xl overflow-hidden bg-white transition-all duration-300 hover:shadow-md"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleItem(index)}
              >
                <span className="font-medium text-lg" style={{ color: '#171717' }}>{item.question}</span>
                {openItems.includes(index) ? (
                  <ChevronUp className="flex-shrink-0 ml-2" style={{ color: '#563232' }} />
                ) : (
                  <ChevronDown className="flex-shrink-0 ml-2" style={{ color: '#563232' }} />
                )}
              </button>
              
              {openItems.includes(index) && (
                <div className="px-6 pb-4">
                  <p className="text-gray-700">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="mb-4 text-gray-700">
            Still have questions? We're here to help.
          </p>
          <button 
            className="px-8 py-3 rounded-full font-semibold text-white transition-all duration-300"
            style={{ backgroundColor: '#563232' }}
            onClick={() => window.open('https://mindsightnow.com/pages/contact', '_blank')}
          >
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;