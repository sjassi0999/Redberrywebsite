import { Hero } from '../components/Hero';
import { Story } from '../components/Story';
import { Vineyard } from '../components/Vineyard';
import { Collection } from '../components/Collection';
import { Lifestyle } from '../components/Lifestyle';
import { Experience } from '../components/Experience';
import { Pairing } from '../components/Pairing';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { Gallery } from '../components/Gallery';
import { CTA } from '../components/CTA';
import { Contact } from '../components/Contact';

export const LandingPage = () => {
  return (
    <>
      <Hero />
      <Story />
      <Vineyard />
      <Collection />
      <Lifestyle />
      <Experience />
      <Pairing />
      <WhyChooseUs />
      <Gallery />
      <CTA />
      <Contact />
    </>
  );
};
