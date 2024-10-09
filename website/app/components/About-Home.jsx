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
    <div className="bg-darkGrey py-20 flex flex-col items-center">
      {/* Section Title */}
      <motion.div
        className={`${font.className} text-center mb-16 px-4 md:px-0`}
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.p className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-customCyan">
          Who We Are
        </motion.p>
        <motion.p
          className="font-light mt-4 text-lg md:text-xl lg:text-2xl text-white max-w-3xl mx-auto leading-relaxed"
          variants={fadeIn}
        >
          We are a passionate team dedicated to bringing the best web experiences to life. Our focus is on designing and developing high-performance websites with a touch of elegance. We believe in creating exceptional digital products that align with your goals.
        </motion.p>
      </motion.div>

      {/* Section 1: Image on the Left, Text on the Right */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 px-4 md:px-8 mb-16">
        {/* Image with Animation */}
        <motion.div
          className="md:w-1/2 w-full"
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
          <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
          <p className="text-lg md:text-xl mb-4 leading-relaxed">
            We envision a future where businesses thrive through superior digital experiences. Our goal is to craft visually stunning and highly functional websites that help brands succeed in the online world.
          </p>
          <p className="text-lg md:text-xl">
            We focus on innovative, user-centered designs that leave a lasting impression and drive growth for our clients.
          </p>
        </motion.div>
      </div>

      {/* Section 2: Text on the Left, Image on the Right */}
      <div className="flex flex-col md:flex-row-reverse justify-center items-center gap-8 px-4 md:px-8 mb-16">
        {/* Image with Animation */}
        <motion.div
          className="md:w-1/2 w-full"
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
          className="md:w-1/2 w-full text-white flex flex-col justify-center text-center md:text-left"
          initial="hidden"
          whileInView="visible"
          variants={slideInLeft}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-4">Our Process</h3>
          <p className="text-lg md:text-xl mb-4 leading-relaxed">
            Our process is simple yet effective. We collaborate closely with clients to understand their needs and deliver solutions that exceed expectations. From ideation to execution, we follow a structured approach to bring ideas to life.
          </p>
          <p className="text-lg md:text-xl">
            Our commitment to quality, creativity, and technical expertise ensures every project is delivered to perfection.
          </p>
        </motion.div>
      </div>

      {/* Section 3: Image on the Left, Text on the Right */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 px-4 md:px-8 mb-16">
       
        {/* <motion.div
          className="md:w-1/2 w-full"
          initial="hidden"
          whileInView="visible"
          variants={slideInLeft}
          viewport={{ once: true }}
        >
          <motion.img
            src="/about-us-image-3.jpg"
            alt="Why Choose Us"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </motion.div> */}

        {/* Text Content */}
        {/* <motion.div
          className="md:w-1/2 w-full text-white flex flex-col justify-center text-center md:text-left"
          initial="hidden"
          whileInView="visible"
          variants={slideInRight}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-4">Why Choose Us</h3>
          <p className="text-lg md:text-xl mb-4 leading-relaxed">
            Choosing us means choosing quality, innovation, and reliability. We pride ourselves on delivering results that make an impact. Our team of experts combines creativity with cutting-edge technology to provide solutions that help you stand out in the digital space.
          </p>
          <p className="text-lg md:text-xl">
            Let us help you transform your online presence and achieve your business goals.
          </p>
        </motion.div> */}
      </div>
    </div>
  );
};

export default About;
