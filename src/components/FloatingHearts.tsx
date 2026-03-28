import { useEffect, useState } from "react";

interface LeafParticle {
  id: number;
  left: number;
  size: number;
  delay: number;
  duration: number;
  opacity: number;
  emoji: string;
}

const leafEmojis = ["🍃", "🌿", "🌱", "🍂", "🌸"];

const FloatingHearts = () => {
  const [leaves, setLeaves] = useState<LeafParticle[]>([]);

  useEffect(() => {
    const generated: LeafParticle[] = Array.from({ length: 10 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 14 + 10,
      delay: Math.random() * 12,
      duration: Math.random() * 8 + 10,
      opacity: Math.random() * 0.12 + 0.04,
      emoji: leafEmojis[i % leafEmojis.length],
    }));
    setLeaves(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {leaves.map((leaf) => (
        <span
          key={leaf.id}
          className="absolute animate-float-leaf"
          style={{
            left: `${leaf.left}%`,
            fontSize: `${leaf.size}px`,
            animationDelay: `${leaf.delay}s`,
            animationDuration: `${leaf.duration}s`,
            opacity: leaf.opacity,
          }}
        >
          {leaf.emoji}
        </span>
      ))}
    </div>
  );
};

export default FloatingHearts;
