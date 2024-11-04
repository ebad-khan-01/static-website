import React from 'react';
import vector2 from '/assets/vector2.png'; // Ensure the correct path to the vector image

function Faqs() {
  return (
    <>
      <div className="relative flex flex-col py-12 text-white mx-10 ">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          FAQs
        </h1>

        {/* Vector Image */}
        <img
          src={vector2}
          alt="Vector Design"
          className="absolute -left-20 top-[50%] transform -translate-y-1/2 md:w-[50%] w-[100%]"
        />

        {/* FAQ Container */}
        <div className="relative w-auto mx-5 space-y-6 z-10 md:mx-28">
          {/* Question 1 */}
          <div className="border-b border-gray-500 pb-4">
            <h2 className="text-lg font-semibold mb-2">
              01. Can I find the right information faster?
            </h2>
            <div className="flex justify-between items-center">
              <p className="text-gray-300 md:w-[700px] w-96 mb-2">
                Nulla lectus lectus, suscipit at posuere sit amet, imperdiet sit amet sapien. Donec ornare odio justo, ac efficitur enim fermentum. Nam enim ligula, lacinia vitae venenatis quis, suscipit id augue.
              </p>
              <button className="flex justify-center w-10 h-10 bg-red-600 mt-[6rem] md:mt-0 rounded-full font-bold text-2xl text-white focus:outline-none">
                <span className='md:mt-[3px] mt-[2px]'>-</span>
              </button>
            </div>
          </div>

          {/* Other Questions */}
          <div className="border-b border-gray-500 pb-4 flex justify-between items-center">
            <h2 className="text-lg font-semibold w-96">
              02. How to share feature demos and ideas?
            </h2>
            <button className="flex justify-center w-10 h-10 border-2 border-white text-red-700 rounded-full font-bold text-2xl focus:outline-none">
              +
            </button>
          </div>

          <div className="border-b border-gray-500 pb-4 flex justify-between items-center">
            <h2 className="text-lg font-semibold w-96">
              03. How to get insights from users?
            </h2>
            <button className="flex justify-center w-10 h-10 border-2 border-white text-red-700 rounded-full font-bold text-2xl focus:outline-none">
              +
            </button>
          </div>

          <div className="border-b border-gray-500 pb-4 flex justify-between items-center">
            <h2 className="text-lg font-semibold w-96">
              04. Can I develop my website without code?
            </h2>
            <button className="flex justify-center w-10 h-10 border-2 border-white text-red-700 rounded-full font-bold text-2xl focus:outline-none">
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Faqs;

