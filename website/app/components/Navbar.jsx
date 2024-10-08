"use client";

import React, { useState, useEffect } from "react";
import navLinks from "./data/navLinks";
import { font2 } from "./font/poppins";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const path = window.location.pathname;
    setActiveLink(path);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  return (
    <div className="flex justify-center mb-12 text-white items-center z-50 flex-wrap bg-green-100">
      <header className={`${font2.className} w-screen fixed shadow-xl shadow-customCyan-light z-50 bg-darkGrey bg-opacity-90 backdrop-blur-lg top-0 flex-wrap p-7 text-black`}>
        <nav className="flex items-center justify-between px-8">
          <div className="flex items-center">
            <img src="/logo.png" alt="Logo" className="w-auto h-7 sm:h-10 md:h-10 lg:h-14 fixed" />
          </div>

          {/* Hamburger icon for mobile */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ y: "-100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center justify-center h-screen fixed inset-0 bg-darkGrey z-50 md:hidden"
              >
                <div className="absolute top-0 left-0 p-4">
                  <img src="/logo.png" alt="Logo" className="w-auto h-7" />
                </div>

                <div className="absolute top-0 right-0 p-4">
                  <button onClick={toggleMenu} className="text-white focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="flex flex-col items-center justify-center space-y-6">
                  {navLinks.map((item) => (
                    <motion.span
                      key={item.label}
                      whileHover={{ scale: 1.05 }}
                      className={`${activeLink === item.href ? "border-b-2 border-cyan-400" : ""} text-white block py-4 font-bold text-2xl cursor-pointer`}
                    >
                      <Link href={item.href}>{item.label}</Link>
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Desktop Menu */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="hidden md:flex justify-between items-center flex-col md:flex-row md:space-x-16"
          >
            {navLinks.map((item) => (
              <div 
                key={item.label} 
                onMouseEnter={item.label === "Our Services" ? handleMouseEnter : null}
                onMouseLeave={item.label === "Our Services" ? handleMouseLeave : null}
                className="relative"
              >
                <motion.span
                  whileHover={{ scale: 1.1, originX: 0 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`${activeLink === item.href ? "border-b-2 border-cyan-400" : ""} block text-md py-2 font-bold md:py-0 cursor-pointer hover:border-b-2 text-white hover:border-cyan-400`}
                >
                  <Link href={item.href}>{item.label}</Link>
                </motion.span>

                {/* Dropdown Menu for Our Services */}
                {item.label === "Our Services" && dropdownOpen && (
                  <AnimatePresence>
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="absolute bg-darkGrey text-white mt-2 rounded shadow-lg"
                    >
                      <ul className="flex flex-col">
                        <li className="py-2 px-10 hover:bg-customCyan hover:text-black whitespace-nowrap cursor-pointer">
                          <Link href="/service1">IoT Implementation & Support</Link>
                        </li>
                        <li className="py-2 px-10 hover:bg-customCyan hover:text-black whitespace-nowrap cursor-pointer">
                          <Link href="/service2">SAP B1 Implementation & Support</Link>
                        </li>
                        <li className="py-2 px-10 hover:bg-customCyan hover:text-black cursor-pointer">
                          <Link href="/service3">Custom Web Application</Link>
                        </li>
                        <li className="py-2 px-10 hover:bg-customCyan hover:text-black cursor-pointer">
                          <Link href="/service4">Data Science & Data Analytics</Link>
                        </li>
                        <li className="py-2 px-10 hover:bg-customCyan hover:text-black cursor-pointer">
                          <Link href="/service5">ERP Implementation & Support</Link>
                        </li>
                        <li className="py-2 px-10 hover:bg-customCyan hover:text-black cursor-pointer">
                          <Link href="/service6">Electronics & Electrical Engineering</Link>
                        </li>
                      </ul>
                    </motion.div>
                  </AnimatePresence>
                )}
              </div>
            ))}
          </motion.div>
        </nav>
      </header>
    </div>
  );
};

export default Nav;
