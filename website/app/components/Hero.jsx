import React from 'react'
import { font } from './font/titan'

const Hero = () => {
  return (
    <div className={`${font.className} min-h-screen gradient-bg p-12 flex justify-center items-start flex-col`} >
        <div className='flex flex-col justify-start items-start space-y-6 w-full'>
            <p className='text-7xl text-white font-bold'>Nexedge <span className='text-cyan-400'>Solution</span></p>
            <p className='text-lg max-w-xl text-white mt-2 font-light'>We excel in providing customized solutions in <span className='text-cyan-400'>Engineering, IoT, and digital transformation</span>, carefully crafted to meet the distinct challenges of each client. By embracing continuous innovation and staying ahead of technological trends, we ensure our services are both <span className='text-cyan-400'>highly efficient and flexible</span>, adapting seamlessly to the ever-changing demands of the market.</p>
            <button className='p-3 rounded-full bg-cyan-400 shadow-md shadow-black text-white px-6 hover:bg-white hover:text-black hover:border hover:border-black duration-300'>Get A Quote</button>
        </div>
    </div>
  )
}

export default Hero
