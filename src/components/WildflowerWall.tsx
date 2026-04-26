import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const FlowerAssets = [
  (color: string, stemLen: number) => (
    <svg width="45" height={stemLen} viewBox={`0 0 60 ${stemLen}`} fill="none">
      <path d={`M30 ${stemLen}V50`} stroke="#365314" strokeWidth="2.5" />
      <circle cx="30" cy="35" r="22" fill={color} />
      <circle cx="30" cy="35" r="10" fill="#000" opacity="0.1" />
      <path d="M30 80 Q 15 95 22 110" stroke="#365314" strokeWidth="1.5" />
      <ellipse cx="22" cy="110" rx="3" ry="8" fill="#365314" transform="rotate(-30 22 110)" />
    </svg>
  ),
  (color: string, stemLen: number) => (
    <svg width="45" height={stemLen} viewBox={`0 0 60 ${stemLen}`} fill="none">
      <path d={`M30 ${stemLen}V40`} stroke="#365314" strokeWidth="2.5" />
      <circle cx="22" cy="30" r="10" fill={color} />
      <circle cx="38" cy="35" r="10" fill={color} />
      <circle cx="30" cy="20" r="12" fill={color} />
      <path d="M30 100 Q 45 110 40 125" stroke="#365314" strokeWidth="1.5" />
      <ellipse cx="40" cy="125" rx="3" ry="8" fill="#365314" transform="rotate(30 40 125)" />
    </svg>
  ),
  (color: string, stemLen: number) => (
    <svg width="35" height={stemLen} viewBox={`0 0 60 ${stemLen}`} fill="none">
      <path d={`M30 ${stemLen}V45`} stroke="#365314" strokeWidth="2.5" />
      <path d="M22 45 Q 30 5 38 45 L 30 55 Z" fill={color} />
      <path d="M30 90 Q 15 100 22 115" stroke="#365314" strokeWidth="1.5" />
      <ellipse cx="22" cy="115" rx="2" ry="6" fill="#365314" transform="rotate(-20 22 115)" />
    </svg>
  ),
  (color: string, stemLen: number) => (
    <svg width="45" height={stemLen} viewBox={`0 0 60 ${stemLen}`} fill="none">
      <path d={`M30 ${stemLen}V50`} stroke="#365314" strokeWidth="2.5" />
      <path d="M15 40 Q 30 5 45 40 Q 30 60 15 40" fill={color} />
      <path d="M30 80 Q 45 90 40 105" stroke="#365314" strokeWidth="1.5" />
      <ellipse cx="40" cy="105" rx="4" ry="10" fill="#3f6212" transform="rotate(40 40 105)" />
    </svg>
  )
];

const WeddingColors = ["#93c5fd", "#f5f5dc", "#a78bfa", "#f97316", "#fbbf24", "#f472b6", "#34d399", "#ffdbac"];

const WildflowerWall: React.FC = () => {
  const [columns, setColumns] = useState(8);
  const [itemCount, setItemCount] = useState(72); // Reduced from 120

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 640;
      setColumns(mobile ? 3 : 8); // Fewer columns on mobile
      setItemCount(mobile ? 30 : 72); // Significantly fewer items on mobile
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const pseudoRandom = (seed: number) => {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
  };

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden bg-white">
      
     {/* 🌸 FALLING PETALS START 🌸 */}
{[...Array(20)].map((_, i) => {
  const uniqueDelay = i * 1.8;
  const uniqueDuration = 15 + (i % 5) * 3; // Slower speed: 15s to 27s
  const startPos = (i * 7.7) % 100; // Scatters them across the width
  const scale = 0.5 + (i % 3) * 0.3; // Stable sizes

  return (
    <motion.div
      key={`petal-${i}`}
      initial={{ top: "-10%", left: `${startPos}%`, opacity: 0 }}
      animate={{ 
        top: '110%', 
        opacity: [0, 0.7, 0.7, 0], 
        // Gentle swaying movement
        x: [0, 25, -25, 10],
        rotate: [0, 180, 360]
      }}
      transition={{ 
        duration: uniqueDuration, 
        repeat: Infinity, 
        ease: "easeInOut", 
        delay: uniqueDelay 
      }}
      className="absolute pointer-events-none"
    >
      <div 
        className="shadow-sm" 
        style={{ 
          width: '16px',
          height: '20px',
          background: 'linear-gradient(135deg, #fff1f2 0%, #fda4af 100%)',
          borderRadius: '40% 10% 50% 50% / 50% 10% 50% 50%',
          filter: i % 3 === 0 ? 'blur(1px)' : 'none',
          transform: `scale(${scale})`
        }} 
      />
    </motion.div>
  );
})}
{/* 🌸 FALLING PETALS END 🌸 */}

      <div className="relative h-full w-full opacity-20">
        {Array.from({ length: itemCount }).map((_, i) => {
          const seed = i + 7000;
          const typeIndex = Math.floor(pseudoRandom(seed) * FlowerAssets.length);
          const Flower = FlowerAssets[typeIndex];
          const color = WeddingColors[Math.floor(pseudoRandom(seed + 1) * WeddingColors.length)];
          
          const col = i % columns;
          const row = Math.floor(i / columns);
          const colWidth = 100 / columns;
          
          // Organic scattering positions
          const left = (col * colWidth) + (colWidth / 2) + ((pseudoRandom(seed + 2) - 0.5) * (colWidth * 0.8));
          const top = (row * (120 / (itemCount / columns))) + ((pseudoRandom(seed + 3) - 0.5) * 15);
          const rotation = (pseudoRandom(seed + 4) - 0.5) * 30;
          const stemLen = 120 + (pseudoRandom(seed + 5) * 50);

          return (
            <div
              key={i}
              className="absolute -translate-x-1/2"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                transform: `rotate(${rotation}deg)`,
              }}
            >
              {Flower(color, stemLen)}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WildflowerWall;
