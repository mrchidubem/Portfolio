import { motion } from "framer-motion";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { Canvas } from "@react-three/fiber";
import { Stars, Sparkles, Float, OrbitControls } from "@react-three/drei";

// ── Smooth Anchor Link (unchanged)
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

// Slightly faster & smoother reveal variants
const sectionReveal = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] },
};

const heroReveal = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] },
};

export default function AboutPage() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.12,           // ← same as optimized homepage – very smooth & responsive
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

    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      delete window.lenis;
    };
  }, []);

  return (
    <div className="relative bg-gray-950 text-gray-100 overflow-hidden min-h-screen">
      {/* COSMIC BACKGROUND – slightly optimized for performance */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <Canvas camera={{ position: [0, 0, 140], fov: 75 }}>
          <color attach="background" args={["#0a0a0f"]} />
          <Stars radius={300} depth={220} count={700} factor={3.5} saturation={0} fade speed={0.1} />
          <Sparkles count={40} scale={12} size={4.5} speed={0.15} color="#4b5563" opacity={0.25} />
          <Float speed={1.2} rotationIntensity={0.7} floatIntensity={1.2}>
            <mesh position={[0, 0, -70]}>
              <icosahedronGeometry args={[40, 1]} />
              <meshBasicMaterial color="#1f2937" wireframe opacity={0.4} transparent />
            </mesh>
          </Float>
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.18}
            enableDamping
            dampingFactor={0.92}
          />
        </Canvas>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-950/60 to-gray-950/90 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(31,41,55,0.25),transparent_80%)] pointer-events-none" />
      </div>

      <div className="relative z-10">
        {/* HERO */}
        <section className="relative py-24 sm:py-40 px-6">
          <motion.div {...heroReveal} className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 bg-gradient-to-r from-gray-400 via-gray-300 to-gray-500 bg-clip-text text-transparent whitespace-nowrap">
              About Joseph Okafor
            </h1>
          </motion.div>
        </section>

        {/* Background / Bio */}
        <section id="background" className="pt-4 sm:pt-8 lg:pt-12 pb-16 sm:pb-24 lg:pb-32">
          <div className="max-w-7xl mx-auto px-5 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start lg:items-center">
              <motion.div {...sectionReveal}>
                <blockquote className="text-xl sm:text-2xl md:text-3xl font-extrabold italic text-gray-200 leading-tight mb-8 tracking-wide border-l-4 border-gray-600 pl-6">
                  I design systems with longevity in mind, focusing on reliability, clarity, and infrastructure that continues to perform as complexity grows.
                </blockquote>

                <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
                  I’m Chidubem Okafor, a software engineer with an engineering mindset shaped by systems thinking, discipline, and long-term design.
                </p>

                <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mt-5">
                  My background in electronic engineering trained me to think in terms of components, failure modes, and efficiency — and I carry that same rigor into software architecture.
                </p>

                <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mt-5">
                  In short: I build reliable, understandable systems designed to scale and last.
                </p>

                <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mt-5">
                  DubicVentures is my platform for applying disciplined engineering to durable digital products and long-term initiatives.
                </p>
              </motion.div>

              {/* Philosophy cards – faster stagger */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 lg:mt-0">
                {[
                  { title: "Transparency", desc: "Clear systems, clear decisions, no black boxes." },
                  { title: "Security", desc: "Strong defaults, zero-trust thinking, production-grade safety." },
                  { title: "Clarity", desc: "Architecture that teams understand and trust." },
                  { title: "Scale", desc: "Built to grow without rewrites or chaos." },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    {...sectionReveal}
                    transition={{ ...sectionReveal.transition, delay: i * 0.1 }}
                    className="bg-gray-900/70 backdrop-blur-lg border border-gray-800/60 rounded-2xl p-6 sm:p-8 text-center"
                  >
                    <h3 className="text-2xl font-bold text-gray-200 mb-4">{item.title}</h3>
                    <p className="text-gray-400">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROFESSIONAL JOURNEY – progressive reveal */}
        <section className="py-20 sm:py-28 lg:py-36">
          <div className="max-w-6xl mx-auto px-5 sm:px-6">
            <motion.h2
              {...sectionReveal}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-center mb-12 sm:mb-16 bg-gradient-to-r from-gray-300 to-gray-400 bg-clip-text text-transparent"
            >
              Professional Journey
            </motion.h2>

            <div className="relative">
              <div className="absolute right-6 sm:right-10 md:left-1/2 md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-transparent via-gray-600/60 to-transparent" />

              {[
                {
                  year: "2017–2022",
                  title: "Electronic Engineering",
                  desc: "B.Eng (Second Class Upper), University of Nigeria, Nsukka. Built a strong foundation in systems thinking, hardware–software interaction, and disciplined problem solving.",
                },
                {
                  year: "2021–2024",
                  title: "Web Developer — Vivvaa Solutions",
                  desc: "Delivered responsive websites and digital solutions for multiple client businesses. Translated designs into functional, scalable applications with strong UX and performance focus.",
                },
                {
                  year: "2022–Date (Contract)",
                  title: "Software Engineer — Oneway",
                  desc: "Developed backend services for scan-to-pay, inventory management, and POS integrations. Focused on secure, fast, and reliable transaction systems.",
                },
                {
                  year: "2024–2025",
                  title: "Software Engineer — IBX Exchange",
                  desc: "Built and optimized scalable fintech systems. Improved performance by 30%, accelerated deployments, and delivered secure APIs for transactions and access control.",
                },
                {
                  year: "2024",
                  title: "Advanced Training",
                  desc: "Completed Full-Stack MERN specialization at PLP Academy and the 3MTT Presidential Initiative, strengthening backend architecture, algorithms, and production engineering practices.",
                },
                {
                  year: "Now",
                  title: "DubicVentures",
                  desc: "Founder & Engineer — applying disciplined, long-term engineering principles to scalable systems, infrastructure, and durable digital products.",
                },
              ].map((milestone, i) => (
                <motion.div
                  key={milestone.year}
                  {...sectionReveal}
                  transition={{ ...sectionReveal.transition, delay: i * 0.14 }}
                  className="relative mb-12 sm:mb-16 last:mb-0"
                >
                  <div
                    className={`relative w-full md:w-5/12 ${
                      i % 2 === 0
                        ? "md:mr-auto md:pr-8 md:text-right"
                        : "md:ml-auto md:pl-8 md:text-left"
                    } bg-gray-900/80 border border-gray-800/70 rounded-2xl p-6 sm:p-8`}
                  >
                    <span className="text-lg sm:text-xl font-bold text-gray-400 block mb-3">
                      {milestone.year}
                    </span>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 text-gray-100">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                      {milestone.desc}
                    </p>
                  </div>

                  <div className="absolute top-1/2 -translate-y-1/2 right-0 md:left-1/2 md:-translate-x-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-800 flex items-center justify-center text-gray-200 font-bold text-sm sm:text-base">
                    {milestone.year === "Now" ? "→" : milestone.year.slice(-2)}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA – compact on mobile */}
        <section className="py-16 sm:py-24 text-center">
          <motion.div {...sectionReveal} className="max-w-5xl mx-auto px-5">
            <h2 className="text-4xl sm:text-5xl font-black mb-6 bg-gradient-to-r from-gray-300 to-gray-400 bg-clip-text text-transparent">
              Let’s Build Something That Lasts
            </h2>
            <p className="text-lg sm:text-xl text-gray-200 mb-8 sm:mb-12">
              If you need systems built with clarity, discipline, and long-term thinking — I’m ready.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-5 sm:gap-8">
              <a
                href="/contact"
                className="px-10 sm:px-16 py-4 sm:py-6 bg-gray-800 hover:bg-gray-700 rounded-2xl text-base sm:text-2xl font-bold transition-colors duration-300"
              >
                Start a Conversation
              </a>

              <a
                href="/projects"
                className="px-10 sm:px-16 py-4 sm:py-6 border-2 border-gray-700 hover:bg-gray-800/40 rounded-2xl text-base sm:text-2xl font-bold transition-colors duration-300"
              >
                View Projects
              </a>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}