import FloatingHearts from "@/components/FloatingHearts";
import HeroSection from "@/components/HeroSection";
import CountdownSection from "@/components/CountdownSection";
import LoveMessage from "@/components/LoveMessage";
import MemoriesSection from "@/components/MemoriesSection";
import PhotoGallery from "@/components/PhotoGallery";
import SurpriseSection from "@/components/SurpriseSection";
import MusicPlayer from "@/components/MusicPlayer";
import BirthdayFooter from "@/components/BirthdayFooter";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Index = () => {
  const [showSecret, setShowSecret] = useState(false);

  return (
    <div className="relative overflow-x-hidden" onDoubleClick={() => setShowSecret(true)}>
      <FloatingHearts />
      <MusicPlayer />
      <HeroSection />
      <CountdownSection />
      <LoveMessage />
      <MemoriesSection />
      <PhotoGallery />
      <SurpriseSection />
      <BirthdayFooter />

      <AnimatePresence>
        {showSecret && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowSecret(false)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-6 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 200 }}
              className="glass-card rounded-3xl p-10 md:p-16 text-center border-wine-rose/30 glow-effect max-w-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="text-6xl mb-6 inline-block text-primary drop-shadow-[0_0_20px_rgba(218,165,32,0.6)]"
              >
                ❤️
              </motion.div>
              <h2 className="font-heading text-3xl md:text-5xl font-light text-white italic mb-4">
                Only <span className="gradient-text-gold font-medium">you</span> deserve this kind of love
              </h2>
              <p className="font-body text-wine-blush/80 mt-6 tracking-wide font-light">
                (Click anywhere to close)
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
