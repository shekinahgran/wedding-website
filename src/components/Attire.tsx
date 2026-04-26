import React from 'react';
import { motion } from 'framer-motion';
import PhotoPlaceholder from './PhotoPlaceholder';
import { Users, Star, Home, Shirt, Flower, Heart } from 'lucide-react';

const Attire: React.FC = () => {
  const categories = [
    {
      id: 'sponsors',
      title: 'Principal Sponsors',
      subtitle: '(Ninong & Ninang)',
      icon: <Star size={24} className="text-blue-600" />,
      color: 'bg-blue-50',
      palette: ['#93c5fd', '#60a5fa', '#3b82f6', '#1e40af'],
      description: 'Formal Attire or Suits. We request our dear sponsors to wear elegant shades of blue.',
      labelHer: 'Formal Gown',
      labelHim: 'Formal Suit / Barong'
    },
    {
      id: 'moh-bm',
      title: 'Maid of Honor & Best Man',
      icon: <Heart size={24} className="text-wildflower-pink" />,
      color: 'bg-pink-50',
      palette: ['#a78bfa', '#365314'],
      description: 'MOH: Specifically Lavender gown. \nBest Man: Long Sleeve Barong and Black Pants.',
      labelHer: 'Lavender Gown',
      labelHim: 'Long Sleeve Barong'
    },
    {
      id: 'family',
      title: 'Immediate Family',
      subtitle: '(Parents & Relatives)',
      icon: <Home size={24} className="text-amber-600" />,
      color: 'bg-amber-50',
      palette: ['#f5f5dc', '#ede6d6', '#f3e5ab', '#dcc6b8'],
      description: 'Formal Attire. To distinguish our beloved family, please wear Beige or Champagne tones.',
      labelHer: 'Formal Gown',
      labelHim: 'Formal Suit / Barong'
    },
    {
      id: 'entourage',
      title: "Bridesmaids & Groomsmen",
      icon: <Users size={24} className="text-purple-500" />,
      color: 'bg-purple-50',
      palette: ['#a78bfa', '#f97316', '#fbbf24', '#f43f5e', '#34d399'],
      description: 'Women: Colorful dresses (Lavender, Orange, Yellow, Pink, etc). \nMen: Short Sleeve Barong & Black Pants.',
      labelHer: 'Wildflower Dress',
      labelHim: 'Short Sleeve Barong'
    },
    {
      id: 'flower-girls',
      title: 'Flower Girls',
      icon: <Flower size={24} className="text-orange-400" />,
      color: 'bg-orange-50',
      palette: ['#ffdbac', '#f8ad9d', '#ffb5a7'],
      description: 'Sweet and simple Peach-colored dresses with floral accents.',
      labelHer: 'Peach Dress',
      labelHim: 'N/A'
    },
    {
      id: 'guests',
      title: 'General Guests',
      icon: <Shirt size={24} className="text-gray-900" />,
      color: 'bg-gray-100',
      palette: ['#000000', '#1a1a1a', '#262626'],
      description: 'Black Attire. We invite our guests to wear their best black semi-formal or formal outfits.',
      labelHer: 'Black Cocktail Dress',
      labelHim: 'Black Suit / Shirt'
    }
  ];

  return (
    <section id="attire" className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12 md:mb-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 italic text-gray-800">Wedding Attire</h2>
        <p className="text-gray-500 uppercase tracking-widest text-xs md:text-sm">Wedding Color Map & Guide</p>
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
            className="content-card !p-6 flex flex-col h-full border-t-4"
            style={{ borderTopColor: cat.palette[0] }}
          >
            {/* 1. Header Section*/}
            <div className="flex items-center gap-4 mb-6 min-h-[64px]">
              <div className={`p-3 rounded-2xl ${cat.color} shrink-0`}>
                {cat.icon}
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold italic leading-tight">{cat.title}</h3>
                {cat.subtitle && <p className="text-xs text-gray-400 uppercase tracking-wider">{cat.subtitle}</p>}
              </div>
            </div>

            {/* 2. Photo Section*/}
            <div className={`grid ${cat.labelHim === 'N/A' ? 'grid-cols-1 max-w-[50%] mx-auto' : 'grid-cols-2'} gap-3 mb-6 w-full`}>
              <PhotoPlaceholder label={cat.labelHer} className="aspect-[3/4] rounded-xl !min-h-0" />
              {cat.labelHim !== 'N/A' && <PhotoPlaceholder label={cat.labelHim} className="aspect-[3/4] rounded-xl !min-h-0" />}
            </div>

            {/* 3. Color Palette*/}
            <div className="mb-6 min-h-[56px]">
              <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-2 font-bold">Assigned Palette</p>
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

            {/* 4. Bottom Section - Pantay na Divider at Description */}
            <div className="mt-auto pt-4"> 
              <div className="h-px w-full bg-gray-100 mb-4"></div>
              <div className="min-h-[60px] flex items-center">
                <p className="text-gray-600 text-sm leading-relaxed italic whitespace-pre-line w-full">
                  {cat.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-16 text-center content-card max-w-2xl mx-auto !p-8 border-2 border-dashed border-wildflower-pink/20 bg-white/40">
        <p className="text-gray-600 font-medium italic">
          "We kindly request everyone to wear <span className="font-bold text-gray-800">Decent and Modest</span> attire that honors the sanctity of our celebration. Thank you for your cooperation!"
        </p>
      </div>
    </section>
  );
};

export default Attire;