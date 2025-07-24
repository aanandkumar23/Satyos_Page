import React, { useRef } from "react";
{/*import { motion, useScroll, useTransform } from "framer-motion";*/}

const AboutPage = () => {
  const ref = useRef(null);
  {/*const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });*/}

  return (
    <div className="bg-white text-black font-sans">
      
      <section className="relative pb-8 lg:pb-16">
        <div className="max-w-7xl mx-auto pt-20 px-6">
          
          <div className="bg-gray-100  shadow-lg h-[60vh] lg:min-h-[400px] w-[80vw] lg:max-w-xl mx-auto relative z-10">
            <div style={{ backgroundColor: '#F0F0F0' }} className="font-madefor">

            <h2 className="text-[24px] md:text-[42.77px] font-madefor pt-10 lg:pt-14 font-semibold mb-4 lg:mb-6 text-center">
              About Satyos <br /> Solutions
            </h2>
            <p className="text-center text-[14px] px-12 lg:px-0 md:text-[16px] text-gray-800 font-madefor leading-relaxed">
              <span className="inline lg:block">Satyos Solutions private limited is a leading provider of </span>
              <span className="inline lg:block">mobile application services, specializing in Flutter, React</span>
              <span className="inline lg:block">Native, iOS, Android, web, backend, SaaS services, and</span>
              <span className="inline lg:block">DevOps.Our goal is to showcase our portfolios and </span>
              <span className="inline lg:block">company services to individuals looking to develop websites</span>
              <span className="inline lg:block">and applications.</span>
            </p>
          </div>
          </div>
        </div>
       
        <div className="absolute inset-0 z-0 pb-1 lg:pb-10">
          <img
            src="https://static.wixstatic.com/media/11062b_ba5db49a19c544a3894450b264f18f60~mv2.jpg/v1/fill/w_951,h_691,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Mobile%20Web%20Design.jpg"
            alt="Background"
            className="w-1/2  min-h-[80vh] ml-auto object-cover"
          />
        </div>
      </section>

      <section className="grid md:grid-cols-2 items-center gap-28 pb-2 lg:py-20 max-w-7xl px-3 lg:mx-24">
  <div className="relative w-full  mt-16 mb-10  h-32 md:h-48">
    <h3 className="absolute inset-0 py-28 flex items-center justify-center font-madefor text-white text-[26px] lg:text-[57.03px] font-bold z-10">
      Our Mission
    </h3>

    <img
      src="https://static.wixstatic.com/media/11062b_e810179068ca4d49a050ee31eec103b6~mv2.jpg/v1/fill/w_773,h_182,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Electronic%20Gadgets.jpg"
      alt="Our Mission"
      className="h-[35vh] w-[95vw] lg:w-full lg:h-full object-cover px-3 lg:px-0"
    />    
  </div>
   
  <div className="text-black"> 
    <p className="text-black text-[16px] font-madefor leading-relaxed pl-3 pr-14 lg:px-0 py-0 text-start">
      <span className="inline lg:block">At Satyos Solutions, we are dedicated to delivering top-notch</span>
      <span className="inline lg:block">mobile application services and software solutions tailored to our</span> 
      <span className="inline lg:block">clients' needs.Our mission is to empower businesses and </span>
      <span className="inline lg:block">individuals with cutting-edgetechnology, innovative solutions, and </span>
      <span className="inline lg:block">exceptional customer service.</span>
    </p>
  </div>
</section>

      <section className="py-6 lg:py-10 max-w-full px-5 lg:ml-24">
        <h3 className="text-[22px] lg:text-[42.77px] font-madefor py-10 lg:py-0 font-normal mb-20 lg:mb-8">
          <span className="inline lg:block">Our vision is to be the go-to software company for those seeking </span>
          <span className="inline lg:block">the best-in-class mobile applications and web portfolios.We aim to</span>
          <span className="inline lg:block">revolutionize the software industry with our SaaS services and</span>
          <span className="inline lg:block">proprietary products.</span>
        </h3>
      </section>

      

      <div style={{ backgroundColor: '#F0F0F0' }} className="text-black">
        <section className="py-20 lg:py-44 text-center">
          <div className="text-center border-r border-gray-200">
            <p className="text-black text-[16px] px-14 lg:px-0 font-madefor max-w-5xl mx-auto">
              With a focus on quality, innovation, and customer satisfaction,
              we strive to set new standards in the software development realm..
            </p>
          </div>
          </section>
        </div>

      
        
      


{/*
      <motion.section
        className="py-24 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-7xl md:text-7xl font-semibold">
          Introducing Ulivv – Our <br /> Flagship Proptech <br /> Product
        </h2>
      </motion.section>

      <section
        ref={ref}
        className="relative min-h-[300vh] py-32 overflow-hidden bg-gradient-to-br from-purple-700 via-pink-500 to-orange-300"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="https://static.wixstatic.com/media/11062b_a2f321b297dc45d5ab4faa470fe1c9daf000.jpg/v1/fill/w_875,h_1440,al_c,q_85,usm_0.33_1.00_0.00,enc_avif,quality_auto/11062b_a2f321b297dc45d5ab4faa470fe1c9daf000.jpg"
            alt="Animated Background"
            className="w-full h-full object-cover opacity-30"
          />
        </div>

        <div className="sticky top-[30%] z-10 h-[600px] flex items-end justify-center">
          {[0, 1, 2].map((i) => {
            const delay = i * 0.5;
            const x = useTransform(scrollYProgress, [0 + delay, 0.2], [400, 0]);
            const y = useTransform(scrollYProgress, [0 + delay, 0.2], [400, i * -180]);
            const rotate = useTransform(scrollYProgress, [0 + delay, 1], [35, 0]);

            return (
              <motion.div
                key={i}
                className="absolute w-[450px] md:w-[450px] h-[300px] md:h-[300px] bg-white shadow-xl rounded-xl p-6"
                style={{ x, y, rotate, zIndex: 3 - i }}
              >
                {i === 0 && (
                  <>
                    <h3 className="text-2xl font-bold mb-2">Property Management Software</h3>
                    <p className="text-sm text-gray-700">
                      Ulivv is our in-house developed proptech<br />
                      platform designed to simplify and streamline <br />
                      the way co-living spaces, PGs, and rental <br />
                      properties are managed. Built with real-<br />
                      world needs in mind, Ulivv brings together<br />
                      property owners, tenants, and staff under one <br />
                      powerful, easy-to-use ecosystem.
                    </p>
                  </>
                )}
                {i === 1 && (
                  <>
                    <h3 className="text-2xl font-bold mb-2">Features</h3>
                    <ul className="text-sm text-gray-700 list-disc pl-4">
                      <li>Tenant Management – Onboarding, KYC, rent collection, and support in one place</li>
                      <li>Property Operations – Automate maintenance, complaints, staff duties, and expenses</li>
                    </ul>
                  </>
                )}
                {i === 2 && (
                  <>
                    <h3 className="text-2xl font-bold mb-2">Services</h3>
                    <p className="text-sm text-gray-700">
                      Smart Billing – Track rent, service charges, <br />
                      guest stays, and staff salaries seamlessly. <br />
                      Owner Dashboard – Real-time visibility into <br />
                      your properties' performance..
                    </p>
                  </>
                )}
              </motion.div>
            );
          })}
        </div>
      </section>

      <motion.section
        className="w-full py-24 px-4 flex justify-center items-center bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 rounded-t-3xl"
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "100%", opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        viewport={{ once: false }}
      >
        <motion.h1
          className="text-white text-6xl font-bold whitespace-nowrap overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <motion.span
            initial={{ width: "0ch" }}
            animate={{ width: "11ch" }}
            transition={{
              delay: 0.6,
              duration: 1.2,
              ease: "easeInOut"
            }}
            style={{ display: "inline-block", overflow: "hidden", whiteSpace: "nowrap" }}
          >
            Coming Soon
          </motion.span>
        </motion.h1>
      </motion.section>
      */}

    </div>
  );
};

export default AboutPage;