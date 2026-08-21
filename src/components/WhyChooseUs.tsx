import { motion } from 'framer-motion';

const pillars = [
  {
    title: 'Handcrafted Excellence',
    desc: 'Every bottle begins with carefully selected grapes sourced from Ontario vineyards.'
  },
  {
    title: 'VQA Certified',
    desc: 'Produced to meet the highest quality standards of VQA Ontario.'
  },
  {
    title: 'Small Batch Craftsmanship',
    desc: 'Attention to every detail ensures consistency, balance, and exceptional character.'
  },
  {
    title: 'Authentic Wine Experience',
    desc: 'Designed for those who appreciate premium wines with genuine heritage.'
  }
];

export const WhyChooseUs = () => {
  return (
    <section className="py-32 bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--color-accent)_0%,_transparent_50%)] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-sm font-button tracking-[0.3em] text-gold mb-4">THE CHÂTEAU DIFFERENCE</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-6">Why Choose <span className="italic text-white/60">Us</span></h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-full border border-gold/30 flex items-center justify-center mb-8 group-hover:bg-gold transition-colors duration-500">
                <span className="text-gold group-hover:text-primary transition-colors duration-500 text-xl font-heading">0{index + 1}</span>
              </div>
              <h4 className="text-2xl font-heading text-white mb-4 group-hover:text-gold transition-colors duration-300">{pillar.title}</h4>
              <p className="text-white/70 font-body leading-relaxed max-w-xs">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
