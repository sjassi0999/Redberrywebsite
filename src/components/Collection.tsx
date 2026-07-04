import { motion } from 'framer-motion';

const products = [
  { id: 1, name: 'Pelee Island Chardonnay', price: '2017', image: '/images/chardonnay.png', type: 'VQA Ontario VQA' },
  { id: 2, name: 'Pelee Island Cabernet', price: '2018', image: '/images/cabernet.png', type: 'VQA Ontario VQA' },
  { id: 3, name: 'Pelee Island Merlot', price: '2017', image: '/images/merlot.png', type: 'VQA Ontario VQA' },
  { id: 4, name: 'Lighthouse Riesling', price: '2018', image: '/images/riesling.png', type: 'VQA Ontario VQA' },
  { id: 5, name: 'Pelee Island Pinot Grigio', price: '2017', image: '/images/chardonnay.png', type: 'VQA Ontario VQA' },
];

export const Collection = () => {
  return (
    <section id="collection" className="py-32 bg-secondary text-white relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div>
            <h2 className="text-sm font-button tracking-[0.3em] text-gold mb-4">OUR COLLECTION</h2>
            <h3 className="text-5xl md:text-6xl font-heading">Timeless <span className="text-gray italic">Elegance</span></h3>
          </div>
          <button className="hidden md:block mt-8 md:mt-0 text-white border-b border-gold pb-1 font-button tracking-widest text-sm hover:text-gold transition-colors duration-300 cursor-pointer">
            VIEW ALL WINES
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="group relative flex flex-col items-center bg-background/50 p-8 rounded-xl border border-white/5 hover:border-gold/30 transition-colors duration-500 cursor-pointer overflow-hidden"
              whileHover={{ y: -10 }}
            >
              {/* Subtle background glow on hover */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-accent)_0%,_transparent_70%)] opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              
              <div className="h-64 w-full relative mb-8 flex justify-center items-center">
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="h-full object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] z-10 relative"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
                {/* Reflection effect */}
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-2/3 h-10 bg-gold/20 blur-xl rounded-[100%] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <div className="text-center relative z-10 w-full">
                <p className="text-xs font-body text-gray uppercase tracking-widest mb-2">{product.type}</p>
                <h4 className="text-xl font-heading mb-2 text-white group-hover:text-gold transition-colors duration-300">{product.name}</h4>
                <p className="text-gold font-body">{product.price}</p>
                
                <motion.button 
                  className="mt-6 w-full py-2 border border-white/20 text-white font-button text-xs tracking-widest uppercase hover:bg-white hover:text-background transition-colors duration-300 cursor-pointer"
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ scale: 1.02 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  View Details
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
