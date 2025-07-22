import { useState } from "react";
import { Play, Pause } from "lucide-react";

const KineticWallArtAmbassadorVideos = () => {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

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

  const handleVideoPlay = (index: number) => {
    // If there's a video playing, pause it
    if (playingVideo !== null) {
      const currentVideo = document.getElementById(`video-${playingVideo}`) as HTMLVideoElement;
      if (currentVideo) {
        currentVideo.pause();
      }
    }

    // If clicking on the same video that's playing, pause it
    if (playingVideo === index) {
      setPlayingVideo(null);
      return;
    }

    // Play the new video
    const newVideo = document.getElementById(`video-${index}`) as HTMLVideoElement;
    if (newVideo) {
      newVideo.play();
      setPlayingVideo(index);
    }
  };

  return (
    <section className="py-16 px-4" style={{ backgroundColor: '#F9F7F4' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#171717' }}>
            What Our Ambassadors Are Saying
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#888888' }}>
            See how the Mindsight Kinetic Wall Art is transforming spaces and minds
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ambassadorVideos.map((video, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative">
                <video 
                  id={`video-${index}`}
                  src={video.src} 
                  className="w-full h-64 object-cover"
                  muted 
                  playsInline
                  loop
                />
                <button 
                  onClick={() => handleVideoPlay(index)}
                  className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-all duration-300"
                >
                  {playingVideo === index ? (
                    <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                      <Pause className="text-gray-800" size={20} />
                    </div>
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                      <Play className="text-gray-800 ml-1" size={20} />
                    </div>
                  )}
                </button>
              </div>
              <div className="p-4">
                <p className="font-semibold" style={{ color: '#563232' }}>
                  {video.handle} <span className="text-gray-500 font-normal">({video.followers})</span>
                </p>
                <p className="text-gray-700 text-sm mt-1">"{video.quote}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KineticWallArtAmbassadorVideos;