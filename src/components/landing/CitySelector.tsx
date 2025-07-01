'use client';
import Image from 'next/image';
import { useState } from 'react';

type City = {
  name: string;
  imgSrc: string;
  imgAlt: string;
};

const cities: City[] = [
  {
    name: 'Jamshedpur',
    imgSrc: 'https://storage.googleapis.com/a1aa/image/0d0515f4-5495-41c5-d3b8-f9b87633c344.jpg',
    imgAlt: 'Mumbai cityscape',
  },
  {
    name: 'Ranchi',
    imgSrc: 'https://storage.googleapis.com/a1aa/image/0d0515f4-5495-41c5-d3b8-f9b87633c344.jpg',
    imgAlt: 'Delhi cityscape',
  },
  {
    name: 'CKP',
    imgSrc: 'https://storage.googleapis.com/a1aa/image/0d0515f4-5495-41c5-d3b8-f9b87633c344.jpg',
    imgAlt: 'Bangalore cityscape',
  },
  {
    name: 'kolkata',
    imgSrc: 'https://storage.googleapis.com/a1aa/image/0d0515f4-5495-41c5-d3b8-f9b87633c344.jpg',
    imgAlt: 'Hyderabad cityscape',
  },
  // Add more cities as needed
];


const CitySelector = () => {
  const [selectedCity, setSelectedCity] = useState('');

  return (
    <div className="max-w-7xl mx-auto bg-white rounded-xl p-4 md:p-6 shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Cities Grid */}
        <div className="md:col-span-8 lg:col-span-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 md:gap-4">
            {cities.map((city) => (
              <div
                key={city.name}
                className="group bg-white rounded-lg p-3 hover:shadow-lg transition-shadow cursor-pointer border border-gray-100"
              >
                <div className="relative w-full aspect-square mb-2">
                  <Image
                    src={city.imgSrc}
                    alt={city.imgAlt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 50vw, 25vw"
                  />
                </div>
                <p className="text-xs text-gray-500 mb-1 text-center">Used cars in</p>
                <p className="text-sm font-medium text-gray-900 text-center">
                  {city.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* City Selection Sidebar */}
        <div className="md:col-span-4 lg:col-span-2 flex flex-col gap-6 p-4 bg-gray-50 rounded-lg">
          <div className="space-y-4">
            <p className="text-gray-700 text-center md:text-left text-lg font-medium">
              I am looking to buy a second hand car in
            </p>
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled className="text-gray-400">
                Select your city
              </option>
              {cities.map((city) => (
                <option key={city.name} value={city.name} className="text-gray-700">
                  {city.name}
                </option>
              ))}
            </select>
          </div>

          <div className="hidden md:block relative w-full aspect-video mt-auto">
            <Image
              src="https://storage.googleapis.com/a1aa/image/0d0515f4-5495-41c5-d3b8-f9b87633c344.jpg"
              alt="Cityscape illustration"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CitySelector;