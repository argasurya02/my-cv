import React from "react";
import installNode from "../../public/assets/portfolio/smpk-2.jpg";
import reactParallax from "../../public/assets/portfolio/litle.jpg";
import usestate from "../../public/assets/portfolio/tj.jpg";
import reactWeather from "../../public/assets/portfolio/smk-wira.jpg";

import { FaGithub } from "react-icons/fa";
import { AiOutlineCaretRight } from "react-icons/ai";
import { BiChevronLeft } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";

const educations = [
  {
    id: 1,
    title: "SMK WIRA HARAPAN",
    imageSrc: reactWeather,
    url: "smk-wira",
    description: 'SMK Wira Harapan adalah sebuah institusi pendidikan yang berkomitmen untuk membentuk generasi muda yang terampil dan siap menghadapi tantangan dunia kerja (katanya), pada saat saya menginjak jenjang SMK banyak hal baru yang saya dapatkan, mulai dari pertemanan, lingkungan belajar, pengalaman, dan bahkan prestasi baru, banyak sekali pengalaman di SMK Wira Harapan yang menjadi bagian dari karakter saya saat ini. Tidak terasa waktu cepat berlalu, sekarang saya sudah berada di kelas 12 dan sedang menjalani training, tinggal menghitung hari maasa masa emas ini akan berakhir'
  },
  {
    id: 2,
    title: "SMPK 2 HARAPAN",
    imageSrc: installNode,
    url: "smpk-2-harapan",
    description: 'SMPK 2 Harapan adalah jenjang penddiikan ketiga yang aku pilih untuk menjalani masa masa SMP.bagiku masa SMP terasa begitu cepat karena covid Tidak terlalu banyak hal yang terjadi disini namun, pada masa ini aku bertemu dengan banyak orang hebat, tidak hanya hebat secara akademik, namun banyak hal lainnya. kemampuan ku bersosialisasi sangat terasah saat aku menduduki masa SMP, pada masa ini aku terbilang memiliki lumayan banyak teman yang membuatku mampu mengasah skill ku dalam bersosialisasi'
  },
  {
    id: 3,
    title: "SD TEGALJAYA",
    imageSrc: usestate,
    url: "sd-tegaljaya",
    description: 'Pada saat masa SD ku, aku terbilang orang yang cukup pandai dalam hal akademis, namun aku tidak terlalu pandai dalam mencari dan memilih teman, karena kepinteranku banyak orang yang hanya mau berteman dengan ku karena aku pintar walaupun tidak semuanya'
  },
  {
    id: 4,
    title: "TK Litle Step",
    imageSrc: reactParallax,
    url: "litle-step",
    description: 'Pada masa ini aku tidak terlalu mengingat kejadian yang terjadi pada saat itu jadi aku tidak bisa cerita apa apa'
  },
];

const getEducationFrom = (url) => educations.filter((p) => p.url === url)[0];

export async function getStaticPaths() {
  const paths = educations.map((p) => ({
    params: { id: p.url },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const education = getEducationFrom(params.id);

  return {
    props: { education },
  };
}

const OneEducation = ({ education: { title, imageSrc, description } }) => {
  return (
    <div className="h-fit w-full text-center">
      <div className="max-w-screen-xl mx-auto w-full h-full pt-24 p-8 flex flex-col">
        <div className="flex">
          <Link href="/#rumah">
            <div className="flex items-center justify-center my-8 text-indigo-500 font-bold capitalize cursor-pointer hover:colortext-indigo-7-- hover:scale-105 ">
              <BiChevronLeft size={25} /> back
            </div>
          </Link>
        </div>

        <h1 className="capitalize text-4xl mt-2 mb-8 text-center md:text-left font-bold text-blue-500 tracking-wider">
          {title}
        </h1>

        <div className="relative w-96 h-56 mx-auto overflow-hidden my-8 " >
          <div className="rounded-md border-solid p-4">
          <Image src={imageSrc} alt="bla" layout="fill" objectFit="cover" />
          </div>
        </div>

        <h2 className="text-center md:text-left my-4 text-2xl font-bold">
          Description
        </h2>

        <p className="hover:scale-105 transition-transform duration-300">
          {description}
        </p>
        </div>
      </div>
  );
};

export default OneEducation;
