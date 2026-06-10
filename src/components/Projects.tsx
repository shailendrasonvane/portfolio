import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ExternalLink, CheckCircle2 } from 'lucide-react';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import project4 from '../assets/project4.png';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  features: string[];
  demoUrl: string;
  githubUrl: string;
}

export const Projects: React.FC = () => {
  const projectsList: Project[] = [
    {
      title: 'Travel Booking Admin Portal',
      description: 'A comprehensive management engine for travel agencies. Consolidates booking lists, automates vendor GDS callbacks, and optimizes administration tasks.',
      image: project1,
      tags: ['ASP.NET Core', 'SQL Server', 'Entity Framework', 'DevExpress', 'Bootstrap'],
      features: [
        'Real-time booking management & queue listing',
        'Interactive reporting dashboards with charts',
        'Automated GST invoice generation & receipts'
      ],
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Payment Gateway Integration',
      description: 'A transaction playground demonstrating checkout validation, payment processor callback hooks, logging, and status handling.',
      image: project2,
      tags: ['Web API', 'C#', 'Postman', 'jQuery', 'Stripe API'],
      features: [
        'Sleek checkout experiences with credit cards',
        'Secure callback webhook handlers',
        'Transaction auditing & real-time failure logging'
      ],
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Invoice Management System',
      description: 'Business automation solution designed to process bulk corporate billing, structure GST compliance, and manage email alerts.',
      image: project3,
      tags: ['ASP.NET MVC', 'SQL Server', 'Stored Procedures', 'iTextSharp (PDF)'],
      features: [
        'Compliant GST invoice computation',
        'Background PDF print rendering engine',
        'Automatic transactional email dispatch'
      ],
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Visa Application Tracker',
      description: 'A workflow pipeline portal for travel consultants and clients, mapping application statuses, document uploads, and validation checks.',
      image: project4,
      tags: ['ASP.NET Core', 'Entity Framework', 'SQL Server', 'IIS', 'jQuery'],
      features: [
        'Secure document upload & cloud storage',
        'Step-by-step progress/status visualizer',
        'Approval workflow notifications & logger'
      ],
      demoUrl: '#',
      githubUrl: '#'
    }
  ];

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const }
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-slate-950/40">
      {/* Background Orbs */}
      <div className="absolute right-0 top-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl -z-10 animate-pulse-glow" />
      <div className="absolute left-0 bottom-1/4 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl -z-10 animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold tracking-wider uppercase bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">
            My Portfolio
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white mt-2">
            Featured Case Studies
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
        >
          {projectsList.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              className="group rounded-3xl border border-slate-200 dark:border-white/5 bg-white dark:bg-slate-900/40 shadow-xl overflow-hidden hover:shadow-2xl dark:hover:shadow-blue-500/5 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-video bg-slate-100 dark:bg-slate-905/40 border-b border-slate-200 dark:border-white/5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.demoUrl}
                    className="p-3 rounded-full bg-white text-slate-900 hover:bg-blue-500 hover:text-white transition-all shadow-lg hover:scale-110"
                    title="Live Demo"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="p-3 rounded-full bg-white text-slate-900 hover:bg-emerald-500 hover:text-white transition-all shadow-lg hover:scale-110 flex items-center justify-center"
                    title="GitHub Repository"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Info Container */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow text-left">
                {/* Title */}
                <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-white group-hover:text-blue-500 transition-colors mb-3">
                  {project.title}
                </h3>
                
                {/* Description */}
                <p className="font-sans text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Key Features */}
                <div className="space-y-2 mb-6">
                  {project.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                      <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 dark:border-white/5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300 border border-slate-200/50 dark:border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
