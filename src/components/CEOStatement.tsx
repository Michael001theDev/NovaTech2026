import { motion } from "motion/react";
import { Quote, Sparkles, ShieldCheck, Cpu } from "lucide-react";

export default function CEOStatement() {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-50/20 dark:bg-slate-950/20">
      {/* Soft decorative background blurs */}
      <div className="absolute top-1/2 left-1/10 w-80 h-80 bg-[#1cb2b9]/10 dark:bg-[#1cb2b9]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/10 right-1/10 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Avatar / Profile Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group w-full max-w-sm">
              {/* Elegant floating abstract badge background */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#1cb2b9] to-blue-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              
              <div className="relative p-8 md:p-10 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 bg-white dark:bg-slate-950 backdrop-blur-md shadow-2xl flex flex-col items-center text-center">
                
                {/* Profile Badge Loop */}
                <div className="h-28 w-28 rounded-full bg-gradient-to-tr from-[#1cb2b9] to-blue-600 p-1 flex items-center justify-center shadow-lg mb-6">
                  <div className="h-full w-full rounded-full bg-slate-900 dark:bg-slate-950 flex items-center justify-center text-transparent bg-clip-text bg-gradient-to-tr from-[#1cb2b9] to-sky-400 font-display font-extrabold text-3xl tracking-widest border border-white/5">
                    OM
                  </div>
                </div>

                <h3 className="text-xl md:text-2xl font-display font-extrabold text-slate-900 dark:text-white">
                  Okeke Michael
                </h3>
                <span className="text-xs font-sans font-semibold text-[#1cb2b9] uppercase tracking-widest mt-1 block">
                  Founder & CEO, NovaTech
                </span>
                
                <div className="h-px w-20 bg-slate-200 dark:bg-slate-800 my-4" />
                
                <p className="text-xs text-slate-500 dark:text-slate-400 font-sans font-light leading-relaxed">
                  Directing premium technology strategies, cyber-defense implementations, and user-centric interfaces.
                </p>

                {/* Badges */}
                <div className="flex items-center gap-2 mt-6">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-500/10 dark:bg-emerald-500/5 text-emerald-600 dark:text-emerald-400 font-sans font-bold text-[10px]">
                    <ShieldCheck size={11} /> Verified Leader
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-blue-500/10 dark:bg-blue-500/5 text-blue-600 dark:text-blue-400 font-sans font-bold text-[10px]">
                    <Cpu size={11} /> Systems Architect
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Statement Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#1cb2b9]/20 bg-[#1cb2b9]/5 text-xs font-sans font-semibold uppercase tracking-wider text-[#1cb2b9] mb-6 w-fit">
              <Sparkles size={12} className="animate-pulse" />
              <span>Executive Message</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-slate-900 dark:text-white mb-6">
              A Message from Our Leadership
            </h2>

            <div className="relative">
              {/* Giant elegant background quotation mark */}
              <div className="absolute -top-6 -left-4 text-[#1cb2b9]/10 pointer-events-none">
                <Quote size={80} className="stroke-[3]" />
              </div>

              <blockquote className="relative z-10 pl-6 border-l-2 border-[#1cb2b9]/40 space-y-4">
                <p className="text-base md:text-lg text-slate-700 dark:text-slate-300 font-sans font-light leading-relaxed italic">
                  "At NovaTech, we believe that technology is more than just raw code—it is an art of absolute precision, robust threat mitigation, and transformative digital design."
                </p>
                <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 font-sans font-light leading-relaxed">
                  "Surulere and the broader Nigerian technology space represent an extraordinary crucible of innovation and intellect. Our mission at NovaTech is to align this localized agility with enterprise-grade architectures that scale worldwide. We do not simply build components; we secure, optimize, and engineer the digital standards of tomorrow."
                </p>
              </blockquote>
            </div>

            {/* Signature Block */}
            <div className="mt-8 pl-6 flex flex-col">
              <span className="font-display font-bold text-slate-900 dark:text-white text-lg">
                Okeke Michael
              </span>
              <span className="text-xs font-sans text-slate-500 dark:text-slate-400">
                Founder, Chief Executive Officer
              </span>
              <span className="text-[10px] font-mono text-[#1cb2b9] uppercase tracking-widest mt-1">
                NovaTech Global Operations
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
