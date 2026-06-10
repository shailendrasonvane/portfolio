import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    service: 'ASP.NET Core Development',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const services = [
    'ASP.NET Core Development',
    'REST API Development',
    'Travel Portal Development',
    'Payment Gateway Integration',
    'SQL Server Optimization',
    'Bug Fixing & Maintenance',
    'Existing Project Enhancements',
    'Other Automation Solutions'
  ];

  const validate = (): boolean => {
    const tempErrors: FormErrors = {};
    if (!form.name.trim()) tempErrors.name = 'Name is required.';
    
    if (!form.email.trim()) {
      tempErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      tempErrors.email = 'Please enter a valid email address.';
    }
    
    if (!form.message.trim()) tempErrors.message = 'Message is required.';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        setForm({
          name: '',
          email: '',
          service: 'ASP.NET Core Development',
          message: ''
        });
      }, 1500);
    }
  };

  const contactDetails = [
    {
      icon: (className: string) => <Mail className={className} size={20} />,
      label: 'Email',
      value: 'shailendrasonvane.dev@gmail.com',
      link: 'mailto:shailendrasonvane.dev@gmail.com',
      color: 'text-blue-500'
    },
    {
      icon: (className: string) => (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" width={20} height={20}>
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
      label: 'LinkedIn',
      value: 'linkedin.com/in/shailendrasonvane',
      link: '#',
      color: 'text-sky-650'
    },
    {
      icon: (className: string) => (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" width={20} height={20}>
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      label: 'GitHub',
      value: 'github.com/shailendrasonvane',
      link: '#',
      color: 'text-slate-800 dark:text-slate-200'
    },
    {
      icon: (className: string) => <MapPin className={className} size={20} />,
      label: 'Location',
      value: 'Surat, Gujarat, India',
      link: null,
      color: 'text-emerald-500'
    }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-slate-900/40">
      {/* Background Orbs */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold tracking-wider uppercase bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">
            Get In Touch
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white mt-2">
            Let's Start Your Project
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Side: Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6 text-left"
          >
            <h3 className="font-display font-bold text-2xl text-slate-900 dark:text-white mb-4">
              Contact Information
            </h3>
            <p className="font-sans text-sm sm:text-base text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
              Have a freelance requirement, travel portal integration, or SQL Server query optimization project? Send a message, and I'll get back to you within 24 hours.
            </p>

            <div className="space-y-4">
              {contactDetails.map((item) => {
                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-4 p-4 rounded-2xl border border-slate-200/60 dark:border-white/5 bg-white dark:bg-slate-900/30 backdrop-blur-sm shadow-sm hover:border-blue-500/20 hover:shadow-md transition-all duration-300"
                  >
                    <div className={`p-3 rounded-xl bg-slate-100 dark:bg-slate-800 ${item.color} flex items-center justify-center`}>
                      {item.icon('')}
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">{item.label}</p>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">{item.value}</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-3xl border border-slate-200/60 dark:border-white/5 bg-white dark:bg-slate-900/30 backdrop-blur-sm shadow-xl space-y-6 text-left relative"
            >
              {/* Name field */}
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="John Doe"
                  className={`w-full px-4 py-3 rounded-xl border bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                    errors.name ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-200 dark:border-white/10'
                  }`}
                />
                {errors.name && (
                  <p className="flex items-center gap-1 text-xs text-rose-500 font-medium">
                    <AlertCircle size={12} /> {errors.name}
                  </p>
                )}
              </div>

              {/* Email field */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="john@example.com"
                  className={`w-full px-4 py-3 rounded-xl border bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                    errors.email ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-200 dark:border-white/10'
                  }`}
                />
                {errors.email && (
                  <p className="flex items-center gap-1 text-xs text-rose-500 font-medium">
                    <AlertCircle size={12} /> {errors.email}
                  </p>
                )}
              </div>

              {/* Service Type Dropdown */}
              <div className="space-y-2">
                <label htmlFor="service" className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Requested Service
                </label>
                <select
                  id="service"
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                >
                  {services.map((svc) => (
                    <option key={svc} value={svc} className="dark:bg-slate-900">
                      {svc}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message field */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Project Description
                </label>
                <textarea
                  id="message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your business requirement, timeline, and goals..."
                  rows={5}
                  className={`w-full px-4 py-3 rounded-xl border bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none ${
                    errors.message ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-200 dark:border-white/10'
                  }`}
                />
                {errors.message && (
                  <p className="flex items-center gap-1 text-xs text-rose-500 font-medium">
                    <AlertCircle size={12} /> {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-500 to-emerald-500 text-white font-semibold flex items-center justify-center gap-2 hover:opacity-90 active:scale-[0.99] hover:shadow-lg hover:shadow-blue-500/10 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>

              {/* Success Modal */}
              <AnimatePresence>
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md rounded-3xl flex flex-col items-center justify-center p-6 text-center z-20"
                  >
                    <motion.div
                      initial={{ scale: 0.8, y: 15 }}
                      animate={{ scale: 1, y: 0 }}
                      transition={{ type: 'spring', stiffness: 200 }}
                      className="space-y-4"
                    >
                      <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/10">
                        <CheckCircle size={32} />
                      </div>
                      <h3 className="font-display font-bold text-2xl text-slate-900 dark:text-white">
                        Thank You!
                      </h3>
                      <p className="font-sans text-sm text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed mx-auto">
                        Your message has been sent successfully. Shailendra will review your inquiry and get in touch with you shortly.
                      </p>
                      <button
                        onClick={() => setIsSuccess(false)}
                        className="px-6 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold border border-slate-200 dark:border-white/5 hover:bg-slate-200 dark:hover:bg-slate-750 transition-colors mt-2"
                      >
                        Dismiss
                      </button>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
