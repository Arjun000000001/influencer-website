import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

function Navbar() {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Shop", path: "/store" },
    { name: "Players", path: "/players" },
    { name: "Creators", path: "/creators" },
    { name: "Latest Work", path: "/latest-work" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-black text-white shadow-md border-b border-yellow-500/40"
    >
      <nav className="container mx-auto px-4 py-3 flex justify-center items-center">
        {/* Left: Logo */}
        <motion.div
          animate={{
            y: [0, -4, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-4 w-32 h-12"
        >
          <img
            src="https://s8ul.gg/img/logo.webp"
            alt="S8UL Logo"
            className="w-full h-full object-contain"
          />
        </motion.div>

        {/* Center: Links */}
        <ul className="flex space-x-6 md:space-x-8 text-lg font-medium">
          {navItems.map((item, idx) => (
            <li key={idx}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-yellow-400 after:transition-all after:duration-300 ${
                    isActive
                      ? "after:w-full text-yellow-400"
                      : "after:w-0 hover:after:w-full"
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}

export default Navbar;
