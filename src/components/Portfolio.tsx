import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FolderGit2, ArrowUpRight, Code } from "lucide-react";
import { Project } from "../types";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<string>("All");

  const tabs = ["All", "FinTech", "HealthTech", "AI & ML", "E-commerce"];

  const projects: Project[] = [
    {
      id: "1",
      title: "Vanguard FinTech Dashboard",
      category: "FinTech",
      description: "A high-performance real-time data analytical suite handling complex institutional assets with custom D3 visualizations.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD522MS4UezhATzrrInoj_I0Ewt2MmbVGbZl5zac_WdexzbHl94CkhoRBQWceFuYb0Qgrjzo_m3sqPVB-LWfwZ7MnZUIiweDKM7zEuqudIk3WdzgZJUQChq2zUmnzM2XzJlOtVZEZVWoVSJgNIqFp0SExvN6noRvfTl7pnti_cfJ2CH0FGkZ0QfW9x34PTtPb9DB-J10so-zhDWBIdg7JL7scD7UAwqDZWaWNhzndCsIUJRHma07IS71SVnNUgtliq_HOZR4IrMIAg",
      tags: ["React", "D3.js", "AWS"],
    },
    {
      id: "2",
      title: "Nexus AI Assistant",
      category: "AI & ML",
      description: "A conversational enterprise operations assistant trained to crawl proprietary databases and execute automated processes safely.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQbHjAILe0Qxgq2ZfiY2cdvS8RJINprglhm-MMgJpKqbc_25Llt8pSYXMhsA-nHb1FEqUocZsmNWxM7GtXCLc8IzLC85EaAlYf4Lb1sY5ogQ7_5KH6kXfTXInPiJv9pmBkz3xHdcoX3CBse9lyBcrmcbEXHTBgm3T0SkYI_u4_VAAVww9rsFXRMC7YLhf6iVyl4OgHlklZyM0k8uz0uh8xyHLtKes9PSDUFdrXEUFWGIXOKJFz_RSWxG5m-Xf2epy0Ldbyp2Pqkp8",
      tags: ["Python", "LLM", "RAG"],
    },
    {
      id: "3",
      title: "Aura E-Commerce",
      category: "E-commerce",
      description: "A headless global retail experience engineered with static site generation for instant pages, real-time stock sync, and Stripe.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCIf6GznTl247R6wH3uUk6O3GuOmspOAeG63AE8cJ1NMhfUn1VrYhbHSbTiw0-hGVsZFQBpk1udRecQSODWbiD6KeCiIwT1L6PrGBhkfyVLpcapD2Gd4hk4h_WCZC5unnDYW4PAJv1SmZXU3CNuyROA23I7EXoFcOO0KDmKopv6xaTtoAevky-i5bFcJF44cOkYod7es6t48S2pdRf9Fpp30cP5C4YyJaZ8ixPb-GCH6lwveliWRir3FZQw2EoDVLk64u6JxFzAa6o",
      tags: ["Next.js", "Stripe", "GraphQL"],
    },
    {
      id: "4",
      title: "St. Jude Hospital CRM",
      category: "HealthTech",
      description: "Secure, HIPAA-compliant patient record visualizer and intake manager integrating biometric scan feeds and appointment routing.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBi8p7--5T-7FRJI1gTY2u1UMrAC_WwttISbn23tjav0tvBiQx_LhaLKmH6aGSCaCV_dcQ_dhGeBpRX5OepCCGpRIWOXX5sV_MLETCJUfcUlxq5gOi4Uy2YpUSA12vcCc4cNWZiGugzPpzMG7bRmP6nUX_Xcn8XP6SjBWRfWMBV906t_o5EHZ7OXp_IqqArJ3oGxI4Ms208B35BweVDJtksUc-PQY5MiklX9GQkU1KuwPMLRjixO2-koIrlzra4M2imnVSUIpVFCuw",
      tags: ["Node.js", "PostgreSQL", "HIPAA"],
    }
  ];

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden bg-slate-50/30 dark:bg-slate-900/5">
      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/20 bg-sky-500/5 text-xs font-sans font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-4">
              <FolderGit2 size={12} />
              <span>Selected Works</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tight text-slate-900 dark:text-white">
              Engineering Excellence
            </h2>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200/50 dark:border-slate-800/50 shadow-sm">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-xs md:text-sm font-sans font-semibold rounded-xl transition-all cursor-pointer ${
                  activeTab === tab
                    ? "bg-slate-900 text-white dark:bg-sky-500 dark:text-slate-950 shadow"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Bento/Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/50 dark:border-slate-800/50 bg-white dark:bg-slate-950/40 backdrop-blur-md shadow-sm hover:shadow-md transition-all duration-300"
              >
                {/* Project Image Container */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-900 border-b border-slate-200/50 dark:border-slate-800/50">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-500 text-slate-950 font-sans font-bold text-xs">
                      View Project Summary
                      <ArrowUpRight size={13} />
                    </span>
                  </div>
                </div>

                {/* Info Container */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-sans font-black tracking-widest text-sky-500">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-sans font-bold text-slate-900 dark:text-white mt-1 group-hover:text-sky-500 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 font-sans font-light text-sm mt-3 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2 mt-6 pt-5 border-t border-slate-100 dark:border-slate-800/60">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg border border-slate-200/40 dark:border-slate-800/40 bg-slate-50 dark:bg-slate-900/40 font-mono text-[10px] text-slate-500 dark:text-slate-400"
                      >
                        <Code size={10} className="text-sky-500" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Ready to build custom works card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 p-8 md:p-12 rounded-3xl bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-700 text-white shadow-xl shadow-sky-500/10 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="max-w-2xl text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-sans font-extrabold tracking-tight">
              Ready to build the next big thing?
            </h3>
            <p className="mt-3 text-white/80 font-sans font-light text-sm md:text-base leading-relaxed">
              We bring enterprise-grade scalability, fortified threat-defense, and premium interface designs to your digital project.
            </p>
          </div>
          <button
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="whitespace-nowrap px-8 py-4 rounded-xl font-sans font-bold bg-white text-slate-950 hover:bg-slate-50 active:scale-95 transition-all shadow-md cursor-pointer"
          >
            Schedule Consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
}
