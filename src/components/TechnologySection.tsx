"use client";

import { motion } from "framer-motion";
import { Monitor, Cpu, ShieldAlert, ArrowRight } from "lucide-react";
import Link from "next/link";

const techFeatures = [
  {
    icon: Monitor,
    title: "Transparent OLED HUD",
    chip: "SSD1309",
    description:
      "A crystal-clear 128×64 transparent OLED display projects speed, G-force, and navigation directly into your field of vision.",
    specs: ["128×64 px", "Monochrome", "SPI @ 10 MHz"],
  },
  {
    icon: Cpu,
    title: "ESP32S3 Core",
    chip: "XIAO Sense",
    description:
      "Dual-core 240 MHz processor with built-in Wi-Fi, Bluetooth 5.0, and an integrated OV2640 HD camera.",
    specs: ["240 MHz Dual-Core", "Wi-Fi + BLE 5.0", "OV2640 Camera"],
  },
  {
    icon: ShieldAlert,
    title: "AI Crash Detection",
    chip: "LSM6DSO",
    description:
      "6-axis IMU calculates real-time G-force and angular velocity. Triggers automatic SOS on high-impact events.",
    specs: ["6-Axis IMU", "± 16 g Range", "Auto SOS Alert"],
  },
];

export default function TechnologySection() {
  return (
    <section id="technology" className="relative overflow-hidden section-responsive" style={{ backgroundColor: "#000000" }}>
      {/* Grid background */}
      <div className="absolute inset-0" style={{ opacity: 0.03 }}>
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container-main relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
          style={{ textAlign: "center", marginBottom: "5rem" }}
        >
          <p style={{ fontSize: "0.875rem", textTransform: "uppercase", letterSpacing: "0.3em", color: "#737373", marginBottom: "1rem" }}>
            The Core
          </p>
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>
            Engineered for{" "}
            <span style={{ background: "linear-gradient(90deg, #fff, #a3a3a3)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              the Edge
            </span>
          </h2>
          <p style={{ marginTop: "1.5rem", color: "#a3a3a3", fontSize: "1.125rem", maxWidth: "40rem", marginLeft: "auto", marginRight: "auto", fontWeight: 300 }}>
            Three breakthrough technologies working in perfect harmony.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
          {techFeatures.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] as const }}
                className="group"
                style={{
                  padding: "2rem",
                  borderRadius: "1.5rem",
                  background: "linear-gradient(180deg, rgba(64,64,64,0.3) 0%, rgba(23,23,23,0.3) 100%)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  transition: "all 0.5s",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
                  <div style={{ width: "3rem", height: "3rem", borderRadius: "1rem", backgroundColor: "rgba(255,255,255,0.06)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Icon className="text-white" size={22} />
                  </div>
                  <span style={{ fontSize: "0.75rem", fontFamily: "monospace", letterSpacing: "0.1em", color: "#737373", backgroundColor: "rgba(255,255,255,0.04)", padding: "0.25rem 0.75rem", borderRadius: "9999px" }}>
                    {feature.chip}
                  </span>
                </div>

                <h3 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.75rem", letterSpacing: "-0.01em" }}>
                  {feature.title}
                </h3>

                <p style={{ color: "#a3a3a3", fontSize: "0.875rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                  {feature.description}
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {feature.specs.map((spec) => (
                    <span
                      key={spec}
                      style={{ fontSize: "0.75rem", color: "#a3a3a3", backgroundColor: "rgba(255,255,255,0.04)", padding: "0.375rem 0.75rem", borderRadius: "9999px", border: "1px solid rgba(255,255,255,0.04)" }}
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Product links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          style={{ marginTop: "4rem", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "2rem" }}
        >
          <Link
            href="/moto"
            className="group"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#fbbf24", fontSize: "0.875rem", fontWeight: 500, textDecoration: "none", transition: "color 0.3s" }}
          >
            Explore Moto Edition
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/snow"
            className="group"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#38bdf8", fontSize: "0.875rem", fontWeight: 500, textDecoration: "none", transition: "color 0.3s" }}
          >
            Explore Snow Edition
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
