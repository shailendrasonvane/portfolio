import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  text: string;
  stars: number;
}

export const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: 'Rajesh Mehta',
      role: 'Founder & CEO',
      company: 'TravelVibe Solutions',
      text: "Shailendra completely redesigned our booking admin portal. The GDS integration is flawless, and the automated invoicing has saved our operations team hours of manual work every single week. An absolute .NET pro!",
      stars: 5
    },
    {
      name: 'Sarah Jenkins',
      role: 'Managing Director',
      company: 'FlyFar Agency',
      text: "Our legacy visa application system was plagued with database timeouts. Shailendra optimized our SQL Server queries, indexed our tables, and rebuilt the file upload backend. The speed improvements are outstanding.",
      stars: 5
    },
    {
      name: 'Amit Patel',
      role: 'Technical Director',
      company: 'FinPay India',
      text: "We hired Shailendra to integrate checkout gateways and handling APIs. He delivered extremely clean C# code, robust error-logging middleware, and complete Postman testing scripts. Finished ahead of schedule!",
      stars: 5
    },
    {
      name: 'Elena Rostova',
      role: 'Operations Lead',
      company: 'NomadAutomate',
      text: "Shailendra's ability to solve complex automation problems was exactly what we needed. He built a GST billing module that structures thousands of dynamic invoices and dispatches them automatically overnight.",
      stars: 5
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef<any>(null);

  const startTimer = () => {
    stopTimer();
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 4500);
  };

  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  useEffect(() => {
    startTimer();
    return () => stopTimer();
  }, []);

  const handlePrev = () => {
    stopTimer();
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    startTimer();
  };

  const handleNext = () => {
    stopTimer();
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    startTimer();
  };

  const handleDotClick = (idx: number) => {
    stopTimer();
    setActiveIndex(idx);
    startTimer();
  };

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-white dark:bg-dark-base border-b border-slate-200/50 dark:border-white/5">
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Title */}
        <div className="mb-16">
          <span className="text-sm font-semibold tracking-wider uppercase bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">
            Client Feedback
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white mt-2">
            What My Clients Say
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Carousel Area */}
        <div 
          className="relative min-h-[300px] flex items-center justify-center"
          onMouseEnter={stopTimer}
          onMouseLeave={startTimer}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="p-8 sm:p-12 rounded-3xl border border-slate-200/60 dark:border-white/5 bg-slate-50/50 dark:bg-slate-900/30 backdrop-blur-md shadow-xl text-center relative max-w-2xl w-full"
            >
              {/* Quote Mark */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 p-3 rounded-full bg-gradient-to-br from-blue-500 to-emerald-500 text-white shadow-lg">
                <Quote size={20} />
              </div>

              {/* Star Rating */}
              <div className="flex justify-center gap-1 mb-6 mt-2">
                {[...Array(testimonials[activeIndex].stars)].map((_, i) => (
                  <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Text */}
              <p className="font-sans text-base sm:text-lg text-slate-700 dark:text-slate-300 italic leading-relaxed mb-6">
                "{testimonials[activeIndex].text}"
              </p>

              {/* Client Info */}
              <div>
                <h4 className="font-display font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                  {testimonials[activeIndex].name}
                </h4>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                  {testimonials[activeIndex].role}, <span className="text-blue-500 dark:text-blue-450">{testimonials[activeIndex].company}</span>
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-0 sm:-left-12 lg:-left-20 top-1/2 -translate-y-1/2 p-3 rounded-xl border border-slate-200 dark:border-white/5 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-md"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-0 sm:-right-12 lg:-right-20 top-1/2 -translate-y-1/2 p-3 rounded-xl border border-slate-200 dark:border-white/5 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-md"
            aria-label="Next Testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Carousel Indicator Dots */}
        <div className="flex justify-center gap-2.5 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleDotClick(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeIndex === idx 
                  ? 'w-7 bg-blue-500' 
                  : 'w-2.5 bg-slate-300 dark:bg-slate-700'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
