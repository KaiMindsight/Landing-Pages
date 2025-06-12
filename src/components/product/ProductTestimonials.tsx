
import { Star } from "lucide-react";

const ProductTestimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Graduate Student",
      content: "This lockbox has been a game-changer for my productivity. I can finally study for hours without the temptation to check social media.",
      rating: 5
    },
    {
      name: "Mike Chen",
      role: "Software Engineer",
      content: "As someone who struggled with phone addiction, this simple device has helped me reclaim my evenings and weekends.",
      rating: 5
    },
    {
      name: "Emma Davis",
      role: "Parent",
      content: "We use this during family dinners and it's amazing how much more we connect without phones at the table.",
      rating: 5
    },
    {
      name: "David Wilson",
      role: "Entrepreneur",
      content: "The build quality is excellent and the timer feature works perfectly. Worth every penny for my mental health.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 px-4" style={{ backgroundColor: '#F8F9FA' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#171717' }}>
            What Our Customers Say
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#888888' }}>
            Join thousands of people who have transformed their relationship with technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              style={{ backgroundColor: '#FFFFFF' }}
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="mb-4 leading-relaxed" style={{ color: '#171717' }}>
                "{testimonial.content}"
              </p>
              
              <div>
                <div className="font-semibold" style={{ color: '#171717' }}>
                  {testimonial.name}
                </div>
                <div className="text-sm" style={{ color: '#888888' }}>
                  {testimonial.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductTestimonials;
