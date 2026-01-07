import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import { Canvas } from "@react-three/fiber";
import { Stars, Sparkles, Float, OrbitControls } from "@react-three/drei";

import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiSupabase,
  SiPostgresql,
  SiDocker,
  SiDjango,
  SiPython,
  SiC,
  SiJavascript,
  SiMysql,
  SiExpress,
  SiFigma,
  SiCodesandbox as SiShadcn,
  SiZap as SiN8n,
  SiMongodb as SiMongoDB,
  SiGit,
} from "react-icons/si";

// Smooth Anchor Link (unchanged)
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

export default function HomePage() {
  // Smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.12,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
      syncTouch: true,
      ignore: (event) => event.target.closest("a, [data-lenis-ignore]"),
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

  const techRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: techRef,
    offset: ["start 95%", "start 20%"],
  });

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  const rotateX = useTransform(scrollYProgress, [0, 1], isMobile ? [90, 0] : [90, 0]);
  const y = useTransform(scrollYProgress, [0, 1], isMobile ? [200, 0] : [200, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], isMobile ? [0.8, 1] : [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], isMobile ? [0.3, 1] : [0.3, 1]);

  const mobileOffset = useScroll({
    target: techRef,
    offset: isMobile ? ["start 100%", "start 35%"] : ["start 95%", "start 20%"],
  }).scrollYProgress;

  const rotateXMobileAdjusted = isMobile ? useTransform(mobileOffset, [0, 1], [90, 0]) : rotateX;
  const yMobileAdjusted = isMobile ? useTransform(mobileOffset, [0, 1], [200, 0]) : y;
  const scaleMobileAdjusted = isMobile ? useTransform(mobileOffset, [0, 1], [0.8, 1]) : scale;
  const opacityMobileAdjusted = isMobile ? useTransform(mobileOffset, [0, 1], [0.3, 1]) : opacity;

  const techItems = [
    { name: "React 19", icon: <SiReact className="text-5xl mb-4 text-cyan-400" /> },
    { name: "Next.js 15", icon: <SiNextdotjs className="text-5xl mb-4 text-gray-200" /> },
    { name: "Tailwind v4", icon: <SiTailwindcss className="text-5xl mb-4 text-cyan-500" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-5xl mb-4 text-green-500" /> },
    { name: "Express", icon: <SiExpress className="text-5xl mb-4 text-gray-400" /> },
    { name: "Django", icon: <SiDjango className="text-5xl mb-4 text-green-600" /> },
    { name: "Git", icon: <SiGit className="text-5xl mb-4 text-orange-600" /> },
    { name: "Python", icon: <SiPython className="text-5xl mb-4 text-blue-400" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-5xl mb-4 text-yellow-400" /> },
    { name: "C", icon: <SiC className="text-5xl mb-4 text-blue-600" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-5xl mb-4 text-blue-600" /> },
    { name: "MySQL", icon: <SiMysql className="text-5xl mb-4 text-orange-500" /> },
    { name: "Supabase", icon: <SiSupabase className="text-5xl mb-4 text-emerald-500" /> },
    { name: "Docker", icon: <SiDocker className="text-5xl mb-4 text-blue-500" /> },
    { name: "MongoDB", icon: <SiMongoDB className="text-5xl mb-4 text-green-500" /> },
    { name: "Figma", icon: <SiFigma className="text-5xl mb-4 text-pink-500" /> },
    { name: "Shadcn/UI", icon: <SiShadcn className="text-5xl mb-4 text-gray-300" /> },
    { name: "n8n", icon: <SiN8n className="text-5xl mb-4 text-purple-500" /> },
  ];

  return (
    <div className="relative bg-gray-950 text-gray-100 overflow-hidden font-sans">
      {/* BACKGROUND 3D - unchanged */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <Canvas camera={{ position: [0, 0, 140], fov: 75 }}>
          <color attach="background" args={["#0a0a0f"]} />
          <Stars radius={300} depth={200} count={12000} factor={6} saturation={0} fade speed={0.4} />
          <Sparkles count={600} scale={20} size={8} speed={0.6} color="#4b5563" opacity={0.6} />
          <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
            <mesh position={[0, 0, -60]}>
              <icosahedronGeometry args={[30, 1]} />
              <meshBasicMaterial color="#1f2937" wireframe opacity={0.25} transparent />
            </mesh>
          </Float>
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.25} enableDamping dampingFactor={0.95} />
        </Canvas>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-950/30 to-gray-950/70 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(31,41,55,0.15),transparent_70%)] pointer-events-none" />
      </div>

      <div className="relative z-10">
        {/* HERO - mobile adjusted like About page */}
        <section className="relative min-h-[90vh] flex items-center justify-center px-5 sm:px-6 py-16 sm:py-28 md:py-32 lg:py-40">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 90, scale: 0.88 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.95, ease: "easeOut" }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tight leading-none mb-6 whitespace-nowrap"
            >
              <span className="bg-gradient-to-r from-gray-300 via-gray-100 to-gray-400 bg-clip-text text-transparent">
                Joseph Okafor
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.7 }}
              className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mt-4 sm:mt-6 leading-relaxed font-light tracking-wide"
            >
              Electronic Engineer • Full-Stack Software Engineer • Blockchain Systems Builder
              <br className="hidden sm:block" />
              Designing resilient, high-scale systems trusted at global scale.
            </motion.p>

            {/* HERO BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mt-8 sm:mt-12 z-10 relative">
              <a
                href="/docs"
                data-lenis-ignore
                className="px-7 sm:px-12 py-3.5 sm:py-6 text-base sm:text-xl font-semibold tracking-tight bg-gradient-to-r from-gray-700 to-gray-800 rounded-xl hover:scale-105 hover:shadow-xl hover:shadow-gray-900/40 transition-all duration-300 cursor-pointer"
              >
                Explore Systems
              </a>

              <a
                href="/projects"
                data-lenis-ignore
                className="px-7 sm:px-12 py-3.5 sm:py-6 text-base sm:text-xl font-semibold tracking-tight border-2 border-gray-600 text-gray-300 rounded-xl hover:bg-gray-900/50 hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                View Signature Projects
              </a>
            </div>
          </div>
        </section>

        {/* IMPACT MARQUEE */}
        <div className="overflow-hidden py-10 bg-gray-950/60 border-t border-b border-gray-800/50">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="flex gap-32 whitespace-nowrap"
          >
            {[
              "Node.js APIs @ 50k+ RPS",
              "Django backends → 10M+ MAU",
              "Real-time systems 1M+ concurrent",
              "Optimized latency < 50ms p95",
              "Zero-downtime migrations @ scale",
              "Event-driven 500k+ msg/s",
              "Horizontal scaling via K8s",
              "40% faster queries via indexing",
              "99.99% API uptime achieved",
              "Monoliths to microservices success",
            ].map((stat, i) => (
              <span key={i} className="text-xl md:text-2xl font-medium text-gray-500/80 tracking-wider">
                {stat}
              </span>
            ))}
            {[...Array(10)].map((_, i) => (
              <span key={i + 100} className="text-xl md:text-2xl font-medium text-gray-500/80 tracking-wider">
                {[
                  "Node.js APIs @ 50k+ RPS",
                  "Django backends → 10M+ MAU",
                  "Real-time systems 1M+ concurrent",
                  "Optimized latency < 50ms p95",
                  "Zero-downtime migrations @ scale",
                  "Event-driven 500k+ msg/s",
                  "Horizontal scaling via K8s",
                  "40% faster queries via indexing",
                  "99.99% API uptime achieved",
                  "Monoliths to microservices success",
                ][i % 10]}
              </span>
            ))}
          </motion.div>
        </div>

        {/* CORE TECHNOLOGY GRID */}
        <section id="projects" className="py-32 bg-gray-950/50 backdrop-blur-md border-t border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-center mb-8 bg-gradient-to-r from-gray-400 to-gray-500 bg-clip-text text-transparent tracking-tight leading-none"
            >
              Core Technologies I Master
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center text-gray-400 mb-20 max-w-3xl mx-auto text-lg font-light tracking-wide leading-relaxed"
            >
              Selected for extreme performance, developer experience, and decade-long maintainability.
            </motion.p>

            <motion.div
              ref={techRef}
              style={{
                rotateX: rotateXMobileAdjusted,
                y: yMobileAdjusted,
                scale: scaleMobileAdjusted,
                opacity: opacityMobileAdjusted,
                perspective: 1200,
              }}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8"
            >
              {techItems.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, rotateY: 30 }}
                  whileInView={{ opacity: 1, rotateY: 0 }}
                  viewport={{ once: false }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.025,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{
                    y: -20,
                    scale: 1.15,
                    rotateY: -15,
                    z: 100,
                    transition: { duration: 0.4 },
                  }}
                  className="bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 flex flex-col items-center justify-center min-h-[170px] cursor-pointer shadow-2xl shadow-black/50"
                >
                  {tech.icon}
                  <span className="mt-6 text-lg font-medium text-gray-200 tracking-wide">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section id="contact" className="py-24 md:py-40 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7 }}
            className="relative z-10 max-w-5xl mx-auto px-6"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-10 bg-gradient-to-r from-gray-400 via-gray-300 to-gray-500 bg-clip-text text-transparent tracking-tight leading-tight">
              Let’s Architect Something Legendary
            </h2>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light tracking-wide leading-relaxed">
              Scale • Resilience • Strategic Impact
            </p>

            <div className="flex flex-col sm:flex-row gap-5 sm:gap-8 justify-center">
              <a
                href="/contact"
                className="px-8 sm:px-16 py-4 sm:py-7 text-base sm:text-2xl font-semibold tracking-tight bg-gradient-to-r from-gray-700 to-gray-800 rounded-2xl shadow-xl shadow-gray-900/40 hover:shadow-2xl hover:shadow-gray-800/60 hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                Start The Conversation
              </a>

              <a
                href="/projects"
                className="px-8 sm:px-16 py-4 sm:py-7 text-base sm:text-2xl font-semibold tracking-tight border-2 border-gray-600 text-gray-300 rounded-2xl hover:bg-gray-900/50 hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                View Signature Projects
              </a>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}