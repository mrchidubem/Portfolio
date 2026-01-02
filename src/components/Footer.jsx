import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { Stars, Sparkles, OrbitControls } from "@react-three/drei";

const socialLinks = [
  {
    name: "X / Twitter",
    href: "https://x.com/ChidubemOkafo17",
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/dubicventures",
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-1.337-.029-3.058-1.867-3.058-1.867 0-2.152 1.459-2.152 2.967v5.695h-3v-11h2.882v1.509h.039c.401-.757 1.381-1.557 2.837-1.557 3.033 0 3.598 1.997 3.598 4.597v6.451z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "https://github.com/mrchidubem",
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.478-10-10-10z" />
      </svg>
    ),
  },
];

const footerLinks = [
  {
    title: "Company",
    links: [
      { path: "/about", label: "About" },
      { path: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Platform",
    links: [
      { path: "/dashboard", label: "Dashboard" },
      { path: "/features", label: "Features" },
      { path: "/security", label: "Security" },
      { path: "/services", label: "Services" },
    ],
  },
  {
    title: "Resources",
    links: [
      { path: "/blog", label: "Blog" },
      { path: "/docs", label: "Documentation" },
      { path: "/certificate", label: "Certificates" },
    ],
  },
  {
    title: "Legal",
    links: [
      { path: "/privacy", label: "Privacy" },
      { path: "/terms", label: "Terms" },
    ],
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Dynamic year

  return (
    <footer className="relative bg-gray-950 border-t border-gray-800/50 text-gray-400 overflow-hidden">
      {/* Cosmic background */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-60">
        <Canvas camera={{ position: [0, 0, 140], fov: 75 }}>
          <color attach="background" args={["#0a0a0f"]} />
          <Stars
            radius={300}
            depth={200}
            count={12000}
            factor={6}
            saturation={0}
            fade
            speed={0.4}
          />
          <Sparkles
            count={600}
            scale={20}
            size={8}
            speed={0.6}
            color="#60a5fa"
            opacity={0.8}
          />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.25}
            enableDamping
            dampingFactor={0.95}
          />
        </Canvas>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-950/20 to-gray-950/60 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.12),transparent_70%)] pointer-events-none" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 mb-16 sm:mb-20">
          {/* Brand column */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <Link to="/" className="inline-block mb-6">
                <span className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-gray-300 via-gray-200 to-gray-400 bg-clip-text text-transparent tracking-tighter">
                  DubicVentures
                </span>
              </Link>

              <p className="text-base sm:text-lg text-gray-300 max-w-md mb-8 leading-relaxed">
                Designing scalable and intelligent infrastructure trusted by industry leaders 
                to deliver resilient, high-performance systems that power innovation, accelerate 
                growth, and operate seamlessly at global scale.
              </p>

              <div className="flex items-center gap-6">
                {socialLinks.map((social, i) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.15, y: -4 }}
                    transition={{ delay: i * 0.1, type: "spring", stiffness: 400 }}
                    viewport={{ once: true }}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Link columns */}
          {footerLinks.map((group, groupIdx) => (
            <div
              key={group.title}
              className="col-span-1 sm:col-span-1 lg:col-span-2"
            >
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: groupIdx * 0.1 + 0.2, duration: 0.6 }}
                className="text-sm font-bold text-gray-200 uppercase tracking-wider mb-5"
              >
                {group.title}
              </motion.h3>
              <ul className="space-y-3 sm:space-y-4">
                {group.links.map((item, i) => (
                  <motion.li
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: groupIdx * 0.08 + i * 0.04 + 0.3 }}
                  >
                    <Link
                      to={item.path}
                      className="text-gray-300 hover:text-white transition-colors duration-300 text-base font-medium"
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter + Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="pt-12 border-t border-gray-800/50"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start lg:items-end">
            {/* Newsletter */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-200 mb-4">
                Stay in the Loop
              </h3>
              <p className="text-gray-400 mb-6 max-w-md text-base sm:text-lg">
                Gain insider access to the latest in venture intelligence, scalable software systems,
                and programming innovations redefining industry standards.
              </p>

              <form className="flex flex-col sm:flex-row gap-4 max-w-lg">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 bg-gray-900/70 backdrop-blur-md border border-gray-700 rounded-xl px-5 sm:px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500/50 transition-all text-base"
                />
                {/* Unified button color - dark gray gradient to match hero/CTA */}
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="bg-gradient-to-r from-gray-700 to-gray-800 px-8 sm:px-10 py-4 rounded-xl font-semibold text-white shadow-lg shadow-gray-900/30 hover:shadow-gray-700/50 transition-all duration-300"
                >
                  Subscribe
                </motion.button>
              </form>
            </div>

            {/* Bottom info */}
            <div className="text-sm text-gray-500 flex flex-col sm:flex-row sm:justify-end sm:items-center gap-4 sm:gap-8">
              <div className="text-center sm:text-right">
                © {currentYear} DubicVentures. Built with precision.
              </div>

              <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6">
                {["Privacy", "Terms", "Cookies"].map((item) => (
                  <Link
                    key={item}
                    to={`/${item.toLowerCase()}`}
                    className="hover:text-gray-300 transition-colors"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;