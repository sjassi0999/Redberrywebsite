import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { Quote } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const testimonials = [
  {
    quote: "A masterclass in winemaking. The depth and character of the Grand Réserve are simply unparalleled in the modern era.",
    author: "James Suckling",
    role: "International Wine Critic"
  },
  {
    quote: "Drinking Château Élégance is an experience that transcends taste. It is an emotional journey through time.",
    author: "Isabella Rossi",
    role: "Master Sommelier"
  },
  {
    quote: "The pinnacle of luxury in a bottle. They have redefined what we should expect from a premium Bordeaux blend.",
    author: "Arthur Pendelton",
    role: "Editor, Wine Spectator"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-32 bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--color-accent)_0%,_transparent_50%)] opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-sm font-button tracking-[0.3em] text-gold mb-4">CRITICS' ACCLAIM</h2>
          <h3 className="text-5xl md:text-6xl font-heading text-white">Words of <span className="text-gray italic">Praise</span></h3>
        </div>

        <div className="max-w-4xl mx-auto">
          <Swiper
            modules={[Autoplay, Pagination, EffectFade]}
            effect="fade"
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="testimonial-swiper !pb-16"
          >
            {testimonials.map((test, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center text-center p-8 md:p-12 bg-background/40 backdrop-blur-md border border-white/10 rounded-2xl">
                  <Quote size={48} className="text-gold/30 mb-8" />
                  <p className="text-2xl md:text-3xl font-heading text-white leading-relaxed mb-10 italic">
                    "{test.quote}"
                  </p>
                  <h4 className="text-lg font-heading text-gold uppercase tracking-wider mb-1">{test.author}</h4>
                  <p className="text-sm font-body text-gray uppercase tracking-widest">{test.role}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      
      {/* Custom CSS for Swiper Pagination */}
      <style>{`
        .testimonial-swiper .swiper-pagination-bullet {
          background: var(--color-gray);
          opacity: 0.5;
        }
        .testimonial-swiper .swiper-pagination-bullet-active {
          background: var(--color-gold);
          opacity: 1;
        }
      `}</style>
    </section>
  );
};
