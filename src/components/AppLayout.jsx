import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function AppLayout() {
  return (
    <div className="relative min-h-screen bg-gray-950 flex flex-col">
      <Navbar />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />

      {/* Floating Resume Button — Desktop Only */}
      <motion.a
        href="/resume/Joseph-Resume.pdf"
        download="Joseph-Resume.pdf"
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.7, ease: "easeOut" }}
        whileHover={{
          scale: 1.08,
          y: -8,
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.5)",
        }}
        whileTap={{ scale: 0.95 }}
        className="hidden md:flex fixed bottom-10 right-10 z-[100] items-center gap-4
                   px-8 py-5 bg-gradient-to-r from-gray-700 to-gray-800
                   rounded-2xl text-white font-bold text-lg
                   shadow-2xl shadow-black/60
                   hover:from-gray-600 hover:to-gray-700
                   transition-all duration-300 border border-gray-600/50
                   cursor-pointer"
      >
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          />
        </svg>
         Resume
      </motion.a>
    </div>
  );
}