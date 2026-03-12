"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden hero-section"
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", paddingTop: "5rem", backgroundColor: "#000000" }}
    >
      {/* Subtle radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "1000px",
            height: "1000px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)",
            filter: "blur(48px)",
          }}
        />
      </div>

      <div
        className="relative z-10"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          width: "100%",
          maxWidth: "960px",
          margin: "0 auto",
          padding: "0 1.5rem",
        }}
      >
        {/* Product Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] as const, delay: 0.2 }}
          style={{ width: "100%", maxWidth: "600px", margin: "2rem auto 2.5rem", position: "relative" }}
        >
          {/* Outer ambient glow */}
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "110%", height: "110%", borderRadius: "50%", background: "radial-gradient(circle, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 40%, transparent 70%)", filter: "blur(30px)", pointerEvents: "none" }} />
          {/* Inner ring glow */}
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "80%", height: "80%", borderRadius: "50%", background: "radial-gradient(circle, rgba(200,200,255,0.1) 0%, transparent 60%)", filter: "blur(20px)", pointerEvents: "none" }} />
          <Image
            src="/images/hero-goggles.png"
            alt="Sentio Smart HUD Goggles"
            width={800}
            height={600}
            priority
            style={{ position: "relative", zIndex: 2, width: "100%", height: "auto", objectFit: "contain", filter: "drop-shadow(0 8px 40px rgba(255,255,255,0.12)) drop-shadow(0 0 100px rgba(180,180,255,0.08))" }}
          />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as const, delay: 0.5 }}
          style={{ fontSize: "clamp(3rem, 8vw, 7rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 0.95 }}
        >
          Vision Meets
          <br />
          <span
            style={{
              background: "linear-gradient(90deg, #ffffff, #a3a3a3, #737373)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Instinct.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          style={{ marginTop: "1.5rem", color: "#a3a3a3", fontSize: "clamp(1rem, 2vw, 1.25rem)", maxWidth: "32rem", margin: "1.5rem auto 0", fontWeight: 300 }}
        >
          The ultimate smart HUD goggles for Motocross and Winter Sports.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          style={{ marginTop: "2.5rem", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "1rem" }}
        >
          <Link
            href="/moto"
            style={{
              padding: "0.875rem 2rem",
              borderRadius: "9999px",
              background: "linear-gradient(90deg, #f59e0b, #facc15)",
              color: "#000",
              fontWeight: 600,
              fontSize: "0.875rem",
              letterSpacing: "0.025em",
              transition: "all 0.3s",
              boxShadow: "0 0 30px rgba(245,158,11,0.25)",
              display: "inline-block",
              textDecoration: "none",
            }}
          >
            Explore Moto
          </Link>
          <Link
            href="/snow"
            style={{
              padding: "0.875rem 2rem",
              borderRadius: "9999px",
              background: "linear-gradient(90deg, #38bdf8, #67e8f9)",
              color: "#000",
              fontWeight: 600,
              fontSize: "0.875rem",
              letterSpacing: "0.025em",
              transition: "all 0.3s",
              boxShadow: "0 0 30px rgba(56,189,248,0.25)",
              display: "inline-block",
              textDecoration: "none",
            }}
          >
            Explore Snow
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        style={{ position: "absolute", bottom: "2.5rem", left: "50%", transform: "translateX(-50%)", zIndex: 10 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown style={{ color: "#737373" }} size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}
