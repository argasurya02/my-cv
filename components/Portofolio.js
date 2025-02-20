import React from "react";
import { MdExpandMore } from "react-icons/md";
import adminlte from "../public/assets/portfolio/adminlte.jpg";
import websitecv from "../public/assets/portfolio/Website-CV.jpg";
import crudphp from "../public/assets/portfolio/crudphp.png";
import tptlandingpage from "../public/assets/portfolio/1tptlandingpage.jpg";
import Link from "next/link";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import { Portofolio } from '@/components/Portofolio';

const Education = () => {
  const educations = [
    {
      id: 1,
      title: "ADMIN LTE",
      imageSrc: adminlte,
      url: "smk-wira",
    },
    {
      id: 2,
      title: "CRUD PHP",
      imageSrc: crudphp,
      url: "sd-tegaljaya",
    },
    {
      id: 3,
      title: "Next Js + Tailwind CV",
      imageSrc: websitecv,
      url: "smpk-2-harapan",
    },
    {
      id: 4,
      title: "1TTPT Landing Page Laravel",
      imageSrc: tptlandingpage,
      url: "litle-step",
    },
  ];

  return (
    <div id="education" className="w-full">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
      <h2 className="text-transparent bg-clip-text text-5xl md:text-7xl tracking-wider uppercase font-bold bg-clip-text bg-gradient-to-r from-blue-600 via-blue-400 to-blue-400">
  Portofolio
</h2>
        <div className="pt-4 max-w-xl font-bold text-lg mx-auto md:mx-0">
          <Typewriter
            options={{
              strings: [
                "--My-Project",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <p className="max-w-xl text-lg mx-auto md:mx-0 mt-0">
          Beberapa Project yang saya kerjakan 1 Tahun Terakhir
        </p>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 mt-8">
          {educations.map(({ id, title, imageSrc, url }) => (
            <Link key={id} href={`/portofolio/${url}`}>
              <div className="cursor-pointer group shadow-md shadow-gray-600 overflow-hidden rounded-md p-7 hover:scale-105 duration-300">
                <Image
                  src={imageSrc}
                  alt={title}
                  className="rounded-md duration-200"
                />
                <h2 className="text-center capitalize mt-4 font-bold duration-200 group-hover:underline underline-offset-4 text-lg">
                  {title}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
