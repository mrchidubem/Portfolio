import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { Canvas } from "@react-three/fiber";
import { Stars, Sparkles, Float, OrbitControls } from "@react-three/drei";

// Fade-up animation (slightly softer for mobile)
const fadeUpSection = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
};

export default function DashboardPage() {
  const [timeRange, setTimeRange] = useState("30d");

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.35,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: true, // Better mobile scroll feel
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

  const kpiData = [
    { title: "Portfolio Value", value: "$5K", change: "+18.2%", trend: "up" },
    { title: "Active Investments", value: "43", change: "+4", trend: "up" },
    { title: "Average ROI", value: "+52%", change: "Top: +114%", trend: "up" },
    { title: "Cash Reserve", value: "$1.2K", change: "Q1 Ready", trend: "stable" },
  ];

  const recentActivity = [
    { company: "Nexlify AI", amount: "$4.2", date: "Dec 24", stage: "Series A", status: "Closed", avatar: "N", tech: "AI / Next.js" },
    { company: "QuantumEdge", amount: "$8.5", date: "Dec 18", stage: "Seed", status: "Term Sheet", avatar: "Q", tech: "RUST / Web3" },
    { company: "Vortex Labs", amount: "$12", date: "Dec 12", stage: "Growth", status: "Due Diligence", avatar: "V", tech: "Solidity / React" },
    { company: "Lumina Tech", amount: "$3.8", date: "Dec 5", stage: "Pre-Seed", status: "LOI Sent", avatar: "L", tech: "TS / Supabase" },
  ];

  const socialMediaData = [
    { platform: "X / Twitter", followers: "400", engagement: "+15%", trend: "up" },
    { platform: "LinkedIn", followers: "1K", engagement: "+8%", trend: "up" },
    { platform: "GitHub", stars: "30", forks: "+120", trend: "stable" },
    { platform: "Reddit", subscribers: "10", posts: "+45", trend: "up" },
  ];

  return (
    <div className="relative bg-gray-950 text-gray-100 overflow-hidden pb-16 sm:pb-24">
      {/* COSMIC BACKGROUND – lighter for mobile performance */}
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

      {/* SCROLLABLE CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20">

        {/* Header – improved mobile stacking */}
        <motion.div {...fadeUpSection} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 sm:gap-0 mb-12 sm:mb-16">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-gray-400 via-gray-300 to-gray-500 bg-clip-text text-transparent tracking-tighter">
              Command Center
            </h1>
            <p className="mt-2 text-gray-400 font-mono text-base sm:text-lg">
              {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <div className="inline-flex rounded-full bg-gray-900/70 backdrop-blur-lg border border-gray-800 p-1">
              {["7d", "30d", "90d", "all"].map((range) => (
                <button
                  key={range}
                  onClick={() => setTimeRange(range)}
                  className={`relative px-4 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-300 ${
                    timeRange === range ? "text-white shadow-inner shadow-gray-700/50" : "text-gray-400 hover:text-gray-200"
                  }`}
                >
                  {range === "all" ? "All Time" : range}
                  {timeRange === range && (
                    <motion.span
                      layoutId="time-range-indicator"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-gray-700/30 to-gray-800/30 -z-10"
                      transition={{ type: "spring", bounce: 0.35, duration: 0.5 }}
                    />
                  )}
                </button>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="px-5 sm:px-6 py-2 sm:py-2.5 bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg font-medium text-sm sm:text-base shadow-lg shadow-gray-900/30 hover:shadow-gray-700/50 transition-all"
            >
              Refresh
            </motion.button>
          </div>
        </motion.div>

        {/* KPI Grid – better stacking & sizing */}
        <motion.div {...fadeUpSection} className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {kpiData.map((kpi, i) => (
            <div
              key={kpi.title}
              className="group relative bg-gray-900/70 backdrop-blur-xl border border-gray-800/60 rounded-2xl p-5 sm:p-6 hover:border-gray-600/70 transition-all duration-500"
            >
              <p className="text-xs sm:text-sm text-gray-400 mb-1">{kpi.title}</p>
              <p className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-1">{kpi.value}</p>
              <p className="text-xs sm:text-sm font-medium text-gray-300">
                {kpi.change}
              </p>

              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gray-700/10 via-transparent to-gray-800/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            </div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <motion.div {...fadeUpSection} className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Left Column */}
          <div className="space-y-6 sm:space-y-8">
            {/* Portfolio Performance */}
            <div className="bg-gray-900/70 backdrop-blur-xl border border-gray-800/60 rounded-2xl p-5 sm:p-7">
              <h2 className="text-xl sm:text-2xl font-bold mb-5 sm:mb-6 bg-gradient-to-r from-gray-400 to-gray-500 bg-clip-text text-transparent">
                Portfolio Performance
              </h2>
              <div className="h-64 sm:h-80 bg-gray-950/50 rounded-xl flex items-center justify-center border border-gray-800">
                <p className="text-sm sm:text-base text-gray-500 font-mono">Recharts / ApexCharts integration ready</p>
              </div>
            </div>

            {/* Recent Deals */}
            <div className="bg-gray-900/70 backdrop-blur-xl border border-gray-800/60 rounded-2xl p-5 sm:p-7">
              <h2 className="text-xl sm:text-2xl font-bold mb-5 sm:mb-6 bg-gradient-to-r from-gray-400 to-gray-500 bg-clip-text text-transparent">
                Recent Deals
              </h2>
              <div className="space-y-4">
                <AnimatePresence>
                  {recentActivity.map((deal, i) => (
                    <motion.div
                      key={deal.company}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="group flex flex-col xs:flex-row xs:items-center justify-between gap-4 p-4 rounded-xl bg-gray-950/40 border border-gray-800/50 hover:border-gray-600/50 hover:bg-gray-950/60 transition-all duration-300"
                    >
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gray-700/70 flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-lg">
                          {deal.avatar}
                        </div>
                        <div>
                          <p className="font-semibold text-base sm:text-lg group-hover:text-gray-300 transition-colors">{deal.company}</p>
                          <p className="text-xs sm:text-sm text-gray-400">{deal.stage} • {deal.tech}</p>
                        </div>
                      </div>
                      <div className="text-left xs:text-right">
                        <p className="text-lg sm:text-xl font-bold text-gray-300">{deal.amount}</p>
                        <p className="text-xs text-gray-500">{deal.date}</p>
                        <span className="inline-block mt-1 px-3 py-1 text-xs rounded-full bg-gray-800/80 text-gray-400">
                          {deal.status}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6 sm:space-y-8">
            {/* System Health */}
            <div className="bg-gray-900/70 backdrop-blur-xl border border-gray-800/60 rounded-2xl p-5 sm:p-7">
              <h2 className="text-xl sm:text-2xl font-bold mb-5 sm:mb-6 bg-gradient-to-r from-gray-400 to-gray-500 bg-clip-text text-transparent">
                System Health
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Uptime", value: "99.98%", status: "Optimal" },
                  { label: "API Req/s", value: "1.2k", status: "Healthy" },
                  { label: "Latency p99", value: "42ms", status: "Excellent" },
                  { label: "Error Rate", value: "0.004%", status: "Minimal" },
                ].map((stat, i) => (
                  <div key={i} className="bg-gray-950/50 rounded-xl p-3 sm:p-4 border border-gray-800/50">
                    <p className="text-xs sm:text-sm text-gray-400">{stat.label}</p>
                    <p className="text-lg sm:text-2xl font-bold text-white mt-1">{stat.value}</p>
                    <p className="text-xs text-gray-300 mt-1">{stat.status}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-gray-900/90 via-gray-950/40 to-gray-900/90 border border-gray-800/60 rounded-2xl p-6 sm:p-8 text-center">
              <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-gray-400 to-gray-500 bg-clip-text text-transparent">
                Quick Actions
              </h2>
              <div className="grid grid-cols-1 xs:grid-cols-3 gap-4 sm:gap-6">
                {[
                  { label: "New Investment" },
                  { label: "Review Portfolio" },
                  { label: "Generate Report" },
                ].map((action, i) => (
                  <motion.button
                    key={action.label}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className="bg-gradient-to-r from-gray-700 to-gray-800 px-5 sm:px-6 py-4 sm:py-5 rounded-xl font-medium text-sm sm:text-base shadow-lg transition-all text-gray-300"
                  >
                    {action.label}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Social Media Tracking */}
            <div className="bg-gray-900/70 backdrop-blur-xl border border-gray-800/60 rounded-2xl p-5 sm:p-7">
              <h2 className="text-xl sm:text-2xl font-bold mb-5 sm:mb-6 bg-gradient-to-r from-gray-400 to-gray-500 bg-clip-text text-transparent">
                Social Media Tracking
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {socialMediaData.map((stat, i) => (
                  <div key={i} className="bg-gray-950/50 rounded-xl p-3 sm:p-4 border border-gray-800/50">
                    <p className="text-xs sm:text-sm text-gray-400">{stat.platform}</p>
                    <p className="text-lg sm:text-2xl font-bold text-white mt-1">
                      {stat.followers || stat.stars}
                    </p>
                    <p className="text-xs text-gray-300 mt-1">
                      {stat.engagement || stat.forks} • {stat.trend}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}