import React from 'react'
import { font } from './font/titan'

const Structure = () => {
  return (
    <div className={`${font.className} bg-darkGrey h-auto p-12 md:space-x-16 flex flex-col md:flex-row md:flex justify-center items-center`}>
        <img src='website-code-img.jpg' className='w-auto border-white border-2 shadow-2xl shadow-customCyan-light h-96 rounded-md md:max-w-3xl'/>
        <div className=''>
            <p className='text-4xl mt-4 font-extrabold text-center md:text-left text-customCyan'>Specialising In Industrial Solutions</p>
            <p className='text-xl font-light mt-4 text-center md:text-left text-white max-w-xl'>Nexedge Solution specializes in delivering tailored expertise across Engineering, IoT, and digital transformation. With a commitment to innovation, we address unique client challenges, offering adaptable and efficient solutions. Our team ensures that our services evolve with technological advancements to meet dynamic market needs.</p>
        </div>
    </div>
  )
}

export default Structure