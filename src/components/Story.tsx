import React from 'react';
import { motion } from 'framer-motion';

const Story: React.FC = () => {
  return (
    <section id="story" className="py-16 md:py-24 px-6 max-w-6xl mx-auto overflow-hidden text-left">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 italic text-gray-800">Our Story</h2>
        <div className="w-16 h-1 bg-wildflower-purple mx-auto rounded-full opacity-50"></div>
      </div>

      <div className="space-y-16 md:space-y-32">
        {/* Chapter 1: How it all started */}
        <div className="content-card flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <img 
              src="/story-1.jpg" 
              alt="The Day We Met"
              className="w-full rounded-2xl aspect-[4/5] md:aspect-square object-cover object-[center_20%] shadow-lg"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <h3 className="text-2xl md:text-3xl font-serif mb-6 italic text-wildflower-purple">How it all started...</h3>
            <div className="text-gray-600 leading-relaxed space-y-4 text-sm md:text-base">
              <p>It didn’t begin with certainty—but it began with God’s timing.</p>
              <p>We first crossed paths in November 2020 through a Youth Fellowship during the pandemic, when life was quiet, distant, and full of unknowns. At that time, we were simply connected as Pastor and Youth—nothing more, nothing deeper.</p>
              <p>But even in that simplicity, something was already unfolding.</p>
              <p>We started as acquaintances, slowly became friends, and eventually, something more. It began with playful teasing in our group chat—crush jokes, light laughter, and casual conversations we didn’t think would mean anything. Then it became private messages. Then late-night talks that stretched longer than expected, where we realized how naturally we connected.</p>
              <p className="font-medium italic text-gray-700">And without forcing it, “just friends” slowly became a story we were already living in.</p>
            </div>
          </motion.div>
        </div>

        {/* Chapter 2: Finding Home in each other */}
        <div className="content-card flex flex-col items-start gap-12">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 w-full">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2 order-2 md:order-1"
            >
              <h3 className="text-2xl md:text-3xl font-serif mb-6 italic text-wildflower-purple">Finding Home in Each Other</h3>
              <div className="text-gray-600 leading-relaxed space-y-4 text-sm md:text-base text-left">
                <p>Before we found each other, we were both carrying stories shaped by pain and healing.</p>
                <p>One of us came from doubts and uncertainties that made trust difficult. The other came from experiences of betrayal that took time to mend.</p>
                <p>And yet, in ways we never planned, God allowed our paths to cross at the right time. Looking back, it almost feels like it had already been written long before we understood it.</p>
                <p>And then there was this—words written before everything made sense to us:</p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2 order-1 md:order-2"
            >
              <img 
                src="/story-2.jpg" 
                alt="Finding Home"
                className="w-full rounded-2xl aspect-[4/5] md:aspect-square object-cover object-[center_20%] shadow-lg"
              />
            </motion.div>
          </div>

          {/* Poem Section - Centered */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full max-w-2xl bg-white shadow-sm border border-gray-100 p-10 md:p-16 rounded-[2.5rem] relative text-center mx-auto"
          >
            <div className="absolute top-6 left-8 text-6xl text-wildflower-pink/10 font-serif">“</div>
            <div className="text-gray-700 font-serif italic text-base md:text-lg space-y-1 text-center leading-relaxed">
              <p>Siguro natagpuan na kita, sa pagitan ng mga taong nakapila sa pampublikong sakayan.</p>
              <p>Siguro nagkasalubong na tayong dalawa,</p>
              <p className="pl-4">Hindi ko lang napansin kasi abala ako sa pagbibilang ng barya.</p>
              <p>Siguro, siguro yung benteng ipinambayad ko ay siya ring bente na isinukli sa iyo.</p>
              <p>Siguro iisa lang ang buwan na ating tinititigan,</p>
              <p className="pl-4">magkaiba nga lang tayo ng lugar na inuupuan.</p>
              <p>Siguro magkakilala na pala talaga tayo ngunit hindi pa oras para sa mas malalim na ugnayan</p>
              <p>Siguro yung kantang madalas na pinakikinggan ko ay siya ring kantang madalas na pinakikinggan mo</p>
              <p>Siguro, siguro nagkasalisi na tayo sa pasilyo ng simbahan sadyang hindi lang napansin ang isa't-isa kaya't hindi tayo nagkatitigan.</p>
              <p>Siguro–</p>
              <p>Siguro pareho tayo ng binibigkas sa ating mga panalangin</p>
              <p className="font-bold text-gray-800 talic my-4 leading-normal px-4">"Panginoon, bigyan Niyo po ako ng taong mahal Kayo at siyang lubos na magmamahal sa akin"</p>
              <p>Siguro matagal pa tayong magkikita, dahil siguro madami pa tayong bagong makikilala</p>
              <p>Pero nais ko lang na malaman mo, sa sandaling dumating ang araw at pagkakataon na ito,</p>
              <p>Ano mang gulo nitong pabago-bagong mundo,</p>
              <div className="py-6 space-y-1">
                <p>Sigurado Ako,</p>
                <p>Sa bawat “Mahal Kita”</p>
                <p className="pl-4">Sa bawat “Ikaw ang aking pahinga”</p>
                <p>Oo, Sigurado Ako</p>
                <p>Sa bawat “Nandito ako para sayo”</p>
                <p className="pl-4">Sa bawat “Sabihin mo lahat at makikinig ako”</p>
                <p>Oo, Sigurado Ako!</p>
                <p>Sa bawat “Masaya ako sa mga bagay na nagpasaya sayo”</p>
                <p className="pl-4">Sa bawat “Kapag malungkot ka ay andito lang ako sa tabi mo”</p>
                <p>Oo, Sigurado Ako</p>
              </div>
              <p>Kung dumating man yung araw at panahon na ipakilala ka na sa akin ng ating Panginoon</p>
              <p>Alam ko na magiging sigurado ako, Sa'yo.</p>
              <p>Dahil ikaw ang laman ng bawat panalangin ko.</p>
              <p>Oo, Sigurado ako.</p>
            </div>
            <div className="absolute bottom-6 right-8 text-6xl text-wildflower-pink/10 font-serif rotate-180">“</div>
          </motion.div>

          <div className="text-gray-600 leading-relaxed space-y-6 text-sm md:text-base text-left max-w-4xl">
            <p>Then came July 7, 2023—our first official date at SM Masinag, where we watched Insidious: The Last Key. It was simple, a little awkward, but deeply memorable. There were nervous smiles, quiet moments, and a comfort we couldn’t quite explain—but somehow already felt familiar.</p>
            <p className="font-medium italic text-gray-700">From that day on, we never really left each other’s side. We stayed. And we became inseparable.</p>
          </div>
        </div>

        {/* Chapter 3: The Big Yes */}
        <div className="content-card flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <img 
              src="/story-3.jpg" 
              alt="The Big Yes"
              className="w-full rounded-2xl aspect-[4/5] md:aspect-square object-cover object-[center_20%] shadow-lg"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <h3 className="text-2xl md:text-3xl font-serif mb-6 italic text-wildflower-purple">The Proposal</h3>
            <div className="text-gray-600 leading-relaxed space-y-4 text-sm md:text-base">
              <p className="font-bold text-gray-800 text-x1">November 28, 2025 • BNK Restaurant</p>
              <p>What was supposed to be an ordinary day turned into one of the most unforgettable moments of our lives. It was emotional, unexpected, and full of overwhelming feelings—but in the middle of it all, everything became still.</p>
              <p>There was a question. A moment of silence. And a lifetime of memories, leading to one answer we both already knew in our hearts.</p>
              <p className="text-xl font-serif not-italic text-wildflower-pink font-bold py-4 block">The Big YES.</p>
              <p>Not perfect. Not rehearsed. But certain.</p>
              <p className="font-medium italic text-gray-700">Because some love stories are not just found—they are slowly revealed in God’s perfect timing.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Story;
