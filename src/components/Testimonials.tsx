import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Elena",
      role: "Verified Purchase",
      rating: 5,
      text: "This little lock box is perfect for storing our 15-year-old's cell phone during the school day. This way, he can have access to it when school is over without having to wait for us to come home from work, but we can also help him stay on track during the school day without the distraction of the phone. It's the best!"
    },
    {
      name: "Lema",
      role: "Verified Purchase", 
      rating: 5,
      text: "Sturdy, did the job, with long battery life. The battery life is really good. was able to hide my phone and multiple controller accessories to avoid distraction. Have used it for about a year, and haven't replaced the battery once."
    },
    {
      name: "Rick",
      role: "Verified Purchase",
      rating: 5,
      text: "Despite some momentary confusion on where the batteries are supposed to go, this arrived promptly, and turned out to be very user friendly, and works perfectly. I recommend this to anyone with struggles bringing personal habits under control."
    },
    {
      name: "Sarah",
      role: "Verified Purchase",
      rating: 5,
      text: "This box has been great. Well constructed and easy to use. I accidentally locked myself out in fortress mode for way longer than intended and mindsight was able to provide an emergency code promptly. Definitely recommend over a more expensive well known competitor."
    }
  ];

  return (
    <section 
      className="py-20 px-4 relative" 
      style={{ 
        backgroundColor: '#F1F1F1',
        backgroundImage: 'url(https://cdn.shopify.com/s/files/1/0562/5505/3986/files/Untitled_design_20_c70eef92-e994-4f3b-8823-7211f3995154.png?v=1749702759)',
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
            A Lockbox With A Fan Club
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#888888' }}>
            See what verified customers are saying about the Mindsight Timed Lockbox 
            and how it's helping them build better habits.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="fill-current" style={{ color: '#FFA18A' }} size={16} />
                ))}
              </div>
              <p className="mb-4 leading-relaxed text-sm" style={{ color: '#171717' }}>"{testimonial.text}"</p>
              <div>
                <div className="font-semibold" style={{ color: '#171717' }}>{testimonial.name}</div>
                <div className="text-sm" style={{ color: '#171717' }}>{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-2xl p-8 text-center text-white" style={{ backgroundColor: '#5684C4' }}>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold mb-2">10,000+</div>
              <div className="text-blue-100">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">4.6/5</div>
              <div className="text-blue-100">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">92%</div>
              <div className="text-blue-100">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">30 Day</div>
              <div className="text-blue-100">Money Back Guarantee</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
