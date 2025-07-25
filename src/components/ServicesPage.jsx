import { div } from "framer-motion/client";
import React, { useState } from "react";
import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaRegCopy } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";

const ServicesPage = () => {
  const [activeTab, setActiveTab] = useState("General");
  const [expandedFAQ, setExpandedFAQ] = useState(0);
  
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const faqs = {
    General: [
      {
        question: "What kind of software services do you offer?",
        answer:
          "We offer end-to-end product development services including UI/UX design, mobile app (iOS/Android), web apps, backend systems, and deployment — focused on PropTech, Real Estate, and Co-living solutions.",
        showSocial: true,
      },
      {
        question: "Do you provide ready-made software or build custom solutions?",
        answer:(<div>
          Both. We have plug-and-play SaaS tools for common use-cases, but we also build fully customized platforms as per your business needs and scale.
        </div> ),
        showSocial: true,
      },
      {
        question: "Which industries do you cater to?",
        answer:
          "Primarily PropTech, Real Estate, Mobile App Development, Rental Management, Web Development, Facility Services, and Urban Mobility. But we’re open to other sectors as well.",
        showSocial: true,
      },
    ],
    "Services Related": [
      {
        question: "Are your solutions made in India?",
        answer:
          "Yes, all development, support, and maintenance is 100% India-based. We understand Indian market-specific challenges deeply.",
        showSocial: true,
      },
      {
        question: "What is your typical project timeline?",
        answer: (
        <div>It depends on complexity. MVPs take 3–6 weeks. Full-scale SaaS platforms can range between 2–6 months.</div>),    
        showSocial: true,
      },
      {
        question: "What engagement models do you offer?",
        answer: (
          <div>
            <p className="font-semibold mb-2">We offer:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Fixed Price</li>
              <li>Monthly Retainers</li>
              <li>Dedicated Development Teams</li>
              <li>Build-Operate-Transfer (BOT) model (for startups)</li>
            </ul>
          </div>
        ),
        showSocial: true,
      },
    ],
  };

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? -1 : index);
  };

  const SocialIcons = () => {
    const handleCopyLink = () => {
      const link = window.location.href;
      navigator.clipboard.writeText(link);
      alert("Link copied to clipboard!");
    };
      return (
      <div className="flex space-x-3 mt-4">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-100"
        >
          <FaFacebookF size={16} />
        </a>
        <a
          href="https://x.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200"
        >
          <FaXTwitter size={16} />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-200"
        >
          <FaLinkedinIn size={16} />
        </a>
        <button
          onClick={handleCopyLink}
          className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-green-100"
        >
          <FaRegCopy size={16} />
        </button>
      </div>
    );
  };

  const stories = [
    {
      title: "Project Showcase",
      description:
        "Explore our client projects to gain insights into our diverse portfolio. From mobile apps to SaaS platforms, we have a proven track record of delivering high-quality software solutions tailored to our clients' requirements.",
      image:
        "https://static.wixstatic.com/media/11062b_df307ce24d314843a9cc3d5c0850e4e0~mv2.jpg/v1/fill/w_831,h_265,fp_0.40_0.40,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Startup.jpg?height=300&width=400",
    },
    {
      title: "Our Work",
      description:
        "View our project showcase to witness the breadth and depth of our software expertise. Our projects span mobile app development, web solutions, SaaS implementations, and more.",
      image:
        "https://static.wixstatic.com/media/11062b_7a56e8ec12ef4d00b2ec73822f42de31~mv2.jpg/v1/fill/w_831,h_265,fp_0.35_0.21,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Tech%20Professionals%20in%20Office.jpg?height=300&width=400",
    },
    {
      title: "Client Testimonials",
      description:
        "Read testimonials from our satisfied clients who have experienced the impact of our software solutions firsthand. Join our list of successful partnerships and elevate your business with Satyos Solutions.",
      image:
        "https://static.wixstatic.com/media/11062b_25827b8c81d74d93b4d9b44c5c3385d6~mv2.jpeg/v1/fill/w_924,h_265,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Project%20Presentation.jpegheight=300&width=400",
    },
  ];

  return (
    <div>
      <div className=" bg-white">
        <div className="max-w-7xl mx-4 lg:mx-24 pt-10 lg:pt-24 pb-0 lg:pb-4">
          <h1 className="text-[26px]  lg:text-[57.03px] font-madefor  font-semibold text-black">
            Mobile Apps
          </h1>
        </div>
      </div>

      <div className=" max-w-7xl mx-4 lg:mx-24 py-8 lg:py-16">
        {["Backend Services", "SaaS Solutions", "DevOps"].map((title, i) => (
          <div key={i} className="border-b border-t border-gray-500 py-8">
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div>
                <h3 className="text-[23.76px] font-madefor font-semibold text-black py-0 lg:py-2 mb-0 lg:mb-6">{title}</h3>
              </div>
              <div >
                <p className="text-gray-700 leading-relaxed mb-2 lg:mb-6 text-[16px] font-madefor">
                  {i === 0 &&
                    "Our services cover a wide range of software solutions, including mobile app development, web design, backend services, SaaS implementations, and efficient DevOps practices. We ensure top-notch quality and customer satisfaction."}
                  {i === 1 &&
                    "Satyos Solutions offers expertise in mobile app development, web solutions, backend services, SaaS applications, and DevOps practices. Our team delivers exceptional services customized to your business requirements."}
                  {i === 2 &&
                    "With a focus on mobile apps, web development, backend solutions, SaaS services, and DevOps, Satyos Solutions provides comprehensive software services to elevate your business operations."}
                </p>
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-800  text-[14px] font-madefor font-normal"
                >
                  {i === 0 ? "Learn More" : i === 1 ? "Explore Services" : "View More"}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <section className="py-4 lg:py-12 bg-white">
        <div className=" max-w-[1380px] h-auto mx-auto lg:pl-6 lg:pr-20">
          <div className="text-center mb-16">
            <h2 className="text-[26px] sm:text-center pt-0 lg:pt-24 md:text-[57.03px] font-semibold font-madefor text-black mb-6">
              Success Stories
            </h2>
            <p className="text-[16px] font-madefor text-gray-700 max-w-4xl px-10 mx-auto leading-relaxed">
              <span className="sm:inline lg:block">Explore our case studies to see how we have helped businesses like
              yours achieve their software goals and</span>
              <span className="sm:inline lg:block"> enhance theirdigital presence.</span>
            </p>
          </div>
          <div className="space-y-4 mx-4 lg:mx-12">
            {stories.map((story, index) => (
              <div key={index} className="grid lg:grid-cols-2 gap-10 items-center">
                <div className="lg:order-1">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="h-[40vh] w-[95vw] sm:w-[80vw] sm:h-[50vh]  lg:w-full lg:h-[30vh] object-cover"
                  />
                </div>
                <div className="lg:order-2 ">
                  <h3 className="text-[23.76px] font-semibold font-madefor text-black mb-2">
                    {story.title}
                  </h3>
                  <p className="text-gray-700 text-[16px] mb-10 lg:mb-0 text-left font-madefor leading-relaxed">
                    {story.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-full mx-auto">
          <div className="grid lg:grid-cols-[600px_auto] gap-8">
            <div>
              <h2 className="text-[26px] lg:text-[54.66px] font-semibold font-madefor text-black mb-0 lg:mb-8 px-12 lg:px-24">FAQs</h2>
            </div>

            <div style={{ backgroundColor: '#F0F0F0' }} className="text-black py-10 mx-6 px-4 lg:mx-0 sm:px-12 sm:w-[80] lg:max-w-full sm:mx-12 lg:mr-24">
            {/*<div className="bg-gray-50  ">*/}

              
            <div className="w-max-full flex items-center justify-between px-1 lg:px-8 mb-6">
              {!showSearch ? (
              <>
              <h3 className= "text-[14px] lg:text-[26px] lg:pl-28 font-madefor font-bold text-left lg:text-center text-black">Frequently asked questions</h3>
                <button
                  onClick={() => setShowSearch(true)}
                  className="text-black  hover:text-gray-700"
                >
                  <FiSearch />
                </button>
              </>
            ) : (
              <div className="w-full">
                <div className="relative max-w-full transition-all duration-300 ease-in-out">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Looking for something?"
                    autoFocus
                    className="w-full border border-blue-600 py-3 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800 placeholder-gray-400"
                  />
                  <button
                    onClick={() => {
                      setSearchTerm("");
                      setShowSearch(false);
                    }}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-800 hover:text-gray-800 text-lg"
                  >
                    ×
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="w-full">
              <div className="hidden md:flex space-x-6   mb-8 ">
                {Object.keys(faqs).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-3 px-0 font-medium transition-colors ${
                      activeTab === tab
                        ? "text-blue-600 border-b-2 border-blue-600"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              

              <div className="md:hidden mb-6 w-full">
                <label
                  htmlFor="faq-category"
                  className="block text-sm font-medium text-black mb-2"
                >
                  Choose a category
                </label>
                <select
                  id="faq-category"
                  name="faq-category"
                  value={activeTab}
                  onChange={(e) => setActiveTab(e.target.value)}
                  className="w-full border border-gray-300 shadow-sm py-2 px-2 text-base focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  {Object.keys(faqs).map((tab) => (
                    <option key={tab} value={tab}>
                      {tab}
                    </option>
                  ))}
                </select>
              </div>
              </div>
              

              <div className="space-y-4">
                {faqs[activeTab].map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="flex items-center justify-between w-full text-left py-4"
                    >
                      <span className="text-gray-800 font-medium pr-6">
                        {faq.question}
                      </span>
                      <svg
                        className={`w-5 h-5 min-w-[20px] min-h-[20px] text-gray-800 transition-transform ${
                          expandedFAQ === index ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>

                    </button>
                    {expandedFAQ === index && (
                      <div className="pb-4">
                        <div className="text-gray-800 leading-relaxed mb-10">
                          {faq.answer}
                        </div>
                        {faq.showSocial && <SocialIcons />}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
