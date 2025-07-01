import React from "react";
import Image from "next/image";
const services = [
  "Manned security guards",
  "Security devices",
  "BMS operator",
  "Housekeeping",
  "Office maintenance",
  "Garden maintenance",
  "Building maintenance",
  "Pest control",
  "AMC"
];

const quickLinks = ["Home", "About", "Services", "Contact", "Enquiry"];

const ContactInfo = () => {
  return (
    <div className="relative bg-[#1a73be] p-6 sm:p-10 lg:p-16 w-full max-w-md shadow-lg">
      <Image
        src="https://designsserver.com/projects/g8/security/wp-content/uploads/2024/08/New-Project.png"
        alt="Securevista SIFM company logo with shield and stars in blue and orange"
        className="absolute -top-8 sm:-top-10 left-4 sm:left-6 w-16 sm:w-20 h-16 sm:h-20 object-contain"
        width={80}
        height={80}
      />
      <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 sm:mb-10 pt-4 sm:pt-6">
        Securevista
      </h1>
      <div className="space-y-4 sm:space-y-6 lg:space-y-8 text-white text-xs sm:text-sm font-semibold">
        <div className="flex items-start gap-3 sm:gap-4">
          <i className="fas fa-map-marker-alt mt-0.5 sm:mt-1 text-gray-300"></i>
          <div>
            <p className="uppercase text-xs mb-1">Head Office</p>
            <p className="text-[#f9a839] font-bold leading-snug">
              Ambey Efficiency, Ground Floor Shop, New Town,<br />
              Kolkata North 24 Parganas 700156
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3 sm:gap-4">
          <i className="fas fa-phone-alt mt-0.5 sm:mt-1 text-gray-300"></i>
          <div>
            <p className="uppercase text-xs mb-1">Call Us</p>
            <p className="text-[#f9a839] font-bold leading-snug">
              8276802559 / 7596955216
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3 sm:gap-4">
          <i className="fas fa-envelope mt-0.5 sm:mt-1 text-gray-300"></i>
          <div>
            <p className="uppercase text-xs mb-1">Email Us</p>
            <p className="text-[#f9a839] font-bold leading-snug">
              hello@divisecurity.com
            </p>
          </div>
        </div>
        <button className="mt-2 sm:mt-4 bg-[#f9a839] hover:bg-[#e69530] text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-sm transition-colors duration-200">
          Message us
        </button>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="relative w-full flex items-center justify-center bg-[#f9a839] pt-16 pb-12 sm:pt-24 sm:pb-16">
      <Image
        src="https://storage.googleapis.com/a1aa/image/ddc215bb-6500-40af-59d2-08bdad24fb9e.jpg"
        alt="Blurred image of people walking in an office corridor"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
        width={1920}
        height={400}
      />
      <div
        className="absolute inset-0"
        style={{ clipPath: "polygon(0 0, 50% 0, 0 100%)" }}
      >
        <div className="w-full h-full bg-[#f9a839]"></div>
      </div>
      <div
        className="absolute inset-0"
        style={{ clipPath: "polygon(50% 0, 100% 0, 100% 100%, 0 100%)" }}
      >
        <div className="w-full h-full bg-[#1a73be]"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between gap-8 sm:gap-12">
          <div className="flex flex-col md:flex-row gap-8 sm:gap-12 lg:gap-16 text-white w-full lg:w-auto">
            <div className="w-full md:w-auto">
              <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Services</h2>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm font-semibold leading-tight">
                {services.map((service, idx) => (
                  <li key={idx} className="hover:text-[#f9a839] transition-colors duration-200 cursor-pointer">
                    {service}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-auto">
              <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Quick Links</h2>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm font-semibold leading-tight">
                {quickLinks.map((link, idx) => (
                  <li key={idx} className="hover:text-[#f9a839] transition-colors duration-200 cursor-pointer">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <ContactInfo />
        </div>
        
        <div className="mt-12 sm:mt-16 pt-6 border-t border-white/20 text-white text-xs sm:text-sm text-center">
          <p>© {new Date().getFullYear()} Securevista. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;