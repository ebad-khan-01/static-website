import React from 'react'
import dollar1 from "/assets/dollar1.png"
function Box() {
  return (
    <>
      <div className="w-full flex flex-col items-center md:py-12 text-white">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          Upcoming Events
        </h1>

        {/* Image Boxes */}
        <div className="flex flex-wrap justify-center gap-4">

          <div className="relative border-t-4 w-64 rounded-[20px] border-t-red-600">
            <img src={dollar1} alt="Image 4" className="object-cover w-64 h-[308px] rounded-xl" />
            <div  className='text-center absolute top-[268px] left-0 text-white'>
              <p  style={{ background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.97) 0%, rgba(0, 0, 0, 0.5) 99.99%, #000000 100%)' }} className=' bg-black p-2 rounded-lg w-64'>
                Karthik Live
              </p>
            </div>
          </div>

          {/* box-2 */}

          <div className="relative border-t-4 w-64 rounded-[20px] border-t-red-600">
            <img src={dollar1} alt="Image 4" className="object-cover w-64 h-[305px] rounded-xl" />
            <div className=' absolute top-[193px] left-0 text-white'>
              <div style={{ background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 0.01%, #000000 100%)' }} className='bg-black text-lg rounded-lg w-64'>
              <p className='font-bold'>
                Kisiko batana Mat
              </p>
                <span className="text-[12px]">Shilpakala Vedika, HITECH city</span><br />
                <span className="">Location</span><br />
                <span className="font-bold">799 onwards</span>
              </div>
            </div>
          </div>

          {/* box-3 */}
          <div className="relative border-t-4 w-64 rounded-[20px] border-t-red-600">
            <img src={dollar1} alt="Image 4" className="object-cover w-64 h-[300px] rounded-xl" />
            <div className='text-center absolute top-[264px] left-0 text-white'>
              <p className=' bg-gradient-to-b from-black/95 via-black/50 to-black p-2 rounded-lg w-64'>
              “Heeriya” India Tour
              </p>
            </div>
          </div>
          {/* box-4 */}
          <div className="relative border-t-4 w-64 rounded-[20px] border-t-red-600">
            <img src={dollar1} alt="Image 4" className="object-cover w-64 h-[300px] rounded-xl" />
            <div className='text-center absolute top-[264px] left-0 text-white'>
              <p className='bg-gradient-to-b from-black/95 via-black/50 to-black p-2 rounded-lg w-64'>
              Comedy Jam
              </p>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Box

