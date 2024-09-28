"use client";

import React, { useState, useEffect } from "react";
import navLinks from "./data/navLinks";
import { font2 } from "./font/poppins";
import Link from "next/link";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const path = window.location.pathname;
    setActiveLink(path);  // Set the active link based on the current path
  }, []);  

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-center mb-12 text-white items-center flex-wrap bg-green-100">
      <header
        className={`${font2.className} w-full fixed shadow-md shadow-black bg-white backdrop-blur-lg top-0 flex-wrap p-6 bg-opacity-100 text-black`}
      >
        <nav className="flex items-center justify-between px-8">
          <div className="flex items-center">
            <img src="/logo.png" alt="Logo" className="w-auto h-10 md:h-14 fixed" />
          </div>

          {/* Hamburger icon for mobile */}
          <div className="sm:hidden flex items-center">
            <button onClick={toggleMenu} className="text-black focus:outline-none">
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`${
              isOpen
                ? "flex flex-col items-center justify-center h-screen fixed inset-0 bg-white z-50 sm:hidden"
                : "hidden"
            }`}
          >
            {/* Logo at the top-left */}
            <div className="absolute top-0 left-0 p-4">
              <img src="/logo.png" alt="Logo" className="w-auto h-10" />
            </div>

            {/* Close (X) Icon at the top-right */}
            <div className="absolute top-0 right-0 p-4">
              <button onClick={toggleMenu} className="text-black focus:outline-none">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Centered Menu Items */}
            <div className="flex flex-col items-center justify-center space-y-6">
              {navLinks.map((item) => (
                <span
                  key={item.label}
                  className="block py-4 font-bold text-2xl cursor-pointer"
                >
                  <Link href={item.href}>{item.label}</Link>
                </span>
              ))}
            </div>
          </div>

          {/* Desktop Menu */}
          <div className={`hidden sm:flex justify-between items-center flex-col sm:flex-row sm:space-x-16 md:space-x-16`}>
            {navLinks.map((item) => (
              <span
                key={item.label}
                className={`${
                  activeLink === item.href ? "border-b-2 border-cyan-800" : ""
                } block text-md py-2 font-bold sm:py-0 cursor-pointer hover:border-b-2 hover:border-cyan-800`}
              >
                <Link href={item.href}>{item.label}</Link>
              </span>
            ))}
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Nav;
