import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ProductFlagship from './components/ProductFlagship';
import HRISSection from './components/HRISSection';
import BespokeEngineering from './components/BespokeEngineering';
import Methodology from './components/Methodology';
import Stats from './components/Stats';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-lix-darker overflow-hidden flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <ProductFlagship />
        <HRISSection />
        <BespokeEngineering />
        <Methodology />
        <Stats />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
