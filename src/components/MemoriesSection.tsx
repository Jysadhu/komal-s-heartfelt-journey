import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const memories = [
  {
    date: "22 December 2025",
    title: "Our First Meet 💕",
    description: "The day my world changed forever. I saw you for the first time and knew you were the one. That moment is forever etched in my heart.",
  },
  {
    date: "Every Day Since",
    title: "Falling Deeper 🌹",
    description: "Every single day with you has been a gift. From late-night conversations to silly inside jokes — every moment with you is a treasure.",
  },
  {
    date: "5 April 2026",
    title: "Your Special Day 🎂",
    description: "Today we celebrate the most beautiful soul I've ever known. Happy Birthday, my love!",
  },
];

const MemoriesSection = () => {
  return (
    <section className="py-20 px-6 romantic-gradient-bg">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="font-heading text-3xl md:text-5xl gradient-text text-center mb-14">
          Our Beautiful Memories 📖
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-romantic-pink/30 transform md:-translate-x-0.5" />

          {memories.map((memory, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.7 }}
              className={`relative flex items-start mb-12 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Heart icon on timeline */}
              <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 z-10">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2, delay: i * 0.3 }}
                  className="w-10 h-10 rounded-full bg-romantic-pink flex items-center justify-center glow-effect"
                >
                  <Heart className="w-5 h-5 text-primary-foreground fill-current" />
                </motion.div>
              </div>

              {/* Content card */}
              <div className={`ml-16 md:ml-0 md:w-5/12 ${i % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                <div className="glass-card rounded-2xl p-6">
                  <span className="font-body text-xs text-romantic-purple font-semibold uppercase tracking-wider">
                    {memory.date}
                  </span>
                  <h3 className="font-heading text-xl text-foreground mt-2 mb-2">
                    {memory.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {memory.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default MemoriesSection;
