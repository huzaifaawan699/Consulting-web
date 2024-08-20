import React from 'react';
import B from '../assets/home3.png';

const Home = () => {
  return (
    <div
      className="relative flex flex-col md:flex-row items-center justify-center min-h-screen p-6 md:p-10 bg-gradient-to-r from-teal-100 to-teal-300"
      id="home"
      // style={{
      //   backgroundImage: `url('../assets/bg.jpg')`, // Replace with your background image path
      //   backgroundSize: 'cover',
      //   backgroundPosition: 'center',
      //   backgroundAttachment: 'fixed',
      // }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-white "></div>
      
      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full">
        {/* Content on the Left */}
        <div className="w-full md:w-1/2 px-4 md:px-8 lg:px-16 mb-8 md:mb-0 animate-fade-in-left">
          <h1 className="text-xl md:text-3xl lg:text-4xl font-extrabold text-gray-700 mb-4">
            Elevate Your Business with Our Consulting Services
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
            Explore personalized solutions designed to propel your business forward. Our expert team is dedicated to delivering results that matter.
          </p>
        </div>
        
        {/* Image on the Right */}
        <div className="w-full md:w-1/2 flex justify-center animate-zoom-in">
          <img
            src={B}
            alt="Transparent Businessman"
            className="w-full h-auto object-contain rounded-lg shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
