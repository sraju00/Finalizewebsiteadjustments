import { Play, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import systemDiagram from 'figma:asset/630a6223e1ef15211c8379dedfa27d9ac8dc2127.png';

interface VideoSectionProps {
  onOpenAIReports?: () => void;
}

export function VideoSection({ onOpenAIReports }: VideoSectionProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  
  // 🎥 VIDEO SETUP - Replace with your video URL:
  // For YouTube: Get the embed URL from YouTube (Share → Embed → copy src URL)
  //   Example: "https://www.youtube.com/embed/YOUR_VIDEO_ID"
  // For Vimeo: Use format "https://player.vimeo.com/video/YOUR_VIDEO_ID"
  // For Loom: Use format "https://www.loom.com/embed/YOUR_VIDEO_ID"
  const videoUrl = "https://www.youtube.com/embed/OGsxIaAQKQg"; // YouTube video: The Seller Intelligence System
  
  // Set this to true once you have a real video URL
  const hasVideo = true; // Change to true when you add your video

  const systemFeatures = [
    "Real-time market analysis to identify where demand is breaking down",
    "Buyer behavior insights showing why buyers didn't click, tour, or offer",
    "Pricing optimization based on buyer resistance — not comps alone",
    "Multi-channel exposure strategy aligned with active buyer searches",
    "Performance tracking so adjustments are made early, not after weeks",
    "Strategic relaunch methodology to reset buyer perception correctly"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            <div className="inline-block bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Proprietary Technology
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              The Seller Intelligence System™
            </h2>
            
            <p className="text-xl text-gray-300 mb-8">
              See how the Seller Intelligence System™ combines 8 proprietary frameworks to pinpoint why your home didn't sell — and translate that data into a clear, human-advised relaunch strategy designed to work within 30 days.
            </p>

            {/* Features */}
            <div className="space-y-3 mb-8">
              {systemFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center gap-2 font-medium" onClick={onOpenAIReports}>
              Get Your Free AI Audit →
            </button>
            
            <p className="text-sm text-gray-400 mt-3">
              No obligation • Human-reviewed
            </p>
          </div>

          {/* Right: Video Player */}
          <div className="relative">
            <div className="aspect-video bg-gray-800 rounded-2xl overflow-hidden shadow-2xl relative group">
              {hasVideo && isPlaying ? (
                // Real Video Embed (shows when playing)
                <iframe
                  src={`${videoUrl}?autoplay=1`}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Seller Intelligence System Video"
                ></iframe>
              ) : (
                // Thumbnail with Play Button (shows before playing)
                <div 
                  className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center cursor-pointer"
                  onClick={() => hasVideo && setIsPlaying(true)}
                >
                  {/* Play Button */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-white/20 rounded-full blur-2xl scale-150"></div>
                    <div className="relative bg-white text-blue-600 w-20 h-20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl">
                      <Play className="w-8 h-8 ml-1" fill="currentColor" />
                    </div>
                  </div>
                </div>
              )}

              {/* Video Overlay Text - Only show when not playing */}
              {!isPlaying && (
                <>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 pointer-events-none">
                    <div className="text-sm font-medium text-blue-400 mb-1">Video</div>
                    <div className="text-lg font-bold">How the System Works</div>
                    <div className="text-sm text-gray-300">
                      Watch how expired listings are analyzed, repositioned, and relaunched using real data.
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-sm pointer-events-none">
                    5:32
                  </div>
                </>
              )}
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-500 rounded-full opacity-20 blur-3xl pointer-events-none"></div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-purple-500 rounded-full opacity-20 blur-3xl pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
}