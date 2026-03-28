import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Leaf } from "lucide-react";

const phrases = [
  "You are the most special part of my life...",
  "Every moment with you feels like magic...",
  "My heart beats only for you, Komal ❤️",
];

const HeroSection = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const phrase = phrases[currentPhrase];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(phrase.slice(0, displayText.length + 1));
          if (displayText.length === phrase.length) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setDisplayText(phrase.slice(0, displayText.length - 1));
          if (displayText.length === 0) {
            setIsDeleting(false);
            setCurrentPhrase((prev) => (prev + 1) % phrases.length);
          }
        }
      },
      isDeleting ? 30 : 60
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentPhrase]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: 'var(--gradient-hero)' }}>
      {/* Vine decorations */}
      <div className="absolute top-0 left-0 w-full h-32 opacity-10">
        <div className="absolute top-4 left-8 text-4xl animate-sway">🌿</div>
        <div className="absolute top-8 right-12 text-3xl animate-sway" style={{ animationDelay: '1s' }}>🍃</div>
        <div className="absolute top-2 left-1/3 text-2xl animate-sway" style={{ animationDelay: '0.5s' }}>🌱</div>
      </div>
      
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/8 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-vine-gold/8 blur-[100px]" />
      
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-vine-leaf/25"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{ opacity: [0.15, 0.5, 0.15], scale: [1, 1.5, 1] }}
            transition={{ repeat: Infinity, duration: 3, delay: i * 0.5 }}
          />
        ))}
      </div>
      
      {/* Bottom vine decorations */}
      <div className="absolute bottom-0 left-0 w-full h-24 opacity-10">
        <div className="absolute bottom-4 right-8 text-4xl animate-sway" style={{ animationDelay: '2s' }}>🌿</div>
        <div className="absolute bottom-6 left-16 text-3xl animate-sway" style={{ animationDelay: '1.5s' }}>🍃</div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="relative z-10 text-center px-6"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 80 }}
          className="flex items-center justify-center gap-2 mb-8"
        >
          <Leaf className="w-4 h-4 text-vine-leaf animate-sparkle" />
          <span className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground">
            A celebration of love
          </span>
          <Leaf className="w-4 h-4 text-vine-leaf animate-sparkle" style={{ animationDelay: '1s' }} />
        </motion.div>

        <h1 className="font-script text-5xl md:text-7xl lg:text-8xl gradient-text mb-3 leading-tight">
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
          <div className="divider-ornament max-w-xs mx-auto mt-4 mb-8">
            <span className="text-vine-leaf text-sm">🌿</span>
          </div>
        </motion.div>

        <div className="h-14 flex items-center justify-center">
          <p className="font-body text-base md:text-lg text-muted-foreground font-light tracking-wide">
            {displayText}
            <span className="animate-pulse text-primary ml-0.5">|</span>
          </p>
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
            <span className="text-xs text-muted-foreground tracking-widest uppercase font-body">Scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-vine-leaf/50 to-transparent" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
