import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Story from './components/Story';
import Details from './components/Details';
import FAQ from './components/FAQ';
import RSVP from './components/RSVP';
import Attire from './components/Attire';
import Entourage from './components/Entourage';
import WildflowerWall from './components/WildflowerWall';
import RoleModal from './components/RoleModal';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [userRole, setUserRole] = useState<string | null>(null);

  useEffect(() => {
    const savedRole = localStorage.getItem('userRole');
    if (savedRole) {
      setUserRole(savedRole);
    }
  }, []);

  const handleRoleSelect = (role: string) => {
    setUserRole(role);
    localStorage.setItem('userRole', role);
  };

  return (
    <div className="min-h-screen text-gray-800 selection:bg-wildflower-pink selection:text-white relative">
      <AnimatePresence>
        {!userRole && (
          <RoleModal onSelect={handleRoleSelect} />
        )}
      </AnimatePresence>

      {/* Static Flower Wall is the base layer */}
      <WildflowerWall />

      <div className="relative z-10">
        <Navbar />
        
        <main>
          <Hero />
          
          <div className="relative">
            <Story />
            <Entourage />
            <Details role={userRole} />

            {/* Transition Bridge: Hugging Photos */}
            <section className="py-16 md:py-24 px-6 max-w-3xl mx-auto overflow-hidden">
              <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
                <motion.div 
                  initial={{ opacity: 0, x: -20, rotate: -4 }}
                  whileInView={{ opacity: 1, x: 0, rotate: -2 }}
                  viewport={{ once: true }}
                  className="w-full max-w-[280px] md:max-w-[300px]"
                >
                  <img 
                    src="/hug-1.jpg" 
                    alt="Genex and Keziah"
                    className="w-full aspect-[3/4] object-cover object-[center_20%] rounded-[1.5rem] shadow-2xl border-white border-[8px]"
                  />
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: 20, rotate: 4 }}
                  whileInView={{ opacity: 1, x: 0, rotate: 2 }}
                  viewport={{ once: true }}
                  className="w-full max-w-[280px] md:max-w-[300px] md:mt-20"
                >
                  <img 
                    src="/hug-2.jpg" 
                    alt="Genex and Keziah"
                    className="w-full aspect-[3/4] object-cover object-[center_20%] rounded-[1.5rem] shadow-2xl border-white border-[8px]"
                  />
                </motion.div>
              </div>
            </section>

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
