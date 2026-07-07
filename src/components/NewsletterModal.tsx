import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, X, Check, ArrowRight, Sparkles } from "lucide-react";

export default function NewsletterModal() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const subscribedOrDismissed = localStorage.getItem("novatech_newsletter_subscribed");
    if (!subscribedOrDismissed) {
      // Show the newsletter subscription slide-in after 8 seconds
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 8000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    // Simulate database update
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      localStorage.setItem("novatech_newsletter_subscribed", "true");

      // Hide modal after success message
      setTimeout(() => {
        setIsVisible(false);
      }, 4000);
    }, 1500);
  };

  const handleDismiss = () => {
    localStorage.setItem("novatech_newsletter_subscribed", "dismissed");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop blur overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleDismiss}
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            className="relative w-full max-w-lg rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-8 md:p-10 shadow-2xl z-10 overflow-hidden"
          >
            {/* Background design accents */}
            <div className="absolute -top-12 -right-12 w-36 h-36 bg-sky-500/10 dark:bg-sky-500/5 rounded-full blur-2xl pointer-events-none" />

            <button
              onClick={handleDismiss}
              className="absolute top-4 right-4 p-2 rounded-full border border-slate-200 dark:border-slate-800 text-slate-400 hover:text-slate-700 dark:hover:text-white transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X size={15} />
            </button>

            {/* Main content view */}
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="p-3 bg-sky-500/10 dark:bg-sky-500/20 text-sky-500 rounded-2xl mb-6">
                    <Sparkles size={24} className="animate-pulse" />
                  </div>

                  <h3 className="text-xl md:text-2xl font-sans font-black text-slate-900 dark:text-white leading-tight">
                    Master the Tech Landscape
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 font-sans font-light text-xs md:text-sm mt-3 leading-relaxed max-w-sm mb-8">
                    Join 15,000+ engineers receiving our premium weekly briefing on AI, Web3, and high-end UI/UX design.
                  </p>

                  <form onSubmit={handleSubscribe} className="w-full flex flex-col sm:flex-row items-center gap-3">
                    <div className="relative w-full">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your email address"
                        className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-sm font-sans"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-xs font-sans font-bold text-white dark:text-slate-950 bg-slate-900 dark:bg-sky-500 hover:opacity-90 active:scale-95 transition-all flex items-center justify-center gap-1.5 whitespace-nowrap cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <div className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white dark:border-slate-950/30 dark:border-t-slate-950 animate-spin" />
                      ) : (
                        <>
                          <span>Subscribe Now</span>
                          <ArrowRight size={13} />
                        </>
                      )}
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center py-6"
                >
                  <div className="p-3.5 bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 rounded-full mb-6">
                    <Check size={24} className="stroke-[3]" />
                  </div>
                  <h3 className="text-xl font-sans font-black text-slate-900 dark:text-white">
                    You're Subscribed!
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 font-sans font-light text-sm mt-3 max-w-xs leading-relaxed">
                    Welcome aboard. Our premium weekly tech briefings are now headed to your inbox. Stay tuned!
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
