import { useEffect, useState } from "react";
import { motion, useSpring } from "motion/react";

export default function CustomCursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  const springConfig = { damping: 25, stiffness: 200 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);

      const target = e.target as HTMLElement;
      setIsPointer(window.getComputedStyle(target).cursor === "pointer");
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block">
      {/* Main Cursor Dot */}
      <motion.div
        className="fixed w-2 h-2 bg-brand-cyan rounded-full shadow-[0_0_10px_rgba(0,242,255,1)]"
        animate={{
          x: mousePos.x - 4,
          y: mousePos.y - 4,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 400, mass: 0.5 }}
      />

      {/* Trailing Ring */}
      <motion.div
        className="fixed w-8 h-8 border border-brand-cyan/30 rounded-full"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          scale: isPointer ? 2 : 1,
          borderColor: isPointer ? "rgba(0, 242, 255, 0.8)" : "rgba(0, 242, 255, 0.3)",
        }}
      />
      
      {/* Inner Glow */}
      <motion.div
        className="fixed w-32 h-32 bg-brand-cyan/5 blur-3xl rounded-full"
        animate={{
          x: mousePos.x - 64,
          y: mousePos.y - 64,
        }}
      />
    </div>
  );
}
