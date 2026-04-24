"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TerminalIntro from "@/components/TerminalIntro";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Certifications from "@/components/sections/Certifications";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const targetPos = useRef({ x: -100, y: -100 });
  const currentPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
    };

    const animate = () => {
      const lerp = 0.15;
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * lerp;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * lerp;

      if (cursorRef.current) {
        cursorRef.current.style.left = `${currentPos.current.x - 10}px`;
        cursorRef.current.style.top = `${currentPos.current.y - 10}px`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    const onMouseEnterLink = () => setIsHovering(true);
    const onMouseLeaveLink = () => setIsHovering(false);

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    rafRef.current = requestAnimationFrame(animate);

    const links = document.querySelectorAll("a, button");
    links.forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnterLink);
      el.addEventListener("mouseleave", onMouseLeaveLink);
    });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, [introComplete]);

  return (
    <>
      {/* Custom cursor */}
      <div
        ref={cursorRef}
        className={`cursor ${isHovering ? "hovering" : ""}`}
        style={{ position: "fixed", pointerEvents: "none", zIndex: 9999 }}
      />
      <div
        ref={dotRef}
        className="cursor-dot"
        style={{ position: "fixed", pointerEvents: "none", zIndex: 9999 }}
      />

      {/* Terminal intro */}
      <TerminalIntro onComplete={() => setIntroComplete(true)} />

      {/* Scanlines overlay */}
      <div className="scanlines" />

      {/* Main content */}
      <AnimatePresence>
        {introComplete && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Navbar />
            <main>
              <Hero />
              <div className="section-sep mx-auto max-w-7xl" />
              <About />
              <div className="section-sep" />
              <Experience />
              <div className="section-sep" />
              <Projects />
              <div className="section-sep" />
              <Certifications />
              <div className="section-sep" />
              <Skills />
              <div className="section-sep" />
              <Contact />
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
