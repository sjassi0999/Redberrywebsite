import { motion } from 'framer-motion';
import { useState } from 'react';

export const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const endpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT || 'https://formsubmit.co/ajax/your-random-string-here';
      const response = await fetch(endpoint, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus('success');
        form.reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };
  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary text-primary relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Side: Contact Info */}
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-button tracking-[0.3em] text-gold mb-4">GET IN TOUCH</h2>
              <h3 className="text-4xl md:text-5xl font-heading text-primary mb-6">Let's start a <br/><span className="italic text-gray">conversation.</span></h3>
              <p className="text-primary/70 font-body leading-relaxed mb-12 max-w-md">
                Whether you have a question about our collections, need assistance with an order, or simply want to share your experience, we would love to hear from you.
              </p>
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-xs font-button tracking-widest text-gray uppercase mb-2">Visit Us</h4>
                  <p className="font-body text-primary/90">2150 Steeles Ave E,<br/>Brampton, ON L6T 1A7</p>
                </div>
                <div>
                  <h4 className="text-xs font-button tracking-widest text-gray uppercase mb-2">Email</h4>
                  <p className="font-body text-primary/90">info@redberrywines.com</p>
                </div>

              </div>
            </motion.div>
          </div>

          {/* Right Side: The Form */}
          <div className="w-full lg:w-7/12">
            <motion.form 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-12 lg:p-16 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-primary/5"
              onSubmit={handleSubmit}
            >
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                  <div className="relative group">
                    <input type="text" id="name" name="name" className="w-full bg-transparent border-b border-primary/20 py-3 text-primary focus:outline-none focus:border-gold transition-colors duration-300 peer placeholder-transparent" placeholder="Name" required />
                    <label htmlFor="name" className="absolute left-0 top-3 text-primary/50 text-sm peer-focus:-top-6 peer-focus:text-xs peer-focus:text-gold peer-valid:-top-6 peer-valid:text-xs transition-all duration-300 pointer-events-none uppercase font-button tracking-wider">Your Name</label>
                  </div>
                  <div className="relative group">
                    <input type="email" id="email" name="email" className="w-full bg-transparent border-b border-primary/20 py-3 text-primary focus:outline-none focus:border-gold transition-colors duration-300 peer placeholder-transparent" placeholder="Email" required />
                    <label htmlFor="email" className="absolute left-0 top-3 text-primary/50 text-sm peer-focus:-top-6 peer-focus:text-xs peer-focus:text-gold peer-valid:-top-6 peer-valid:text-xs transition-all duration-300 pointer-events-none uppercase font-button tracking-wider">Email Address</label>
                  </div>
                </div>
                
                <div className="relative group mt-10">
                  <input type="text" id="subject" name="subject" className="w-full bg-transparent border-b border-primary/20 py-3 text-primary focus:outline-none focus:border-gold transition-colors duration-300 peer placeholder-transparent" placeholder="Subject" />
                  <label htmlFor="subject" className="absolute left-0 top-3 text-primary/50 text-sm peer-focus:-top-6 peer-focus:text-xs peer-focus:text-gold peer-[&:not(:placeholder-shown)]:-top-6 peer-[&:not(:placeholder-shown)]:text-xs transition-all duration-300 pointer-events-none uppercase font-button tracking-wider">Subject (Optional)</label>
                </div>

                <div className="relative group mt-10">
                  <textarea id="message" name="message" rows={4} className="w-full bg-transparent border-b border-primary/20 py-3 text-primary focus:outline-none focus:border-gold transition-colors duration-300 peer placeholder-transparent resize-none" placeholder="Message" required></textarea>
                  <label htmlFor="message" className="absolute left-0 top-3 text-primary/50 text-sm peer-focus:-top-6 peer-focus:text-xs peer-focus:text-gold peer-valid:-top-6 peer-valid:text-xs transition-all duration-300 pointer-events-none uppercase font-button tracking-wider">Your Message</label>
                </div>

                <div className="pt-4">
                  <button type="submit" disabled={status === 'submitting'} className="w-full py-5 bg-primary text-secondary font-button tracking-[0.2em] uppercase text-sm hover:bg-gold hover:text-white transition-colors duration-300 cursor-pointer shadow-lg flex items-center justify-center gap-4 disabled:opacity-50 disabled:cursor-not-allowed">
                    {status === 'submitting' ? 'SENDING...' : status === 'success' ? 'MESSAGE SENT' : 'SEND MESSAGE'}
                  </button>
                  {status === 'error' && (
                    <p className="text-red-600 text-sm mt-4 text-center font-body">Something went wrong. Please try again.</p>
                  )}
                </div>
              </div>
            </motion.form>
          </div>

        </div>
      </div>
    </section>
  );
};
