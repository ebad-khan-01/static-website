import React from 'react';
import coffee from '/assets/coffee.png';
import dollar from '/assets/dollar.png';
import vector1 from "/assets/vector1.png";

function Main() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 text-white items-center md:p-8">
      {/* Left Column */}
      <div className="col-span-1 md:col-span-6 text-center md:text-left md:ml-28 ">
        <h1 className="text-red-600 text-xl md:text-2xl">Join the Future of Online</h1>
        <p className="text-lg md:text-3xl lg:text-5xl font-bold mt-2">JAVAting with 
          <div className="mt-2">JAVA Token</div>
        </p>
        <p className="mt-4 w-10/12 md:w-8/12 lg:w-[360px] mx-auto md:mx-0">
          Decentralized Casino and Sportsbook Platform Built on Blockchain Technology
        </p>
        <button className="md:px-8 lg:px-10 p-2 border-2 rounded-full font-bold mt-6 border-red-600 shadow-xl hover:bg-red-600 transition-all">
          Earn Free JAVA Tokens
        </button>
      </div>

      {/* Right Column */}
      <div className="col-span-1 md:col-span-6 flex justify-center md:justify-end mt-8 md:mt-0 mx-auto md:mr-10 xl:mr-20">
        <div className="relative flex justify-center items-center">
          <img src={dollar} alt="Dollar Image" className="h-[200px] w-[300px] md:h-[250px] md:w-[400px] lg:h-[300px] lg:w-[500px]" />
          <img src={coffee} alt="Cup" className="h-[250px] w-[400px] md:h-[300px] md:w-[600px] lg:h-[416px] lg:w-[832px] absolute top-8 left-2 md:top-12 md:left-4 object-cover" />
          <img src={vector1} alt="" className="absolute top-1/2 w-[200px] md:w-auto lg:w-[400px] xl:w-[450px] right-[42px] md:right-[100px] lg:right-[113px] transform translate-x-1/2 -translate-y-1/2 z-20" />
        </div>
      </div>
    </div>
  );
}

export default Main;
