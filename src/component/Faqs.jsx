import React, { useState } from 'react';
import { Collapse } from 'react-collapse';
import vector2 from '/assets/vector2.png'; // Ensure the correct path to the vector image

function Faqs() {
  // State to manage the open/close state of each question
  const [openIndex, setOpenIndex] = useState(null);

  // Toggle function to handle the collapse state of each FAQ item
  const toggleCollapse = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="relative flex flex-col py-12 text-white mx-10 ">
        <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center">FAQs</h1>

        <img
          src={vector2}
          alt="Vector Design"
          className="absolute -left-20 top-[50%] transform -translate-y-1/2 md:w-[50%] w-[100%]"
        />

        <div className="relative w-auto mx-5 space-y-6 z-10 md:mx-28">
          {/* Question 1 */}
          <div className="border-b border-gray-500 pb-4">
            <h2
              className="text-lg font-semibold mb-2 cursor-pointer"
              onClick={() => toggleCollapse(1)}
            >
              01. Can I find the right information faster?
            </h2>
            <div className="flex justify-between items-center">
              <Collapse isOpened={openIndex === 1}>
                <p className="text-gray-300 md:w-[700px] w-96 mb-2">
                  Nulla lectus lectus, suscipit at posuere sit amet, imperdiet sit amet sapien. Donec ornare odio justo, ac efficitur enim fermentum. Nam enim ligula, lacinia vitae venenatis quis, suscipit id augue.
                </p>
              </Collapse>
              <button
                onClick={() => toggleCollapse(1)}
                className="flex justify-center w-10 h-10 bg-red-600 mt-[6rem] md:mt-0 rounded-full font-bold text-2xl text-white focus:outline-none"
              >
                <span className="md:mt-[3px] mt-[2px]">{openIndex === 1 ? '-' : '+'}</span>
              </button>
            </div>
          </div>

          {/* Question 2 */}
          <div className="border-b border-gray-500 pb-4">
            <h2
              className="text-lg font-semibold mb-2 cursor-pointer"
              onClick={() => toggleCollapse(2)}
            >
              02. How to share feature demos and ideas?
            </h2>
            <div className='flex justify-between items-center'>
            <Collapse isOpened={openIndex === 2}>
              <p className="text-gray-300 md:w-[700px] w-96 mb-2">
                Nulla lectus lectus, suscipit at posuere sit amet, imperdiet sit amet sapien.
              </p>
            </Collapse>
            <button
              onClick={() => toggleCollapse(2)}
              className="flex justify-center w-10 h-10 bg-red-600 mt-[6rem] md:mt-0 rounded-full font-bold text-2xl text-white focus:outline-none"
              >
              <span>{openIndex === 2 ? '-' : '+'}</span>
            </button>
              </div>
          </div>

          {/* Question 3 */}
          <div className="border-b border-gray-500 pb-4">
            <h2
              className="text-lg font-semibold mb-2 cursor-pointer"
              onClick={() => toggleCollapse(3)}
            >
              03. How to get insights from users?
            </h2>
            <div className='flex justify-between items-center'>

            <Collapse isOpened={openIndex === 3}>
              <p className="text-gray-300 md:w-[700px] w-96 mb-2">
                Nulla lectus lectus, suscipit at posuere sit amet, imperdiet sit amet sapien.
              </p>
            </Collapse>
            <button
              onClick={() => toggleCollapse(3)}
              className="flex justify-center w-10 h-10 bg-red-600 mt-[6rem] md:mt-0 rounded-full font-bold text-2xl text-white focus:outline-none"
              >
              <span>{openIndex === 3 ? '-' : '+'}</span>
            </button>
              </div>
          </div>

          {/* Question 4 */}
          <div className="border-b border-gray-500 pb-4">
            <h2
              className="text-lg font-semibold mb-2 cursor-pointer"
              onClick={() => toggleCollapse(4)}
            >
              04. Can I develop my website without code?
            </h2>
            <div className='flex justify-between items-center'>

            <Collapse isOpened={openIndex === 4}>
              <p className="text-gray-300 md:w-[700px] w-96 mb-2">
                Nulla lectus lectus, suscipit at posuere sit amet, imperdiet sit amet sapien.
              </p>
            </Collapse>
            <button
              onClick={() => toggleCollapse(4)}
              className="flex justify-center w-10 h-10 bg-red-600 mt-[6rem] md:mt-0 rounded-full font-bold text-2xl text-white focus:outline-none"
              >
              <span>{openIndex === 4 ? '-' : '+'}</span>
            </button>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Faqs;
