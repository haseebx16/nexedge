import React from 'react'
import { font } from './font/titan'

const Hero = () => {
  return (
    <div className={`${font.className} gradient-bg p-16 flex justify-center items-start flex-col`} style={{ minHeight: "50rem" }}>
        <div className='flex flex-col justify-start items-start space-y-6 w-full'>
            <p className='text-5xl sm:text-7xl text-black font-bold'>Nexedge <span className='text-cyan-600'>Solution</span></p>
            <p className='text-lg max-w-xl text-black mt-2 font-light'>We excel in providing customized solutions in <span className='text-cyan-600'>Engineering, IoT, and digital transformation</span>, carefully crafted to meet the distinct challenges of each client. By embracing continuous innovation and staying ahead of technological trends, we ensure our services are both <span className='text-cyan-600'>highly efficient and flexible</span>, adapting seamlessly to the ever-changing demands of the market.</p>
            <button className='p-3 rounded-full bg-cyan-400 shadow-md shadow-black text-white px-6 hover:bg-white hover:text-black hover:border hover:border-black duration-300'>Get A Quote</button>
        </div>
    </div>
  )
}

export default Hero
