import { motion } from 'framer-motion';

import { Cherry, Leaf, TreePine, Apple, Citrus, Flower2, Grape, Droplet } from 'lucide-react';

const notes = [
  { icon: Cherry, label: 'Rich Berry' },
  { icon: Leaf, label: 'Fresh Herbs' },
  { icon: TreePine, label: 'Oak' },
  { icon: Apple, label: 'Stone Fruit' },
  { icon: Droplet, label: 'Pear' },
  { icon: Citrus, label: 'Citrus' },
  { icon: Flower2, label: 'Floral' },
  { icon: Grape, label: 'Dark Fruit' },
];

const pairings = [
  { wine: 'Cabernet', items: ['Steak', 'Pulled Pork', 'Pâté'] },
  { wine: 'Chardonnay', items: ['Caesar Salad', 'Creamy Pasta', 'Grilled Chicken'] },
  { wine: 'Merlot', items: ['Mediterranean Lamb', 'Beef Stew', 'Goat Curry'] },
  { wine: 'Pinot Grigio', items: ['Seafood', 'Risotto', 'Grilled Chicken'] },
  { wine: 'Riesling', items: ['Shrimp', 'BBQ Pork', 'Asian Cuisine'] },
];

export const Pairing = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Top: Tasting Notes Icons */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-sm font-button tracking-[0.3em] text-gold mb-4">TASTING NOTES</h2>
            <h3 className="text-4xl md:text-5xl font-heading text-primary">The Language of <span className="italic text-gray">Flavor</span></h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-4xl mx-auto">
            {notes.map((note, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center justify-center space-y-4 group"
              >
                <div className="w-20 h-20 rounded-full border border-primary/10 flex items-center justify-center text-primary bg-secondary group-hover:bg-primary group-hover:text-gold group-hover:border-primary transition-colors duration-500 shadow-sm group-hover:shadow-xl">
                  <note.icon className="w-8 h-8 group-hover:scale-110 transition-all duration-300 stroke-[1.5]" />
                </div>
                <span className="font-button tracking-widest text-sm text-primary uppercase">{note.label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom: Wine Pairing Cards */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-sm font-button tracking-[0.3em] text-gold mb-4">CURATED PAIRINGS</h2>
            <h3 className="text-4xl md:text-5xl font-heading text-primary">Perfect <span className="italic text-gray">Harmonies</span></h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {pairings.map((pairing, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-secondary/50 rounded-2xl p-8 border border-primary/5 hover:border-gold/30 hover:bg-white transition-all duration-500 group relative overflow-hidden"
              >
                {/* Subtle gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                <h4 className="text-2xl font-heading text-primary mb-6 group-hover:text-gold transition-colors duration-300">{pairing.wine}</h4>
                <div className="w-10 h-[1px] bg-gold mb-6 opacity-50"></div>
                
                <p className="text-xs font-button tracking-widest uppercase text-gray mb-4">Best With</p>
                <ul className="space-y-3">
                  {pairing.items.map((item, i) => (
                    <li key={i} className="font-body text-primary/80 flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold/50"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
