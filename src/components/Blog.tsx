import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calendar, Clock, ArrowRight, Rss, X } from "lucide-react";
import { BlogPost } from "../types";

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const posts: BlogPost[] = [
    {
      id: "1",
      title: "Navigating the Future of Decentralized Infrastructure",
      date: "March 12, 2024",
      category: "Infrastructure",
      snippet: "How peer-to-peer cloud compute nodes and global decentralized databases are solving single-point-of-failure bottlenecks for modern enterprise-grade scaling structures.",
      readTime: "7 min read",
    },
    {
      id: "2",
      title: "The Ethics of Generative AI in Creative Workflows",
      date: "Feb 28, 2024",
      category: "Artificial Intelligence",
      snippet: "Establishing transparent training structures and fair intellectual property schemas to balance creative autonomy with high-speed LLM model generation workflows.",
      readTime: "5 min read",
    },
    {
      id: "3",
      title: "Why Glassmorphism is Returning to Modern Web Design",
      date: "Feb 15, 2024",
      category: "UI & UX Design",
      snippet: "Exploring how GPU-accelerated backdrop filters, delicate translucent surface overlays, and high-contrast glowing elements are redefining current layout aesthetics.",
      readTime: "4 min read",
    },
  ];

  const fullArticles: Record<string, string> = {
    "1": `As modern tech scales, single-point-of-failure vectors represent a massive liability. Decentralized infrastructure moves past traditional server hierarchies into peer-to-peer cloud networks. By spreading computing demand across worldwide, cryptographically verified nodes, systems avoid unexpected regional downtime entirely. 

Furthermore, global state replication and edge databases ensure data is served with less than 15ms latency anywhere on Earth. NovaTech's research and development team is pioneering decentralized multi-platform backends, providing clients with robust systems that are virtually immune to service blackouts.`,
    "2": `Generative AI has shifted from a novelty to an essential development and artistic partner. However, integrating massive models brings compliance, intellectual property, and creative alignment debates. The key is structural transparency. 

By building proprietary models trained on verified, licensed datasets or fine-tuning existing open architectures under clear open-source covenants, companies can harness the speed of AI while protecting IP. We look at the practical frameworks to implement AI-powered enhancements with perfect security, ensuring ethical engineering leads the way.`,
    "3": `Design trends are circular, and glassmorphism—the visual layout characterized by blurred translucent panels—is making a highly sophisticated return. This isn't just about mimicry; it's about hardware progression. 

With modern browsers natively utilizing GPU-accelerated CSS backdrop-blur properties, web designs can now sustain multiple high-fidelity translucent sheets without degrading performance. When combined with micro-animations, strong responsive layouts, and strict light/dark theme variables, glassmorphic interfaces establish a sense of depth, precision, and elegance that standard solid panels cannot reproduce.`,
  };

  return (
    <section id="blog" className="py-24 relative overflow-hidden bg-slate-50/30 dark:bg-slate-900/5">
      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/20 bg-sky-500/5 text-xs font-sans font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-4">
            <Rss size={12} />
            <span>The Tech Pulse</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Our Insights
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 font-sans font-light">
            Stay ahead of the technology curve with our latest research, engineering insights, and design deep-dives.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 bg-white/40 dark:bg-slate-950/40 backdrop-blur-md shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <span className="text-[10px] uppercase font-sans font-black tracking-widest text-sky-500 block mb-3">
                  {post.category}
                </span>
                <h3 className="text-lg font-sans font-bold text-slate-900 dark:text-white mb-3 group-hover:text-sky-500 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 font-sans font-light text-xs md:text-sm leading-relaxed mb-6 line-clamp-3">
                  {post.snippet}
                </p>
              </div>

              <div>
                {/* Meta Details */}
                <div className="flex items-center gap-4 text-[11px] text-slate-400 dark:text-slate-500 mb-4 font-sans font-medium">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {post.readTime}
                  </span>
                </div>

                <button
                  onClick={() => setSelectedPost(post)}
                  className="inline-flex items-center gap-1.5 text-xs font-sans font-bold text-slate-900 dark:text-white group-hover:text-sky-500 transition-colors cursor-pointer"
                >
                  Read Article
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Article Detail Modal Overlay */}
      <AnimatePresence>
        {selectedPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPost(null)}
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-2xl rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-6 md:p-8 shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 p-2 rounded-full border border-slate-200 dark:border-slate-800 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X size={16} />
              </button>

              <span className="text-[10px] uppercase font-sans font-black tracking-widest text-sky-500 block mb-2">
                {selectedPost.category}
              </span>
              <h3 className="text-xl md:text-2xl font-sans font-bold text-slate-900 dark:text-white mb-4 pr-6 leading-tight">
                {selectedPost.title}
              </h3>

              <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mb-6 pb-4 border-b border-slate-100 dark:border-slate-900">
                <span className="flex items-center gap-1">
                  <Calendar size={13} />
                  {selectedPost.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={13} />
                  {selectedPost.readTime}
                </span>
              </div>

              <div className="text-slate-600 dark:text-slate-300 font-sans font-light text-sm md:text-base leading-relaxed space-y-4">
                {fullArticles[selectedPost.id].split("\n\n").map((para, pIdx) => (
                  <p key={pIdx}>{para}</p>
                ))}
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-900 flex justify-end">
                <button
                  onClick={() => setSelectedPost(null)}
                  className="px-5 py-2.5 rounded-xl bg-slate-900 text-white dark:bg-sky-500 dark:text-slate-950 text-xs font-sans font-bold hover:opacity-90 transition-all cursor-pointer"
                >
                  Close Article
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
