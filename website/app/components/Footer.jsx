import React from 'react'
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { font } from './font/titan';
import { font2 } from './font/poppins';

const Footer = () => {
  return (
    <div className="gradient-bg text-white py-8">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-start px-4 sm:px-12">

        <div className="sm:w-1/3 text-center sm:text-left">
          <p className={`${font.className} text-black text-5xl font-bold mb-2`}>Nexedge<span className="text-cyan-600">{"  "}Solution</span></p>
          <p className={`${font2.className} text-md text-black leading-relaxed`}>
          Transforming Technology, Driving Success.
          </p>
          
          <div className="flex justify-center sm:justify-start space-x-4 mt-4">
            <FaFacebook className="text-cyan-600 hover:text-black duration-300 text-2xl" />
            <AiFillInstagram className="text-cyan-600 hover:text-black duration-300 text-2xl" />
            <FaTwitter className="text-cyan-600 hover:text-black duration-300 text-2xl" />
          </div>
        </div>
        
        <div className="sm:w-1/3 mt-8 sm:mt-0 text-center sm:text-left flex flex-col justify-center items-center w-full">
          <p className={`${font.className} text-black text-lg mb-2`}>Our Services</p>
          <p className={`${font2.className} text-cyan-600 text-sm`}>• SAP Business One Implementation</p>
          <p className={`${font2.className} text-cyan-600 text-sm`}>• Custom Web Application</p>
          <p className={`${font2.className} text-cyan-600 text-sm`}>• Electronics & Electrical Engineering Solutions</p>
          <p className={`${font2.className} text-cyan-600 text-sm`}>• IoT Implementation & Support</p>
          <p className={`${font2.className} text-cyan-600 text-sm`}>• ERP Implementation & Support</p>
          <p className={`${font2.className} text-cyan-600 text-sm`}>• Data Analysis & Data Science Solutions</p>
        </div>

        <div className="sm:w-1/3 mt-8 sm:mt-0 text-center sm:text-left flex flex-col justify-center items-center w-full">
          <p className={`${font.className} text-black text-lg mb-2`}>For Queries</p>
          <p className={`${font2.className} text-cyan-600 text-sm`}>• info@nexedgesolution.com</p>
        </div>

        <div className="sm:w-1/3 mt-8 sm:mt-0 flex flex-col justify-center w-full text-center sm:text-left">
          <p className={`${font.className} text-black text-lg mb-2`}>Custom Work</p>
          <p className={`${font2.className} text-md mb-4 text-cyan-600`}>Fill All Your Requirements Here</p>

          <input
            type="text"
            placeholder="Enter your ideas here"
            className="w-full p-2 rounded-full border border-gray-400 bg-white text-gray-800"
          />
          <button className={`${font2.className} bg-cyan-600 text-white px-4 py-2 rounded-full mt-4`}>
            Submit Request
          </button>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-400">
        © 2024. All rights reserved.
      </div>
    </div>
  )
}

export default Footer;