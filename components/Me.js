import Link from 'next/link';
import React from 'react';
import { MdExpandMore } from 'react-icons/md';
import pic from '../public/assets/foto-profile-7.jpg';
import Image from 'next/image';

const Me = () => {
  return (
    <div id="me" className="w-full bg-gradient-to-b from-gray-800 to-gray-900 text-white">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <h2 className="text-5xl md:text-7xl tracking-wider uppercase bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 font-bold text-shadow">
          About Me
        </h2>
        <div className='my-8 px-8 py-8 flex flex-col md:flex-row items-center md:items-start rounded-xl bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg'>
          <div className='flex-shrink-0 w-full md:w-1/3 mx-auto overflow-hidden rounded-xl mb-8 md:mb-0 md:mr-8'>
            <Image src={pic} alt='me' width={400} height={400} className="object-cover object-center" />
          </div>
          <div className='w-full md:w-2/3'>
            <p className='py-4 max-w-2xl mx-auto text-shadow hover:scale-110 transition-transform duration-300'>
              Saya adalah orang yang sedang mendalami kemampuan di bidang teknologi. Sejak kecil, saya tertarik dengan dunia komputer dan perangkat lunak, yang membuat saya ingin mengejar karier di bidang teknik perangkat lunak. Saya ingin belajar dalam mengembangkan aplikasi yang inovatif dan solusi yang efektif, serta senang bekerja dalam tim untuk mencapai tujuan bersama.
            </p>
            <p className='py-4 max-w-2xl mx-auto text-shadow hover:scale-110 transition-transform duration-300'>
              Kehidupan akademis saya di SMK Wira Harapan telah memperluas pengetahuan saya dalam bidang software engineering. Tak hanya itu saya juga mendapatkan beberapa prestasi akademik di SMK Wira Harapan Selain itu, saya juga memiliki telah mengikuti berbagai organisasi saat ini baik di sekolah maupun di luar sekolah, seperti Organisasi Siswa Intera Sekolah dan juga Organisasi pemuda di gereja
            </p>
            <p className='py-4 max-w-2xl mx-auto text-shadow hover:scale-110 transition-transform duration-300'>
              Di luar itu, saya senang berpartisipasi dalam kegiatan sosial dan olahraga. Saya percaya bahwa kehidupan seimbang antara bekerja keras dan menikmati waktu luang adalah kunci untuk mencapai kesuksesan pribadi. Dengan semangat belajar yang tinggi dan komitmen untuk terus berkembang, saya berharap dapat memberikan kontribusi yang berarti bagi saya dan orang orang di masa depan.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-10">
          <Link href="/arga-cv.pdf" download={true}>
            <div className="group flex items-center justify-center my-8 bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer transition-transform hover:scale-105">
              My CV
              <span className="-rotate-90 duration-100 ease-in group-hover:rotate-0">
                <MdExpandMore size={25} />
              </span>
            </div>
          </Link>

          <Link href="/#education">
            <div className="group flex items-center justify-center my-8 bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer transition-transform hover:scale-105">
              Education Journey
              <span className="-rotate-90 duration-100 ease-in group-hover:-rotate-0">
                <MdExpandMore size={25} />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Me;
