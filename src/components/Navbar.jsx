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
          {/* LOGO */}
          <NavLink to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center text-white font-black text-xl shadow-lg">
              JO
            </div>
            <span className="text-2xl md:text-3xl font-black bg-gradient-to-r from-gray-400 to-gray-500 bg-clip-text text-transparent">
              Joseph Okafor
            </span>
          </NavLink>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `relative px-3 py-2 text-base font-medium transition-all ${
                    isActive ? "text-white" : "text-gray-300 hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-gray-400 group-hover:w-full transition-all duration-500" />
                    {isActive && (
                      <motion.span
                        layoutId="active-underline"
                        className="absolute left-0 bottom-0 h-0.5 w-full bg-gray-400"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}

            {/* AVATAR */}
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-700">
              <img
                src="/images/avatar.jpg"
                alt="Joseph Okafor"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition"
              />
            </div>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white"
          >
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="md:hidden bg-gray-950 border-t border-gray-800 pointer-events-auto"
          >
            <div className="px-4 py-6 space-y-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-5 py-4 rounded-xl text-lg text-gray-300 hover:bg-gray-800 hover:text-white"
                >
                  {item.label}
                </NavLink>
              ))}

              {/* MOBILE RESUME BUTTON */}
              <a
                href="/resume/myresume.pdf"
                download
                onClick={() => setIsOpen(false)}
                className="block mt-4 px-5 py-4 rounded-xl text-lg font-semibold
                           bg-gradient-to-r from-gray-700 to-gray-800 text-white text-center"
              >
                 Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
