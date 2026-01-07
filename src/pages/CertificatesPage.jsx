import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import { Canvas } from "@react-three/fiber";
import { Stars, Sparkles, Float, OrbitControls } from "@react-three/drei";
import emailjs from '@emailjs/browser';

// ── Smooth Anchor Link (kept for consistency)
const SmoothAnchorLink = ({ to, children, className }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const target = document.querySelector(to);
    if (target) {
      if (window.lenis) {
        window.lenis.scrollTo(target, { duration: 1.5, lerp: 0.1 });
      } else {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <a href={to} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};

// Softer & faster fade-in
const fadeInUp = {
  initial: { y: 40, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
};

export default function CertificatesPage() {
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  const openModal = (cert) => {
    setSelectedCert(cert);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setFormData({ name: "", email: "" });
    setSelectedCert(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRequest = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert("Please provide your name and email.");
      return;
    }

    setLoading(true);
    try {
      const response = await emailjs.send(
        'service_c0lf87l',
        'template_iewnln1',
        {
          contact_form_name: formData.name,
          contact_form_email: formData.email,
          content: `Requesting certificate: ${selectedCert.name}`
        },
        'J4cq0UVZeRP4Hlm4O'
      );

      console.log('EmailJS Success:', response.status, response.text);
      setShowSuccessToast(true);
      closeModal();

      setTimeout(() => setShowSuccessToast(false), 4000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      alert('Failed to send. Please email directly: mrchidubem8@gmail.com');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.12,
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

  const certificates = [
    { 
      name: "Bachelor of Engineering in Electronic Engineering", 
      issuer: "University of Nigeria, Nsukka", 
      date: "September 2017 – November 2022", 
      key: "degree-beng-unn",
      highlight: true
    },
    { name: "Back-End Web Development (ProDev)", issuer: "ALX Africa", date: "2025", key: "prodev-alx-2025" },
    { name: "Software Development Certification", issuer: "3MTT", date: "2024", key: "sdc-3mtt-2024" },
    { 
      name: "Fullstack Software Engineering Certification", 
      issuer: "Power Learn Project (PLP)", 
      date: "2025", 
      key: "plp-powerlearn-2024" 
    },
    { name: "AI for Creatives", issuer: "ALX Africa", date: "2024", key: "ai-creatives-alx-2024" },
    { name: "Career Essentials in Generative AI", issuer: "Microsoft", date: "2024", key: "gen-ai-microsoft-2024" },
    { name: "Certified Virtual Assistant", issuer: "ALX Africa", date: "2024", key: "cva-alx-2024" },
    { name: "IBM Applied DevOps Engineering Professional Certificate", issuer: "IBM", date: "2023", key: "devops-ibm-2023" },
  ];

  return (
    <div className="relative bg-gray-950 text-gray-100 overflow-hidden min-h-screen">
      {/* COSMIC BACKGROUND */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <Canvas camera={{ position: [0, 0, 140], fov: 75 }}>
          <color attach="background" args={["#0a0a0f"]} />
          <Stars radius={300} depth={200} count={600} factor={3} saturation={0} fade speed={0.12} />
          <Sparkles count={30} scale={10} size={4} speed={0.18} color="#4b5563" opacity={0.22} />
          <Float speed={1.1} rotationIntensity={0.6} floatIntensity={1.1}>
            <mesh position={[0, 0, -60]}>
              <icosahedronGeometry args={[35, 1]} />
              <meshBasicMaterial color="#1f2937" wireframe opacity={0.35} transparent />
            </mesh>
          </Float>
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.2}
            enableDamping
            dampingFactor={0.95}
          />
        </Canvas>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-950/50 to-gray-950/85 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(31,41,55,0.2),transparent_75%)] pointer-events-none" />
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        {/* Hero */}
        <motion.div {...fadeInUp} className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-gray-400 via-gray-300 to-gray-500 bg-clip-text text-transparent mb-4 sm:mb-6 tracking-tighter">
            Certificates & Reports
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Independently verified security and compliance documentation available upon request.
          </p>
        </motion.div>

        {/* Certificates Grid – ultra soft hover, no transform, no scaling, no jumping */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.key}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.7 }}
              viewport={{ once: true }}
              className={`
                group relative 
                bg-gray-900/60 backdrop-blur-md 
                border border-gray-800/50 rounded-2xl 
                p-6 sm:p-7 lg:p-8 
                overflow-hidden
                transition-all duration-500 ease-out
                hover:bg-gray-900/80 
                hover:border-gray-600/70 
                hover:shadow-xl hover:shadow-black/30
                ${cert.highlight ? "border-gray-500/40 shadow-lg shadow-gray-900/40" : ""}
              `}
              style={{
                transform: 'translateZ(0)',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                willChange: 'background-color, border-color, box-shadow, opacity',
              }}
            >
              <div className="h-full flex flex-col relative z-10">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-200 mb-2 sm:mb-3 transition-colors duration-300 group-hover:text-white">
                  {cert.name}
                </h3>
                <p className="text-sm sm:text-base text-gray-400 mb-1 transition-colors duration-300 group-hover:text-gray-300">
                  Issued by {cert.issuer}
                </p>
                <p className="text-xs sm:text-sm text-gray-500 mb-5 sm:mb-7 transition-colors duration-300 group-hover:text-gray-400">
                  {cert.date}
                </p>
                <div className="mt-auto">
                  <button
                    onClick={() => openModal(cert)}
                    className="
                      inline-flex items-center gap-2 
                      text-sm sm:text-base 
                      font-medium 
                      text-gray-400 
                      group-hover:text-gray-200 
                      transition-colors duration-300
                    "
                  >
                    Request Document
                    <span className="transition-transform duration-300 group-hover:translate-x-1 inline-block">→</span>
                  </button>
                </div>
              </div>

              {/* Very subtle shine overlay on hover - no performance hit */}
              <div 
                className="
                  absolute inset-0 
                  bg-gradient-to-br from-white/5 to-transparent 
                  opacity-0 
                  group-hover:opacity-100 
                  transition-opacity duration-700 
                  pointer-events-none
                " 
              />
            </motion.div>
          ))}
        </div>

        {/* Final CTA – mobile friendly */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 sm:mt-20 lg:mt-32 text-center"
        >
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-10 max-w-3xl mx-auto">
            All reports available under NDA for qualified partners and institutional investors.
          </p>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-gray-700 to-gray-800 px-8 sm:px-16 py-4 sm:py-7 rounded-2xl text-base sm:text-2xl font-bold shadow-xl shadow-gray-900/40 hover:shadow-2xl hover:shadow-gray-800/60 hover:scale-105 transition-all duration-300"
          >
            Request Security Package
          </a>
        </motion.div>
      </div>

      {/* Request Modal */}
      {modalOpen && selectedCert && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.4 }}
            className="bg-gray-900 rounded-2xl p-6 sm:p-8 w-full max-w-md text-gray-100 relative"
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
            >
              ×
            </button>

            <h2 className="text-xl sm:text-2xl font-bold mb-6">{selectedCert.name}</h2>

            <form onSubmit={handleRequest} className="space-y-5 sm:space-y-6">
              <div>
                <label className="block mb-2 text-sm">Your Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-gray-500 transition-all"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-sm">Your Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-gray-500 transition-all"
                  required
                />
              </div>

              <div className="flex justify-end gap-4 mt-6">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-6 py-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors text-sm sm:text-base"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className={`px-6 py-3 rounded-lg font-semibold text-white transition-colors text-sm sm:text-base ${
                    loading ? 'bg-gray-600 cursor-not-allowed' : 'bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700'
                  }`}
                >
                  {loading ? "Sending..." : "Send Request"}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}

      {/* Success Toast */}
      {showSuccessToast && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-50 bg-gradient-to-r from-green-600 to-green-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-2xl shadow-green-900/50 flex items-center gap-3 text-sm sm:text-base"
        >
          <div className="text-xl sm:text-2xl">✓</div>
          <p className="font-medium">Request sent successfully! We'll get back soon.</p>
        </motion.div>
      )}
    </div>
  );
}