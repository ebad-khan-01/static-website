import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import headerlogo from "/assets/headerlogo.png";

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden">
      {/* Mobile Header */}
      <div className="flex justify-between items-center py-4 px-6">
        <div className="flex-shrink-0">
          <img className="h-12 w-28" src={headerlogo} alt="Logo" />
        </div>
        <div className="cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="bg-black text-white transition-all duration-300 ease-in-out">
          <nav className="flex flex-col items-center space-y-4 p-4">
            <a href="#home" className="text-red-600 hover:text-gray-300">Home</a>
            <a href="#about" className="hover:text-gray-300">About</a>
            <a href="#takenomics" className="hover:text-gray-300">Takenomics</a>
            <a href="#airdrop" className="hover:text-gray-300">Airdrop</a>
            <a href="#roadmap" className="hover:text-gray-300">Roadmap</a>
            <a href="#team" className="hover:text-gray-300">Team</a>
            <a href="#features" className="hover:text-gray-300">Features</a>
            <a href="#faqs" className="hover:text-gray-300">FAQs</a>
            <a href="#contact" className="hover:text-gray-300">Contact</a>
          </nav>
        </div>
      )}
    </div>
  );
};

export default MobileHeader;


