import { font2 } from '@/app/components/font/poppins'
import { font } from '@/app/components/font/titan'
import Footer from '@/app/components/Footer'
import Nav from '@/app/components/Navbar'
import React from 'react'

const Page = () => {
  return (
    <>
      <Nav/>
      {/* Main Image Section with Backdrop Filter */}
      <div className="relative min-h-[30rem]" style={{
        backgroundImage: 'url("/erp.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
        {/* Overlay with Backdrop Filter */}
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-lg"></div>

        <div className='flex justify-center items-center flex-col w-full relative z-10'>
          <div className='text-white text-center mt-12'>
            <p className={`${font.className} text-7xl font-bold flex flex-col flex-wrap sm:text-7xl mt-36 text-cyan-400`}>
              ERP<span className='text-white'>Implementation & Support</span>
            </p>
          </div>
          <div className='text-center max-w-md mx-auto'>
            <p className='sm:text-xl text-center text-white'>
              Get personalized help and guidance for your SAP B1 & ERP projects.
            </p>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="min-h-screen gradient-bg">
        <div className="flex flex-col md:flex-row md:mx-24 pt-12 justify-center items-center">
          <img src='/electro.jpeg' className='w-auto h-80 md:hover:h-96 duration-300 rounded-lg shadow-blue-800 shadow-lg'/>
          <p className={`${font2.className} text-black mt-12 text-center text-xl mx-12 max-w-2xl  p-4 rounded-md`}>
            <span className={`${font2.className} text-3xl font-bold mb-6 text-orange-500`}>What We Offer: </span><br/>
            Nexedge Solution specializes in creating tailored web applications designed to meet your unique business needs. We combine innovative technology with user-friendly design to deliver powerful, scalable, and secure solutions. Let NexEdge transform your vision into a fully customized web experience that drives results.
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:mx-24 pb-12 pt-12 justify-center items-center">
          <p className={`${font2.className} text-black mt-12 text-center text-xl mx-12 max-w-2xl  p-4 rounded-md`}>
            <span className={`${font2.className} text-3xl font-bold mb-6 text-orange-500`}>Key Features: </span><br/>
            NexEdge Solution develops custom web applications tailored to meet specific business needs, focusing on innovative, scalable, and secure technology. We prioritize user-friendly design, ensuring seamless performance across all devices. Our team delivers powerful, reliable solutions that enhance business operations and drive growth.
          </p>
          <img src='/electrical.jpg' className='w-auto h-80 md:hover:h-96 duration-300 rounded-lg shadow-green-200 shadow-lg'/>
        </div>
      </div>

      <Footer/>
    </>
  )
}

export default Page
