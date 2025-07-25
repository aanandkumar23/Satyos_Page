import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";



const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('about');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-4 sm:py-6  lg:py-24  bg-white">

      <h2 className="  font-madefor text-[24px] md:text-[60px] text-center lg:text-[100px] font-semibold whitespace-nowrap  w-full ">
          <span className="text-black">DISCOVE</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-950 to-purple-300">
            R OUR EXP
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-900">
            ER
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-900">
            ERTI
          </span>
          <span className="text-black">SE</span>
        </h2>
     
      <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8 text-center mb-16">
        

        <h3 className="font-madefor text-[28px] md:text-4xl lg:text-[57.03px] font-semibold text-black pt-8 lg:pt-52 mt-4 mb-4">Our Services</h3>
        <p className="font-madefor px-6 sm:text-center text-[16px] pt-0 lg:py-4 text-gray-800 lg:text-[16px] max-w-4xl mx-auto">
         <span className="inline lg:block"> From mobile applications to web development, backend services, and DevOps solutions, we </span>
         <span className="inline lg:block">offer a comprehensive range of software services to meet your needs.</span>
        </p>
      </div>

      <div className="w-full  grid md:grid-cols-3 gap-0 min-h-[320px]">
        
        <div style={{ backgroundColor: '#C2C2C2' }} className="text-black">
          <div className=" pt-20 pb-16 px-10 text-center border-r border-gray-200">
          <h3 className=" font-madefor text-[23.76px] font-semibold text-black mb-4">Web Development</h3>
          <p className="font-madefor text-gray-900 leading-relaxed text-[16px] font-normal">
          <span className="inline lg:block">We specialize in creating responsive and</span>  
          <span className="inline lg:block"> dynamic websites that elevate your online</span>  
          <span className="inline lg:block"> presence and engage your audience</span> 
          <span className="inline lg:block"> effectively.</span> 
          </p>
          </div>
        </div>

        <div style={{ backgroundColor: '#F0F0F0' }} className="text-black">
          <div className=" pt-20 pb-16 px-10 text-center border-r border-gray-200">
          <h3 className="font-madefor text-[23.76px] font-semibold text-black mb-4">Backend Services</h3>
          <p className="font-madefor text-gray-900 leading-relaxed text-[16px] font-normal">
            <span className="inline lg:block">Our backend services focus on robust</span> 
            <span className="inline lg:block">architectures and scalable solutions to</span> 
            <span className="inline lg:block">supportyour applications' functionalities.</span>
          </p>
          </div>
        </div>
        <div style={{ backgroundColor: '#C2C2C2' }} className="text-black">
          <div className="pt-20 pb-16 px-10 text-center">
          <h3 className="font-madefor text-[23.76px] font-semibold text-black mb-4">DevOps Solutions</h3>
          <p className="font-madefor text-gray-900 leading-relaxed text-[16px] font-normal">
            <span className="inline lg:block">With our DevOps expertise, we streamline</span>
            <span className="inline lg:block">your development processes and ensure</span> 
            <span className="inline lg:block">continuous delivery for efficient software</span> 
             <span className="inline lg:block">deployment.</span>
          </p>
        </div>
      </div>
      </div>
      <div style={{ backgroundColor: '#FFFFFF' }} className="text-black">
        <div className="pt-20 pb-0 lg:pb-40 max-w-7xl px-4 mx-auto sm:px-6 lg:px-8">
        <h2 className="text-[26px] lg:text-[57.03px] font-madefor font-semibold text-center text-gray-900 mb-3 lg:mb-12">Client Testimonials</h2>
        <div className="hidden lg:flex">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 justify-evenly">
          <div className="text-center">
            <p className="text-gray-700 lg:mb-4 font-madefor text-[16px]">
              <span className="inline lg:block"> The team at Satyos Solutions is</span> 
              <span className="inline lg:block">highly skilled and dedicated to </span>
              <span className="inline lg:block">delivering top-quality results.</span>
            </p>
            <h4 className="text-[16px] font-madefor lg:pt-10 lg:pb-2 font-semibold text-gray-900">Ajay Kamath</h4>
            <p className="text-[14px] font-madefor text-gray-700 ">Founder, Brick Tree</p>
          </div>
          <div className="text-center">
            <p className="text-gray-700  lg:mb-4 font-madefor text-[16px]">
              <span className="inline lg:block">Working with Satyos Solutions has</span> 
              <span className="inline lg:block">been a game-changer for our</span> 
              <span className="inline lg:block">business growth.</span>
            </p>
            <h4 className="text-[16px] font-madefor lg:pt-10 lg:pb-2 font-semibold text-gray-900">David Brown</h4>
            <p className="text-[14px] font-madefor text-gray-700 ">Executive Manager, JSB Group</p>
          </div>
          <div className="text-center">
            <p className="text-gray-700  lg:mb-4 font-madefor text-[16px]"> 
              <span className="inline lg:block">Their attention to detail and</span> 
              <span className="inline lg:block">commitment to excellence set</span> 
              <span className="inline lg:block">Satyos Solutions apart.</span>
            </p>
            <h4 className="text-[16px] font-madefor lg:pt-10 lg:pb-2 font-semibold text-gray-900">Rajan Malik</h4>
            <p className="text-[14px] font-madefor text-gray-700 ">Nue Fabrics</p>
          </div>
          <div className="text-center">
            <p className="text-gray-700  lg:mb-4 font-madefor text-[16px]">
              <span className="inline lg:block">Satyos Solutions is our go-to</span> 
              <span className="inline lg:block">partner for all our software</span> 
              <span className="inline lg:block">development needs.</span>
            </p>
            <h4 className="text-[16px] font-madefor lg:pt-10 lg:pb-2 font-semibold text-gray-900">Deep Parmar</h4>
            <p className="text-[14px] font-madefor text-gray-700 ">Digi Finance</p>
          </div>
          </div>
          </div>
          <div className="relative md:hidden">
          <div className="pb-3">
          <div className="absolute right-10 top-2 z-10 mb-4 flex gap-1">
            <button className="swiper-button-next !bg-white text-blue-500 w-6 h-6 flex items-center justify-center rounded-full">
              <FaChevronRight className="text-2xl" />
            </button>
    </div>
    <div className="absolute right-20 top-2 z-10 mb-4 flex gap-1">
      <button className="swiper-button-prev !bg-white text-blue-500 w-6 h-6 flex items-center justify-center rounded-full">
        <FaChevronLeft className="text-2xl" />
      </button>
    </div>
        </div>
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          spaceBetween={20}
          slidesPerView={1}
        >     
        {[
      {
        text: "The team at Satyos Solutions is highly skilled and dedicated to delivering top-quality results.",
        name: "Ajay Kamath",
        title: "Founder, Brick Tree",
      },
      {
        text: "Working with Satyos Solutions has been a game-changer for our business growth.",
        name: "David Brown",
        title: "Executive Manager, JSB Group",
      },
      {
        text: "Their attention to detail and commitment to excellence set Satyos Solutions apart.",
        name: "Rajan Malik",
        title: "Nue Fabrics",
      },
      {
        text: "Satyos Solutions is our go-to partner for all our software development needs.",
        name: "Deep Parmar",
        title: "Digi Finance",
      },
      ].map((testimonial, index) => (
        <SwiperSlide key={index}>
          <div className="text-center px-4 py-6">
            <p className="text-gray-900 mt-4 mb-4 font-madefor text-[16px]">{testimonial.text}</p>
            <h4 className="text-[16px] font-madefor pt-2 font-semibold text-gray-900">{testimonial.name}</h4>
            <p className="text-[14px] font-madefor text-gray-900">{testimonial.title}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
    </div>
    </div>
  </section>
    );
};

export default About;
