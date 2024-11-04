import React from 'react';
import FounderBox from './FounderBox';
import asidephoto from '/assets/asidephoto.png';
import asidephoto1 from '/assets/asidephoto1.png';
import asidephoto2 from '/assets/asidephoto2.png';
import vector2 from '/assets/vector2.png';

function Aside4() {
  return (
    <div className="relative text-white">
      {/* Vector2 Image positioned on the left side */}
      <img
        src={vector2}
        alt="Vector Design"
        className="absolute left-0 top-[60%] transform -translate-y-1/2  w-1/3 md:w-[40%] "
      />

      {/* Content Section */}
      <div className="relative z-10 flex flex-col items-center mt-20 md:mt-40 px-4">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-10 w-full md:w-[550px] text-center">
          Our Team Member is ready to help our Clients!
        </h1>

        {/* Grid of Team Member Boxes */}
        <div className="px-4 md:px-10 lg:mx-28">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-3">
            <FounderBox imageSrc={asidephoto} />
            <FounderBox imageSrc={asidephoto1} />
            <FounderBox imageSrc={asidephoto2} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aside4;
