import { motion } from "framer-motion";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { Canvas } from "@react-three/fiber";
import { Stars, Sparkles, Float, OrbitControls } from "@react-three/drei";

// ── Smooth Anchor Link
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

// Animation variants - optimized for mobile
const sectionReveal = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] },
};

const heroReveal = {
  initial: { opacity: 0, y: 80, scale: 0.95 },
  animate: { opacity: 1, y: 0, scale: 1 },
  transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
};

export default function AboutPage() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.35,
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

      <div className="relative z-10">
        {/* HERO - Unchanged */}
        <section className="relative min-h-[70vh] sm:min-h-screen flex items-center justify-center px-5 sm:px-6 py-16 sm:py-28">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1
              {...heroReveal}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-[-0.04em] leading-none mb-6 sm:mb-8"
              style={{ textShadow: "0 10px 40px rgba(0,0,0,0.6)" }}
            >
              <span className="bg-gradient-to-r from-gray-400 via-gray-300 to-gray-500 bg-clip-text text-transparent">
                Dubicventures
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1.2 }}
            >
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-300 font-light tracking-wide leading-tight mb-4 sm:mb-6">
                I design systems built for scale and long-term impact.
              </p>
              <motion.span
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="text-base sm:text-lg md:text-xl text-gray-500 font-mono tracking-widest"
              >
                Designed for scale • Reliability-focused systems • Since 2018
              </motion.span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.9 }}
              className="mt-10 sm:mt-12 flex flex-col sm:flex-row gap-5 sm:gap-6 justify-center"
            >
              <a
                href="/contact"
                className="px-10 sm:px-14 py-5 sm:py-7 text-lg sm:text-xl md:text-2xl font-semibold bg-gradient-to-r from-gray-700 to-gray-800 rounded-2xl shadow-2xl shadow-gray-900/40 hover:shadow-2xl hover:shadow-gray-800/60 hover:scale-105 transition-all duration-300"
              >
                Let's Build Something Legendary
              </a>

              <SmoothAnchorLink
                to="#background"
                className="px-10 sm:px-14 py-5 sm:py-7 text-lg sm:text-xl md:text-2xl font-semibold border-2 border-gray-600 text-gray-300 rounded-2xl hover:bg-gray-900/50 hover:scale-105 transition-all duration-300"
              >
                Dive Deeper
              </SmoothAnchorLink>
            </motion.div>
          </div>
        </section>

        {/* UPDATED: Background & Philosophy - High-end, concise, professional rewrite */}
        <section id="background" className="py-16 sm:py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-5 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <motion.div {...sectionReveal}>
                {/* <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-gray-400 to-gray-500 bg-clip-text text-transparent">
                 Joseph Chidubem Okafor
                </h2> */}

                {/* Strong, elevated quote - now with better emphasis */}
                <blockquote className="text-lg sm:text-xl md:text-2xl font-extrabold italic text-gray-300 leading-relaxed mb-8 tracking-wide border-l-4 border-gray-600 pl-6">
                 I design systems with longevity in mind, focusing on reliability, clarity, and infrastructure
                  that continues to perform as complexity grows.</blockquote>

                <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
                  Joseph Chidubem Okafor is a software engineer and systems-focused builder with hands-on experience designing, 
                  deploying, and operating scalable backend and cloud-native systems. His work centers on performance, reliability,
                   and clarity, ensuring that every system is engineered to operate predictably under real-world production demands. </p>

                <p className="text-base sm:text-lg text-gray-400 leading-relaxed mt-6">
                 With a background spanning Python, C, JavaScript, cloud-native tooling, Joseph has contributed to microservice 
                 architectures, RESTful platforms, and CI/CD pipelines deployed on AWS using Docker and GitHub Actions.
                  His engineering approach is grounded in real-world delivery, 
                  measurable performance improvements, and disciplined system design.</p>

                 <p className="text-base sm:text-lg text-gray-400 leading-relaxed mt-6">
                 DubicVentures is his personal venture platform, created to apply the same engineering discipline to long-term technology 
                 and infrastructure initiatives. It serves as a foundation for building durable digital products, venture-grade platforms, 
                 and technical systems designed to scale responsibly and endure over time.</p>
              </motion.div>

              {/* Philosophy cards - unchanged */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 lg:mt-0">
                {[
                  { title: "Transparency", desc: "No black boxes. Full visibility into architecture, decisions, and performance." },
                  { title: "Security", desc: "Zero-trust by default. Enterprise-grade protection baked into every layer." },
                  { title: "Intelligence", desc: "AI-driven insights grounded in real production data and battle-tested models." },
                  { title: "Scale", desc: "Systems designed for 10⁵+ req/s, multi-region resilience, and zero-downtime evolution." },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    {...sectionReveal}
                    transition={{ ...sectionReveal.transition, delay: i * 0.1 }}
                    className="bg-gray-900/70 backdrop-blur-md border border-gray-800/60 rounded-2xl p-6 sm:p-8 text-center hover:border-gray-600/70 hover:shadow-xl hover:shadow-gray-900/30 transition-all duration-300"
                  >
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-300 mb-3 sm:mb-4">{item.title}</h3>
                    <p className="text-sm sm:text-base text-gray-400">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* My Journey - Updated with CV details */}
        <section className="py-16 sm:py-24 md:py-32">
          <div className="max-w-6xl mx-auto px-5 sm:px-6">
            <motion.h2
              {...sectionReveal}
              className="text-4xl sm:text-5xl md:text-6xl font-black text-center mb-12 sm:mb-16 md:mb-20 bg-gradient-to-r from-gray-400 to-gray-500 bg-clip-text text-transparent"
            >
              My Journey
            </motion.h2>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute right-6 sm:right-8 md:left-1/2 md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-transparent via-gray-700/50 to-transparent" />

              {[
                { year: "2017–2022", title: "Electronic Engineering", desc: "B.Eng (Second Class Upper), University of Nigeria, Nsukka — strong foundation in hardware-software systems integration." },
                { year: "2023", title: "Software Engineering Diploma", desc: "ALX Africa / Holberton School — full transition to modern full-stack and backend development." },
                { year: "2023–2024", title: "Early Professional Experience", desc: "Junior Python Developer at Pacuss Global Ventures — built scalable web apps, RESTful APIs, and optimized infrastructure (20–30% efficiency gains)." },
                { year: "2024–2025", title: "Advanced Specialization", desc: "PLP Academy & 3MTT Software Development Programs (Presidential Initiative) — Specialized in MERN stack development, backend systems, algorithms, and professional engineering practices for large-scale software delivery." },
                { year: "2024–2025", title: "Solutions Architecture", desc: "Junior Solutions Architect at Chemical and Allied Products (CAP) — delivered microservices, CI/CD automation, and performance improvements (40% faster deployments)." },
                { year: "Now", title: "DubicVentures", desc: "Founder & Lead Architect — pioneering resilient, transparent, long-term solutions at scale for venture capital and beyond." },
              ].map((milestone, i) => (
                <motion.div
                  key={milestone.year}
                  {...sectionReveal}
                  transition={{ ...sectionReveal.transition, delay: i * 0.15 }}
                  className="relative mb-16 sm:mb-20 last:mb-0"
                >
                  {/* Card */}
                  <div
                    className={`
                      relative w-full md:w-5/12
                      ${i % 2 === 0 
                        ? "md:mr-auto md:pr-8 lg:pr-16 md:text-right" 
                        : "md:ml-auto md:pl-8 lg:pl-16 md:text-left"}
                      bg-gray-900/80 border border-gray-800 rounded-2xl p-6 sm:p-7 md:p-8
                      hover:border-gray-700/70 transition-all
                    `}
                  >
                    <span className="text-xl sm:text-2xl font-bold text-gray-400 block mb-2 sm:mb-3">
                      {milestone.year}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-gray-200">
                      {milestone.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                      {milestone.desc}
                    </p>
                  </div>

                  {/* Circle */}
                  <div
                    className={`
                      absolute top-1/2 -translate-y-1/2
                      right-0 sm:right-2 md:left-1/2 md:-translate-x-1/2
                      w-10 h-10 sm:w-11 md:w-12 h-10 sm:h-11 md:h-12
                      rounded-full bg-gradient-to-r from-gray-700 to-gray-800
                      flex items-center justify-center z-10
                      shadow-lg shadow-gray-900/50
                      text-sm sm:text-base font-bold text-gray-300
                    `}
                  >
                    {milestone.year === "Now" ? "→" : milestone.year.slice(-2)}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA - Unchanged */}
        <section className="py-20 sm:py-28 md:py-40 text-center">
          <motion.div {...sectionReveal} className="max-w-5xl mx-auto px-5 sm:px-6">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 sm:mb-8 bg-gradient-to-r from-gray-400 via-gray-300 to-gray-500 bg-clip-text text-transparent">
              Let’s Build Something That Lasts
            </h2>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto">
              If you need systems that scale to billions, security that institutions trust, or intelligence that gives you an edge — I’m here to architect it with you.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center">
              <a
                href="/contact"
                className="px-12 sm:px-16 py-5 sm:py-7 bg-gradient-to-r from-gray-700 to-gray-800 rounded-2xl text-xl sm:text-2xl font-bold shadow-xl shadow-gray-900/40 hover:shadow-2xl hover:shadow-gray-800/60 hover:scale-105 transition-all duration-300"
              >
                Start a Conversation
              </a>

              <a
                href="/services"
                className="px-12 sm:px-16 py-5 sm:py-7 border-2 border-gray-600 text-gray-300 rounded-2xl text-xl sm:text-2xl font-bold hover:bg-gray-900/50 hover:scale-105 transition-all duration-300"
              >
                Explore Services
              </a>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}