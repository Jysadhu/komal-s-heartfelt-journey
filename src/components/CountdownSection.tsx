import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Calendar, Clock } from "lucide-react";

const DOB = new Date(2006, 3, 5);

const getNextBirthday = () => {
  const now = new Date();
  const thisYear = new Date(now.getFullYear(), 3, 5);
  if (now > thisYear) {
    return new Date(now.getFullYear() + 1, 3, 5);
  }
  return thisYear;
};

const getAge = () => {
  const now = new Date();
  let age = now.getFullYear() - DOB.getFullYear();
  const m = now.getMonth() - DOB.getMonth();
  if (m < 0 || (m === 0 && now.getDate() < DOB.getDate())) age--;
  return age;
};

const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [age, setAge] = useState(getAge());

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const target = getNextBirthday();
      const diff = target.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
      setAge(getAge());
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const blocks = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section className="py-32 px-6 relative overflow-hidden" style={{ background: 'var(--gradient-section)' }}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] radial-glow-primary pointer-events-none -translate-y-1/2 opacity-60" />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        <div className="divider-ornament max-w-xs mx-auto mb-6">
          <Clock className="w-5 h-5 text-primary opacity-80" />
        </div>
        
        <h2 className="font-heading text-3xl md:text-5xl font-light text-foreground mb-3 italic">
          Counting Every <span className="gradient-text">Second</span>
        </h2>

        <div className="flex items-center justify-center gap-6 mb-16 mt-8">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-primary" />
            <span className="font-body text-sm text-foreground/70 tracking-wide">
              Born <span className="text-primary font-medium">5th April 2006</span>
            </span>
          </div>
          <div className="w-px h-4 bg-border" />
          <span className="font-body text-sm text-muted-foreground">
            Age <span className="text-primary font-semibold text-lg">{age}</span>
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
          {blocks.map((block, i) => (
            <motion.div
              key={block.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="glass-card rounded-2xl p-6 group hover:border-primary/40 hover:shadow-[0_0_30px_rgba(225,29,72,0.15)] transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <motion.span
                key={block.value}
                initial={{ rotateX: -90, opacity: 0 }}
                animate={{ rotateX: 0, opacity: 1 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="font-heading text-4xl md:text-5xl gradient-text block font-light drop-shadow-md origin-bottom"
              >
                {String(block.value).padStart(2, "0")}
              </motion.span>
              <span className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mt-2 block">
                {block.label}
              </span>
            </motion.div>
          ))}
        </div>

        <p className="font-body text-xs text-foreground/50 tracking-[0.25em] uppercase flex items-center justify-center gap-2 mt-12">
          Until your next birthday <span className="text-primary animate-pulse">✨</span>
        </p>
      </motion.div>
    </section>
  );
};

export default CountdownSection;
