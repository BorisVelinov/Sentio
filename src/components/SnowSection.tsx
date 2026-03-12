"use client";

import { motion } from "framer-motion";
import {
  Thermometer,
  Mountain,
  MapPin,
  Snowflake,
  ShoppingCart,
} from "lucide-react";
import Image from "next/image";

const snowFeatures = [
  { icon: Thermometer, label: "Temperature HUD", detail: "Real-time temp & wind chill" },
  { icon: Mountain, label: "Altitude Tracker", detail: "Elevation & vertical drop" },
  { icon: MapPin, label: "Run Mapping", detail: "GPS run playback" },
  { icon: Snowflake, label: "Anti-Fog Lens", detail: "Heated inner lens system" },
];

export default function SnowSection() {
  return (
    <section
      id="snow"
      className="relative py-32 lg:py-44 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #000000 0%, #0a1628 15%, #0D1B2A 40%, #1B2A4A 60%, #0D1B2A 85%, #000000 100%)",
      }}
    >
      {/* Cold ambient glow */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-snow-blue/[0.05] blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-snow-sky/[0.03] blur-[120px] pointer-events-none" />

      {/* Subtle snowflake particles overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => {
          const size = 3 + (i % 4) * 1.5;
          const leftPos = (i * 5.2 + (i % 3) * 7) % 100;
          const drift = i % 2 === 0 ? 25 + (i % 5) * 8 : -(25 + (i % 5) * 8);
          return (
            <motion.div
              key={i}
              style={{
                position: "absolute",
                width: size,
                height: size,
                borderRadius: "50%",
                backgroundColor: "rgba(255,255,255,0.45)",
                boxShadow: "0 0 4px rgba(255,255,255,0.25)",
                left: `${leftPos}%`,
                top: "-5%",
              }}
              animate={{
                y: ["0vh", "110vh"],
                x: [0, drift, 0],
                opacity: [0, 0.65, 0],
              }}
              transition={{
                duration: 6 + (i % 7) * 2,
                repeat: Infinity,
                delay: i * 0.7,
                ease: "linear",
              }}
            />
          );
        })}
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 lg:mb-20"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-snow-sky mb-4">
            Snow Edition
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Made for the{" "}
            <span className="bg-gradient-to-r from-snow-sky via-snow-blue to-snow-frost bg-clip-text text-transparent">
              Mountain
            </span>
          </h2>
          <p className="mt-6 text-snow-frost/50 text-lg max-w-2xl mx-auto font-light">
            Crafted for Ski and Snowboard athletes. Crystal clarity in the
            coldest conditions, from first chair to last run.
          </p>
        </motion.div>

        {/* Content Grid (reversed order from Moto) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Features + E-Commerce Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            {/* Feature Grid */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {snowFeatures.map((f, i) => {
                const Icon = f.icon;
                return (
                  <motion.div
                    key={f.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                    className="p-5 rounded-2xl bg-white/[0.03] border border-snow-sky/[0.08] hover:border-snow-blue/20 transition-all duration-300 group"
                  >
                    <Icon
                      className="text-snow-blue mb-3 group-hover:scale-110 transition-transform duration-300"
                      size={22}
                    />
                    <p className="text-sm font-semibold text-white mb-1">
                      {f.label}
                    </p>
                    <p className="text-xs text-snow-frost/40">{f.detail}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* E-Commerce Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="p-5 sm:p-8 rounded-3xl bg-gradient-to-b from-snow-navy/50 to-snow-deep/60 border border-snow-sky/[0.08] backdrop-blur-sm"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold tracking-tight">
                    Sentio Snow
                  </h3>
                  <p className="text-sm text-snow-frost/40 mt-1">
                    Ski & Snowboard Edition
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-snow-sky">$379</p>
                  <p className="text-xs text-snow-frost/30">Pre-order price</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {["OLED HUD", "HD Camera", "Crash SOS", "Anti-Fog"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="text-xs text-snow-sky bg-snow-sky/[0.08] px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>

              <button className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-gradient-to-r from-snow-blue to-snow-sky text-black font-semibold text-sm hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_0_30px_rgba(93,173,226,0.2)]">
                <ShoppingCart size={16} />
                Buy Snow Edition
              </button>

              <p className="text-center text-xs text-snow-frost/20 mt-3">
                Free shipping · 30-day returns · 2-year warranty
              </p>
            </motion.div>
          </motion.div>

          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Outer ambient glow */}
              <div className="absolute inset-[-15%] rounded-full blur-[60px] pointer-events-none" style={{ background: "radial-gradient(circle, rgba(56,189,248,0.15) 0%, rgba(93,173,226,0.08) 40%, transparent 70%)" }} />
              {/* Inner cool glow ring */}
              <div className="absolute inset-[10%] rounded-full blur-[30px] pointer-events-none" style={{ background: "radial-gradient(circle, rgba(103,232,249,0.12) 0%, transparent 60%)" }} />
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-snow-blue/25 via-transparent to-snow-sky/15 blur-xl" />
              <Image
                src="/images/snow-goggles.png"
                alt="Sentio Snow Edition Goggles"
                width={600}
                height={600}
                style={{ position: "relative", zIndex: 10, width: "100%", height: "auto", objectFit: "contain", filter: "drop-shadow(0 12px 40px rgba(56,189,248,0.3)) drop-shadow(0 0 80px rgba(93,173,226,0.12))" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
