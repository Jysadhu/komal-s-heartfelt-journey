import { motion } from "framer-motion";
import { Heart, Quote } from "lucide-react";

const LoveMessage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden flex justify-center items-center min-h-[90vh]">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] radial-glow-primary pointer-events-none translate-x-1/3 -translate-y-1/3 opacity-50" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] radial-glow-rose pointer-events-none -translate-x-1/3 translate-y-1/3 opacity-50" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="w-full max-w-4xl relative z-10"
      >
        <div className="glass-card rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden shadow-2xl border border-primary/20 backdrop-blur-xl">

          {/* Subtle Quote Icon Background */}
          <Quote className="absolute -top-4 -left-4 w-40 h-40 text-primary/[0.03] -rotate-12 pointer-events-none" />
          <Quote className="absolute -bottom-4 -right-4 w-40 h-40 text-primary/[0.03] rotate-180 pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center text-center space-y-14">

            {/* Greeting */}
            <motion.div variants={itemVariants} className="flex flex-col items-center gap-4">
              <span className="font-script text-6xl md:text-7xl gradient-text leading-relaxed py-2 px-4 drop-shadow-lg">
                Komal
              </span>
              <Heart className="w-8 h-8 text-primary animate-pulse fill-primary/30 drop-shadow-[0_0_15px_rgba(225,29,72,0.5)]" />
            </motion.div>

            {/* Highlighted Prologue */}
            <motion.div variants={itemVariants} className="relative">
              <div className="absolute -inset-4 bg-primary/5 blur-xl rounded-full -z-10" />
              <p className="font-heading text-2xl md:text-3xl text-primary/90 italic tracking-wide pb-4 drop-shadow-md">
                તું છે એટલે હું છું… બસ એટલું simple છે ❤️
              </p>
            </motion.div>

            {/* Letter Body */}
            <div className="space-y-12 text-foreground/90 font-light leading-[2.5] text-xl md:text-2xl max-w-2xl mx-auto font-heading px-4">
              <motion.p variants={itemVariants} className="hover:text-primary/80 transition-colors duration-500">
                ખબર છે… <br />
                હું પહેલા બધું manage કરી લેતો હતો એકલો.
              </motion.p>

              <motion.p variants={itemVariants} className="hover:text-primary/80 transition-colors duration-500">
                પણ તું આવી ને… <br />
                એવી રીતે life માં set થઈ ગઈ, <br />
                કે હવે તારા વગર કંઈ manage કરવાનું મન જ નથી થતું.
              </motion.p>

              <motion.p variants={itemVariants} className="hover:text-primary/80 transition-colors duration-500">
                તું સાથે હોય ને… <br />
                તો life easy લાગી જાય છે… <br />
                અને તું ના હોય… <br />
                તો બધું થોડું heavy લાગી જાય છે ❤️
              </motion.p>
            </div>

            {/* Closing */}
            <motion.div variants={itemVariants} className="pt-12 w-full flex flex-col items-center gap-6 border-t border-primary/20 relative">
              <div className="absolute -top-px left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
              <span className="font-script text-4xl md:text-5xl gradient-text py-2 px-4">
                Forever yours ♥
              </span>
            </motion.div>

          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default LoveMessage;
