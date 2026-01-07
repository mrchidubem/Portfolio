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

export default function TermsPage() {
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

      {/* SCROLLABLE CONTENT – compact */}
      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6 py-16 sm:py-24 md:py-32">
        {/* Hero – immediate appearance */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-10 sm:mb-12"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black bg-gradient-to-r from-gray-400 via-gray-300 to-gray-500 bg-clip-text text-transparent mb-4 sm:mb-6">
            Terms of Service
          </h1>
          <p className="text-lg sm:text-xl text-gray-400">
            Last updated: January 1, 2026
          </p>
        </motion.div>

        {/* Terms Content – very fast reveal */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="prose prose-invert max-w-none text-gray-300 leading-relaxed"
        >
          <div className="space-y-8 sm:space-y-10">
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-200 mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing or using DubicVentures services, you agree to be bound by these Terms of Service and all applicable laws and regulations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-200 mb-3">2. Use of Service</h2>
              <p>
                You may use the Service only for lawful purposes and in accordance with these Terms. You agree not to use the Service in any way that violates any applicable federal, state, local, or international law or regulation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-200 mb-3">3. Intellectual Property</h2>
              <p>
                The Service and its original content, features, and functionality are owned by DubicVentures and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-200 mb-3">4. Limitation of Liability</h2>
              <p>
                In no event shall DubicVentures, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-200 mb-3">5. Governing Law</h2>
              <p>
                These Terms shall be governed and construed in accordance with the laws of Delaware, United States, without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-200 mb-3">6. Changes to Terms</h2>
              <p>
                We reserve the right to modify or replace these Terms at any time. Continued use of the Service after any such changes constitutes your acceptance of the new Terms.
              </p>
            </section>

            <p className="text-center text-gray-500 mt-12 sm:mt-16">
              For questions about these Terms, contact{" "}
              <a
                href="mailto:legal@dubicventures.com"
                className="text-gray-300 hover:text-white transition-colors"
              >
                legal@dubicventures.com
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}