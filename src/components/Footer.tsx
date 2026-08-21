

export const Footer = () => {
  const quickLinks = [
    { name: 'Our Story', href: '/#story' },
    { name: 'The Vineyard', href: '/#vineyard' },
    { name: 'The Collection', href: '/#collection' },
    { name: 'Gallery', href: '/#gallery' },
    { name: 'Contact Us', href: '/#contact' },
  ];

  return (
    <footer className="bg-[#050505] text-white/80 pt-24 pb-12 border-t border-white/5 relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-heading font-semibold tracking-wider text-white mb-6">REDBERRY WINES</h2>
            <p className="text-white/60 font-body text-sm leading-relaxed mb-8">
              Crafting extraordinary moments through uncompromised quality and centuries of heritage.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-white/50 hover:text-gold transition-colors duration-300 font-button text-xs tracking-widest">
                IG
              </a>
              <a href="#" className="text-white/50 hover:text-gold transition-colors duration-300 font-button text-xs tracking-widest">
                FB
              </a>
              <a href="#" className="text-white/50 hover:text-gold transition-colors duration-300 font-button text-xs tracking-widest">
                X
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold font-button tracking-widest text-sm mb-6">QUICK LINKS</h4>
            <ul className="space-y-4">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-white/60 hover:text-white transition-colors duration-300 text-sm font-body inline-block">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold font-button tracking-widest text-sm mb-6">CONTACT</h4>
            <ul className="space-y-4 text-sm font-body text-white/60">
              <li>2150 Steeles Ave E</li>
              <li>Brampton, ON L6T 1A7</li>
              <li className="pt-2 hover:text-white transition-colors cursor-pointer">info@redberrywines.com</li>

            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-gold font-button tracking-widest text-sm mb-6">NEWSLETTER</h4>
            <p className="text-white/60 font-body text-sm mb-6">
              Subscribe for exclusive releases and private tasting invitations.
            </p>
            <form className="flex border-b border-white/20 focus-within:border-gold transition-colors duration-300 group" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-transparent py-3 text-sm font-body text-white outline-none placeholder-white/30"
                required
              />
              <button type="submit" className="text-gold opacity-80 group-hover:opacity-100 group-focus-within:opacity-100 hover:text-white text-sm font-button tracking-widest transition-all duration-300 cursor-pointer pl-4">
                JOIN
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-white/40 font-body">
          <p>&copy; {new Date().getFullYear()} RedBerry Wines. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
