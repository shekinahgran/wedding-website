import React from 'react';

const RSVP: React.FC = () => {
  // Since the user provided an edit link, I'll use a placeholder embed or the user's link if it works.
  const rsvpLink = "https://docs.google.com/forms/d/1BUCNjbrB7Bca6Wi6jqfCd_ibIhG5pVoeK7NUSav_yVg/viewform?embedded=true";

  return (
    <section id="rsvp" className="py-16 md:py-24 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 italic">RSVP</h2>
        <p className="text-gray-500 uppercase tracking-widest text-xs md:text-sm mb-6 md:mb-8">We can't wait to celebrate with you!</p>
        <div className="w-16 h-1 bg-wildflower-pink mx-auto rounded-full opacity-50 mb-10 md:mb-12"></div>
      </div>

      <div className="content-card !p-4 md:!p-8">
        <div className="bg-gray-50 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border border-gray-100">
          <iframe
            src={rsvpLink}
            width="100%"
            height="800"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            className="rounded-xl md:rounded-2xl min-h-[600px] md:min-h-[800px]"
          >
            Loading…
          </iframe>
        </div>
      </div>

      <div className="mt-12 md:mt-16 text-center px-4">
        <p className="font-serif italic text-xl md:text-2xl text-gray-700 mb-6 md:mb-8">Thank you for being part of our journey!</p>
        <img 
          src="/thank-you.jpg" 
          alt="Thank You"
          className="max-w-[280px] md:max-w-md mx-auto aspect-[5/4] object-cover object-[center_15%] rounded-2xl shadow-xl border-white border-5" 
        />
      </div>
    </section>
  );
};

export default RSVP;
