import React from 'react';
import { motion } from 'framer-motion';
import PhotoPlaceholder from './PhotoPlaceholder';

const Story: React.FC = () => {
  return (
    <section id="story" className="py-16 md:py-24 px-6 max-w-6xl mx-auto overflow-hidden">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 italic">Our Story</h2>
        <div className="w-16 h-1 bg-wildflower-purple mx-auto rounded-full opacity-50"></div>
      </div>

      <div className="space-y-16 md:space-y-24">
        {/* Chapter 1 */}
        <div className="content-card flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <PhotoPlaceholder label="The Day We Met" className="w-full rounded-2xl aspect-video md:aspect-square" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 text-center md:text-left"
          >
            <h3 className="text-2xl md:text-3xl font-serif mb-4 italic">How it all started...</h3>
            <p className="text-gray-600 leading-relaxed">
              It wasn't exactly love at first sight, but it was definitely something special. 
              Genex and Keziah first crossed paths back in the summer of 2018. 
              What started as a simple conversation about music and travel blossomed into 
              late-night talks and countless shared adventures.
            </p>
          </motion.div>
        </div>

        {/* Chapter 2 */}
        <div className="content-card flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <PhotoPlaceholder label="A Memorable Adventure" className="w-full rounded-2xl aspect-video md:aspect-square" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 text-center md:text-left"
          >
            <h3 className="text-2xl md:text-3xl font-serif mb-4 italic">Finding Home in Each Other</h3>
            <p className="text-gray-600 leading-relaxed">
              Through the highs and lows, they found a constant in one another. 
              Whether it was exploring the hidden gems of Rizal or simply enjoying 
              a quiet afternoon at home, every moment became a building block 
              of their life together.
            </p>
          </motion.div>
        </div>

        {/* Chapter 3 */}
        <div className="content-card flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <PhotoPlaceholder label="The Proposal" className="w-full rounded-2xl aspect-video md:aspect-square" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 text-center md:text-left"
          >
            <h3 className="text-2xl md:text-3xl font-serif mb-4 italic">The Big "Yes"</h3>
            <p className="text-gray-600 leading-relaxed">
              On a beautiful sunset evening, surrounded by the silence of nature 
              that they both love, Genex asked the question that would change their 
              lives forever. With tears of joy and a heart full of love, Keziah said Yes.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Story;
