import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      icon: (className: string) => <Mail className={className} size={18} />, 
      url: 'mailto:shailendrasonvane.dev@gmail.com', 
      label: 'Email' 
    },
    { 
      icon: (className: string) => (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" width={18} height={18}>
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ), 
      url: '#', 
      label: 'LinkedIn' 
    },
    { 
      icon: (className: string) => (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" width={18} height={18}>
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ), 
      url: '#', 
      label: 'GitHub' 
    }
  ];

  const quickLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'services', label: 'Services' },
    { id: 'why-me', label: 'Why Me' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

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
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-200/5 dark:border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-b border-white/5 pb-10 mb-10">
          {/* Brand Info */}
          <div className="md:col-span-5 text-left">
            <button 
              onClick={scrollToTop}
              className="font-display font-bold text-2xl tracking-tight text-white flex items-center gap-1 group mb-3"
            >
              <span className="bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">Shailendra</span>
              <span className="text-emerald-500">.</span>
            </button>
            <p className="font-sans text-sm text-slate-400 max-w-sm leading-relaxed">
              Freelance ASP.NET Core developer designing robust backend structures, travel GDS APIs, and custom business automation engines.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 flex flex-wrap gap-x-6 gap-y-2 md:justify-center">
            {quickLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-sm font-semibold hover:text-blue-500 transition-colors py-1"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Social Icons */}
          <div className="md:col-span-3 flex justify-start md:justify-end gap-3.5">
            {socialLinks.map((item) => {
              return (
                <a
                  key={item.label}
                  href={item.url}
                  className="p-3 rounded-xl bg-slate-900 border border-white/5 hover:border-blue-500/30 text-slate-300 hover:text-blue-500 hover:bg-slate-800 transition-all hover:scale-105 flex items-center justify-center"
                  aria-label={item.label}
                >
                  {item.icon('')}
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom Details */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold tracking-wider uppercase">
          <p>© {currentYear} Shailendra Sonvane. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <p>Designed and Developed by Shailendra Sonvane</p>
            {/* Scroll back to top */}
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-lg bg-slate-900 border border-white/5 hover:border-blue-500/40 text-slate-400 hover:text-white transition-all hover:-translate-y-0.5"
              aria-label="Scroll to top"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
