import { useEffect } from 'react';

export const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-32 px-6 md:px-12 max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-heading text-primary mb-12 border-b border-gold/30 pb-6">
        Terms of <span className="text-gold italic">Service</span>
      </h1>
      
      <div className="space-y-8 font-body text-primary/80 leading-relaxed">
        <section>
          <h2 className="text-2xl font-heading text-primary mb-4">1. Agreement to Terms</h2>
          <p>
            By accessing or using the RedBerry Wines website, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the website or use our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-heading text-primary mb-4">2. Legal Drinking Age</h2>
          <p>
            You must be of legal drinking age in your country of residence to use this website and purchase our products. We reserve the right to request proof of age at any time and may refuse service or cancel orders if adequate proof is not provided.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-heading text-primary mb-4">3. Intellectual Property</h2>
          <p>
            The website and its original content, features, and functionality are owned by RedBerry Wines and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-heading text-primary mb-4">4. Products and Pricing</h2>
          <p>
            All products are subject to availability, and we reserve the right to impose quantity limits on any order, to reject all or part of an order, and to discontinue products without notice, even if you have already placed your order. Prices are subject to change without notice.
          </p>
        </section>

        <p className="text-sm text-primary/50 mt-12 pt-8 border-t border-gray/20">
          Last updated: July 2026
        </p>
      </div>
    </div>
  );
};
