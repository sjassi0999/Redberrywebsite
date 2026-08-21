import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MagneticButton } from './MagneticButton';

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bottleRef = useRef<HTMLImageElement>(null);
  const bottleGlowRef = useRef<HTMLDivElement>(null);
  const redTextRef = useRef<HTMLDivElement>(null);
  const berryTextRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const parallaxContainerRef = useRef<HTMLDivElement>(null);
  const textParallaxRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const bgGlow1Ref = useRef<HTMLDivElement>(null);
  const bgGlow2Ref = useRef<HTMLDivElement>(null);
  const shimmerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Preload images for smooth transition
    const imagesToPreload = [
      "/images/hero_bottle_2.png",
      "/images/hero_bottle_3.png"
    ];
    imagesToPreload.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const images = [
      "/images/hero_bottle.png",
      "/images/hero_bottle_2.png",
      "/images/hero_bottle_3.png"
    ];

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=1500",
        scrub: 1,
        pin: true,
        onUpdate: (self) => {
          const progress = self.progress;
          let newIndex = 0;
          if (progress > 0.66) newIndex = 2;
          else if (progress > 0.33) newIndex = 1;
          
          if (bottleRef.current && bottleRef.current.dataset.index !== newIndex.toString()) {
            bottleRef.current.src = images[newIndex];
            bottleRef.current.dataset.index = newIndex.toString();
            
            // Magical flash effect on swap
            gsap.fromTo(bottleRef.current, 
              { filter: "brightness(2) blur(10px)", scale: 1.05 },
              { filter: "brightness(1) blur(0px)", scale: 1, duration: 0.5, ease: "power2.out" }
            );
          }
        }
      }
    });

    // Epic Scroll Parallax
    if (bottleRef.current && bottleGlowRef.current) {
      // Bottle rotates and scales up smoothly as you scroll down
      tl.to(bottleRef.current, { 
        y: 450, 
        scale: 1.25, 
        rotation: 12, 
        ease: "power1.inOut" 
      }, 0);
      
      tl.to(bottleGlowRef.current, {
        y: 450,
        scale: 2,
        opacity: 0,
      }, 0);
    }

    if (particlesRef.current) {
      tl.to(particlesRef.current, { y: -300, opacity: 0, ease: "power1.inOut" }, 0);
    }

    // Typography separates dramatically
    tl.to(redTextRef.current, { x: -300, y: -200, opacity: 0, rotation: -5, scale: 0.8, ease: "power2.inOut" }, 0);
    tl.to(berryTextRef.current, { x: 300, y: 200, opacity: 0, rotation: 5, scale: 0.8, ease: "power2.inOut" }, 0);

    // Fade out bottom content
    tl.to(contentRef.current, { opacity: 0, y: 100, filter: "blur(15px)", ease: "power2.inOut" }, 0);

    ScrollTrigger.sort();
    ScrollTrigger.refresh();

    return () => {
      if (tl.scrollTrigger) tl.scrollTrigger.kill();
      tl.kill();
    };
  }, []);

  // Premium Entrance & Continuous Float
  useEffect(() => {
    if (!redTextRef.current || !berryTextRef.current || !contentRef.current || !bottleRef.current || !bottleGlowRef.current) return;
    
    const ctx = gsap.context(() => {
      // Background ambient glows movement
      gsap.to(bgGlow1Ref.current, { x: "15vw", y: "15vh", scale: 1.2, duration: 15, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to(bgGlow2Ref.current, { x: "-15vw", y: "-15vh", scale: 1.3, duration: 18, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 2 });

      // Shimmer effect on Glass Card
      if (shimmerRef.current) {
        gsap.to(shimmerRef.current, {
          left: '200%',
          duration: 3,
          repeat: -1,
          repeatDelay: 5,
          ease: "power2.inOut"
        });
      }

      // Background glow pulse
      gsap.to(bottleGlowRef.current, {
        opacity: 0.6,
        scale: 1.15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // Continuous bottle float (levitation effect)
      gsap.to(bottleRef.current, {
        y: "+=25",
        rotation: "+=1.5",
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 2.5 // Start after entrance
      });

      // Entrance Timeline
      const entranceTl = gsap.timeline({ delay: 0.3 });

      // Spotlight fades in
      if (spotlightRef.current) {
        entranceTl.to(spotlightRef.current, { opacity: 1, duration: 3 }, 0);
      }

      // Typography majestic entrance with clipPath for a premium "wipe" reveal
      entranceTl.fromTo([redTextRef.current, berryTextRef.current], 
        { opacity: 0, y: 150, scale: 1.1, filter: "blur(30px) brightness(1.5)", clipPath: "inset(100% 0 0 0)" },
        { opacity: 1, y: 0, scale: 1, filter: "blur(0px) brightness(1)", clipPath: "inset(0% 0 0 0)", duration: 3, stagger: 0.3, ease: "expo.out" },
        0
      );

      // Bottle emerges elegantly from shadows
      entranceTl.fromTo(bottleRef.current,
        { opacity: 0, y: 200, scale: 0.9, filter: "blur(20px) brightness(0.5)" },
        { opacity: 1, y: 0, scale: 1, filter: "blur(0px) brightness(1)", duration: 3, ease: "power4.out" },
        "-=2"
      );

      // Bottom content gracefully fades in
      entranceTl.fromTo(contentRef.current,
        { opacity: 0, y: 30, filter: "blur(10px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 2, ease: "power3.out" },
        "-=1.5"
      );
      
      // Scroll indicator gracefully fades in
      if (scrollIndicatorRef.current) {
        entranceTl.fromTo(scrollIndicatorRef.current,
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
          "-=1"
        );
        gsap.to(scrollIndicatorRef.current.children[1], { 
          scaleY: 1.5,
          transformOrigin: "top",
          opacity: 0.2,
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
      }
      
      // Floating Particles entrance
      if (particlesRef.current) {
        entranceTl.fromTo(particlesRef.current.children, 
          { opacity: 0, y: 50, scale: 0 },
          { opacity: () => Math.random() * 0.5 + 0.3, y: 0, scale: 1, duration: 2, stagger: 0.1, ease: "power2.out" },
          "-=2.5"
        );
        
        // Animate particles continuously (Desktop only to save mobile battery/GPU)
        if (window.innerWidth > 768) {
          gsap.utils.toArray(particlesRef.current.children).forEach((particle: any) => {
            gsap.to(particle, {
              y: `-${Math.random() * 150 + 50}`,
              x: `${(Math.random() - 0.5) * 100}`,
              opacity: Math.random() * 0.4 + 0.1,
              rotation: Math.random() * 360,
              duration: Math.random() * 5 + 5,
              repeat: -1,
              yoyo: true,
              delay: Math.random() * 2,
              ease: "sine.inOut"
            });
          });
        }
      }
    });

    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 768) return; // Disable parallax on mobile
      
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2;
      const y = (e.clientY / innerHeight - 0.5) * 2;

      if (parallaxContainerRef.current) {
        gsap.to(parallaxContainerRef.current, {
          x: x * 40,
          y: y * 40,
          rotationX: -y * 10,
          rotationY: x * 15,
          duration: 1.2,
          ease: "power3.out"
        });
      }
      
      if (textParallaxRef.current) {
        gsap.to(textParallaxRef.current, {
          x: -x * 60,
          y: -y * 25,
          duration: 1.8,
          ease: "power3.out"
        });
      }

      if (spotlightRef.current) {
        gsap.to(spotlightRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 1.5,
          ease: "power3.out"
        });
      }
    };
    
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      ctx.revert();
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full bg-[#030303] overflow-hidden pt-20 md:pt-0">
      <h1 className="sr-only">RedBerry Wines - Premium Luxury Wine</h1>
      {/* Subtle Grain Overlay for Premium Feel (Desktop Only to save mobile GPU) */}
      <div className="hidden md:block absolute inset-0 z-0 opacity-[0.04] pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
      
      {/* Luxurious Dynamic Lighting Background (Simplified on mobile) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div ref={bgGlow1Ref} className="absolute top-1/4 left-1/4 w-[80vw] md:w-[60vw] h-[80vw] md:h-[60vw] bg-gold/10 md:bg-gold/15 rounded-full blur-[40px] md:blur-[140px] mix-blend-screen"></div>
        <div ref={bgGlow2Ref} className="hidden md:block absolute bottom-1/4 right-1/4 w-[50vw] h-[50vw] bg-red-900/25 rounded-full blur-[140px] mix-blend-screen"></div>
      </div>

      {/* Interactive Mouse Spotlight */}
      <div 
        ref={spotlightRef} 
        className="fixed top-0 left-0 w-[40vw] h-[40vw] -translate-x-1/2 -translate-y-1/2 bg-white/5 rounded-full blur-[120px] pointer-events-none z-10 mix-blend-screen opacity-0"
      ></div>
      
      {/* Cinematic Bokeh Particles */}
      <div ref={particlesRef} className="absolute inset-0 z-10 pointer-events-none">
        {[...Array(25)].map((_, i) => {
          const size = Math.random() * 8 + 3;
          return (
            <div 
              key={i}
              className="absolute rounded-full bg-gold shadow-[0_0_20px_rgba(212,175,55,0.6)]"
              style={{
                width: size + 'px',
                height: size + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                opacity: Math.random() * 0.3,
                filter: `blur(${Math.random() * 3 + 1}px)`
              }}
            />
          );
        })}
      </div>

      {/* Scroll Down Indicator */}
      <div ref={scrollIndicatorRef} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-2 pointer-events-none opacity-0">
        <span className="text-gold/60 text-[10px] font-button tracking-[0.4em] uppercase">Scroll</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-gold/60 to-transparent"></div>
      </div>

      {/* Vignette Overlay for Depth */}
      <div className="absolute inset-0 z-40 pointer-events-none shadow-[inset_0_0_200px_rgba(0,0,0,0.9)] mix-blend-multiply"></div>

      {/* Massive Editorial Typography - Moved Behind Bottle (z-10) */}
      <div ref={textParallaxRef} className="absolute inset-0 z-10 flex flex-col justify-between py-[12vh] px-4 md:px-12 pointer-events-none">
        <div ref={redTextRef} className="text-left origin-left relative">
           <span aria-hidden="true" className="block text-[12vw] md:text-[14vw] font-heading font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-white/80 to-white/10 leading-[0.75] tracking-tighter drop-shadow-2xl">
             REDBERRY
           </span>
           <span aria-hidden="true" className="block absolute top-0 left-0 text-[12vw] md:text-[14vw] font-heading font-black text-transparent leading-[0.75] tracking-tighter" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.15)' }}>
             REDBERRY
           </span>
        </div>
        <div ref={berryTextRef} className="text-right origin-right mt-auto relative">
           <span aria-hidden="true" className="block text-[12vw] md:text-[14vw] font-heading font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-white/80 to-white/10 leading-[0.75] tracking-tighter drop-shadow-2xl">
             WINES
           </span>
           <span aria-hidden="true" className="block absolute top-0 right-0 text-[12vw] md:text-[14vw] font-heading font-black text-transparent leading-[0.75] tracking-tighter" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.15)' }}>
             WINES
           </span>
        </div>
      </div>

      {/* Central Product Image container with Glow - Brought Forward (z-20) */}
      <div ref={parallaxContainerRef} className="absolute inset-0 z-20 w-full h-full flex items-center justify-center pointer-events-none md:perspective-[1000px]">
        {/* Glow Element */}
        <div 
          ref={bottleGlowRef}
          className="absolute w-[40vw] h-[60vh] bg-gold/25 rounded-[100%] blur-[120px] opacity-0"
        ></div>
        
        <img 
          ref={bottleRef} 
          src="/images/hero_bottle.png"
          alt="Premium Redberry Wine"
          data-index="0"
          className="h-[70vh] md:h-[82vh] w-auto object-contain z-30 drop-shadow-[0_30px_60px_rgba(0,0,0,0.8)]"
        />
      </div>

      {/* Rebalanced Content & Magnetic Buttons (z-30) */}
      <div ref={contentRef} className="absolute bottom-10 md:bottom-16 left-0 right-0 w-full px-6 md:px-12 z-30 flex flex-col md:flex-row justify-between items-start md:items-end pointer-events-none gap-8">
        
        {/* Premium Glassmorphism Caption */}
        <div className="max-w-md pointer-events-auto bg-white/[0.03] backdrop-blur-2xl p-8 md:p-10 rounded-3xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] relative overflow-hidden group hover:border-white/20 transition-colors duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          {/* Animated Light Sweep / Shimmer */}
          <div ref={shimmerRef} className="absolute top-0 left-[-100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform skew-x-[-25deg] pointer-events-none z-0"></div>

          <div className="h-[2px] w-20 bg-gradient-to-r from-gold to-transparent mb-6 relative z-10"></div>
          <p className="text-white/80 text-sm md:text-base font-body text-balance font-light leading-relaxed tracking-wide relative z-10">
            Experience handcrafted VQA Ontario wines. Inspired by exceptional vineyards, refined craftsmanship, and <span className="text-gold font-medium">moments that deserve to be remembered.</span>
          </p>
        </div>

        {/* Ultra-Premium Magnetic Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 pointer-events-auto w-full md:w-auto">
          <MagneticButton href="https://www.kwalitysweets.com/brampton/online-order/redberry-wines" className="w-full sm:w-auto group">
            <div className="px-12 py-5 bg-gradient-to-r from-gold to-[#b8952d] text-secondary font-button font-bold tracking-[0.3em] text-xs md:text-sm hover:from-white hover:to-white hover:text-primary transition-all duration-500 text-center whitespace-nowrap shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:shadow-[0_0_50px_rgba(255,255,255,0.5)] rounded-full relative overflow-hidden">
              <span className="relative z-10">ORDER ONLINE</span>
            </div>
          </MagneticButton>
          <MagneticButton href="/#story" className="w-full sm:w-auto group">
            <div className="px-12 py-5 border border-white/20 text-white font-button font-bold tracking-[0.3em] text-xs md:text-sm transition-all duration-500 backdrop-blur-md bg-white/5 hover:bg-white/10 hover:border-gold/50 hover:text-gold text-center whitespace-nowrap rounded-full relative overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)]">
              <span className="relative z-10">HERITAGE</span>
            </div>
          </MagneticButton>
        </div>

      </div>
    </section>
  );
};
