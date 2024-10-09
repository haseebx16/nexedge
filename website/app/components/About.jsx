import React from 'react';
import { font } from './font/titan';
import aboutCards from './data/aboutCards';
import Link from 'next/link';
import About from './About-Home';

const WebsiteDesign = () => {
  return (
    <>
        <div className="relative min-h-[30rem] bg-zinc-900">

        <div className='flex justify-center items-center flex-col w-full relative z-10'>
          <div className='text-white text-center mt-12'>
            <p className={`${font.className} text-5xl font-bold flex flex-col flex-wrap sm:text-7xl mt-36 text-cyan-400`}>
              We are a Professional Firm<span className='text-white'>Commited to Success</span>
            </p>
          </div>
        </div>
      </div>
      <About/>
    </>
  );
};

export default WebsiteDesign;
