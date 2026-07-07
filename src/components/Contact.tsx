import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, MapPin, MessageSquare, Send, CheckCircle2, Globe, Twitter, Linkedin, Github } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "New Project Inquiry",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    // Simulate elite api transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        subject: "New Project Inquiry",
        message: "",
      });

      // Clear success notification after some seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Decorative gradient radial background */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Contact Details Column */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/20 bg-sky-500/5 text-xs font-sans font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-4">
              <Globe size={12} />
              <span>Connect Globally</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tight text-slate-900 dark:text-white mb-6">
              Let's build the future together
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-400 font-sans font-light leading-relaxed mb-10">
              Have a complex digital concept or enterprise system that needs expert crafting? Contact our leadership team. We analyze every project with strict technical feasibility metrics.
            </p>

            {/* List of details */}
            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="p-3.5 bg-slate-100 dark:bg-slate-900 rounded-2xl text-sky-500 border border-slate-200/30 dark:border-slate-800/60">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="block text-xs font-sans font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                    Secure Email Channels
                  </span>
                  <a
                    href="mailto:okekemetu15@gmail.com"
                    className="text-base md:text-lg font-sans font-bold text-slate-900 dark:text-white hover:text-sky-500 transition-colors"
                  >
                    okekemetu15@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3.5 bg-slate-100 dark:bg-slate-900 rounded-2xl text-blue-500 border border-slate-200/30 dark:border-slate-800/60">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="block text-xs font-sans font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                    Operational HQ
                  </span>
                  <span className="text-base md:text-lg font-sans font-bold text-slate-900 dark:text-white">
                    12 Adelabu Street, Surulere, Lagos, Nigeria.
                  </span>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div>
              <span className="block text-xs font-sans font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-4">
                Follow Tech Sprints
              </span>
              <div className="flex items-center gap-3">
                {["twitter", "linkedin", "github"].map((social) => {
                  const icons: Record<string, React.ReactNode> = {
                    twitter: <Twitter size={18} />,
                    linkedin: <Linkedin size={18} />,
                    github: <Github size={18} />,
                  };
                  return (
                    <a
                      key={social}
                      href="#"
                      className="p-3 rounded-xl border border-slate-200 dark:border-slate-800/80 bg-white/40 dark:bg-slate-950/40 text-slate-600 dark:text-slate-400 hover:text-sky-500 dark:hover:text-sky-500 hover:border-sky-500/30 dark:hover:border-sky-500/30 transition-all cursor-pointer"
                      aria-label={`NovaTech ${social}`}
                    >
                      {icons[social]}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <div className="p-8 md:p-10 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 bg-white/40 dark:bg-slate-950/40 backdrop-blur-md shadow-xl relative">
              <AnimatePresence>
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute inset-0 z-10 rounded-3xl bg-white/95 dark:bg-slate-950/95 backdrop-blur-md flex flex-col items-center justify-center p-8 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0.5, rotate: -45 }}
                      animate={{ scale: 1, rotate: 0 }}
                      className="p-4 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 mb-6"
                    >
                      <CheckCircle2 size={40} />
                    </motion.div>
                    <h3 className="text-2xl font-sans font-black text-slate-900 dark:text-white">
                      Message Transmitted Successfully!
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 font-sans font-light text-sm mt-3 max-w-md leading-relaxed">
                      Thank you for contacting NovaTech. Our core architecture and strategy teams will review your submission and respond within 24 operational hours.
                    </p>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="mt-8 px-6 py-3 rounded-xl bg-slate-900 text-white dark:bg-sky-500 dark:text-slate-950 font-sans font-semibold text-xs hover:opacity-90 transition-all cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="form-name"
                      className="text-xs font-sans font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="form-name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Marcus Aurelius"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/50 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-sm font-sans"
                    />
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="form-email"
                      className="text-xs font-sans font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="form-email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. marcus@rome.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/50 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-sm font-sans"
                    />
                  </div>
                </div>

                {/* Subject dropdown */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="form-subject"
                    className="text-xs font-sans font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider"
                  >
                    Subject of Inquiry
                  </label>
                  <select
                    id="form-subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/50 text-slate-900 dark:text-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-sm font-sans"
                  >
                    <option value="New Project Inquiry">New Project Inquiry</option>
                    <option value="Technical Support">Technical Support</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>

                {/* Message text area */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="form-message"
                    className="text-xs font-sans font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="form-message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details about your project timeline and requirements..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/50 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-sm font-sans resize-none leading-relaxed"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl text-sm font-sans font-bold text-white dark:text-slate-950 bg-slate-900 dark:bg-sky-500 hover:opacity-95 active:scale-95 transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="h-5 w-5 rounded-full border-2 border-white/30 border-t-white dark:border-slate-950/30 dark:border-t-slate-950 animate-spin" />
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send size={15} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
