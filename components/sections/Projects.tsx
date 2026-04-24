"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { SectionHeader } from "@/components/ui/GlitchText";
import { useLang } from "@/lib/LanguageContext";
import { t } from "@/lib/translations";

type Project = {
  id: string;
  title: string;
  subtitle: string;
  status: string;
  statusColor: string;
  problem: string;
  solution: string;
  tech: string[];
  icon: string;
  accent: string;
  link: string | null;
  private?: boolean;
  wip?: boolean;
};

const PROJECTS: { en: Project[]; pl: Project[] } = {
  en: [
    {
      id: "vma",
      title: "VMA",
      subtitle: "Vulnerability Management App",
      status: "DEPLOYED",
      statusColor: "#00ff88",
      problem: "1000+ repositories with no unified visibility into security scan results.",
      solution: "End-to-end platform: CI/CD triggers security scans → results aggregated in S3 → Lambda (Go) → database → Grafana dashboard. Zero high/critical vuln policy enforcement for PCI DSS.",
      tech: ["Go", "AWS Lambda", "S3", "RDS", "Grafana", "GitLab CI"],
      icon: "📊", accent: "#00ff88", link: null, private: true,
    },
    {
      id: "gst",
      title: "Global Security Template",
      subtitle: "SSDLC CI/CD Framework",
      status: "DEPLOYED",
      statusColor: "#00d4ff",
      problem: "No consistent, maintainable security scanning across hundreds of repos in an airgap environment.",
      solution: "Unified SSDLC template with auto-update mechanism ('Release Radar') — detects new tool releases, rebuilds images, creates MRs with Slack approval flow.",
      tech: ["Trivy", "Semgrep", "KICS", "Grype", "GitLab CI", "Docker"],
      icon: "🛡️", accent: "#00d4ff", link: null, private: true,
    },
    {
      id: "cf-migration",
      title: "Axios → Cloudflare Migration",
      subtitle: "Infrastructure & Security Modernization",
      status: "DEPLOYED",
      statusColor: "#ff6b35",
      problem: "Legacy HTTP layer with no edge caching, higher latency, and limited DDoS protection.",
      solution: "Migrated services to Cloudflare Workers & Pages. Edge-first architecture with built-in WAF, DDoS protection, and significant performance gains.",
      tech: ["Cloudflare Workers", "Cloudflare Pages", "WAF", "Edge Computing"],
      icon: "☁️", accent: "#ff6b35", link: null, private: true,
    },
    {
      id: "ids",
      title: "Custom IDS",
      subtitle: "Intrusion Detection System",
      status: "DEPLOYED",
      statusColor: "#00ff88",
      problem: "Commercial IDS solution was expensive and impossible to customize.",
      solution: "Custom EC2 AMI with Zeek + Suricata + Fluent-bit. More efficient, cheaper, better log visibility.",
      tech: ["Suricata", "Zeek", "Fluent-bit", "EC2", "Terraform"],
      icon: "🔍", accent: "#ff6b35", link: null, private: true,
    },
    {
      id: "boarcloud",
      title: "BoarCloud",
      subtitle: "Cloud Security Platform (WIP)",
      status: "IN DEV",
      statusColor: "#ffbd2e",
      problem: "Enterprise cloud security platforms (Wiz, Aqua) are extremely expensive.",
      solution: "Open-source alternative: AWS resource rule engine, full resource map by ID/ARN, IaC & code scanning, compliance rules. Built as a SaaS-ready platform.",
      tech: ["Go", "AWS", "Terraform", "SaaS", "Open Source"],
      icon: "🐗", accent: "#ffbd2e", link: null, wip: true,
    },
    {
      id: "paksafe",
      title: "PakSafe",
      subtitle: "Dependency Confusion Detector",
      status: "OPEN SOURCE",
      statusColor: "#00ff88",
      problem: "Dependency confusion supply chain attacks are underestimated and hard to detect in CI/CD.",
      solution: "Custom CLI tool for detecting dependency confusion attacks. Used in production pipelines.",
      tech: ["Go", "CLI", "Supply Chain Security", "CI/CD"],
      icon: "📦", accent: "#00ff88", link: "https://github.com/Patrick2402/PakSafe",
    },
    {
      id: "escalato",
      title: "Escalato",
      subtitle: "IAM Privilege Escalation Scanner",
      status: "OPEN SOURCE",
      statusColor: "#00ff88",
      problem: "No affordable tool for detecting IAM privilege escalation paths in large AWS accounts.",
      solution: "Custom tool for detecting vulnerable IAM roles/users and escalation paths. Used in real pentests.",
      tech: ["Go", "AWS IAM", "CLI", "Pentesting"],
      icon: "🔐", accent: "#00ff88", link: "https://github.com/Patrick2402/escalato",
    },
    {
      id: "aws-modules",
      title: "AWS Security Modules",
      subtitle: "Terraform Security Baseline",
      status: "DEPLOYED",
      statusColor: "#ff6b35",
      problem: "Manual, inconsistent security tooling setup across multiple AWS accounts.",
      solution: "Reusable Terraform modules for GuardDuty, Security Hub, IAM Analyzer, AWS Config — deployed with Slack alerting.",
      tech: ["Terraform", "GuardDuty", "Security Hub", "AWS Config", "Slack"],
      icon: "☁️", accent: "#ff6b35", link: null, private: true,
    },
  ],
  pl: [
    {
      id: "vma",
      title: "VMA",
      subtitle: "Aplikacja Zarządzania Podatnościami",
      status: "WDROŻONY",
      statusColor: "#00ff88",
      problem: "1000+ repozytoriów bez ujednoliconej widoczności wyników skanowania security.",
      solution: "Kompleksowa platforma: CI/CD uruchamia skany → wyniki w S3 → Lambda (Go) → baza danych → Grafana. Egzekwowanie polityki zero high/critical dla PCI DSS.",
      tech: ["Go", "AWS Lambda", "S3", "RDS", "Grafana", "GitLab CI"],
      icon: "📊", accent: "#00ff88", link: null, private: true,
    },
    {
      id: "gst",
      title: "Global Security Template",
      subtitle: "Framework SSDLC dla CI/CD",
      status: "WDROŻONY",
      statusColor: "#00d4ff",
      problem: "Brak spójnego, łatwego w utrzymaniu skanowania security w setkach repozytoriów w środowisku airgap.",
      solution: "Ujednolicony szablon SSDLC z mechanizmem auto-aktualizacji ('Release Radar') — wykrywa nowe wersje narzędzi, przebudowuje obrazy, tworzy MR z procesem zatwierdzania przez Slack.",
      tech: ["Trivy", "Semgrep", "KICS", "Grype", "GitLab CI", "Docker"],
      icon: "🛡️", accent: "#00d4ff", link: null, private: true,
    },
    {
      id: "cf-migration",
      title: "Migracja Axios → Cloudflare",
      subtitle: "Modernizacja Infrastruktury i Bezpieczeństwa",
      status: "WDROŻONY",
      statusColor: "#ff6b35",
      problem: "Stara warstwa HTTP bez cache'owania na edge, wyższe opóźnienia, ograniczona ochrona DDoS.",
      solution: "Migracja usług na Cloudflare Workers & Pages. Architektura edge-first z wbudowanym WAF, ochroną DDoS i znacznym wzrostem wydajności.",
      tech: ["Cloudflare Workers", "Cloudflare Pages", "WAF", "Edge Computing"],
      icon: "☁️", accent: "#ff6b35", link: null, private: true,
    },
    {
      id: "ids",
      title: "Własny System IDS",
      subtitle: "System Wykrywania Włamań",
      status: "WDROŻONY",
      statusColor: "#00ff88",
      problem: "Komercyjny IDS był drogi i niemożliwy do dostosowania.",
      solution: "Własne AMI EC2 z Zeek + Suricata + Fluent-bit. Tańsze, wydajniejsze, lepszy wgląd w logi.",
      tech: ["Suricata", "Zeek", "Fluent-bit", "EC2", "Terraform"],
      icon: "🔍", accent: "#ff6b35", link: null, private: true,
    },
    {
      id: "boarcloud",
      title: "BoarCloud",
      subtitle: "Platforma Cloud Security (WIP)",
      status: "W TRAKCIE",
      statusColor: "#ffbd2e",
      problem: "Enterprise platformy cloud security (Wiz, Aqua) są bardzo drogie.",
      solution: "Open-source'owa alternatywa: silnik reguł AWS, pełna mapa zasobów po ID/ARN, skanowanie IaC i kodu, reguły compliance. Budowany jako platforma SaaS.",
      tech: ["Go", "AWS", "Terraform", "SaaS", "Open Source"],
      icon: "🐗", accent: "#ffbd2e", link: null, wip: true,
    },
    {
      id: "paksafe",
      title: "PakSafe",
      subtitle: "Detektor Dependency Confusion",
      status: "OPEN SOURCE",
      statusColor: "#00ff88",
      problem: "Ataki dependency confusion są niedoceniane i trudne do wykrycia w CI/CD.",
      solution: "Własne narzędzie CLI do wykrywania ataków dependency confusion. Używane na produkcji.",
      tech: ["Go", "CLI", "Supply Chain Security", "CI/CD"],
      icon: "📦", accent: "#00ff88", link: "https://github.com/Patrick2402/PakSafe",
    },
    {
      id: "escalato",
      title: "Escalato",
      subtitle: "Skaner Eskalacji Uprawnień IAM",
      status: "OPEN SOURCE",
      statusColor: "#00ff88",
      problem: "Brak przystępnego narzędzia do wykrywania ścieżek eskalacji uprawnień IAM w dużych kontach AWS.",
      solution: "Własne narzędzie do wykrywania podatnych ról/użytkowników IAM. Używane w prawdziwych penteestach.",
      tech: ["Go", "AWS IAM", "CLI", "Pentesting"],
      icon: "🔐", accent: "#00ff88", link: "https://github.com/Patrick2402/escalato",
    },
    {
      id: "aws-modules",
      title: "Moduły Terraform AWS Security",
      subtitle: "Baseline Bezpieczeństwa AWS",
      status: "WDROŻONY",
      statusColor: "#ff6b35",
      problem: "Ręczna, niespójna konfiguracja narzędzi security na wielu kontach AWS.",
      solution: "Wielokrotnego użytku moduły Terraform dla GuardDuty, Security Hub, IAM Analyzer — z alertowaniem Slack.",
      tech: ["Terraform", "GuardDuty", "Security Hub", "AWS Config", "Slack"],
      icon: "☁️", accent: "#ff6b35", link: null, private: true,
    },
  ],
};

type ProjectsTr = { problem: string; solution: string; github: string; privateLabel: string; wipLabel: string };
function ProjectCard({ project, tr, index }: { project: Project; tr: ProjectsTr; index: number }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 8, y: y * -8 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      style={{ perspective: "1000px" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setTilt({ x: 0, y: 0 }); setHovered(false); }}
    >
      <motion.div
        animate={{ rotateX: tilt.y, rotateY: tilt.x }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="card-border p-6 h-full flex flex-col relative overflow-hidden"
        style={{
          borderColor: hovered ? `${project.accent}50` : undefined,
          boxShadow: hovered ? `0 20px 40px rgba(0,0,0,0.4), 0 0 20px ${project.accent}20` : undefined,
          transformStyle: "preserve-3d",
        }}
      >
        <div
          className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ background: `radial-gradient(circle at 50% 50%, ${project.accent}08, transparent 70%)` }}
        />

        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{project.icon}</span>
            <div>
              <h3 className="font-display text-base font-bold" style={{ color: project.accent }}>
                {project.title}
              </h3>
              <p className="text-muted text-xs font-mono">{project.subtitle}</p>
            </div>
          </div>
          <div className="flex flex-col items-end gap-1">
            <span
              className="text-[9px] font-mono px-2 py-0.5 border"
              style={{ color: project.statusColor, borderColor: `${project.statusColor}40` }}
            >
              {project.status}
            </span>
            {project.private && (
              <span className="text-[9px] font-mono text-muted border border-[rgba(255,255,255,0.05)] px-1.5 py-0.5">
                {tr.privateLabel}
              </span>
            )}
          </div>
        </div>

        <div className="flex-1 space-y-3 mb-4">
          <div>
            <span className="text-[10px] font-mono text-muted uppercase tracking-widest">{tr.problem}</span>
            <p className="text-[#94a3b8] text-xs font-mono leading-relaxed mt-1">{project.problem}</p>
          </div>
          <div>
            <span className="text-[10px] font-mono text-muted uppercase tracking-widest">{tr.solution}</span>
            <p className="text-[#94a3b8] text-xs font-mono leading-relaxed mt-1">{project.solution}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="text-[9px] font-mono px-1.5 py-0.5 border"
              style={{ color: `${project.accent}cc`, borderColor: `${project.accent}20`, backgroundColor: `${project.accent}06` }}
            >
              {tech}
            </span>
          ))}
        </div>

        {project.link && (
          <a href={project.link} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-mono transition-colors"
            style={{ color: project.accent }}>
            {tr.github} ↗
          </a>
        )}
        {project.wip && <div className="text-[10px] font-mono text-muted">{tr.wipLabel}</div>}
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const { lang } = useLang();
  const tr = t[lang].projects;
  const projects = PROJECTS[lang];

  return (
    <section id="projects" className="py-32 px-6 max-w-7xl mx-auto">
      <SectionHeader label={tr.sectionLabel} title={tr.sectionTitle} />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} tr={tr} index={i} />
        ))}
      </div>
    </section>
  );
}
