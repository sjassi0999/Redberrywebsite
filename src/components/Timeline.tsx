import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
  { year: "01", title: "Harvest", desc: "Hand-selecting only the perfect clusters at peak ripeness." },
  { year: "02", title: "Selection", desc: "Rigorous sorting ensures only flawless grapes proceed." },
  { year: "03", title: "Fermentation", desc: "Temperature-controlled alchemy to extract pure flavors." },
  { year: "04", title: "Oak Barrel", desc: "Patiently aged in French oak for complexity and texture." },
  { year: "05", title: "Bottling", desc: "Sealed with precision to preserve the legacy within." },
  { year: "06", title: "Delivery", desc: "Transported globally under perfect climatic conditions." },
];

export const Timeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !lineRef.current) return;

    const items = containerRef.current.querySelectorAll('.timeline-item');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom 20%",
        scrub: 1,
      }
    });

    tl.fromTo(lineRef.current,
      { height: 0 },
      { height: "100%", ease: "none" }
    );

    items.forEach((item, index) => {
      gsap.fromTo(item,
        { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none reverse",
          }
        }
      );
    });

  }, []);

  return (
    <section className="py-32 bg-secondary text-white relative">
      <div className="container mx-auto px-6 relative z-10" ref={containerRef}>
        <div className="text-center mb-24">
          <h2 className="text-sm font-button tracking-[0.3em] text-gold mb-4">THE PROCESS</h2>
          <h3 className="text-5xl md:text-6xl font-heading">Craftsmanship <br/> <span className="text-gray italic">in Motion</span></h3>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2 hidden md:block">
            <div ref={lineRef} className="w-full bg-gold h-0"></div>
          </div>

          <div className="space-y-12 md:space-y-24">
            {processSteps.map((step, index) => (
              <div key={index} className={`timeline-item flex flex-col md:flex-row items-center justify-between w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="w-full md:w-[45%]"></div>
                <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-background border border-gold text-gold font-button font-bold text-lg mb-6 md:mb-0 shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                  {step.year}
                </div>
                <div className={`w-full md:w-[45%] bg-background/50 p-8 border border-white/5 backdrop-blur-sm hover:border-gold/30 transition-colors duration-300 ${index % 2 === 0 ? 'md:text-right' : 'text-left'}`}>
                  <h4 className="text-2xl font-heading text-white mb-3">{step.title}</h4>
                  <p className="text-gray font-body leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
