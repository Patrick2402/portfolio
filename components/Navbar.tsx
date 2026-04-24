"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLang } from "@/lib/LanguageContext";
import { t } from "@/lib/translations";

export default function Navbar() {
  const { lang, setLang } = useLang();
  const tr = t[lang].nav;
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const NAV_ITEMS = [
    { label: tr.about, href: "#about" },
    { label: tr.experience, href: "#experience" },
    { label: tr.projects, href: "#projects" },
    { label: tr.certs, href: "#certifications" },
    { label: tr.skills, href: "#skills" },
    { label: tr.contact, href: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const scrollPos = window.scrollY + 120;
      const ids = ["about", "experience", "projects", "certifications", "skills", "contact"];
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActive(`#${ids[i]}`);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[rgba(10,10,10,0.95)] backdrop-blur-md border-b border-[rgba(0,255,136,0.1)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="font-display text-sm font-bold tracking-widest text-primary glow-text">
          PZ<span className="text-muted">::</span>SEC
        </a>

        <div className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`px-4 py-2 text-xs font-mono tracking-wider transition-all duration-200 relative ${
                active === item.href ? "text-primary" : "text-muted hover:text-text"
              }`}
            >
              {active === item.href && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-0 bg-[rgba(0,255,136,0.07)] border border-[rgba(0,255,136,0.2)]"
                />
              )}
              <span className="relative z-10">
                <span className="text-primary opacity-50">/</span>
                {item.label}
              </span>
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          {/* Language toggle */}
          <div className="flex items-center border border-[rgba(0,255,136,0.2)] overflow-hidden">
            <button
              onClick={() => setLang("en")}
              className={`px-3 py-1.5 text-[10px] font-mono tracking-widest transition-all duration-200 ${
                lang === "en"
                  ? "bg-primary text-bg font-bold"
                  : "text-muted hover:text-text"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("pl")}
              className={`px-3 py-1.5 text-[10px] font-mono tracking-widest transition-all duration-200 ${
                lang === "pl"
                  ? "bg-primary text-bg font-bold"
                  : "text-muted hover:text-text"
              }`}
            >
              PL
            </button>
          </div>

          <a
            href="mailto:zawieja.it@gmail.com"
            className="flex items-center gap-2 px-4 py-2 border border-primary text-primary text-xs font-mono tracking-wider hover:bg-primary hover:text-bg transition-all duration-200"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            {tr.hire}
          </a>
        </div>

        <button
          className="md:hidden text-primary p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="w-5 space-y-1">
            <span className={`block h-px bg-primary transition-all ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
            <span className={`block h-px bg-primary transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-px bg-primary transition-all ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </div>
        </button>
      </div>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[rgba(10,10,10,0.98)] border-b border-[rgba(0,255,136,0.1)] px-6 py-4 flex flex-col gap-2"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-mono text-muted hover:text-primary py-2 border-b border-[rgba(0,255,136,0.05)] transition-colors"
            >
              <span className="text-primary">$ </span>{item.label}
            </a>
          ))}
          <div className="flex gap-2 pt-2">
            <button
              onClick={() => setLang("en")}
              className={`px-3 py-1 text-xs font-mono border border-[rgba(0,255,136,0.2)] ${lang === "en" ? "bg-primary text-bg" : "text-muted"}`}
            >EN</button>
            <button
              onClick={() => setLang("pl")}
              className={`px-3 py-1 text-xs font-mono border border-[rgba(0,255,136,0.2)] ${lang === "pl" ? "bg-primary text-bg" : "text-muted"}`}
            >PL</button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
