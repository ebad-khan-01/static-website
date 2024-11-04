import React from 'react'
import game from "/assets/game.png"
import vector1 from "/assets/vector1.png"
function Aside5() {
  return (
    <>
   <div className="grid grid-cols-1 place-items-center pt-10  text-white md:grid-cols-2 gap-6">
  {/* Left Column - About Java Token */}
  <div>
    <h1 className="text-2xl md:text-4xl md:mb-12 font-bold ml-7">Platform Features</h1>
    <div className='border-l-2 border-red-600 pl-4 h-30 rounded-sm'>
      <div className='m-2'>
        <h2 className="text-xl md:text-4xl mt-2 w-60 mb-5 text-red-600 font-bold">Casino Games</h2>
        <p className='w-[330px]'>
          A wide range of casino games including slots, poker, blackjack, roulette, and more, all provably fair using blockchain technology.
        </p>
      </div>
    </div>

    {/* Right Column - Tokenomics */}
    <div className='border-l-2 border-red-600 pl-4 h-30 rounded-sm mt-5'>
      <div className='m-2'>
        <h3 className="text-xl md:text-3xl mb-5 text-red-600 font-bold">Sportsbook</h3>
        <p className='w-[330px]'>
          Comprehensive sportsbook offering betting options on a wide range of sports and events, with real-time odds and live betting features.
        </p>
      </div>
    </div>
  </div>

  {/* Responsive Image */}
  <div className='relative'>
  <img src={vector1} alt="" className="absolute top-1/2 w-[200px] md:w-[308px] right-[50px] md:right-[100px] transform translate-x-1/2 -translate-y-1/2 z-20" />
  <div className='mt-16'>
    <img
      className='h-auto w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-cover'
      src={game}
      alt="Game"
      />
      </div>
  </div>
</div>


    </>
  )
}

export default Aside5