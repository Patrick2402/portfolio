"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/GlitchText";
import { useLang } from "@/lib/LanguageContext";
import { t } from "@/lib/translations";

const CERT_GROUPS = [
  {
    provider: "AWS",
    color: "#ff9900",
    abbr: "AWS",
    certs: [
      { name: "Cloud Practitioner", namePl: "Cloud Practitioner", code: "CLF-C02" },
      { name: "SysOps Administrator Associate", namePl: "SysOps Administrator Associate", code: "SOA-C02" },
      { name: "Security — Specialty", namePl: "Security — Specialty", code: "SCS-C02", highlight: true },
    ],
  },
  {
    provider: "Microsoft Azure",
    color: "#0078d4",
    abbr: "AZ",
    certs: [
      { name: "Security, Compliance & Identity Fundamentals", namePl: "Security, Compliance & Identity Fundamentals", code: "SC-900" },
      { name: "Azure Security Engineer Associate", namePl: "Azure Security Engineer Associate", code: "AZ-500", highlight: true },
      { name: "Microsoft 365 Security Administrator", namePl: "Microsoft 365 Security Administrator", code: "MS-500" },
      { name: "Security Operations Analyst Associate", namePl: "Security Operations Analyst Associate", code: "SC-200" },
      { name: "Cybersecurity Architect Expert", namePl: "Cybersecurity Architect Expert", code: "SC-100", highlight: true },
    ],
  },
  {
    provider: "Cisco",
    color: "#1ba0d8",
    abbr: "CCNA",
    certs: [
      { name: "Introduction to Networks", namePl: "Introduction to Networks", code: "CCNA 1" },
      { name: "Switching, Routing & Wireless Essentials", namePl: "Switching, Routing & Wireless Essentials", code: "CCNA 2" },
      { name: "Enterprise Networking, Security & Automation", namePl: "Enterprise Networking, Security & Automation", code: "CCNA 3" },
      { name: "Network Security", namePl: "Network Security", code: "NS" },
    ],
  },
  {
    provider: "HashiCorp",
    color: "#a78bfa",
    abbr: "HCP",
    certs: [
      { name: "Terraform Associate (003)", namePl: "Terraform Associate (003)", code: "003", highlight: true },
    ],
  },
  {
    provider: "ISO 27001",
    color: "#00ff88",
    abbr: "ISO",
    certs: [
      { name: "Internal Auditor — Information Security Management System", namePl: "Audytor Wewnętrzny — System Zarządzania Bezpieczeństwem Informacji", code: "ISO 27001:2017", highlight: true },
    ],
  },
];

export default function Certifications() {
  const { lang } = useLang();
  const tr = t[lang].certs;

  return (
    <section id="certifications" className="py-32 px-6 bg-[#08090d]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader label={tr.sectionLabel} title={tr.sectionTitle} />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-12"
        >
          <div className="card-border px-5 py-3 flex items-center gap-3">
            <span className="font-display text-3xl font-black text-primary glow-text">{tr.count}</span>
            <div>
              <div className="text-text text-xs font-mono font-semibold">{tr.countLabel}</div>
              <div className="text-muted text-[10px] font-mono">{tr.countSub}</div>
            </div>
          </div>
          <a
            href="https://www.credly.com/users/patryk-zawieja"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-3 border border-[rgba(0,255,136,0.2)] text-primary text-xs font-mono hover:bg-[rgba(0,255,136,0.05)] transition-colors"
          >
            {tr.credlyBtn}
          </a>
        </motion.div>

        <div className="space-y-12">
          {CERT_GROUPS.map((group, gi) => (
            <motion.div
              key={group.provider}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-8 h-8 flex items-center justify-center border text-xs font-display font-bold"
                  style={{ borderColor: `${group.color}50`, color: group.color, backgroundColor: `${group.color}10` }}
                >
                  {group.abbr.slice(0, 2)}
                </div>
                <span className="font-display text-sm font-bold tracking-wider" style={{ color: group.color }}>
                  {group.provider}
                </span>
                <div className="flex-1 h-px" style={{ background: `${group.color}20` }} />
                <span className="text-muted text-xs font-mono">
                  {group.certs.length} {lang === "pl" ? (group.certs.length === 1 ? "cert" : "certy") : `cert${group.certs.length > 1 ? "s" : ""}`}
                </span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                {group.certs.map((cert, ci) => (
                  <motion.div
                    key={cert.code}
                    initial={{ opacity: 0, y: 20, rotateY: -15 }}
                    whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: ci * 0.06 }}
                    className="cert-card"
                    style={{ perspective: "600px" }}
                  >
                    <div className="cert-card-inner relative" style={{ transformStyle: "preserve-3d" }}>
                      <div
                        className="cert-card-front card-border p-4 flex flex-col justify-between min-h-[110px]"
                        style={{
                          borderColor: cert.highlight ? `${group.color}40` : undefined,
                          backgroundColor: cert.highlight ? `${group.color}05` : undefined,
                        }}
                      >
                        <div>
                          <span
                            className="text-[9px] font-mono px-1.5 py-0.5 border mb-2 inline-block"
                            style={{ color: group.color, borderColor: `${group.color}40` }}
                          >
                            {cert.code}
                          </span>
                          <p className="text-text text-xs font-mono leading-snug font-medium">
                            {lang === "pl" ? cert.namePl : cert.name}
                          </p>
                        </div>
                        {cert.highlight && (
                          <div className="flex items-center gap-1 mt-2">
                            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: group.color }} />
                            <span className="text-[9px] font-mono" style={{ color: group.color }}>
                              {lang === "pl" ? "Zweryfikowany" : "Verified"}
                            </span>
                          </div>
                        )}
                      </div>

                      <div
                        className="cert-card-back absolute inset-0 flex flex-col items-center justify-center p-4 border"
                        style={{ borderColor: `${group.color}40`, backgroundColor: "#0a0a0a", backfaceVisibility: "hidden" }}
                      >
                        <div className="text-3xl font-display font-black mb-2" style={{ color: group.color }}>✓</div>
                        <p className="text-[10px] font-mono text-center" style={{ color: group.color }}>{cert.code}</p>
                        <p className="text-[9px] font-mono text-muted text-center mt-1">Credly Verified</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
