import React from "react";
import Image from "next/image";
const HeroSection: React.FC = () => {
    return (
        <div className="relative w-full h-[200px] md:h-[300px] lg:h-[400px] xl:h-[500px]">
            <Image
                src="https://storage.googleapis.com/a1aa/image/1366a064-ba0e-4d97-199d-d7c2d3b7d664.jpg"
                alt="Background image with security theme in blue"
                className="w-full h-full object-cover"
                width={1920}
                height={500}
            />
            <div
                className="absolute top-0 left-0 w-0 h-0 border-r-[600px] border-r-[#f6a733] border-b-[500px] border-b-transparent z-10 md:border-r-[900px] md:border-b-[700px] lg:border-r-[1100px] lg:border-b-[800px] xl:border-r-[1300px] xl:border-b-[900px]"
                style={{ filter: "drop-shadow(0 10px 10px rgba(0,0,0,0.5))" }}
            ></div>
            <div className="absolute top-0 left-0 w-[350px] h-[200px] md:w-[450px] md:h-[300px] lg:w-[550px] lg:h-[400px] xl:w-[650px] xl:h-[500px] bg-[#0569a6]/90 z-20 flex flex-col justify-center px-8">
                <h1 className="text-white text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[4.5rem] font-normal leading-tight">
                    Securevista
                </h1>
                <button className="mt-6 border border-white text-white text-[0.85rem] md:text-[1rem] font-semibold px-6 py-2 w-max hover:bg-white hover:text-[#0569a6] transition-colors duration-300">
                    Enquiry Now
                </button>
            </div>
            <div className="absolute top-0 right-0 w-[350px] h-[200px] md:w-[450px] md:h-[300px] lg:w-[550px] lg:h-[400px] xl:w-[650px] xl:h-[500px] bg-[#0569a6]/100 z-20 flex flex-col justify-center px-8">
                <p
                    className="text-white text-[1.1rem] md:text-[1.3rem] lg:text-[1.5rem] xl:text-[1.7rem] font-normal leading-snug whitespace-pre-line"
                    style={{ letterSpacing: "0.15em" }}
                >
                    {`SECURITY
SERVICES

FACILITY
MANAGEMENT
SERVICES`}
                </p>
            </div>
        </div>
    );
};

export default HeroSection;