// src/components/Layout.jsx
import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="relative min-h-screen bg-gray-950">
      <Navbar />
      
      <main>
        <Outlet /> {/* All pages render here */}
      </main>

      <Footer />

      {/* Floating Resume Button */}
      <motion.a
        href="/resume/Dubic-Ventures-Resume-Dec2025.pdf"
        download="Dubic-Ventures-Resume-Dec2025.pdf"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        whileHover={{ 
          scale: 1.12, 
          boxShadow: "0 0 40px rgba(34,211,238,0.5)",
          y: -8 
        }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 right-8 z-50 flex items-center gap-3 px-6 py-4 
                   bg-gradient-to-r from-cyan-600 to-blue-700 
                   rounded-full text-white font-bold 
                   shadow-2xl shadow-cyan-900/50 
                   hover:shadow-cyan-600/70 
                   transition-all duration-300"
      >
        <svg 
          className="w-5 h-5" 
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