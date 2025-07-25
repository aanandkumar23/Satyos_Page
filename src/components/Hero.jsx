import React from 'react';
import './fonts.css';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[40vh] sm:min-h-[50vh] md:min-h-[60vh] lg:min-h-[80vh] flex items-start pt-6 lg:pt-28 opacity-90 justify-start bg-cover bg-center px-4 sm:px-6 lg:px-24"
      style={{
        backgroundImage:
          'url("https://static.wixstatic.com/media/086bf6df5f8c4eca8bd85bba2e40de56.jpg/v1/fill/w_1901,h_738,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Wooden%20Floor.jpg")',
        }}
    >
      <div className="absolute  inset-0  pt-6 bg-black/50"></div>

      <div className="relative z-10 font-madefor  text-left pl-4 sm:pl-6 max-w-fit space-y-3">
        <span className="text-white lg:block sm:inline lg:px-4 pb-1 text-xl sm:text-[20.67px] md:text-[41.533px] lg:text-[43px] font-normal leading-snug">
          Welcome to Satyos Solutions, your one-stop
        </span>
        <span className="text-white lg:block sm:inline  lg:px-4 pb-1 text-xl sm:text-xl md:text-4xl lg:text-[43px] font-normal leading-snug">
          destination for innovative mobile and web
        </span>
        <span className="text-white lg:block sm:inline  lg:px-4 pb-1 text-xl sm:text-3xl md:text-4xl lg:text-[43px] font-normal leading-snug">
          application services.
        </span>
      </div>
    </section>
  );
};

export default Hero;
