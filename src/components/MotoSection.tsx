"use client";

import { motion } from "framer-motion";
import {
  Gauge,
  Navigation,
  Timer,
  Video,
  ShoppingCart,
} from "lucide-react";
import Image from "next/image";

const motoFeatures = [
  { icon: Gauge, label: "Live Speed HUD", detail: "Real-time speed on your lens" },
  { icon: Navigation, label: "Trail Navigation", detail: "GPS waypoints & heading" },
  { icon: Timer, label: "Lap Timer", detail: "Precision timing per lap" },
  { icon: Video, label: "HD Recording", detail: "Hands-free action camera" },
];

export default function MotoSection() {
  return (
    <section
      id="moto"
      className="relative py-32 lg:py-44 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #000000 0%, #1a0f05 15%, #2d1a0a 40%, #3D2B1F 60%, #2d1a0a 85%, #000000 100%)",
      }}
    >
      {/* Warm ambient glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-moto-orange/[0.06] blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-moto-yellow/[0.04] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 lg:mb-20"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-moto-sand mb-4">
            Moto Edition
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Born for the{" "}
            <span className="bg-gradient-to-r from-moto-yellow via-moto-orange to-moto-brown bg-clip-text text-transparent">
              Dirt
            </span>
          </h2>
          <p className="mt-6 text-moto-dust/70 text-lg max-w-2xl mx-auto font-light">
            Engineered for the toughest Motocross and Enduro trails. Dust-sealed.
            Impact-rated. Relentless.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Outer ambient glow */}
              <div className="absolute inset-[-15%] rounded-full blur-[60px] pointer-events-none" style={{ background: "radial-gradient(circle, rgba(245,158,11,0.15) 0%, rgba(224,123,57,0.08) 40%, transparent 70%)" }} />
              {/* Inner warm glow ring */}
              <div className="absolute inset-[10%] rounded-full blur-[30px] pointer-events-none" style={{ background: "radial-gradient(circle, rgba(250,204,21,0.12) 0%, transparent 60%)" }} />
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-moto-orange/25 via-transparent to-moto-yellow/15 blur-xl" />
              <Image
                src="/images/moto-goggles.png"
                alt="Sentio Moto Edition Goggles"
                width={600}
                height={600}
                style={{ position: "relative", zIndex: 10, width: "100%", height: "auto", objectFit: "contain", filter: "drop-shadow(0 12px 40px rgba(224,123,57,0.3)) drop-shadow(0 0 80px rgba(245,158,11,0.12))" }}
              />
            </div>
          </motion.div>

          {/* Features + E-Commerce Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            {/* Feature Grid */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {motoFeatures.map((f, i) => {
                const Icon = f.icon;
                return (
                  <motion.div
                    key={f.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                    className="p-5 rounded-2xl bg-white/[0.04] border border-moto-sand/[0.08] hover:border-moto-orange/20 transition-all duration-300 group"
                  >
                    <Icon
                      className="text-moto-orange mb-3 group-hover:scale-110 transition-transform duration-300"
                      size={22}
                    />
                    <p className="text-sm font-semibold text-white mb-1">
                      {f.label}
                    </p>
                    <p className="text-xs text-moto-dust/50">{f.detail}</p>
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
              className="p-5 sm:p-8 rounded-3xl bg-gradient-to-b from-moto-earth/50 to-black/60 border border-moto-sand/[0.1] backdrop-blur-sm"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold tracking-tight">
                    Sentio Moto
                  </h3>
                  <p className="text-sm text-moto-dust/50 mt-1">
                    Motocross & Enduro Edition
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-moto-yellow">$349</p>
                  <p className="text-xs text-moto-dust/40">Pre-order price</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {["OLED HUD", "HD Camera", "Crash SOS", "Dust-Sealed"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="text-xs text-moto-sand bg-moto-sand/[0.08] px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>

              <button className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-gradient-to-r from-moto-orange to-moto-yellow text-black font-semibold text-sm hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_0_30px_rgba(224,123,57,0.2)]">
                <ShoppingCart size={16} />
                Buy Moto Edition
              </button>

              <p className="text-center text-xs text-moto-dust/30 mt-3">
                Free shipping · 30-day returns · 2-year warranty
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
