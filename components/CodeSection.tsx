"use client";
import { motion } from "framer-motion";
import { Terminal, CheckCircle } from "lucide-react";

const beforeCode = `// Before Extr0 — calling GPT-4 for everything
import OpenAI from 'openai';

const client = new OpenAI({ apiKey: process.env.OPENAI_KEY });

const response = await client.chat.completions.create({
  model: 'gpt-4',           // ← always the most expensive
  messages: [{ role: 'user', content: prompt }],
});

// Cost: $0.03 per 1K tokens
// No failover, no cost tracking`;

const afterCode = `// After Extr0 — one unified endpoint
import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: process.env.EXTR0_KEY,
  baseURL: 'https://api.extr0.ai/v1',  // ← only change
});

const response = await client.chat.completions.create({
  model: 'auto',  // ← Extr0 picks the optimal model
  messages: [{ role: 'user', content: prompt }],
});

// Cost: up to 70% less — automatically`;

function CodePanel({ title, code, variant }: { title: string; code: string; variant: "before" | "after" }) {
  const isAfter = variant === "after";
  return (
    <div className={`rounded-2xl overflow-hidden border ${
      isAfter ? "border-blue-500/20" : "border-white/6"
    }`}>
      {/* Title bar */}
      <div className={`flex items-center gap-3 px-4 py-3 border-b ${
        isAfter ? "bg-blue-500/8 border-blue-500/15" : "bg-white/3 border-white/6"
      }`}>
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        </div>
        <div className="flex items-center gap-2">
          <Terminal size={12} className={isAfter ? "text-blue-400" : "text-slate-500"} />
          <span className={`text-xs font-medium ${isAfter ? "text-blue-400" : "text-slate-400"}`}>{title}</span>
        </div>
        {isAfter && (
          <div className="ml-auto flex items-center gap-1.5">
            <CheckCircle size={12} className="text-green-400" />
            <span className="text-xs text-green-400 font-medium">Optimized</span>
          </div>
        )}
      </div>
      {/* Code */}
      <div className={`p-5 ${isAfter ? "bg-blue-950/20" : "bg-slate-950/60"}`}>
        <pre className="code-block text-xs leading-relaxed overflow-x-auto">
          <code>
            {code.split('\n').map((line, i) => {
              const isComment = line.trim().startsWith('//');
              const isHighlight = line.includes('auto') || line.includes('extr0') || line.includes('EXTR0');
              return (
                <div key={i} className={`${
                  isComment ? 'text-slate-500' :
                  isHighlight ? 'text-blue-300' :
                  'text-slate-300'
                }`}>
                  {line || '\u00A0'}
                </div>
              );
            })}
          </code>
        </pre>
      </div>
    </div>
  );
}

export default function CodeSection() {
  return (
    <section id="code" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
      <div className="absolute inset-0 hero-radial pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card border border-green-500/20 mb-6">
            <Terminal size={12} className="text-green-400" />
            <span className="text-xs font-medium text-green-400">5-Minute Integration</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.02em] leading-[1.15] text-white mb-6">
            One Line Change.
            <br />
            <span className="text-gradient-blue">Immediate Savings.</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-xl mx-auto">
            Extr0 is fully OpenAI-compatible. Change one URL and one API key. That&apos;s it.
          </p>
        </motion.div>

        {/* Code panels */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <CodePanel title="before.ts" code={beforeCode} variant="before" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          >
            <CodePanel title="after.ts — with Extr0" code={afterCode} variant="after" />
          </motion.div>
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center text-slate-500 text-sm mt-10"
        >
          Compatible with the OpenAI SDK, LangChain, LlamaIndex, and all major AI frameworks.
        </motion.p>
      </div>
    </section>
  );
}
