import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const galleryImages = [
  { src: '/images/gallery_1.png', alt: 'Wine Cellar' },
  { src: '/images/gallery_2.png', alt: 'Grapes Harvest' },
  { src: '/images/vineyard_parallax.png', alt: 'Vineyard Golden Hour' },
  { src: '/images/lifestyle_restaurant.png', alt: 'Fine Dining' }
];

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
        <h2 className="text-4xl md:text-5xl font-heading text-white">Visual <span className="text-gold italic">Journey</span></h2>
      </div>
      
      <div ref={containerRef} className="flex h-[60vh] md:h-[70vh] items-center gap-8 md:gap-16 px-6 md:px-20 mt-10">
        {galleryImages.map((img, i) => (
          <div 
            key={i} 
            className="group relative w-[80vw] md:w-[40vw] h-full flex-shrink-0 overflow-hidden cursor-pointer rounded-sm"
          >
            <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
            <img 
              src={img.src} 
              alt={img.alt} 
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
