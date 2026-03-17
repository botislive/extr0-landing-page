"use client";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    title: "CTO",
    company: "Synthia AI",
    avatar: "https://i.pravatar.cc/150?u=rahul",
    quote:
      "We went from spending $22k/month on AI APIs to under $7k in two weeks. Extr0 just works — zero infrastructure overhead, zero SDK changes. I wish we'd found it sooner.",
    savings: "68% cost reduction",
    savingsColor: "text-green-400",
  },
  {
    name: "Elena Kovačević",
    title: "Lead Engineer",
    company: "Clarifai Labs",
    avatar: "https://i.pravatar.cc/150?u=elena",
    quote:
      "The failover alone was worth it. We had a GPT-4 outage that would have taken down production — Extr0 silently rerouted to Claude in milliseconds. Our users never knew.",
    savings: "Zero downtime incidents",
    savingsColor: "text-blue-400",
  },
  {
    name: "Marcus Chen",
    title: "Founder",
    company: "BuildWithAI",
    avatar: "https://i.pravatar.cc/150?u=marcus",
    quote:
      "I integrated Extr0 in literally 4 minutes. Changed the baseURL, swapped the key, set model to 'auto'. The cost analytics dashboard alone tells me things I had no visibility into before.",
    savings: "4-minute integration",
    savingsColor: "text-amber-400",
  },
  {
    name: "Priya Nair",
    title: "Head of Infrastructure",
    company: "Dataflow Systems",
    avatar: "https://i.pravatar.cc/150?u=priya",
    quote:
      "Our finance team asked for a 40% AI spend reduction. Extr0 delivered 71%. The smart routing is accurate — simple tasks hit the cheap models, complex ones hit GPT-4 when needed.",
    savings: "71% cost reduction",
    savingsColor: "text-green-400",
  },
  {
    name: "James Okafor",
    title: "Principal Architect",
    company: "NeuralStack",
    avatar: "https://i.pravatar.cc/150?u=james",
    quote:
      "What sold us was the OpenAI compatibility. Our entire codebase using LangChain, just changed one environment variable. Works flawlessly across 50 microservices.",
    savings: "50+ services migrated",
    savingsColor: "text-cyan-400",
  },
  {
    name: "Sarah Mitchell",
    title: "AI Product Lead",
    company: "Orbis Health",
    avatar: "https://i.pravatar.cc/150?u=sarah",
    quote:
      "HIPAA compliance was our biggest concern. Extr0's enterprise tier gave us audit logs, data residency controls, and their team was responsive throughout our security review.",
    savings: "Enterprise-grade security",
    savingsColor: "text-rose-400",
  },
];

function TestimonialCard({
  testimonial,
  delay,
}: {
  testimonial: (typeof testimonials)[0];
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: [0.4, 0, 0.2, 1] }}
      className="glass-card feature-card rounded-2xl p-6 flex flex-col gap-5 border border-white/6"
    >
      {/* Stars */}
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={12}
            className="text-amber-400 fill-amber-400"
          />
        ))}
      </div>

      {/* Quote */}
      <div className="relative">
        <Quote
          size={20}
          className="absolute -top-1 -left-1 text-white/6 fill-white/5"
        />
        <p className="text-slate-300 text-sm leading-relaxed pl-4">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </div>

      {/* Savings badge */}
      <div className="inline-flex">
        <span
          className={`text-xs font-semibold px-2 py-1 rounded-full bg-white/5 border border-white/8 ${testimonial.savingsColor}`}
        >
          ✦ {testimonial.savings}
        </span>
      </div>

      {/* Author */}
      <div className="flex items-center gap-3 pt-1 border-t border-white/6">
        <div className="w-10 h-10 rounded-xl overflow-hidden glass-card border border-white/10 shrink-0">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
          />
        </div>
        <div>
          <div className="text-white text-sm font-semibold leading-tight">
            {testimonial.name}
          </div>
          <div className="text-slate-500 text-xs">
            {testimonial.title} · {testimonial.company}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(59,130,246,0.04) 0%, transparent 70%)",
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
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card border border-amber-500/20 mb-6">
            <Star size={12} className="text-amber-400 fill-amber-400" />
            <span className="text-xs font-medium text-amber-400">Loved by Developers</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.02em] leading-[1.15] text-white mb-6">
            Trusted by Teams
            <br />
            <span className="text-gradient-blue">Shipping Real Products</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-xl mx-auto">
            From solo founders to engineering teams at scale — here&apos;s what
            developers say after switching to Extr0.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <TestimonialCard
              key={t.name}
              testimonial={t}
              delay={0.07 * i}
            />
          ))}
        </div>

        {/* Social proof numbers */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: "2,400+", label: "Active integrations" },
            { value: "$8.2M", label: "Saved for customers" },
            { value: "4.9/5", label: "Average rating" },
            { value: "99.98%", label: "API uptime" },
          ].map((stat, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl py-6 text-center border border-white/5"
            >
              <div className="text-3xl font-extrabold text-white tracking-tight mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-slate-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
