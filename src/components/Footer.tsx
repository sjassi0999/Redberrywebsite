export const Footer = () => {
  return (
    <footer id="contact" className="bg-secondary text-white pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-heading font-semibold tracking-wider text-white mb-6">CHÂTEAU ÉLÉGANCE</h2>
            <p className="text-gray font-body text-sm leading-relaxed mb-8">
              Crafting extraordinary moments through uncompromised quality and centuries of heritage.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray hover:text-gold transition-colors duration-300 font-button text-xs tracking-widest">
                IG
              </a>
              <a href="#" className="text-gray hover:text-gold transition-colors duration-300 font-button text-xs tracking-widest">
                FB
              </a>
              <a href="#" className="text-gray hover:text-gold transition-colors duration-300 font-button text-xs tracking-widest">
                X
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold font-button tracking-widest text-sm mb-6">QUICK LINKS</h4>
            <ul className="space-y-4">
              {['Our Story', 'The Vineyard', 'The Collection', 'Journal', 'Contact Us'].map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-gray hover:text-white transition-colors duration-300 text-sm font-body">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold font-button tracking-widest text-sm mb-6">CONTACT</h4>
            <ul className="space-y-4 text-sm font-body text-gray">
              <li>12 Route des Châteaux</li>
              <li>33250 Pauillac, France</li>
              <li className="pt-2">info@chateauelegance.com</li>
              <li>+33 5 56 00 00 00</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-gold font-button tracking-widest text-sm mb-6">NEWSLETTER</h4>
            <p className="text-gray font-body text-sm mb-4">
              Subscribe for exclusive releases and private tasting invitations.
            </p>
            <form className="flex border-b border-gray/30 focus-within:border-gold transition-colors duration-300">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-transparent py-3 text-sm font-body text-white outline-none placeholder-gray/50"
              />
              <button type="submit" className="text-gold hover:text-white text-sm font-button tracking-widest transition-colors duration-300 cursor-pointer">
                JOIN
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-gray/50 font-body">
          <p>&copy; {new Date().getFullYear()} Château Élégance. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
