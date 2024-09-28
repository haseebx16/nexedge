import React from 'react'
import { font } from './font/titan'

const WebsiteDesign = () => {
  return (
    <div className={`${font.className} gradient-website h-auto p-12 md:space-x-16 flex flex-col md:flex-row md:flex justify-center items-center`}>
        <img src='website-code-img.jpg' className='max-w-xl border-white border-2 h-96 rounded-md md:max-w-3xl'/>
        <div className=''>
            <p className='text-4xl mt-4 font-extrabold text-center md:text-left text-orange-500'>Cutting Edge Website Design</p>
            <p className='text-xl font-light mt-4 text-center md:text-left text-white max-w-xl'>Our technology team is enterprise-grade, and we excel at application design & development, delivering beautiful high performance websites. Our team of expert mix the future web design with first-grade technology resulting in user experience. We emphasize above the line digital product design and development to make you look good where it counts — online.</p>
        </div>
    </div>
  )
}

export default WebsiteDesign