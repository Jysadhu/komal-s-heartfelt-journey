import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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
    <section className="relative min-h-screen flex items-center justify-center romantic-gradient-bg overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(340_65%_55%_/_0.1),_transparent_70%)]" />
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 text-center px-6"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
          className="text-6xl md:text-8xl mb-6"
        >
          🎂
        </motion.div>

        <h1 className="font-script text-5xl md:text-7xl lg:text-8xl gradient-text mb-4 leading-tight">
          Happy Birthday
        </h1>
        <motion.p
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="font-script text-4xl md:text-6xl text-romantic-pink mb-8"
        >
          Komal ❤️
        </motion.p>

        <div className="h-16 flex items-center justify-center">
          <p className="font-body text-lg md:text-xl text-muted-foreground italic">
            {displayText}
            <span className="animate-pulse text-romantic-pink">|</span>
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-12"
        >
          <motion.span
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="inline-block text-2xl text-romantic-lavender"
          >
            ↓
          </motion.span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
