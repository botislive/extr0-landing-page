"use client";
import { motion } from "framer-motion";
import { Zap, ArrowRight, ChevronDown } from "lucide-react";

const providers = [
  {
    name: "Gemini",
    color: "#10a37f",
    logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAACbElEQVR4AWJwL/ChKyZL0y9XpzJAr/UAG0sYhWE4xrVt27Zt27Zt1ba7Rm27vbZt226/9sxmNtN1MZvkTSZ8cs7op8wG/ho58iVlFvDzuKn1f44ciQ8TZoCu+QZpOsGXsRPxasYCXFu4R8gr+MG+WyUWu71wKzLXOGCFxKMSb+DXCRNPcjHldgWc9p88yQv4efnw1ZqY495M7Dp2G5Mtvq8uVfDLnPG99GFLLF9hivUXDLL536tUwM8rR/Z6vWYGbu1cg8x9FirsUEYhbLjVH8ok1OgaXx4epsbkx4RwsEjTwvpZ5LIZXa/ep/GzdYdThF23n4YUp20QeVnDxikW2x2u6MS6W6rqcgLoegInO1ugklHwW0KD+r/E9YTvA1uCui4YiDTlBAaz8BdihV8WFrjdU2OakGadT0BQUH0t8G9SlR1/46u9/BpTH2wPktsymF/MAlgEH8JyhQqc6HUf/Zw+oZftT4OYBvyyoC1q8Hd6tR0/s2q//JTTEBRhF892R9jpUQy4Lnk3A44U5KCf7w30c3lDoHFMJ6ix0ucX2wgIY0GHs/MYcGq0E4ZJoxi0j/tT7pSGICG7UqMPTcb1wSdZcFPOBsxKPIYxoQL0FWQanbKz8YdGd15XZ672uzoDh88t505JqOaULFy814JbwM2ZvTSnJJSm1ERL/OJzUe6UA5UympKLlt6njbtedsr+YR7oLA1XowN9nq3m5fe05OSqkyNTN6Nd9FG0DfZj0O6irJO8/Q/pZ8uCLMrrD5hqHb9b2CBhIwPSNe9nmqapS+oTSNWI2Vufd5CqnLDiJWW2c2nZxCU7KP7BUigf+OW0iDHe5JwAAAAASUVORK5CYII="
  },
  {
    name: "OpenAI",
    color: "#d97706",
    logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACRElEQVRYhe3WS4iOURgH8J/raEqhmJSVy5iSWbiklIUViyk2LospSSZsLBSRbFiZDQvGihRCxoShRNm4pJFyv5SQUhZCiJI+i/N8zfH6Rr7PJ5v5b85z/ud5zvN/zznPeQ+DGMR/xpAaYtqwEk14ii7cr6eogdCA1yjhCo7gFfRPYSbWoR3j/oWAr7hRge8MESV8yexL9Uy+HZ8LXAteRbIdhbHZ+IQP9UjeFJNtiP4o9ETic9LWlDGsEFvCvr9Jflz/ki4I7g7eSitQRivehN/OjF8bXE04G8FTCgIeSVtCWo2yXw9WZYIXozHssdUmn5slVxDwIARsyZKdLsTvCf5JtCOrFXDMzyc+F3ArS7wUS7J+WxYzBleDn1GtgPtSeeUC5od9F70VYs6E30NMyvgDfnMOhg7Av8OEAteaxfRViLmFF3gmlef+4NdFu3kgEZWwyc+qy3t6OZIU615wD8NuL8QfwrVqBIgJDmb9iVIJlnC+gv8F3At7TkFApxr+F80xSR/GZ/wifIux5Vih/xDeDp95BQE3cbRaAQ0xyaNouwrj3VnijdgavkUB08KeVa2AMRHYiIX6v7pDWu6SdFOWr99t0t8xF9ASbXe1ycsoYU3WL18+zzE141vxXjojuYASDteaHPb6/V3eiIvhcwIjgu/AR3V6F7yV3gLzC/yuSPwMkwtjn6QtqRt69S/p98zeXcG3z69vh7pgNJZhNaZLZVU+DydxPfovMfxPJ63lUZqjGeulUnsjVUVdn2KDGMQ/xw/hZKtMGA891gAAAABJRU5ErkJggg=="
  },
  {
    name: "Anthropic",
    color: "#4285f4",
    logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAHlBMVEXaakbadlbacU/WXzP++vj77ur12tPhknruxLjorp60qBrXAAAABHRSTlP+/v7+ukpK/AAAAQJJREFUKJG1UUluBCEMLLz7/x9OGeiew0g5JUYIcC02gPVL4A/AlC/yc0BZEU0/nJvkfo4IdywpI4hXQYhDJN1bqF9C3k0OuCQTKEoRxumU3waogntB3FojtGwOkxbIrO0eaHO1SqODHF/IpqSbczaH2VZ9lMKSZiQQojn0BYkwNDdiFtlsyXFAdFV1Z4bd8Oi8SqyqCD7CkUYvVcVju31V1wVH6o2n5sArLDZamhW8mbxjms22Yice7BbYklN1qGnJzqy5HfrMrctIXTRkKb5P+OTPDXEWPiv4AGmhze1NH6x8jTG0PPU28mqDf9zOr5PIT/ZSxqin2Gn1zX/WR/O/8QPwmAb3rsSAHQAAAABJRU5ErkJggg=="
  },
];

function FlowDiagram() {
  return (
    <div className="relative flex flex-col items-center gap-0 float-animation">
      {/* Developer App */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="glass-card gradient-border rounded-2xl px-8 py-4 text-center w-56"
      >
        <div className="text-xs font-medium text-slate-400 mb-1 uppercase tracking-widest">Your App</div>
        <div className="text-white font-semibold">Developer Application</div>
        <div className="mt-2 text-xs text-slate-500 font-mono">POST /v1/chat</div>
      </motion.div>

      {/* Connector */}
      <div className="flex flex-col items-center gap-0 relative">
        <div className="w-px h-8 bg-gradient-to-b from-slate-600 to-blue-500/60" />
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-2 h-2 rounded-full bg-blue-500"
        />
        <div className="w-px h-8 bg-gradient-to-b from-blue-500/60 to-purple-500/60" />
      </div>

      {/* Extr0 Gateway */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="relative rounded-2xl px-8 py-5 text-center w-64"
        style={{
          background: "linear-gradient(135deg, rgba(59,130,246,0.15) 0%, rgba(139,92,246,0.15) 100%)",
          border: "1px solid rgba(59,130,246,0.3)",
        }}
      >
        <div className="absolute inset-0 rounded-2xl glow-blue pointer-events-none" />
        <div className="flex items-center justify-center gap-2 mb-1">
          <div className="w-5 h-5 rounded-md bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <Zap size={11} className="text-white fill-white" />
          </div>
          <span className="text-xs font-medium text-blue-400 uppercase tracking-widest">AI Gateway</span>
        </div>
        <div className="text-white font-bold text-lg">Extr0 Router</div>
        <div className="mt-2 flex items-center justify-center gap-2">
          <span className="px-2 py-0.5 rounded-full text-xs bg-green-500/10 text-green-400 border border-green-500/20">Cost Optimizer</span>
          <span className="px-2 py-0.5 rounded-full text-xs bg-blue-500/10 text-blue-400 border border-blue-500/20">Smart Routing</span>
        </div>
      </motion.div>

      {/* Connector with branches */}
      <div className="flex flex-col items-center gap-0">
        <div className="w-px h-8 bg-gradient-to-b from-purple-500/60 to-slate-600" />
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut", delay: 0.3 }}
          className="w-2 h-2 rounded-full bg-purple-500"
        />
        <div className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent" />
      </div>

      {/* Provider row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="flex items-center gap-3"
      >
        {providers.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9 + i * 0.1 }}
            className="glass-card rounded-xl px-4 py-3 text-center flex flex-col items-center gap-1"
          >
            <div className="w-6 h-6 flex items-center justify-center mb-1">
              <img src={p.logo} alt={p.name} className="w-full h-full object-contain rounded-sm" />
            </div>
            <span className="text-xs font-medium text-slate-300">{p.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-16 overflow-hidden hero-radial grid-background">
      {/* Ambient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-[0.04] blur-3xl bg-blue-500 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-[0.04] blur-3xl bg-purple-500 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 w-full flex flex-col lg:flex-row items-center justify-between gap-16 py-24">
        {/* Left: Copy */}
        <div className="flex-1 text-center lg:text-left max-w-2xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card border border-blue-500/20 mb-8"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400 pulse-ring" />
            </div>
            <span className="text-xs font-medium text-blue-400">Zero Extra Spend on AI</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.08] tracking-[-0.025em] mb-6"
          >
            <span className="text-gradient-hero">Stop Overpaying</span>
            <br />
            <span className="text-gradient-hero">for AI APIs</span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="text-lg text-slate-400 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0"
          >
            Extr0 intelligently routes every request to the most cost-efficient AI model —
            reducing your AI infrastructure costs by{" "}
            <span className="text-white font-semibold">up to 70%</span>, automatically.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold text-sm btn-primary-glow hover:from-blue-500 hover:to-blue-400 active:scale-[0.98] transition-all duration-150"
            >
              Start Free
              <ArrowRight size={16} />
            </a>
            <a
              href="#code"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/10 text-slate-300 font-semibold text-sm hover:border-white/20 hover:text-white hover:bg-white/5 active:scale-[0.98] transition-all duration-150"
            >
              View Docs
            </a>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-xs text-slate-500"
          >
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
              No credit card required
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              5-minute setup
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
              OpenAI-compatible
            </div>
          </motion.div>
        </div>

        {/* Right: Flow Diagram */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="flex-shrink-0"
        >
          <FlowDiagram />
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-600"
      >
        <span className="text-xs font-medium">Scroll to explore</span>
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}>
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
