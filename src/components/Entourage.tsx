import React from 'react';
import { motion } from 'framer-motion';

const Entourage: React.FC = () => {
  const entourageGroups = [
    {
      role: 'Wedding Officiant',
      members: ['Pastor Victor Ricalde']
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
        { label: 'Best Man', name: 'Best Man 1' },
        { label: 'Maid of Honor', name: 'Maid of Honor 1' }
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
    <section id="entourage" className="py-16 md:py-24 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-bold mb-4 italic text-gray-800">The Entourage</h2>
        <div className="w-24 h-1 bg-wildflower-pink mx-auto rounded-full opacity-40"></div>
      </div>

      <div className="content-card !p-8 md:!p-16 text-center">
        <div className="space-y-16">
          {entourageGroups.map((group, index) => (
            <motion.div
              key={group.role}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="space-y-8"
            >
              <h3 className="text-wildflower-pink font-serif text-3xl md:text-4xl italic">{group.role}</h3>
              
              {group.isSplit ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-3 max-w-2xl mx-auto">
                  {group.members.map((pair: any, i: number) => (
                    <React.Fragment key={i}>
                      <p className="text-lg md:text-xl text-gray-700 font-serif italic md:text-right">{pair.left}</p>
                      <p className="text-lg md:text-xl text-gray-700 font-serif italic md:text-left">{pair.right}</p>
                    </React.Fragment>
                  ))}
                </div>
              ) : group.isPair ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 max-w-3xl mx-auto">
                  {group.members.map((item: any, i: number) => (
                    <div key={i} className="space-y-4">
                      <h4 className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold">{item.label}</h4>
                      {item.name ? (
                        <p className="text-xl md:text-2xl text-gray-800 font-serif italic">{item.name}</p>
                      ) : (
                        <div className="space-y-2">
                          {item.names.map((n: string) => (
                            <p key={n} className="text-lg md:text-xl text-gray-800 font-serif italic">{n}</p>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-2">
                  {group.members.map((name: any) => (
                    <p key={name} className="text-xl md:text-2xl text-gray-800 font-serif italic">{name}</p>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
          
          <div className="pt-16 border-t border-gray-100/50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start max-w-4xl mx-auto">
              <div className="space-y-6">
                <h3 className="text-wildflower-pink font-serif text-3xl italic">Flower Girls</h3>
                <div className="space-y-2">
                  <p className="text-lg md:text-xl text-gray-800 font-serif italic">Flower Girl 1</p>
                  <p className="text-lg md:text-xl text-gray-800 font-serif italic">Flower Girl 2</p>
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-wildflower-pink font-serif text-3xl italic">Bearers</h3>
                <div className="grid grid-cols-1 gap-6 text-gray-800 font-serif italic">
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1 font-bold">Bible Bearer</p>
                    <p className="text-lg md:text-xl">Bearer 1</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1 font-bold">Ring Bearer</p>
                    <p className="text-lg md:text-xl">Bearer 2</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 flex justify-center items-center gap-6 text-wildflower-pink opacity-40">
          <div className="h-px w-16 bg-current"></div>
          <span className="font-serif italic text-3xl">G & K</span>
          <div className="h-px w-16 bg-current"></div>
        </div>
      </div>
    </section>
  );
};

export default Entourage;
