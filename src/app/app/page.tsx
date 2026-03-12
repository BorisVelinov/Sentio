"use client";

import { motion } from "framer-motion";
import {
  Bluetooth,
  Wifi,
  Gauge,
  Activity,
  Video,
  MapPin,
  ArrowLeft,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const stats = [
  { icon: Gauge, label: "Top Speed", value: "87 km/h", color: "#38bdf8" },
  { icon: Activity, label: "Max G-Force", value: "2.4 G", color: "#fbbf24" },
  { icon: MapPin, label: "Distance", value: "42.3 km", color: "#34d399" },
  { icon: Video, label: "Recordings", value: "12 clips", color: "#a78bfa" },
];

const features = [
  "Real-time sync over BLE 5.0 & Wi-Fi",
  "Automatic camera footage transfer",
  "Custom HUD layout editor",
  "Emergency contact & SOS settings",
  "Ride history with GPS heatmaps",
];

export default function AppPage() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#000" }}>
      <section style={{ paddingTop: "8rem", paddingBottom: "5rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 800, height: 800, borderRadius: "50%", background: "rgba(255,255,255,0.01)", filter: "blur(100px)", pointerEvents: "none" }} />

        <div className="container-main" style={{ position: "relative", zIndex: 10 }}>
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: "3rem" }}
          >
            <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "0.875rem", color: "#737373", textDecoration: "none" }}>
              <ArrowLeft size={16} />
              Back to Home
            </Link>
          </motion.div>

          {/* Header — centered */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
            style={{ textAlign: "center", marginBottom: "5rem" }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.75rem", marginBottom: "1rem" }}>
              <Bluetooth style={{ color: "#38bdf8" }} size={18} />
              <p style={{ fontSize: "0.875rem", textTransform: "uppercase", letterSpacing: "0.3em", color: "#737373" }}>Connected</p>
              <Wifi style={{ color: "#38bdf8" }} size={18} />
            </div>
            <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>
              Your Ride.{" "}
              <span style={{ background: "linear-gradient(90deg, #fff, #a3a3a3)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Your Data.
              </span>
            </h1>
            <p style={{ marginTop: "1.5rem", color: "#a3a3a3", fontSize: "1.125rem", maxWidth: "40rem", margin: "1.5rem auto 0", fontWeight: 300 }}>
              The Sentio App syncs seamlessly over Bluetooth and Wi-Fi. Review ride stats, replay footage, and fine-tune your HUD — all from your pocket.
            </p>
          </motion.div>

          {/* Phone + Stats — centered */}
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "4rem", marginBottom: "5rem" }}>
            {/* Phone Mockup */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as const }}
              style={{ flexShrink: 0 }}
            >
              <div style={{ position: "relative" }}>
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(56,189,248,0.1), transparent, rgba(245,158,11,0.1))", borderRadius: "3rem", filter: "blur(32px)", transform: "scale(1.1)" }} />
                <Image
                  src="/images/app-mockup.png"
                  alt="Sentio Smartphone App"
                  width={400}
                  height={800}
                  style={{ position: "relative", zIndex: 10, width: "280px", height: "auto", objectFit: "contain", filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.5))" }}
                />
              </div>
            </motion.div>

            {/* Stats + Features */}
            <div style={{ width: "100%", maxWidth: "480px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "2.5rem" }}>
                {stats.map((stat, i) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + i * 0.1, duration: 0.6 }}
                      style={{
                        padding: "1.25rem",
                        borderRadius: "1rem",
                        background: "linear-gradient(180deg, rgba(64,64,64,0.2), rgba(23,23,23,0.2))",
                        border: "1px solid rgba(255,255,255,0.04)",
                        textAlign: "center",
                        transition: "border-color 0.3s",
                      }}
                    >
                      <div style={{ display: "flex", justifyContent: "center", marginBottom: "0.5rem" }}>
                        <Icon style={{ color: stat.color }} size={20} />
                      </div>
                      <p style={{ fontSize: "1.5rem", fontWeight: 700, color: stat.color }}>
                        {stat.value}
                      </p>
                      <p style={{ fontSize: "0.75rem", color: "#737373", marginTop: "0.25rem" }}>
                        {stat.label}
                      </p>
                    </motion.div>
                  );
                })}
              </div>

              {/* Features list */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8 }}
                style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}
              >
                {features.map((feature, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#38bdf8", flexShrink: 0 }} />
                    <p style={{ fontSize: "0.875rem", color: "#d4d4d4" }}>{feature}</p>
                  </div>
                ))}
              </motion.div>

              {/* App Store Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.8 }}
                style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}
              >
                <button style={{ flex: "1 1 200px", padding: "0.875rem", borderRadius: "0.75rem", backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.06)", fontSize: "0.875rem", fontWeight: 500, color: "#fff", cursor: "pointer", transition: "all 0.3s" }}>
                  📱 Download for iOS
                </button>
                <button style={{ flex: "1 1 200px", padding: "0.875rem", borderRadius: "0.75rem", backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.06)", fontSize: "0.875rem", fontWeight: 500, color: "#fff", cursor: "pointer", transition: "all 0.3s" }}>
                  🤖 Download for Android
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
