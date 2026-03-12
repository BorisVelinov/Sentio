"use client";

import { motion } from "framer-motion";
import {
  Thermometer,
  Mountain,
  MapPin,
  Snowflake,
  ShoppingCart,
  ArrowLeft,
  Shield,
  Sun,
  Layers,
  Wrench,
  Wind,
  Zap,
  Check,
  Truck,
  RefreshCw,
  Award,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

/* ── data ── */

const quickSpecs = [
  "ESP32S3 240 MHz Dual-Core",
  "128×64 OLED HUD @ 60 fps",
  "Dual-Pane Heated Anti-Fog Lens",
  "6-Axis IMU — Crash SOS",
  "6 h Heated / 8 h Standard Battery",
  "IP64 Dust-Tight & Splash-Proof",
];

const snowFeatures = [
  {
    icon: Thermometer,
    label: "Temperature HUD",
    detail: "Real-time ambient temperature and wind chill on your lens.",
    description:
      "A precision NTC thermistor mounted on the outer frame samples ambient temperature at 1 Hz, while the wind chill algorithm factors in your ground speed from GPS data. The result is a real-time wind chill reading displayed on the HUD — critical for backcountry riding where wind-driven temps can drop 15°C below ambient without warning. You'll know when to layer up before your hands go numb.",
  },
  {
    icon: Mountain,
    label: "Altitude Tracker",
    detail: "Live elevation, vertical drop, and cumulative ascent.",
    description:
      "The barometric pressure sensor (BMP280) calculates altitude with ±1 m precision, updating at 10 Hz for smooth real-time display. The HUD shows current elevation, total vertical drop per run, and cumulative ascent for the day. At the end of your session, the Sentio App generates a full elevation profile overlaid on your run map — perfect for tracking progression on your favorite lines.",
  },
  {
    icon: MapPin,
    label: "Run Mapping",
    detail: "GPS-tracked run playback with speed heat-mapping.",
    description:
      "Every run is automatically logged with GPS coordinates, speed, and G-force data at 10 Hz resolution. The Sentio App renders your runs on a 3D terrain map with a speed-based color gradient — blue for slow, through green and yellow, to red at your peak velocity. You can replay any run frame-by-frame and compare lines across different sessions.",
  },
  {
    icon: Snowflake,
    label: "Anti-Fog Lens",
    detail: "Dual-pane heated inner lens for zero-fog clarity.",
    description:
      "The proprietary dual-pane lens system uses a sealed air gap with moisture-absorbing silica inserts between the inner and outer panes. When conditions demand it, the micro-etched ITO (indium tin oxide) heating element on the inner pane activates at 3 watts — just enough to prevent condensation without creating optical distortion. The system runs for 6+ hours in heated mode and responds to foggy conditions in under 8 seconds.",
  },
];

const environmentFeatures = [
  {
    icon: Layers,
    title: "Dual-Pane Anti-Fog Technology",
    description:
      "Unlike single-pane goggles that rely solely on chemical coatings, Sentio Snow uses a sealed dual-pane construction with a 3 mm air gap. This thermal isolation barrier prevents the temperature differential across the lens from reaching the dew point. When extreme conditions overwhelm passive anti-fog — prolonged hiking in deep snow, or transitioning from a warm gondola to -20°C air — the ITO heating element provides active defogging at 3W, clearing the lens in under 8 seconds. No other goggle on the market combines passive and active anti-fog in a single lens.",
    align: "left",
  },
  {
    icon: Zap,
    title: "Thermal Battery Insulation",
    description:
      "The 800 mAh lithium-polymer battery is wrapped in a dual-layer aerogel-foam thermal jacket that maintains cell temperature above -5°C even when the ambient air drops to -25°C. Cold batteries lose capacity exponentially — an uninsulated Li-Po at -20°C delivers only 40% of its rated capacity. Our thermal insulation keeps the cell above its efficiency curve, delivering 85%+ capacity in the coldest conditions you'll ever ride. The result: 6 hours of heated anti-fog mode or 8+ hours in standard mode, even at altitude.",
    align: "right",
  },
  {
    icon: Sun,
    title: "UV400 Snow-Blindness Protection",
    description:
      "At altitude, UV intensity increases by approximately 10% per 1,000 meters — and fresh snow reflects up to 80% of UV radiation. Sentio Snow lenses block 100% of UVA, UVB, and UVC radiation up to 400 nm, far exceeding the EN 174:2001 standard for snow sports. The Category 3 (S3) lens tint provides an 8-18% VLT range optimized for bright snow conditions, reducing glare without sacrificing terrain contrast. Your eyes are protected from the invisible damage that causes photokeratitis (snow blindness) and long-term retinal issues.",
    align: "left",
  },
  {
    icon: Wind,
    title: "Spherical Lens Geometry",
    description:
      "The injection-molded polycarbonate lens follows a spherical curvature that mirrors the natural shape of the human eye. This eliminates the optical distortion found in flat or cylindrical lenses — where straight lines appear bent near the periphery. The result is a 140° horizontal and 90° vertical field of view with edge-to-edge clarity. No blind spots, no warping, no compromises — just the mountain exactly as your eyes would see it, enhanced by the HUD data floating in your upper-right periphery.",
    align: "right",
  },
];

const helmetFeatures = [
  {
    icon: Layers,
    title: "Triple-Layer Moisture-Wicking Foam",
    description:
      "The face foam uses three engineered layers: a rigid outer shell for frame stability, a medium-density middle layer for even pressure distribution, and a soft inner fleece-covered layer that wicks moisture away from your skin. The fleece wicking surface channels sweat to the foam's evaporative edge zones, keeping the lens-contact area dry. The entire foam assembly is removable, machine-washable, and available in multiple density options for custom fit.",
  },
  {
    icon: Shield,
    title: "Articulating Outrigger System",
    description:
      "The frame connects to the strap via an articulating outrigger hinge that pivots ±15° in both vertical and horizontal planes. This means the goggle conforms perfectly to the contour of your helmet — whether it's a round-profile Giro or a flat-front Smith — maintaining an even seal against your face across the entire perimeter. No gap, no light leak, no cold air intrusion.",
  },
  {
    icon: Wrench,
    title: "Quick-Swap Magnetic Lens System",
    description:
      "Changing lens tints shouldn't require tools or warm hands. The Sentio Snow lens locks into the frame with 8 neodymium magnets positioned around the perimeter, providing a tool-free swap in under 10 seconds — even with gloves on. The magnetic connection is rated to 15 N of pull force per magnet, meaning the lens won't pop out during a crash, but it releases cleanly with a deliberate pull at the designated release points.",
  },
];

const snowSpecs = [
  { label: "Display", value: "128×64 OLED SSD1309" },
  { label: "Processor", value: "ESP32S3 Dual-Core 240 MHz" },
  { label: "Memory", value: "8 MB PSRAM + 8 MB Flash" },
  { label: "Camera", value: "OV2640 HD (1600×1200)" },
  { label: "IMU", value: "LSM6DSO 6-Axis (±16g / ±2000°/s)" },
  { label: "Barometer", value: "BMP280 — ±1 m Altitude" },
  { label: "Connectivity", value: "Wi-Fi 802.11n + BLE 5.0" },
  { label: "Battery", value: "Li-Po 800mAh — 6h Heated / 8h Standard" },
  { label: "Charging", value: "USB-C — 90 min Full / 15 min Quick" },
  { label: "Protection", value: "IP64 Dust-Tight & Splash-Proof" },
  { label: "Lens Standard", value: "MIL-PRF-32432 Ballistic" },
  { label: "Lens Category", value: "Cat.3 S3 (8-18% VLT)" },
  { label: "Anti-Fog", value: "Dual-Pane + ITO Heating (3W)" },
  { label: "UV Protection", value: "UV400 (100% UVA/UVB/UVC)" },
  { label: "Field of View", value: "140° Horizontal / 90° Vertical" },
  { label: "Weight", value: "195 g (Lens + Frame + Electronics)" },
  { label: "Operating Temp", value: "-25°C to 40°C" },
  { label: "Lens Swap", value: "Magnetic 8-Point — 10 sec" },
];

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" as const },
};

export default function SnowPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg, #000000 0%, #060d18 8%, #0a1628 20%, #0D1B2A 40%, #1B2A4A 55%, #0D1B2A 75%, #000000 100%)",
      }}
    >
      {/* Falling snow */}
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", overflow: "hidden", zIndex: 1 }}>
        {[...Array(25)].map((_, i) => {
          const size = 3 + (i % 4) * 1.5;
          const leftPos = (i * 4.1 + (i % 3) * 7) % 100;
          const drift = i % 2 === 0 ? 30 + (i % 5) * 10 : -(30 + (i % 5) * 10);
          return (
            <motion.div
              key={i}
              style={{ position: "absolute", width: size, height: size, borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.5)", boxShadow: "0 0 4px rgba(255,255,255,0.3)", left: `${leftPos}%`, top: "-2%" }}
              animate={{ y: ["0vh", "105vh"], x: [0, drift, 0], opacity: [0, 0.7, 0] }}
              transition={{ duration: 6 + (i % 7) * 2, repeat: Infinity, delay: i * 0.6, ease: "linear" }}
            />
          );
        })}
      </div>

      {/* ───── BACK NAV ───── */}
      <div className="container-main" style={{ position: "relative", zIndex: 20, paddingTop: "6rem" }}>
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "0.875rem", color: "rgba(56,189,248,0.6)", textDecoration: "none" }}>
            <ArrowLeft size={16} /> Back to Home
          </Link>
        </motion.div>
      </div>

      {/* ═══════════════════════════════════════════
          1. HERO BUY PANEL — 2 Columns
      ═══════════════════════════════════════════ */}
      <section style={{ position: "relative", overflow: "hidden", paddingBottom: "4rem", zIndex: 2 }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem 1.5rem 0" }}>
          <div className="product-hero-grid" style={{ display: "grid", gap: "2rem", alignItems: "center" }}>
            {/* LEFT — Product Image on Frost Pedestal */}
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} style={{ position: "relative" }}>
              <div
                style={{
                  position: "relative",
                  borderRadius: "2rem",
                  overflow: "hidden",
                  background: "linear-gradient(180deg, #0a1525 0%, #0f1e35 40%, #162a4a 70%, #0a1420 100%)",
                  padding: "2.5rem 2rem 1.5rem",
                }}
              >
                {/* Frost texture overlay */}
                <div style={{ position: "absolute", inset: 0, opacity: 0.04, backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.5'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
                {/* Rim lighting — arctic blue */}
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, transparent 5%, rgba(56,189,248,0.6) 30%, rgba(103,232,249,0.5) 70%, transparent 95%)" }} />
                <div style={{ position: "absolute", bottom: 0, left: "10%", right: "10%", height: "2px", background: "linear-gradient(90deg, transparent, rgba(56,189,248,0.3), transparent)" }} />
                {/* Glows */}
                <div style={{ position: "absolute", top: "40%", left: "50%", transform: "translate(-50%, -50%)", width: "80%", height: "80%", borderRadius: "50%", background: "radial-gradient(circle, rgba(56,189,248,0.15) 0%, rgba(103,232,249,0.06) 40%, transparent 70%)", filter: "blur(40px)", pointerEvents: "none" }} />

                <Image src="/images/snow-goggles.png" alt="Sentio Snow Edition Goggles" width={600} height={600} priority style={{ position: "relative", zIndex: 5, width: "100%", height: "auto", objectFit: "contain", filter: "drop-shadow(0 12px 40px rgba(56,189,248,0.3)) drop-shadow(0 0 60px rgba(103,232,249,0.08))" }} />
                <div style={{ position: "relative", zIndex: 6, width: "80%", height: "1px", margin: "0.5rem auto 0", background: "linear-gradient(90deg, transparent, rgba(56,189,248,0.3), transparent)" }} />
              </div>
            </motion.div>

            {/* RIGHT — Purchasing Panel */}
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div>
                <p style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.3em", color: "rgba(56,189,248,0.8)", marginBottom: "0.75rem" }}>
                  SENTIO&ensp;|&ensp;SNOW EDITION
                </p>
                <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}>
                  Made for the{" "}
                  <span style={{ background: "linear-gradient(90deg, #38bdf8, #67e8f9, #bae6fd)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Mountain</span>
                </h1>
                <p style={{ marginTop: "1rem", color: "#a3a3a3", fontSize: "1rem", lineHeight: 1.7, fontWeight: 300 }}>
                  Crystal clarity in the coldest conditions on earth. Dual-pane heated anti-fog, thermally insulated battery, and UV400 snow-blindness protection — in one 195 g package.
                </p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {quickSpecs.map((spec) => (
                  <div key={spec} style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
                    <Check size={14} style={{ color: "#38bdf8", flexShrink: 0 }} />
                    <span style={{ fontSize: "0.8125rem", color: "#d4d4d4" }}>{spec}</span>
                  </div>
                ))}
              </div>

              <div>
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.75rem", marginBottom: "1rem" }}>
                  <span style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, color: "#38bdf8" }}>$379</span>
                  <span style={{ fontSize: "0.875rem", color: "#737373" }}>Pre-order price</span>
                </div>
                <button style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.625rem", padding: "1.125rem 2rem", borderRadius: "9999px", background: "linear-gradient(90deg, #38bdf8, #67e8f9)", color: "#000", fontWeight: 700, fontSize: "1rem", border: "none", cursor: "pointer", transition: "all 0.3s", boxShadow: "0 0 40px rgba(56,189,248,0.3), 0 4px 20px rgba(0,0,0,0.3)", letterSpacing: "0.02em" }}>
                  <ShoppingCart size={20} />
                  Pre-Order Snow Edition
                </button>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "1.25rem" }}>
                {[
                  { icon: Truck, text: "Free Shipping" },
                  { icon: RefreshCw, text: "30-Day Returns" },
                  { icon: Award, text: "2-Year Warranty" },
                ].map((t) => {
                  const Icon = t.icon;
                  return (
                    <div key={t.text} style={{ display: "flex", alignItems: "center", gap: "0.375rem" }}>
                      <Icon size={14} style={{ color: "rgba(56,189,248,0.5)" }} />
                      <span style={{ fontSize: "0.75rem", color: "#737373" }}>{t.text}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          2. CORE CAPABILITIES
      ═══════════════════════════════════════════ */}
      <section style={{ paddingTop: "4rem", paddingBottom: "4rem", position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.3em", color: "#737373", marginBottom: "0.75rem" }}>Core Capabilities</p>
            <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>
              Everything on Your{" "}
              <span style={{ background: "linear-gradient(90deg, #38bdf8, #67e8f9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Lens</span>
            </h2>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: "1.25rem" }}>
            {snowFeatures.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div key={f.label} {...fadeUp} transition={{ duration: 0.8, delay: i * 0.1 }} style={{ padding: "1.75rem", borderRadius: "1.25rem", background: "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)", border: "1px solid rgba(56,189,248,0.06)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                    <div style={{ width: "2.5rem", height: "2.5rem", borderRadius: "0.75rem", backgroundColor: "rgba(56,189,248,0.1)", border: "1px solid rgba(56,189,248,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon style={{ color: "#38bdf8" }} size={18} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "#fff" }}>{f.label}</h3>
                      <p style={{ fontSize: "0.7rem", color: "#38bdf8", letterSpacing: "0.02em" }}>{f.detail}</p>
                    </div>
                  </div>
                  <p style={{ color: "#a3a3a3", fontSize: "0.8125rem", lineHeight: 1.8 }}>{f.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          3. ENVIRONMENT ENGINEERING — Alternating
      ═══════════════════════════════════════════ */}
      <section style={{ paddingTop: "4rem", paddingBottom: "4rem", background: "linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0.5) 100%)", position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.3em", color: "#737373", marginBottom: "0.75rem" }}>Environment Engineering</p>
            <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>
              Built for{" "}
              <span style={{ background: "linear-gradient(90deg, #38bdf8, #67e8f9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>the Cold</span>
            </h2>
            <p style={{ marginTop: "1rem", color: "#a3a3a3", fontSize: "1rem", maxWidth: "40rem", margin: "1rem auto 0", fontWeight: 300, lineHeight: 1.7 }}>
              High-altitude winter conditions push every material and every circuit to its limits. We didn&apos;t design around the cold — we designed for it.
            </p>
          </motion.div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {environmentFeatures.map((f, i) => {
              const Icon = f.icon;
              const isRight = f.align === "right";
              return (
                <motion.div key={f.title} {...fadeUp} transition={{ duration: 0.8, delay: i * 0.1 }} className="env-feature-card" style={{ display: "grid", gap: "2rem", alignItems: "center", padding: "2rem", borderRadius: "1.5rem", background: "linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)", border: "1px solid rgba(56,189,248,0.06)" }}>
                  <div style={{ order: isRight ? 2 : 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                      <div style={{ width: "3rem", height: "3rem", borderRadius: "1rem", backgroundColor: "rgba(56,189,248,0.1)", border: "1px solid rgba(56,189,248,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <Icon style={{ color: "#38bdf8" }} size={20} />
                      </div>
                      <h3 style={{ fontSize: "1.25rem", fontWeight: 700, letterSpacing: "-0.01em" }}>{f.title}</h3>
                    </div>
                    <p style={{ color: "#a3a3a3", fontSize: "0.875rem", lineHeight: 1.8 }}>{f.description}</p>
                  </div>
                  <div style={{ order: isRight ? 1 : 2, height: "180px", borderRadius: "1rem", background: `linear-gradient(${isRight ? "135deg" : "225deg"}, rgba(56,189,248,0.08) 0%, rgba(103,232,249,0.03) 50%, transparent 100%)`, border: "1px solid rgba(56,189,248,0.06)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Icon style={{ color: "rgba(56,189,248,0.15)" }} size={64} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          4. HELMET INTEGRATION
      ═══════════════════════════════════════════ */}
      <section style={{ paddingTop: "4rem", paddingBottom: "4rem", position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.3em", color: "#737373", marginBottom: "0.75rem" }}>Ergonomics</p>
            <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>
              Helmet Integration{" "}
              <span style={{ background: "linear-gradient(90deg, #38bdf8, #67e8f9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>&amp; Comfort</span>
            </h2>
            <p style={{ marginTop: "1rem", color: "#a3a3a3", fontSize: "1rem", maxWidth: "40rem", margin: "1rem auto 0", fontWeight: 300, lineHeight: 1.7 }}>
              All-day comfort in freezing conditions. Every gram of foam and every millimeter of fit was tested through hundreds of hours of on-mountain riding.
            </p>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: "1.25rem" }}>
            {helmetFeatures.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div key={f.title} {...fadeUp} transition={{ duration: 0.8, delay: i * 0.1 }} style={{ padding: "1.75rem", borderRadius: "1.25rem", background: "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)", border: "1px solid rgba(56,189,248,0.06)" }}>
                  <div style={{ width: "3rem", height: "3rem", borderRadius: "1rem", backgroundColor: "rgba(56,189,248,0.08)", border: "1px solid rgba(56,189,248,0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem" }}>
                    <Icon style={{ color: "#38bdf8" }} size={20} />
                  </div>
                  <h3 style={{ fontSize: "1.125rem", fontWeight: 700, marginBottom: "0.75rem", letterSpacing: "-0.01em" }}>{f.title}</h3>
                  <p style={{ color: "#a3a3a3", fontSize: "0.8125rem", lineHeight: 1.8 }}>{f.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          5. INDUSTRIAL SPEC SHEET
      ═══════════════════════════════════════════ */}
      <section style={{ paddingTop: "4rem", paddingBottom: "4rem", backgroundColor: "rgba(5,10,20,0.8)", position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.3em", color: "#737373", marginBottom: "0.75rem" }}>Full Specifications</p>
            <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>
              Technical{" "}
              <span style={{ background: "linear-gradient(90deg, #38bdf8, #67e8f9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Details</span>
            </h2>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.8, delay: 0.1 }} style={{ borderRadius: "1.25rem", backgroundColor: "rgba(8,16,30,0.9)", border: "1px solid rgba(56,189,248,0.06)", overflow: "hidden" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 0 }}>
              {snowSpecs.map((spec, i) => (
                <div key={spec.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.875rem 1.5rem", borderBottom: i < snowSpecs.length - 1 ? "1px solid rgba(56,189,248,0.04)" : "none", backgroundColor: i % 2 === 0 ? "rgba(56,189,248,0.02)" : "transparent" }}>
                  <span style={{ fontSize: "0.8125rem", color: "#737373", fontWeight: 500 }}>{spec.label}</span>
                  <span style={{ fontSize: "0.8125rem", color: "#fff", fontWeight: 600, textAlign: "right", fontFamily: "monospace", letterSpacing: "0.02em" }}>{spec.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          6. FINAL CTA — The Sentinel
      ═══════════════════════════════════════════ */}
      <section style={{ paddingTop: "5rem", paddingBottom: "6rem", position: "relative", zIndex: 2 }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 600, height: 600, borderRadius: "50%", background: "rgba(56,189,248,0.04)", filter: "blur(120px)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "700px", margin: "0 auto", padding: "0 1.5rem", position: "relative", zIndex: 10 }}>
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} style={{ textAlign: "center", padding: "3rem 2rem", borderRadius: "2rem", background: "linear-gradient(180deg, rgba(12,74,110,0.25), rgba(0,0,0,0.7))", border: "1px solid rgba(56,189,248,0.12)", backdropFilter: "blur(10px)" }}>
            <p style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.3em", color: "rgba(56,189,248,0.7)", marginBottom: "1rem" }}>Ready to Ride?</p>
            <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: "0.5rem" }}>Sentio Snow</h2>
            <p style={{ color: "#737373", fontSize: "0.9375rem", marginBottom: "1.5rem" }}>Ski &amp; Snowboard Edition</p>

            <p style={{ fontSize: "clamp(2.5rem, 7vw, 4rem)", fontWeight: 800, color: "#38bdf8", marginBottom: "1.5rem" }}>$379</p>

            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.5rem", marginBottom: "2rem" }}>
              {["OLED HUD", "HD Camera", "Crash SOS", "Anti-Fog Heated", "Magnetic Lens", "UV400"].map((tag) => (
                <span key={tag} style={{ fontSize: "0.6875rem", color: "#38bdf8", backgroundColor: "rgba(56,189,248,0.08)", padding: "0.375rem 0.75rem", borderRadius: "9999px", border: "1px solid rgba(56,189,248,0.1)" }}>{tag}</span>
              ))}
            </div>

            <button style={{ width: "100%", maxWidth: "400px", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.625rem", padding: "1.25rem 2rem", borderRadius: "9999px", background: "linear-gradient(90deg, #38bdf8, #67e8f9)", color: "#000", fontWeight: 700, fontSize: "1.0625rem", border: "none", cursor: "pointer", margin: "0 auto", boxShadow: "0 0 50px rgba(56,189,248,0.35), 0 6px 24px rgba(0,0,0,0.4)", letterSpacing: "0.02em" }}>
              <ShoppingCart size={20} />
              Pre-Order Now — $379
            </button>

            <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "1.5rem", marginTop: "1.5rem" }}>
              {[
                { icon: Truck, text: "Free Worldwide Shipping" },
                { icon: RefreshCw, text: "30-Day Returns" },
                { icon: Award, text: "2-Year Warranty" },
              ].map((t) => {
                const Icon = t.icon;
                return (
                  <div key={t.text} style={{ display: "flex", alignItems: "center", gap: "0.375rem" }}>
                    <Icon size={13} style={{ color: "rgba(56,189,248,0.5)" }} />
                    <span style={{ fontSize: "0.75rem", color: "#737373" }}>{t.text}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
