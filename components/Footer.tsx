"use client";
import { Zap, Github, Twitter, Linkedin, ExternalLink } from "lucide-react";

const footerLinks = [
  {
    heading: "Product",
    links: [
      { label: "How it Works", href: "#product" },
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "Changelog", href: "#" },
      { label: "Status Page", href: "#" },
    ],
  },
  {
    heading: "Developers",
    links: [
      { label: "Documentation", href: "#" },
      { label: "API Reference", href: "#" },
      { label: "SDKs & Libraries", href: "#" },
      { label: "OpenAI Compatibility", href: "#" },
      { label: "GitHub", href: "#", external: true },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Blog", href: "#blog" },
      { label: "Careers", href: "#" },
      { label: "Press Kit", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
      { label: "GDPR", href: "#" },
      { label: "SOC 2 Report", href: "#" },
    ],
  },
];

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Twitter, href: "#", label: "Twitter / X" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/6">
      {/* Top fade */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(59,130,246,0.3), rgba(139,92,246,0.3), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-8 pt-20 pb-12">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto_auto_auto] gap-12 md:gap-16 mb-16">
          {/* Brand column */}
          <div className="max-w-xs">
            {/* Logo */}
            <a href="#" className="inline-flex items-center gap-2 mb-6 group">
              <div className="relative w-8 h-8 flex items-center justify-center">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 opacity-20 group-hover:opacity-40 transition-opacity duration-200" />
                <div className="relative w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <Zap size={14} className="text-white fill-white" />
                </div>
              </div>
              <span className="text-white font-bold text-xl tracking-tight">
                Extr<span className="text-gradient-blue">0</span>
              </span>
            </a>

            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              The AI Gateway that eliminates unnecessary spend. Route every
              request to the optimal model — automatically.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="w-9 h-9 rounded-xl glass-card border border-white/6 flex items-center justify-center text-slate-500 hover:text-white hover:border-white/12 transition-all duration-150"
                  >
                    <Icon size={15} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.heading}>
              <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-4">
                {col.heading}
              </h4>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-white transition-colors duration-150"
                    >
                      {link.label}
                      {link.external && (
                        <ExternalLink size={11} className="text-slate-600" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-white/5 mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <span>© {new Date().getFullYear()} Extr0, Inc. All rights reserved.</span>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
            <span className="text-slate-500">
              All systems operational
            </span>
          </div>
          <span>
            Built with{" "}
            <span className="text-slate-500">♥</span>{" "}
            for developers who care about costs.
          </span>
        </div>
      </div>
    </footer>
  );
}
