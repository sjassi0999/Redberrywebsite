import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const bottleImages = [
  "/images/chardonnay.png",
  "/images/cabernet.png",
  "/images/merlot.png",
  "/images/riesling.png",
  "/images/chardonnay.png",
];

const productData = [
  {
    left: [
      { title: "Varietal", desc: "100% Chardonnay" },
      { title: "Style", desc: "Burgundian style white wine" },
      { title: "Fermentation", desc: "Stainless Steel" },
      { title: "Origin", desc: "VQA Ontario" }
    ],
    right: [
      { title: "Tasting", desc: "Ripe honeydew melon and peaches." },
      { title: "Palate", desc: "Medium-bodied, racy acidity." },
      { title: "Pairing", desc: "Tangy caesar salad." },
      { title: "Specs", desc: "12.5% Alc | 5.6 g/L Sugar" }
    ]
  },
  {
    left: [
      { title: "Varietal", desc: "100% Cabernet" },
      { title: "Style", desc: "Beautifully aromatic" },
      { title: "Profile", desc: "Plenty of weight and flavour" },
      { title: "Origin", desc: "VQA Ontario" }
    ],
    right: [
      { title: "Tasting", desc: "Light currant jam and spice." },
      { title: "Palate", desc: "Summer berry pie, velvety tannins." },
      { title: "Pairing", desc: "Char-grilled steak or pulled pork." },
      { title: "Specs", desc: "12.7% Alc | 8.5 g/L Sugar" }
    ]
  },
  {
    left: [
      { title: "Varietal", desc: "100% Merlot" },
      { title: "Style", desc: "Full and fruity red blend" },
      { title: "Profile", desc: "Medium bodied red" },
      { title: "Origin", desc: "VQA Ontario" }
    ],
    right: [
      { title: "Tasting", desc: "Berry and floral aromas." },
      { title: "Palate", desc: "Dry, with lots of ripe fruit flavour." },
      { title: "Pairing", desc: "Mediterranean style lamb." },
      { title: "Specs", desc: "13% Alc | 10.3 g/L Sugar" }
    ]
  },
  {
    left: [
      { title: "Varietal", desc: "100% Riesling" },
      { title: "Style", desc: "Charming and beautifully fresh" },
      { title: "Fermentation", desc: "Stainless Steel" },
      { title: "Origin", desc: "VQA Ontario" }
    ],
    right: [
      { title: "Tasting", desc: "Ripe orchard apples." },
      { title: "Palate", desc: "Cleansing acidity and rich taste." },
      { title: "Pairing", desc: "Lemongrass BBQ pork." },
      { title: "Specs", desc: "12.3% Alc | 13 g/L Sugar" }
    ]
  },
  {
    left: [
      { title: "Blend", desc: "85% Pinot Gris, 15% Chardonnay" },
      { title: "Style", desc: "Smooth & rich white wine" },
      { title: "Fermentation", desc: "Stainless Steel" },
      { title: "Origin", desc: "VQA Ontario" }
    ],
    right: [
      { title: "Tasting", desc: "Light floral nose, ripe pears." },
      { title: "Palate", desc: "Silky, rich mouth feel." },
      { title: "Pairing", desc: "Seafood tostada bites." },
      { title: "Specs", desc: "12.7% Alc | 5.9 g/L Sugar" }
    ]
  }
];

export const Features = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftFeaturesRef = useRef<HTMLDivElement>(null);
  const rightFeaturesRef = useRef<HTMLDivElement>(null);
  const centerBottleRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!containerRef.current || !leftFeaturesRef.current || !rightFeaturesRef.current || !centerBottleRef.current) return;

    const leftItems = leftFeaturesRef.current.children;
    const rightItems = rightFeaturesRef.current.children;

    // 1. Reveal Animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
        toggleActions: "play none none reverse",
      }
    });

    tl.fromTo(centerBottleRef.current,
      { scale: 0.8, opacity: 0, y: 100 },
      { scale: 1, opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    )
    .fromTo(leftItems, 
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, stagger: 0.2, duration: 0.8, ease: "power2.out" },
      "-=0.6"
    )
    .fromTo(rightItems,
      { x: 50, opacity: 0 },
      { x: 0, opacity: 1, stagger: 0.2, duration: 0.8, ease: "power2.out" },
      "-=0.8"
    );

    // 2. Pin and Scrub Bottle Images
    const pinTl = gsap.to({}, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=2000",
        pin: true,
        scrub: true,
        onUpdate: (self) => {
          if (centerBottleRef.current) {
            const index = Math.min(Math.floor(self.progress * 5), 4);
            centerBottleRef.current.src = bottleImages[index];

            const data = productData[index];
            if (leftFeaturesRef.current && rightFeaturesRef.current) {
              const leftItems = leftFeaturesRef.current.children;
              const rightItems = rightFeaturesRef.current.children;
              
              for (let i = 0; i < 4; i++) {
                if (leftItems[i]) {
                  const h3 = leftItems[i].querySelector('h3');
                  const p = leftItems[i].querySelector('p');
                  if (h3) h3.innerText = data.left[i].title;
                  if (p) p.innerText = data.left[i].desc;
                }
                if (rightItems[i]) {
                  const h3 = rightItems[i].querySelector('h3');
                  const p = rightItems[i].querySelector('p');
                  if (h3) h3.innerText = data.right[i].title;
                  if (p) p.innerText = data.right[i].desc;
                }
              }
            }
          }
        }
      }
    });

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
      pinTl.scrollTrigger?.kill();
      pinTl.kill();
    };

  }, []);

  const leftFeatures = productData[0].left;
  const rightFeatures = productData[0].right;

  return (
    <section ref={containerRef} className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-heading text-white">The Anatomy of <span className="text-gold">Perfection</span></h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          
          {/* Left Features */}
          <div ref={leftFeaturesRef} className="flex flex-col space-y-10 w-full lg:w-1/3 text-center lg:text-right">
            {leftFeatures.map((f, i) => (
              <div key={i} className="group">
                <h3 className="text-2xl font-heading text-white group-hover:text-gold transition-colors duration-300">{f.title}</h3>
                <p className="text-gray font-body mt-2">{f.desc}</p>
              </div>
            ))}
          </div>

          {/* Center Bottle */}
          <div className="w-full lg:w-1/3 flex justify-center relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-accent)_0%,_transparent_70%)] opacity-10"></div>
            <img 
              ref={centerBottleRef}
              src={bottleImages[0]} 
              alt="Anatomy Bottle" 
              className="h-[500px] md:h-[700px] object-contain relative z-10 filter drop-shadow-[0_0_30px_rgba(212,175,55,0.15)] transition-opacity duration-300"
            />
          </div>

          {/* Right Features */}
          <div ref={rightFeaturesRef} className="flex flex-col space-y-10 w-full lg:w-1/3 text-center lg:text-left">
            {rightFeatures.map((f, i) => (
              <div key={i} className="group">
                <h3 className="text-2xl font-heading text-white group-hover:text-gold transition-colors duration-300">{f.title}</h3>
                <p className="text-gray font-body mt-2">{f.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
