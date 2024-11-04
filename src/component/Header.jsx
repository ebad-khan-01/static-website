import React from 'react';
import headerlogo from "/assets/headerlogo.png";
import MobileHeader from './MobileHeader';

const Header = ({showMobileHeader}) => {
  return (
    <header className="w-full text-white">
      {/* Desktop Header */}
      <div className="hidden md:flex justify-center items-center py-6">
        <div className="flex w-[80%] items-center space-x-6">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <img className="h-12 w-28" src={headerlogo} alt="Logo" />
          </div>

          {/* Navigation Links */}
          <nav className="flex-1">
            <ul className="flex justify-center space-x-6 text-sm lg:text-base">
              <li><a href="#home" className="text-red-600 hover:text-gray-300">Home</a></li>
              <li><a href="#about" className="hover:text-gray-300">About</a></li>
              <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
              <li><a href="#takenomics" className="hover:text-gray-300">Takenomics</a></li>
              <li><a href="#airdrop" className="hover:text-gray-300">Airdrop</a></li>
              <li><a href="#roadmap" className="hover:text-gray-300">Roadmap</a></li>
              <li><a href="#team" className="hover:text-gray-300">Team</a></li>
              <li><a href="#features" className="hover:text-gray-300">Features</a></li>
              <li><a href="#faqs" className="hover:text-gray-300">FAQs</a></li>
            </ul>
          </nav>

          <div className='mt-5 md:mt-0'>
  <button className="px-5 py-2 text-sm md:text-base border-2 border-red-600 text-white rounded-full capitalize hover:bg-red-600 transition duration-300">
    Register Now
  </button>
</div>

        </div>
      </div>

      {/* Mobile Header */}
      {showMobileHeader && <MobileHeader/>}
    </header>
  );
};

export default Header;
