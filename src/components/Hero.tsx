import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Terminal, Database, Code2, Server, ArrowRight, Activity, Cpu } from 'lucide-react';

export const Hero: React.FC = () => {
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

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  };

  const floatingBadges = [
    { Icon: Code2, label: 'C# / .NET', color: 'from-blue-500 to-indigo-600', position: 'top-10 left-[10%]', delay: 0 },
    { Icon: Database, label: 'SQL Server', color: 'from-emerald-500 to-teal-600', position: 'bottom-20 left-[5%]', delay: 2 },
    { Icon: Cpu, label: 'Web API', color: 'from-purple-500 to-pink-600', position: 'top-20 right-[10%]', delay: 1 },
    { Icon: Server, label: 'IIS / Cloud', color: 'from-amber-500 to-orange-600', position: 'bottom-16 right-[15%]', delay: 3 },
  ];

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-mesh-light dark:bg-mesh-dark"
    >
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl -z-10 animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-3xl -z-10 animate-pulse-glow animation-delay-2000" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Headline & Copy */}
        <motion.div 
          className="lg:col-span-7 flex flex-col justify-center text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Status Badge */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-500 dark:text-blue-400 text-xs font-semibold w-max mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Available for Freelance & Contract Work
          </motion.div>

          {/* Headline */}
          <motion.h1 
            variants={itemVariants}
            className="font-display font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[1.1] text-slate-900 dark:text-white mb-6"
          >
            Building Scalable{' '}
            <span className="bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">
              .NET Solutions
            </span>{' '}
            for Modern Businesses
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            variants={itemVariants}
            className="font-sans text-lg md:text-xl text-slate-650 dark:text-slate-400 max-w-2xl leading-relaxed mb-8"
          >
            Freelance ASP.NET Core Developer specializing in Travel Technology, API Integrations, Payment Systems, and Business Automation.
          </motion.p>

          {/* CTA Group */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4"
          >
            <button
              onClick={() => scrollTo('contact')}
              className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-emerald-500 text-white font-semibold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all group"
            >
              Hire Me 
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollTo('projects')}
              className="px-8 py-4 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/5 hover:border-blue-500/40 text-slate-700 dark:text-slate-300 font-semibold hover:bg-slate-200/50 dark:hover:bg-slate-800/50 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              View Projects
            </button>
          </motion.div>

          {/* Trust points */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-slate-200/60 dark:border-white/5"
          >
            <div>
              <p className="font-display font-bold text-2xl text-slate-900 dark:text-white">3+</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Years Experience</p>
            </div>
            <div>
              <p className="font-display font-bold text-2xl text-slate-900 dark:text-white">20+</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Projects Delivered</p>
            </div>
            <div>
              <p className="font-display font-bold text-2xl text-slate-900 dark:text-white">100%</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Client Satisfaction</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side: Mockup Editor & Floating Badges */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end items-center h-full min-h-[450px]">
          {/* Floating Badges */}
          {floatingBadges.map((badge) => {
            const IconComponent = badge.Icon;
            return (
              <motion.div
                key={badge.label}
                className="absolute hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-white/10 shadow-lg backdrop-blur-md z-20"
                style={{
                  top: badge.position.includes('top') ? badge.position.split(' ')[0].split('-')[1] + '%' : undefined,
                  bottom: badge.position.includes('bottom') ? badge.position.split(' ')[0].split('-')[1] + '%' : undefined,
                  left: badge.position.includes('left') ? badge.position.split(' ')[1].split('-')[1] : undefined,
                  right: badge.position.includes('right') ? badge.position.split(' ')[1].split('-')[1] : undefined,
                }}
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: badge.delay,
                }}
              >
                <div className={`p-1.5 rounded-lg bg-gradient-to-br ${badge.color} text-white`}>
                  <IconComponent size={14} />
                </div>
                <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">{badge.label}</span>
              </motion.div>
            );
          })}

          {/* Core Mockup coding window */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 80, damping: 15, delay: 0.3 }}
            className="w-full max-w-[460px] rounded-2xl bg-slate-900/90 dark:bg-slate-950/80 border border-slate-200/20 dark:border-white/10 shadow-2xl overflow-hidden backdrop-blur-md relative"
          >
            {/* Header / Tabs */}
            <div className="flex items-center justify-between px-4 py-3 bg-slate-800/60 border-b border-slate-200/10 dark:border-white/5">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500" />
                <span className="w-3 h-3 rounded-full bg-amber-500" />
                <span className="w-3 h-3 rounded-full bg-emerald-500" />
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded bg-slate-800/40 border border-slate-200 dark:border-white/5">
                <Terminal size={12} className="text-blue-400" />
                <span className="text-[10px] font-mono text-slate-400">BookingController.cs</span>
              </div>
              <div className="w-8" />
            </div>

            {/* Code Body */}
            <div className="p-6 font-mono text-[11px] sm:text-xs leading-relaxed text-slate-300 text-left overflow-x-auto min-h-[220px]">
              <div className="text-slate-500">// ASP.NET Core Web API</div>
              <div>
                <span className="text-purple-400">using</span> Microsoft.AspNetCore.Mvc;
              </div>
              <div className="mb-2">
                <span className="text-purple-400">using</span> TravelPortal.Services;
              </div>

              <div>
                <span className="text-blue-400">[ApiController]</span>
              </div>
              <div>
                <span className="text-blue-400">[Route]</span>(<span className="text-emerald-400">"api/v1/[controller]"</span>)
              </div>
              <div>
                <span className="text-purple-400">public class</span> <span className="text-amber-300">BookingController</span> : <span className="text-teal-400">ControllerBase</span>
              </div>
              <div className="pl-4">
                <span>{`{`}</span>
                <div className="pl-4">
                  <span className="text-purple-400">private readonly</span> <span className="text-teal-400">IBookingService</span> _service;
                  <br />
                  <span className="text-purple-400">public</span> <span className="text-amber-300">BookingController</span>(<span className="text-teal-400">IBookingService</span> svc) =&gt; _service = svc;
                </div>
                
                <div className="pl-4 mt-2">
                  <span className="text-blue-400">[HttpPost]</span>
                  <br />
                  <span className="text-purple-400">public async</span> <span className="text-teal-400">Task&lt;IActionResult&gt;</span> <span className="text-amber-300">Create</span>([FromBody] <span className="text-teal-400">BookingReq</span> req)
                  <br />
                  <span>{`    {`}</span>
                  <br />
                  <span className="text-slate-400">        var res = </span><span className="text-purple-400">await</span> _service.<span className="text-amber-300">BookAsync</span>(req);
                  <br />
                  <span className="text-purple-400">        return</span> <span className="text-amber-300">Ok</span>(res);
                  <br />
                  <span>{`    }`}</span>
                </div>
                <span>{`}`}</span>
              </div>
            </div>

            {/* Output / Console Mockup */}
            <div className="bg-slate-950 border-t border-slate-200/10 dark:border-white/5 p-4 text-[10px] sm:text-xs font-mono text-left">
              <div className="flex items-center gap-1.5 text-slate-500 mb-1">
                <Activity size={10} className="text-emerald-400 animate-pulse" />
                <span>Console Diagnostics</span>
              </div>
              <div className="space-y-0.5">
                <div className="text-emerald-400">[info] Connection opened successfully: SQL Server.</div>
                <div className="text-blue-400">[info] Stripe Gateway initialized callback: SUCCESS.</div>
                <div className="text-amber-400">[info] Dynamic invoice generated for Booking #9421.</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
