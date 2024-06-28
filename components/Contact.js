import Image from "next/image";
import React from "react";
import contactus from "../public/assets/contact-us.jpg";
import { FaFacebook, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Contact = () => {
  return (
    <div id="contact" className="w-full bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <h2 className="text-5xl md:text-7xl tracking-wider uppercase font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          contact
        </h2>

        <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg flex flex-col md:flex-row gap-8 shadow-lg shadow-black mt-4 rounded-xl">
          <div className="w-full md:w-1/2 h-full rounded-xl p-8">
            <Image src={contactus} alt="man with laptop" className="rounded-xl" />
            <p className="pt-2 pb-8 text-white">
              I am open to talk regarding freelancing or full-time opportunities. Feel free to
              contact me using your preferred medium.
            </p>

            <div className="grid grid-cols-2 mx-auto w-4/5 gap-10">
              <a href="https://www.linkedin.com/in/argasuryadharma/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center rounded-full shadow-md bg-gray-600 hover:bg-gray-700 duration-200 p-3 cursor-pointer hover:scale-105">
                <FaLinkedin size={25} className="text-white" />
              </a>
              <a href="https://www.instagram.com/invites/contact/?igsh=c6cnrxayxu1i&utm_content=49qrlz2" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center rounded-full shadow-md bg-gray-600 hover:bg-gray-700 duration-200 p-3 cursor-pointer hover:scale-105">
                <AiFillInstagram size={25} className="text-white" />
              </a>
              <a href="https://www.facebook.com/arga.s.dharma?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center rounded-full shadow-md bg-gray-600 hover:bg-gray-700 duration-200 p-3 cursor-pointer hover:scale-105">
                <FaFacebook size={25} className="text-white" />
              </a>
              <a href="https://github.com/argasurya02" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center rounded-full shadow-md bg-gray-600 hover:bg-gray-700 duration-200 p-3 cursor-pointer hover:scale-105">
                <FaGithub size={25} className="text-white" />
              </a>
            </div>
          </div>

          {/* form stuff */}
          <div className="w-full md:w-1/2 h-full rounded-xl p-4 shadow-black rounded-xl">
            <div className="p-4 text-left">
              <form action="https://getform.io/f/zbxdmeob" method="POST">
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="capitalize text-sm py-2 text-white font-light">name</label>
                    <input type="text" name="name" className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-700 bg-gray-600 text-white" />
                  </div>
                  <div className="flex flex-col">
                    <label className="capitalize text-sm py-2 text-white font-light">phone</label>
                    <input type="text" name="phone" className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-700 bg-gray-600 text-white" />
                  </div>

                  <div className="flex flex-col col-span-2">
                    <label className="capitalize text-sm py-2 text-white font-light">email</label>
                    <input type="email" name="email" className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-700 bg-gray-600 text-white" />
                  </div>
                  <div className="flex flex-col col-span-2">
                    <label className="capitalize text-sm py-2 text-white font-light">message</label>
                    <textarea name="message" rows="10" className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-700 bg-gray-600 text-white"></textarea>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <button className="my-8 bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer hover:scale-105 duration-200">
                    send message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
