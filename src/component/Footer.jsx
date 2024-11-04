import React from 'react'

function Footer() {
  return (
    <div className="w-full max-w-[950px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0 border-l-4 border-red-600 bg-black p-6 md:p-8 lg:p-10 text-white">
      <div className="text-center md:text-left">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
          Stay updated with us
        </h1>
      </div>

      <div className="flex justify-center md:justify-start items-center w-full relative">
        <input
          className="w-full bg-transparent border-b-2 border-white placeholder-gray-400 p-2 pr-16 outline-none transition-all duration-300"
          type="email"
          placeholder="Your email"
        />
        <button className="absolute right-2 md:right-0 transform -translate-y-1/2 px-6 py-1 border-2 border-red-600 rounded-full text-white font-semibold transition-all duration-300 hover:bg-red-600">
          Subscribe
        </button>
      </div>
    </div>
  )
}

export default Footer
