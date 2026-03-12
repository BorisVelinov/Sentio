"use client";

import { motion } from "framer-motion";
import {
  Gauge,
  Navigation,
  Timer,
  Video,
  ShoppingCart,
  ArrowLeft,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const motoFeatures = [
  { icon: Gauge, label: "Live Speed HUD", detail: "Real-time speed on your lens" },
  { icon: Navigation, label: "Trail Navigation", detail: "GPS waypoints & heading" },
  { icon: Timer, label: "Lap Timer", detail: "Precision timing per lap" },
  { icon: Video, label: "HD Recording", detail: "Hands-free action camera" },
];

const motoSpecs = [
  { label: "Display", value: "128×64 OLED SSD1309" },
  { label: "Processor", value: "ESP32S3 240MHz" },
  { label: "Camera", value: "OV2640 HD" },
  { label: "IMU", value: "LSM6DSO 6-axis" },
  { label: "Connectivity", value: "Wi-Fi + BLE 5.0" },
  { label: "Protection", value: "IP54 Dust-Sealed" },
];

export default function MotoPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg, #000000 0%, #1a0f05 10%, #2d1a0a 30%, #3D2B1F 50%, #2d1a0a 75%, #000000 100%)",
      }}
    >
      <section style={{ paddingTop: "6rem", paddingBottom: "3rem", position: "relative", overflow: "hidden" }}>
        {/* Ambient glows */}
        <div style={{ position: "absolute", top: 0, right: 0, width: 600, height: 600, borderRadius: "50%", background: "rgba(245,158,11,0.06)", filter: "blur(150px)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, width: 500, height: 500, borderRadius: "50%", background: "rgba(250,204,21,0.04)", filter: "blur(120px)", pointerEvents: "none" }} />

        <div className="container-main" style={{ position: "relative", zIndex: 10 }}>
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: "3rem" }}
          >
            <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "0.875rem", color: "rgba(245,158,11,0.6)", textDecoration: "none" }}>
              <ArrowLeft size={16} />
              Back to Home
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
            style={{ textAlign: "center", marginBottom: "4rem" }}
          >
            <p style={{ fontSize: "0.875rem", textTransform: "uppercase", letterSpacing: "0.3em", color: "rgba(245,158,11,0.8)", marginBottom: "1rem" }}>
              Moto Edition
            </p>
            <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>
              Born for the{" "}
              <span style={{ background: "linear-gradient(90deg, #facc15, #f59e0b, #b45309)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Dirt
              </span>
            </h1>
            <p style={{ marginTop: "1.5rem", color: "#a3a3a3", fontSize: "1.125rem", maxWidth: "40rem", margin: "1.5rem auto 0", fontWeight: 300 }}>
              Engineered for the toughest Motocross and Enduro trails. Dust-sealed. Impact-rated. Relentless.
            </p>
          </motion.div>

          {/* Product Image — centered */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as const, delay: 0.2 }}
            style={{ display: "flex", justifyContent: "center", marginBottom: "5rem" }}
          >
            <div style={{ position: "relative", width: "100%", maxWidth: "550px" }}>
              {/* Outer ambient glow */}
              <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "120%", height: "120%", borderRadius: "50%", background: "radial-gradient(circle, rgba(245,158,11,0.15) 0%, rgba(224,123,57,0.08) 40%, transparent 70%)", filter: "blur(50px)", pointerEvents: "none" }} />
              {/* Inner warm glow */}
              <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "80%", height: "80%", borderRadius: "50%", background: "radial-gradient(circle, rgba(250,204,21,0.12) 0%, transparent 60%)", filter: "blur(25px)", pointerEvents: "none" }} />
              <div style={{ position: "absolute", inset: 0, borderRadius: "2rem", background: "linear-gradient(135deg, rgba(245,158,11,0.25), transparent, rgba(250,204,21,0.15))", filter: "blur(20px)" }} />
              <Image
                src="/images/moto-goggles.png"
                alt="Sentio Moto Edition Goggles"
                width={600}
                height={600}
                priority
                style={{ position: "relative", zIndex: 10, width: "100%", height: "auto", objectFit: "contain", filter: "drop-shadow(0 12px 40px rgba(245,158,11,0.3)) drop-shadow(0 0 80px rgba(250,204,21,0.1))" }}
              />
            </div>
          </motion.div>

          {/* Features Grid — centered */}
          <div style={{ maxWidth: "800px", margin: "0 auto 4rem" }}>
            <div className="features-grid-responsive">
              {motoFeatures.map((f, i) => {
                const Icon = f.icon;
                return (
                  <motion.div
                    key={f.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.1, duration: 0.6 }}
                    style={{
                      padding: "1.25rem",
                      borderRadius: "1rem",
                      backgroundColor: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(245,158,11,0.08)",
                      textAlign: "center",
                      transition: "border-color 0.3s",
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "center", marginBottom: "0.75rem" }}>
                      <Icon style={{ color: "#f59e0b" }} size={24} />
                    </div>
                    <p style={{ fontSize: "0.875rem", fontWeight: 600, color: "#fff", marginBottom: "0.25rem" }}>{f.label}</p>
                    <p style={{ fontSize: "0.75rem", color: "#737373" }}>{f.detail}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Specs + Purchase Card — centered */}
          <div style={{ maxWidth: "700px", margin: "0 auto" }}>
            {/* Specs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              style={{ marginBottom: "2.5rem", borderRadius: "1.5rem", backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.04)" }}
              className="card-responsive"
            >
              <h3 style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.2em", color: "#737373", marginBottom: "1.5rem", textAlign: "center" }}>
                Technical Specifications
              </h3>
              <div className="specs-grid">
                {motoSpecs.map((spec) => (
                  <div key={spec.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.5rem 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                    <span style={{ fontSize: "0.75rem", color: "#737373" }}>{spec.label}</span>
                    <span style={{ fontSize: "0.75rem", color: "#fff", fontWeight: 500 }}>{spec.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* E-Commerce Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="card-responsive"
              style={{
                borderRadius: "1.5rem",
                background: "linear-gradient(180deg, rgba(120,53,15,0.3), rgba(0,0,0,0.6))",
                border: "1px solid rgba(245,158,11,0.1)",
                backdropFilter: "blur(8px)",
              }}
            >
              <div className="ecommerce-header">
                <div>
                  <h3 style={{ fontSize: "1.5rem", fontWeight: 600, letterSpacing: "-0.02em" }}>Sentio Moto</h3>
                  <p style={{ fontSize: "0.875rem", color: "#737373", marginTop: "0.25rem" }}>Motocross & Enduro Edition</p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <p style={{ fontSize: "clamp(1.75rem, 5vw, 2.5rem)", fontWeight: 700, color: "#fbbf24" }}>$349</p>
                  <p style={{ fontSize: "0.75rem", color: "#737373" }}>Pre-order price</p>
                </div>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.5rem", marginBottom: "2rem" }}>
                {["OLED HUD", "HD Camera", "Crash SOS", "Dust-Sealed"].map((tag) => (
                  <span key={tag} style={{ fontSize: "0.75rem", color: "#fbbf24", backgroundColor: "rgba(251,191,36,0.08)", padding: "0.375rem 0.75rem", borderRadius: "9999px" }}>
                    {tag}
                  </span>
                ))}
              </div>

              <button
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  padding: "1rem",
                  borderRadius: "9999px",
                  background: "linear-gradient(90deg, #f59e0b, #facc15)",
                  color: "#000",
                  fontWeight: 600,
                  fontSize: "0.875rem",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s",
                  boxShadow: "0 0 30px rgba(245,158,11,0.25)",
                }}
              >
                <ShoppingCart size={18} />
                Buy Moto Edition
              </button>

              <p style={{ textAlign: "center", fontSize: "0.75rem", color: "#737373", marginTop: "1rem" }}>
                Free shipping · 30-day returns · 2-year warranty
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
