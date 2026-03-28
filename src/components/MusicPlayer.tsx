import { useState, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";

const MusicPlayer = () => {
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      if (isMuted) {
        audioRef.current.play().catch(() => {});
      }
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        loop
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
      />
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        onClick={toggleMute}
        className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full border border-romantic-gold/30 bg-muted/80 backdrop-blur-md text-foreground flex items-center justify-center transition-all duration-300 hover:border-romantic-gold/50 hover:scale-110"
        aria-label={isMuted ? "Unmute music" : "Mute music"}
      >
        {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
      </motion.button>
    </>
  );
};

export default MusicPlayer;
