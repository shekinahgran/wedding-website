import React from 'react';
import { motion } from 'framer-motion';
import { Users, Heart } from 'lucide-react';

interface RoleModalProps {
  onSelect: (role: string) => void;
}

const RoleModal: React.FC<RoleModalProps> = ({ onSelect }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-white/40 backdrop-blur-md"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-[3rem] shadow-2xl p-10 md:p-16 max-w-2xl w-full text-center border border-gray-100 relative overflow-hidden"
      >
        {/* Decorative background circle */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-wildflower-pink/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-wildflower-purple/5 rounded-full blur-3xl pointer-events-none"></div>

        <span className="uppercase tracking-[0.3em] text-xs mb-4 block text-gray-400 font-medium">Welcome to our Wedding</span>
        <h2 className="text-4xl md:text-5xl font-bold mb-8 italic text-gray-800 leading-tight">Genex & Keziah</h2>
        
        <p className="text-gray-500 mb-12 leading-relaxed">
          To provide you with the most accurate details for our celebration, please let us know how you are joining us:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <button
            onClick={() => onSelect('guest')}
            className="group p-8 rounded-[2rem] border-2 border-gray-50 hover:border-wildflower-pink/30 hover:bg-wildflower-pink/[0.02] transition-all duration-300 flex flex-col items-center gap-4 shadow-sm hover:shadow-md"
          >
            <div className="p-4 bg-wildflower-pink/10 rounded-2xl text-wildflower-pink group-hover:scale-110 transition-transform">
              <Users size={32} />
            </div>
            <div>
              <span className="block font-bold text-gray-800 text-lg">I am a Guest</span>
            </div>
          </button>

          <button
            onClick={() => onSelect('entourage')}
            className="group p-8 rounded-[2rem] border-2 border-gray-50 hover:border-wildflower-purple/30 hover:bg-wildflower-purple/[0.02] transition-all duration-300 flex flex-col items-center gap-4 shadow-sm hover:shadow-md"
          >
            <div className="p-4 bg-wildflower-purple/10 rounded-2xl text-wildflower-purple group-hover:scale-110 transition-transform">
              <Heart size={32} />
            </div>
            <div>
              <span className="block font-bold text-gray-800 text-lg">I am part of the Entourage</span>
            </div>
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default RoleModal;
