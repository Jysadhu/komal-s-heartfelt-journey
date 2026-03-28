import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Leaf } from "lucide-react";

const phrases = [
  "From the day you came into my life, everything started feeling more beautiful...",
  "You are the best thing that ever happened to me ❤️",
  "Every moment with you is a dream come true ✨",
  "I fall in love with you more every single day 🌹",
  "Komal, you are my forever and always...",
];

const HeroSection = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: 'var(--gradient-hero)' }}>
      {/* Floating Circles decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-[600px] h-[600px] radial-glow-primary animate-float-circle"></div>
        <div className="absolute top-[30%] right-[5%] w-[500px] h-[500px] radial-glow-gold animate-float-circle" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-[20%] left-[20%] w-[700px] h-[700px] radial-glow-primary animate-float-circle" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] radial-glow-primary pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] radial-glow-gold pointer-events-none translate-x-1/2 translate-y-1/2" />
      
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/60"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{ opacity: [0.15, 0.6, 0.15], scale: [1, 1.5, 1] }}
            transition={{ repeat: Infinity, duration: 4, delay: i * 0.7 }}
          />
        ))}
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 80 }}
          className="flex items-center justify-center gap-2 mb-8"
        >
          <span className="text-secondary animate-sparkle">✨</span>
          <span className="font-body text-xs tracking-[0.3em] uppercase text-primary">
            A celebration of love
          </span>
          <span className="text-secondary animate-sparkle" style={{ animationDelay: '1s' }}>✨</span>
        </motion.div>

        <h1 className="font-script text-6xl md:text-7xl lg:text-8xl gradient-text mb-3 leading-relaxed py-4 px-4">
          Happy Birthday
        </h1>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <p className="font-heading text-4xl md:text-6xl font-light text-foreground mb-2 italic">
            Komal
          </p>
          <div className="divider-ornament max-w-xs mx-auto mt-6 mb-10">
            <span className="text-secondary text-sm animate-pulse">✨</span>
          </div>
        </motion.div>

        <div className="min-h-[80px] md:min-h-[60px] flex items-center justify-center text-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentPhrase}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="font-body text-lg md:text-xl text-foreground font-light tracking-wide max-w-2xl leading-relaxed"
            >
              {phrases[currentPhrase]}
            </motion.p>
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-16"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            className="flex flex-col items-center gap-1"
          >
            <span className="text-xs text-primary tracking-widest uppercase font-body opacity-80">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent opacity-60" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
