import React from 'react'
import { font } from './font/titan'

const Structure = () => {
  return (
    <div className={`${font.className} bg-darkGrey h-auto p-12 md:space-x-16 flex flex-col md:flex-row md:flex justify-center items-center`}>
        <img src='website-code-img.jpg' className='w-auto border-white border-2 h-96 rounded-md md:max-w-3xl'/>
        <div className=''>
            <p className='text-4xl mt-4 font-extrabold text-center md:text-left text-orange-500'>Specialising In 6 Fields</p>
            <p className='text-xl font-light mt-4 text-center md:text-left text-white max-w-xl'>We excel in providing customized solutions in Engineering, IoT, and digital transformation, carefully crafted to meet the distinct challenges of each client. By embracing continuous innovation and staying ahead of technological trends, we ensure our services are both highly efficient and flexible, adapting seamlessly to the ever-changing demands of the market.</p>
        </div>
    </div>
  )
}

export default Structure