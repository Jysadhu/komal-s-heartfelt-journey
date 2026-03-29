import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

const MagicalCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Smooth springs for the cursor
  const cursorX = useSpring(0, { damping: 25, stiffness: 120, mass: 0.5 });
  const cursorY = useSpring(0, { damping: 25, stiffness: 120, mass: 0.5 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX - 16); // Center the custom cursor (32px / 2 = 16)
      cursorY.set(e.clientY - 16);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if hovering over clickable elements
      if (
        window.getComputedStyle(target).cursor === "pointer" ||
        target.tagName.toLowerCase() === "button" ||
        target.tagName.toLowerCase() === "a" ||
        target.closest("button") || 
        target.closest("a")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  // Hide on completely touch devices
  if (typeof window !== "undefined" && window.matchMedia("(hover: none) and (pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-primary/40 pointer-events-none z-[9999] mix-blend-screen hidden md:block"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          scale: isHovering ? 2 : 1,
          backgroundColor: isHovering ? "rgba(14, 165, 233, 0.1)" : "transparent",
          borderColor: isHovering ? "rgba(14, 165, 233, 0.8)" : "rgba(14, 165, 233, 0.4)",
        }}
        transition={{ duration: 0.2 }}
      />
      
      {/* Intense glow following exactly at the mouse pointer */}
      <div 
        className="fixed top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none z-[0] transition-transform duration-100 ease-linear hidden md:block mix-blend-screen"
        style={{
          transform: `translate(${mousePosition.x - 192}px, ${mousePosition.y - 192}px)`,
        }}
      />
    </>
  );
};

export default MagicalCursor;
