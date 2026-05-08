import React from 'react';
import { MapPin, Calendar, Clock, Shirt } from 'lucide-react';

interface DetailsProps {
  role: string | null;
}

const Details: React.FC<DetailsProps> = ({ role }) => {
  const isEntourage = role === 'entourage';

  const schedule = isEntourage 
    ? [
        { time: '4:00 PM', title: 'Wedding Ceremony', loc: 'Sampaloc Baptist Church (SBC)', color: 'bg-wildflower-purple' },
        { time: '5:00 PM — 5:30 PM', title: 'Sip, Snack and Snap', color: 'bg-wildflower-yellow' },
        { time: '5:30 PM — 7:00 PM', title: 'Dinner & Reception', loc: "Ben and Lily's Hilltop View Restaurant", color: 'bg-wildflower-pink' },
      ]
    : [
        { time: '5:00 PM — 5:30 PM', title: 'Sip, Snack and Snap', color: 'bg-wildflower-yellow' },
        { time: '5:30 PM — 7:00 PM', title: 'Dinner & Reception', loc: "Ben and Lily's Hilltop View Restaurant", color: 'bg-wildflower-pink' },
      ];

  const venues = isEntourage
    ? [
        { 
          name: 'The Church', 
          loc: 'Sampaloc Baptist Church (SBC)', 
          imgSrc: '/venue-church.png', 
          color: 'bg-blue-50 text-blue-600',
          mapLink: 'https://maps.app.goo.gl/Tjy3n4vCQ5Jskqfy9'
        },
        { 
          name: 'The Reception', 
          loc: "Ben and Lily's Hilltop View Restaurant", 
          imgSrc: '/venue-restaurant.jpg', 
          color: 'bg-wildflower-pink/10 text-wildflower-pink',
          mapLink: 'https://maps.app.goo.gl/Tjy3n4vCQ5Jskqfy9'
        }
      ]
    : [
        { 
          name: 'The Reception', 
          loc: "Ben and Lily's Hilltop View Restaurant", 
          imgSrc: '/venue-restaurant.jpg', 
          color: 'bg-wildflower-pink/10 text-wildflower-pink',
          mapLink: 'https://maps.app.goo.gl/Tjy3n4vCQ5Jskqfy9'
        }
      ];

  return (
    <section id="details" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 italic text-gray-800">Wedding Details</h2>
          <p className="text-gray-500 uppercase tracking-widest text-xs md:text-sm">Where & When</p>
          <div className="w-16 h-1 bg-wildflower-green mx-auto rounded-full opacity-50 mt-4"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 md:gap-12 items-start">
          {/* Venues */}
          <div className="space-y-8 order-1">
            {venues.map((venue, i) => (
              <div key={i} className="content-card">
                <div className="flex items-center gap-4 mb-6 md:mb-8">
                  <div className={`p-3 md:p-4 rounded-2xl shrink-0 ${venue.color}`}>
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold">{venue.name}</h3>
                    <p className="text-gray-500 text-sm md:text-base">{venue.loc}</p>
                  </div>
                </div>

                <img 
                  src={venue.imgSrc} 
                  alt={venue.name} 
                  className="mb-6 md:mb-8 w-full aspect-video object-cover rounded-2xl shadow-sm" 
                />

                <div className="space-y-5 md:space-y-6">
                  <div className="flex gap-4">
                    <Calendar className="text-wildflower-pink shrink-0 w-5 h-5 md:w-6 md:h-6" />
                    <p className="text-gray-700 font-medium text-sm md:text-base">Tuesday, July 7, 2026</p>
                  </div>
                  {venue.name === 'The Church' && (
                    <div className="flex gap-4">
                <Clock className="text-wildflower-pink shrink-0 w-5 h-5 md:w-6 md:h-6" />
                <div>
                  <p className="text-gray-700 font-medium text-sm md:text-base">Ceremony starts at 4:00 PM</p>
                  <p className="text-[10px] md:text-xs text-gray-400 mt-1 italic leading-relaxed">
                    We warmly request your presence at the venue at least 30 minutes before the ceremony begins.
                  </p>
                </div>
              </div>
                  )}
                  <div className="flex gap-4">
                    <Shirt className="text-wildflower-pink shrink-0 w-5 h-5 md:w-6 md:h-6" />
                    <div>
                      <p className="text-gray-700 font-medium mb-1 text-sm md:text-base">Dress Code</p>
                      <p className="text-gray-600 text-sm md:text-base">Formal / Semi-formal</p>
                    </div>
                  </div>
                </div>

                <a 
                  href={venue.mapLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full mt-8 md:mt-10 bg-gray-800 text-white py-3 md:py-4 rounded-xl font-bold hover:bg-gray-900 transition-colors flex items-center justify-center gap-2 text-sm md:text-base no-underline"
                >
                  <MapPin size={18} />
                  Open in Google Maps
                </a>
              </div>
            ))}
          </div>

          {/* Schedule */}
          <div className="content-card space-y-6 md:space-y-8 order-2">
            <h3 className="text-2xl md:text-3xl font-serif italic mb-6 text-center lg:text-left">Schedule of Events</h3>
            <div className="relative pl-6 md:pl-8 border-l-2 border-dashed border-wildflower-green/30 space-y-10 md:space-y-12 max-w-sm mx-auto lg:mx-0">
              {schedule.map((item, i) => (
                <div key={i} className="relative">
                  <div className={`absolute -left-[33px] md:-left-[41px] top-0 w-4 h-4 rounded-full shadow-lg ${item.color}`}></div>
                  <h4 className="text-lg md:text-xl font-bold mb-1">{item.title}</h4>
                  <p className="text-gray-500 text-xs md:text-sm mb-1">{item.time}</p>
                  <p className="text-gray-600 text-sm italic">{item.loc}</p>
                </div>
              ))}
            </div>
            
            <img 
              src="/details-highlight.jpg" 
              alt="The Big Day Highlight" 
              className="mt-8 w-full h-48 md:h-64 object-cover object-[center_58%] rounded-2xl shadow-sm" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
