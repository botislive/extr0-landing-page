"use client";
import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          className="relative rounded-3xl overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, rgba(59,130,246,0.12) 0%, rgba(139,92,246,0.12) 50%, rgba(6,182,212,0.08) 100%)",
            border: "1px solid rgba(59, 130, 246, 0.2)",
          }}
        >
          {/* Inner radial glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 70% 80% at 50% 110%, rgba(59,130,246,0.2) 0%, transparent 65%)",
            }}
          />

          {/* Grid pattern */}
          <div className="absolute inset-0 grid-background opacity-30 pointer-events-none" />

          {/* Shimmer line */}
          <div className="absolute top-0 left-0 right-0 h-px">
            <div
              className="h-full"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(59,130,246,0.6), rgba(139,92,246,0.6), transparent)",
              }}
            />
          </div>

          <div className="relative z-10 py-24 px-8 md:px-16 text-center flex flex-col items-center">
            {/* Icon badge */}
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-8 shadow-lg"
              style={{ boxShadow: "0 8px 32px rgba(59,130,246,0.4)" }}>
              <Zap size={24} className="text-white fill-white" />
            </div>

            {/* Headline */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-[-0.025em] leading-[1.1] text-white mb-6 max-w-3xl">
              Your AI spend can be{" "}
              <span className="text-gradient-blue">
                70% lower
              </span>{" "}
              starting today.
            </h2>

            <p className="text-lg text-slate-400 max-w-xl mb-12 leading-relaxed">
              Join 2,400+ developers who switched to Extr0.
              One API key. One endpoint. No code changes.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                id="cta-start-free-bottom"
                href="#pricing"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold text-base btn-primary-glow hover:from-blue-500 hover:to-blue-400 active:scale-[0.98] transition-all duration-150"
              >
                Start Free
                <ArrowRight size={18} />
              </a>
              <a
                id="cta-book-demo"
                href="#"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/12 text-slate-300 font-semibold text-base hover:border-white/22 hover:text-white hover:bg-white/5 active:scale-[0.98] transition-all duration-150"
              >
                Book a 15-min Demo
              </a>
            </div>

            {/* Trust signals */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500">
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                No credit card required
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                Setup in under 5 minutes
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                Cancel anytime
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                SOC 2 Type II compliant
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
