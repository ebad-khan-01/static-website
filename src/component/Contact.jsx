import React from 'react';
import map from '/assets/map.png';
import vector1 from "/assets/vector1.png"

function Contact() {
  return (
    <div className="flex justify-center items-center text-white py-8 px-4">
      <div className="grid bg-black border-l-4 border-red-600 rounded-sm w-[950px] max-w-5xl grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-8">
        
        {/* Left Column: Form */}
        <div className="px-4 md:px-6 ">
          <h1 className="text-2xl font-bold mb-6">Contact Us</h1>
          
          <input
            className="w-full bg-transparent border-b border-red-500 text-white outline-none py-2 mb-4"
            type="text"
            placeholder="Name"
          />
          
          <input
            className="w-full bg-transparent border-b border-red-500 text-white outline-none py-2 mb-4"
            type="text"
            placeholder="Email"
          />
          
          <textarea
            className="w-full bg-transparent border-b border-red-500 text-white outline-none py-2 mb-4"
            rows="4"
            placeholder="Message"
          ></textarea>

          <label className="inline-flex items-center mb-4">
            <input type="checkbox" className="mr-2" />
            I would like to receive the newsletter.
          </label>
          
          <div className="pt-4">
            <input
              type="submit"
              value="Send Message"
              className="w-full md:w-32 border-2 border-red-500 px-2 py-2 rounded-full text-white font-semibold cursor-pointer hover:bg-red-600 transition-colors"
            />
          </div>
        </div>

        {/* Right Column: Contact Details & Map */}
        <div className="max-w-md p-4 md:p-6 text-white space-y-4">
          <p className="text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>

          <div className="flex justify-center">
            <img src={map} alt="Map" className="w-full h-40 md:h-48 object-cover rounded-lg shadow-sm" />
          </div>

          <div className="space-y-2 relative w-full">
            <div className="flex items-center space-x-2">
              <i className="fas fa-map-marker-alt"></i>
              <span>NYC, United States</span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="fas fa-phone-alt"></i>
              <span>000111222333</span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="fas fa-envelope"></i>
              <span>somebody@gmail.com</span>
            </div>
          <img src={vector1} alt="" className='absolute top-[60%] md:w-[600px] md:h-[900px] right-[95px] md:right-[-23px] transform translate-x-1/2 -translate-y-1/2 z-20' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
