import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import headerlogo from "/assets/headerlogo.png";
import { BiLogoGmail } from 'react-icons/bi';

const Footer1 = () => {
  return (
    <>
    <header style={{ backgroundColor: '#5C5C5C1A' }} className="w-full text-white ">
      <div className="flex flex-col md:flex-row justify-between items-center py-4 px-6 md:px-[40px]">
        {/* Logo Section */}
        <div className="flex-shrink-0 mb-4 md:mb-0 md:ml-28">
          <img className="h-12 w-28" src={headerlogo} alt="Logo" />
        </div>

        {/* Responsive Navigation Links */}
        <nav className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-6 text-sm lg:text-base ">
          <a href="#home" className="text-red-600 hover:text-gray-300">Home</a>
          <a href="#about" className="hover:text-gray-300">About</a>
          <a href="#contact" className="hover:text-gray-300">Contact</a>
          <a href="#takenomics" className="hover:text-gray-300">Takenomics</a>
          <a href="#airdrop" className="hover:text-gray-300">Airdrop</a>
          <a href="#roadmap" className="hover:text-gray-300">Roadmap</a>
          <a href="#team" className="hover:text-gray-300">Team</a>
          <a href="#features" className="hover:text-gray-300">Features</a>
          <a href="#faqs" className="hover:text-gray-300">FAQs</a>
        </nav>
      </div>
      <div className="w-full text-white max-w-[1180px] flex flex-col md:flex-row justify-between mx-12 items-center py-5 border-t-2 border-gray-600">
        {/* Social Icons */}
        <div className="flex md:ml-28 mr-20 md:mr-0 space-x-6 text-2xl items-center mb-4 md:mb-0">
          <FaFacebookF className="hover:text-gray-400 transition duration-300" />
          <FaInstagram className="hover:text-gray-400 transition duration-300" />
          <FaTwitter className="hover:text-gray-400 transition duration-300" />
          <FaLinkedin className="hover:text-gray-400 transition duration-300" />
          <BiLogoGmail className="hover:text-gray-400 transition duration-300" />
        </div> 

        {/* Copyright Text */}
        <div className="text-center md:ml-10 md:text-lg mt-4 md:mt-0 md:mr-0 mr-16">
          <p>
            © 2024 Copyright. <span className="font-semibold text-red-600">Java Coffee Token</span>
          </p>
        </div>
      </div>
    </header>
    </>
  );
};

export default Footer1;

