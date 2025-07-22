import { useState } from "react";

const KineticWallArtTestimonials2 = () => {
  const [activeTab, setActiveTab] = useState<'reviews' | 'videos'>('reviews');

  // Ambassador videos from the provided HTML
  const ambassadorVideos = [
    {
      src: "https://cdn.shopify.com/videos/c/o/v/bc19467c99d142a297c83d4ce18dc2b5.mp4",
      handle: "@homemagazines",
      followers: "5.4K",
      quote: "The kinetic wall art became the star of our photo shoot—mesmerizing movement and whisper-quiet."
    },
    {
      src: "https://cdn.shopify.com/videos/c/o/v/4a6b0b2f909d4da7b9434c6ed468fdb5.mp4",
      handle: "@carlivalentineauthor",
      followers: "3.4K",
      quote: "Writing hours feel calmer now; every ripple reminds me to pause, breathe, and refocus."
    },
    {
      src: "https://cdn.shopify.com/videos/c/o/v/96593219a4924869b713c518f886c7ff.mp4",
      handle: "@mindsightnow",
      followers: "3.2K",
      quote: "Surreal watching our own piece spin—no batteries, just pure physics and mindful motion."
    },
    {
      src: "https://cdn.shopify.com/videos/c/o/v/2b60bf952fbd4a9193839877e9fcd9da.mp4",
      handle: "@whitehollowhome",
      followers: "1.2K",
      quote: "Clients are drawn to the warm wood grain and hypnotic patterns—this art sells itself."
    }
  ];

  // Customer reviews
  const customerReviews = [
    {
      name: "Sarah M.",
      avatar: "https://randomuser.me/api/portraits/women/42.jpg",
      rating: 5,
      date: "2 months ago",
      review: "I've placed this in my therapy office, and it's become a focal point for clients. The gentle motion helps with anxiety reduction exercises, and several clients have commented on how calming it is to watch during our sessions.",
      helpful: 24,
      notHelpful: 2
    },
    {
      name: "James K.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
      date: "1 month ago",
      review: "As a software developer, I needed something to help me take mental breaks. This kinetic art piece is perfect - I wind it up in the morning, and throughout the day, I find myself looking up at it when I need to reset my brain. The craftsmanship is exceptional.",
      helpful: 42,
      notHelpful: 1
    },
    {
      name: "Emily R.",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      rating: 4,
      date: "3 months ago",
      review: "The assembly was a bit challenging, but the end result is worth it. It's become the centerpiece of our living room, and guests are always mesmerized by it. I love that it doesn't require batteries or electricity - just a simple wind-up and it runs for hours.",
      helpful: 18,
      notHelpful: 3
    },
    {
      name: "Michael T.",
      avatar: "https://randomuser.me/api/portraits/men/52.jpg",
      rating: 5,
      date: "2 weeks ago",
      review: "I bought this for my meditation space, and it's been transformative. The gentle motion helps me focus during meditation, and the craftsmanship is exceptional. The wood grain is beautiful, and the mechanism works flawlessly.",
      helpful: 31,
      notHelpful: 0
    }
  ];

  return (
    <section className="py-20 px-4" style={{ backgroundColor: '#F9F7F4' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#171717' }}>
            What Our Community Is Saying
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#888888' }}>
            Join thousands who have transformed their spaces and minds with Mindsight Kinetic Wall Art
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-full p-1" style={{ backgroundColor: '#EFEAE5' }}>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${activeTab === 'reviews' ? 'bg-white shadow-md' : 'text-gray-600 hover:bg-white/30'}`}
            >
              Customer Reviews
            </button>
            <button
              onClick={() => setActiveTab('videos')}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${activeTab === 'videos' ? 'bg-white shadow-md' : 'text-gray-600 hover:bg-white/30'}`}
            >
              Ambassador Videos
            </button>
          </div>
        </div>

        {/* Customer Reviews Tab */}
        {activeTab === 'reviews' && (
          <div className="grid md:grid-cols-2 gap-8">
            {customerReviews.map((review, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <img 
                    src={review.avatar} 
                    alt={review.name} 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold" style={{ color: '#171717' }}>{review.name}</h4>
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className={`w-4 h-4 ${star <= review.rating ? 'text-yellow-400' : 'text-gray-300'} fill-current`} viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                        </svg>
                      ))}
                      <span className="text-xs ml-1" style={{ color: '#888888' }}>Verified Purchase</span>
                    </div>
                  </div>
                </div>
                <p className="mb-4" style={{ color: '#171717' }}>
                  "{review.review}"
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm" style={{ color: '#888888' }}>{review.date}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">
                      {review.helpful} found this helpful
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Ambassador Videos Tab */}
        {activeTab === 'videos' && (
          <div className="grid md:grid-cols-2 gap-8">
            {ambassadorVideos.map((video, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <video 
                    src={video.src} 
                    className="w-full h-64 object-cover"
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold" style={{ color: '#563232' }}>{video.handle} <span className="text-gray-500 font-normal">({video.followers})</span></h4>
                  </div>
                  <p className="text-gray-700">"{video.quote}"</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* View More Button */}
        <div className="text-center mt-12">
          <button 
            className="px-8 py-3 rounded-full font-semibold text-white transition-all duration-300"
            style={{ backgroundColor: '#563232' }}
            onClick={() => window.open('https://mindsightnow.com/products/kinetic-wall-art#reviews', '_blank')}
          >
            {activeTab === 'reviews' ? 'Read More Reviews' : 'See More Videos'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default KineticWallArtTestimonials2;