import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { Canvas } from "@react-three/fiber";
import { Stars, Sparkles, Float, OrbitControls } from "@react-three/drei";

// Premium smooth ease - same as Projects page
const ease = [0.25, 0.46, 0.45, 0.94];

// Card entrance/exit variants - exactly like Projects page cards
const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.0,
      ease,
      delay: i * 0.12,
    }
  }),
  exit: {
    opacity: 0,
    y: 40,
    transition: { duration: 0.5, ease }
  }
};

const sections = [
  { title: "Getting Started", desc: "Quick setup, authentication, first API call" },
  { title: "API Reference", desc: "Full endpoints, schemas, rate limits, examples" },
  { title: "SDKs & Libraries", desc: "TypeScript, Rust, Python, Go official clients" },
  { title: "Webhooks & Events", desc: "Real-time updates, security signing, retry strategy" },
  { title: "Security & Compliance", desc: "Zero-trust model, SOC 2, GDPR, encryption details" },
  { title: "Architecture Deep Dive", desc: "Event-driven, multi-region, fault-tolerance patterns" },
];

export default function DocsPage() {
  // Same ultra-smooth Lenis as every other page
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

  return (
    <div className="relative bg-gray-950 text-gray-100 overflow-hidden">
      {/* FIXED COSMIC BACKGROUND — Exact same as final Homepage */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <Canvas camera={{ position: [0, 0, 140], fov: 75 }}>
          <color attach="background" args={["#0a0a0f"]} />
          {/* Drastically reduced stars */}
          <Stars
            radius={300}
            depth={200}
            count={800}
            factor={3}
            saturation={0}
            fade
            speed={0.15}
          />
          {/* Drastically reduced sparkles */}
          <Sparkles
            count={40}
            scale={12}
            size={4}
            speed={0.2}
            color="#4b5563"
            opacity={0.25}
          />
          {/* Central geometry — strong "mirror" focal point */}
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

        {/* Strong mirror depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-950/40 to-gray-950/80 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(31,41,55,0.25),transparent_70%)] pointer-events-none" />
      </div>

      {/* SCROLLABLE CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px", amount: 0.25 }}
          transition={{ duration: 0.9, ease }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-gray-400 via-gray-300 to-gray-500 bg-clip-text text-transparent mb-6">
            Documentation
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
            Technical reference for developers building on or integrating with DubicVentures infrastructure.
          </p>
        </motion.div>

        {/* Docs Cards Grid - exact same animation + hover as Projects cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {sections.map((section, index) => (
              <motion.a
                key={section.title}
                href="#" // Replace with actual doc links when ready
                layout
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-80px", amount: 0.3 }}
                variants={cardVariants}
                className="group relative rounded-3xl overflow-hidden border backdrop-blur-sm bg-gray-900/70 border-gray-800/50"
                whileHover={{
                  y: -16,
                  borderColor: 'rgba(75, 85, 99, 0.4)',
                  boxShadow: '0 15px 30px -10px rgba(75, 85, 99, 0.15)'
                }}
                transition={{ duration: 0.7, ease }}
              >
                {/* Subtle inner glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800/5 via-transparent to-gray-900/5" />
                  <div className="absolute -inset-1 bg-gradient-to-br from-gray-700/10 via-transparent to-gray-800/10 blur-xl" />
                </div>

                <div className="p-10 flex flex-col h-full">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-gray-300 transition-colors duration-500">
                    {section.title}
                  </h3>
                  <p className="text-gray-400 text-lg flex-grow">
                    {section.desc}
                  </p>
                  <span className="mt-6 inline-block text-gray-400 group-hover:text-gray-300 font-medium flex items-center gap-1.5 transition-colors">
                    Explore
                    <motion.span
                      className="text-lg"
                      whileHover={{ x: 6 }}
                      transition={{ duration: 0.4 }}
                    >
                      →
                    </motion.span>
                  </span>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px", amount: 0.25 }}
          transition={{ duration: 0.9, ease }}
          className="mt-20 text-center"
        >
          <p className="text-xl text-gray-300 mb-8">
            Need deeper integration guidance or custom architecture consulting?
          </p>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-gray-700 to-gray-800 px-12 py-6 rounded-2xl text-xl font-bold shadow-xl shadow-gray-900/40 hover:shadow-2xl hover:shadow-gray-800/60 hover:scale-105 transition-all duration-300"
          >
            Talk to Engineering
          </a>
        </motion.div>
      </div>
    </div>
  );
}