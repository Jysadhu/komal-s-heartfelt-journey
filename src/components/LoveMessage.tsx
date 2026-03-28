import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

const springSoft = { type: "spring" as const, stiffness: 120, damping: 22, mass: 0.9 };

const HIGHLIGHTS = [
  "Your smile is sunrise to me; your laugh is my favourite melody.",
  "My peace, my happiness — my reason to believe in beautiful things.",
  "With you, the world fades — only the quiet magic between us stays.",
  "In every storm and every sunshine — I'm with you. You deserve the universe.",
] as const;

const LoveMessage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.14,
        delayChildren: 0.12,
        when: "beforeChildren" as const,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { ...springSoft },
    },
  };

  return (
    <section
      className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 relative overflow-hidden flex justify-center items-center min-h-[88vh]"
      aria-labelledby="love-letter-heading"
    >
      <div className="absolute inset-0 romantic-gradient-bg pointer-events-none" />
      <motion.div
        className="absolute top-0 right-0 w-[min(100%,42rem)] h-[min(100%,42rem)] radial-glow-primary pointer-events-none translate-x-1/4 -translate-y-1/4 opacity-45"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.45, scale: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-[min(100%,40rem)] h-[min(100%,40rem)] radial-glow-rose pointer-events-none -translate-x-1/4 translate-y-1/4 opacity-40"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 1.4, delay: 0.2, ease: "easeOut" }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px", amount: 0.15 }}
        className="w-full max-w-3xl relative z-10"
      >
        <div className="relative rounded-[1.75rem] md:rounded-[2.25rem] p-[1px] bg-gradient-to-br from-primary/35 via-border/60 to-secondary/25 shadow-[0_24px_80px_-20px_hsl(0_0%_0%/0.55)]">
          <div className="glass-card rounded-[1.7rem] md:rounded-[2.2rem] p-8 sm:p-10 md:p-14 lg:p-16 relative overflow-hidden">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.4]"
              style={{
                background:
                  "radial-gradient(ellipse 80% 70% at 50% 0%, hsl(var(--primary) / 0.06), transparent 55%)",
              }}
            />

            <div className="relative z-10 flex flex-col gap-10 md:gap-12">
              <div className="flex flex-col items-center text-center gap-5">
                <motion.p
                  variants={fadeUp}
                  className="font-body text-xs sm:text-sm uppercase tracking-[0.28em] text-primary/80 font-semibold"
                >
                  Happy Birthday
                </motion.p>

                <motion.div variants={fadeUp} className="flex flex-col items-center gap-3">
                  <motion.h2
                    id="love-letter-heading"
                    className="font-script text-5xl sm:text-6xl md:text-7xl lg:text-8xl gradient-text leading-none drop-shadow-md"
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    Komal
                  </motion.h2>
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                    aria-hidden
                  >
                    <Heart className="w-9 h-9 sm:w-10 sm:h-10 text-primary fill-primary/25 drop-shadow-[0_0_18px_hsl(var(--primary)/0.45)]" />
                  </motion.div>
                </motion.div>
              </div>

              <motion.div variants={fadeUp} className="max-w-xl mx-auto w-full">
                <blockquote className="pl-5 sm:pl-6 py-3 text-left border-l-[3px] border-primary/45 rounded-sm bg-primary/[0.04] pr-4">
                  <p className="font-heading text-base sm:text-lg md:text-xl text-primary/95 italic leading-relaxed">
                    On your day, I want you to know: you&apos;ve painted my world with colours I never knew I
                    needed. <span aria-hidden>❤️</span>
                  </p>
                </blockquote>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="flex items-center justify-center gap-3 text-primary/50"
                aria-hidden
              >
                <span className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent to-primary/40" />
                <Sparkles className="w-4 h-4 animate-pulse" />
                <span className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent to-primary/40" />
              </motion.div>

              <motion.div variants={fadeUp} className="max-w-lg mx-auto w-full text-left space-y-6">
                <p className="font-heading text-foreground text-base sm:text-lg md:text-[1.05rem] leading-[1.85] font-normal tracking-wide">
                  Before you, my days were ordinary — you made them luminescent. You aren&apos;t only someone I
                  love; you&apos;re the warmth behind every good thought I have.
                </p>

                <div className="rounded-xl sm:rounded-2xl border border-primary/15 bg-primary/[0.04] px-4 py-5 sm:px-5 sm:py-6">
                  <p className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4 font-semibold">
                    What you are to me
                  </p>
                  <ul className="space-y-3.5 list-none">
                    {HIGHLIGHTS.map((line, i) => (
                      <li
                        key={i}
                        className="flex gap-3 items-start font-heading text-foreground/95 text-[0.95rem] sm:text-base leading-snug"
                      >
                        <span
                          className="shrink-0 w-5 h-5 mt-0.5 rounded-full bg-primary/15 text-primary text-xs font-semibold flex items-center justify-center leading-none select-none"
                          aria-hidden
                        >
                          {i + 1}
                        </span>
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="font-heading text-foreground text-base sm:text-lg leading-[1.85]">
                  Happy Birthday, my love. May this year return to you every bit of joy your beautiful soul shares
                  with the world. <span aria-hidden>🌹</span>
                </p>
              </motion.div>

              <motion.footer
                variants={fadeUp}
                className="pt-6 md:pt-8 flex flex-col items-center border-t border-primary/15"
              >
                <motion.span
                  className="font-script text-2xl sm:text-3xl md:text-4xl gradient-text text-center px-2"
                  whileHover={{ scale: 1.03 }}
                  transition={springSoft}
                >
                  Forever yours
                  <span className="text-primary not-italic"> ♥</span>
                </motion.span>
              </motion.footer>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default LoveMessage;
