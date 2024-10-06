import React from 'react';
import { font } from './font/titan';

const ContactPage = () => {
  return (
    <div className={`${font.className} min-h-[45rem] gradient-bg flex justify-center items-center p-12`}>
      <div className="max-w-7xl w-full bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
        
        {/* Left Side - Company Info */}
        <div className="w-full md:w-1/2 p-8 gradient-website flex flex-col justify-center items-center text-white">
          <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
          <p className="text-4xl mb-4 font-bold">Nexedge <span className='text-cyan-500'>Solution</span></p>
          {/* <p className="text-lg mb-2">Location: 1234 Street Name, City, Country</p> */}
          <p className="text-lg mb-2">Phone: +92 309 9650505</p>
          <p className="text-lg mb-2">Email: info@nexedgesolution.com</p>
          {/* <p className="text-lg mb-2">Working Hours: Mon-Fri 9:00 AM - 6:00 PM</p> */}
        </div>
        
        {/* Right Side - Contact Form (centered vertically) */}
        <div className="w-full md:w-1/2 flex justify-center items-center p-8">
          <form className="w-full max-w-lg space-y-4">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Get In Touch</h2>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" 
                placeholder="Your Name" 
                required 
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" 
                placeholder="Your Email" 
                required 
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" 
                placeholder="Your Message" 
                rows="5" 
                required 
              ></textarea>
            </div>
            <div>
              <button 
                type="submit" 
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Send Message
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
};

export default ContactPage;
