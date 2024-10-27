"use client";

import React from 'react';
import { font } from './font/titan';
import { motion } from 'framer-motion';
import aboutCards from "./data/aboutCards.json";
import Link from 'next/link';

const Services = () => {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const popUp = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className={`${font.className} bg-darkGrey py-20 flex flex-col items-center`}>
      {/* Scroll-triggered Animation for Title and Description */}
      <motion.div
        className="text-center mb-16 px-4 md:px-0"
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.p className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-customCyan">
          Services
        </motion.p>
        <motion.p
          className="font-light mt-6 text-white max-w-3xl mx-auto"
          variants={fadeIn}
        >
          We excel in providing customized solutions in Engineering, IoT, and digital transformation, carefully crafted to meet the distinct challenges of each client. By embracing continuous innovation and staying ahead of technological trends, we ensure our services are both highly efficient and flexible, adapting seamlessly to the ever-changing demands of the market.
        </motion.p>
      </motion.div>

      {/* Scroll-triggered Animation for Service Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-4 md:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeIn}
      >
        {aboutCards.map((service) => (
          <Link href={service.href} key={service.id}>
            <motion.div
              className="relative group rounded-lg overflow-hidden shadow-2xl shadow-customCyan"
              initial="hidden"
              whileInView="visible"
              variants={popUp}
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.img
                src={service.src}
                alt={service.label}
                className="w-full h-64 md:h-64 lg:h-64 object-cover"
              />
              <motion.div className="absolute inset-0 bg-black bg-opacity-80 group-hover:bg-opacity-30 transition-opacity duration-300" />
              <motion.div
                className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 1, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
              >
                <p className="text-white text-2xl md:text-2xl lg:text-2xl font-light text-center p-4">
                  {service.label}
                </p>
              </motion.div>
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;
