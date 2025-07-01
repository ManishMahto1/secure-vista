
"use client";
import React, { useState } from "react";
import Image from "next/image";
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="https://designsserver.com/projects/g8/security/wp-content/uploads/2024/08/New-Project.png"
              alt="Securevista SIFM circular logo with blue and orange colors"
              className="w-16 h-16 object-contain"
              width={64}
              height={64}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#" className="text-orange-500 font-semibold hover:text-orange-600 px-3 py-2">
                Home
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2">
                About
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2">
                Services
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2">
                Contact
              </a>
              <a
                href="#"
                className="bg-[#1a73be] text-white font-semibold px-5 py-2 rounded-sm hover:bg-[#0f5a9a] transition-colors duration-300 ml-4"
              >
                Enquiry
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-orange-500 bg-orange-50"
          >
            Home
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            About
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            Services
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            Contact
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-white bg-[#1a73be] hover:bg-[#0f5a9a] mt-2"
          >
            Enquiry
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;