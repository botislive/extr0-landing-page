"use client";
import { motion } from "framer-motion";
import { CheckCircle2, Zap, Building2, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Starter",
    icon: Zap,
    iconColor: "text-slate-400",
    iconBg: "bg-slate-500/10",
    price: "$0",
    period: "/month",
    desc: "For indie developers and side projects.",
    cta: "Start Free — No Card",
    ctaHref: "#",
    ctaVariant: "secondary",
    popular: false,
    features: [
      "1M tokens/month included",
      "3 AI provider integrations",
      "Basic cost analytics",
      "OpenAI-compatible API",
      "Community support",
      "5-minute onboarding",
    ],
    featureNote: null,
  },
  {
    name: "Growth",
    icon: Sparkles,
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/10",
    price: "$49",
    period: "/month",
    desc: "For teams shipping production AI features.",
    cta: "Start 14-Day Trial",
    ctaHref: "#",
    ctaVariant: "primary",
    popular: true,
    features: [
      "25M tokens/month included",
      "All AI provider integrations",
      "Real-time cost dashboard",
      "Custom routing rules",
      "Multi-provider failover",
      "Priority email support",
      "Usage alerts & budgets",
      "Team seats (5 users)",
    ],
    featureNote: "$1.80 per additional 1M tokens",
  },
  {
    name: "Enterprise",
    icon: Building2,
    iconColor: "text-purple-400",
    iconBg: "bg-purple-500/10",
    price: "Custom",
    period: "",
    desc: "For high-volume AI infrastructure at scale.",
    cta: "Contact Sales",
    ctaHref: "#",
    ctaVariant: "outline",
    popular: false,
    features: [
      "Unlimited token volume",
      "Dedicated routing cluster",
      "SLA guarantee (99.99%)",
      "Custom model integrations",
      "SSO & RBAC",
      "Audit logs & compliance",
      "24/7 dedicated support",
      "Onboarding & migration help",
    ],
    featureNote: null,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
      <div className="absolute inset-0 dot-grid opacity-25 pointer-events-none" />

      {/* Background radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(139,92,246,0.07) 0%, transparent 70%)",
        }}
      />

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
            <Sparkles size={12} className="text-purple-400 fill-purple-400" />
            <span className="text-xs font-medium text-purple-400">Simple Pricing</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.02em] leading-[1.15] text-white mb-6">
            Pay for What You Use.
            <br />
            <span className="text-gradient-blue">Save the Rest.</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-xl mx-auto">
            Transparent, usage-based pricing. No hidden fees, no lock-in.
            Start free and scale as your AI usage grows.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.55,
                  delay: 0.1 * i,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className={`relative rounded-2xl p-8 flex flex-col ${
                  plan.popular
                    ? "pricing-popular glass-card"
                    : "glass-card border border-white/6"
                }`}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-semibold shadow-lg">
                      <Sparkles size={10} className="fill-white" />
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Plan header */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-9 h-9 rounded-xl ${plan.iconBg} flex items-center justify-center`}
                    >
                      <Icon size={17} className={plan.iconColor} />
                    </div>
                    <span className="text-white font-semibold text-base">
                      {plan.name}
                    </span>
                  </div>

                  <div className="flex items-end gap-1 mb-3">
                    <span className="text-5xl font-extrabold text-white tracking-tight leading-none">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-slate-400 text-sm font-medium mb-1">
                        {plan.period}
                      </span>
                    )}
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {plan.desc}
                  </p>
                </div>

                {/* Divider */}
                <div className="h-px bg-white/6 mb-8" />

                {/* Features */}
                <ul className="flex flex-col gap-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle2
                        size={15}
                        className="text-blue-400 mt-0.5 shrink-0"
                      />
                      <span className="text-slate-300 text-sm leading-snug">
                        {feature}
                      </span>
                    </li>
                  ))}
                  {plan.featureNote && (
                    <li className="text-xs text-slate-500 pl-6 mt-1">
                      {plan.featureNote}
                    </li>
                  )}
                </ul>

                {/* CTA */}
                <a
                  id={`pricing-cta-${plan.name.toLowerCase()}`}
                  href={plan.ctaHref}
                  className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm active:scale-[0.98] transition-all duration-150 ${
                    plan.ctaVariant === "primary"
                      ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white btn-primary-glow hover:from-blue-500 hover:to-blue-400"
                      : plan.ctaVariant === "secondary"
                      ? "bg-white/6 text-white hover:bg-white/10 border border-white/8"
                      : "border border-purple-500/30 text-purple-300 hover:border-purple-400/50 hover:text-purple-200 hover:bg-purple-500/5"
                  }`}
                >
                  {plan.cta}
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center text-slate-500 text-sm mt-12"
        >
          All plans include SSL, 99.9% uptime SLA, and access to our public API status page.
          <span className="text-slate-400"> Questions? </span>
          <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors duration-150 underline underline-offset-2">
            Chat with us →
          </a>
        </motion.p>
      </div>
    </section>
  );
}
