import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, ArrowRight } from 'lucide-react';

export const CTA: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-20 relative overflow-hidden bg-white dark:bg-dark-base">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main CTA banner with deep gradients */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-white/5 bg-slate-900 text-white shadow-2xl py-12 px-6 sm:px-12 md:py-16 md:px-16"
        >
          {/* Neon mesh lights */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl -z-10 animate-pulse-glow" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl -z-10 animate-pulse-glow animation-delay-2000" />

          <div className="max-w-3xl text-left relative z-10 flex flex-col items-start">
            {/* Tag */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-6">
              <Sparkles size={12} className="text-blue-400" />
              Let's Collaborate
            </div>

            {/* Headline */}
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[1.1] text-white mb-4">
              Have an idea? Let's turn it into a{' '}
              <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                successful digital solution
              </span>
              .
            </h2>

            {/* Description */}
            <p className="font-sans text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed mb-8">
              Whether you need to scale an existing system, automate your invoicing, or build a custom API integration for your travel platform, I'm here to help.
            </p>

            {/* Button Actions */}
            <div className="flex flex-wrap gap-4 w-full sm:w-auto">
              <button
                onClick={() => scrollTo('contact')}
                className="flex items-center justify-center gap-2 px-7 py-3.5 w-full sm:w-auto rounded-xl bg-gradient-to-r from-blue-500 to-emerald-500 text-white font-semibold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all group"
              >
                Hire Me Now
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="flex items-center justify-center gap-2 px-7 py-3.5 w-full sm:w-auto rounded-xl bg-slate-800 border border-slate-700 text-slate-300 font-semibold hover:bg-slate-700 hover:text-white hover:border-slate-600 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Calendar size={16} />
                Schedule a Consultation
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
