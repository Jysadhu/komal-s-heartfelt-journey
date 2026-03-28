import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback } from "react";
import confetti from "canvas-confetti";
import { Gift, Heart, X } from "lucide-react";

const SurpriseSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const fireConfetti = useCallback(() => {
    const duration = 3000;
    const end = Date.now() + duration;

    const heartShape = confetti.shapeFromPath({
      path: "M167 72c19,-38 37,-56 75,-56 42,0 76,33 76,75 0,76 -76,151 -151,227 -76,-76 -151,-151 -151,-227 0,-42 33,-75 75,-75 ,38,0 googl56,18 76,56z",
    });

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.7 },
        colors: ["#e84393", "#a855f7", "#ec4899", "#f472b6", "#c084fc"],
        shapes: [heartShape, "circle"],
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.7 },
        colors: ["#e84393", "#a855f7", "#ec4899", "#f472b6", "#c084fc"],
        shapes: [heartShape, "circle"],
      });
      if (Date.now() < end) requestAnimationFrame(frame);
    };
    frame();
  }, []);

  const handleClick = () => {
    setIsOpen(true);
    fireConfetti();
  };

  return (
    <section className="py-20 px-6 romantic-gradient-bg">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="font-heading text-3xl md:text-5xl gradient-text mb-8">
          A Little Surprise 🎁
        </h2>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleClick}
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-body font-semibold text-lg glow-effect animate-pulse-glow transition-all"
        >
          <Gift className="w-6 h-6" />
          Click for a Surprise 🎁
        </motion.button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            onClick={() => setIsOpen(false)}
          >
            <div className="absolute inset-0 bg-romantic-deep/60 backdrop-blur-sm" />
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="relative glass-card rounded-3xl p-10 md:p-14 max-w-md w-full text-center z-10"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="text-6xl mb-6 inline-block"
              >
                ❤️
              </motion.div>

              <h3 className="font-script text-3xl md:text-4xl gradient-text mb-4">
                I Love You So Much
              </h3>
              <p className="font-script text-2xl text-romantic-pink mb-2">
                Komal ❤️
              </p>
              <p className="font-body text-muted-foreground text-sm mt-4">
                You mean everything to me. Happy Birthday, my love! 🎂✨
              </p>

              <div className="flex justify-center gap-2 mt-6">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 1, delay: i * 0.2 }}
                  >
                    <Heart className="w-5 h-5 text-romantic-pink fill-current" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default SurpriseSection;
