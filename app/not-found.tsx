"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Zap } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#080808] flex flex-col items-center justify-center px-6 relative overflow-hidden grid-background">
      {/* Ambient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-[0.04] blur-3xl bg-blue-500 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-[0.04] blur-3xl bg-purple-500 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className="text-center relative z-10"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card border border-blue-500/20 mb-8">
          <Zap size={14} className="text-blue-400 fill-blue-400" />
          <span className="text-xs font-medium text-blue-400">404 Error</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter">
          Lost in the <span className="text-gradient-blue">Model.</span>
        </h1>
        
        <p className="text-lg text-slate-400 max-w-md mx-auto mb-10 leading-relaxed">
          The page you are looking for doesn&apos;t exist or has been moved to a more cost-efficient model.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold text-sm btn-primary-glow hover:from-blue-500 hover:to-blue-400 active:scale-[0.98] transition-all duration-150"
        >
          <ArrowLeft size={16} />
          Back to Safety
        </Link>
      </motion.div>

      {/* Decorative blurred background number */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none select-none">
        <span className="text-[30rem] font-black text-white">404</span>
      </div>
    </div>
  );
}
