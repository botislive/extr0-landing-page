"use client";
import { motion } from "framer-motion";
import { Zap, GitBranch, Shield, Activity } from "lucide-react";

const steps = [
  { icon: "01", label: "Your App", sub: "Any language, any framework", color: "rgba(255,255,255,0.06)" },
  { icon: "02", label: "Extr0 Gateway", sub: "Universal AI endpoint", color: "rgba(59,130,246,0.12)", glow: true },
  { icon: "03", label: "Model Router", sub: "Intelligent selection engine", color: "rgba(139,92,246,0.12)" },
  { icon: "04", label: "AI Providers", sub: "OpenAI · Anthropic · Gemini", color: "rgba(6,182,212,0.12)" },
];

const pillars = [
  {
    icon: GitBranch,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/15",
    title: "Automatic Model Routing",
    desc: "Every request is analyzed and routed to the cheapest model that can handle it — based on complexity, latency requirements, and cost targets.",
  },
  {
    icon: Zap,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/15",
    title: "Cost Optimization Engine",
    desc: "Extr0 continuously monitors token prices across providers and updates routing logic in real-time as prices change.",
  },
  {
    icon: Shield,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/15",
    title: "Reliability Failover",
    desc: "If a provider is unavailable or rate-limiting, Extr0 instantly fails over to the next best option — maintaining SLAs automatically.",
  },
  {
    icon: Activity,
    color: "text-green-400",
    bg: "bg-green-500/10",
    border: "border-green-500/15",
    title: "Real-Time Analytics",
    desc: "Full observability across every request — cost per call, model distribution, latency p50/p99, and savings over time.",
  },
];

export default function SolutionSection() {
  return (
    <section id="features-intro" className="relative py-32 overflow-hidden">
      {/* Vertical gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
      <div className="absolute inset-0 hero-radial pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card border border-blue-500/20 mb-6">
            <Zap size={12} className="text-blue-400 fill-blue-400" />
            <span className="text-xs font-medium text-blue-400">The Solution</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.02em] leading-[1.15] text-white mb-6">
            One API.{" "}
            <span className="text-gradient-blue">Infinite Optimization.</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-xl mx-auto">
            Replace your scattered AI integrations with a single endpoint that automatically selects
            the best model for every single request.
          </p>
        </motion.div>

        {/* Architecture Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          className="flex flex-col md:flex-row items-center justify-center gap-0 mb-24 overflow-x-auto pb-4"
        >
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col md:flex-row items-center">
              <div
                className="rounded-2xl px-6 py-4 text-center min-w-[160px] border border-white/6"
                style={{ background: step.color, ...(step.glow ? { boxShadow: "0 0 32px rgba(59,130,246,0.15)" } : {}) }}
              >
                <div className="text-xs font-mono text-slate-500 mb-1">{step.icon}</div>
                <div className="text-white font-semibold text-sm">{step.label}</div>
                <div className="text-xs text-slate-400 mt-0.5">{step.sub}</div>
              </div>
              {i < steps.length - 1 && (
                <div className="flex items-center md:rotate-0 rotate-90 my-3 md:my-0">
                  <div className="w-8 h-px bg-gradient-to-r from-slate-600 to-slate-600" />
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut", delay: i * 0.3 }}
                    className="w-2 h-2 rounded-full bg-blue-500/60"
                  />
                  <div className="w-8 h-px bg-gradient-to-r from-slate-600 to-slate-600" />
                </div>
              )}
            </div>
          ))}
        </motion.div>
        
        {/* Dashboard Preview */}
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
           className="relative max-w-5xl mx-auto mb-32"
        >
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-[2.5rem] blur-2xl opacity-50 pointer-events-none" />
          <div className="relative rounded-3xl overflow-hidden glass-card border border-white/10 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-purple-500/5 pointer-events-none" />
            <img 
              src="/dashboard.png" 
              alt="Extr0 Cost Optimization Dashboard" 
              className="w-full h-auto rounded-2xl"
            />
          </div>
          
          {/* Floating badge */}
          <div className="absolute -bottom-6 -right-6 md:right-10 glass-nav border border-white/10 rounded-2xl p-4 shadow-xl backdrop-blur-xl hidden md:block">
             <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                   <Activity size={20} className="text-green-400" />
                </div>
                <div>
                   <div className="text-white font-bold text-sm">Real-time optimization</div>
                   <div className="text-slate-400 text-xs text-nowrap">Saves ~$14.5k per month on average</div>
                </div>
             </div>
          </div>
        </motion.div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: 0.1 * i, ease: [0.4, 0, 0.2, 1] }}
                className={`glass-card feature-card rounded-2xl p-6 border ${pillar.border}`}
              >
                <div className={`w-10 h-10 rounded-xl ${pillar.bg} ${pillar.border} border flex items-center justify-center mb-4`}>
                  <Icon size={18} className={pillar.color} />
                </div>
                <h3 className="text-white font-semibold text-base mb-2">{pillar.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{pillar.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
