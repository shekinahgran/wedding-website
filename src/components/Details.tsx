import React from 'react';
import { MapPin, Calendar, Clock, Shirt } from 'lucide-react';
import PhotoPlaceholder from './PhotoPlaceholder';

const Details: React.FC = () => {
  return (
    <section id="details" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 italic">Wedding Details</h2>
          <p className="text-gray-500 uppercase tracking-widest text-xs md:text-sm">Where & When</p>
          <div className="w-16 h-1 bg-wildflower-green mx-auto rounded-full opacity-50 mt-4"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 md:gap-12 items-start">
          {/* Venue Info */}
          <div className="content-card order-1">
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <div className="p-3 md:p-4 bg-wildflower-yellow/20 rounded-2xl text-wildflower-yellow shrink-0">
                <MapPin size={28} />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold">The Venue</h3>
                <p className="text-gray-500 text-sm md:text-base">Tanay, Rizal</p>
              </div>
            </div>

            <PhotoPlaceholder label="Venue Photo" className="mb-6 md:mb-8 w-full aspect-video rounded-2xl" />

            <div className="space-y-5 md:space-y-6">
              <div className="flex gap-4">
                <Calendar className="text-wildflower-pink shrink-0 w-5 h-5 md:w-6 md:h-6" />
                <p className="text-gray-700 font-medium text-sm md:text-base">Tuesday, July 7, 2026</p>
              </div>
              <div className="flex gap-4">
                <Clock className="text-wildflower-pink shrink-0 w-5 h-5 md:w-6 md:h-6" />
                <p className="text-gray-700 font-medium text-sm md:text-base">Ceremony starts at 3:00 PM</p>
              </div>
              <div className="flex gap-4">
                <Shirt className="text-wildflower-pink shrink-0 w-5 h-5 md:w-6 md:h-6" />
                <div>
                  <p className="text-gray-700 font-bold mb-1 text-sm md:text-base">Dress Code</p>
                  <p className="text-gray-600 text-sm md:text-base">Semi-Formal / Garden Attire</p>
                  <p className="text-[10px] md:text-xs text-gray-400 mt-1 italic">We recommend comfortable shoes for the garden setting.</p>
                </div>
              </div>
            </div>

            <a 
              href="https://maps.app.goo.gl/Tjy3n4vCQ5Jskqfy9" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full mt-8 md:mt-10 bg-gray-800 text-white py-3 md:py-4 rounded-xl font-bold hover:bg-gray-900 transition-colors flex items-center justify-center gap-2 text-sm md:text-base no-underline"
            >
              <MapPin size={18} />
              Open in Google Maps
            </a>
          </div>

          {/* Schedule */}
          <div className="content-card space-y-6 md:space-y-8 order-2">
            <h3 className="text-2xl md:text-3xl font-serif italic mb-6 text-center lg:text-left">Schedule of Events</h3>
            <div className="relative pl-6 md:pl-8 border-l-2 border-dashed border-wildflower-green/30 space-y-10 md:space-y-12 max-w-sm mx-auto lg:mx-0">
              <div className="relative">
                <div className="absolute -left-[33px] md:-left-[41px] top-0 w-4 h-4 rounded-full bg-wildflower-green shadow-lg"></div>
                <h4 className="text-lg md:text-xl font-bold mb-1">Wedding Ceremony</h4>
                <p className="text-gray-500 text-xs md:text-sm mb-1">3:00 PM — 4:00 PM</p>
                <p className="text-gray-600 text-sm italic">The Garden Chapel</p>
              </div>

              <div className="relative">
                <div className="absolute -left-[33px] md:-left-[41px] top-0 w-4 h-4 rounded-full bg-wildflower-yellow shadow-lg"></div>
                <h4 className="text-lg md:text-xl font-bold mb-1">Cocktails & Photos</h4>
                <p className="text-gray-500 text-xs md:text-sm mb-1">4:00 PM — 5:30 PM</p>
                <p className="text-gray-600 text-sm italic">Sunset Terrace</p>
              </div>

              <div className="relative">
                <div className="absolute -left-[33px] md:-left-[41px] top-0 w-4 h-4 rounded-full bg-wildflower-pink shadow-lg"></div>
                <h4 className="text-lg md:text-xl font-bold mb-1">Dinner & Reception</h4>
                <p className="text-gray-500 text-xs md:text-sm mb-1">6:00 PM — 9:00 PM</p>
                <p className="text-gray-600 text-sm italic">The Grand Hall</p>
              </div>

              <div className="relative">
                <div className="absolute -left-[33px] md:-left-[41px] top-0 w-4 h-4 rounded-full bg-wildflower-purple shadow-lg"></div>
                <h4 className="text-lg md:text-xl font-bold mb-1">Dancing & After Party</h4>
                <p className="text-gray-500 text-xs md:text-sm mb-1">9:00 PM onwards</p>
                <p className="text-gray-600 text-sm italic">The Grand Hall</p>
              </div>
            </div>
            
            <PhotoPlaceholder label="Schedule Highlight" className="mt-8 rounded-2xl h-48 md:h-64" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
