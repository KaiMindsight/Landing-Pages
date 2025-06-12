import React, { useState } from 'react';
import { Play } from 'lucide-react';

const AmbassadorVideos = () => {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const ambassadorVideos = [
    {
      id: "video1",
      url: "https://cdn.shopify.com/videos/c/o/v/ef28812ce8fb41658ae0e60e7991282c.mp4"
    },
    {
      id: "video2", 
      url: "https://cdn.shopify.com/videos/c/o/v/7f3555c7602048838d93234105e8170c.mp4"
    },
    {
      id: "video3",
      url: "https://cdn.shopify.com/videos/c/o/v/10c91f8bdecf412882bff242b318919a.mp4"
    },
    {
      id: "video4",
      url: "https://cdn.shopify.com/videos/c/o/v/be432db4b7404cb3956133671a68ca99.mp4"
    },
    {
      id: "video5",
      url: "https://cdn.shopify.com/videos/c/o/v/ce44f5e4ca3c48f69ded0335324168c4.mp4"
    }
  ];

  const handleVideoPlay = (videoId: string) => {
    setPlayingVideo(playingVideo === videoId ? null : videoId);
  };

  return (
    <div className="mt-4">
      <h3 className="text-xs font-medium mb-3 text-center" style={{ color: '#888888' }}>
        What our Ambassadors are saying
      </h3>
      
      {/* Natural Space Video Container */}
      <div 
        className="flex gap-3 justify-between sm:justify-start sm:gap-4 overflow-x-auto pb-1" 
        style={{ 
          scrollbarWidth: 'none', 
          msOverflowStyle: 'none'
        }}
      >
        {ambassadorVideos.map((video, index) => (
          <div key={video.id} className={`flex-shrink-0 w-24 sm:w-28 md:w-24 ${index >= 3 ? 'hidden sm:block' : ''}`}>
            <div className="relative rounded-lg overflow-hidden bg-white shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300">
              {/* Video Container */}
              <div className="relative aspect-[9/16] bg-gray-100">
                {playingVideo === video.id ? (
                  <video
                    src={video.url}
                    className="w-full h-full object-cover"
                    autoPlay
                    controls
                    onEnded={() => setPlayingVideo(null)}
                  />
                ) : (
                  <>
                    {/* Video thumbnail using first frame */}
                    <video
                      src={video.url}
                      className="w-full h-full object-cover"
                      preload="metadata"
                      muted
                      playsInline
                    />
                    
                    {/* Play Button Overlay */}
                    <button
                      onClick={() => handleVideoPlay(video.id)}
                      className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-40 transition-all duration-300"
                    >
                      <div className="bg-white bg-opacity-95 rounded-full p-2 hover:bg-opacity-100 transition-all duration-300 shadow-lg">
                        <Play className="w-4 h-4 text-gray-700 ml-0.5" fill="currentColor" />
                      </div>
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AmbassadorVideos; 