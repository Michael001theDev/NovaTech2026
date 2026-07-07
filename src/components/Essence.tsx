import { motion } from "motion/react";
import { Award, Eye, Shield, Cpu } from "lucide-react";

export default function Essence() {
  const cards = [
    {
      title: "Our Mission",
      description:
        "To engineer state-of-the-art technological solutions that empower organizations to lead in a connected, intelligent world.",
      icon: <Award className="text-sky-500" size={24} />,
      color: "from-sky-500/10 to-blue-500/10 dark:from-sky-500/5 dark:to-blue-500/5",
    },
    {
      title: "Our Vision",
      description:
        "To set the standard for digital craft, creating technologies that seamlessly integrate with human needs and sustainable progress.",
      icon: <Eye className="text-blue-500" size={24} />,
      color: "from-blue-500/10 to-indigo-500/10 dark:from-blue-500/5 dark:to-indigo-500/5",
    },
    {
      title: "Our Values",
      description:
        "Precision, Trust, Innovation, and Accountability shape every line of code we write and every partnership we forge.",
      icon: <Shield className="text-indigo-500" size={24} />,
      color: "from-indigo-500/10 to-sky-500/10 dark:from-indigo-500/5 dark:to-sky-500/5",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Title Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/20 bg-sky-500/5 text-xs font-sans font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-4">
              <Cpu size={12} />
              <span>Core Philosophy</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tight text-slate-900 dark:text-white">
              Our Essence
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-sans font-light leading-relaxed">
              Rooted in precision and driven by innovation, we bridge the gap
              between human imagination and digital reality. We are craftsmen of
              the digital age, writing the systems that define tomorrow.
            </p>
          </div>
        </div>

        {/* Mission Vision Values Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className={`p-8 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 bg-gradient-to-br ${card.color} backdrop-blur-md shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col`}
            >
              <div className="p-3.5 bg-white dark:bg-slate-900 rounded-2xl w-fit shadow-sm border border-slate-100 dark:border-slate-800 mb-6 group-hover:scale-110 transition-transform duration-300">
                {card.icon}
              </div>
              <h3 className="text-xl font-sans font-bold text-slate-900 dark:text-white mb-3">
                {card.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 font-sans font-light leading-relaxed flex-grow">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
