import React from 'react'


function FounderBox({imageSrc}) {
  return (
    <>
     <div className="flex justify-center items-center relative text-center h-64  md:h-auto mt-10 ">
 
  <img
    src={imageSrc}
    alt="Gabriel Moulinou"
    className="h-48 w-48 sm:h-56 sm:w-48 md:h-72 lg:h-96 md:w-full object-cover"
  />
  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 sm:[w-50%] md:w-[100%] lg:w-[85%] h-28 sm:h-32 md:h-36 text-center border-t-2 border-red-500 p-3 sm:p-4 bg-black text-white rounded-lg">
    <h1 className="text-base sm:text-lg md:text-xl font-bold text-white">
      Gabriel Moulinou
      <div className="text-xs sm:text-sm md:text-base lg:text-lg text-red-600">Founder</div>
    </h1>
    <p className="text-xs sm:text-sm md:text-base text-gray-300">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </p>
  </div>
</div>

    </>
  )
}

export default FounderBox