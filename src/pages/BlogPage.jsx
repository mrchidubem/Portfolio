import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { Canvas } from "@react-three/fiber";
import { Stars, Sparkles, Float, OrbitControls } from "@react-three/drei";

// Premium smooth ease (same as Homepage)
const ease = [0.25, 0.46, 0.45, 0.94];

// Staggered entrance for posts (no flicker)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease }
  }
};

const posts = [
  {
    title: "Building Transparent Venture Infrastructure in 2025",
    excerpt: "How we're applying zero-trust, event-driven architecture to solve opacity in early-stage investing.",
    date: "Dec 15, 2025",
    readTime: "8 min",
    category: "Architecture",
    slug: "/blog/transparent-venture-infrastructure-2025",
  },
  {
    title: "AI Agents in Deal Sourcing: From Hypothesis to Production",
    excerpt: "Lessons from deploying real-time inference pipelines that score 10,000+ founders weekly.",
    date: "Nov 28, 2025",
    readTime: "12 min",
    category: "AI",
    slug: "/blog/ai-agents-deal-sourcing",
  },
  {
    title: "Why Rust + Kubernetes is the New Standard for Financial Systems",
    excerpt: "Performance, safety, and resilience at 10⁵+ req/s — real numbers from production.",
    date: "Oct 10, 2025",
    readTime: "10 min",
    category: "Engineering",
    slug: "/blog/rust-kubernetes-financial-systems",
  },
  {
    title: "The Future of Decentralized Capital Allocation",
    excerpt: "Exploring on-chain reputation, programmable incentives, and autonomous deal execution.",
    date: "Sep 22, 2025",
    readTime: "15 min",
    category: "Web3",
    slug: "/blog/decentralized-capital-allocation",
  },
  {
    title: "Scaling Real-Time Analytics at Planetary Scale",
    excerpt: "From Redis streams to ClickHouse: handling 1M+ events/sec with sub-100ms latency.",
    date: "Aug 18, 2025",
    readTime: "11 min",
    category: "Systems",
    slug: "/blog/scaling-real-time-analytics",
  },
  {
    title: "Zero-Downtime Migrations: Lessons from 10B+ User Systems",
    excerpt: "Blue-green, canary, and feature-flag strategies that kept services alive during schema evolution.",
    date: "Jul 30, 2025",
    readTime: "9 min",
    category: "Reliability",
    slug: "/blog/zero-downtime-migrations",
  },
  {
    title: "Event-Driven Architecture at Extreme Scale",
    excerpt: "Designing systems that process millions of events per second with guaranteed ordering and exactly-once semantics.",
    date: "Jun 14, 2025",
    readTime: "14 min",
    category: "Systems",
    slug: "/blog/event-driven-extreme-scale",
  },
  {
    title: "From Monolith to Multi-Region Microservices",
    excerpt: "The complete migration journey of a billion-user platform without a single minute of downtime.",
    date: "May 03, 2025",
    readTime: "13 min",
    category: "Engineering",
    slug: "/blog/monolith-to-multi-region",
  },
];

const socialLinks = [
  { name: "X / Twitter", href: "https://x.com/dubicventures", icon: "𝕏", label: "Follow on X" },
  { name: "LinkedIn", href: "https://linkedin.com/company/dubicventures", icon: "in", label: "Connect on LinkedIn" },
  { name: "GitHub", href: "https://github.com/dubicventures", icon: "↗", label: "Star on GitHub" },
];

export default function BlogPage() {
  // Same elite Lenis smooth scroll
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
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-32">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.9, ease }}
          className="text-center mb-32"
        >
          <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-gray-400 via-gray-300 to-gray-500 bg-clip-text text-transparent mb-8 leading-tight">
            Intelligence Briefs
          </h1>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Deep technical insights from the frontier of systems architecture, AI, and intelligent capital.
          </p>
        </motion.div>

        {/* Blog Posts */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          className="space-y-20"
        >
          {posts.map((post) => (
            <motion.a
              key={post.title}
              href={post.slug}
              variants={itemVariants}
              className="group block"
              whileHover={{ x: 8 }}
              transition={{ duration: 0.6, ease }}
            >
              <article className="relative bg-gray-900/40 backdrop-blur-sm border border-gray-800/30 rounded-3xl p-12 hover:border-gray-700/30 hover:bg-gray-900/60 transition-all duration-700">
                {/* Category tag */}
                <span className="inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-wider bg-gray-700/50 text-gray-400 rounded-full mb-6">
                  {post.category}
                </span>

                {/* Title */}
                <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight group-hover:text-gray-300 transition-colors duration-500">
                  {post.title}
                </h2>

                {/* Meta */}
                <div className="flex items-center gap-6 text-gray-500 text-sm mb-8">
                  <time>{post.date}</time>
                  <span>•</span>
                  <span>{post.readTime} read</span>
                </div>

                {/* Excerpt */}
                <p className="text-xl text-gray-300 leading-relaxed max-w-4xl">
                  {post.excerpt}
                </p>

                {/* Read link */}
                <div className="mt-10 flex items-center gap-3 text-gray-500 font-semibold text-lg group-hover:text-gray-400 transition-colors">
                  Read the full brief
                  <motion.span
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.4 }}
                  >
                    →
                  </motion.span>
                </div>
              </article>
            </motion.a>
          ))}
        </motion.div>

        {/* Follow the Journey Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.9, ease }}
          className="mt-40 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-8 bg-gradient-to-r from-gray-400 to-gray-500 bg-clip-text text-transparent">
            Follow the Journey
          </h2>
          <p className="text-xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
            Real-time updates on systems breakthroughs, venture intelligence, and the future we're building.
          </p>

          <div className="flex items-center justify-center gap-16">
            {socialLinks.map((social, i) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ scale: 1.2, y: -8 }}
                className="text-6xl text-gray-400 hover:text-gray-500 transition-all duration-400"
                aria-label={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.9, ease }}
          className="mt-40 text-center"
        >
          <p className="text-2xl text-gray-300 mb-10">
            Have a systems challenge or topic you'd like explored?
          </p>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-gray-700 to-gray-800 px-16 py-7 rounded-2xl text-2xl font-bold shadow-2xl shadow-gray-900/40 hover:shadow-gray-800/60 hover:scale-105 transition-all duration-400"
          >
            Suggest a Brief
          </a>
        </motion.div>
      </div>
    </div>
  );
}