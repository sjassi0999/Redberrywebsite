import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // intentionally empty: Do NOT use body overflow hidden or lenis.stop()
    // It breaks GSAP ScrollTrigger's pin-spacer and crashes the homepage!
    // We handle scroll locking via touch-none on the menu overlay instead.
  }, [isMenuOpen]);

  const navLinks = ['Story', 'Vineyard', 'Collection', 'Gallery', 'Contact'];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    setIsMenuOpen(false);
    
    // If we are already on the home page, smoothly scroll to the element
    if (location.pathname === '/') {
      e.preventDefault();
      if ((window as any).lenis) {
        (window as any).lenis.scrollTo(`#${id}`);
      } else {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
      window.history.pushState(null, '', `/#${id}`);
    }
    // If we are on another page (like privacy), let the default href navigation happen
  };

  const textColorClass = isScrolled 
    ? 'text-white' 
    : (isHomePage ? 'text-white' : 'text-primary');

  const navLinkColorClass = isScrolled 
    ? 'text-white/80 hover:text-gold' 
    : (isHomePage ? 'text-white/80 hover:text-white' : 'text-primary/80 hover:text-primary');

  const buttonClass = isScrolled
    ? 'border-gold/50 text-gold hover:bg-gold hover:text-black'
    : (isHomePage 
        ? 'border-gold/50 text-gold hover:bg-gold hover:text-black' 
        : 'border-primary/50 text-primary hover:bg-primary hover:text-white');

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? 'bg-[#030303]/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link 
            to="/" 
            className="relative z-20 transition-opacity duration-300 hover:opacity-80"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img src="/images/logo.webp" alt="Redberry Wines Logo" className="h-20 md:h-32 w-auto" />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6 text-sm tracking-widest uppercase">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`/#${link.toLowerCase()}`}
                  onClick={(e) => handleNavClick(e, link.toLowerCase())}
                  className={`transition-colors duration-300 ${navLinkColorClass}`}
                >
                  {link}
                </a>
              ))}
            </div>
            <a 
              href="https://www.kwalitysweets.com/brampton/online-order/redberry-wines"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-6 py-2 border transition-all duration-300 tracking-wider text-sm cursor-pointer inline-block ${buttonClass}`}
            >
              BUY NOW
            </a>
          </div>

          <button
            className={`${isHomePage ? 'hidden' : 'block'} md:hidden cursor-pointer transition-colors duration-300 ${textColorClass}`}
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-[#030303] flex flex-col items-center justify-center overflow-hidden touch-none"
          >
            <button
              className="absolute top-6 right-6 text-white cursor-pointer hover:text-gold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <X size={32} />
            </button>
            
            {/* Background design element for mobile menu */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.15)_0%,_transparent_70%)] opacity-50 z-0"></div>

            <div className="flex flex-col space-y-8 text-center text-2xl font-heading relative z-10">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`/#${link.toLowerCase()}`}
                  onClick={(e) => handleNavClick(e, link.toLowerCase())}
                  className="text-white/80 hover:text-gold transition-colors duration-300 tracking-widest uppercase"
                >
                  {link}
                </a>
              ))}
              <a 
                href="https://www.kwalitysweets.com/brampton/online-order/redberry-wines"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 px-8 py-3 border border-gold text-gold hover:bg-gold hover:text-black transition-all duration-300 tracking-widest text-lg cursor-pointer inline-block mx-auto"
              >
                BUY NOW
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
