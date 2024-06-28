import React from "react";
import { MdExpandMore } from "react-icons/md";
import installNode from "../public/assets/portfolio/smpk-2.jpg";
import reactParallax from "../public/assets/portfolio/litle.jpg";
import usestate from "../public/assets/portfolio/tj.jpg";
import reactWeather from "../public/assets/portfolio/smk-wira.jpg";
import Link from "next/link";
import Image from "next/image";
import Typewriter from "typewriter-effect";

const Education = () => {
  const educations = [
    {
      id: 1,
      title: "SMK WIRA HARAPAN",
      imageSrc: reactWeather,
      url: "smk-wira",
    },
    {
      id: 2,
      title: "SMPK 2 HARAPAN",
      imageSrc: installNode,
      url: "smpk-2-harapan",
    },
    {
      id: 3,
      title: "SD TEGALJAYA",
      imageSrc: usestate,
      url: "sd-tegaljaya",
    },
    {
      id: 4,
      title: "TK Litle Step",
      imageSrc: reactParallax,
      url: "litle-step",
    },
  ];

  return (
    <div id="education" className="w-full">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
      <h2 className="text-transparent bg-clip-text text-5xl md:text-7xl tracking-wider uppercase font-bold bg-clip-text bg-gradient-to-r from-blue-600 via-blue-400 to-blue-400">
  Education
</h2>
        <div className="pt-4 max-w-xl font-bold text-lg mx-auto md:mx-0">
          <Typewriter
            options={{
              strings: [
                "“Akar pendidikan itu pahit, tapi buahnya manis.” - Aristoteles",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <p className="max-w-xl text-lg mx-auto md:mx-0 mt-0">
          Salah satu quotes yang membuat saya yakin bahwa pendidikan itu penting.
        </p>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 mt-8">
          {educations.map(({ id, title, imageSrc, url }) => (
            <Link key={id} href={`/education/${url}`}>
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
