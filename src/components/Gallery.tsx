import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, useMotionValue, useSpring } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const galleryImages = [
  { src: '/images/gallery_1.png', alt: 'Wine Cellar' },
  { src: '/images/gallery_2.png', alt: 'Grapes Harvest' },
  { src: '/images/vineyard_parallax.png', alt: 'Vineyard Golden Hour' },
  { src: '/images/lifestyle_restaurant.png', alt: 'Fine Dining' }
];

const GalleryImage = ({ img }: { img: any }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) / 20);
    y.set((e.clientY - centerY) / 20);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div 
      className="group relative w-[80vw] md:w-[40vw] h-full flex-shrink-0 overflow-hidden cursor-pointer rounded-sm"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: mouseXSpring, y: mouseYSpring }}
    >
      <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
      <img 
        src={img.src} 
        alt={img.alt} 
        loading="lazy"
        className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-1000 ease-out"
      />
    </motion.div>
  );
};

export const Gallery = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !containerRef.current) return;

    const scrollWidth = containerRef.current.scrollWidth - window.innerWidth;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: () => `+=${scrollWidth}`,
        scrub: 1,
        pin: true,
      }
    });

    tl.to(containerRef.current, {
      x: -scrollWidth,
      ease: "none"
    });

    return () => { tl.kill(); };
  }, []);

  return (
    <section ref={sectionRef} id="gallery" className="h-screen w-full bg-background overflow-hidden relative flex flex-col justify-center">
      <div className="absolute top-20 left-6 md:left-20 z-20">
        <h2 className="text-4xl md:text-5xl font-heading text-primary">Visual <span className="text-gold italic">Journey</span></h2>
      </div>
      
      <div ref={containerRef} className="flex h-[60vh] md:h-[70vh] items-center gap-8 md:gap-16 px-6 md:px-20 mt-10">
        {galleryImages.map((img, i) => (
          <GalleryImage key={i} img={img} />
        ))}
      </div>
    </section>
  );
};
