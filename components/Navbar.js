import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaBars, FaTimes, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Navbar = () => {
  const [navigation, setNavigation] = useState(false);
  const [pageScroll, setPageScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setPageScroll(window.scrollY >= 90);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "me" },
    { id: 3, link: "experience" },
    { id: 4, link: "education" },
    { id: 5, link: "contact" },
  ];

  return (
    <div className={`navbar w-full h-20 z-10 fixed duration-300 ease-in ${pageScroll ? "bg-gray-800 text-white" : "bg-white text-black"}`}>
      <div className="flex justify-between items-center w-full h-full max-w-screen-xl mx-auto p-4">
        <Link href="/#home">
          <h1
            className="text-3xl lg:text-4xl font-bold uppercase underline underline-offset-2 tracking-wider cursor-pointer transition-transform hover:scale-105"
            style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.4)" }}
          >
            ARGA surya dharma
          </h1>
        </Link>

        <div>
          <ul className="hidden md:flex">
            {links.map(({ id, link }) => (
              <Link key={id} href={`/#${link}`}>
                <li className="ml-10 text-base uppercase cursor-pointer duration-200 ease-out hover:scale-105 tracking-wider hover:font-bold">
                  {link}
                </li>
              </Link>
            ))}
          </ul>

          <div className="md:hidden cursor-pointer" onClick={() => setNavigation(!navigation)}>
            {navigation ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
        </div>
      </div>

      <div className={`md:hidden fixed left-0 top-0 w-full h-full bg-black/70 backdrop-blur transition-opacity duration-300 ${navigation ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
        <div className="fixed left-0 top-0 w-4/5 h-full bg-white text-black p-10">
          <div className="flex w-full items-center justify-between">
            <Link href="/#home">
              <h2
                onClick={() => setNavigation(false)}
                className="text-3xl font-bold uppercase underline underline-offset-2 tracking-wider cursor-pointer"
                style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.4)" }}
              >
                ARGA SURYA DHARMA
              </h2>
            </Link>
            <div
              onClick={() => setNavigation(false)}
              className="p-3 cursor-pointer"
            >
              <FaTimes size={30} />
            </div>
          </div>

          <div className="mt-20 flex flex-col h-fit gap-20">
            <ul className="uppercase">
              {links.map(({ id, link }) => (
                <Link key={id} href={`/#${link}`}>
                  <li
                    onClick={() => setNavigation(false)}
                    className="py-4 text-2xl tracking-wider cursor-pointer"
                  >
                    {link}
                  </li>
                </Link>
              ))}
            </ul>

            <div>
              <div className="grid grid-cols-2 mx-auto w-4/5 gap-10">
                <div className="flex items-center justify-center relative">
                  <div className="rounded-full overflow-hidden border-2 border-gray-300 p-3 cursor-pointer shadow-md">
                    <a
                      href="https://www.linkedin.com/in/argasuryadharma/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center rounded-full shadow-md bg-gray-600 hover:bg-gray-700 duration-200 p-3 cursor-pointer hover:scale-105"
                    >
                      <FaLinkedin size={25} className="text-white" />
                    </a>
                  </div>
                </div>
                <div className="flex items-center justify-center relative">
                  <div className="rounded-full overflow-hidden border-2 border-gray-300 p-3 cursor-pointer shadow-md">
                    <a
                      href="https://www.instagram.com/invites/contact/?igsh=c6cnrxayxu1i&utm_content=49qrlz2"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center rounded-full shadow-md bg-gray-600 hover:bg-gray-700 duration-200 p-3 cursor-pointer hover:scale-105"
                    >
                      <AiFillInstagram size={25} className="text-white" />
                    </a>
                  </div>
                </div>
                <div className="flex items-center justify-center relative">
                  <div className="rounded-full overflow-hidden border-2 border-gray-300 p-3 cursor-pointer shadow-md">
                    <a
                      href="https://www.facebook.com/arga.s.dharma?mibextid=ZbWKwL"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center rounded-full shadow-md bg-gray-600 hover:bg-gray-700 duration-200 p-3 cursor-pointer hover:scale-105"
                    >
                      <FaFacebook size={25} className="text-white" />
                    </a>
                  </div>
                </div>
                <div className="flex items-center justify-center relative">
                  <div className="rounded-full overflow-hidden border-2 border-gray-300 p-3 cursor-pointer shadow-md">
                    <a
                      href="https://github.com/argasurya02"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center rounded-full shadow-md bg-gray-600 hover:bg-gray-700 duration-200 p-3 cursor-pointer hover:scale-105"
                    >
                      <FaGithub size={25} className="text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
