import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <nav className="bg-white">
      <div className="max-w-full mx-auto pl-4 pr-4 lg:pl-8 lg:pr-14">
        <div className="flex justify-between items-center h-16 md:h-24">
          <Link to="/" className="flex items-center h-14 lg:h-28">
            <img
              src="https://static.wixstatic.com/media/4036e0_6987370e4bd0428caaa83c21fefc904c~mv2.png/v1/fill/w_294,h_66,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Group%204.png"
              alt="SATYOS Logo"
              loading="lazy"
              className="h-[5vh] md:h-[7.5vh]  w-auto object-contain"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-base font-normal border-b-2 transition-all duration-200 ${
                    isActive ? 'border-black' : 'border-transparent'
                  } hover:border-black text-black`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(true)} className="text-black">
              <Menu className="h-8 w-8 lg:h-6 lg:w-6" />
            </button>
          </div>
        </div>
      </div>
      <div
        className={`fixed top-0 right-0 h-full w-3/5 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="flex justify-end p-6">
          <button onClick={() => setIsOpen(false)} className="text-black">
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="flex flex-col space-y-6 pl-6 pr-6 pb-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-left text-lg font-medium text-black ${
                  isActive ? 'underline underline-offset-4' : ''
                } hover:underline`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
