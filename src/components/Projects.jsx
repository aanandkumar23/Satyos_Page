import React from 'react';

const Projects = () => {
  const sections = [
    {
      title: 'Web Development',
      description:
        'Each project in our portfolio represents a unique challenge that we successfully transformed into a successful and impactful solution.',
      link: 'Explore More',
      image:
        'https://static.wixstatic.com/media/11062b_e9efd10ef8d54ccca9db92efb30882bb~mv2.jpg/v1/fill/w_948,h_286,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Website%20setup%20on%20laptop.jpg',
    },
    {
      title: 'Software Solutions',
      description:
        'Discover how our team at Satyos Solutions turned innovative ideas into reality through our portfolio of successful projects.',
      link: 'See Our Work',
      image:
        'https://static.wixstatic.com/media/11062b_ce3baf351ac642f69bf544fada42bb59~mv2.jpeg/v1/fill/w_948,h_286,fp_0.55_0.33,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Lead%20presentations%20during%20meetings.jpeg',
    },
    {
      title: 'Innovative Projects',
      description:
        'From mobile apps to web platforms, our portfolio reflects our commitment to delivering cutting-edge software solutions.',
      link: 'Discover Portfolio',
      image:
        'https://static.wixstatic.com/media/11062b_abcafc9ab39b41aa976ebad0e170cc39~mv2.jpg/v1/fill/w_948,h_286,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Music%20Apps.jpg',
    },
  ];

  return (
    <section className="bg-white pt-12 lg:pt-56 lg:py-20 lg:pl-20 ">
      <div className="text-center mb-10 lg:mb-16">
        <h2 className="text-[26px] lg:text-[57.03px] sm:justify-center font-madefor font-semibold text-black mb-6">Our Portfolio</h2>
        <p className="text-[16px] px-5 lg:px-0 font-madefor text-gray-700 max-w-4xl mx-auto">
          Explore our diverse portfolio showcasing our expertise in mobile apps, web development, and software solutions.
        </p>
      </div>
      <div className="space-y-5">
        {sections.map((section, index) => (
          <div
            key={index}
            className="grid grid-cols-1 bg-white md:grid-cols-[2fr_3fr]  gap-20 items-center"
          >
            <div className="order-2 md:order-1">
              <h3 className="text-[23.76px] font-madefor px-5 font-semibold text-black mb-4">
                {section.title}
              </h3>
              <p className="text-gray-800 bg-white font-madefor text-[16px] px-5 mb-4">{section.description}</p>
              <a
                href="#"
                className="text-gray-900 font-madefor text-[14px]  px-5 font-normal   hover:text-blue-500"
              >
                {section.link}
              </a>
            </div>
            <div className="order-1 md:order-2 max-w-full overflow-hidden shadow-lg">
              <img
                src={section.image}
                alt={section.title}
                className="h-[40vh] w-[95vw] sm:h-[50vh] px-5 lg:w-full mt-8 lg:h-64 object-cover "
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
