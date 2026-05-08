import React from 'react';
import { motion } from 'framer-motion';
import { Users, Star, Home, Shirt, Flower, Heart } from 'lucide-react';

const Attire: React.FC = () => {
  const categories = [
    {
      id: 'sponsors',
      title: 'Principal Sponsors',
      subtitle: '(Ninong & Ninang)',
      icon: <Star size={24} className="text-blue-600" />,
      color: 'bg-blue-50',
      palette: ['#1e3a8a', '#3b82f6', '#60a5fa', '#93c5fd', '#bfdbfe'], 
      description: 'We kindly request our dear sponsors to wear elegant shades of soft blue.',
      imgHer: '/attire/ninangs.jfif',
      imgHim: '/attire/ninongs.jfif'
    },
    {
      id: 'moh-bm',
      title: 'Maid of Honor & Best Man',
      icon: <Heart size={24} className="text-purple-500" />,
      color: 'bg-purple-50',
      palette: ['#a78bfa', '#c4b5fd', '#1a1a1a'], 
      description: 'Maid of Honor: Specifically Lavender gown.\nBest Man: Short Sleeve Lavender Barong and Black Pants.',
      imgHer: '/attire/maid-of-honor.jfif',
      imgHim: '/attire/best-man.jfif'
    },
    {
      id: 'family',
      title: 'Immediate Family',
      subtitle: '(Parents & Relatives)',
      icon: <Home size={24} className="text-amber-700" />,
      color: 'bg-amber-50',
      palette: ['#ede6d6', '#f5f5dc', '#f3e5ab', '#dcc6b8'], 
      description: 'To distinguish our beloved family, please wear Beige or Champagne tones.',
      imgHer: '/attire/family-1.jfif',
      imgHim: '/attire/family-2.jfif'
    },
    {
      id: 'entourage',
      title: "Bridesmaids & Groomsmen",
      icon: <Users size={24} className="text-pink-500" />,
      color: 'bg-pink-50',
      palette: ['#f43f5e', '#f97316', '#fbbf24', '#ef4444', '#5C4033', '#000000'], 
      description: 'Women: Orange, Yellow, or Pink\nMen: Short Sleeve Brown Barong and Black Pants.',
      imgHer: '/attire/bridesmaids.jfif',
      imgHim: '/attire/groomsmen.jfif'
    },
    {
      id: 'flower-girls',
      title: 'Flower Girls',
      icon: <Flower size={24} className="text-orange-400" />,
      color: 'bg-orange-50',
      palette: ['#f8ad9d', '#ffb5a7', '#ffdbac'], 
      description: 'Sweet and simple Peach-colored dresses\nwith floral accents.',
      imgHer: '/attire/flower-girls.jfif',
      imgHim: ''
    },
    {
      id: 'guests',
      title: 'General Guests',
      icon: <Shirt size={24} className="text-green-700" />,
      color: 'bg-green-50',
      palette: ['#789262', '#a2c4c9', '#d1d5db', '#ffffff'], 
      description: 'We invite our guests to wear their best elegant shades of Sage or Pastel Green.',
      imgHer: '/attire/guests-1.jfif',
      imgHim: '/attire/guests-2.jfif'
    }
  ];

  return (
    <section id="attire" className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12 md:mb-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 italic text-gray-800">Wedding Attire</h2>
        <p className="text-gray-500 uppercase tracking-widest text-xs md:text-sm text-center mx-auto max-w-md">Wedding Color Map & Guide</p>
        <div className="w-16 h-1 bg-wildflower-pink mx-auto rounded-full opacity-50 mt-4"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {categories.map((cat, index) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="content-card !p-6 flex flex-col h-full border-t-4 bg-white rounded-2xl shadow-sm"
            style={{ borderTopColor: cat.palette[0] }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className={`p-3 rounded-2xl ${cat.color}`}>
                {cat.icon}
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold italic leading-tight text-gray-800">{cat.title}</h3>
                {cat.subtitle && <p className="text-[10px] text-gray-400 uppercase tracking-wider font-bold">{cat.subtitle}</p>}
              </div>
            </div>

            {/* Adjusted Image Section */}
            <div className={`grid ${cat.imgHim ? 'grid-cols-2' : 'grid-cols-1'} gap-3 mb-6 h-48 md:h-56`}>
              <div className={`rounded-xl overflow-hidden shadow-sm flex justify-center bg-gray-50 ${!cat.imgHim ? 'w-3/4 mx-auto' : 'w-full'}`}>
                <img 
                  src={cat.imgHer} 
                  alt={cat.title} 
                  className="w-full h-full object-cover object-top" 
                />
              </div>
              {cat.imgHim && (
                <div className="rounded-xl overflow-hidden shadow-sm bg-gray-50">
                  <img 
                    src={cat.imgHim} 
                    alt={cat.title} 
                    className="w-full h-full object-cover object-top" 
                  />
                </div>
              )}
            </div>

            {/* Individual Color Palette */}
            <div className="mb-4">
              <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-3 font-bold">Assigned Palette</p>
              <div className="flex flex-wrap gap-2">
                {cat.palette.map((hex, i) => (
                  <div 
                    key={i} 
                    className="w-7 h-7 rounded-full border-2 border-white shadow-sm"
                    style={{ backgroundColor: hex }}
                  />
                ))}
              </div>
            </div>

            {/* FIXED ALIGNMENT SECTION */}
            <div className="mt-auto">
              <div className="h-px w-full bg-gray-100 my-4"></div>
              <div className="min-h-[80px] flex items-start">
                <p className="text-gray-600 text-sm leading-relaxed italic text-left whitespace-pre-line">
                  {cat.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-16 text-center content-card max-w-2xl mx-auto !p-8 border-2 border-dashed border-pink-200 bg-white/40 rounded-2xl">
        <p className="text-gray-600 font-medium italic">
          "We kindly request everyone to wear <span className="font-bold text-gray-800">Decent and Modest</span> attire that honors the sanctity of our celebration. Thank you for your cooperation!"
        </p>
      </div>
    </section>
  );
};

export default Attire;