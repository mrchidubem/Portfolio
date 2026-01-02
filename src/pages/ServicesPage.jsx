import { motion } from "framer-motion";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { Canvas } from "@react-three/fiber";
import { Stars, Sparkles, Float, OrbitControls } from "@react-three/drei";

// ── Same fade-up animation as final Homepage
const fadeInUp = {
  initial: { y: 60, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: false, margin: "-80px", amount: 0.25 },
  transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] },
};

export default function ServicesPage() {
  // ── Same ultra-smooth Lenis
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.38,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
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

  const services = [
    {
      title: "Systems Architecture Advisory",
      description: "End-to-end design of resilient, planetary-scale infrastructure. From event-driven cores to multi-region HA and zero-downtime migration strategies.",
      focus: "Rust • Go • Kubernetes • PostgreSQL • Redis"
    },
    {
      title: "AI & Intelligence Engineering",
      description: "Production-grade AI pipelines: real-time inference, predictive modeling, agent orchestration, and natural language insights at extreme throughput.",
      focus: "PyTorch • Distributed Training • Vector DBs • RAG Systems"
    },
    {
      title: "Blockchain & Web3 Architecture",
      description: "Full-stack blockchain systems: smart contract development, on-chain analytics, cross-chain bridges, MEV-resistant designs, and decentralized identity.",
      focus: "Solidity • Rust • Foundry • Hardhat • Cosmos SDK • Substrate"
    },
    {
      title: "DeFi & Token Engineering",
      description: "Protocol design, economic modeling, security audits, governance frameworks, and tokenomics for sustainable decentralized finance systems.",
      focus: "Mechanism Design • Game Theory • Bonding Curves • Staking"
    },
    {
      title: "Security & Compliance Hardening",
      description: "Zero-trust implementation, SOC 2 / ISO 27001 preparation, penetration testing coordination, and immutable audit systems.",
      focus: "Encryption • Threat Modeling • Policy as Code"
    },
    {
      title: "Performance Optimization",
      description: "Deep systems tuning achieving 40×+ throughput gains, sub-100ms p99 latency, and efficient resource utilization at billion-user scale.",
      focus: "Profiling • Rust Rewrites • Kernel Bypass • Cache Design"
    },
    {
      title: "Technical Due Diligence",
      description: "Comprehensive evaluation of architecture, security, scalability, and team capabilities for investors and acquirers.",
      focus: "Code Review • Load Testing • Risk Assessment"
    },
    {
      title: "Strategic Technical Leadership",
      description: "Fractional CTO / Staff Architect roles for high-growth ventures needing senior systems thinking without full-time overhead.",
      focus: "Roadmapping • Hiring • Culture • Execution"
    },
  ];

  return (
    <div className="relative bg-gray-950 text-gray-100 overflow-hidden">
      {/* FIXED COSMIC BACKGROUND — Exact same as final Homepage */}
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
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 md:py-40">

        {/* Hero */}
        <motion.div {...fadeInUp} className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-gray-400 via-gray-300 to-gray-500 bg-clip-text text-transparent mb-6">
            Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
            Senior-level systems expertise delivered with precision and long-term perspective.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: i * 0.1 }}
              className="group bg-gray-900/70 backdrop-blur-md border border-gray-800/60 rounded-2xl p-8 hover:border-gray-600/70 hover:shadow-xl hover:shadow-gray-900/30 transition-all duration-500"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-gray-300 mb-4 group-hover:text-gray-200 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                {service.description}
              </p>
              <p className="text-sm text-gray-500 font-mono">
                {service.focus}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div {...fadeInUp} className="text-center">
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
            All engagements are bespoke, confidential, and focused on measurable long-term impact.
          </p>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-gray-700 to-gray-800 px-16 py-7 rounded-2xl text-2xl font-bold shadow-xl shadow-gray-900/40 hover:shadow-2xl hover:shadow-gray-800/60 hover:scale-105 transition-all duration-300"
          >
            Inquire About Services
          </a>
        </motion.div>
      </div>
    </div>
  );
}