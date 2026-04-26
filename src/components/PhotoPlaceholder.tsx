import React from 'react';
import { Flower } from 'lucide-react';

interface PhotoPlaceholderProps {
  className?: string;
  label?: string;
}

const PhotoPlaceholder: React.FC<PhotoPlaceholderProps> = ({ className = '', label = 'Photo Placeholder' }) => {
  return (
    <div className={`photo-placeholder ${className}`}>
      <div className="text-center p-8">
        <Flower className="w-12 h-12 mx-auto text-gray-300 mb-2" aria-hidden="true" />
        <p className="text-gray-400 font-medium italic">{label}</p>
      </div>
      {/* Decorative flowers */}
      <Flower className="flower-accent top-2 left-2 w-8 h-8" aria-hidden="true" />
      <Flower className="flower-accent bottom-2 right-2 w-10 h-10 rotate-180" aria-hidden="true" />
      <Flower className="flower-accent top-1/4 right-4 w-6 h-6 opacity-10" aria-hidden="true" />
    </div>
  );
};

export default PhotoPlaceholder;
