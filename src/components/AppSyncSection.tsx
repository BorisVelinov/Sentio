"use client";

import { motion } from "framer-motion";
import { Bluetooth, Wifi, Gauge, Activity, Video, MapPin } from "lucide-react";
import Image from "next/image";

const stats = [
  { icon: Gauge, label: "Top Speed", value: "87 km/h", color: "text-snow-blue" },
  { icon: Activity, label: "Max G-Force", value: "2.4 G", color: "text-moto-orange" },
  { icon: MapPin, label: "Distance", value: "42.3 km", color: "text-emerald-400" },
  { icon: Video, label: "Recordings", value: "12 clips", color: "text-purple-400" },
];

export default function AppSyncSection() {
  return (
    <section
      id="app"
      className="relative py-32 lg:py-44 bg-sentio-black overflow-hidden"
    >
      {/* Subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-white/[0.01] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Bluetooth className="text-snow-blue" size={18} />
            <p className="text-sm uppercase tracking-[0.3em] text-sentio-grey-500">
              Connected
            </p>
            <Wifi className="text-snow-blue" size={18} />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Your Ride.{" "}
            <span className="bg-gradient-to-r from-white to-sentio-grey-400 bg-clip-text text-transparent">
              Your Data.
            </span>
          </h2>
          <p className="mt-6 text-sentio-grey-400 text-lg max-w-2xl mx-auto font-light">
            The Sentio App syncs seamlessly over Bluetooth and Wi-Fi. Review
            ride stats, replay footage, and fine-tune your HUD settings — all
            from your pocket.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-snow-blue/10 via-transparent to-moto-orange/10 rounded-[3rem] blur-2xl scale-110" />
              <Image
                src="/images/app-mockup.png"
                alt="Sentio Smartphone App"
                width={400}
                height={800}
                className="relative z-10 w-full max-w-xs h-auto object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
              />
            </div>
          </motion.div>

          {/* Stats + Features */}
          <div>
            {/* Live Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="grid grid-cols-2 gap-4 mb-10"
            >
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                    className="p-5 rounded-2xl bg-gradient-to-b from-sentio-grey-800/40 to-sentio-grey-900/40 border border-white/[0.04] hover:border-white/[0.08] transition-all duration-300 group"
                  >
                    <Icon
                      className={`${stat.color} mb-2 group-hover:scale-110 transition-transform duration-300`}
                      size={20}
                    />
                    <p className={`text-2xl font-bold ${stat.color}`}>
                      {stat.value}
                    </p>
                    <p className="text-xs text-sentio-grey-500 mt-1">
                      {stat.label}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Feature List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="space-y-4"
            >
              {[
                "Real-time sync over BLE 5.0 & Wi-Fi",
                "Automatic camera footage transfer",
                "Custom HUD layout editor",
                "Emergency contact & SOS settings",
                "Ride history with GPS heatmaps",
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-snow-blue flex-shrink-0" />
                  <p className="text-sm text-sentio-grey-300">{feature}</p>
                </div>
              ))}
            </motion.div>

            {/* App Store Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <button className="flex-1 py-3 rounded-xl bg-white/[0.06] border border-white/[0.06] text-sm font-medium text-white hover:bg-white/[0.1] transition-all duration-300 hover:scale-[1.02]">
                📱 Download for iOS
              </button>
              <button className="flex-1 py-3 rounded-xl bg-white/[0.06] border border-white/[0.06] text-sm font-medium text-white hover:bg-white/[0.1] transition-all duration-300 hover:scale-[1.02]">
                🤖 Download for Android
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
