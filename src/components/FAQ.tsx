import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import PhotoPlaceholder from './PhotoPlaceholder';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Are children invited?",
      answer: "We love your little ones! However, we have decided to make our wedding an adults-only celebration. We hope you understand and can join us for a night off!"
    },
    {
      question: "Is there parking at the venue?",
      answer: "Yes, there is ample free parking available at the venue for all guests."
    },
    {
      question: "Can I bring a plus one?",
      answer: "Due to limited capacity, we can only accommodate those specifically listed on your invitation. We appreciate your understanding!"
    },
    {
      question: "What is the gift preference?",
      answer: "Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift, a contribution towards our future home would be sincerely appreciated."
    }
  ];

  return (
    <section id="faq" className="py-16 md:py-24 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 italic">Frequently Asked Questions</h2>
        <div className="w-16 h-1 bg-wildflower-yellow mx-auto rounded-full opacity-50"></div>
      </div>

      <div className="content-card grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-100 pb-4">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center text-left py-4 focus:outline-none group"
              >
                <span className={`text-lg font-medium transition-colors ${openIndex === index ? 'text-wildflower-pink' : 'text-gray-700'}`}>
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className="text-wildflower-pink" size={20} />
                ) : (
                  <Plus className="text-gray-400 group-hover:text-wildflower-pink transition-colors" size={20} />
                )}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-600 pb-4 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          
          <div className="mt-12 p-6 bg-wildflower-blue/5 rounded-2xl border border-wildflower-blue/10 flex items-start gap-4">
            <HelpCircle className="text-wildflower-blue shrink-0" />
            <div>
              <p className="font-bold text-gray-800">Still have questions?</p>
              <p className="text-gray-600 text-sm">Feel free to reach out to us directly or through our coordinator.</p>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="hidden md:block"
        >
          <PhotoPlaceholder label="FAQ Side Photo Placeholder" className="rounded-3xl shadow-lg h-[500px]" />
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
