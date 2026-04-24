"use client";

import { motion } from "framer-motion";
import MatrixRain from "@/components/MatrixRain";
import TerminalText from "@/components/ui/TerminalText";
import { useLang } from "@/lib/LanguageContext";
import { t } from "@/lib/translations";

export default function Hero() {
  const { lang } = useLang();
  const tr = t[lang].hero;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      <MatrixRain />

      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,136,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,136,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute top-24 left-0 right-0 flex justify-between px-8 text-[10px] font-mono text-muted pointer-events-none"
      >
        <span>[STATUS: ONLINE]</span>
        <span>[CLEARANCE: TOP-SECRET]</span>
        <span>[NODE: BDG-PL-01]</span>
      </motion.div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <div className="w-8 h-px bg-primary opacity-60" />
          <span className="text-primary text-xs font-mono tracking-[0.3em] uppercase">
            {tr.title}
          </span>
          <div className="w-8 h-px bg-primary opacity-60" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-text mb-4 leading-none tracking-tight"
        >
          <span className="block">Patryk</span>
          <span
            className="block text-transparent bg-clip-text"
            style={{
              WebkitBackgroundClip: "text",
              backgroundImage: "linear-gradient(135deg, #00ff88 0%, #00d4ff 100%)",
            }}
          >
            Zawieja
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex items-center justify-center gap-2 mb-6"
        >
          <span className="text-muted font-mono text-sm md:text-base">
            {lang === "en" ? "Specializing in" : "Specjalizacja:"}
          </span>
          <span className="text-secondary font-mono text-sm md:text-base font-semibold min-w-[240px] text-left">
            <TerminalText words={[...tr.taglines]} />
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="text-muted text-xs font-mono mb-10 tracking-widest"
        >
          <span className="text-primary">📍</span> {tr.location} &nbsp;|&nbsp;
          <span className="text-primary">{tr.currently}</span> {tr.currentRole}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-20"
        >
          <a
            href="#contact"
            className="flex items-center gap-2 px-6 py-3 border border-primary text-primary font-mono text-sm tracking-wider hover:bg-[rgba(0,255,136,0.08)] transition-all duration-300"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            {tr.contactMe}
          </a>
          <a
            href="https://www.linkedin.com/in/patryk-zawieja-656497202"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 border border-[rgba(0,212,255,0.3)] text-secondary font-mono text-sm tracking-wider hover:bg-[rgba(0,212,255,0.05)] transition-all duration-300"
          >
            LinkedIn ↗
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {tr.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4 + i * 0.1, duration: 0.4 }}
              className="card-border p-4 text-center"
            >
              <div className="font-display text-2xl font-bold text-primary glow-text mb-1">
                {stat.value}
              </div>
              <div className="text-muted text-[10px] font-mono tracking-wider uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-muted text-[10px] font-mono tracking-widest">
          {lang === "en" ? "SCROLL" : "PRZEWIŃ"}
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-primary to-transparent"
        />
      </motion.div>

      <div className="absolute top-24 left-6 w-12 h-12 border-t border-l border-[rgba(0,255,136,0.2)] pointer-events-none" />
      <div className="absolute top-24 right-6 w-12 h-12 border-t border-r border-[rgba(0,255,136,0.2)] pointer-events-none" />
      <div className="absolute bottom-16 left-6 w-12 h-12 border-b border-l border-[rgba(0,255,136,0.2)] pointer-events-none" />
      <div className="absolute bottom-16 right-6 w-12 h-12 border-b border-r border-[rgba(0,255,136,0.2)] pointer-events-none" />
    </section>
  );
}
