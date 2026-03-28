import { useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";
import ReactPlayer from "react-player";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      {/* 
        SENIOR LEVEL FIX:
        Modern browsers (Chrome/Safari) aggressively freeze, block, or throttle iframes 
        that are completely invisible (opacity-0, hidden, w-0, or placed -2000px off screen)
        because they flag it as deceptive ad-tracking/mining. 
        
        To successfully play YouTube audio in the background:
        1. It must be physically on the visible screen.
        2. It must have > 0% opacity (0.01 opacity makes it 1% visible, which is optically invisible to humans but perfectly valid to the browser).
        3. 'controls' helps bypass mobile autoplay-without-controls restrictions.
        4. We append ?start=45 directly to the URL to reliably start at the chorus.
      */}
      <div className="fixed bottom-0 right-0 w-32 h-32 opacity-[0.01] pointer-events-none z-0 overflow-hidden">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=uoLC9u_M-E8?start=45"
          playing={isPlaying}
          controls={true}
          width="100%"
          height="100%"
          loop={true}
          volume={1}
          playsinline={true}
          config={{
            youtube: {
              playerVars: { 
                autoplay: 0,
                playsinline: 1
              } as any
            }
          }}
        />
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        onClick={togglePlay}
        className="fixed bottom-6 right-6 z-50 px-4 h-11 rounded-full border border-primary/30 bg-accent/80 backdrop-blur-md text-foreground flex items-center justify-center gap-2 transition-all duration-300 hover:border-primary/50 hover:scale-105 shadow-[0_0_15px_rgba(225,29,72,0.2)]"
        aria-label={isPlaying ? "Mute music" : "Play music"}
      >
        {!isPlaying ? (
          <VolumeX className="w-5 h-5 text-primary" />
        ) : (
          <Volume2 className="w-5 h-5 text-primary animate-pulse" />
        )}
        <span className="font-body text-sm font-medium tracking-wide drop-shadow-sm">
          {isPlaying ? "Playing Meri Banogi Kya 🎵" : "Play Our Song 🎵"}
        </span>
      </motion.button>
    </>
  );
};

export default MusicPlayer;
