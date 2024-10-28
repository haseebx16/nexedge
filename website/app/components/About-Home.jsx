"use client";

import React from 'react';
import { font } from './font/titan';
import { motion } from 'framer-motion';

const About = () => {
  // Animation Variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  return (
    <div className="bg-darkGrey py-20 flex flex-col items-center overflow-x-hidden"> {/* Prevent horizontal scroll */}
      {/* Section Title */}
      <motion.div
        className={`${font.className} text-center mb-16 px-4 md:px-0`}
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.p className={`${font.className} text-4xl md:text-5xl lg:text-5xl font-extrabold text-customCyan`}>
          Who We Are
        </motion.p>
        <motion.p
          className="font-light mt-4  text-white max-w-3xl mx-auto leading-relaxed"
          variants={fadeIn}
        >
         At Nexedge Solution, we specialize in delivering comprehensive industrial and B2B solutions across five core fields. Our mission is to empower businesses by providing tailored, cutting-edge services designed to streamline processes, boost efficiency, and drive sustainable growth.
        </motion.p>
      </motion.div>

      {/* Section 1: Image on the Left, Text on the Right */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 px-4 md:px-8 mb-16">
        {/* Image with Animation */}
        <motion.div
          className="md:w-1/2 shadow-xl shadow-customCyan w-full"
          initial="hidden"
          whileInView="visible"
          variants={slideInLeft}
          viewport={{ once: true }}
        >
          <motion.img
            src="/aboutus-1.webp"
            alt="Our Vision"
            className="w-full h-auto md:h-96 rounded-lg shadow-lg object-cover"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="md:w-1/2 w-full text-white flex flex-col justify-center text-center md:text-left"
          initial="hidden"
          whileInView="visible"
          variants={slideInRight}
          viewport={{ once: true }}
        >
          <h3 className={`${font.className} text-3xl text-customCyan font-bold mb-4`}>Our Vision</h3>
          <p className={`${font.className} text-lg md:text-lg mb-4 leading-relaxed`}>
              With our expertise in industrial projects and B2B solutions, Nexedge Solution help businesses optimize their operations and achieve growth. Our approach combines technical knowledge with industry insights to deliver tailored, impactful strategies that drive success. Nexedge Solution is committed to enhancing productivity, streamlining processes, and building lasting partnerships across the industrial sector.
          </p>
         
        </motion.div>
      </div>

      {/* Section 2: Text on the Left, Image on the Right */}
      <div className="flex flex-col md:flex-row-reverse justify-center items-center gap-8 px-4 md:px-8 mb-16">
        {/* Image with Animation */}
        <motion.div
          className="md:w-1/2 shadow-xl shadow-customCyan w-full"
          initial="hidden"
          whileInView="visible"
          variants={slideInRight}
          viewport={{ once: true }}
        >
          <motion.img
            src="/aboutus-2.jpeg"
            alt="Our Process"
            className="w-full h-auto md:h-96 rounded-lg shadow-lg object-cover"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          className={`${font.className} md:w-1/2 w-full text-white flex flex-col justify-center text-center md:text-left`}
          initial="hidden"
          whileInView="visible"
          variants={slideInLeft}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl text-customCyan font-bold mb-4">Our Process</h3>
          <p className="text-lg md:text-lg mb-4 leading-relaxed">
            Our process is simple yet effective. We collaborate closely with clients to understand their needs and deliver solutions that exceed expectations. From ideation to execution, we follow a structured approach to bring ideas to life.
          </p>
          <p className="text-lg md:text-lg">
            Our commitment to quality, creativity, and technical expertise ensures every project is delivered to perfection.
          </p>
        </motion.div>
      </div>

      {/* Section 3: Image on the Left, Text on the Right */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 px-4 md:px-8">
        <motion.div className='gradient-slide mt-12 w-full rounded-2xl py-12 overflow-hidden'>
          <motion.div
            initial={{ x: '100%' }} // Start off-screen on the right
            animate={{ x: ['100%', '0%', '-100%'] }} // Adjusted so it doesn't exceed the screen
            transition={{
              duration: 10, // Speed of the animation
              ease: 'linear',
              repeat: Infinity,
              repeatType: 'loop',
            }}
            className='text-white text-5xl font-extrabold whitespace-nowrap'
          >
            Transforming Technology, Driving Success
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
