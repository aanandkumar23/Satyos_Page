import React, { useEffect, useState } from 'react';

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
    <section id="about" className="py-20 bg-white">

      <h2 className="text-[28px] md:text-[107px] font-semibold  w-full pl-12">
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
        

        <h3 className="text-3xl md:text-4xl lg:text-[57px] font-semibold text-black pt-52 mt-8 mb-4">Our Services</h3>
        <p className="text-lg py-4 text-black lg:text-[16px] max-w-4xl mx-auto">
          From mobile applications to web development, backend services, and DevOps solutions, we <br />
          offer a comprehensive range of software services to meet your needs.
        </p>
      </div>

      <div className="w-full  grid md:grid-cols-3 gap-0 h-[320px]">
        
        <div style={{ backgroundColor: '#C2C2C2' }} className="text-black">
          <div className=" pt-20 text-center border-r border-gray-200">
          <h3 className=" font-arial text-[23px] font-semibold text-black mb-4">Web Development</h3>
          <p className="text-black leading-relaxed text-lg">
            We specialize in creating responsive and <br/>
            dynamic websites that elevate your online <br/>
            presence and engage your audience <br/>
             effectively.
          </p>
          </div>
        </div>

        <div style={{ backgroundColor: '#F0F0F0' }} className="text-black">
          <div className=" pt-20 text-center border-r border-gray-200">
          <h3 className="text-[23px] font-semibold text-black mb-4">Backend Services</h3>
          <p className="text-black leading-relaxed text-lg">
            Our backend services focus on robust <br/>
            architectures and scalable solutions to <br/>
            supportyour applications' functionalities.
          </p>
          </div>
        </div>
        <div style={{ backgroundColor: '#C2C2C2' }} className="text-black">
          <div className="pt-20 px-10 text-center">
          <h3 className="text-[23px] font-semibold text-black mb-4">DevOps Solutions</h3>
          <p className="text-black leading-relaxed text-lg">
            With our DevOps expertise, we streamline <br/>
            your development processes and ensure <br/>
            continuous delivery for efficient software <br/>
             deployment.
          </p>
        </div>
      </div>
      </div>
      <div style={{ backgroundColor: '#FFFFFF' }} className="text-black">
        <div className="pt-20 pb-40 max-w-7xl px-20 mx-auto sm:px-6 lg:px-8">
        <h2 className="text-[48px] font-semibold text-center text-gray-900 mb-12">Client Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <p className="text-black mb-4">
              The team at Satyos Solutions is <br/>
              highly skilled and dedicated to <br/>
              delivering top-quality results.
            </p>
            <h4 className="text-lg pt-10 font-semibold text-gray-900">Ajay Kamath</h4>
            <p className="text-sm text-black">Founder, Brick Tree</p>
          </div>
          <div className="text-center">
            <p className="text-black mb-4">
              Working with Satyos Solutions has <br/>
              been a game-changer for our <br/>
              business growth.
            </p>
            <h4 className="text-lg pt-10  font-semibold text-black">David Brown</h4>
            <p className="text-sm text-black">Executive Manager, JSB Group</p>
          </div>
          <div className="text-center">
            <p className="text-black mb-4"> 
              Their attention to detail and <br/>
              commitment to excellence set <br/>
              Satyos Solutions apart.
            </p>
            <h4 className="text-lg pt-10 font-semibold text-black">Rajan Malik</h4>
            <p className="text-sm text-black">Nue Fabrics</p>
          </div>
          <div className="text-center">
            <p className="text-black mb-4">
              Satyos Solutions is our go-to <br/>
              partner for all our software <br/>
              development needs.
            </p>
            <h4 className="text-lg pt-10  font-semibold text-black">Deep Parmar</h4>
            <p className="text-sm text-black">Digi Finance</p>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default About;
