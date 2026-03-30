import { motion, useScroll, useTransform } from "framer-motion";
import { Heart } from "lucide-react";
import { useRef } from "react";

const memories = [
  {
    date: "14 December 2025",
    title: "The First Glimpse",
    description: "That day I came to see you…\nand honestly, I was a little nervous.\n\nBut the moment I saw you,\nI don’t know… something just felt right.\n\nI didn’t say anything at that time,\nbut in my head I was like —\n“haan… aa alag che ❤️”",
    icon: "🌱",
  },
  {
    date: "22 December 2025",
    title: "The Beautiful “Yes”",
    description: "This was the day when everything actually started.\n\nNot just from my side…\nbut from yours too.\n\nWhen your family said yes…\nit didn’t feel like just a formality.\n\nIt felt like something real just began…\nsomething that actually matters 💖",
    icon: "🌿",
  },
  {
    date: "25 January 2026",
    title: "When It Became Ours",
    description: "This was the day it became serious.\n\nBefore this, it was like… okay let’s see.\nBut from here, it was like —\n“haan, this is it.”\n\nNo confusion… no maybe…\njust clear — we’re doing this together.\n\nAnd I think that’s when it actually became “us” ✨",
    icon: "🌸",
  },
  {
    date: "Every Day Since",
    title: "Falling Deeper",
    description: "After that… things just kept getting better.\n\nTalking to you became normal,\nbut still special.\n\nEven small things… random talks…\nthey started mattering.\n\nAnd I didn’t even realise when,\nbut slowly… I just got used to you being there.\n\nNow it’s like…\nyou’re a part of my everyday ❤️",
    icon: "🌼",
  },
  {
    date: "5 April 2026",
    title: "Your Special Day",
    description: "And today… it’s your day.\n\nI don’t have big fancy words…\nbut I just want to say —\n\nI’m really glad you’re in my life.\n\nHappy Birthday ❤️\nI just hope you stay this happy… always.",
    icon: "🌹",
  },
];

const FloatingHeartsDecor = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{ 
            y: "110%", 
            x: `${Math.random() * 100}%`,
            opacity: 0,
            scale: Math.random() * 0.5 + 0.5
          }}
          animate={{ 
            y: "-10%",
            x: `${Math.random() * 100}%`,
            opacity: [0, 0.4, 0],
            rotate: [0, Math.random() * 90 - 45]
          }}
          transition={{ 
            duration: Math.random() * 15 + 15,
            repeat: Infinity,
            delay: Math.random() * 10,
            ease: "linear"
          }}
        >
          <Heart className="text-primary/20 w-8 h-8 md:w-16 md:h-16 blur-[1px]" />
        </motion.div>
      ))}
    </div>
  );
};

const MemoriesSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const lineProgress = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="py-32 px-6 relative overflow-hidden" style={{ background: 'var(--gradient-section)' }}>
      {/* Blurred Red Gradient Circles for Depth */}
      <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />
      
      <FloatingHeartsDecor />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto relative z-10"
      >
        <div className="divider-ornament max-w-xs mx-auto mb-6">
          <span className="text-primary text-sm animate-pulse">✨</span>
        </div>
        
        <h2 className="font-heading text-4xl md:text-6xl font-light text-foreground text-center mb-20 italic">
          Our Beautiful <span className="gradient-text">Journey</span>
        </h2>

        <div className="relative mt-12">
          {/* Vertical Glowing Timeline Line Background */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-1 bg-border/40 transform md:-translate-x-1/2 rounded-full" />
          
          {/* Animated Scroll Progress Line */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-1 transform md:-translate-x-1/2 overflow-hidden rounded-full">
            <motion.div 
              style={{ height: lineProgress }} 
              className="w-full bg-gradient-to-b from-primary via-primary to-transparent shadow-[0_0_15px_rgba(225,29,72,0.8)]" 
            />
          </div>

          {memories.map((memory, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1, duration: 0.8, type: "spring", bounce: 0.3 }}
              className={`relative flex items-start mb-20 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 z-10 mt-[1.5rem]">
                <motion.div
                  animate={{ 
                    scale: [1, 1.15, 1], 
                    boxShadow: ["0 0 0px rgba(225,29,72,0)", "0 0 20px rgba(225,29,72,0.6)", "0 0 0px rgba(225,29,72,0)"] 
                  }}
                  transition={{ repeat: Infinity, duration: 2.5, delay: i * 0.4 }}
                  className="w-12 h-12 rounded-full bg-background border-2 border-primary/50 flex items-center justify-center glow-effect"
                >
                  <Heart className="w-5 h-5 text-primary fill-accent drop-shadow-md" />
                </motion.div>
              </div>

              <div className={`ml-16 md:ml-0 md:w-5/12 ${i % 2 === 0 ? "md:pr-14" : "md:pl-14"}`}>
                <div className="glass-card rounded-3xl p-8 hover:border-primary/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(225,29,72,0.15)] group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <motion.span 
                        className="text-2xl drop-shadow-md"
                        whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                      >
                        {memory.icon}
                      </motion.span>
                      <span className="font-body text-xs tracking-[0.25em] uppercase text-primary font-semibold">
                        {memory.date}
                      </span>
                    </div>
                    <h3 className="font-script text-3xl md:text-4xl text-foreground mb-4 leading-relaxed group-hover:text-primary transition-colors py-1">
                      {memory.title}
                    </h3>
                    <p className="font-body text-sm md:text-base text-muted-foreground leading-loose font-light whitespace-pre-line group-hover:text-foreground/90 transition-colors">
                      {memory.description}
                    </p>
                  </div>
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
