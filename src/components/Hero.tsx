import React from 'react';
import { motion } from 'framer-motion';
import Countdown from './Countdown';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="uppercase tracking-[0.3em] text-xs md:text-sm mb-4 block text-gray-500 font-medium">Save the Date</span>
          <h1 className="text-6xl sm:text-7xl md:text-9xl font-bold mb-6 text-gray-800 italic leading-tight">Genex & Keziah</h1>
          <div className="w-24 md:w-32 h-1.5 bg-wildflower-pink mx-auto mb-10 md:mb-16 rounded-full opacity-60"></div>
          
          <div className="mb-16 md:mb-24 px-2">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 w-full">
              {/* Left Portrait */}
              <motion.div 
                initial={{ opacity: 0, x: -30, rotate: -5 }}
                animate={{ opacity: 1, x: 0, rotate: -2 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="w-full md:w-[22%] order-2 md:order-1"
              >
                <img 
                  src="/hero-left.jpg" 
                  alt="Prenup Portrait"
                  className="w-full aspect-[4/5] md:aspect-[3/4] object-cover object-[center_80%] shadow-2xl rounded-3xl border-white border-[6px] md:border-[10px]"
                />
              </motion.div>

              {/* Center Landscape - THE MAIN ATTRACTION */}
              <motion.div 
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="w-full md:w-[50%] order-1 md:order-2"
              >
                <img 
                  src="/hero-center.jpg" 
                  alt="Genex & Keziah Centerpiece"
                  className="w-full aspect-[4/3] md:aspect-video object-cover object-[center_37%] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] rounded-[2.5rem] border-white border-[8px] md:border-[15px]"
                />
              </motion.div>

              {/* Right Portrait */}
              <motion.div 
                initial={{ opacity: 0, x: 30, rotate: 5 }}
                animate={{ opacity: 1, x: 0, rotate: 2 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="w-full md:w-[22%] order-3 md:order-3"
              >
                <img 
                  src="/hero-right.jpg" 
                  alt="Prenup Portrait"
                  className="w-full aspect-[4/5] md:aspect-[3/4] object-cover object-center shadow-2xl rounded-3xl border-white border-[6px] md:border-[10px]"
                />
              </motion.div>
            </div>
          </div>

          <p className="text-2xl sm:text-3xl md:text-5xl font-serif text-gray-700 mb-2">July 7, 2026</p>
          <p className="text-lg md:text-xl tracking-[0.4em] text-gray-500 uppercase font-medium">Tanay, Rizal</p>
          <Countdown />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
