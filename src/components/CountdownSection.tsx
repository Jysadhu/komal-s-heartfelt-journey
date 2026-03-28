import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const DOB = new Date(2006, 3, 5); // April 5, 2006

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
    <section className="py-20 px-6 romantic-gradient-bg">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="font-heading text-3xl md:text-5xl gradient-text mb-4">
          Counting Every Second ⏳
        </h2>
        <p className="font-body text-muted-foreground mb-2">
          Date of Birth: <span className="text-romantic-pink font-semibold">5th April 2006</span>
        </p>
        <p className="font-body text-muted-foreground mb-10">
          Age: <span className="text-romantic-purple font-bold text-2xl">{age}</span> years of being beautiful ✨
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-10">
          {blocks.map((block, i) => (
            <motion.div
              key={block.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="glass-card rounded-2xl p-6 animate-pulse-glow"
            >
              <span className="font-heading text-4xl md:text-5xl gradient-text block">
                {String(block.value).padStart(2, "0")}
              </span>
              <span className="font-body text-sm text-muted-foreground mt-1 block">
                {block.label}
              </span>
            </motion.div>
          ))}
        </div>

        <p className="font-body text-sm text-muted-foreground">
          Until your next birthday 🎂
        </p>
      </motion.div>
    </section>
  );
};

export default CountdownSection;
