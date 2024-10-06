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
            <p className={`${font.className} text-5xl font-bold flex flex-col flex-wrap sm:text-7xl mt-36 text-cyan-400`}>
              ERP<span className='text-white text-center max-w-md mx-auto'>Implementation</span>
            </p>
          </div>
          <div className='text-center max-w-sm md:max-w-md mx-auto'>
            <p className='sm:text-xl text-center text-white'>
              Get personalized help and guidance for your SAP B1 & ERP projects.
            </p>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="min-h-screen gradient-bg">
        <div className="flex flex-col lg:flex-row pt-12 justify-center items-center">
          <img src='/erp-service.webp' className='w-auto h-72 md:hover:h-80 duration-300 rounded-lg shadow-blue-800 shadow-lg'/>
          <p className={`${font2.className} text-black mt-12 text-center text-xl mx-12 max-w-2xl  p-4 rounded-md`}>
            <span className={`${font2.className} text-3xl font-bold mb-6 text-orange-500`}>What We Offer: </span><br/>
            Nexedge Solution provides comprehensive ERP implementation and support, ensuring seamless integration and optimization of business processes. Our tailored solutions and ongoing support help maximize efficiency and drive growth across your organization.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row pb-12 pt-12 justify-center items-center">
          <p className={`${font2.className} text-black mt-12 text-center text-xl mx-12 max-w-2xl  p-4 rounded-md`}>
            <span className={`${font2.className} text-3xl font-bold mb-6 text-orange-500`}>Key Features: </span><br/>
            Our ERP implementation includes customized solutions, seamless system integration, and real-time data visibility. Nexedge Solution offers ongoing support, process optimization, and enhanced scalability to meet your business needs.
          </p>
          <img src='/erpcover.webp' className='w-auto h-52 md:hover:h-64 duration-300 rounded-lg shadow-green-200 shadow-lg'/>
        </div>
      </div>

      <Footer/>
    </>
  )
}

export default Page
