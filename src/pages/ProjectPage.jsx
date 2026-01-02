import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { Canvas } from "@react-three/fiber";
import { Stars, Sparkles, Float, OrbitControls } from "@react-three/drei";

// Premium smooth ease
const premiumEase = [0.25, 0.46, 0.45, 0.94];

// Section reveal
const sectionReveal = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, margin: "-80px" },
  transition: { duration: 1.1, ease: premiumEase },
};

// Card entrance/exit
const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: premiumEase,
      delay: i * 0.08,
    },
  }),
  exit: { opacity: 0, y: 30, transition: { duration: 0.4 } },
};

export default function ProjectsPage() {
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
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

  const projects = [
    {
      title: "Nexlify AI",
      description:
        "AI-powered investment analytics platform with real-time portfolio tracking, predictive ROI modeling, and natural language insights.",
      tech: ["Next.js 15", "TypeScript", "Tailwind v4", "Recharts", "Supabase", "AI/ML"],
      category: "ai",
      link: "https://nexlify.ai",
      github: "https://github.com/dubicventures/nexlify",
      year: "2025",
      featured: true,
    },
    {
      title: "Hospital Management System",
      description:
        "Full-stack hospital management platform handling patient records, doctor scheduling, appointments, inventory, billing, and secure admin/staff authentication.",
      tech: ["MongoDB", "Express", "React", "Node.js", "Tailwind v4", "JWT", "Socket.io"],
      category: "web",
      link: "https://hospital-management-app-web.vercel.app",
      github: "https://github.com/dubicventures/hospital-management",
      year: "2025",
      featured: true,
    },
    {
      title: "Student Dashboard",
      description:
        "Comprehensive student management dashboard with real-time grade tracking, course analytics, assignment pipeline, and activity stream.",
      tech: ["React 19", "Tailwind v4", "React Router v7", "Framer Motion", "Vite"],
      category: "web",
      link: "#",
      github: "https://github.com/dubicventures/student-dashboard",
      year: "2025",
      featured: true,
    },
    {
      title: "Fransunisoft Website",
      description:
        "Modern, high-performance corporate website for Fransunisoft featuring smooth animations, responsive design, and seamless user experience across devices.",
      tech: ["Next.js", "Node.js", "Tailwind v4", "Framer Motion", "Vercel"],
      category: "web",
      link: "https://fransunisoft.com",
      github: "https://github.com/dubicventures/fransunisoft-site",
      year: "2025",
      featured: false,
    },
    {
      title: "Air BnB Clone",
      description:
        "Full-featured vacation rental platform clone with user authentication, property listings, booking system, reviews, and payment integration.",
      tech: ["Django", "Python", "PostgreSQL", "Tailwind v4", "JavaScript"],
      category: "web",
      link: "#",
      github: "https://github.com/dubicventures/airbnb-clone",
      year: "2025",
      featured: false,
    },
    {
      title: "Budget Buddy",
      description:
        "Personal finance management app for tracking expenses, setting budgets, generating reports, and visualizing spending patterns with real-time updates.",
      tech: ["MongoDB", "Express", "React", "Node.js", "Tailwind v4"],
      category: "web",
      link: "https://budget-buddy-vibe-coding.onrender.com",
      github: "https://github.com/dubicventures/budget-tracker",
      year: "2025",
      featured: false,
    },
    {
      title: "E-Commerce Platform",
      description:
        "Scalable online shopping platform with product catalog, cart system, secure checkout, order tracking, and admin dashboard for inventory management.",
      tech: ["Next.js", "TypeScript", "Tailwind v4", "Stripe", "Prisma", "PostgreSQL"],
      category: "web",
      link: "#",
      github: "https://github.com/dubicventures/ecommerce-platform",
      year: "2025",
      featured: false,
    },
    {
      title: "Task Management SaaS",
      description:
        "Collaborative project management tool with kanban boards, team assignments, deadlines, notifications, and progress analytics.",
      tech: ["React", "Node.js", "MongoDB", "GraphQL", "Redis", "Tailwind v4"],
      category: "web",
      link: "#",
      github: "https://github.com/dubicventures/task-saas",
      year: "2025",
      featured: false,
    },
    {
      title: "Social Media Dashboard",
      description:
        "Analytics dashboard for tracking social media performance across multiple platforms with real-time metrics, post scheduling, and engagement insights.",
      tech: ["React", "Tailwind v4", "Recharts", "Node.js", "Socket.io", "MongoDB"],
      category: "web",
      link: "#",
      github: "https://github.com/dubicventures/social-dashboard",
      year: "2025",
      featured: false,
    },
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'ai', label: 'AI/ML' },
    { id: 'crypto', label: 'Crypto' },
    { id: 'web', label: 'Web/App' },
    { id: 'web3', label: 'Web3' },
    { id: 'data', label: 'Data Viz' },
  ];

  return (
    <div className="relative bg-gray-950 text-gray-100 overflow-hidden">
      {/* FIXED COSMIC BACKGROUND — Exact same as final Homepage (drastically reduced particles + strong mirror) */}
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
      <div className="relative z-10">

        {/* Hero */}
        <section className="relative py-40 px-6">
          <motion.div {...sectionReveal} className="max-w-7xl mx-auto text-center">
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 bg-gradient-to-r from-gray-400 via-gray-300 to-gray-500 bg-clip-text text-transparent">
              Signature Projects
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light max-w-4xl mx-auto">
              High-performance systems • Long-term architecture • Battle-tested infrastructure
            </p>
          </motion.div>
        </section>

        {/* Filter */}
        <section className="sticky top-0 z-40 bg-gray-950/80 backdrop-blur-lg border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-6 py-5">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setFilter(cat.id)}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-colors ${
                    filter === cat.id
                      ? 'bg-gray-800/80 text-gray-100 border border-gray-700/70'
                      : 'text-gray-500 hover:text-gray-300'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, i) => (
                  <motion.div
                    key={project.title}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    custom={i}
                    className="group relative rounded-2xl border border-gray-800/60 bg-gray-900/70 backdrop-blur-sm overflow-hidden transition-all duration-700 hover:border-gray-600/70 hover:bg-gray-900/80"
                    whileHover={{ y: -12 }}
                  >
                    {/* Subtle inner glow on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-800/5 via-transparent to-gray-900/5" />
                      <div className="absolute -inset-1 bg-gradient-to-br from-gray-700/10 via-transparent to-gray-800/10 blur-xl" />
                    </div>

                    <div className="h-44 bg-gradient-to-b from-gray-900 to-gray-950 flex items-center justify-center relative">
                      <span className="text-5xl font-black text-gray-700/60 group-hover:text-gray-500/70 transition-colors duration-700">
                        {project.title.split(' ')[0]}
                      </span>
                    </div>

                    <div className="p-7 relative">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-semibold text-gray-200 group-hover:text-gray-100 transition-colors duration-500">
                          {project.title}
                        </h3>
                        {project.featured && (
                          <span className="text-xs px-2.5 py-1 bg-gray-800/80 text-gray-400 border border-gray-700 rounded">
                            Featured
                          </span>
                        )}
                      </div>

                      <p className="text-gray-400 text-base mb-6 line-clamp-3 group-hover:line-clamp-none transition-all duration-500">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((t) => (
                          <div
                            key={t}
                            className="px-3 py-1 bg-gray-800/60 border border-gray-700/50 rounded-full text-xs text-gray-300"
                          >
                            {t}
                          </div>
                        ))}
                      </div>

                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-500">{project.year}</span>
                        <a
                          href={project.link || project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 group-hover:text-gray-200 font-medium flex items-center gap-2 transition-colors duration-400"
                        >
                          View Project
                          <motion.span
                            className="text-base"
                            whileHover={{ x: 6 }}
                            transition={{ duration: 0.4 }}
                          >
                            →
                          </motion.span>
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 text-center">
          <motion.div {...sectionReveal} className="max-w-5xl mx-auto px-6">
            <h2 className="text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-gray-400 via-gray-300 to-gray-500 bg-clip-text text-transparent">
              Ready for Serious Architecture?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              High-scale infrastructure • Long-term maintainability • Zero-compromise performance
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="/contact"
                className="px-12 py-5 bg-gradient-to-r from-gray-700 to-gray-800 rounded-xl font-medium text-gray-200 shadow-lg shadow-gray-900/30 hover:shadow-gray-700/50 transition-all"
              >
                Start Conversation
              </a>
              <a
                href="https://github.com/mrchidubem"
                target="_blank"
                rel="noopener noreferrer"
                className="px-12 py-5 border border-gray-700 text-gray-400 rounded-xl font-medium hover:bg-gray-800/50 transition-all"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}