import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Story from './components/Story';
import Details from './components/Details';
import FAQ from './components/FAQ';
import RSVP from './components/RSVP';
import Attire from './components/Attire';
import Entourage from './components/Entourage';
import WildflowerWall from './components/WildflowerWall';

function App() {
  return (
    <div className="min-h-screen text-gray-800 selection:bg-wildflower-pink selection:text-white relative">
      {/* Static Flower Wall is the base layer */}
      <WildflowerWall />

      <div className="relative z-10">
        <Navbar />
        
        <main>
          <Hero />
          
          <div className="relative">
            <Story />
            <Entourage />
            <Details />
            <Attire />
            <FAQ />
            <RSVP />
          </div>
        </main>

        <footer className="py-12 text-center">
          <p className="font-serif italic text-xl mb-2 text-gray-700">Genex & Keziah</p>
          <p className="text-gray-400 text-sm uppercase tracking-widest">July 7, 2026 • Tanay, Rizal</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
