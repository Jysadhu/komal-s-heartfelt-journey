import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const memories = [
  {
    date: "22 December 2025",
    title: "Our First Meet",
    description: "The day my world changed forever. I saw you for the first time and knew you were the one. That moment is forever etched in my heart.",
    icon: "🌱",
  },
  {
    date: "Every Day Since",
    title: "Falling Deeper",
    description: "Every single day with you has been a gift. From late-night conversations to silly inside jokes — every moment with you is a treasure.",
    icon: "🌿",
  },
  {
    date: "5 April 2026",
    title: "Your Special Day",
    description: "Today we celebrate the most beautiful soul I've ever known. Happy Birthday, my love!",
    icon: "🌸",
  },
];

const MemoriesSection = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden" style={{ background: 'var(--gradient-section)' }}>
      <div className="absolute bottom-0 left-0 w-[500px] h-[300px] bg-vine-gold/5 blur-[150px] rounded-full" />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto relative z-10"
      >
        <div className="divider-ornament max-w-xs mx-auto mb-6">
          <span className="text-vine-leaf text-sm">🍃</span>
        </div>
        
        <h2 className="font-heading text-3xl md:text-5xl font-light text-foreground text-center mb-16 italic">
          Our Beautiful <span className="gradient-text">Memories</span>
        </h2>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-vine-leaf/20 to-transparent transform md:-translate-x-px" />

          {memories.map((memory, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.7 }}
              className={`relative flex items-start mb-14 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 z-10">
                <motion.div
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ repeat: Infinity, duration: 3, delay: i * 0.5 }}
                  className="w-10 h-10 rounded-full bg-accent border border-vine-leaf/30 flex items-center justify-center"
                >
                  <Heart className="w-4 h-4 text-primary fill-current" />
                </motion.div>
              </div>

              <div className={`ml-16 md:ml-0 md:w-5/12 ${i % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                <div className="glass-card rounded-2xl p-6 hover:border-vine-leaf/20 transition-colors duration-500">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg">{memory.icon}</span>
                    <span className="font-body text-[10px] tracking-[0.2em] uppercase text-vine-gold">
                      {memory.date}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl text-foreground mb-2 italic">
                    {memory.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed font-light">
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
