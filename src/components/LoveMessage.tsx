import { motion } from "framer-motion";

const LoveMessage = () => {
  return (
    <section className="py-20 px-6 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(340_65%_55%_/_0.05),_transparent_60%)]" />
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-3xl mx-auto text-center relative z-10"
      >
        <h2 className="font-heading text-3xl md:text-5xl gradient-text mb-10">
          A Letter From My Heart 💌
        </h2>

        <div className="glass-card rounded-3xl p-8 md:p-12 text-left space-y-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="font-body text-foreground leading-relaxed text-base md:text-lg"
          >
            My dearest Komal,
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="font-body text-foreground leading-relaxed text-base md:text-lg"
          >
            On this special day, I want you to know just how deeply you've changed my world. 
            Before you, my days were ordinary — but you painted them with colors I never knew existed. 
            Every smile of yours is like a sunrise that fills my heart with warmth, every laugh of yours 
            is the sweetest melody I've ever heard.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="font-body text-foreground leading-relaxed text-base md:text-lg"
          >
            You are not just someone I love — you are my peace, my happiness, my reason to believe 
            in beautiful things. When I'm with you, the whole world fades away and all that remains 
            is the magic between us. You make the ordinary extraordinary, and the impossible feel within reach.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
            className="font-body text-foreground leading-relaxed text-base md:text-lg"
          >
            I promise to be there for you — in every storm and every sunshine, in every tear and every smile. 
            You deserve the universe, and I'll spend every day trying to give you exactly that. 
            Happy Birthday, my love. May this year bring you all the joy your beautiful soul deserves. 🌹
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.1 }}
            className="font-script text-2xl md:text-3xl text-romantic-pink text-right mt-6"
          >
            Forever yours ❤️
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default LoveMessage;
