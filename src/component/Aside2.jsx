import React from 'react'
import cofee from "/assets/coffee.png"
import dollar from "/assets/dollar.png"
import milestone from "/assets/milestone.png"
import vector11 from '/assets/Vector11.png'
import vector51 from '/assets/vector51.png'

function Aside2() {
    return (
        <>
        <div className="grid grid-cols-12 text-white md:gap-8 relative">
  {/* Right Column */}
  <div className="col-span-12 md:col-span-6 flex flex-col items-center md:items-start mt-10 md:mt-0 relative">
  <h1 className="text-3xl md:text-5xl font-bold mb-6 md:mt-12 md:ml-40">Roadmap</h1>
  <img src={vector11} alt="Vector Image" className="w-[412px] md:mx-0 md:mb-8" />

  {/* Dollar Image */}
  <img
    src={dollar}
    alt="Dollar Image"
    className="absolute w-[356px] rotate-3 top-60 md:left-10 z-20 object-cover"
  />

  {/* Coffee Image - Positioned to the left */}
  <img
    src={cofee}
    alt="Cup"
    className="absolute h-[400px] w-[538px] rotate-6 top-56 md:-left-20  z-10 object-cover"
  />
</div>


  {/* Left Column */}
  <div className="col-span-12 mx-0 md:col-span-6 md:text-left flex flex-col items-center md:items-start md:mx-24">
    <img
      className="relative top-16 right-0 md:right-40 hidden md:block mb-6"
      src={vector51}
      alt="Vector Image"
    />
    <div className="flex flex-col items-center md:items-start">
      <h1 className="text-2xl md:text-4xl font-bold mb-10 p-4 w-[350px] border-2 border-red-600 rounded-xl shadow-xl hover:bg-red-600 hover:text-white transition-all">
        Project Milestones
      </h1>
      <img className="h-[400px]" src={milestone} alt="Milestone Image" />
    </div>
  </div>
</div>



        </>
    )
}

export default Aside2


{/* <div className="col-span-12 md:col-span-6 text-center md:text-left mx-24">
                
<h1 className="md:text-4xl w-[350px] text-2xl font-bold mb-10 p-2  text-center relative right-48 border-2 border-red-600 rounded-xl shadow-xl hover:bg-red-600 hover:text-white transition-all  ">Project Milestones</h1>
<ul className="space-y-8">
    <li className="flex flex-col items-start md:items-start text-lg relative left-20 ">
        <span className="text-red-500 font-semibold">June 2024:</span>
        <span>Project Planning and Team Assembly</span>
    </li>
    <li className="flex flex-col items-start md:items-start text-lg">
        <span className="text-red-500 font-semibold">July 2024:</span>
        <span>Initial Development and Prototype</span>
    </li>
    <li className="flex flex-col items-start md:items-start text-lg relative right-20">
        <span className="text-red-500 font-semibold">August 2024:</span>
        <span>Tokenomics and Whitepaper Release</span>
    </li>
    <li className="flex flex-col items-start md:items-start text-lg relative right-40">
        <span className="text-red-500 font-semibold">September 2024:</span>
        <span>Private Sale and Public Sale</span>
    </li>
</ul>
</div> */}