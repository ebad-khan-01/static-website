import React from 'react';

function FounderBox({ imageSrc }) {
  return (
    <>
      <div className="flex justify-center items-center relative text-center h-64 md:h-auto mt-10">
        <img
          src={imageSrc}
          alt="Gabriel Moulinou"
          className="h-40 w-40 sm:h-48 sm:w-48 md:h-64 lg:h-80 lg:w-full object-cover rounded-full md:rounded-none"
        />
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] h-32 sm:h-36 md:h-40 text-center border-t-2 border-red-500 p-4 bg-black text-white rounded-lg">
          <h1 className="text-sm sm:text-base md:text-lg font-bold text-white">
            Gabriel Moulinou
            <div className="text-xs sm:text-sm md:text-base text-red-600">Founder</div>
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-gray-300 mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </>
  );
}

export default FounderBox;
