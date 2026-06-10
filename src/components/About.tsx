import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Award, Code2, Globe } from 'lucide-react';
import developerImage from '../assets/developer.png';

interface CounterProps {
  target: number;
  duration?: number;
  suffix?: string;
}

const AnimatedCounter: React.FC<CounterProps> = ({ target, duration = 1.5, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(elementRef, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = target;
      if (start === end) return;

      const totalSteps = 40;
      const stepDuration = (duration * 1000) / totalSteps;
      const increment = Math.ceil(end / totalSteps);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isInView, target, duration]);

  return (
    <span ref={elementRef} className="font-display font-extrabold text-4xl sm:text-5xl text-slate-900 dark:text-white tracking-tight">
      {count}{suffix}
    </span>
  );
};

export const About: React.FC = () => {
  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 55 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const },
    },
  };

  const cards = [
    {
      Icon: Code2,
      title: '.NET Expert',
      desc: 'Deep architecture in ASP.NET Core MVC/API and C# Backend systems.',
      color: 'text-blue-500 border-blue-500/10 bg-blue-500/5',
    },
    {
      Icon: Globe,
      title: 'Travel Tech',
      desc: 'Booking engines, GDS APIs, dynamic invoicing, and visa tracking.',
      color: 'text-emerald-500 border-emerald-500/10 bg-emerald-500/5',
    },
    {
      Icon: Award,
      title: 'Problem Solver',
      desc: 'Optimizing database queries and system performance loops.',
      color: 'text-purple-500 border-purple-500/10 bg-purple-500/5',
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-slate-950/40">
      {/* Background decoration */}
      <div className="absolute right-0 top-1/3 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={sectionVariants}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold tracking-wider uppercase bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">
            About Me
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white mt-2">
            Crafting Digital Infrastructure with Passion
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Portrait Photo Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group max-w-[340px] w-full">
              {/* Colored Glow Behind */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-35 transition-opacity duration-300" />
              
              {/* Photo Box */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-white/10 dark:border-white/5 bg-slate-900 shadow-2xl p-3">
                <img
                  src={developerImage}
                  alt="Shailendra Sonvane"
                  className="rounded-2xl w-full object-cover aspect-square filter grayscale hover:grayscale-0 transition-all duration-500 hover:scale-[1.02]"
                />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/10 text-left">
                  <p className="text-xs text-slate-400">Based in</p>
                  <p className="text-sm font-semibold text-white">Surat, Gujarat, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Profile Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 text-left"
          >
            <h3 className="font-display font-semibold text-2xl text-slate-900 dark:text-white mb-4">
              Hello, I'm Shailendra Sonvane
            </h3>
            
            <p className="font-sans text-base text-slate-650 dark:text-slate-400 mb-6 leading-relaxed">
              I am a freelance .NET developer with a passion for designing and building highly scalable, secure, and business-focused applications. With 3+ years of specialized industry experience, I develop customized solutions that optimize business workflows, automate redundant processes, and integrate payment systems seamlessly.
            </p>

            <p className="font-sans text-base text-slate-650 dark:text-slate-400 mb-8 leading-relaxed">
              My core domain focus lies in **Travel Technology**, where I design booking aggregators, API controllers for GDS providers, invoice automations, and tracking systems. I specialize in backend architecture with **ASP.NET Core**, **C#**, and **SQL Server**, writing code that is clean, maintainable, and optimized for speed.
            </p>

            {/* Key Expertise Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
              {cards.map((card) => {
                const IconComponent = card.Icon;
                return (
                  <div
                    key={card.title}
                    className={`p-4 rounded-2xl border flex flex-col items-start gap-2 hover:translate-y-[-2px] transition-all duration-300 ${card.color}`}
                  >
                    <IconComponent size={20} />
                    <span className="font-display font-semibold text-sm text-slate-900 dark:text-white">{card.title}</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 leading-snug">{card.desc}</span>
                  </div>
                );
              })}
            </div>

            {/* Stats row with counters */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200 dark:border-white/5">
              <div>
                <AnimatedCounter target={3} suffix="+" />
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium mt-1">Years Experience</p>
              </div>
              <div>
                <AnimatedCounter target={20} suffix="+" />
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium mt-1">Projects Delivered</p>
              </div>
              <div>
                <AnimatedCounter target={15} suffix="+" />
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium mt-1">Technologies Mastered</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
