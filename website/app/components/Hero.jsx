"use client";

import React from 'react'
import { font } from './font/titan'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className={`${font.className} bg-darkGrey p-16 flex justify-center items-center flex-col`} style={{ minHeight: "50rem" }}>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='flex flex-col justify-center items-center space-y-6 w-full'
      >
        <p className='text-5xl sm:text-7xl text-white font-bold'>
          Nexedge <span className='text-customCyan'>Solution</span>
        </p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className='text-lg text-center max-w-xl text-white mt-2 font-light'
        >
          We excel in providing customized solutions in <span className='text-customCyan'>Engineering, IoT, and digital transformation</span>, 
          carefully crafted to meet the distinct challenges of each client. By embracing continuous innovation and staying ahead of 
          technological trends, we ensure our services are both <span className='text-customCyan'>highly efficient and flexible</span>, 
          adapting seamlessly to the ever-changing demands of the market.
        </motion.p>
      </motion.div>

      <motion.div
        className="flex flex-col sm:flex-row text-white justify-center items-center mt-16"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.8 } }
        }}
      >
        {/* Engineering Experts Card */}
        <Link href="/services">
          <motion.div
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            className="block shadow-lg shadow-customCyan-light max-w-sm p-6 w-80 text-white h-32 hover:bg-customCyan-dark duration-300 hover:text-black bg-opacity-50 bg-black border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mb-4 sm:mb-0 sm:mr-4"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-white">
              Engineering Experts
            </h5>
            <p>Unique and creative Engineering Solutions tailored to your vision.</p>
          </motion.div>
        </Link>

        {/* Latest Tech-Stack Card */}
        <Link href="/services">
          <motion.div
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            className="block shadow-lg shadow-customCyan-light max-w-sm p-6 w-80 h-32 hover:bg-customCyan-dark duration-300 hover:text-black bg-opacity-50 bg-black border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mb-4 sm:mb-0 sm:mr-4"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-white">
              Latest Tech-Stack
            </h5>
            <p>Our Team Is Full Of People Familiar With The Latest Technology</p>
          </motion.div>
        </Link>

        {/* Experienced In The Field Card */}
        <Link href="/services">
          <motion.div
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            className="block shadow-lg shadow-customCyan-light max-w-sm p-6 w-80 h-32 hover:bg-customCyan-dark duration-300 hover:text-black bg-opacity-50 bg-black border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mb-4 sm:mb-0 sm:mr-4"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-white">
              Experienced In The Field
            </h5>
            <p>We are an experienced team across our specialization</p>
          </motion.div>
        </Link>
      </motion.div>

      {/* Call-to-Action Buttons */}
      <motion.div
        className='flex flex-col md:flex-row justify-center items-center sm:space-x-4'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <motion.button
          whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          className='p-3 px-8 mt-8 rounded-full bg-customCyan-dark shadow-md shadow-customCyan-light text-white hover:bg-white hover:text-black hover:border hover:border-black duration-300'
        >
          Get A Quote
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          className='p-3 mt-8 rounded-full bg-customCyan-dark shadow-md shadow-customCyan-light text-white px-4 hover:bg-white hover:text-black hover:border hover:border-black duration-300'
        >
          Get A Free Demo
        </motion.button>
      </motion.div>
    </div>
  )
}

export default Hero
