import React from 'react';
import parachute from "/assets/parachute.png";
import vector1 from "/assets/vector1.png";

function Aside() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center py-10">
      {/* Airdrop Campaign Section - Text Section on the Left */}
      <div className="text-white space-y-6 w-full max-w-lg md:ml-10 md:mx-0 ">
        <div className='border-l-2 border-red-600 pl-4 h-30 rounded-sm'>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Airdrop Campaign</h1>
        <p className="text-lg md:text-xl lg:text-2xl font-bold text-red-600">Token Sale Restrictions</p>
        <p className="mt-2 text-gray-300">
          Airdrop tokens can only be sold after the initial distribution phases (Seed Sale and Public Sale).
        </p>
        </div>

      {/* Airdrop Details Section */}
      <div className="space-y-4 md:space-y-6 max-w-md border-l-2 border-red-600 pl-4 rounded-sm">
        <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-red-500">Airdrop Details</h1>
        
        <div>
          <h2 className="text-base md:text-lg font-semibold">Initial Registration:</h2>
          <p className="text-sm md:text-base text-gray-300">Receive 500 JAVA tokens upon registration.</p>
        </div>

        <div>
          <h2 className="text-base md:text-lg font-semibold">Referral Bonus:</h2>
          <p className="text-sm md:text-base text-gray-300">Earn 100 JAVA tokens for every referred friend who registers.</p>
        </div>

        <div>
          <h2 className="text-base md:text-lg font-semibold">Engagement Bonus:</h2>
          <p className="text-sm md:text-base text-gray-300">Participate in platform activities to earn additional tokens.</p>
        </div>
      </div>

        {/* Join Button */}
        <button className="px-6 py-3 mt-4 border-2 border-red-600 rounded-full text-white shadow-lg hover:bg-red-600 transition-colors">
          Join Airdrop Campaign
        </button>
      </div>

      <div className="relative w-full flex justify-center md:justify-end  md:mt-0">
  {/* Vector Image - Positioned to the top-right corner with responsive height */}
  <img src={vector1} alt="" className='absolute top-1/2 w-full right-[200px] md:right-[308px] transform translate-x-1/2 -translate-y-1/2 z-20' />

  {/* Parachute Image - Centered and responsive */}
  <img
    className="w-auto h-[450px] md:h-[650px] object-cover z-10"
    src={parachute}
    alt="Parachute"
  />
</div>

      </div>
  );
}

export default Aside;


