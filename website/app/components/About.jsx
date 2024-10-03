import React from 'react'
import { font } from './font/titan'
import aboutCards from "./data/aboutCards"
import Link from 'next/link'

const WebsiteDesign = () => {
  return (
    <div className={`${font.className} gradient-website h-auto p-12 md:space-x-16 flex flex-col md:flex-row md:flex justify-center items-center`}>
        <div className=''>
            <p className='text-4xl mt-4 font-extrabold text-center md:text-left text-orange-500'>Cutting Edge Website Design</p>
            <p className='text-xl font-light mt-4 text-center md:text-left text-white max-w-xl'>Our technology team is enterprise-grade, and we excel at application design & development, delivering beautiful high performance websites. Our team of expert mix the future web design with first-grade technology resulting in user experience. We emphasize above the line digital product design and development to make you look good where it counts — online.</p>
        </div>
        {aboutCards.map((service) => (
                <Link href={service.href}><div key={service.id} className="relative shadow-2xl shaodow-black group">
                    <img src={service.src} alt={service.label} className="w-full h-64 object-cover rounded-lg" />         
                    <div className="absolute inset-0 bg-black group-hover:opacity-40 rounded-lg shadow-lg shaodow-black opacity-90 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 flex justify-center items-center">
                        <p className="text-white text-2xl font-light text-center p-4">
                        {service.label}
                        </p>
                    </div>
                </div></Link>
            ))}
    </div>
  )
}

export default WebsiteDesign