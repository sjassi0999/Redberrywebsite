import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    if (!context) return;

    const frameCount = 240;
    const images: HTMLImageElement[] = [];
    const airpods = {
      frame: 0
    };

    let loadedCount = 0;
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      const frameNum = i.toString().padStart(5, '0');
      img.src = `/hero-sequence/frame_${frameNum}.png`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === frameCount) {
          setImagesLoaded(true);
          renderFrame(0);
        }
      };
      images.push(img);
    }

    const renderFrame = (index: number) => {
      if (images[index] && context) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        
        const img = images[index];
        const hRatio = canvas.width / img.width;
        const vRatio = canvas.height / img.height;
        const ratio = Math.max(hRatio, vRatio);
        const centerShift_x = (canvas.width - img.width * ratio) / 2;
        const centerShift_y = (canvas.height - img.height * ratio) / 2;
        
        context.drawImage(img, 0, 0, img.width, img.height,
                          centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
      }
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      if (imagesLoaded) {
        renderFrame(airpods.frame);
      }
    };
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=1500",
        scrub: 0.5,
        pin: true,
      }
    });

    tl.to(airpods, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      onUpdate: () => renderFrame(airpods.frame)
    });

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 6;
      const y = (e.clientY / window.innerHeight - 0.5) * 6;
      gsap.to(canvas, {
        x: x,
        y: y,
        duration: 1,
        ease: "power2.out"
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      tl.kill();
    };
  }, [imagesLoaded]);

  useEffect(() => {
    if (!textRef.current) return;
    const splitText = textRef.current.querySelectorAll('.reveal-text');
    
    gsap.fromTo(splitText, 
      { y: 100, opacity: 0, filter: "blur(10px)" },
      { y: 0, opacity: 1, filter: "blur(0px)", duration: 1.5, stagger: 0.2, ease: "power4.out", delay: 0.5 }
    );
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full bg-background overflow-hidden pt-20 md:pt-0">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--color-accent)_0%,_transparent_70%)] opacity-10 z-0"></div>
      
      {/* Full screen canvas sequence */}
      <div className="absolute inset-0 z-0 w-full h-full flex items-center justify-center pointer-events-none">
        {!imagesLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        <canvas 
          ref={canvasRef} 
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      <div className="relative z-10 flex flex-col justify-center px-6 md:px-20 w-full h-full">
        <div ref={textRef} className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading text-white leading-tight mb-6 mt-10 md:mt-0">
            <span className="block reveal-text drop-shadow-xl">Crafted For</span>
            <span className="block reveal-text text-gold drop-shadow-xl">Extraordinary</span>
            <span className="block reveal-text drop-shadow-xl">Moments</span>
          </h1>
          <p className="text-gray text-lg md:text-xl font-body mb-10 max-w-md reveal-text text-balance drop-shadow-lg font-medium">
            Experience handcrafted wines made from the finest vineyards. A symphony of flavors in every pour.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 reveal-text">
            <button className="px-8 py-4 bg-gold text-secondary font-button font-semibold tracking-wider hover:bg-white transition-colors duration-300 cursor-pointer">
              EXPLORE COLLECTION
            </button>
            <button className="px-8 py-4 border border-white/20 text-white font-button font-semibold tracking-wider hover:border-gold hover:text-gold transition-colors duration-300 cursor-pointer backdrop-blur-sm bg-black/20">
              DISCOVER STORY
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
