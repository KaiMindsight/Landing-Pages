import { Star, ThumbsUp, ThumbsDown } from "lucide-react";
import { useState } from "react";

const Testimonials = () => {
  const [votes, setVotes] = useState({
    0: { likes: 87, dislikes: 13, userVote: null },
    1: { likes: 58, dislikes: 4, userVote: null },
    2: { likes: 92, dislikes: 8, userVote: null },
    3: { likes: 76, dislikes: 6, userVote: null }
  });

  const handleVote = (testimonialIndex, voteType) => {
    setVotes(prev => {
      const currentVote = prev[testimonialIndex];
      let newLikes = currentVote.likes;
      let newDislikes = currentVote.dislikes;
      let newUserVote = voteType;

      // If user already voted, undo previous vote
      if (currentVote.userVote === 'like') {
        newLikes--;
      } else if (currentVote.userVote === 'dislike') {
        newDislikes--;
      }

      // If clicking same vote type, remove vote
      if (currentVote.userVote === voteType) {
        newUserVote = null;
      } else {
        // Add new vote
        if (voteType === 'like') {
          newLikes++;
        } else {
          newDislikes++;
        }
      }

      return {
        ...prev,
        [testimonialIndex]: {
          likes: newLikes,
          dislikes: newDislikes,
          userVote: newUserVote
        }
      };
    });
  };

  const testimonials = [
    {
      name: "Elena",
      role: "Verified Purchase",
      rating: 5,
      text: "This lockbox is perfect for storing our teen's phone during school. He can access it after school without waiting for us, but stays focused during the day. It's been a game-changer for our family!",
      image: "https://m.media-amazon.com/images/I/618RwqoHf+L.jpg"
    },
    {
      name: "Lema",
      role: "Verified Purchase", 
      rating: 5,
      text: "Sturdy build with excellent battery life. I use it to lock away my phone and gaming controllers to avoid distractions. Been using it for a year and haven't replaced the battery once. Highly recommend!",
      image: "https://m.media-amazon.com/images/I/71rePV-hpxL.jpg"
    },
    {
      name: "Rick",
      role: "Verified Purchase",
      rating: 5,
      text: "Despite initial confusion with battery placement, this arrived quickly and proved very user-friendly. Works perfectly and I recommend it to anyone struggling with personal habits. Great investment!",
      image: "https://m.media-amazon.com/images/I/61H6Sr-6oTL.jpg"
    },
    {
      name: "Sarah",
      role: "Verified Purchase",
      rating: 5,
      text: "Well-constructed and easy to use. I accidentally locked myself out in fortress mode longer than intended, but support provided an emergency code promptly. Much better than expensive competitors!",
      image: "https://m.media-amazon.com/images/I/714ffUt6cvL.jpg"
    }
  ];

  return (
    <section 
      className="py-20 px-4 relative" 
      style={{ 
        backgroundColor: '#F1F1F1',
        backgroundImage: 'url(https://cdn.shopify.com/s/files/1/0562/5505/3986/files/Updated_Background_Seemless_Transition.png?v=1750294683)',
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
            Real Stories. Real Results.
          </h2>
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
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src={testimonial.image} 
                  alt={`${testimonial.name} profile`}
                  className="w-10 h-10 rounded-full object-cover border-2 border-gray-200"
                />
                <div>
                  <div className="font-semibold" style={{ color: '#171717' }}>{testimonial.name}</div>
                  <div className="text-sm" style={{ color: '#171717' }}>{testimonial.role}</div>
                </div>
              </div>
              
              {/* Helpful voting section */}
              <div className="border-t pt-4">
                <div className="text-sm mb-2" style={{ color: '#888888' }}>Was it helpful?</div>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => handleVote(index, 'like')}
                    className={`flex items-center gap-1 px-2 py-1 rounded transition-colors ${
                      votes[index].userVote === 'like' 
                        ? 'bg-green-100 text-green-600' 
                        : 'hover:bg-gray-100 text-gray-600'
                    }`}
                  >
                    <ThumbsUp size={14} />
                    <span className="text-xs">{votes[index].likes}</span>
                  </button>
                  <button
                    onClick={() => handleVote(index, 'dislike')}
                    className={`flex items-center gap-1 px-2 py-1 rounded transition-colors ${
                      votes[index].userVote === 'dislike' 
                        ? 'bg-red-100 text-red-600' 
                        : 'hover:bg-gray-100 text-gray-600'
                    }`}
                  >
                    <ThumbsDown size={14} />
                    <span className="text-xs">{votes[index].dislikes}</span>
                  </button>
                </div>
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
