import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Terminal, Database, Laptop, Settings, ChevronRight } from 'lucide-react';

interface SkillItem {
  name: string;
  level: number; // percentage
}

interface SkillCategory {
  title: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  skills: SkillItem[];
  color: string; // Tailwind glow classes
  iconColor: string;
}

export const Skills: React.FC = () => {
  const categories: SkillCategory[] = [
    {
      title: 'Backend Development',
      icon: Terminal,
      iconColor: 'text-blue-500',
      color: 'hover:shadow-blue-500/10 hover:border-blue-500/30',
      skills: [
        { name: 'C#', level: 95 },
        { name: 'ASP.NET Core', level: 95 },
        { name: 'Web API', level: 95 },
        { name: 'ASP.NET MVC', level: 90 },
        { name: 'Entity Framework', level: 90 },
      ],
    },
    {
      title: 'Database Systems',
      icon: Database,
      iconColor: 'text-emerald-500',
      color: 'hover:shadow-emerald-500/10 hover:border-emerald-500/30',
      skills: [
        { name: 'SQL Server', level: 90 },
        { name: 'Stored Procedures', level: 95 },
        { name: 'Performance Optimization', level: 88 },
      ],
    },
    {
      title: 'Frontend UI',
      icon: Laptop,
      iconColor: 'text-purple-500',
      color: 'hover:shadow-purple-500/10 hover:border-purple-500/30',
      skills: [
        { name: 'HTML5 / CSS3', level: 90 },
        { name: 'JavaScript (ES6+)', level: 85 },
        { name: 'jQuery', level: 90 },
        { name: 'Bootstrap', level: 90 },
        { name: 'DevExpress', level: 80 },
      ],
    },
    {
      title: 'Tools & DevOps',
      icon: Settings,
      iconColor: 'text-amber-500',
      color: 'hover:shadow-amber-500/10 hover:border-amber-500/30',
      skills: [
        { name: 'Postman', level: 95 },
        { name: 'Git & GitHub', level: 90 },
        { name: 'IIS Deployment', level: 85 },
        { name: 'Selenium Testing', level: 80 },
      ],
    },
  ];

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' as const },
    },
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-white dark:bg-dark-base">
      {/* Decorative Gradients */}
      <div className="absolute left-0 bottom-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold tracking-wider uppercase bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">
            My Expertise
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white mt-2">
            Professional Skillset & Stack
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {categories.map((cat) => {
            const IconComponent = cat.icon;
            return (
              <motion.div
                key={cat.title}
                variants={cardVariants}
                className={`p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-white/5 bg-slate-50/50 dark:bg-slate-900/30 backdrop-blur-sm transition-all duration-305 ${cat.color} group`}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 ${cat.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent size={22} />
                  </div>
                  <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 dark:text-white">
                    {cat.title}
                  </h3>
                </div>

                {/* Skill Bars */}
                <div className="space-y-5">
                  {cat.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center text-sm font-medium">
                        <span className="text-slate-700 dark:text-slate-300 flex items-center gap-1">
                          <ChevronRight size={14} className="text-slate-400 group-hover:text-blue-500 transition-colors" />
                          {skill.name}
                        </span>
                        <span className="text-slate-505 dark:text-slate-400 font-mono text-xs">{skill.level}%</span>
                      </div>
                      
                      {/* Bar Track */}
                      <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-800/80 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.1 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
