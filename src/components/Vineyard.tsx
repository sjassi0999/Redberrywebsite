import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Vineyard = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !imageRef.current || !textRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      }
    });

    tl.to(imageRef.current, {
      yPercent: 30,
      ease: "none"
    });

    gsap.fromTo(textRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1, 
        y: 0, 
        duration: 1, 
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
          toggleActions: "play none none reverse"
        }
      }
    );

  }, []);

  return (
    <section id="vineyard" ref={containerRef} className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center">
      <div className="absolute inset-[-20%] w-[140%] h-[140%] z-0">
        <img 
          ref={imageRef}
          loading="lazy"
          decoding="async"
          src="/images/vineyard_parallax.png" 
          alt="Golden Hour Vineyard" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div ref={textRef} className="relative z-10 text-center px-6 max-w-3xl">
        <h2 className="text-5xl md:text-7xl font-heading text-white drop-shadow-md mb-8 shadow-sm">
          Where <span className="text-gold italic">Magic</span> Begins
        </h2>
        <p className="text-white/90 drop-shadow-sm font-body text-lg md:text-2xl leading-relaxed text-balance">
          Rooted in nutrient-rich soil and kissed by the golden sun, our vineyards are the sanctuary where nature's finest ingredients are cultivated with uncompromising passion.
        </p>
      </div>
    </section>
  );
};
