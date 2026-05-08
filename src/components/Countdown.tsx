import React, { useState, useEffect } from 'react';

const Countdown: React.FC = () => {
  const targetDate = new Date('July 7, 2026 16:00:00').getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ];

  return (
    <div className="flex justify-center gap-4 md:gap-8 mt-12 mb-8">
      {timeUnits.map((unit) => (
        <div key={unit.label} className="text-center">
          <div className="bg-white/80 backdrop-blur-sm shadow-sm border border-gray-100 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-2xl mb-2">
            <span className="text-2xl md:text-3xl font-bold text-gray-800">{unit.value}</span>
          </div>
          <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-gray-500 font-medium">{unit.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
