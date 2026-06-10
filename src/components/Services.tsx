import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Cpu, Globe, CreditCard, Database, Wrench, RefreshCw, Zap, Network } from 'lucide-react';

interface Service {
  icon: React.ComponentType<{ className?: string; size?: number }>;
  title: string;
  description: string;
  glowColor: string; // CSS style custom hover border
}

export const Services: React.FC = () => {
  const servicesList: Service[] = [
    {
      icon: Cpu,
      title: 'ASP.NET Core Development',
      description: 'Building secure, highly performant, and cross-platform enterprise web applications designed for scale.',
      glowColor: 'group-hover:border-blue-500/30 dark:group-hover:border-blue-500/30'
    },
    {
      icon: Network,
      title: 'REST API Development',
      description: 'Designing robust API contracts with secure token validations, Swagger documentation, and high-throughput handlers.',
      glowColor: 'group-hover:border-emerald-500/30 dark:group-hover:border-emerald-500/30'
    },
    {
      icon: Globe,
      title: 'Travel Portal Development',
      description: 'Specialized booking systems, XML/JSON integration with flight, hotel, and car rental API providers (GDS integrations).',
      glowColor: 'group-hover:border-purple-500/30 dark:group-hover:border-purple-500/30'
    },
    {
      icon: CreditCard,
      title: 'Payment Gateway Integration',
      description: 'Integrating payment channels (Stripe, PayPal, Razorpay) with resilient checkout redirection and webhook verification logs.',
      glowColor: 'group-hover:border-amber-500/30 dark:group-hover:border-amber-500/30'
    },
    {
      icon: Database,
      title: 'SQL Server Optimization',
      description: 'Diagnosing database blockages, indexing tables, rewriting stored procedures, and tuning query execution plans.',
      glowColor: 'group-hover:border-blue-500/30 dark:group-hover:border-blue-500/30'
    },
    {
      icon: Wrench,
      title: 'Bug Fixing & Maintenance',
      description: 'Debugging legacy structures, patching logical exceptions, and securing software pipelines for stable releases.',
      glowColor: 'group-hover:border-rose-500/30 dark:group-hover:border-rose-500/30'
    },
    {
      icon: Zap,
      title: 'Automation Solutions',
      description: 'Automating background tasks, file downloads/parsing, scrapers, reporting logs, and invoice dispatches.',
      glowColor: 'group-hover:border-emerald-500/30 dark:group-hover:border-emerald-500/30'
    },
    {
      icon: RefreshCw,
      title: 'Existing Project Enhancements',
      description: 'Refactoring outdated codebases to modern MVC/API structures, refactoring databases, and adding features.',
      glowColor: 'group-hover:border-purple-500/30 dark:group-hover:border-purple-500/30'
    }
  ];

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' as const }
    }
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-white dark:bg-dark-base">
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl -z-10 animate-pulse-glow" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl -z-10 animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold tracking-wider uppercase bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">
            What I Offer
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white mt-2">
            Tailored Development Services
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {servicesList.map((svc) => {
            const IconComponent = svc.icon;
            return (
              <motion.div
                key={svc.title}
                variants={itemVariants}
                className={`group p-6 sm:p-8 rounded-2xl border border-slate-200/60 dark:border-white/5 bg-slate-50/50 dark:bg-slate-900/30 backdrop-blur-md transition-all duration-300 ${svc.glowColor} hover:scale-[1.02] hover:-translate-y-1 hover:shadow-lg flex flex-col items-start text-left`}
              >
                {/* Icon box with glowing hover */}
                <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-350 mb-6 group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-emerald-500 group-hover:text-white transition-all duration-300">
                  <IconComponent size={24} />
                </div>

                <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 dark:text-white mb-3 group-hover:text-blue-500 transition-colors">
                  {svc.title}
                </h3>
                
                <p className="font-sans text-xs sm:text-sm text-slate-650 dark:text-slate-400 leading-relaxed flex-grow">
                  {svc.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
