"use client";

import React, { useState } from "react";
import navLinks from "./data/navLinks";
import { font2 } from "./font/poppins";
import Link from "next/link";
import { font } from "./font/titan";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-center mb-12 text-white items-center flex-wrap bg-green-100">
      <header
        className={`${font2.className} w-full fixed shadow-md shadow-black bg-white backdrop-blur-lg top-0 flex-wrap p-3 bg-opacity-100 text-black`}
      >
        <nav className="flex items-center justify-between px-8">
          <div className="flex items-center">
            <img src="/logo.png" alt="Logo" className="w-auto h-10 fixed" />
          </div>

          <div className="sm:hidden flex items-center">
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
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>

          <div
            className={`${
              isOpen ? "flex" : "hidden"
            } sm:flex justify-between items-center flex-col sm:flex-row sm:space-x-16 md:space-x-28`}
          >
            {navLinks.map((item) => (
              <span
                key={item.label}
                className="block py-2 sm:py-0 cursor-pointer"
              >
                <Link href={item.href}>{item.label}</Link>
              </span>
            ))}

            <button className="bg-black text-white p-2 px-4 rounded-full mt-2 sm:mt-0">
              Get A Call
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Nav;