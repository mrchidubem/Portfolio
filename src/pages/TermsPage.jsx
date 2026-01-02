import { motion } from "framer-motion";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { Canvas } from "@react-three/fiber";
import { Stars, Sparkles, Float, OrbitControls } from "@react-three/drei";

// ── Same fade-up animation
const fadeInUp = {
  initial: { y: 60, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: false, margin: "-80px", amount: 0.25 },
  transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] },
};

export default function TermsPage() {
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
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-32 md:py-40">

        {/* Hero */}
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-gray-400 via-gray-300 to-gray-500 bg-clip-text text-transparent mb-6">
            Terms of Service
          </h1>
          <p className="text-lg text-gray-400">
            Last updated: January 1, 2026
          </p>
        </motion.div>

        {/* Terms Content */}
        <motion.div
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.2 }}
          className="prose prose-invert max-w-none"
        >
          <div className="space-y-12 text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-gray-200 mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing or using DubicVentures services, you agree to be bound by these Terms of Service and all applicable laws and regulations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-200 mb-4">2. Use of Service</h2>
              <p>
                You may use the Service only for lawful purposes and in accordance with these Terms. You agree not to use the Service in any way that violates any applicable federal, state, local, or international law or regulation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-200 mb-4">3. Intellectual Property</h2>
              <p>
                The Service and its original content, features, and functionality are owned by DubicVentures and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-200 mb-4">4. Limitation of Liability</h2>
              <p>
                In no event shall DubicVentures, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-200 mb-4">5. Governing Law</h2>
              <p>
                These Terms shall be governed and construed in accordance with the laws of Delaware, United States, without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-200 mb-4">6. Changes to Terms</h2>
              <p>
                We reserve the right to modify or replace these Terms at any time. Continued use of the Service after any such changes constitutes your acceptance of the new Terms.
              </p>
            </section>

            <p className="text-center text-gray-500 mt-20">
              For questions about these Terms, contact <a href="mailto:legal@dubicventures.com" className="text-gray-400 hover:text-gray-300 transition-colors">legal@dubicventures.com</a>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}