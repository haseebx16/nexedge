"use client";

import React, { useRef } from 'react';
import { font } from './font/titan';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

const ContactPage = () => {
  const form = useRef();

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const slideInLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1 } },
  };

  const slideInRight = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1 } },
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_pg4f2xh', // Replace with your EmailJS service ID
        'template_mkky3rt', // Replace with your EmailJS template ID
        form.current,
        'NGGPkBYPBuoP1wBFO' // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          alert('Message sent successfully!');
          e.target.reset();
        },
        (error) => {
          alert('Failed to send message, please try again later.');
          console.error(error);
        }
      );
  };

  return (
    <div className={`${font.className} min-h-[45rem] bg-darkGrey flex justify-center items-center p-12`}>
      <motion.div
        className="max-w-7xl w-full shadow-xl shadow-customCyan bg-white rounded-lg overflow-hidden flex flex-col md:flex-row"
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        viewport={{ once: false, amount: 0.2 }}
      >
        {/* Left Side - Company Info */}
        <motion.div
          className="w-full md:w-1/2 p-8 bg-sky-950  flex flex-col justify-center items-center text-white"
          initial="hidden"
          whileInView="visible"
          variants={slideInLeft}
          viewport={{ once: false }}
        >
          <h2 className="text-4xl text-customCyan font-extrabold mb-2">Contact Us</h2>
          <img src="/white-logo.png" className="w-96 mb-2 h-auto" />
          <p className="text-lg mb-2"><span className="text-customCyan font-bold">Phone: </span>+92 309 9650505</p>
          <p className="text-lg mb-2"><span className="text-customCyan font-bold">Email:</span> info@nexedgesolution.com</p>
        </motion.div>

        {/* Right Side - Contact Form (centered vertically) */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center items-center p-8"
          initial="hidden"
          whileInView="visible"
          variants={slideInRight}
          viewport={{ once: false }}
        >
          <form ref={form} onSubmit={sendEmail} className="w-full max-w-lg space-y-4">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Get In Touch</h2>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
              <motion.input 
                type="text" 
                id="name" 
                name="name" 
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-300" 
                placeholder="Your Name" 
                required 
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
              <motion.input 
                type="email" 
                id="email" 
                name="email" 
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-300" 
                placeholder="Your Email" 
                required 
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message</label>
              <motion.textarea 
                id="message" 
                name="message" 
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-300" 
                placeholder="Your Message" 
                rows="5" 
                required 
              ></motion.textarea>
            </div>
            <div>
              <motion.button 
                type="submit" 
                className="w-full bg-customCyan hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
                whileHover={{ scale: 1.05, boxShadow: "0 4px 20px rgba(0, 255, 255, 0.5)" }}
              >
                Send Message
              </motion.button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactPage;
