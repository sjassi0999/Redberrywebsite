import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Lifestyle = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !containerRef.current) return;

    // Calculate how far to scroll horizontally
    const scrollWidth = containerRef.current.scrollWidth - (sectionRef.current?.clientWidth || window.innerWidth);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: () => `+=${scrollWidth}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      }
    });

    tl.to(containerRef.current, {
      x: -scrollWidth,
      ease: "none"
    });

    return () => { tl.kill(); };
  }, []);

  return (
    <section ref={sectionRef} className="h-screen w-full bg-background overflow-hidden relative">
      <div 
        ref={containerRef} 
        className="flex h-full w-[200%]"
      >
        {/* Panel 1 */}
        <div className="w-1/2 h-full relative flex items-center justify-center flex-shrink-0">
          <div className="absolute inset-0">
            <img 
              loading="lazy"
              decoding="async"
              src="/images/lifestyle_restaurant.png" 
              alt="Luxury Dining" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          <div className="relative z-10 w-full px-12 md:px-32 max-w-4xl flex flex-col items-start text-left mr-auto mt-[35vh]">
            <h2 className="text-5xl md:text-7xl font-heading text-white drop-shadow-md mb-6">Elevate Every <br/> <span className="text-gold italic">Occasion</span></h2>
            <p className="text-white/90 drop-shadow-sm text-lg md:text-xl font-body max-w-lg leading-relaxed text-balance">
              Whether an intimate gathering or a grand celebration, our wines provide the perfect accompaniment to life's most precious moments.
            </p>
          </div>
        </div>

        {/* Panel 2 */}
        <div className="w-1/2 h-full relative flex items-center justify-center flex-shrink-0 bg-secondary">
           <div className="absolute inset-0">
            <img 
              loading="lazy"
              decoding="async"
              src="/images/gallery_1.png" 
              alt="Wine Cellar" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          <div className="relative z-10 w-full px-12 md:px-32 max-w-4xl text-right ml-auto flex flex-col items-end">
            <h2 className="text-5xl md:text-7xl font-heading text-white drop-shadow-md mb-6">Aged to <br/> <span className="text-gold italic">Perfection</span></h2>
            <p className="text-white/90 drop-shadow-sm text-lg md:text-xl font-body max-w-lg leading-relaxed text-balance text-right">
              Patience is our virtue. Resting in centuries-old cellars, each barrel develops complexity, character, and an unmatched depth of flavor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
