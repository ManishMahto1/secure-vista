import React from "react";
import Image from "next/image";
const OurApproach: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-12">
      <div className="flex flex-col items-center md:items-start space-y-8 md:w-1/3">
        <Image
          src="https://storage.googleapis.com/a1aa/image/1b6cd9e6-7ac1-4946-f63e-2e1afd06a2e0.jpg"
          alt="Black icon of a security officer wearing a cap and uniform"
          className="w-16 h-16"
          width={64}
          height={64}
        />
        <h1 className="text-3xl orbitron text-black">Securevista</h1>
        <button className="bg-[#0D6DBF] text-white px-8 py-4 text-lg orbitron hover:bg-[#0b5a9a] transition-colors">
          Read More
        </button>
      </div>
      <div className="md:w-1/3 space-y-4">
        <h2 className="text-black text-[14px] font-semibold tracking-widest leading-5 uppercase font-mono">
          OUR
          <br />
          APPROACH
        </h2>
        <p className="text-gray-700 text-base leading-7 max-w-md">
          At Securevista, we’re not just a business; we’re your go-to team
          for creating safe, efficient, and comfortable environments. We
          get that keeping your people and stuff safe and sound is super
          important, and we’re all in to give you the best solutions that
          fit what you need.
        </p>
      </div>
      <div className="md:w-1/3 flex justify-center">
        <Image
          src="https://storage.googleapis.com/a1aa/image/490ca4f2-cdbf-4137-5cdf-c26d25e233ac.jpg"
          alt="Back view of a security guard wearing a black uniform with SECURITY written on the back"
          className="object-contain max-h-[400px]"
          width={300}
          height={400}
        />
      </div>
    </div>
  );
};
export default OurApproach;