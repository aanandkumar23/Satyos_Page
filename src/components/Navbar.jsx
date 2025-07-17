import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);




  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <nav className="bg-white">
      <div className="max-w-full mx-auto pl-8 pr-14">
        <div className="flex justify-between items-center h-16 md:h-24">

          <Link to="/" className="flex items-center h-28">
            <img
              src="src/components/satyoslogo.avif "
              alt="SATYOS Logo"
              loading= " lazy "
              className="h-[50%] w-auto object-contain"
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
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed top-0 right-0 h-full w-3/5 bg-white shadow-lg z-50 transition-all duration-300">
          <div className="flex justify-between items-start p-6">
            <div className="space-y-6">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block text-left text-lg font-medium text-black ${
                      isActive ? 'underline underline-offset-4' : ''
                    } hover:underline`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
            <button onClick={() => setIsOpen(false)} className="text-black">
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
