import React, { useState } from "react";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div>
      <section className="pt-6 lg:pt-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-[26px] md:text-[57.03px] font-semibold font-madefor text-black pb-4">Our Contact Details</h1>
          <p className="text-gray-700 font-madefor leading-relaxed mb-4 px-3 lg:px-0 text-[16px]">
            <span className="inline lg:block">Satyos Solutions private limited, located in Noida, IN, offers a wide range of</span>
             <span className="inline lg:block">mobile application services including Flutter, React Native, iOS, Android, </span>
             <span className="inline lg:block">web development, backend, Saas services, and DevOps.Our target</span> 
             <span className="inline lg:block">audience includes individuals seeking top-notch software solutions for</span> 
             <span className="inline lg:block">their websites and web portfolios.</span>
          </p>
          <div className="space-y-1 font-madefor text-gray-700 mb-8">
            <p>Satyos Solutions Pvt Ltd</p>
            <p>B-74, Ground Floor Sector -2 Noida, 201301</p>
            <p>+91 7291919888</p>
          </div>
        </div>
      </section>

      <section
        className=" bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage:
            "url('https://static.wixstatic.com/media/7ab5b2d2cbfb4c70a0b7be3cd488e0df.jpg/v1/fill/w_1664,h_570,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Electronic%20Devices%20on%20Table.jpg')",
          backgroundSize: "90% 90%",
          }}
      >
        <div className="max-w-4xl pt-28 pb-20 lg:pt-24 lg:pb-20 mx-auto px-3">
          <div className="bg-white pt-16 md:p-16 shadow-lg w-[80%] mx-auto sm:w-[80%] px-7 lg:w-full">
            <h2 className="text-[28px] font-semibold text-black mb-8">Contact Us</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-black mb-1">
                    First name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First name"
                    className="w-full px-0 py-3 border-0 border-b border-black focus:border-gray-500 focus:outline-none bg-transparent placeholder-gray-400"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-black mb-1">
                    Last name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last name"
                    className="w-full px-0 py-3 border-0 border-b border-black focus:border-black focus:outline-none bg-transparent placeholder-gray-400"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-black mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    className="w-full px-0 py-3 border-0 border-b border-black focus:border-black focus:outline-none bg-transparent placeholder-gray-400"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-[14px] font-medium text-black mb-4">
                    Phone
                  </label>
                  <PhoneInput
                    country={'ind'}
                    value={formData.phone}
                    onChange={(phone) => setFormData({ ...formData, phone })}
                    inputClass="!w-full !bg-transparent !border-0 !border-b !border-black focus:!border-gray-500 focus:!outline-none"
                    buttonClass="!bg-transparent !border-0"
                    containerClass="!w-full"
                    enableSearch
                  />
                </div>
                  
                  

              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-black mb-1">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  rows={4}
                  required
                  className="w-full px-0 py-3 border-0 border-b border-black focus:border-black focus:outline-none bg-transparent resize-none placeholder-gray-400"
                />
              </div>

              <div className="pt-1">
                <button
                  type="submit"
                  className="w-[55vw] lg:w-full md:w-auto mb-2  lg:px-32 py-1 bg-transparent border cursor-pointer active:bg-black active:text-white
                   border-black text-black rounded-full hover:bg-black hover:text-white transition-colors- font-light"
                >
                  Submit {/*Change made*/}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className=" pt-28 lg:py-60 pb-12 lg:pb-96 bg-white">
        <div className="max-w-7xl mx-auto ">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-[28px] px-7 lg:px-0 md:text-[57.03px] font-semibold font-madefor text-black mb-0 lg:mb-8">Get in Touch</h2>
            </div>

            <div>
              <h3 className="text-[18px] lg:text-[23.76px] px-7 lg:px-0  font-madefor font-semibold text-black mb-4">Send Us a Message</h3>
              <p className="text-black px-7 text-[16px] lg:px-0  font-madefor mb-1 lg:mb-6">Let's Discuss Your Project</p>
              <button className="text-black px-7 text-[16px] lg:px-0 cursor-pointer font-madefor hover:text-black font-normal underline">Submit</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
