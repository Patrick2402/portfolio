import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";

export const metadata: Metadata = {
  title: "Patryk Zawieja | Cloud Security Engineer",
  description:
    "Cloud Security Engineer & DevSecOps Specialist. AWS, Azure, GCP, Cloudflare Security. Based in Bydgoszcz, Poland.",
  keywords: [
    "Cloud Security",
    "DevSecOps",
    "AWS Security",
    "Cloudflare",
    "GCP",
    "Vulnerability Management",
    "PCI DSS",
    "SAST",
    "Terraform",
  ],
  authors: [{ name: "Patryk Zawieja" }],
  openGraph: {
    title: "Patryk Zawieja | Cloud Security Engineer",
    description: "Cloud Security Engineer & DevSecOps Specialist",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600;700&family=Orbitron:wght@400;500;600;700;800;900&family=Share+Tech+Mono&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-bg text-text antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
