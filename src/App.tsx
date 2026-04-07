import { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import HowWeHelp from './components/HowWeHelp';
import Benefits from './components/Benefits';
import Featured from './components/Featured';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.title = 'Apoloia - Tecnología que impulsa tu negocio';
  }, []);

  return (
    <div className="bg-[#0B0B0F] min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <HowWeHelp />
      <Benefits />
      <Featured />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;
