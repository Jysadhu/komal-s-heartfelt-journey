import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const BirthdayFooter = () => {
  return (
    <footer className="py-16 px-6 bg-background border-t border-border">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <p className="font-body text-muted-foreground flex items-center justify-center gap-2 text-sm tracking-wide font-light">
          Made with
          <motion.span
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <Heart className="w-4 h-4 text-primary fill-current" />
          </motion.span>
          by someone who loves you the most
        </p>
        <p className="font-script text-vine-gold text-xl mt-4">
          Happy Birthday Komal
        </p>
        <div className="divider-ornament max-w-[120px] mx-auto mt-4">
          <span className="text-vine-leaf/50 text-[10px]">🌿</span>
        </div>
      </motion.div>
    </footer>
  );
};

export default BirthdayFooter;
