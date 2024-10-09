import React from 'react'
import Nav from '../components/Navbar'
import ContactPage from '../components/Contact'
import Footer from '../components/Footer'
import { font } from '../components/font/titan'

const page = () => {
  return (
    <>
      <Nav/>
      <div className="relative min-h-[30rem] bg-zinc-900">

        <div className='flex justify-center items-center flex-col w-full relative z-10'>
          <div className='text-white text-center mt-12'>
            <p className={`${font.className} text-5xl font-bold flex flex-col flex-wrap sm:text-7xl mt-36 text-cyan-400`}>
              Contact Us<span className='text-white'> Let's Work Together</span>
            </p>
          </div>
        </div>
      </div>
      <ContactPage/>
      <Footer/>
    </>
  )
}

export default page