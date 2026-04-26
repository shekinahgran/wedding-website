import React from 'react';
import { motion } from 'framer-motion';

interface MemberPair {
  left?: string;
  right?: string;
  label?: string;
  name?: string;
  names?: string[];
}

interface EntourageGroup {
  role: string;
  isSplit?: boolean;
  isPair?: boolean;
  members: (string | MemberPair)[];
}

const Entourage: React.FC = () => {
  const entourageGroups: EntourageGroup[] = [
    {
      role: 'Wedding Officiant',
      members: ['Pastor [name]']
    },
    {
      role: 'Principal Sponsors',
      isSplit: true,
      members: [
        { left: 'Ninong 1', right: 'Ninang 1' },
        { left: 'Ninong 2', right: 'Ninang 2' },
        { left: 'Ninong 3', right: 'Ninang 3' },
        { left: 'Ninong 4', right: 'Ninang 4' },
        { left: 'Ninong 5', right: 'Ninang 5' },
        { left: 'Ninong 6', right: 'Ninang 6' },
      ]
    },
    {
      role: 'Best Man & Maid of Honor',
      isPair: true,
      members: [
        { label: 'Best Man', name: 'Best Man' },
        { label: 'Maid of Honor', name: 'Maid of Honor' }
      ]
    },
    {
      role: 'Groomsmen & Bridesmaids',
      isPair: true,
      members: [
        { 
          label: 'Groomsmen', 
          names: ['Groomsman 1', 'Groomsman 2', 'Groomsman 3', 'Groomsman 4'] 
        },
        { 
          label: 'Bridesmaids', 
          names: ['Bridesmaid 1', 'Bridesmaid 2', 'Bridesmaid 3', 'Bridesmaid 4'] 
        }
      ]
    }
  ];

  return (
    <section id="entourage" className="py-12 md:py-20 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-3 italic text-gray-800">The Entourage</h2>
        <div className="w-16 h-0.5 bg-wildflower-pink mx-auto rounded-full opacity-40"></div>
      </div>

      <div className="content-card !p-6 md:!p-10 text-center">
        <div className="space-y-12">
          {entourageGroups.map((group, index) => (
            <motion.div
              key={group.role}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="space-y-4"
            >
              <h3 className="text-wildflower-pink font-serif text-2xl md:text-3xl italic">{group.role}</h3>
              
              {group.isSplit ? (
                <div className="grid grid-cols-2 gap-x-4 md:gap-x-10 gap-y-1 max-w-xl mx-auto">
                  {group.members.map((item, i) => {
                    const pair = item as MemberPair;
                    return (
                      <React.Fragment key={i}>
                        <p className="text-base md:text-lg text-gray-700 font-serif italic text-right">{pair.left}</p>
                        <p className="text-base md:text-lg text-gray-700 font-serif italic text-left">{pair.right}</p>
                      </React.Fragment>
                    );
                  })}
                </div>
              ) : group.isPair ? (
                <div className="grid grid-cols-2 gap-6 md:gap-12 max-w-2xl mx-auto">
                  {group.members.map((item, i) => {
                    const pair = item as MemberPair;
                    return (
                      <div key={i} className="space-y-2">
                        <h4 className="text-[9px] uppercase tracking-widest text-gray-400 font-bold">{pair.label}</h4>
                        {pair.name ? (
                          <p className="text-lg md:text-xl text-gray-800 font-serif italic">{pair.name}</p>
                        ) : (
                          <div className="space-y-0.5">
                            {pair.names?.map((n: string) => (
                              <p key={n} className="text-base md:text-lg text-gray-800 font-serif italic">{n}</p>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="space-y-1">
                  {group.members.map((name, i) => (
                    <p key={i} className="text-lg md:text-xl text-gray-800 font-serif italic">{name as string}</p>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
          
          <div className="pt-10 border-t border-gray-100/50">
            <div className="grid grid-cols-2 gap-8 md:gap-16 items-start max-w-2xl mx-auto">
              <div className="space-y-3">
                <h3 className="text-wildflower-pink font-serif text-2xl italic">Flower Girls</h3>
                <div className="space-y-0.5">
                  <p className="text-base md:text-lg text-gray-800 font-serif italic">Flower Girl 1</p>
                  <p className="text-base md:text-lg text-gray-800 font-serif italic">Flower Girl 2</p>
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="text-wildflower-pink font-serif text-2xl italic">Bearers</h3>
                <div className="grid grid-cols-1 gap-4 text-gray-800 font-serif italic">
                  <div>
                    <p className="text-[9px] text-gray-400 uppercase tracking-widest mb-0.5 font-bold">Bible Bearer</p>
                    <p className="text-base md:text-lg">Bearer 1</p>
                  </div>
                  <div>
                    <p className="text-[9px] text-gray-400 uppercase tracking-widest mb-0.5 font-bold">Ring Bearer</p>
                    <p className="text-base md:text-lg">Bearer 2</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-center items-center gap-4 text-wildflower-pink opacity-30">
          <div className="h-px w-10 bg-current"></div>
          <span className="font-serif italic text-2xl">G & K</span>
          <div className="h-px w-10 bg-current"></div>
        </div>
      </div>
    </section>
  );
};

export default Entourage;