import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target?.tagName?.toLowerCase() === 'a' ||
        target?.tagName?.toLowerCase() === 'button' ||
        target?.closest?.('a') ||
        target?.closest?.('button') ||
        target?.classList?.contains('cursor-pointer') ||
        target?.closest?.('.cursor-pointer')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Outer animated ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-gold pointer-events-none z-[999999] mix-blend-difference hidden md:block"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? 'rgba(212, 175, 55, 0.1)' : 'transparent',
        }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 15,
          mass: 0.5,
        }}
      />
      {/* Inner dot */}
      <div 
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-gold rounded-full pointer-events-none z-[9999999] mix-blend-difference hidden md:block"
        style={{
          transform: `translate(${mousePosition.x - 3}px, ${mousePosition.y - 3}px)`,
        }}
      />
    </>
  );
};
