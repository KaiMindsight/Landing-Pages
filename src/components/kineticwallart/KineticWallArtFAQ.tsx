import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const KineticWallArtFAQ = () => {
  const faqs = [
    {
      question: "Is warping normal?",
      answer: "The \"wings\" are crafted from 0.5-inch eucalyptus-ash plywood. As the piece acclimates to your home's temperature and humidity, slight warping can occur. It's rarely visible from the front and won't affect performance. If panels ever rub, let us know and we'll replace them."
    },
    {
      question: "Is this a fan?",
      answer: "No—it's a kinetic sculpture. The gentle, silent motion serves as a visual reminder to pause, breathe, and reset during a busy day."
    },
    {
      question: "My kinetic wall art stops after a short time—help!",
      answer: "One full wind powers ~15 minutes. Make sure you've wound it several turns, then give a gentle clockwise spin.<br/><br/>If it still stops, loosen the front cap and wiggle the two layers so they're not pressing against the rubber stoppers. A drop of light oil on the metal post can also help. Never pull on the wall-mounted base gear.<br/><br/>Still stuck? Contact us and we'll troubleshoot or replace any faulty part."
    },
    {
      question: "I'm having trouble assembling the product—how can I get help?",
      answer: "Misplaced the manual? Download it here.<br/><br/>If a step is unclear, reach out—our team can walk you through it or hop on a quick video call."
    }
  ];

  return (
    <section id="faq" className="py-20 px-4" style={{ backgroundColor: '#F1F1F1' }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#171717' }}>
            Frequently Asked Questions
          </h2>
          <p className="text-xl" style={{ color: '#888888' }}>
            Everything you need to know about the Mindsight Kinetic Wall Art
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg border">
              <AccordionTrigger 
                className="px-6 py-4 text-left font-semibold hover:no-underline"
                style={{ color: '#171717' }}
              >
                {faq.question}
              </AccordionTrigger>
              <AccordionContent 
                className="px-6 pb-4 leading-relaxed"
                style={{ color: '#171717' }}
              >
                <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <p className="mb-4" style={{ color: '#171717' }}>Still have questions?</p>
          <a
            href="https://mindsightnow.com/pages/support"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 text-lg font-semibold rounded-md border transition-all duration-100 ease-in-out btn-orange"
            style={{ 
              minWidth: '148px',
              borderRadius: '5px',
              textDecoration: 'none'
            }}
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
};

export default KineticWallArtFAQ;