import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="relative min-h-screen bg-gray-950">
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />

      {/* Floating Resume Button — Desktop Only */}
      <motion.a
        href="/resume/MyResume.pdf"
        download="MyResume.pdf"
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.7, ease: "easeOut" }}
        whileHover={{
          scale: 1.05,
          y: -6,
          boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
        }}
        whileTap={{ scale: 0.97 }}
        className="hidden md:flex fixed bottom-10 right-10 z-[100] items-center gap-3
                   px-8 py-5 bg-gradient-to-r from-gray-700 to-gray-800
                   rounded-xl text-white font-semibold text-lg
                   shadow-xl shadow-gray-900/50
                   hover:shadow-2xl hover:shadow-gray-800/60
                   transition-all duration-300 border border-gray-600/50
                   pointer-events-none"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          />
        </svg>
        Resume
      </motion.a>
    </div>
  );
}
