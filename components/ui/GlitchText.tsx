"use client";

import { motion } from "framer-motion";

interface GlitchTextProps {
  text: string;
  className?: string;
  tag?: "h1" | "h2" | "h3" | "span" | "p";
}

export default function GlitchText({ text, className = "", tag = "span" }: GlitchTextProps) {
  const Tag = tag;
  return (
    <Tag
      className={`glitch relative inline-block ${className}`}
      data-text={text}
    >
      {text}
    </Tag>
  );
}

export function SectionHeader({ label, title }: { label: string; title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="mb-16"
    >
      <div className="flex items-center gap-3 mb-3">
        <span className="text-primary text-xs font-mono tracking-widest opacity-60">//</span>
        <span className="text-primary text-xs font-mono tracking-widest uppercase">{label}</span>
        <div className="flex-1 h-px bg-gradient-to-r from-[rgba(0,255,136,0.3)] to-transparent" />
      </div>
      <h2
        className="glitch font-display text-3xl md:text-4xl font-bold text-text tracking-tight"
        data-text={title}
      >
        {title}
      </h2>
    </motion.div>
  );
}
