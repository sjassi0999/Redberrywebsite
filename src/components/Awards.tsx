import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Star, ShieldCheck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const awards = [
  { icon: Award, count: 124, title: "Global Awards", desc: "Recognized in international wine competitions." },
  { icon: Star, count: 98, title: "98+ Point Scores", desc: "Rated exceptionally by top sommeliers." },
  { icon: ShieldCheck, count: 50, title: "Years of Heritage", desc: "A century of winemaking excellence." }
];

export const Awards = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const countersRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    countersRef.current.forEach((counter, i) => {
      if (!counter) return;
      const target = awards[i].count;
      
      gsap.to(counter, {
        innerHTML: target,
        duration: 2.5,
        snap: { innerHTML: 1 },
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none none"
        },
        onUpdate: function() {
          counter.innerHTML = Math.ceil(this.targets()[0].innerHTML).toString();
        }
      });
    });

  }, []);

  return (
    <section className="py-24 bg-background border-t border-b border-white/5" ref={containerRef}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {awards.map((award, index) => {
            const Icon = award.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-gold/20">
                  <Icon size={32} className="text-gold" />
                </div>
                <h3 className="text-5xl font-heading text-white mb-2">
                  <span ref={el => { countersRef.current[index] = el; }}>0</span>+
                </h3>
                <h4 className="text-xl font-heading text-gold mb-3">{award.title}</h4>
                <p className="text-gray font-body text-sm max-w-xs">{award.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
