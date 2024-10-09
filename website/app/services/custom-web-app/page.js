"use client";

import { font2 } from '@/app/components/font/poppins';
import { font } from '@/app/components/font/titan';
import Footer from '@/app/components/Footer';
import Nav from '@/app/components/Navbar';
import React from 'react';
import { motion } from 'framer-motion';

const Page = () => {
  // Animation variants for fade-in on scroll
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <Nav />
      {/* Main Image Section with Backdrop Filter */}
      <motion.div
        className="relative min-h-[30rem] shadow-xl shadow-customCyan"
        style={{
          backgroundImage: 'url("/website.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        viewport={{ once: true, amount: 0.2 }} // Trigger animation once in the viewport
      >
        {/* Overlay with Backdrop Filter */}
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-lg"></div>

        <div className='flex justify-center items-center flex-col w-full relative z-10'>
          <div className='text-white text-center mt-12'>
            <p className={`${font.className} text-5xl font-bold flex flex-col flex-wrap sm:text-7xl mt-36 text-cyan-400`}>
              Custom Web<span className='text-white'>Applications</span>
            </p>
          </div>
          <div className='text-center max-w-sm md:max-w-md mx-auto'>
            <p className='sm:text-xl text-center text-white'>
              Get personalized custom web application & web designs for your projects.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Content Sections */}
      <div className="min-h-screen bg-darkGrey">
        <motion.div
          className="flex flex-col lg:flex-row pt-12 justify-center items-center"
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true, amount: 0.2 }} // Trigger animation once in the viewport
        >
          <img src='/website-code-img.jpg' className='w-auto h-80 md:hover:h-96 duration-300 rounded-lg shadow-customCyan shadow-xl' />
          <p className={`${font2.className} text-white mt-12 text-center text-xl mx-12 max-w-2xl p-4 rounded-md`}>
            <span className={`${font2.className} text-3xl font-bold mb-6 text-customCyan`}>What We Offer: </span><br />
            Nexedge Solution specializes in creating tailored web applications designed to meet your unique business needs. We combine innovative technology with user-friendly design to deliver powerful, scalable, and secure solutions. Let NexEdge transform your vision into a fully customized web experience that drives results.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col mt-24 lg:flex-row pb-12 pt-12 justify-center items-center"
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true, amount: 0.2 }} // Trigger animation once in the viewport
        >
          <p className={`${font2.className} text-white mt-12 text-center text-xl mx-12 max-w-2xl p-4 rounded-md`}>
            <span className={`${font2.className} text-3xl font-bold mb-6 text-customCyan`}>Key Features: </span><br />
            Nexedge Solution develops custom web applications tailored to meet specific business needs, focusing on innovative, scalable, and secure technology. We prioritize user-friendly design, ensuring seamless performance across all devices. Our team delivers powerful, reliable solutions that enhance business operations and drive growth.
          </p>
          <img src='/website-service.jpeg' className='w-auto h-80 md:hover:h-96 duration-300 rounded-lg shadow-customCyan shadow-xl' />
        </motion.div>
      </div>

      <Footer />
    </>
  );
}

export default Page;
