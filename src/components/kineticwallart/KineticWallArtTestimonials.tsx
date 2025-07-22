import { useState } from "react";
import { ThumbsUp, ThumbsDown } from "lucide-react";

const KineticWallArtTestimonials = () => {
  const [votes, setVotes] = useState<{[key: string]: string}>({});

  const handleVote = (id: string, type: 'up' | 'down') => {
    setVotes(prev => ({
      ...prev,
      [id]: type
    }));
  };

  return (
    <section className="py-20 px-4" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#171717' }}>
            Transformative Stories. Real Results.
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#888888' }}>
            See how the Mindsight Kinetic Wall Art is changing spaces and minds.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="flex items-start gap-4 mb-4">
              <img 
                src="https://randomuser.me/api/portraits/women/42.jpg" 
                alt="Customer" 
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold" style={{ color: '#171717' }}>Sarah M.</h4>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>
                  ))}
                  <span className="text-xs ml-1" style={{ color: '#888888' }}>Verified Purchase</span>
                </div>
              </div>
            </div>
            <p className="mb-4" style={{ color: '#171717' }}>
              "I've placed this in my therapy office, and it's become a focal point for clients. The gentle motion helps with anxiety reduction exercises, and several clients have commented on how calming it is to watch during our sessions."
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm" style={{ color: '#888888' }}>2 months ago</span>
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => handleVote('t1', 'up')}
                  className={`flex items-center gap-1 text-sm px-2 py-1 rounded-full ${votes['t1'] === 'up' ? 'bg-green-100 text-green-700' : 'text-gray-500 hover:bg-gray-100'}`}
                >
                  <ThumbsUp size={14} />
                  <span>Helpful (24)</span>
                </button>
                <button 
                  onClick={() => handleVote('t1', 'down')}
                  className={`flex items-center gap-1 text-sm px-2 py-1 rounded-full ${votes['t1'] === 'down' ? 'bg-red-100 text-red-700' : 'text-gray-500 hover:bg-gray-100'}`}
                >
                  <ThumbsDown size={14} />
                  <span>Not helpful (2)</span>
                </button>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="flex items-start gap-4 mb-4">
              <img 
                src="https://randomuser.me/api/portraits/men/32.jpg" 
                alt="Customer" 
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold" style={{ color: '#171717' }}>James K.</h4>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>
                  ))}
                  <span className="text-xs ml-1" style={{ color: '#888888' }}>Verified Purchase</span>
                </div>
              </div>
            </div>
            <p className="mb-4" style={{ color: '#171717' }}>
              "As a software developer, I needed something to help me take mental breaks. This kinetic art piece is perfect - I wind it up in the morning, and throughout the day, I find myself looking up at it when I need to reset my brain. The craftsmanship is exceptional."
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm" style={{ color: '#888888' }}>1 month ago</span>
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => handleVote('t2', 'up')}
                  className={`flex items-center gap-1 text-sm px-2 py-1 rounded-full ${votes['t2'] === 'up' ? 'bg-green-100 text-green-700' : 'text-gray-500 hover:bg-gray-100'}`}
                >
                  <ThumbsUp size={14} />
                  <span>Helpful (42)</span>
                </button>
                <button 
                  onClick={() => handleVote('t2', 'down')}
                  className={`flex items-center gap-1 text-sm px-2 py-1 rounded-full ${votes['t2'] === 'down' ? 'bg-red-100 text-red-700' : 'text-gray-500 hover:bg-gray-100'}`}
                >
                  <ThumbsDown size={14} />
                  <span>Not helpful (1)</span>
                </button>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="flex items-start gap-4 mb-4">
              <img 
                src="https://randomuser.me/api/portraits/women/68.jpg" 
                alt="Customer" 
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold" style={{ color: '#171717' }}>Emily R.</h4>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star, idx) => (
                    <svg key={star} className={`w-4 h-4 ${idx < 4 ? 'text-yellow-400' : 'text-gray-300'} fill-current`} viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>
                  ))}
                  <span className="text-xs ml-1" style={{ color: '#888888' }}>Verified Purchase</span>
                </div>
              </div>
            </div>
            <p className="mb-4" style={{ color: '#171717' }}>
              "The assembly was a bit challenging, but the end result is worth it. It's become the centerpiece of our living room, and guests are always mesmerized by it. I love that it doesn't require batteries or electricity - just a simple wind-up and it runs for hours."
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm" style={{ color: '#888888' }}>3 months ago</span>
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => handleVote('t3', 'up')}
                  className={`flex items-center gap-1 text-sm px-2 py-1 rounded-full ${votes['t3'] === 'up' ? 'bg-green-100 text-green-700' : 'text-gray-500 hover:bg-gray-100'}`}
                >
                  <ThumbsUp size={14} />
                  <span>Helpful (18)</span>
                </button>
                <button 
                  onClick={() => handleVote('t3', 'down')}
                  className={`flex items-center gap-1 text-sm px-2 py-1 rounded-full ${votes['t3'] === 'down' ? 'bg-red-100 text-red-700' : 'text-gray-500 hover:bg-gray-100'}`}
                >
                  <ThumbsDown size={14} />
                  <span>Not helpful (3)</span>
                </button>
              </div>
            </div>
          </div>

          {/* Testimonial 4 */}
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 md:block hidden">
            <div className="flex items-start gap-4 mb-4">
              <img 
                src="https://randomuser.me/api/portraits/men/52.jpg" 
                alt="Customer" 
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold" style={{ color: '#171717' }}>Michael T.</h4>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>
                  ))}
                  <span className="text-xs ml-1" style={{ color: '#888888' }}>Verified Purchase</span>
                </div>
              </div>
            </div>
            <p className="mb-4" style={{ color: '#171717' }}>
              "I bought this for my meditation space, and it's been transformative. The gentle motion helps me focus during meditation, and the craftsmanship is exceptional. The wood grain is beautiful, and the mechanism works flawlessly."
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm" style={{ color: '#888888' }}>2 weeks ago</span>
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => handleVote('t4', 'up')}
                  className={`flex items-center gap-1 text-sm px-2 py-1 rounded-full ${votes['t4'] === 'up' ? 'bg-green-100 text-green-700' : 'text-gray-500 hover:bg-gray-100'}`}
                >
                  <ThumbsUp size={14} />
                  <span>Helpful (31)</span>
                </button>
                <button 
                  onClick={() => handleVote('t4', 'down')}
                  className={`flex items-center gap-1 text-sm px-2 py-1 rounded-full ${votes['t4'] === 'down' ? 'bg-red-100 text-red-700' : 'text-gray-500 hover:bg-gray-100'}`}
                >
                  <ThumbsDown size={14} />
                  <span>Not helpful (0)</span>
                </button>
              </div>
            </div>
          </div>

          {/* Testimonial 5 */}
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 lg:block hidden">
            <div className="flex items-start gap-4 mb-4">
              <img 
                src="https://randomuser.me/api/portraits/women/22.jpg" 
                alt="Customer" 
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold" style={{ color: '#171717' }}>Lisa J.</h4>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>
                  ))}
                  <span className="text-xs ml-1" style={{ color: '#888888' }}>Verified Purchase</span>
                </div>
              </div>
            </div>
            <p className="mb-4" style={{ color: '#171717' }}>
              "As an interior designer, I'm always looking for unique pieces that make a statement. This kinetic wall art has become my go-to recommendation for clients who want something different. It's both functional art and a conversation starter."
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm" style={{ color: '#888888' }}>1 month ago</span>
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => handleVote('t5', 'up')}
                  className={`flex items-center gap-1 text-sm px-2 py-1 rounded-full ${votes['t5'] === 'up' ? 'bg-green-100 text-green-700' : 'text-gray-500 hover:bg-gray-100'}`}
                >
                  <ThumbsUp size={14} />
                  <span>Helpful (27)</span>
                </button>
                <button 
                  onClick={() => handleVote('t5', 'down')}
                  className={`flex items-center gap-1 text-sm px-2 py-1 rounded-full ${votes['t5'] === 'down' ? 'bg-red-100 text-red-700' : 'text-gray-500 hover:bg-gray-100'}`}
                >
                  <ThumbsDown size={14} />
                  <span>Not helpful (1)</span>
                </button>
              </div>
            </div>
          </div>

          {/* Testimonial 6 */}
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 lg:block hidden">
            <div className="flex items-start gap-4 mb-4">
              <img 
                src="https://randomuser.me/api/portraits/men/76.jpg" 
                alt="Customer" 
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold" style={{ color: '#171717' }}>Robert N.</h4>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star, idx) => (
                    <svg key={star} className={`w-4 h-4 ${idx < 5 ? 'text-yellow-400' : 'text-gray-300'} fill-current`} viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>
                  ))}
                  <span className="text-xs ml-1" style={{ color: '#888888' }}>Verified Purchase</span>
                </div>
              </div>
            </div>
            <p className="mb-4" style={{ color: '#171717' }}>
              "I was skeptical about the price at first, but after having this piece for three months, I can say it's worth every penny. The quality is outstanding, and the motion is truly mesmerizing. It's become my favorite way to take mental breaks during my workday."
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm" style={{ color: '#888888' }}>3 months ago</span>
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => handleVote('t6', 'up')}
                  className={`flex items-center gap-1 text-sm px-2 py-1 rounded-full ${votes['t6'] === 'up' ? 'bg-green-100 text-green-700' : 'text-gray-500 hover:bg-gray-100'}`}
                >
                  <ThumbsUp size={14} />
                  <span>Helpful (19)</span>
                </button>
                <button 
                  onClick={() => handleVote('t6', 'down')}
                  className={`flex items-center gap-1 text-sm px-2 py-1 rounded-full ${votes['t6'] === 'down' ? 'bg-red-100 text-red-700' : 'text-gray-500 hover:bg-gray-100'}`}
                >
                  <ThumbsDown size={14} />
                  <span>Not helpful (2)</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button 
            className="px-8 py-3 rounded-full font-semibold text-white transition-all duration-300"
            style={{ backgroundColor: '#563232' }}
            onClick={() => window.open('https://mindsightnow.com/products/kinetic-wall-art#reviews', '_blank')}
          >
            View All Reviews
          </button>
        </div>
      </div>
    </section>
  );
};

export default KineticWallArtTestimonials;