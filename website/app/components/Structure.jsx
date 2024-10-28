import React from 'react';
import { font } from './font/titan';

const Structure = () => {
  return (
    <div className={`${font.className} bg-darkGrey h-auto p-12 md:space-x-16 flex flex-col md:flex-row justify-center items-center relative overflow-hidden`}>
      
      {/* Gradient Backgrounds */}
      <div className="absolute inset-0">
        <div className="absolute z-0 w-[10%] h-[50%] left-10 bottom-20 pink__gradient" />
        <div className="absolute z-0 w-[40%] h-[50%] right-10 top-20 blue__gradient" />
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center md:space-x-16">
        <img
          src="website-code-img.jpg"
          className="w-auto border-white border-2 shadow-2xl shadow-customCyan-light h-96 rounded-md md:max-w-3xl"
          alt="Industrial Solutions"
        />
        <div className="text-content mt-4 md:mt-0">
          <p className="text-4xl font-extrabold text-center md:text-left text-customCyan">Specialising In Industrial Solutions</p>
          <p className="text-xl font-light mt-4 text-center md:text-left text-white max-w-xl">
            Nexedge Solution specializes in delivering tailored expertise across Engineering, IoT, and digital transformation. With a commitment to innovation, we address unique client challenges, offering adaptable and efficient solutions. Our team ensures that our services evolve with technological advancements to meet dynamic market needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Structure;
