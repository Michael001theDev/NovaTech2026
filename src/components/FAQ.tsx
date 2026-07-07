import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HelpCircle, ChevronDown } from "lucide-react";
import { FAQItem } from "../types";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const faqs: FAQItem[] = [
    {
      id: "1",
      question: "How does NovaTech ensure data security in custom builds?",
      answer: "Security is baked into our development lifecycle, not bolted on. We implement zero-trust network credentials, end-to-end payload encryption (TLS 1.3), automated static code vulnerability scanning, and isolated container structures. Every product we compile is structured to comply with strict SOC2 and HIPAA privacy guidelines right out of the gate.",
    },
    {
      id: "2",
      question: "What is the typical timeline for a full-scale digital transformation?",
      answer: "Depending on scope, a typical MVP or custom product development run takes 6 to 12 weeks. We split projects into structured 1-2 week agile development sprints, giving you interactive test builds every week. This keeps the trajectory perfectly visible, eliminates surprises, and ensures massive project acceleration.",
    },
    {
      id: "3",
      question: "Do you provide ongoing support after project completion?",
      answer: "Absolutely. Every partnership includes a complimentary 30-day post-launch support buffer to tackle any immediate scale or usage adjustments. Afterward, clients can seamlessly transition to our custom Maintenance agreements, ensuring continuous uptime supervision, security patch integration, and feature development support.",
    },
  ];

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-24 relative overflow-hidden bg-white/10 dark:bg-slate-950/10">
      <div className="max-w-4xl mx-auto px-6 w-full">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/20 bg-sky-500/5 text-xs font-sans font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-4">
            <HelpCircle size={12} />
            <span>Common Queries</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 font-sans font-light">
            Answers to high-level inquiries about our development timelines, custom build protocols, and support programs.
          </p>
        </div>

        {/* FAQs list */}
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-slate-200/50 dark:border-slate-800/50 bg-white/40 dark:bg-slate-950/40 backdrop-blur-md overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-5 md:py-6 flex items-center justify-between gap-4 text-left transition-colors hover:bg-slate-500/5 cursor-pointer"
                >
                  <span className="text-sm md:text-base font-sans font-bold text-slate-900 dark:text-white">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-slate-500"
                  >
                    <ChevronDown size={18} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-2 text-slate-600 dark:text-slate-400 font-sans font-light text-xs md:text-sm leading-relaxed border-t border-slate-100 dark:border-slate-900/50">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
