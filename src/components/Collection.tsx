import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const products = [
  { 
    id: 1, 
    name: 'Cabernet', 
    price: '2018', 
    image: '/images/Cabernet.png', 
    type: 'VQA Ontario VQA',
    shortStory: 'Rich. Elegant. Unforgettable.',
    tasteNotes: 'Beautifully aromatic with ripe currant, subtle spice, and hints of cedar. Velvety tannins create a smooth, lingering finish.',
    pairing: 'Perfect companion for grilled meats, hearty dishes, and memorable evenings.'
  },
  { 
    id: 2, 
    name: 'Chardonnay', 
    price: '2017', 
    image: '/images/Chardonnay.png', 
    type: 'VQA Ontario VQA',
    shortStory: 'Fresh Sophistication in Every Sip',
    tasteNotes: 'Crafted in a Burgundian style, this Chardonnay offers vibrant honeydew melon, ripe peach, and citrus notes balanced with refreshing acidity.',
    pairing: 'A refined white wine designed for elegant dining experiences.'
  },
  { 
    id: 3, 
    name: 'Merlot', 
    price: '2017', 
    image: '/images/Merlot.png', 
    type: 'VQA Ontario VQA',
    shortStory: 'Smooth. Fruit-Forward. Perfectly Balanced.',
    tasteNotes: 'Ruby red with floral aromas and layers of ripe berry flavors. Medium-bodied and exceptionally approachable, delivering a refined finish.',
    pairing: 'Pairs beautifully with Mediterranean cuisine and rich stews.'
  },
  { 
    id: 4, 
    name: 'Pinot Grigio', 
    price: '2017', 
    image: '/images/pinot_grigio.png', 
    type: 'VQA Ontario VQA',
    shortStory: 'Crisp, Bright & Refreshingly Elegant',
    tasteNotes: 'Delicate floral aromas meet ripe pear and apricot flavors with a silky texture and refreshing finish.',
    pairing: 'Designed for seafood, grilled chicken, and warm summer evenings.'
  },
  { 
    id: 5, 
    name: 'Riesling', 
    price: '2018', 
    image: '/images/riesling_vqa.png', 
    type: 'VQA Ontario VQA',
    shortStory: 'Vibrant Freshness Inspired by Ontario',
    tasteNotes: 'Fragrant orchard apples, lively acidity, and a beautifully balanced finish make this Riesling refreshing and expressive.',
    pairing: 'Ideal for outdoor gatherings or seafood-inspired cuisine.'
  },
  { 
    id: 6, 
    name: 'Shiraz', 
    price: '2020', 
    image: '/images/shiraz.png', 
    type: 'VQA Ontario VQA',
    shortStory: 'Bold, Spicy & Deeply Flavorful',
    tasteNotes: 'Rich dark fruit, cracked black pepper, and hints of vanilla blend seamlessly for a full-bodied, robust finish.',
    pairing: 'Perfect with grilled steaks, hearty stews, or aged cheddar.'
  }
];

export const Collection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProduct = products[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % products.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <section id="collection" className="py-24 md:py-32 bg-background text-primary relative overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24">
          <div>
            <h2 className="text-sm font-button tracking-[0.3em] text-gold mb-4">OUR COLLECTION</h2>
            <h3 className="text-5xl md:text-6xl font-heading">Timeless <span className="text-gray italic">Elegance</span></h3>
          </div>
          <div className="hidden md:flex items-center gap-4 mt-8 md:mt-0">
            <button 
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-gold hover:text-white hover:border-gold transition-all duration-500 cursor-pointer shadow-sm hover:shadow-md"
            >
              <ChevronLeft className="w-5 h-5 stroke-[1.5]" />
            </button>
            <button 
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-gold hover:text-white hover:border-gold transition-all duration-500 cursor-pointer shadow-sm hover:shadow-md"
            >
              <ChevronRight className="w-5 h-5 stroke-[1.5]" />
            </button>
          </div>
        </div>

        {/* Carousel Showcase */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          {/* Left: Dynamic Details */}
          <div className="w-full lg:w-5/12 flex flex-col justify-center min-h-[400px]">
             <AnimatePresence mode="wait">
               <motion.div
                  key={activeProduct.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="flex flex-col"
               >
                 <p className="text-sm font-body text-gray uppercase tracking-[0.2em] mb-4 flex items-center gap-4">
                   <span className="w-8 h-[1px] bg-gold"></span>
                   {activeProduct.type}
                 </p>
                 <h4 className="text-5xl md:text-6xl lg:text-7xl font-heading mb-6 leading-tight text-primary drop-shadow-sm">
                   {activeProduct.name}
                 </h4>
                 
                 <p className="text-xl md:text-2xl text-gold font-body mb-10 italic font-light tracking-wide">
                   {activeProduct.shortStory}
                 </p>

                 <div className="space-y-8 mb-12 relative before:absolute before:left-0 before:top-2 before:bottom-2 before:w-[1px] before:bg-gradient-to-b before:from-gold/50 before:to-transparent pl-6">
                   <div>
                     <h5 className="text-xs font-button tracking-[0.25em] uppercase text-gray mb-3">Taste Notes</h5>
                     <p className="text-primary/70 font-body leading-relaxed text-sm md:text-base">{activeProduct.tasteNotes}</p>
                   </div>
                   <div>
                     <h5 className="text-xs font-button tracking-[0.25em] uppercase text-gray mb-3">Food Pairing</h5>
                     <p className="text-primary/70 font-body leading-relaxed text-sm md:text-base">{activeProduct.pairing}</p>
                   </div>
                 </div>

                 <div>
                   <a href="#contact" className="group relative inline-flex items-center justify-center px-10 py-4 font-button tracking-[0.2em] text-xs md:text-sm overflow-hidden border border-primary/20 hover:border-gold transition-colors duration-500 text-primary hover:text-white bg-transparent">
                     <span className="absolute inset-0 w-full h-full bg-gold -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[0.87,0,0.13,1] z-0"></span>
                     <span className="relative z-10 transition-colors duration-500">EXPLORE WINE</span>
                   </a>
                 </div>
               </motion.div>
             </AnimatePresence>
          </div>

          {/* Right: Active Image Display */}
          <div className="w-full lg:w-7/12 relative h-[60vh] md:h-[80vh] flex items-center justify-center">
             {/* A subtle glowing aura behind the bottle */}
             <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
               <div className="w-[300px] md:w-[400px] h-[70%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/15 via-gold/5 to-transparent blur-3xl rounded-full"></div>
             </div>

             <AnimatePresence mode="wait">
               <motion.div
                  key={activeProduct.id}
                  className="absolute inset-0 w-full h-full flex items-center justify-center mix-blend-multiply p-4 md:p-8"
                  initial={{ opacity: 0, y: 30, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -30, scale: 1.03 }}
                  transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
               >
                 <img 
                   src={activeProduct.image} 
                   alt={activeProduct.name} 
                   className="w-full h-full object-contain object-center drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)]" 
                   loading="lazy"
                 />
               </motion.div>
             </AnimatePresence>

             {/* Fade out the bottom of the image to hide raw photo artifacts/stands */}
             <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background via-background/90 to-transparent pointer-events-none z-10"></div>
          </div>
        </div>

        {/* Bottom: Thumbnail Navigation */}
        <div className="mt-4 lg:mt-12 w-full">
            <div className="flex gap-10 md:gap-16 overflow-x-auto pb-8 pt-4 snap-x hide-scrollbar justify-start lg:justify-center items-end px-6">
              {products.map((product, idx) => (
                 <button
                   key={product.id}
                   onClick={() => setActiveIndex(idx)}
                   className={`relative w-16 h-24 md:w-20 md:h-32 flex-shrink-0 snap-start transition-all duration-700 cursor-pointer flex items-end justify-center mix-blend-multiply group
                     ${activeIndex === idx 
                        ? 'opacity-100 z-10 scale-110' 
                        : 'opacity-40 hover:opacity-80 scale-95 hover:scale-100 grayscale hover:grayscale-0'
                     }`}
                 >
                   <img src={product.image} className="w-auto h-full object-contain object-bottom transition-transform duration-700 ease-[0.25,1,0.5,1] group-hover:-translate-y-2 drop-shadow-md" alt={product.name} />
                   
                   {/* Elegant Underline */}
                   <div className={`absolute -bottom-6 left-1/2 -translate-x-1/2 h-[2px] transition-all duration-700 ease-[0.25,1,0.5,1] ${activeIndex === idx ? 'bg-gold w-3/4' : 'bg-transparent w-0'}`}></div>
                 </button>
              ))}
           </div>
        </div>

      </div>
    </section>
  );
};
