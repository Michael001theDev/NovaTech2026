import { motion } from "motion/react";
import { ArrowUpRight, Sparkles } from "lucide-react";

interface HeroProps {
  scrollToSection: (id: string) => void;
}

export default function Hero({ scrollToSection }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden"
    >
      {/* Decorative gradient blur rings */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-sky-500/10 dark:bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col items-center text-center">
        {/* Innovation in Motion Pill */}
        <motion.div
          id="hero-pill"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-sky-500/20 bg-sky-500/5 text-xs font-sans font-semibold tracking-wider uppercase text-sky-600 dark:text-sky-400 mb-8"
        >
          <Sparkles size={13} className="animate-spin-slow text-sky-500" />
          <span>Innovation in Motion</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          id="hero-headline"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-sans font-bold tracking-tight text-slate-900 dark:text-white max-w-5xl leading-[1.1] mb-6"
        >
          Building the Future with{" "}
          <span className="bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
            Innovative Technology
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          id="hero-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl font-sans font-light leading-relaxed mb-10"
        >
          NovaTech delivers high-end digital solutions that transform complex
          challenges into elegant, technical achievements. We don't just build
          software; we engineer tomorrow.
        </motion.p>

        {/* Buttons */}
        <motion.div
          id="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <button
            onClick={() => scrollToSection("services")}
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-sans font-semibold text-white bg-slate-900 dark:bg-sky-500 dark:text-slate-950 hover:opacity-90 active:scale-95 transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Get Started</span>
            <ArrowUpRight size={18} />
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-sans font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 hover:bg-slate-200/50 dark:hover:bg-slate-800/80 active:scale-95 transition-all flex items-center justify-center cursor-pointer"
          >
            Contact Us
          </button>
        </motion.div>
      </div>
    </section>
  );
}
