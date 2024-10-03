import React from 'react'
import Nav from '../components/Navbar'
import { font } from '../components/font/titan'
import Link from 'next/link'
import serviceData from "../components/data/serviceCards"

const page = () => {
  return (
    <>
      <Nav/>
      <div className={`gradient-bg  ${font.className} flex flex-col min-h-screen items-center`}>
        <div className='mt-12'>
            <p className='text-orange-500 text-5xl font-extrabold text-center mt-12'>Services</p>
            <p className='text-black text-center max-w-2xl mt-6'>We excel in providing customized solutions in Engineering, IoT, and digital transformation, carefully crafted to meet the distinct challenges of each client. By embracing continuous innovation and staying ahead of technological trends, we ensure our services are both highly efficient and flexible, adapting seamlessly to the ever-changing demands of the market.</p>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
            {serviceData.map((service) => (
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
    </div>
    </>
  )
}

export default page