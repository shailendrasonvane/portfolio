import React from 'react';
import { motion } from 'framer-motion';
import { FileCode, Clock, MessageSquare, Briefcase, HeartHandshake } from 'lucide-react';

interface TimelineItem {
  icon: React.ComponentType<{ className?: string; size?: number }>;
  title: string;
  description: string;
  badge: string;
}

export const WhyWorkWithMe: React.FC = () => {
  const items: TimelineItem[] = [
    {
      icon: FileCode,
      title: 'Clean & Maintainable Code',
      description: 'Writing SOLID-compliant, heavily-refactored C# and ASP.NET Core controllers. Easy to scale, review, and onboard future developers.',
      badge: 'Code Quality'
    },
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: 'Strict sprint deadlines managed through Git milestones. I build and deliver in modules so you always see actual progress.',
      badge: 'Reliability'
    },
    {
      icon: MessageSquare,
      title: 'Transparent Communication',
      description: 'Direct communication via Slack, WhatsApp, and email. Weekly video demo calls to align on details and avoid scope creeps.',
      badge: 'Communication'
    },
    {
      icon: Briefcase,
      title: 'Business-Focused Solutions',
      description: 'I study your business case first. Travel portals and booking gateways are built to maximize conversion rates and operational efficiencies.',
      badge: 'ROI Focus'
    },
    {
      icon: HeartHandshake,
      title: 'Long-Term Support',
      description: 'Your project is backed post-launch. Available for feature expansions, third-party API version updates, database checks, and patches.',
      badge: 'Partnership'
    }
  ];

  return (
    <section id="why-me" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-slate-950/40">
      {/* Background Orbs */}
      <div className="absolute left-1/3 top-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-sm font-semibold tracking-wider uppercase bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">
            My Commitment
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white mt-2">
            Why Work With Me?
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Vertical Central Line */}
          <div className="absolute left-[30px] lg:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500/80 via-emerald-500/80 to-blue-500/10 -translate-x-1/2 -z-10" />

          <div className="space-y-12 lg:space-y-16">
            {items.map((item, idx) => {
              const IconComponent = item.icon;
              const isEven = idx % 2 === 0;

              return (
                <div key={item.title} className="flex flex-col lg:flex-row items-start lg:items-center relative w-full">
                  {/* Left Column (Desktop) */}
                  <div className={`w-full lg:w-1/2 flex pl-16 lg:pl-0 ${isEven ? 'lg:justify-end lg:pr-12' : 'lg:order-last lg:justify-start lg:pl-12'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-100px' }}
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                      className="w-full max-w-[500px] p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-white/5 bg-white dark:bg-slate-900/30 backdrop-blur-md shadow-lg text-left hover:border-blue-500/20 hover:shadow-blue-500/5 transition-all duration-300 relative group"
                    >
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wide uppercase bg-blue-500/10 text-blue-500 dark:text-blue-400 mb-3 border border-blue-500/10">
                        {item.badge}
                      </span>
                      <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 dark:text-white mb-2 group-hover:text-blue-500 transition-colors">
                        {item.title}
                      </h3>
                      <p className="font-sans text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Central Node Circle */}
                  <div className="absolute left-[30px] lg:left-1/2 top-4 lg:top-auto -translate-x-1/2 z-10 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0.7, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                      className="w-12 h-12 rounded-full bg-slate-900 dark:bg-slate-950 border-2 border-emerald-500 flex items-center justify-center text-emerald-500 shadow-lg shadow-emerald-500/20"
                    >
                      <IconComponent size={18} />
                    </motion.div>
                  </div>

                  {/* Empty Spacer Column (Desktop) */}
                  <div className="hidden lg:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
