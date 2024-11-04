import React from 'react';

function Aside3() {
  return (
    <>
<h1 className="flex justify-center items-center h-24 text-2xl md:text-4xl font-bold text-white">
  Staking and Rewards
</h1>
<div className="mx-4 sm:mx-12 md:mx-36 flex flex-col gap-8 
p-2 text-white">
  
  {/* Left Column - Key Benefits */}
  <div className="flex flex-col w-full md:w-[350px] lg:w-[400px] py-2 h-auto items-start border-l-2 border-red-600 pl-4 rounded-sm">
    <h3 className="text-xl md:text-3xl text-red-600 font-bold">Staking Program Details</h3>
    <ol className="mt-2 list-disc ml-5 space-y-2">
      <li>Stake your JAVA tokens to become a partner of Java Token.</li>
      <li>Earn a share of the Gross Gaming Revenue (GGR) as long as your tokens are staked.</li>
    </ol>
  </div>

  {/* Right Column - Additional Benefits */}
  <div className="flex flex-col w-full md:w-[350px] lg:w-[400px] ml-0 md:ml-[200px] lg:ml-[450px] items-start border-l-2 border-red-600 pl-4 h-auto rounded-sm">
    <h3 className="text-xl md:text-3xl text-red-600 font-bold">Benefits of Staking</h3>
    <ol className="mt-2 list-disc ml-5 space-y-2">
      <li>Secure and Transparent Transactions</li>
      <li>Low Fees and Fast Processing</li>
      <li>Generous Rewards and Staking Opportunities</li>
    </ol>
    <button className="md:px-6 md:py-3 px-4 py-2 text-sm font-bold mt-6 border-2 border-red-600 rounded-xl shadow-xl hover:bg-red-600 hover:text-white transition-all">
      Participate in Seed Sale
    </button>
  </div>
</div>


    </>
  );
}

export default Aside3;
