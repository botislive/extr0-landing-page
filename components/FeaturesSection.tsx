"use client";
import { motion } from "framer-motion";
import {
  GitBranch, DollarSign, Shield, BarChart2, Zap, Gauge
} from "lucide-react";

const features = [
  {
    icon: GitBranch,
    color: "text-blue-400",
    bg: "bg-blue-500/8",
    border: "border-blue-500/12",
    glow: "rgba(59,130,246,0.08)",
    title: "Smart Model Routing",
    desc: "Extr0 classifies every request by complexity and semantic content, then selects the optimal model — balancing cost, speed, and quality automatically.",
    tag: "Core",
  },
  {
    icon: DollarSign,
    color: "text-green-400",
    bg: "bg-green-500/8",
    border: "border-green-500/12",
    glow: "rgba(34,197,94,0.06)",
    title: "Cost Optimization Engine",
    desc: "Continuously monitors real-time token pricing across all providers. Your routing strategy updates as market prices change.",
    tag: "Savings",
  },
  {
    icon: Shield,
    color: "text-cyan-400",
    bg: "bg-cyan-500/8",
    border: "border-cyan-500/12",
    glow: "rgba(6,182,212,0.06)",
    title: "Multi-Provider Failover",
    desc: "Automatic switching between OpenAI, Anthropic, and Google Gemini if a provider is down or rate-limiting. Zero dropped requests.",
    tag: "Reliability",
  },
  {
    icon: BarChart2,
    color: "text-purple-400",
    bg: "bg-purple-500/8",
    border: "border-purple-500/12",
    glow: "rgba(139,92,246,0.06)",
    title: "Real-Time Cost Analytics",
    desc: "Full observability dashboard — track tokens, latency p50/p99, model distribution, and cumulative cost savings in real-time.",
    tag: "Observability",
  },
  {
    icon: Zap,
    color: "text-amber-400",
    bg: "bg-amber-500/8",
    border: "border-amber-500/12",
    glow: "rgba(245,158,11,0.06)",
    title: "Unified AI API",
    desc: "One OpenAI-compatible endpoint replaces all your provider integrations. Drop-in replacement — no SDK changes.",
    tag: "DX",
  },
  {
    icon: Gauge,
    color: "text-pink-400",
    bg: "bg-pink-500/8",
    border: "border-pink-500/12",
    glow: "rgba(236,72,153,0.06)",
    title: "Performance Optimization",
    desc: "Routes latency-sensitive requests to the fastest available model in your region. SLA-aware routing with configurable thresholds.",
    tag: "Performance",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card border border-purple-500/20 mb-6">
            <Zap size={12} className="text-purple-400 fill-purple-400" />
            <span className="text-xs font-medium text-purple-400">Everything You Need</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.02em] leading-[1.15] text-white mb-6">
            Built for Developers Who
            <br />
            <span className="text-gradient-blue">Care About Infrastructure Costs</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-xl mx-auto">
            Every feature is designed to reduce your AI spend without sacrificing model quality or developer experience.
          </p>
        </motion.div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: 0.08 * i, ease: [0.4, 0, 0.2, 1] }}
                className={`feature-card glass-card rounded-2xl p-6 border ${f.border} cursor-default`}
                style={{ "--hover-glow": f.glow } as React.CSSProperties}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-10 h-10 rounded-xl ${f.bg} border ${f.border} flex items-center justify-center`}>
                    <Icon size={18} className={f.color} />
                  </div>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${f.bg} ${f.color} border ${f.border}`}>
                    {f.tag}
                  </span>
                </div>
                <h3 className="text-white font-semibold text-base mb-2">{f.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
