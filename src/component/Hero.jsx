import React from 'react';
import smoke from "/assets/smoke.png"
import beans from "/assets/cofeebeans.png"
import dollar from "/assets/dollar.png"
import vector11 from "/assets/Vector11.png"
function Hero() {
  return (
    <>


{/* First Section - About Java Token */}
<div className="container mx-auto px-4 md:px-8 lg:px-32 mt-10 md:mt-20 text-white">
  
  {/* First Section - About Java Token */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
    
    {/* Left Column */}
    <div className="border-l-2 h-auto md:h-[380px] border-red-600 pl-4 md:pl-6 rounded-xl">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">About Java Token</h1>
      <p className="w-full md:w-96 mt-3 text-base md:text-lg">
        Welcome to Java Token, the next-generation decentralized online casino and sportsbook platform. Our mission is to revolutionize the online gambling industry by leveraging the transparency, security, and fairness of blockchain technology.
      </p>
      <h3 className="text-xl md:text-2xl lg:text-3xl mt-5 text-red-600 font-bold">Key Benefits</h3>
      <ul className="mt-2 list-disc ml-5 space-y-2 text-base md:text-lg">
        <li>Secure and Transparent Transactions</li>
        <li>Low Fees and Fast Processing</li>
        <li>Generous Rewards and Staking Opportunities</li>
      </ul>
    </div>

    {/* Right Column - Smoke Image */}
    <div className="relative w-full flex justify-center md:justify-end items-center">
      <img
        className="w-[100px] md:w-[150px] ml-0 h-[300px] md:h-[400px] mt-36 mr-16 md:mt-0 object-cover transform scale-y-[-1] scale-x-[-1] rotate-90 absolute md:right-0"
        src={smoke}
        alt="Smoke"
      />
    </div>
  </div>

  {/* Second Section - Tokenomics */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    
    {/* Left Column - Dollar and Beans Images */}
    <div className="relative w-full h-64 md:h-96">
      {/* Background image */}
      <img className="absolute w-64 md:w-[400px] top-12 left-16 md:top-0 md:left-0 object-cover z-0" src={beans} alt="Beans" />
      
      {/* Foreground image */}
      <img className="absolute w-56 md:w-96 md:top-10 top-16 left-16 md:left-0 z-10" src={dollar} alt="Dollar" />

      {/* Vector image centered in the container */}
      <img className="absolute top-1/2 w-full md:w-auto left-20 md:left-0 transform -translate-x-1/2 -translate-y-1/2 z-20" src={vector11} alt="Vector" />
    </div>

    {/* Right Column - Tokenomics Information */}
    <div className="w-full md:ml-8 lg:ml-36 mt-6 md:mt-10">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Tokenomics</h1>
      <p className="bg-red-500 px-2 py-1 rounded mb-2 inline-block">
        Total Supply: 1,000,000,000 JAVA tokens
      </p>
      <div className="space-y-2 text-base md:text-lg">
        <p>Seed Sale Price: $0.01 per JAVA token</p>
        <p>Seed Sale Allocation: 20%</p>
        <p>Fundraising Target: $2,000,000</p>
      </div>
      <button className="px-4 py-2 md:px-6 md:py-3 text-sm md:text-base font-bold mt-6 border-2 border-red-600 rounded-xl shadow-xl hover:bg-red-600 hover:text-white transition-all">
        Participate in Seed Sale
      </button>
    </div>
  </div>
</div>


  </>
  );
}

export default Hero;
