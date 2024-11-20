import React, { useState } from "react";
import { Collapse } from "react-collapse";
import vector2 from "/assets/vector2.png"; // Ensure the correct path to the vector image

function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleCollapse = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative flex flex-col py-12 px-24 text-white">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-center">
        FAQs
      </h1>

      <img
        src={vector2}
        alt="Vector Design"
        className="absolute -left-16 top-[50%] transform -translate-y-1/2 md:w-[50%] w-[70%] opacity-50 pointer-events-none"
      />

      <div className="relative space-y-6 z-10">
        {/* FAQ Item */}
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border-b border-gray-500 pb-4"
          >
            <h2
              className="text-lg sm:text-xl font-semibold mb-2 cursor-pointer"
              onClick={() => toggleCollapse(index)}
            >
              {item.question}
            </h2>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <Collapse isOpened={openIndex === index}>
                <p className="text-gray-300 text-sm sm:text-base md:w-[700px] w-full mb-2">
                  {item.answer}
                </p>
              </Collapse>
              <button
                onClick={() => toggleCollapse(index)}
                className="flex justify-center items-center w-10 h-10 bg-red-600 mt-4 md:mt-0 rounded-full font-bold text-2xl text-white focus:outline-none"
              >
                <span>{openIndex === index ? "-" : "+"}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const faqData = [
  {
    question: "01. Can I find the right information faster?",
    answer:
      "Nulla lectus lectus, suscipit at posuere sit amet, imperdiet sit amet sapien. Donec ornare odio justo, ac efficitur enim fermentum. Nam enim ligula, lacinia vitae venenatis quis, suscipit id augue.",
  },
  {
    question: "02. How to share feature demos and ideas?",
    answer:
      "Nulla lectus lectus, suscipit at posuere sit amet, imperdiet sit amet sapien.",
  },
  {
    question: "03. How to get insights from users?",
    answer:
      "Nulla lectus lectus, suscipit at posuere sit amet, imperdiet sit amet sapien.",
  },
  {
    question: "04. Can I develop my website without code?",
    answer:
      "Nulla lectus lectus, suscipit at posuere sit amet, imperdiet sit amet sapien.",
  },
];

export default Faqs;
