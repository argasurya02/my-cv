import React from 'react';
import heroImage from '../public/assets/profile-pic.png';
import { MdExpandMore } from 'react-icons/md';
import Image from 'next/image';
import Link from 'next/link';
import Typewriter from "typewriter-effect";

const Homepage = () => {
  return (
    <div id='home' className='h-screen w-full text-center '>
      <div className='max-w-screen-xl mx-auto w-full h-full pt-24 p-4 flex flex-col items-center'>
        <div className='mx-auto overflow-hidden rounded-xl w-80 h-80'>
          {/* Menyesuaikan ukuran gambar */}
          <Image src={heroImage} alt='me'  />
        </div>
        
        {/* Menambahkan efek hover dan bayangan pada judul */}
        <h1 className='uppercase font-bold text-gray-700 text-7xl transition-transform hover:scale-105' style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.4)' }}>
        <Typewriter
                options={{
                  strings: [
                    "BEGINNER DEVELOPER",
                    "ALSO A STUDENT!",
                    "",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
        </h1>
        
        <p className='text-gray-600 text-xl max-w-lg mx-auto mt-4' style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.4)' }}>
          I am a student at SMK Wira Harapan, specializing in <span className='font-bold'>Software Engineering.</span> I am known for my cheerful demeanor, proactive communication skills, and strong academic performance. I excel in both team collaboration and independent work.
        </p>
        
        <Link href='/#me'>
          <div className='group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider transition-transform hover:scale-105' style={{ 
            background: 'linear-gradient(135deg, #3498db, #8e44ad)',
            boxShadow: '4px 4px 8px rgba(0,0,0,0.6)',
          }}>
            know more
            <span className='-rotate-90 duration-100 ease-in group-hover:rotate-0'>
              <MdExpandMore size={25} />
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
