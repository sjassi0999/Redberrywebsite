import { motion } from 'framer-motion';

export const CTA = () => {
  return (
    <section className="py-32 bg-primary relative overflow-hidden flex flex-col items-center justify-center text-center">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--color-accent)_0%,_transparent_60%)] opacity-20 pointer-events-none z-0"></div>
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        <motion.h2 
          className="text-5xl md:text-7xl lg:text-8xl font-heading text-white mb-8 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Discover Your Next <br/> <span className="text-gold italic">Favourite Wine</span>
        </motion.h2>
        
        <motion.p 
          className="text-white/80 text-lg md:text-xl font-body mb-12 max-w-2xl text-balance"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Experience the artistry, heritage, and craftsmanship behind every bottle.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <a href="#collection" className="px-10 py-5 bg-gold text-secondary font-button font-bold tracking-widest text-sm hover:bg-white hover:text-primary transition-colors duration-500 cursor-pointer shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] text-center inline-block">
            EXPLORE COLLECTION
          </a>
          <a href="https://www.kwalitysweets.com/brampton/online-order/redberry-wines" className="px-10 py-5 border border-white/20 text-white font-button font-bold tracking-widest text-sm hover:border-gold hover:text-gold transition-colors duration-500 cursor-pointer backdrop-blur-sm bg-white/5 text-center inline-block" target="_blank" rel="noopener noreferrer">
            ORDER ONLINE
          </a>
        </motion.div>
      </div>
    </section>
  );
};
