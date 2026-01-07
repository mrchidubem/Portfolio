import { motion } from "framer-motion";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { Canvas } from "@react-three/fiber";
import { Stars, Sparkles, Float, OrbitControls } from "@react-three/drei";

// ── Fast & soft fade-in
const fastFadeInUp = {
  initial: { y: 40, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true, margin: "-120px" },
  transition: { duration: 0.55, ease: "easeOut" },
};

export default function SecurityPage() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.05,           // ← maximum responsiveness
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: true,
      syncTouch: true,
    });

    window.lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      delete window.lenis;
    };
  }, []);

  const complianceItems = [
    { name: "SOC 2 Type II", status: "Certified", year: "2025" },
    { name: "ISO 27001", status: "Certified", year: "2025" },
    { name: "GDPR Compliant", status: "Compliant", year: "Ongoing" },
    { name: "CCPA Compliant", status: "Compliant", year: "Ongoing" },
    { name: "PCI DSS Level 1", status: "In Progress", year: "Q1 2026" },
  ];

  const securityFeatures = [
    { title: "Zero-Trust Architecture", desc: "Every request authenticated and authorized — no implicit trust." },
    { title: "End-to-End Encryption", desc: "Data encrypted at rest (AES-256) and in transit (TLS 1.3)." },
    { title: "Multi-Factor Authentication", desc: "Hardware keys, biometrics, and TOTP enforced for all access." },
    { title: "Real-Time Threat Detection", desc: "AI-powered anomaly detection with sub-second response." },
    { title: "Immutable Audit Logs", desc: "Tamper-proof logs stored across multi-region immutable storage." },
    { title: "Regular Penetration Testing", desc: "Quarterly red-team exercises by top-tier security firms." },
  ];

  return (
    <div className="relative bg-gray-950 text-gray-100 overflow-hidden min-h-screen">
      {/* FIXED COSMIC BACKGROUND */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <Canvas camera={{ position: [0, 0, 140], fov: 75 }}>
          <color attach="background" args={["#0a0a0f"]} />
          <Stars
            radius={300}
            depth={200}
            count={800}
            factor={3}
            saturation={0}
            fade
            speed={0.15}
          />
          <Sparkles
            count={40}
            scale={12}
            size={4}
            speed={0.2}
            color="#4b5563"
            opacity={0.25}
          />
          <Float speed={1.4} rotationIntensity={0.8} floatIntensity={1.4}>
            <mesh position={[0, 0, -60]}>
              <icosahedronGeometry args={[35, 1]} />
              <meshBasicMaterial
                color="#1f2937"
                wireframe
                opacity={0.4}
                transparent
              />
            </mesh>
          </Float>
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.25}
            enableDamping
            dampingFactor={0.95}
          />
        </Canvas>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-950/40 to-gray-950/80 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(31,41,55,0.25),transparent_70%)] pointer-events-none" />
      </div>

      {/* SCROLLABLE CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 py-16 sm:py-24 md:py-32">
        {/* Hero – immediate appearance */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12 sm:mb-16"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black bg-gradient-to-r from-gray-400 via-gray-300 to-gray-500 bg-clip-text text-transparent mb-4 sm:mb-6">
            Security & Compliance
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
            Enterprise-grade protection built on the same principles that secure planetary-scale systems.
          </p>
        </motion.div>

        {/* Compliance Certifications */}
        <motion.div {...fastFadeInUp} className="mb-16 sm:mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-8 sm:mb-10 bg-gradient-to-r from-gray-400 to-gray-500 bg-clip-text text-transparent">
            Certifications & Compliance
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
            {complianceItems.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.03, duration: 0.5 }}
                className={`
                  group relative bg-gray-900/65 backdrop-blur-md 
                  border border-gray-800/50 rounded-2xl p-6 sm:p-8 
                  text-center transition-all duration-400 ease-out
                  hover:bg-gray-900/80 hover:border-gray-600/70 
                  hover:shadow-xl hover:shadow-black/30
                `}
                style={{
                  transform: 'translateZ(0)',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  willChange: 'background-color, border-color, box-shadow',
                }}
              >
                <div className="relative z-10">
                  <p className="text-lg sm:text-xl font-bold text-gray-200 mb-2 group-hover:text-white transition-colors">
                    {item.name}
                  </p>
                  <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                    {item.status}
                  </p>
                  <p className="text-xs text-gray-500 mt-2 group-hover:text-gray-400 transition-colors">
                    {item.year}
                  </p>
                </div>

                <div
                  className="
                    absolute inset-0 bg-gradient-to-br from-white/5 to-transparent 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500 
                    pointer-events-none
                  "
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Security Features */}
        <motion.div {...fastFadeInUp}>
          <h2 className="text-4xl md:text-5xl font-black text-center mb-8 sm:mb-10 bg-gradient-to-r from-gray-400 to-gray-500 bg-clip-text text-transparent">
            Security Principles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {securityFeatures.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.03, duration: 0.5 }}
                className={`
                  group relative bg-gray-900/65 backdrop-blur-md 
                  border border-gray-800/50 rounded-2xl p-8 
                  transition-all duration-400 ease-out
                  hover:bg-gray-900/80 hover:border-gray-600/70 
                  hover:shadow-xl hover:shadow-black/30
                `}
                style={{
                  transform: 'translateZ(0)',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  willChange: 'background-color, border-color, box-shadow',
                }}
              >
                <div
                  className="
                    absolute inset-0 bg-gradient-to-br from-white/5 to-transparent 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500 
                    pointer-events-none
                  "
                />

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-gray-200 mb-4 group-hover:text-white transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-20 sm:mt-28 text-center"
        >
          <p className="text-xl md:text-2xl text-gray-300 mb-8 sm:mb-10 max-w-4xl mx-auto">
            Security is the foundation of trust. We treat it with the same rigor as systems serving billions.
          </p>
          <a
            href="/contact"
            className="
              inline-block bg-gradient-to-r from-gray-700 to-gray-800 
              px-10 sm:px-16 py-5 sm:py-7 rounded-2xl 
              text-lg sm:text-2xl font-bold shadow-xl shadow-gray-900/40 
              hover:shadow-2xl hover:shadow-gray-800/60 hover:scale-105 
              transition-all duration-300
            "
          >
            Discuss Security Requirements
          </a>
        </motion.div>
      </div>
    </div>
  );
}