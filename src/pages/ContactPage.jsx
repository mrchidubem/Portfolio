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

// ── Animation variants
const fadeInUp = {
  initial: { y: 60, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: false, margin: "-80px", amount: 0.25 },
  transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] },
};

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields.");
      return;
    }

    setLoading(true);
    try {
      const response = await emailjs.send(
        'service_c0lf87l',
        'template_k5huwmg',
        {
          contact_form_name: formData.name,
          contact_form_email: formData.email,
          content: formData.message
        },
        'J4cq0UVZeRP4Hlm4O'
      );

      console.log('EmailJS Success:', response.status, response.text);
      setShowSuccessToast(true);
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setShowSuccessToast(false), 4000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      alert('Failed to send. Please email directly: dubicventures@gmail.com');
    } finally {
      setLoading(false);
    }
  };

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
          <Stars radius={300} depth={200} count={800} factor={3} saturation={0} fade speed={0.15} />
          <Sparkles count={40} scale={12} size={4} speed={0.2} color="#4b5563" opacity={0.25} />
          <Float speed={1.4} rotationIntensity={0.8} floatIntensity={1.4}>
            <mesh position={[0, 0, -60]}>
              <icosahedronGeometry args={[35, 1]} />
              <meshBasicMaterial color="#1f2937" wireframe opacity={0.4} transparent />
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
      <div className="relative z-10 max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 py-20 sm:py-28 md:py-36 lg:py-40">
        {/* Hero */}
        <motion.div
          {...fadeInUp}
          className="text-center mb-10 sm:mb-14 md:mb-16 lg:mb-20"
        >
          <h1 className="text-4xl xs:text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-gray-400 via-gray-300 to-gray-500 bg-clip-text text-transparent tracking-tighter mb-5 sm:mb-6 leading-tight">
            Let’s Build the Future, Together
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-2xl sm:max-w-3xl md:max-w-4xl mx-auto leading-relaxed">
            Strategic collaborations, high-impact systems, or next-generation venture infrastructure — we're ready when you are.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40, scale: 0.98 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="bg-gray-900/70 backdrop-blur-xl border border-gray-800/60 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10"
          >
            <h2 className="text-2xl sm:text-2.5xl md:text-3xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-gray-400 to-gray-500 bg-clip-text text-transparent">
              Get in Touch
            </h2>

            <form className="space-y-5 sm:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm sm:text-base font-medium text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-gray-950/60 border border-gray-700 rounded-xl px-4 sm:px-5 py-3 sm:py-4 text-white placeholder-gray-500 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500/40 transition-all text-sm sm:text-base"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm sm:text-base font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-950/60 border border-gray-700 rounded-xl px-4 sm:px-5 py-3 sm:py-4 text-white placeholder-gray-500 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500/40 transition-all text-sm sm:text-base"
                  placeholder="your@company.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm sm:text-base font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full bg-gray-950/60 border border-gray-700 rounded-xl px-4 sm:px-5 py-3 sm:py-4 text-white placeholder-gray-500 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500/40 transition-all resize-none text-sm sm:text-base"
                  placeholder="Tell me about your vision, challenge, or opportunity..."
                  required
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className={`w-full bg-gradient-to-r from-gray-700 to-gray-800 py-4 sm:py-5 rounded-xl text-base sm:text-lg md:text-xl font-bold shadow-xl shadow-gray-900/30 hover:shadow-gray-700/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed mt-2`}
              >
                {loading ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info + Channels */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.98 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="space-y-6 sm:space-y-8 md:space-y-10"
          >
            <div className="bg-gray-900/70 backdrop-blur-xl border border-gray-800/60 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10">
              <h3 className="text-xl sm:text-2xl md:text-2.5xl font-bold mb-5 sm:mb-6 bg-gradient-to-r from-gray-400 to-gray-500 bg-clip-text text-transparent">
                Preferred Channels
              </h3>
              <ul className="space-y-4 sm:space-y-5 md:space-y-6">
                {[
                  { label: "Email (Primary)", value: "dubicventures1@gmail.com", desc: "Fastest response for strategic discussions", link: "mailto:dubicventures1@gmail.com" },
                  { label: "Calendar", value: "Book 30-min Call", desc: "Deep technical or business alignment", link: "#" },
                  { label: "X / Twitter", value: "https://x.com/ChidubemOkafo17", desc: "Quick updates & public signals", link: "https://x.com/ChidubemOkafo17" },
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <span className="text-gray-400 text-xs sm:text-sm">{item.label}</span>
                    <a
                      href={item.link}
                      className="block text-base sm:text-lg md:text-xl font-medium text-gray-300 hover:text-gray-200 transition-colors mt-0.5"
                      target={item.link.startsWith("http") ? "_blank" : undefined}
                      rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {item.value}
                    </a>
                    <span className="text-xs sm:text-sm text-gray-500 mt-1 block">{item.desc}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-gray-900/90 to-gray-950/40 border border-gray-800/60 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center">
              <h3 className="text-xl sm:text-2xl md:text-2.5xl font-bold mb-3 sm:mb-4 text-white">Response Time</h3>
              <p className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-300">Usually within 24h</p>
              <p className="text-sm sm:text-base text-gray-400 mt-1 sm:mt-2">Strategic proposals prioritized</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Success Toast - responsive */}
      {showSuccessToast && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-4 sm:bottom-6 md:bottom-8 left-4 right-4 sm:left-1/2 sm:right-auto sm:-translate-x-1/2 z-50 bg-gradient-to-r from-green-600 to-green-700 text-white px-5 sm:px-6 md:px-8 py-3 sm:py-4 rounded-2xl sm:rounded-full shadow-2xl shadow-green-900/50 flex items-center gap-3 text-sm sm:text-base"
        >
          <div className="text-xl sm:text-2xl">✓</div>
          <p className="font-medium">Message sent successfully! We'll get back to you soon.</p>
        </motion.div>
      )}
    </div>
  );
}