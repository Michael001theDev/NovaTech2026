import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShieldAlert, X } from "lucide-react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user already dismissed it
    const dismissed = localStorage.getItem("novatech_cookies_dismissed");
    if (!dismissed) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 3000); // Appear after 3 seconds for elegant UX
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("novatech_cookies_dismissed", "true");
    setIsVisible(false);
  };

  const handleManage = () => {
    // Elegant toast acknowledgement
    alert("Cookie configuration overlay would open here in standard settings environments.");
    localStorage.setItem("novatech_cookies_dismissed", "true");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          id="cookie-banner-container"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.95 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-6 right-6 left-6 md:left-auto md:max-w-md z-40 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md shadow-2xl flex flex-col gap-4"
        >
          {/* Header */}
          <div className="flex items-start gap-3">
            <div className="p-2 bg-sky-500/10 dark:bg-sky-500/20 text-sky-500 rounded-xl mt-0.5">
              <ShieldAlert size={18} />
            </div>
            <div className="flex-grow">
              <h4 className="text-sm font-sans font-bold text-slate-900 dark:text-white">
                Privacy Assurance
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-sans font-light mt-1.5 leading-relaxed">
                We use functional and analytical cookies to ensure you get the best experience on NovaTech.
              </p>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="text-slate-400 hover:text-slate-700 dark:hover:text-white cursor-pointer"
              aria-label="Dismiss banner"
            >
              <X size={15} />
            </button>
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              onClick={handleManage}
              className="px-4 py-2 text-xs font-sans font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 rounded-xl transition-all cursor-pointer"
            >
              Manage
            </button>
            <button
              onClick={handleAcceptAll}
              className="px-4 py-2 text-xs font-sans font-bold text-white dark:text-slate-950 bg-slate-900 dark:bg-sky-500 hover:opacity-90 rounded-xl transition-all shadow-md cursor-pointer"
            >
              Accept All
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
