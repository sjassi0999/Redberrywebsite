import { motion } from 'framer-motion';

export const CTA = () => {
  return (
    <section className="h-screen w-full relative flex items-center justify-center bg-background overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-secondary)_0%,_var(--color-background)_100%)]"></div>
        <div className="absolute inset-0 opacity-20 bg-smoke-pattern mix-blend-screen animate-smoke"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl flex flex-col items-center">
        <motion.h2 
          className="text-5xl md:text-8xl font-heading text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Taste the <br/> <span className="text-gold italic">Extraordinary</span>
        </motion.h2>
        
        <motion.p 
          className="text-gray text-lg md:text-xl font-body mb-12 max-w-2xl text-balance"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Join our exclusive list of connoisseurs and experience a symphony of flavors that redefine luxury winemaking.
        </motion.p>
        
        <motion.button 
          className="px-10 py-5 bg-gold text-secondary font-button font-bold tracking-widest text-sm hover:bg-white transition-colors duration-500 cursor-pointer shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:shadow-[0_0_40px_rgba(255,255,255,0.5)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          SHOP COLLECTION
        </motion.button>
      </div>
    </section>
  );
};
