import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback } from "react";
import confetti from "canvas-confetti";
import { Gift, Heart, X, Sparkles } from "lucide-react";

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
        colors: ["#4a9e5f", "#d4a030", "#6bbf7a", "#2d6e3f", "#c084fc"],
        shapes: [heartShape, "circle"],
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.7 },
        colors: ["#4a9e5f", "#d4a030", "#6bbf7a", "#2d6e3f", "#c084fc"],
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
    <section className="py-24 px-6 relative overflow-hidden" style={{ background: 'var(--gradient-section)' }}>
      <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-vine-gold/5 blur-[150px] rounded-full" />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto text-center relative z-10"
      >
        <div className="divider-ornament max-w-xs mx-auto mb-6">
          <Sparkles className="w-4 h-4 text-vine-gold" />
        </div>
        
        <h2 className="font-heading text-3xl md:text-5xl font-light text-foreground mb-10 italic">
          A Little <span className="gradient-text">Surprise</span>
        </h2>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleClick}
          className="inline-flex items-center gap-3 px-10 py-4 rounded-full border border-vine-leaf/30 bg-accent/50 text-foreground font-body font-medium text-base tracking-wide gold-glow transition-all duration-300 hover:border-vine-leaf/50 hover:bg-accent"
        >
          <Gift className="w-5 h-5 text-vine-gold" />
          Open Your Gift
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
            <div className="absolute inset-0 bg-background/80 backdrop-blur-md" />
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="relative glass-card rounded-2xl p-10 md:p-14 max-w-md w-full text-center z-10 border-vine-leaf/20"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <motion.div
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="text-5xl mb-6 inline-block"
              >
                🌿
              </motion.div>

              <h3 className="font-script text-3xl md:text-4xl gradient-text mb-3">
                I Love You So Much
              </h3>
              <p className="font-heading text-2xl text-foreground italic mb-2">
                Komal
              </p>
              <p className="font-body text-muted-foreground text-sm mt-4 font-light leading-relaxed">
                You mean everything to me. Happy Birthday, my love! 🌸
              </p>

              <div className="flex justify-center gap-3 mt-8">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ y: [0, -8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.2 }}
                  >
                    <Heart className="w-4 h-4 text-primary fill-current" />
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
