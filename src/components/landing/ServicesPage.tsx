interface Service {
  id: number;
  title: string;
  description?: string;
  iconAlt: string;
  iconSrc: string;
}
import React from "react";
import Image from "next/image";
const services: Service[] = [
  {
    id: 1,
    title: "Manned Security Guards",
    description: "Our team of trained security guards is always on the lookout, professional, and dedicated to keeping your place safe.",
    iconAlt: "Icon of a male security guard wearing a cap and uniform",
    iconSrc: "https://storage.googleapis.com/a1aa/image/764c0a07-38c4-47d7-5d1d-945a218c3b05.jpg",
  },
  {
    id: 2,
    title: "Security Devices",
    description: "We provide the latest security technology including top-notch cameras and access control systems to ensure comprehensive protection.",
    iconAlt: "Icon of a security camera with wireless signal waves",
    iconSrc: "https://storage.googleapis.com/a1aa/image/c5e7215f-5480-4160-79c8-c633b0479c9e.jpg",
  },
  {
    id: 3,
    title: "BMS Operator",
    description: "Professional management of your building's security framework with our expert Building Management System operators.",
    iconAlt: "Icon of buildings with a gear representing BMS operator",
    iconSrc: "https://storage.googleapis.com/a1aa/image/070e2faa-976e-47f4-2aef-346cad587b38.jpg",
  },
  {
    id: 4,
    title: "Housekeeping",
    description: "We provide thorough cleaning services that ensure every corner of your space is spotless and hygienic.",
    iconAlt: "Icon of a female housekeeping staff holding a broom",
    iconSrc: "https://storage.googleapis.com/a1aa/image/cb413987-c743-4c2e-4b8f-592964c214f8.jpg",
  },
  {
    id: 5,
    title: "Office Maintenance",
    description: "Comprehensive maintenance services for all office areas including pantries and cafeterias, creating a clean and welcoming environment.",
    iconAlt: "Icon of a person cleaning with a mop and bucket representing office maintenance",
    iconSrc: "https://storage.googleapis.com/a1aa/image/e3865c18-1e66-4a94-b680-cb5ca7b6bbc9.jpg",
  },
  {
    id: 6,
    title: "Garden Maintenance",
    description: "Expert care for your green spaces including lawns, gardens, and trees with professional pruning and maintenance services.",
    iconAlt: "Icon of a lawn mower representing garden maintenance",
    iconSrc: "https://storage.googleapis.com/a1aa/image/fd23fb02-f1cc-4e0d-3f9b-b716f65631f8.jpg",
  },
  {
    id: 7,
    title: "Building Maintenance",
    description: "Comprehensive building maintenance services to keep your property in optimal condition at all times.",
    iconAlt: "Icon of a building with a gear representing building maintenance",
    iconSrc: "https://storage.googleapis.com/a1aa/image/8619f5e9-1c35-4cb3-5553-e5d28d43cb76.jpg",
  },
  {
    id: 8,
    title: "Pest Control",
    description: "Effective pest control solutions to eliminate infestations and maintain a pest-free environment for your property.",
    iconAlt: "Icon of a pest control technician with spray equipment",
    iconSrc: "https://storage.googleapis.com/a1aa/image/88d7b668-fff2-456c-48ee-5a60ecf5d684.jpg",
  },
  {
    id: 9,
    title: "AMC (Annual Maintenance Contract)",
    description: "Comprehensive annual maintenance contracts to ensure all your systems remain in perfect working condition year-round.",
    iconAlt: "Icon of a hand holding a gear representing AMC",
    iconSrc: "https://storage.googleapis.com/a1aa/image/46c22ab3-4a05-469e-e255-e59392a00f9d.jpg",
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-[#0F71B3] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 text-center md:text-right md:pr-12">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-100 mb-4">
                Our Security <br className="hidden md:block" /> Services
              </h1>
              <p className="text-lg text-gray-300">
                Comprehensive protection solutions tailored to your needs
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="https://storage.googleapis.com/a1aa/image/2e2d287a-2b03-4e7a-5427-eb52e5376b71.jpg"
                alt="Woman security guard monitoring multiple surveillance screens holding a walkie-talkie"
                className="w-full rounded-lg shadow-lg object-cover h-64 sm:h-80 lg:h-96"
                width={600}
                height={400}
              />
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="mb-20 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-start gap-6 bg-white p-6 rounded-lg shadow-md">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md transition-colors duration-300 whitespace-nowrap">
              All Services
            </button>
            <p className="text-gray-700 text-base md:text-lg">
              At Securevista, we understand that security is paramount for any business. 
              That&apos;s why we offer comprehensive security services designed to protect your 
              assets, people, and facilities with the highest standards of professionalism 
              and reliability.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-100 mb-12">
            Our Comprehensive Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {services.map((service) => (
              <div 
                key={service.id} 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
              >
                <div className="flex items-center mb-4">
                  <Image
                    src={service.iconSrc}
                    alt={service.iconAlt}
                    className="w-10 h-10 object-contain mr-4"
                    style={{ color: '#0F71B3' }}
                    width={40}
                    height={40}
                  />
                  <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                </div>
                {service.description && (
                  <p className="text-gray-600 flex-grow">{service.description}</p>
                )}
                <button className="mt-4 text-blue-600 font-medium hover:text-blue-800 transition-colors duration-300 text-left">
                  Learn more →
                </button>
              </div>
            ))}
          </div>
        </section>

      
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] flex flex-col md:flex-row">
      {/* Left side with big image */}
      <div className="relative w-full md:w-1/2 h-[60%] md:h-full">
        <Image
          alt="Security guard wearing black cap and black uniform holding a walkie talkie, seen from back"
          className="object-cover w-full h-full"
          height={600}
          width={800}
          src="https://storage.googleapis.com/a1aa/image/3e95efaa-c965-46fc-092c-bd83f142cde4.jpg"
          loading="lazy"
        />
        <div className="absolute bottom-0 left-0 bg-[#0F71B3] text-white p-4 sm:p-6 md:p-8 w-full md:w-[70%] lg:w-[60%] text-sm sm:text-base md:text-lg lg:text-xl font-medium">
          Comprehensive Security & Facility Management Services
        </div>
      </div>

      {/* Right side with orange background and blue triangle */}
      <div className="relative w-full md:w-1/2 bg-[#F9A43F] flex justify-center items-center">
        {/* Main image */}
        <Image
          alt="Security guard wearing black cap and black uniform pointing with walkie talkie in hand"
          className="z-10 w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] object-contain"
          height={300}
          width={300}
          src="https://storage.googleapis.com/a1aa/image/175ba567-c077-45ba-50c6-6873b7c48fe0.jpg"
          loading="lazy"
        />
        
        {/* Blue triangle */}
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-[#0F71B3] clip-triangle"></div>
        
        {/* Contact info */}
        <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 z-20 text-black">
          <div className="text-sm sm:text-base md:text-lg font-bold">Contact us</div>
          <div className="mt-1 text-xs sm:text-sm md:text-base font-normal tracking-wide">
            8276802559 / 7596955216
          </div>
          <div className="mt-2 text-xs sm:text-sm md:text-base font-normal tracking-wide">
            hello@divisecurity.com
          </div>
        </div>
      </div>

      {/* Add this to your CSS for the triangle effect */}
      <style jsx>{`
        .clip-triangle {
          clip-path: polygon(100% 0, 0% 100%, 100% 100%);
        }
      `}</style>
    </div>
      </div>
    </div>
  );
};

export default ServicesPage;