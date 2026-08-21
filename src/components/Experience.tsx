import { motion } from 'framer-motion';

export const Experience = () => {
  return (
    <section className="py-32 bg-secondary text-primary relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Side: Editorial Image */}
          <div className="w-full lg:w-1/2 relative h-[60vh] md:h-[80vh]">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="w-full h-full rounded-2xl overflow-hidden shadow-2xl relative"
            >
              <img 
                loading="lazy"
                decoding="async"
                src="/images/vineyard_parallax.png" 
                alt="Wine Experience" 
                className="w-full h-full object-cover filter brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent mix-blend-overlay"></div>
            </motion.div>
            
            {/* Floating decorative element */}
            <motion.div 
              className="absolute -bottom-10 -right-10 w-48 h-48 bg-gold/10 rounded-full blur-3xl z-0"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5] 
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          {/* Right Side: Narrative */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-sm font-button tracking-[0.3em] text-gold mb-6">WINE EXPERIENCE</h2>
              <h3 className="text-5xl md:text-6xl lg:text-7xl font-heading mb-8 leading-tight">
                Crafted to Complement <br/><span className="italic text-gray">Every Occasion</span>
              </h3>
              
              <div className="w-16 h-[1px] bg-gold mb-8"></div>
              
              <p className="text-lg md:text-xl font-body text-gray leading-relaxed mb-12 max-w-lg">
                Whether you're celebrating life's biggest milestones, hosting an intimate dinner, or simply unwinding after a long day, our wines are created to bring people together and transform ordinary moments into unforgettable experiences.
              </p>

              <a href="https://www.kwalitysweets.com/brampton/online-order/redberry-wines" className="px-10 py-4 border border-primary text-primary font-button tracking-widest text-sm hover:bg-primary hover:text-background transition-colors duration-300 cursor-pointer inline-block text-center" target="_blank" rel="noopener noreferrer">
                ORDER ONLINE
              </a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
