import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/projects", label: "Projects" },
    { path: "/about", label: "About" },
    { path: "/dashboard", label: "Dashboard" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/70 backdrop-blur-xl border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* ================= LOGO ================= */}
          <NavLink to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-gray-600 via-gray-700 to-gray-800 flex items-center justify-center text-white font-black text-xl md:text-2xl shadow-lg shadow-gray-900/30">
                DV
              </div>
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-gray-600/40 via-gray-700/30 to-gray-800/40 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700 animate-pulse-slow" />
            </div>
            <span className="text-2xl md:text-3xl font-black bg-gradient-to-r from-gray-400 via-gray-300 to-gray-500 bg-clip-text text-transparent tracking-tight">
              Dubicventures
            </span>
          </NavLink>

          {/* ================= DESKTOP MENU ================= */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `relative px-3 py-2 text-base font-medium transition-all duration-300 group ${
                    isActive
                      ? "text-white"
                      : "text-gray-300 hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}

                    {/* Hover underline */}
                    <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-gradient-to-r from-gray-400 to-gray-500 group-hover:w-full transition-all duration-500 ease-out" />

                    {/* Active underline */}
                    {isActive && (
                      <motion.span
                        layoutId="active-underline"
                        className="absolute left-0 bottom-0 h-0.5 w-full bg-gradient-to-r from-gray-400 to-gray-500"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}

            {/* ================= AVATAR ================= */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="ml-4 relative"
            >
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-700 shadow-lg">
                <img
                  src="/images/avatar.jpg"
                  alt="Senior Systems Architect"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="absolute inset-0 rounded-full border-2 border-transparent hover:border-gray-600/50 transition-all duration-500 pointer-events-none" />
            </motion.div>
          </div>

          {/* ================= MOBILE MENU BUTTON ================= */}
          <div className="md:hidden flex items-center gap-4">
            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-gray-700">
              <img
                src="/images/avatar.jpg"
                alt="Senior Systems Architect"
                className="w-full h-full object-cover grayscale"
              />
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isOpen ? (
                  <motion.svg
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </motion.svg>
                ) : (
                  <motion.svg
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                  </motion.svg>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-gray-950/95 backdrop-blur-xl border-b border-gray-800"
          >
            <div className="px-4 py-6 space-y-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `block px-5 py-4 rounded-xl text-lg font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-gray-700/30 to-gray-800/30 text-white"
                        : "text-gray-300 hover:bg-gray-800/60 hover:text-white"
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
