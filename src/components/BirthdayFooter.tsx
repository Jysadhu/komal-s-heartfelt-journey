import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const BirthdayFooter = () => {
  return (
    <footer className="py-12 px-6 bg-background border-t border-border">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <p className="font-body text-muted-foreground flex items-center justify-center gap-2 text-sm md:text-base">
          Made with
          <motion.span
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ repeat: Infinity, duration: 1 }}
          >
            <Heart className="w-4 h-4 text-romantic-pink fill-current" />
          </motion.span>
          by someone who loves you the most
        </p>
        <p className="font-script text-romantic-pink text-xl mt-3">
          Happy Birthday Komal ❤️
        </p>
      </motion.div>
    </footer>
  );
};

export default BirthdayFooter;
