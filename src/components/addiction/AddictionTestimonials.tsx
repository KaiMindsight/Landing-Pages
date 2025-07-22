import { Star, ThumbsUp, ThumbsDown } from "lucide-react";
import { useState } from "react";

const AddictionTestimonials = () => {
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
      name: "Michael",
      role: "Verified Purchase",
      rating: 5,
      text: "This lockbox has been a game-changer for my recovery. Being able to lock away my triggers during vulnerable moments has helped me stay on track. It's simple but incredibly effective.",
      image: "https://m.media-amazon.com/images/I/618RwqoHf+L.jpg"
    },
    {
      name: "Jessica",
      role: "Verified Purchase", 
      rating: 5,
      text: "After struggling with my addiction for years, this lockbox has given me the extra support I needed. The timed lock feature means I can't access my triggers during moments of weakness. Highly recommend!",
      image: "https://m.media-amazon.com/images/I/71rePV-hpxL.jpg"
    },
    {
      name: "David",
      role: "Verified Purchase",
      rating: 5,
      text: "I was skeptical at first, but this has been an essential tool in my recovery journey. Being able to physically lock away temptations has made a huge difference in my ability to maintain sobriety.",
      image: "https://m.media-amazon.com/images/I/61H6Sr-6oTL.jpg"
    },
    {
      name: "Rachel",
      role: "Verified Purchase",
      rating: 5,
      text: "My therapist recommended this as part of my recovery plan, and it's been incredibly helpful. The physical barrier helps me pause and think before giving in to cravings. Worth every penny!",
      image: "https://m.media-amazon.com/images/I/714ffUt6cvL.jpg"
    }
  ];

  return (
    <section 
      className="py-5 px-4 relative" 
      style={{ 
        backgroundColor: '#F1F1F1',
        backgroundImage: 'url(https://cdn.shopify.com/s/files/1/0562/5505/3986/files/2_920fe594-cefa-4aae-ab6c-79a36da6d670.png?v=1749702114)',
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
            Recovery Stories. Real Results.
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


      </div>
    </section>
  );
};

export default AddictionTestimonials;