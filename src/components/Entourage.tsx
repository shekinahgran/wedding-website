import React from 'react';
import { motion } from 'framer-motion';

interface MemberPair {
  left?: string;
  right?: string;
  label?: string;
  name?: string;
  names?: string[];
  sublabel?: string;
}

interface EntourageGroup {
  role: string;
  isSplit?: boolean;
  isPair?: boolean;
  isSymbol?: boolean;
  members: (string | MemberPair)[];
}

const Entourage: React.FC = () => {
  const entourageGroups: EntourageGroup[] = [
    {
      role: 'Wedding Officiant',
      members: ['Ptr Manny Balajadia']
    },
    {
      role: 'Parents of the Groom',
      members: ['Mr. Danny Sulit and Ms. Mariedel Aseniero']
    },
    {
      role: 'Parents of the Bride',
      members: ['Mr. Roderick Saromines and Mrs. Bella Saromines']
    },
    {
      role: 'Principal Sponsors',
      isSplit: true,
      members: [
        { left: 'Ptr Joel Gran', right: 'Ma’am Chona Gran' },
        { left: 'Ptr Mario Potestades', right: 'Ma’am Rose Potestades' },
        { left: 'Mr. Michael Gran', right: 'Mrs. Rechelle Gran' },
        { left: 'Mr. Jonas Gran', right: 'Mrs. Gloria Gran' },
        { left: 'Mr. Mike Bradley', right: 'Mrs. Maureen Bradley' },
        { left: 'Mr. Dante Deus', right: 'Mrs. Estrella Deus' },
        { left: 'Mr. Marcelo Sevilla', right: 'Mrs. Elvira Sevilla' },
        { left: 'Mr. Rafael Reyes', right: 'Mrs. Marilou Reyes' },
        { left: 'Mr. Alvin Marquez', right: 'Mrs. Rowena Marquez' },
        { left: 'Mr. Ricardo Magcalen', right: 'Mrs. Perla Magcalen' },
        { left: 'Mr. Edmund Evedientes', right: 'Ms. Carol Sarmiento' },
        { left: 'Mr. Ronel Larita', right: 'Mrs. Rhona Larita' },
        { left: 'Mr. Jose Alcarde', right: 'Mrs. Linda Alcarde' },
        { left: 'Mr. Angelito Capa', right: 'Mrs. Marbelyn Capa' },
        { left: 'Mr. Bel Verzola', right: 'Mrs. Fe Verzola' },
      ]
    },
    {
      role: 'Best Man & Maid of Honor',
      isPair: true,
      members: [
        { label: 'Best Man', name: 'Danex Loyd Aseniero' },
        { label: 'Maid of Honor', name: 'Ma Dulce Pia Jimenez' }
      ]
    },
    {
      role: 'Symbol Bearers',
      isSymbol: true,
      members: [
        { label: 'Candle Sponsors', name: 'Mr. Mardhe & Mrs. Faith Mendoza', sublabel: '“To kindle the flame of our union”' },
        { label: 'Veil Sponsors', name: 'Mr. Darwin Jay & Mrs. Cherry Belle Mojar', sublabel: '“To cover us in grace and devotion”' },
        { label: 'Cord Sponsors', name: 'Mr. Sunrex Aseniero & Ms. Kaye Zelle Saromines', sublabel: '“To bind us in faithful love”' },
        { label: 'Bible Bearer', name: 'John Ardem Matriano', sublabel: '“To bear the foundation of our faith”' },
        { label: 'Coin Bearer', name: 'Jhowell Dineros', sublabel: '“To signify abundance and faithful partnership”' },
        { label: 'Ring Bearer', name: 'Jayson Sevilla', sublabel: '“To carry the symbol of our eternal promise”' },
      ]
    },
    {
      role: 'Groomsmen & Bridesmaids',
      isSplit: true,
      members: [
        { left: 'Mark Shadrach Aseniero', right: 'Hannah Karylle Saromines' },
        { left: 'Paul Meshach Rural', right: 'Jade Anne Irish Rural' },
        { left: 'Gideon Mejia', right: 'Pamela Nepomuceno' },
        { left: 'Remuel Cantoria', right: 'Edeber Grefiel' },
        { left: 'Salvador Sam Secetario', right: 'Mary Joyce Coral' },
        { left: 'Kenneth Sulit', right: 'Shemirah Carr Aseniero' },
        { left: 'Keo Sulit', right: 'Shekinah Ishael Gran' },
        { left: 'Jericho Bongcaras', right: 'Norannah Carr Aseniero' },
      ]
    },
    {
        role: 'Family of the Bride & Groom',
        members: [
            'Tito Romel and Tita Remedios Aseniero',
            'Tita Revive Aseniero and Lola Capitolina Aseniero',
            'Lola Anita Rubiato and Tita Bernardita Evedientes'
        ]
    }
  ];

  return (
    <section id="entourage" className="py-10 md:py-16 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-5xl font-bold mb-2 italic text-gray-800">The Entourage</h2>
        <div className="w-12 h-0.5 bg-wildflower-pink mx-auto rounded-full opacity-40"></div>
      </div>

      <div className="content-card !p-5 md:!p-8 text-center">
        <div className="space-y-8">
          {entourageGroups.map((group, index) => (
            <motion.div
              key={group.role}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="space-y-3"
            >
              <h3 className="text-wildflower-pink font-serif text-xl md:text-2xl italic">{group.role}</h3>
              
              {group.isSplit ? (
                <div className="max-w-xl mx-auto">
                    {group.role === 'Groomsmen & Bridesmaids' && (
                        <div className="grid grid-cols-2 gap-4 md:gap-10 mb-1 border-b border-gray-100 pb-1">
                            <h4 className="text-[8px] uppercase tracking-widest text-gray-400 font-bold text-right">Groomsmen</h4>
                            <h4 className="text-[8px] uppercase tracking-widest text-gray-400 font-bold text-left">Bridesmaids</h4>
                        </div>
                    )}

                    <div className="grid grid-cols-2 gap-x-4 md:gap-x-10 relative">
                        {group.members.map((item, i) => {
                            const pair = item as MemberPair;
                            const showLine = i < group.members.length - 1;
                            return (
                            <React.Fragment key={i}>
                                <div className={`py-0.5 ${showLine ? 'border-b border-dashed border-gray-100' : ''}`}>
                                    <p className="text-sm md:text-base text-gray-700 font-serif italic text-right leading-tight">
                                        {pair.left}
                                    </p>
                                </div>
                                <div className={`py-0.5 ${showLine ? 'border-b border-dashed border-gray-100' : ''}`}>
                                    <p className="text-sm md:text-base text-gray-700 font-serif italic text-left leading-tight">
                                        {pair.right}
                                    </p>
                                </div>
                            </React.Fragment>
                            );
                        })}
                    </div>
                </div>
              ) : group.isPair ? (
                <div className="grid grid-cols-2 gap-4 md:gap-8 max-w-2xl mx-auto">
                  {group.members.map((item, i) => {
                    const pair = item as MemberPair;
                    return (
                      <div key={i} className="space-y-1">
                        <h4 className="text-[8px] uppercase tracking-widest text-gray-400 font-bold">{pair.label}</h4>
                        <p className="text-base md:text-lg text-gray-800 font-serif italic leading-tight">{pair.name || pair.names?.join(', ')}</p>
                        {pair.names && pair.names.map(n => <p key={n} className="text-sm md:text-base text-gray-800 font-serif italic leading-tight">{n}</p>)}
                      </div>
                    );
                  })}
                </div>
              ) : group.isSymbol ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-4 max-w-3xl mx-auto">
                    {group.members.map((item, i) => {
                        const pair = item as MemberPair;
                        return (
                            <div key={i} className="space-y-1 flex flex-col items-center">
                                <p className="text-[10px] md:text-xs text-gray-500 italic leading-tight">
                                    {pair.sublabel}
                                </p>
                                <h4 className="text-[8px] md:text-[9px] uppercase tracking-widest text-gray-400 font-bold">
                                    ({pair.label})
                                </h4>
                                <p className="text-base md:text-lg text-gray-800 font-serif italic leading-tight">
                                    {pair.name}
                                </p>
                            </div>
                        )
                    })}
                </div>
              ) : (
                <div className="space-y-0.5">
                  {group.members.map((name, i) => (
                    <p key={i} className="text-base md:text-lg text-gray-800 font-serif italic leading-tight">{name as string}</p>
                  ))}
                </div>
              )}

              {/* SMALL DOT DIVIDER */}
              {index < entourageGroups.length - 1 && (
                  <div className="pt-4 pb-2 flex justify-center opacity-20 text-wildflower-green">
                      <div className="flex gap-1">
                        <div className="w-1 h-1 rounded-full bg-current"></div>
                        <div className="w-1 h-1 rounded-full bg-current"></div>
                        <div className="w-1 h-1 rounded-full bg-current"></div>
                      </div>
                  </div>
              )}
            </motion.div>
          ))}
          
          <div className="pt-6 border-t border-gray-100 mt-6">
            <div className="flex justify-center max-w-2xl mx-auto">
              <div className="space-y-6">
                <div>
                    <h3 className="text-wildflower-pink font-serif text-xl md:text-2xl italic mb-3">Flower Girls</h3>
                    <div className="space-y-1 text-gray-800 font-serif italic text-base md:text-lg leading-tight">
                        <p>Ericka Jannelle Saromines</p>
                        <p>Reign Naomi Mojar</p>
                        <p>Marfaye Mendoza</p>
                        <p>Shenorah Carr Aseniero</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-6 pt-4 border-t border-gray-50">
                    <div>
                        <h4 className="text-[8px] md:text-[10px] uppercase tracking-widest text-gray-400 font-bold leading-tight mb-2">"Here Comes the Groom"</h4>
                        <p className="text-sm text-gray-800 font-serif italic leading-tight">Danerick Dj Mojar</p>
                        <p className="text-sm text-gray-800 font-serif italic leading-tight">Shadmier Aseniero</p>
                    </div>
                    <div>
                        <h4 className="text-[8px] md:text-[10px] uppercase tracking-widest text-gray-400 font-bold leading-tight mb-2">"Here Comes the Bride"</h4>
                        <p className="text-sm text-gray-800 font-serif italic leading-tight">Mavy Mendoza</p>
                        <p className="text-sm text-gray-800 font-serif italic leading-tight">Alora Mojar</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center items-center gap-4 text-wildflower-pink opacity-20">
          <div className="h-px w-8 bg-current"></div>
          <span className="font-serif italic text-xl">G & K</span>
          <div className="h-px w-8 bg-current"></div>
        </div>
      </div>
    </section>
  );
};

export default Entourage;