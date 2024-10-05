import React from 'react';
import { font } from './font/titan';
import aboutCards from './data/aboutCards';
import Link from 'next/link';

const WebsiteDesign = () => {
  return (
    <div className={`${font.className} gradient-website h-auto p-20 space-y-16 flex flex-col justify-center items-center`}>
        <div className='text-center'>
            <p className='text-4xl mt-4 font-extrabold text-orange-500'>About Us & What We Do</p>
            <p className='text-xl font-light mt-4 text-white max-w-3xl mx-auto'>Our technology team is enterprise-grade, and we excel at application design & development, delivering beautiful high-performance websites. Our team of experts mixes the future of web design with first-grade technology, resulting in an excellent user experience. We emphasize digital product design and development to make you look good where it counts — online.</p>
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
  );
};

export default WebsiteDesign;
