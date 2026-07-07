import { useState } from "react";
import { motion } from "motion/react";
import {
  Laptop,
  Smartphone,
  PenTool,
  Brain,
  Shield,
  Cloud,
  Wrench,
  HelpCircle,
  Check,
  Zap,
} from "lucide-react";
import { PricingPlan } from "../types";

export default function Services() {
  const [isYearly, setIsYearly] = useState(false);

  const capabilities = [
    {
      title: "Web Development",
      description: "Custom web applications engineered with cutting-edge frameworks for lightning speed, extreme responsiveness, and massive scalability.",
      icon: <Laptop className="text-sky-500" size={20} />,
    },
    {
      title: "Mobile App Dev",
      description: "High-performance iOS and Android applications utilizing React Native and Swift/Kotlin for flawless, native-feeling experiences.",
      icon: <Smartphone className="text-blue-500" size={20} />,
    },
    {
      title: "UI/UX Design",
      description: "Elegant, immersive digital designs and interfaces that maximize engagement, prioritize clarity, and embody modern craft.",
      icon: <PenTool className="text-indigo-500" size={20} />,
    },
    {
      title: "AI Solutions",
      description: "Integrating modern LLMs, predictive modeling, and agentic AI engines to automate processes and unlock deep data intelligence.",
      icon: <Brain className="text-violet-500" size={20} />,
    },
    {
      title: "Cybersecurity",
      description: "Military-grade penetration testing, infrastructure hardening, and zero-trust protocol audits to ensure robust data defense.",
      icon: <Shield className="text-emerald-500" size={20} />,
    },
    {
      title: "Cloud Services",
      description: "Flawless DevOps engineering, AWS/GCP migration, containerization with Docker, and cloud-native auto-scaling structures.",
      icon: <Cloud className="text-cyan-500" size={20} />,
    },
    {
      title: "Continuous Maintenance",
      description: "Round-the-clock server monitoring, routine package upgrades, proactive security patching, and live technical assistance.",
      icon: <Wrench className="text-rose-500" size={20} />,
    },
    {
      title: "IT Consulting",
      description: "Strategic fractional CTO advisory, high-level technology planning, database schema modeling, and scale consulting.",
      icon: <HelpCircle className="text-amber-500" size={20} />,
    },
  ];

  const pricingPlans: PricingPlan[] = [
    {
      name: "Starter",
      price: isYearly ? "3,900" : "4,900",
      period: "mo",
      description: "Perfect for early-stage startups needing continuous design & development velocity.",
      features: [
        "1 active request at a time",
        "Average 48-hour delivery turnarounds",
        "Senior developer + UI/UX designer",
        "Weekly status updates & builds",
        "Unlimited revisions",
        "Standard email support",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: isYearly ? "9,900" : "12,500",
      period: "mo",
      description: "Designed for growth-focused enterprises requiring higher delivery volumes.",
      features: [
        "2 active requests concurrently",
        "Priority 24-48 hour delivery",
        "Principal systems engineer",
        "Bi-weekly strategic sync sessions",
        "Real-time Slack collaboration channel",
        "Unlimited revisions & requests",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "yr",
      description: "Bespoke dedicated squad architectures for massive compliance & scale requirements.",
      features: [
        "Dedicated 3-5 person specialist squad",
        "24/7 high-priority SLA response",
        "Custom roadmap & architecture",
        "SOC2 & GDPR security compliance",
        "Fractional CTO strategic oversight",
        "Multi-platform backend synchronization",
      ],
      popular: false,
    },
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Core Capabilities Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/20 bg-sky-500/5 text-xs font-sans font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-4">
            <span>Specialized Capabilities</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Engineering the Digital Frontier
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 font-sans font-light">
            We provide deep technological expertise across all digital disciplines, delivering clean code and modular solutions.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {capabilities.map((cap, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="p-6 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 bg-white/40 dark:bg-slate-950/40 backdrop-blur-md shadow-sm hover:shadow-md hover:border-sky-500/30 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="p-3 bg-slate-50 dark:bg-slate-900/80 rounded-xl w-fit border border-slate-100 dark:border-slate-800 mb-4 group-hover:scale-105 transition-transform">
                  {cap.icon}
                </div>
                <h3 className="text-lg font-sans font-semibold text-slate-900 dark:text-white mb-2">
                  {cap.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 font-sans font-light text-xs md:text-sm leading-relaxed">
                  {cap.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pricing Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Scalable Pricing plans
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 font-sans font-light mb-8">
            Clear, transparent, and flexible engagement models structured for modern business demands.
          </p>

          {/* Toggle Button */}
          <div className="inline-flex items-center gap-3 p-1 rounded-full border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/50 backdrop-blur-sm shadow-sm">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-4 py-1.5 text-xs font-sans font-semibold rounded-full transition-all cursor-pointer ${
                !isYearly
                  ? "bg-slate-900 text-white dark:bg-sky-500 dark:text-slate-950 shadow"
                  : "text-slate-600 dark:text-slate-400"
              }`}
            >
              Monthly billing
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-4 py-1.5 text-xs font-sans font-semibold rounded-full transition-all cursor-pointer ${
                isYearly
                  ? "bg-slate-900 text-white dark:bg-sky-500 dark:text-slate-950 shadow"
                  : "text-slate-600 dark:text-slate-400"
              }`}
            >
              Yearly (Save 20%)
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className={`p-8 rounded-3xl border backdrop-blur-md shadow-sm relative flex flex-col justify-between transition-all duration-300 ${
                plan.popular
                  ? "border-sky-500 bg-sky-500/[0.04] dark:bg-sky-500/[0.02] shadow-sky-500/5 ring-1 ring-sky-500 scale-105 lg:scale-105 z-10"
                  : "border-slate-200/50 dark:border-slate-800/50 bg-white/40 dark:bg-slate-950/40"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-sky-500 text-slate-950 text-[10px] font-sans font-black tracking-wider uppercase px-3.5 py-1 rounded-full shadow-md flex items-center gap-1">
                  <Zap size={10} className="fill-slate-950" />
                  Most Popular
                </div>
              )}

              <div>
                <h3 className="text-xl font-sans font-bold text-slate-900 dark:text-white">
                  {plan.name}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 min-h-[40px] font-sans font-light leading-relaxed">
                  {plan.description}
                </p>

                {/* Price Display */}
                <div className="my-6 flex items-baseline">
                  {plan.price !== "Custom" && (
                    <span className="text-sm font-sans font-bold text-slate-500 dark:text-slate-400 mr-1">
                      ₦
                    </span>
                  )}
                  <span className="text-4xl md:text-5xl font-sans font-black tracking-tight text-slate-900 dark:text-white">
                    {plan.price}
                  </span>
                  {plan.price !== "Custom" && (
                    <span className="text-sm font-sans font-medium text-slate-500 dark:text-slate-400 ml-1">
                      /{plan.period}
                    </span>
                  )}
                </div>

                {/* Features List */}
                <div className="space-y-3 pt-4 border-t border-slate-200/50 dark:border-slate-800/50">
                  {plan.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3">
                      <div className="p-0.5 rounded-full bg-sky-500/10 dark:bg-sky-500/20 text-sky-600 dark:text-sky-400 mt-0.5">
                        <Check size={12} className="stroke-[3]" />
                      </div>
                      <span className="text-sm text-slate-600 dark:text-slate-300 font-sans font-light leading-snug">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action CTA */}
              <button
                className={`w-full mt-8 py-3.5 rounded-xl text-sm font-sans font-bold transition-all active:scale-95 cursor-pointer ${
                  plan.popular
                    ? "bg-sky-500 text-slate-950 hover:bg-sky-400 shadow-lg shadow-sky-500/15"
                    : "bg-slate-900 text-white dark:bg-slate-900 dark:text-slate-100 hover:bg-slate-800 dark:hover:bg-slate-800"
                }`}
              >
                {plan.price === "Custom" ? "Contact Strategy Team" : "Get Started Now"}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
