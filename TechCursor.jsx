import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function TechCursor({ activeService }) {
  const [isVisible, setIsVisible] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    let rafId;
    const handleMouseMove = (e) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        mouseX.set(e.clientX + 25);
        mouseY.set(e.clientY + 25);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    setIsVisible(activeService !== null);
  }, [activeService]);

  return (
    <motion.div
      style={{ x: cursorX, y: cursorY }}
      className="fixed top-0 left-0 z-50 pointer-events-none hidden md:block"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
      transition={{ duration: 0.2 }}
    >
      <div className="bg-[#0b101d]/90 backdrop-blur-md border border-slate-800 p-4 rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.5)] max-w-[240px]">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-2">
          <span className="font-mono text-[9px] text-blue-500 uppercase tracking-widest">System_Status</span>
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></div>
        </div>
        <p className="font-mono text-[11px] text-slate-400 leading-normal">
          {activeService ? `Zarix Core executing secure module: ${activeService}` : ''}
        </p>
      </div>
    </motion.div>
  );
}
