import React from 'react';
import { font } from './font/titan';
import aboutCards from './data/aboutCards';
import Link from 'next/link';

const WebsiteDesign = () => {
  return (
    <>
        <div className="relative min-h-[30rem] gradient-website">

        <div className='flex justify-center items-center flex-col w-full relative z-10'>
          <div className='text-white text-center mt-12'>
            <p className={`${font.className} text-5xl font-bold flex flex-col flex-wrap sm:text-7xl mt-36 text-cyan-400`}>
              We are a Professional Firm<span className='text-white'>Commited to Success</span>
            </p>
          </div>
        </div>
      </div>
        <div className={`${font.className} gradient-bg h-auto p-20 space-y-16 flex flex-col justify-center items-center`}>
            <div className='text-center'>
                <p className='text-4xl mt-4 font-extrabold text-orange-500'>About Us & What We Do</p>
                <p className='text-xl font-light mt-4 text-black max-w-3xl mx-auto'>Our technology team is enterprise-grade, and we excel at application design & development, delivering beautiful high-performance websites. Our team of experts mixes the future of web design with first-grade technology, resulting in an excellent user experience. We emphasize digital product design and development to make you look good where it counts — online.</p>
            </div>
            <div className='text-center'>
                <p className='text-3xl mt-4 font-extrabold text-orange-500'>We Specialise in Six Fields</p>
                <p className='text-xl font-light mt-4 text-black max-w-3xl mx-auto'>Our Expertise Include The Following Fields:</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {aboutCards.map((service) => (
                    <Link href={service.href} key={service.id}>
                        <div className='relative shadow-2xl group'>
                            <img src={service.src} alt={service.label} className='w-full h-64 object-cover rounded-lg' />
                            <div className='absolute inset-0 bg-black group-hover:opacity-40 rounded-lg opacity-90 transition-opacity duration-300'></div>
                            <div className='absolute inset-0 flex justify-center items-center'>
                                <p className='text-white text-2xl font-light text-center p-4'>{service.label}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    </>
  );
};

export default WebsiteDesign;
