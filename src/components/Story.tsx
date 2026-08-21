import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const Story = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax effects tied to user scroll
  const yBg = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const rotateBottle = useTransform(scrollYProgress, [0, 1], [-8, 8]);

  return (
    <section ref={containerRef} id="story" className="relative h-screen w-full bg-[#030303] overflow-hidden flex items-center justify-center pt-20 md:pt-0">
      {/* Background Parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div style={{ y: yBg }} className="w-full h-full">
          <motion.img 
            loading="lazy"
            decoding="async"
            initial={{ scale: 1.2, opacity: 0, filter: "blur(10px)" }}
            whileInView={{ scale: 1.05, opacity: 0.5, filter: "blur(0px)" }}
            transition={{ duration: 2, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            src="/images/vineyard_parallax.png" 
            alt="Vineyard" 
            className="w-full h-[120%] -mt-[10%] object-cover mix-blend-overlay"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/70 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#030303] via-transparent to-transparent z-10"></div>
      </div>

      <div className="container mx-auto px-6 relative z-20 flex flex-col md:flex-row items-center justify-between h-full">
        {/* Left Side: Editorial Typography */}
        <motion.div style={{ y: yText }} className="w-full md:w-1/2 flex flex-col justify-center space-y-8 pr-0 md:pr-12 mt-10 md:mt-0">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <div className="h-[1px] w-12 bg-gold"></div>
            <span className="text-gold font-button tracking-[0.3em] text-xs">OUR HERITAGE</span>
          </motion.div>
          
          <motion.h2 
            initial={{ y: 50, opacity: 0, rotateX: 20 }}
            whileInView={{ y: 0, opacity: 1, rotateX: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading text-white leading-[1.1] drop-shadow-2xl"
          >
            A Legacy of <br/> <span className="text-gold italic font-light tracking-wide">Uncompromised</span> <br/> Quality
          </motion.h2>
          
          <motion.p 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-white/70 font-body text-lg md:text-xl max-w-lg leading-relaxed font-light"
          >
            Great wine is never created by chance. It begins in the vineyard, shaped by the land, the climate, and the people who dedicate themselves to every harvest. Each bottle reflects a commitment to quality, authenticity, and the timeless traditions of Ontario winemaking.
          </motion.p>
          
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="pt-4"
          >
            <a href="#vineyard" className="group flex items-center gap-4 text-white hover:text-gold transition-colors duration-500 cursor-pointer w-max">
              <span className="font-button tracking-[0.2em] text-sm font-semibold">READ THE FULL STORY</span>
              <div className="w-12 h-[1px] bg-white/30 group-hover:bg-gold group-hover:w-20 transition-all duration-500 relative">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-r border-t border-white/30 group-hover:border-gold rotate-45 transition-colors duration-500"></div>
              </div>
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side: Floating Bottle & Glow */}
        <div className="w-full md:w-1/2 h-[50vh] md:h-full flex items-center justify-center relative mt-10 md:mt-0 md:perspective-[1000px]">
          {/* Animated Glow Behind Bottle */}
          <motion.div 
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
            viewport={{ once: true }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-accent)_0%,_transparent_60%)] opacity-30 blur-[80px]"
          ></motion.div>
          
          {/* The Bottle with Entrance, Hover, and Scroll Parallax */}
          <motion.div 
            className="relative z-10 h-[80%] md:h-[90%] w-full flex items-center justify-center"
            style={{ rotateZ: rotateBottle }}
            initial={{ y: 150, opacity: 0, scale: 0.8, rotateY: 30 }}
            whileInView={{ y: 0, opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            whileHover={{ scale: 1.05, filter: "brightness(1.15)", transition: { duration: 0.5 } }}
          >
            {/* Continuous Float Animation Wrapper */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="h-full w-full flex items-center justify-center"
            >
              <img 
                loading="lazy"
                decoding="async"
                src="/images/story_bottle.png" 
                alt="Signature Bottle" 
                className="h-full w-auto object-contain filter drop-shadow-[0_40px_60px_rgba(0,0,0,0.8)]"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
