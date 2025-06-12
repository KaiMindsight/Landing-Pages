import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How long can I set the timer for?",
      answer: "You can set the timer anywhere from 1 minute to 30 days, giving you complete control over your commitment level."
    },
    {
      question: "What's the difference between the three modes?",
      answer: "Lockbox Only mode functions without a timer, Standard Mode includes a timer with override code for flexibility, and Fortress Mode has no override option for maximum discipline."
    },
    {
      question: "What items can fit inside the lockbox?",
      answer: "The lockbox measures 8\" × 2.75\" × 4.75\" and can accommodate 3-4 smartphones, medication bottles, vape devices, snacks, small electronics, and more."
    },
    {
      question: "How long does the battery last?",
      answer: "The lockbox operates on 2× AA batteries (included) with an estimated battery life of over 6 months with regular use."
    },
    {
      question: "Can I charge my phone while it's locked inside?",
      answer: "Yes! The lockbox features a built-in cable slot that allows you to charge devices while they're locked away."
    },
    {
      question: "Is the lockbox durable?",
      answer: "Absolutely. It's made from ABS & PP plastic, known for impact resistance, rigidity, chemical resistance, and heat resistance."
    },
    {
      question: "What if I need to access my items in an emergency?",
      answer: "In Standard Mode, you can use the override code. However, Fortress Mode has no override option by design. You can email support for an emergency override code. We recommend using Standard Mode initially until you're comfortable with the system."
    },
    {
      question: "Do you offer a money-back guarantee?",
      answer: "Yes! We offer a 30-day money-back guarantee. If you're not completely satisfied, return the lockbox for a full refund."
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
            Everything you need to know about the Mindsight Timed Lockbox
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
                {faq.answer}
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
            className="inline-block px-8 py-3 text-lg font-semibold rounded-md border transition-all duration-100 ease-in-out"
            style={{ 
              backgroundColor: '#1b2b4a',
              color: '#fff',
              boxShadow: '0 0 0 1px #1b2b4a',
              minWidth: '148px',
              borderRadius: '5px',
              textDecoration: 'none'
            }}
            onMouseOver={(e) => {
              const target = e.target as HTMLElement;
              target.style.filter = 'contrast(90%) brightness(1.1)';
            }}
            onMouseOut={(e) => {
              const target = e.target as HTMLElement;
              target.style.filter = 'none';
            }}
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
