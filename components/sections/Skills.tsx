"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/GlitchText";
import { useLang } from "@/lib/LanguageContext";
import { t } from "@/lib/translations";

const SKILL_CATEGORIES = [
  {
    labelEn: "Cloud Security",
    labelPl: "Cloud Security",
    color: "#ff6b35",
    icon: "☁️",
    skills: ["AWS Security Hub", "GuardDuty", "IAM Analyzer", "AWS Config", "Wiz CNAPP", "AquaSec", "Cloudflare WAF", "GCP Security"],
  },
  {
    labelEn: "DevSecOps / SSDLC",
    labelPl: "DevSecOps / SSDLC",
    color: "#00ff88",
    icon: "🔄",
    skills: ["Semgrep", "Polaris (BlackDuck)", "Checkmarx", "SonarQube", "Invicti DAST", "OWASP ZAP", "KICS", "Trivy", "Grype", "Snync"],
  },
  {
    labelEn: "Cloud Platforms",
    labelPl: "Platformy Cloud",
    color: "#ff9900",
    icon: "🌐",
    skills: ["AWS (Expert)", "Azure (Expert)", "GCP", "Cloudflare", "Cloudflare Workers", "Cloudflare Pages"],
  },
  {
    labelEn: "Infrastructure & IaC",
    labelPl: "Infrastruktura i IaC",
    color: "#a78bfa",
    icon: "🏗️",
    skills: ["Terraform (Expert)", "Atlantis", "GitLab CI/CD (Expert)", "GitHub Actions", "Ansible", "Docker", "Kubernetes"],
  },
  {
    labelEn: "Security Platforms",
    labelPl: "Platformy Security",
    color: "#00d4ff",
    icon: "🛡️",
    skills: ["Wazuh", "Microsoft Sentinel", "Coralogix", "CloudFox", "Pacu"],
  },
  {
    labelEn: "Networking & IDS",
    labelPl: "Sieć i IDS",
    color: "#00ff88",
    icon: "🔌",
    skills: ["Suricata (Expert)", "Zeek (Expert)", "Fluent-bit", "Network Security", "TCP/IP"],
  },
  {
    labelEn: "Programming",
    labelPl: "Programowanie",
    color: "#ffbd2e",
    icon: "💻",
    skills: ["Go (Primary)", "Rust (Learning)", "Bash (Expert)", "Python", "JavaScript", "KQL"],
  },
  {
    labelEn: "SaaS & Architecture",
    labelPl: "SaaS i Architektura",
    color: "#f472b6",
    icon: "🏛️",
    skills: ["SaaS from scratch", "Security Architecture", "PCI DSS v4", "SOC 1 Type 2", "ISO 27001", "SSDLC Design"],
  },
];

export default function Skills() {
  const { lang } = useLang();
  const tr = t[lang].skills;

  return (
    <section id="skills" className="py-32 px-6 max-w-7xl mx-auto">
      <SectionHeader label={tr.sectionLabel} title={tr.sectionTitle} />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SKILL_CATEGORIES.map((cat, ci) => (
          <motion.div
            key={cat.labelEn}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, delay: ci * 0.07 }}
            className="card-border p-5"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-lg">{cat.icon}</span>
              <h3 className="font-display text-xs font-bold tracking-wider uppercase" style={{ color: cat.color }}>
                {lang === "pl" ? cat.labelPl : cat.labelEn}
              </h3>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {cat.skills.map((skill, si) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: ci * 0.07 + si * 0.04 }}
                  className="skill-tag text-[10px] cursor-default"
                  style={{ color: `${cat.color}cc`, borderColor: `${cat.color}20`, backgroundColor: `${cat.color}05` }}
                  whileHover={{ backgroundColor: `${cat.color}15`, borderColor: `${cat.color}60`, y: -2 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-16 p-6 border border-[rgba(0,255,136,0.1)] bg-[rgba(0,255,136,0.02)]"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-primary text-xs font-mono tracking-widest">{tr.activeToolchain}</span>
        </div>
        <div className="flex flex-wrap gap-3">
          {["Trivy", "Semgrep", "KICS", "Grype", "Snync", "PakSafe", "Escalato", "Coralogix", "GitLab CI", "Terraform", "Cloudflare", "Suricata", "Zeek", "Go"].map((tool) => (
            <span key={tool} className="text-xs font-mono text-secondary border border-[rgba(0,212,255,0.2)] px-2 py-0.5">
              {tool}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
