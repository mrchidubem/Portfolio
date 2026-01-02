import { motion } from "framer-motion";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { Canvas } from "@react-three/fiber";
import { Stars, Sparkles, Float, OrbitControls } from "@react-three/drei";

// ── Same fade-up as homepage & other pages
const fadeInUp = {
  initial: { y: 60, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: false, margin: "-80px", amount: 0.25 },
  transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] },
};

export default function PrivacyPage() {
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
      <div className="relative z-10">

        {/* Hero */}
        <section className="relative py-32 md:py-40 px-6">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-gray-400 via-gray-300 to-gray-500 bg-clip-text text-transparent mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-400">
              Effective date: January 1, 2026 • Last updated: January 1, 2026
            </p>
          </motion.div>
        </section>

        {/* Main Privacy Content - Now with proper spacing & individual animations */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* 1. Introduction */}
            <motion.section {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.2 }}>
              <h2 className="text-3xl font-bold text-gray-200 mb-6">1. Introduction</h2>
              <p>
                DubicVentures is committed to protecting your privacy and handling your data with the highest standards of security and transparency. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us.
              </p>
              <p className="mt-4">
                We process personal data only when strictly necessary for the performance of our services, legal obligations, or with your explicit consent. We never sell your data.
              </p>
            </motion.section>

            {/* 2. Information We Collect */}
            <motion.section {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.4 }}>
              <h2 className="text-3xl font-bold text-gray-200 mb-6">2. Information We Collect</h2>
              <h3 className="text-xl font-semibold text-gray-300 mb-4">2.1 Information You Provide</h3>
              <ul className="list-disc pl-8 space-y-2">
                <li>Contact information (name, email, company)</li>
                <li>Professional details (role, organization, investment focus)</li>
                <li>Communications and correspondence</li>
                <li>Any information voluntarily submitted via forms or email</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-300 mt-8 mb-4">2.2 Automatically Collected Information</h3>
              <ul className="list-disc pl-8 space-y-2">
                <li>Log data (IP address, browser type, pages visited, time spent)</li>
                <li>Device information (operating system, device type)</li>
                <li>Analytics data via privacy-preserving tools (no cross-site tracking)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-300 mt-8 mb-4">2.3 Information We Do Not Collect</h3>
              <ul className="list-disc pl-8 space-y-2">
                <li>No cookies for advertising or tracking</li>
                <li>No third-party analytics with personal identifiers</li>
                <li>No social media pixels or fingerprinting</li>
              </ul>
            </motion.section>

            {/* 3. How We Use Your Information */}
            <motion.section {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.6 }}>
              <h2 className="text-3xl font-bold text-gray-200 mb-6">3. How We Use Your Information</h2>
              <p>We use collected information solely for:</p>
              <ul className="list-disc pl-8 space-y-2 mt-4">
                <li>Providing and improving our services</li>
                <li>Responding to inquiries and communications</li>
                <li>Sending relevant updates (only with consent)</li>
                <li>Compliance with legal obligations</li>
                <li>Security monitoring and fraud prevention</li>
                <li>Internal analytics (aggregated and anonymized)</li>
              </ul>
            </motion.section>

            {/* 4. Data Protection & Security */}
            <motion.section {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.8 }}>
              <h2 className="text-3xl font-bold text-gray-200 mb-6">4. Data Protection & Security</h2>
              <p>We implement industry-leading security measures including:</p>
              <ul className="list-disc pl-8 space-y-2 mt-4">
                <li>End-to-end encryption (TLS 1.3) for all data in transit</li>
                <li>AES-256 encryption for data at rest</li>
                <li>Zero-trust network architecture</li>
                <li>Regular third-party penetration testing</li>
                <li>Immutable audit logging</li>
                <li>Multi-factor authentication for all internal access</li>
                <li>Strict access controls and least-privilege principles</li>
              </ul>
            </motion.section>

            {/* 5. Data Retention & Deletion */}
            <motion.section {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 1.0 }}>
              <h2 className="text-3xl font-bold text-gray-200 mb-6">5. Data Retention & Deletion</h2>
              <p>
                We retain personal data only as long as necessary for the purposes outlined in this policy or as required by law. Upon request, we will delete or anonymize your personal data within 30 days, subject to legal retention requirements.
              </p>
            </motion.section>

            {/* 6. Your Rights */}
            <motion.section {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 1.2 }}>
              <h2 className="text-3xl font-bold text-gray-200 mb-6">6. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-8 space-y-2 mt-4">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion ("right to be forgotten")</li>
                <li>Restrict or object to processing</li>
                <li>Data portability</li>
                <li>Withdraw consent at any time</li>
                <li>Lodge a complaint with a supervisory authority</li>
              </ul>
              <p className="mt-6">
                To exercise these rights, contact{" "}
                <a href="mailto:privacy@dubicventures.com" className="text-gray-400 hover:text-gray-300 underline">
                  privacy@dubicventures.com
                </a>
              </p>
            </motion.section>

            {/* 7. International Data Transfers */}
            <motion.section {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 1.4 }}>
              <h2 className="text-3xl font-bold text-gray-200 mb-6">7. International Data Transfers</h2>
              <p>
                Data may be processed in the United States and other countries where our service providers operate. We ensure appropriate safeguards are in place, including Standard Contractual Clauses approved by relevant authorities.
              </p>
            </motion.section>

            {/* 8. Children's Privacy */}
            <motion.section {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 1.6 }}>
              <h2 className="text-3xl font-bold text-gray-200 mb-6">8. Children's Privacy</h2>
              <p>
                Our services are not directed to individuals under 18. We do not knowingly collect personal information from children.
              </p>
            </motion.section>

            {/* 9. Changes to This Policy */}
            <motion.section {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 1.8 }}>
              <h2 className="text-3xl font-bold text-gray-200 mb-6">9. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy periodically. Significant changes will be communicated via email or prominent notice on our website. Continued use of our services after changes constitutes acceptance of the updated policy.
              </p>
            </motion.section>

            {/* 10. Contact Information */}
            <motion.section {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 2.0 }}>
              <h2 className="text-3xl font-bold text-gray-200 mb-6">10. Contact Information</h2>
              <p>
                For privacy-related inquiries:<br />
                Email:{" "}
                <a href="mailto:privacy@dubicventures.com" className="text-gray-400 hover:text-gray-300 underline">
                  privacy@dubicventures.com
                </a>
              </p>
              <p className="mt-4">
                Data Protection Officer<br />
                DubicVentures<br />
                Delaware, United States
              </p>
            </motion.section>

            {/* Footer note */}
            <motion.p
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 2.2 }}
              className="text-center text-gray-500 mt-20 border-t border-gray-800 pt-10"
            >
              This Privacy Policy demonstrates our commitment to protecting your data with the same rigor we apply to planetary-scale systems.
            </motion.p>
          </div>
        </section>
      </div>
    </div>
  );
}