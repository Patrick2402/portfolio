"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionHeader } from "@/components/ui/GlitchText";
import { useLang } from "@/lib/LanguageContext";
import { t } from "@/lib/translations";

const EXPERIENCE = {
  en: [
    {
      role: "Cloud Security Engineer",
      company: "Rapyd",
      location: "Remote / International",
      period: "Sep 2024 – Present",
      color: "#ff6b35",
      badge: true,
      points: [
        "Full ownership of Cloud Security across AWS accounts — GuardDuty, Security Hub, IAM Analyzer, AWS Config",
        "Designed end-to-end vulnerability management platform integrating CI/CD pipelines with security scanning",
        "Built custom IDS solution replacing expensive commercial alternative — significant cost reduction",
        "AWS pentesting and red team exercises on multiple accounts using open-source and custom tools",
        "Led PCI DSS v4 audit preparation and SOC 1 Type 2 compliance work",
        "Migration of services to Cloudflare Workers & Pages — performance and security improvements",
      ],
      tools: ["AWS", "Trivy", "Semgrep", "KICS", "Coralogix", "Terraform", "GitLab CI", "Cloudflare", "Go"],
    },
    {
      role: "DevOps Engineer | Security Specialist",
      company: "Tenesys",
      location: "Poznań · Hybrid",
      period: "Feb 2023 – Aug 2024",
      color: "#00d4ff",
      badge: false,
      points: [
        "Managed AWS projects ranging from single accounts to multi-account organizations",
        "Security Expert role: technical lead for SIEM implementation and AWS security tooling",
        "Cloud migrations and infrastructure automation for international clients",
        "Terraform, GitLab CI/CD, GitHub Actions, Ansible for infrastructure as code",
      ],
      tools: ["AWS", "Terraform", "GitLab CI", "GitHub Actions", "Wazuh", "Sentinel", "Ansible"],
    },
    {
      role: "Senior Security Specialist",
      company: "B2B Freelancing",
      location: "Remote · Multiple Companies",
      period: "Jan 2020 – Present",
      color: "#00ff88",
      badge: false,
      points: [
        "Architected SSDLC security frameworks for multiple companies",
        "Deployed SAST, DAST, CNAPP, and container scanning stacks",
        "Automated security gates in CI/CD pipelines with real-time notifications",
      ],
      tools: ["SAST", "DAST", "Wiz CNAPP", "AquaSec", "CI/CD"],
    },
    {
      role: "Cybersecurity Analyst",
      company: "Smartech-IT",
      location: "Wrocław · On-site",
      period: "Jul 2022 – Dec 2022",
      color: "#a78bfa",
      badge: false,
      points: [
        "Azure Sentinel implementation from scratch — threat detection rules, KQL queries, playbooks",
        "Azure Defender 365, Defender for Identity, Defender for Endpoint administration",
      ],
      tools: ["Azure Sentinel", "KQL", "Azure Defender 365", "Azure Cloud"],
    },
  ],
  pl: [
    {
      role: "Cloud Security Engineer",
      company: "Rapyd",
      location: "Praca zdalna / Międzynarodowy",
      period: "wrz 2024 – obecnie",
      color: "#ff6b35",
      badge: true,
      points: [
        "Pełna odpowiedzialność za Cloud Security na kontach AWS — GuardDuty, Security Hub, IAM Analyzer",
        "Zaprojektowanie kompleksowej platformy zarządzania podatnościami zintegrowanej z pipeline'ami CI/CD",
        "Budowa własnego systemu IDS zastępującego drogie rozwiązanie komercyjne — znaczna redukcja kosztów",
        "Testy penetracyjne AWS i ćwiczenia red team na wielu kontach",
        "Przygotowanie do audytu PCI DSS v4 i zgodności SOC 1 Type 2",
        "Migracja usług na Cloudflare Workers & Pages — poprawa wydajności i bezpieczeństwa",
      ],
      tools: ["AWS", "Trivy", "Semgrep", "KICS", "Coralogix", "Terraform", "GitLab CI", "Cloudflare", "Go"],
    },
    {
      role: "DevOps Engineer | Specjalista ds. Bezpieczeństwa",
      company: "Tenesys",
      location: "Poznań · Hybrid",
      period: "lut 2023 – sie 2024",
      color: "#00d4ff",
      badge: false,
      points: [
        "Zarządzanie projektami AWS — od pojedynczych kont do organizacji wielokontowych",
        "Rola Security Expert: wdrożenie SIEM i narzędzi bezpieczeństwa AWS",
        "Migracje do chmury i automatyzacja infrastruktury dla klientów z całego świata",
        "Terraform, GitLab CI/CD, GitHub Actions, Ansible",
      ],
      tools: ["AWS", "Terraform", "GitLab CI", "GitHub Actions", "Wazuh", "Sentinel", "Ansible"],
    },
    {
      role: "Starszy Specjalista ds. Bezpieczeństwa",
      company: "B2B Freelancing",
      location: "Zdalnie · Wiele firm",
      period: "sty 2020 – obecnie",
      color: "#00ff88",
      badge: false,
      points: [
        "Projektowanie frameworków SSDLC dla wielu firm",
        "Wdrożenia SAST, DAST, CNAPP i skanowania kontenerów",
        "Automatyzacja bramek bezpieczeństwa w pipeline'ach CI/CD",
      ],
      tools: ["SAST", "DAST", "Wiz CNAPP", "AquaSec", "CI/CD"],
    },
    {
      role: "Analityk Cyberbezpieczeństwa",
      company: "Smartech-IT",
      location: "Wrocław · Stacjonarnie",
      period: "lip 2022 – gru 2022",
      color: "#a78bfa",
      badge: false,
      points: [
        "Implementacja Azure Sentinel od zera — reguły detekcji, zapytania KQL, playbooki",
        "Administracja Azure Defender 365, Defender for Identity, Defender for Endpoint",
      ],
      tools: ["Azure Sentinel", "KQL", "Azure Defender 365", "Azure Cloud"],
    },
  ],
};

export default function Experience() {
  const { lang } = useLang();
  const tr = t[lang].experience;
  const entries = EXPERIENCE[lang];
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32 px-6 bg-[#08090d]">
      <div className="max-w-5xl mx-auto">
        <SectionHeader label={tr.sectionLabel} title={tr.sectionTitle} />

        <div ref={ref} className="relative">
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-[rgba(0,255,136,0.1)]">
            <motion.div
              className="w-full origin-top"
              style={{ height: "100%", background: "linear-gradient(to bottom, #00ff88, #00d4ff, transparent)" }}
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </div>

          <div className="space-y-12 pl-16 md:pl-20">
            {entries.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative"
              >
                <div
                  className="absolute -left-[3.3rem] md:-left-[3.8rem] top-2 w-4 h-4 rounded-full border-2 flex items-center justify-center"
                  style={{
                    borderColor: exp.color,
                    boxShadow: `0 0 12px ${exp.color}`,
                    backgroundColor: "#0a0a0a",
                  }}
                >
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: exp.color }} />
                </div>

                <div className="card-border p-6 md:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="font-display text-lg font-bold text-text">{exp.role}</h3>
                        {exp.badge && (
                          <span
                            className="text-[10px] font-mono px-2 py-0.5 border animate-pulse"
                            style={{ color: exp.color, borderColor: exp.color, boxShadow: `0 0 8px ${exp.color}40` }}
                          >
                            {tr.current}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 mt-1 flex-wrap">
                        <span className="font-mono text-sm" style={{ color: exp.color }}>{exp.company}</span>
                        <span className="text-muted text-xs font-mono">·</span>
                        <span className="text-muted text-xs font-mono">{exp.location}</span>
                      </div>
                    </div>
                    <span className="text-muted text-xs font-mono whitespace-nowrap px-3 py-1 border border-[rgba(255,255,255,0.05)]">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-5">
                    {exp.points.map((point, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className="text-primary mt-1 flex-shrink-0 text-xs">▸</span>
                        <span className="text-[#94a3b8] text-xs font-mono leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-[10px] font-mono px-2 py-0.5 border"
                        style={{ color: `${exp.color}cc`, borderColor: `${exp.color}30`, backgroundColor: `${exp.color}08` }}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
