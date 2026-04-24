"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/GlitchText";
import { useLang } from "@/lib/LanguageContext";
import { t } from "@/lib/translations";

const CONTACT_LINKS = [
  {
    labelEn: "Email", labelPl: "Email",
    value: "zawieja.it@gmail.com",
    href: "mailto:zawieja.it@gmail.com",
    icon: "✉️", color: "#00ff88",
    descriptionEn: "Primary contact", descriptionPl: "Główny kontakt",
  },
  {
    labelEn: "LinkedIn", labelPl: "LinkedIn",
    value: "patryk-zawieja",
    href: "https://www.linkedin.com/in/patryk-zawieja-656497202",
    icon: "💼", color: "#0078d4",
    descriptionEn: "Professional network", descriptionPl: "Sieć zawodowa",
  },
  {
    labelEn: "Credly", labelPl: "Credly",
    value: "patryk-zawieja",
    href: "https://www.credly.com/users/patryk-zawieja",
    icon: "🏆", color: "#ff6b35",
    descriptionEn: "14+ verified certs", descriptionPl: "14+ certyfikatów",
  },
  {
    labelEn: "GitHub", labelPl: "GitHub",
    value: "Patrick2402",
    href: "https://github.com/Patrick2402",
    icon: "🐙", color: "#a78bfa",
    descriptionEn: "Open source tools", descriptionPl: "Narzędzia open source",
  },
];

export default function Contact() {
  const { lang } = useLang();
  const tr = t[lang].contact;

  return (
    <section id="contact" className="py-32 px-6 bg-[#08090d]">
      <div className="max-w-4xl mx-auto">
        <SectionHeader label={tr.sectionLabel} title={tr.sectionTitle} />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="card-border p-8 relative">
              <div className="absolute top-3 right-3 text-[10px] font-mono text-primary opacity-30">[CONTACT.sh]</div>
              <h3 className="font-display text-xl font-bold text-text mb-4">{tr.heading}</h3>
              <p className="text-[#94a3b8] font-mono text-sm leading-relaxed mb-6">{tr.body}</p>
              <div className="space-y-2">
                {[
                  [tr.responseTime, tr.responseVal],
                  [tr.preferred, tr.preferredVal],
                  [tr.locationLabel, tr.locationVal],
                  [tr.availableLabel, tr.availableVal],
                ].map(([label, val]) => (
                  <div key={label} className="flex items-center gap-2 text-xs font-mono">
                    <span className="text-primary">▸</span>
                    <span className="text-muted">{label}</span>
                    <span className="text-text">{val}</span>
                  </div>
                ))}
              </div>
            </div>

            <motion.a
              href="mailto:zawieja.it@gmail.com"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-4 flex items-center gap-3 w-full p-4 border border-primary text-primary font-mono text-sm hover:bg-primary hover:text-bg transition-all duration-300 group"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse group-hover:bg-bg" />
              <span>zawieja.it@gmail.com</span>
              <span className="ml-auto">→</span>
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-3"
          >
            {CONTACT_LINKS.map((link, i) => (
              <motion.a
                key={link.labelEn}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-center gap-4 p-5 card-border transition-all duration-300 hover:border-[rgba(255,255,255,0.15)]"
              >
                <span className="text-2xl">{link.icon}</span>
                <div className="flex-1">
                  <div className="text-xs font-mono text-muted uppercase tracking-widest mb-0.5">
                    {lang === "pl" ? link.labelPl : link.labelEn}
                  </div>
                  <div className="text-sm font-mono font-medium truncate" style={{ color: link.color }}>
                    {link.value}
                  </div>
                  <div className="text-[10px] font-mono text-muted">
                    {lang === "pl" ? link.descriptionPl : link.descriptionEn}
                  </div>
                </div>
                <span style={{ color: link.color }}>↗</span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="max-w-4xl mx-auto mt-20 pt-8 border-t border-[rgba(0,255,136,0.08)]"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-display text-xs font-bold text-primary tracking-widest">
            PZ<span className="text-muted">::</span>SEC
          </span>
          <span className="text-muted text-xs font-mono">
            Patryk Zawieja · Cloud Security Engineer · Bydgoszcz, {lang === "pl" ? "Polska" : "Poland"}
          </span>
          <span className="text-muted text-xs font-mono">
            {new Date().getFullYear()} · Built with Next.js
          </span>
        </div>
      </motion.div>
    </section>
  );
}
