import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Story = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const bottleRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!containerRef.current || !textRef.current || !imageRef.current || !bottleRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=1500",
        scrub: 1,
        pin: true,
      }
    });

    // Background Image Parallax & Fade
    tl.fromTo(imageRef.current, 
      { scale: 1.2, opacity: 0 }, 
      { scale: 1, opacity: 0.6, duration: 1, ease: "none" },
      0
    );

    // Text reveal
    const splitText = textRef.current.querySelectorAll('.story-text');
    tl.fromTo(splitText,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.out" },
      0.2
    );

    // Bottle Rotate & Scale
    tl.fromTo(bottleRef.current,
      { y: 200, rotation: -15, scale: 0.8, opacity: 0 },
      { y: 0, rotation: 0, scale: 1, opacity: 1, duration: 1.5, ease: "power2.out" },
      0.5
    );

    return () => { tl.kill(); };
  }, []);

  return (
    <section id="story" ref={containerRef} className="relative h-screen w-full bg-secondary overflow-hidden flex items-center justify-center">
      {/* Background Parallax */}
      <div className="absolute inset-0 z-0">
        <img 
          ref={imageRef}
          src="/images/vineyard_parallax.png" 
          alt="Vineyard" 
          className="w-full h-full object-cover mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between h-full">
        {/* Left Side: Editorial Typography */}
        <div ref={textRef} className="w-full md:w-1/2 flex flex-col justify-center space-y-8 pr-0 md:pr-12 mt-20 md:mt-0">
          <h2 className="text-4xl md:text-6xl font-heading text-gold leading-tight story-text">
            A Legacy of <br/> Uncompromised Quality
          </h2>
          <p className="text-gray font-body text-lg md:text-xl max-w-lg story-text leading-relaxed">
            Since 1892, our family has cultivated the finest terroirs, blending traditional techniques with modern innovation to create wines that define luxury. Every bottle is a testament to our dedication.
          </p>
          <div className="story-text">
            <button className="text-white border-b border-gold pb-1 font-button tracking-widest text-sm hover:text-gold transition-colors duration-300">
              READ THE FULL STORY
            </button>
          </div>
        </div>

        {/* Right Side: Floating Bottle */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center relative mt-10 md:mt-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-accent)_0%,_transparent_50%)] opacity-20 blur-3xl"></div>
          <img 
            ref={bottleRef}
            src="/hero-sequence/frame_00120.png" 
            alt="Signature Bottle" 
            className="h-full object-contain filter drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
          />
        </div>
      </div>
    </section>
  );
};
