import { useEffect } from 'react';

export const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-32 px-6 md:px-12 max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-heading text-primary mb-12 border-b border-gold/30 pb-6">
        Privacy <span className="text-gold italic">Policy</span>
      </h1>
      
      <div className="space-y-8 font-body text-primary/80 leading-relaxed">
        <section>
          <h2 className="text-2xl font-heading text-primary mb-4">1. Introduction</h2>
          <p>
            At RedBerry Wines, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-heading text-primary mb-4">2. The Data We Collect About You</h2>
          <p className="mb-4">We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
            <li><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
            <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-heading text-primary mb-4">3. How We Use Your Personal Data</h2>
          <p>
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            Where we need to perform the contract we are about to enter into or have entered into with you. Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-heading text-primary mb-4">4. Age Verification</h2>
          <p>
            As a purveyor of alcoholic beverages, we strictly enforce age verification. Any data collected during the age verification process is used solely to ensure compliance with local and international laws regarding the sale and marketing of alcohol.
          </p>
        </section>

        <p className="text-sm text-primary/50 mt-12 pt-8 border-t border-gray/20">
          Last updated: July 2026
        </p>
      </div>
    </div>
  );
};
