"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/GlitchText";
import { useLang } from "@/lib/LanguageContext";
import { t } from "@/lib/translations";

const INTERESTS = [
  { icon: "🏒", labelEn: "Ice Hockey", labelPl: "Hokej" },
  { icon: "⛳", labelEn: "Golf", labelPl: "Golf" },
  { icon: "⚽", labelEn: "FC Barcelona", labelPl: "FC Barcelona" },
  { icon: "🏎️", labelEn: "Sim Racing F1", labelPl: "Sim Racing F1" },
  { icon: "📈", labelEn: "Finance", labelPl: "Finanse" },
  { icon: "🏠", labelEn: "Real Estate", labelPl: "Nieruchomości" },
];

export default function About() {
  const { lang } = useLang();
  const tr = t[lang].about;

  return (
    <section id="about" className="py-32 px-6 max-w-7xl mx-auto">
      <SectionHeader label={tr.sectionLabel} title={tr.sectionTitle} />

      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="card-border p-8 relative">
            <div className="absolute top-4 right-4 text-[10px] font-mono text-primary opacity-40">
              [BIO.md]
            </div>
            <p className="text-text leading-relaxed font-mono text-sm mb-4">
              {tr.bio1}
            </p>
            <p className="text-text leading-relaxed font-mono text-sm mb-4">
              {tr.bio2}
            </p>
            <p className="text-text leading-relaxed font-mono text-sm mb-6">
              {tr.bio3}
            </p>

            <div className="flex items-center gap-3 p-3 bg-[rgba(0,255,136,0.05)] border border-[rgba(0,255,136,0.15)]">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse flex-shrink-0" />
              <span className="text-primary text-xs font-mono">{tr.statusLabel}</span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 card-border p-5"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-primary text-lg">📍</span>
              <div>
                <div className="text-text font-mono text-sm font-semibold">{tr.locationLabel}</div>
                <div className="text-muted text-xs font-mono">53.1235°N 18.0084°E</div>
              </div>
            </div>
            <div className="text-muted text-xs font-mono">{tr.locationSub}</div>
          </motion.div>
        </motion.div>

        {/* Right side */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          {/* Languages */}
          <div className="card-border p-6">
            <h3 className="font-display text-sm font-bold text-primary tracking-widest mb-5 uppercase">
              {tr.langs.title}
            </h3>
            <div className="space-y-4">
              {tr.langs.items.map((item) => (
                <div key={item.lang}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-text font-mono text-sm">{item.lang}</span>
                    <span className="font-mono text-xs text-secondary">{item.level}</span>
                  </div>
                  <div className="h-1 bg-[rgba(255,255,255,0.05)] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                      className="h-full rounded-full bg-secondary"
                      style={{ boxShadow: "0 0 8px #00d4ff" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div className="card-border p-6">
            <h3 className="font-display text-sm font-bold text-primary tracking-widest mb-4 uppercase">
              {tr.interests.title}
            </h3>
            <div className="grid grid-cols-3 gap-3">
              {INTERESTS.map((item, i) => (
                <motion.div
                  key={item.labelEn}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.3 }}
                  className="flex flex-col items-center gap-1 p-3 border border-[rgba(0,255,136,0.08)] hover:border-[rgba(0,255,136,0.3)] transition-colors text-center"
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-muted text-[10px] font-mono leading-tight">
                    {lang === "en" ? item.labelEn : item.labelPl}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
