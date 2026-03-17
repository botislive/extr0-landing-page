"use client";
import { motion } from "framer-motion";
import { TrendingUp, DollarSign, AlertTriangle } from "lucide-react";

const problems = [
  {
    icon: DollarSign,
    color: "text-red-400",
    bg: "bg-red-500/10",
    border: "border-red-500/15",
    title: "GPT-4 for simple tasks",
    cost: "$0.030 / 1K tokens",
    badge: "Premium model",
    badgeColor: "bg-red-500/10 text-red-400 border-red-500/20",
    desc: "Sending basic classification tasks to GPT-4",
    arrow: "bg-red-400",
  },
  {
    icon: TrendingUp,
    color: "text-green-400",
    bg: "bg-green-500/10",
    border: "border-green-500/15",
    title: "Optimal model selected",
    cost: "$0.0004 / 1K tokens",
    badge: "Extr0 optimized",
    badgeColor: "bg-green-500/10 text-green-400 border-green-500/20",
    desc: "Same task, 75× cheaper with automatic routing",
    arrow: "bg-green-400",
  },
];

const stats = [
  { value: "~$15K", label: "Avg monthly overspend on AI", color: "text-red-400" },
  { value: "73%", label: "Requests don't need premium models", color: "text-amber-400" },
  { value: "70%", label: "Cost reduction with Extr0", color: "text-green-400" },
];

export default function ProblemSection() {
  return (
    <section id="product" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card border border-red-500/20 mb-6">
            <AlertTriangle size={12} className="text-red-400" />
            <span className="text-xs font-medium text-red-400">The Problem</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.02em] leading-[1.15] text-white mb-6">
            AI APIs Are Expensive —{" "}
            <br className="hidden md:block" />
            <span className="text-gradient-blue">And Most Requests Don&apos;t Need Premium Models</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Developers default to the most powerful model for every request, regardless of complexity.
            This results in massive unnecessary spend on infrastructure.
          </p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {stats.map((stat, i) => (
            <div key={i} className="glass-card rounded-2xl p-6 text-center">
              <div className={`text-4xl font-extrabold tracking-tight mb-2 ${stat.color}`}>{stat.value}</div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Comparison cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {problems.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.15 * i, ease: [0.4, 0, 0.2, 1] }}
                className={`glass-card rounded-2xl p-6 border ${p.border} relative overflow-hidden`}
              >
                <div className="shimmer-line absolute inset-0 pointer-events-none" />
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-10 h-10 rounded-xl ${p.bg} flex items-center justify-center ${p.border} border`}>
                    <Icon size={18} className={p.color} />
                  </div>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full border ${p.badgeColor}`}>
                    {p.badge}
                  </span>
                </div>
                <h3 className="text-white font-semibold text-base mb-1">{p.title}</h3>
                <p className="text-slate-400 text-sm mb-4">{p.desc}</p>
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${p.arrow}`} />
                  <span className={`font-mono text-sm font-semibold ${p.color}`}>{p.cost}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom explainer line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center text-slate-500 text-sm mt-10"
        >
          Extr0 analyzes each request in real-time and routes it to the optimal model automatically —
          <span className="text-slate-300"> no code changes required.</span>
        </motion.p>
      </div>
    </section>
  );
}
