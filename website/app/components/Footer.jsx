"use client";

import React from 'react';
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { font } from './font/titan';
import { font2 } from './font/poppins';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Footer = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }, // Reduced duration for smoother effect
  };

  const slideInUp = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const iconHover = {
    hover: {
      scale: 1.2,
      rotate: 15,
      transition: {
        type: "spring",
        stiffness: 300,
      },
    },
  };

  return (
    <motion.div className="bg-darkGrey text-white py-8" initial="hidden" whileInView="visible" variants={fadeIn}>
      <motion.div className="container mx-auto flex flex-col sm:flex-row justify-between items-start px-4 sm:px-12">
        <motion.div
          className="sm:w-1/3 flex flex-col justify-center items-center ml-4 text-center sm:text-left"
          variants={slideInUp}
        >
          <img src="/logo.png" className='w-auto h-7 sm:h-12' />
          <p className={`${font2.className} text-md text-white leading-relaxed`}>
            Transforming Technology, Driving Success.
          </p>

          <div className="flex justify-center sm:justify-start space-x-4 mt-4">
            <motion.a href="#" variants={iconHover} whileHover="hover">
              <FaFacebook className="text-customCyan duration-300 text-2xl" />
            </motion.a>
            <motion.a href="#" variants={iconHover} whileHover="hover">
              <AiFillInstagram className="text-customCyan duration-300 text-2xl" />
            </motion.a>
            <motion.a href="#" variants={iconHover} whileHover="hover">
              <FaTwitter className="text-customCyan duration-300 text-2xl" />
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          className="sm:w-1/3 mt-8 sm:mt-0 text-center sm:text-left flex flex-col justify-center items-center w-full"
          variants={slideInUp}
        >
          <p className={`${font.className} text-white text-lg mb-2`}>Our Services</p>
          <Link href="/services/sap-b1"><p className={`${font2.className} text-customCyan text-sm`}>• SAP Business One Implementation</p></Link>
          <Link href="/services/custom-web-app"><p className={`${font2.className} text-customCyan text-sm`}>• Custom Web Application</p></Link>
          <Link href="/services/electronics-and-electrical-engineering"><p className={`${font2.className} text-customCyan text-sm`}>• Electronics & Electrical Engineering Solutions</p></Link>
          <Link href="/services/iot-solutions"><p className={`${font2.className} text-customCyan text-sm`}>• IoT Implementation & Support</p></Link>
          <Link href="/services/erp"><p className={`${font2.className} text-customCyan text-sm`}>• ERP Implementation & Support</p></Link>
          <Link href="/services/data-science"><p className={`${font2.className} text-customCyan text-sm`}>• Data Analysis & Data Science Solutions</p></Link>
        </motion.div>

        <motion.div
          className="sm:w-1/3 mt-8 sm:mt-0 text-center sm:text-left flex flex-col justify-center items-center w-full"
          variants={slideInUp}
        >
          <p className={`${font.className} text-white text-lg mb-2`}>For Queries</p>
          <p className={`${font2.className} text-customCyan text-sm`}>• info@nexedgesolution.com</p>
        </motion.div>

        <motion.div
          className="sm:w-1/3 mt-8 sm:mt-0 flex flex-col justify-center w-full text-center sm:text-left"
          variants={slideInUp}
        >
          <p className={`${font.className} text-white text-lg mb-2`}>Custom Work</p>
          <p className={`${font2.className} text-md mb-4 text-customCyan`}>Fill All Your Requirements Here</p>

          <motion.input
            type="text"
            placeholder="Enter your ideas here"
            className="w-full p-2 rounded-full border border-gray-400 bg-white text-gray-800"
            whileHover={{ borderColor: "#00BFFF" }}
          />
          <motion.button
            className={`${font2.className} bg-customCyan text-white px-4 py-2 rounded-full mt-4`}
            whileHover={{ scale: 1.05, boxShadow: "0 0 10px rgba(0, 255, 255, 0.5)" }}
          >
            Submit Request
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div className="mt-8 text-center text-sm text-gray-400" variants={slideInUp}>
        © 2024. All rights reserved.
      </motion.div>
    </motion.div>
  )
}

export default Footer;
