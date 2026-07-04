import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Collection', 'Story', 'Vineyard', 'Gallery', 'Contact'];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? 'bg-background/80 backdrop-blur-md py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="text-2xl font-heading font-semibold tracking-wider text-white">
            CHÂTEAU ÉLÉGANCE
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6 text-sm tracking-widest uppercase">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-gray hover:text-gold transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
            <button className="px-6 py-2 border border-gold/50 text-gold hover:bg-gold hover:text-background transition-all duration-300 tracking-wider text-sm cursor-pointer">
              BUY NOW
            </button>
          </div>

          <button
            className="md:hidden text-white cursor-pointer"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] bg-secondary flex flex-col items-center justify-center"
          >
            <button
              className="absolute top-6 right-6 text-white cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              <X size={32} />
            </button>
            <div className="flex flex-col space-y-8 text-center text-2xl font-heading">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white hover:text-gold transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
              <button className="mt-8 px-8 py-3 border border-gold text-gold hover:bg-gold hover:text-secondary transition-all duration-300 tracking-widest text-lg cursor-pointer">
                BUY NOW
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
