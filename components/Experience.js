import React from "react";
import Image from "next/image";

import html from "../public/assets/experience/html.png";
import css from "../public/assets/experience/css.png";
import javascript from "../public/assets/experience/javascript.png";
import reactImage from "../public/assets/experience/react.png";
import nextjs from "../public/assets/experience/nextjs.png";
import tailwind from "../public/assets/experience/tailwind.png";
import osis from "../public/assets/experience/osis.jpg";
import pemuda from "../public/assets/experience/pemuda.jpg";
import taksu from "../public/assets/experience/taksu.jpg";
import giticon from "../public/assets/experience/giticon.png";
import githubicon from "../public/assets/experience/github-logo.png";
import figma from "../public/assets/experience/figma.png";
import laravel from "../public/assets/experience/laravel.svg";
import php from "../public/assets/experience/Php-logo.png";
import mysql from "../public/assets/experience/mysqlicon.png";

const Experience = () => {
  const skills = [
    { id: 1, title: "HTML", src: html },
    { id: 2, title: "CSS", src: css },
    { id: 3, title: "JavaScript", src: javascript },
    { id: 4, title: "React", src: reactImage },
    { id: 5, title: "Next JS", src: nextjs },
    { id: 6, title: "Tailwind", src: tailwind },
    { id: 7, title: "Git", src: giticon },
    { id: 8, title: "Github", src: githubicon },
    { id: 9, title: "Laravel", src: laravel },
    { id: 10, title: "Figma", src: figma },
    { id: 11, title: "PHP", src: php },
    { id: 12, title: "MySQL", src: mysql },
  ];

  const experiences = [
    {
      id: 1,
      title: "OSIS SMP-SMK",
      imageSrc: osis,
      description:
        "Saya telah mengikuti OSIS hampir 6 tahun dari SMP-SMK yang telah memberikan saya banyak pengalaman berorganisasi",
    },
    {
      id: 2,
      title: "Pemuda Gereja",
      imageSrc: pemuda,
      description:
        "Saya baru saja dilantik menjadi wakil ketua pemuda di gereja, saya harap saya mampu bertahan",
    },
    {
      id: 3,
      title: "Intern At Taksu",
      imageSrc: taksu,
      description:
        "Saya telah menyelesaikan Intern saya di Pt Taksu Tech, yang bergerak di bidang software development banyak hal baru yang saya dapat dan saya pelajari dari Taksu TERIMAKASIH TAKSU", 
    }
  ];

  return (
    <div id="experience" className="w-full">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Experience Section */}
          <div>
            <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-blue-500 font-bold">
              Experience
            </h2>
            <p className="py-4 max-w-lg mx-auto md:mx-0">
              Ini adalah beberapa organisasi yang masih saya ikuti sampai saat ini.
            </p>
            <div className="flex flex-col gap-8 mt-2">
              {experiences.map(({ id, title, imageSrc, description }) => (
                <div
                  key={id}
                  className="flex flex-col justify-center cursor-pointer shadow-md shadow-gray-600 overflow-hidden rounded-md p-5 hover:scale-105 duration-300 items-center text-center hover:font-bold"
                >
                  <Image src={imageSrc} alt={title} width={300} height={200} />
                  <h3 className="font-bold mt-4">{title}</h3>
                  <p>{description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-blue-500 font-bold">
              Skills
            </h2>
            <p className="py-4 max-w-lg mx-auto md:mx-0">
              Sampai saat ini, ini adalah beberapa pemrograman yang sudah saya pelajari, meskipun saya masih belum terlalu ahli di dalam menggunakannya saya akan terus belajar mencobanya 
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map(({ id, title, src }) => (
                <div
                  key={id}
                  className="flex flex-col items-center p-6 shadow-lg rounded-xl hover:scale-105 duration-300
                  odd:shadow-rose-400 even:shadow-blue-400 hover:font-bold"
                >
                  <Image src={src} width="64" height="64" alt={title} />
                  <h3 className="mt-4">{title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
