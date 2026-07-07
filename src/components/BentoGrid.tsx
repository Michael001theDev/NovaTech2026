import { motion } from "motion/react";
import { Sparkles, Activity, ShieldCheck, Zap, HeartHandshake } from "lucide-react";

export default function BentoGrid() {
  const cards = [
    {
      title: "Unmatched Innovation",
      description:
        "Our dedicated R&D division actively prototypes next-generation frameworks and AI interfaces, keeping your products steps ahead of standard market expectations. We don't just use industry tech; we research, contribute, and build open-source layers.",
      icon: <Sparkles className="text-sky-500" size={24} />,
      size: "md:col-span-2",
      color: "from-sky-500/10 to-indigo-500/5 dark:from-sky-500/5 dark:to-indigo-500/2",
    },
    {
      title: "Uptime Reliability",
      description:
        "99.9% uptime is our architectural default. Every system is built with automated failure recovery, replication, and load distribution.",
      icon: <Activity className="text-emerald-500" size={24} />,
      size: "md:col-span-1",
      color: "from-emerald-500/10 to-teal-500/5 dark:from-emerald-500/5 dark:to-teal-500/2",
    },
    {
      title: "Fortified Security",
      description:
        "Military-grade data encryption, zero-trust backend architectures, and SOC2-ready development protocols protect your proprietary databases.",
      icon: <ShieldCheck className="text-blue-500" size={24} />,
      size: "md:col-span-1",
      color: "from-blue-500/10 to-cyan-500/5 dark:from-blue-500/5 dark:to-cyan-500/2",
    },
    {
      title: "Fast Delivery",
      description:
        "Agile sprints yield continuous development. We believe in weekly interactive product builds, transparent progress tracking, and no delays.",
      icon: <Zap className="text-amber-500" size={24} />,
      size: "md:col-span-1",
      color: "from-amber-500/10 to-orange-500/5 dark:from-amber-500/5 dark:to-orange-500/2",
    },
    {
      title: "Satisfied Clients",
      description:
        "Over 95% of our client partnerships expand into long-term technology roadmaps, proving our commitment as true product co-pilots.",
      icon: <HeartHandshake className="text-rose-500" size={24} />,
      size: "md:col-span-1",
      color: "from-rose-500/10 to-red-500/5 dark:from-rose-500/5 dark:to-red-500/2",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-slate-50/50 dark:bg-slate-900/10 border-y border-slate-200/40 dark:border-slate-800/40">
      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Why Choose NovaTech?
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 font-sans font-light">
            We operate at the convergence of design, engineering, and security
            to offer superior technology that scales.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className={`${card.size} p-8 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 bg-gradient-to-br ${card.color} backdrop-blur-md shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col justify-between`}
            >
              <div>
                <div className="p-3 bg-white dark:bg-slate-900 rounded-2xl w-fit shadow-sm border border-slate-100 dark:border-slate-800/50 mb-6 group-hover:scale-105 transition-transform">
                  {card.icon}
                </div>
                <h3 className="text-xl font-sans font-bold text-slate-900 dark:text-white mb-3">
                  {card.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 font-sans font-light text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
