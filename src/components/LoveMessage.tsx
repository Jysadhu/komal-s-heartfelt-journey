import { motion } from "framer-motion";
import { Feather } from "lucide-react";

const LoveMessage = () => {
  return (
    <section className="py-24 px-6 bg-background relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-primary/5 blur-[150px] rounded-full" />
      <div className="absolute top-4 left-4 text-3xl opacity-[0.06] animate-sway">🌿</div>
      <div className="absolute bottom-8 right-8 text-4xl opacity-[0.06] animate-sway" style={{ animationDelay: '1s' }}>🍃</div>
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-2xl mx-auto text-center relative z-10"
      >
        <div className="divider-ornament max-w-xs mx-auto mb-6">
          <Feather className="w-4 h-4 text-vine-gold" />
        </div>
        
        <h2 className="font-heading text-3xl md:text-5xl font-light text-foreground mb-12 italic">
          A Letter From <span className="gradient-text">My Heart</span>
        </h2>

        <div className="glass-card rounded-2xl p-8 md:p-12 text-left space-y-6 border-vine-leaf/10">
          {[
            "My dearest Komal,",
            "On this special day, I want you to know just how deeply you've changed my world. Before you, my days were ordinary — but you painted them with colors I never knew existed. Every smile of yours is like a sunrise that fills my heart with warmth, every laugh of yours is the sweetest melody I've ever heard.",
            "You are not just someone I love — you are my peace, my happiness, my reason to believe in beautiful things. When I'm with you, the whole world fades away and all that remains is the magic between us. You make the ordinary extraordinary, and the impossible feel within reach.",
            "I promise to be there for you — in every storm and every sunshine, in every tear and every smile. You deserve the universe, and I'll spend every day trying to give you exactly that. Happy Birthday, my love. May this year bring you all the joy your beautiful soul deserves.",
          ].map((text, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.15 }}
              className={`font-body leading-relaxed text-base md:text-lg ${
                i === 0 ? "text-vine-gold font-medium" : "text-foreground/80 font-light"
              }`}
            >
              {text}
            </motion.p>
          ))}

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
            className="font-script text-3xl md:text-4xl gradient-text text-right mt-8 pt-4 border-t border-border"
          >
            Forever yours ♥
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default LoveMessage;
