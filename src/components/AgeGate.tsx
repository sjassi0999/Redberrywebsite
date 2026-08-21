import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const AgeGate = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Check if the user has already verified their age in this session
    const hasVerified = sessionStorage.getItem('ageVerified');
    if (!hasVerified) {
      // Small delay for cinematic effect
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConfirm = () => {
    setIsFadingOut(true);
    sessionStorage.setItem('ageVerified', 'true');
    setTimeout(() => {
      setIsVisible(false);
    }, 1000);
  };

  const handleDeny = () => {
    window.location.href = "https://www.google.com"; // Redirect away
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[99999] bg-[#050505] flex flex-col items-center justify-center px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: isFadingOut ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Subtle background glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.05)_0%,_transparent_50%)] pointer-events-none"></div>
          
          <div className="relative z-10 text-center max-w-lg mx-auto flex flex-col items-center">
            <motion.h1 
              className="text-2xl md:text-3xl font-heading font-semibold tracking-[0.2em] text-white mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              REDBERRY WINES
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="flex flex-col items-center"
            >
              <h2 className="text-3xl md:text-4xl font-heading text-white mb-6 leading-tight">
                Are you of legal drinking age <br/> in your country?
              </h2>
              <p className="text-white/50 font-body text-sm mb-12 max-w-sm mx-auto text-balance">
                You must be of legal drinking age to enter this site. By entering, you agree to our Terms of Service and Privacy Policy.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 w-full justify-center">
                <button 
                  onClick={handleConfirm}
                  className="px-12 py-4 bg-gold text-secondary font-button font-semibold tracking-wider hover:bg-white hover:text-primary transition-all duration-500 cursor-pointer w-full sm:w-auto"
                >
                  YES, I AM
                </button>
                <button 
                  onClick={handleDeny}
                  className="px-12 py-4 border border-white/20 text-white font-button font-semibold tracking-wider hover:border-gold hover:text-gold transition-all duration-500 cursor-pointer bg-transparent w-full sm:w-auto"
                >
                  NO, I AM NOT
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
