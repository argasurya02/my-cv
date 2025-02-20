import React from 'react'
import Link from "next/link";
import Image from "next/image";
import { MdExpandMore } from "react-icons/md";
import installNode from "../../public/assets/portfolio/smpk-2.jpg";
import reactParallax from "../../public/assets/portfolio/litle.jpg";
import usestate from "../../public/assets/portfolio/tj.jpg";
import reactWeather from "../../public/assets/portfolio/smk-wira.jpg";
import { Education } from '@/components/Education';

export const getStaticProps = async () => {
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

      return {
        props: { educations }, 
      }
}

const EducationRoute = ({educations}) => {
return (
    <div id="education" className="w-full">
      <div className="max-w-screen-xl mx-auto pt-24 p-4 text-center md:text-left">
        <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-blue-500 font-bold pb-16">
          Education
        </h2> 

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {educations.map(({ id, title, imageSrc, url }) => (
            <Link key={id} href={`/portfolio/${url}`}>
              <div className="cursor-pointer group shadow-md shadow-gray-600 overflow-hidden rounded-md">
                <Image
                  src={imageSrc}
                  alt={title}
                  className="rounded-md duration-200 
                  hover:scale-110"
                />
                <h2 className="text-center text-base capitalize my-4 font-light duration-200 group-hover:underline underline-offset-4">
                  {title}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EducationRoute
