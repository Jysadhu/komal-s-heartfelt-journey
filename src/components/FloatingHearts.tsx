import { useEffect, useState } from "react";

interface HeartParticle {
  id: number;
  left: number;
  size: number;
  delay: number;
  duration: number;
  opacity: number;
}

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<HeartParticle[]>([]);

  useEffect(() => {
    const generated: HeartParticle[] = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 14 + 8,
      delay: Math.random() * 12,
      duration: Math.random() * 8 + 8,
      opacity: Math.random() * 0.15 + 0.05,
    }));
    setHearts(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="absolute text-primary animate-float-heart"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
            opacity: heart.opacity,
          }}
        >
          ♥
        </span>
      ))}
    </div>
  );
};

export default FloatingHearts;
