"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LINES = [
  { text: "Initializing secure connection...", delay: 0 },
  { text: "Establishing encrypted tunnel...", delay: 600 },
  { text: "Loading profile: patryk.zawieja...", delay: 1300 },
  { text: "Verifying credentials...", delay: 2000 },
  { text: "Decrypting security clearance...", delay: 2700 },
  { text: "", delay: 3300 },
  { text: "██████████████████████ 100%", delay: 3400, isProgress: true },
  { text: "", delay: 3800 },
  { text: "ACCESS GRANTED", delay: 3900, isSuccess: true },
  { text: "Welcome, Patryk Zawieja — Cloud Security Engineer", delay: 4500, isWelcome: true },
];

export default function TerminalIntro({ onComplete }: { onComplete: () => void }) {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const [typedTexts, setTypedTexts] = useState<string[]>(Array(LINES.length).fill(""));
  const [done, setDone] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    LINES.forEach((line, i) => {
      timers.push(
        setTimeout(() => {
          setVisibleLines((prev) => [...prev, i]);
          if (line.text) {
            let charIndex = 0;
            const typeInterval = setInterval(() => {
              charIndex++;
              setTypedTexts((prev) => {
                const next = [...prev];
                next[i] = line.text.slice(0, charIndex);
                return next;
              });
              if (charIndex >= line.text.length) clearInterval(typeInterval);
            }, line.isProgress ? 20 : line.isSuccess || line.isWelcome ? 40 : 18);
          }
        }, line.delay)
      );
    });

    timers.push(
      setTimeout(() => {
        setDone(true);
        setTimeout(() => {
          setExiting(true);
          setTimeout(onComplete, 800);
        }, 400);
      }, 5800)
    );

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#050505]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Scanlines */}
          <div className="scanlines absolute inset-0 pointer-events-none" />

          {/* Terminal window */}
          <div className="w-full max-w-2xl mx-4">
            {/* Window chrome */}
            <div className="flex items-center gap-2 bg-[#111] border border-[rgba(0,255,136,0.2)] rounded-t px-4 py-3">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
              <span className="ml-3 text-[#64748b] text-xs font-mono">
                secure-shell — patryk@guardian:~
              </span>
            </div>

            {/* Terminal body */}
            <div className="bg-[#0a0a0a] border border-t-0 border-[rgba(0,255,136,0.2)] rounded-b p-6 min-h-[320px] font-mono text-sm">
              {LINES.map((line, i) =>
                visibleLines.includes(i) ? (
                  <div key={i} className="mb-1 leading-relaxed">
                    {line.isSuccess ? (
                      <span className="text-[#00ff88] font-bold text-lg tracking-widest glow-text">
                        {typedTexts[i]}
                        {typedTexts[i].length < line.text.length && (
                          <span className="typewriter-cursor" />
                        )}
                      </span>
                    ) : line.isWelcome ? (
                      <span className="text-[#00d4ff] font-medium">
                        <span className="text-[#64748b]">{">> "}</span>
                        {typedTexts[i]}
                        {typedTexts[i].length < line.text.length && (
                          <span className="typewriter-cursor" />
                        )}
                      </span>
                    ) : line.isProgress ? (
                      <span className="text-[#00ff88] opacity-70 text-xs">
                        {typedTexts[i]}
                      </span>
                    ) : line.text === "" ? (
                      <br />
                    ) : (
                      <span>
                        <span className="text-[#00ff88]">{"$ "}</span>
                        <span className="text-[#94a3b8]">
                          {typedTexts[i]}
                          {typedTexts[i].length < line.text.length && (
                            <span className="typewriter-cursor" />
                          )}
                        </span>
                      </span>
                    )}
                  </div>
                ) : null
              )}

              {/* Active cursor at end */}
              {done && (
                <div className="mt-2">
                  <span className="text-[#00ff88]">{"$ "}</span>
                  <span className="typewriter-cursor" />
                </div>
              )}
            </div>
          </div>

          {/* Corner decorations */}
          <div className="absolute top-4 left-4 text-[#00ff88] text-xs opacity-30 font-mono">
            [SYS:SECURE] [ENC:AES-256] [AUTH:OK]
          </div>
          <div className="absolute bottom-4 right-4 text-[#00ff88] text-xs opacity-30 font-mono">
            {new Date().toISOString().split(".")[0]}Z
          </div>
          <div className="absolute top-4 right-4 text-[#00d4ff] text-xs opacity-20 font-mono">
            IPv6::ENCRYPTED
          </div>
          <div className="absolute bottom-4 left-4 text-[#64748b] text-xs opacity-40 font-mono">
            BYDGOSZCZ, PL // 53.1235°N 18.0084°E
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
