'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import {  FiFilter } from 'react-icons/fi';

// Mock data - replace with your actual data source
/* const mockPGs = [
  {
    id: 1,
    title: 'Premium AC PG for Boys',
    price: 12000,
    location: 'Koramangala, Bangalore',
    type: 'Shared',
    gender: 'Male',
    amenities: ['AC', 'WiFi', 'Laundry', 'Meals'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
  },
   {
    id: 1,
    title: 'Premium AC PG for Boys',
    price: 12000,
    location: 'Koramangala, Bangalore',
    type: 'Shared',
    gender: 'Male',
    amenities: ['AC', 'WiFi', 'Laundry', 'Meals'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
  },
   {
    id: 1,
    title: 'Premium AC PG for Boys',
    price: 12000,
    location: 'Koramangala, Bangalore',
    type: 'Shared',
    gender: 'Male',
    amenities: ['AC', 'WiFi', 'Laundry', 'Meals'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
  }
  // Add more mock entries
]; */

export default function HeroSection() {
  const router = useRouter();
  const [filters, setFilters] = useState({
    budget: '5000-10000',
    roomType: 'Shared',
    gender: 'Male'
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = new URLSearchParams(filters).toString();
    router.push(`/search?${query}`);
  };

  return (
    <div className="relative w-full max-w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
          alt="PG Finder Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Search Section */}
      <div className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
              Find Your Perfect PG
            </h1>
            
            <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Budget</label>
                <select
                  value={filters.budget}
                  onChange={(e) => setFilters({...filters, budget: e.target.value})}
                  className="w-full p-2 border rounded-md"
                >
                  <option value="5000-10000">₹5,000 - ₹10,000</option>
                  <option value="10000-15000">₹10,000 - ₹15,000</option>
                  <option value="15000-20000">₹15,000 - ₹20,000</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Room Type</label>
                <select
                  value={filters.roomType}
                  onChange={(e) => setFilters({...filters, roomType: e.target.value})}
                  className="w-full p-2 border rounded-md"
                >
                  <option>Shared</option>
                  <option>Single</option>
                  <option>Double</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Gender</label>
                <select
                  value={filters.gender}
                  onChange={(e) => setFilters({...filters, gender: e.target.value})}
                  className="w-full p-2 border rounded-md"
                >
                  <option>Male</option>
                  <option>Female</option>
                  <option>Co-living</option>
                </select>
              </div>

              <div className="flex items-end">
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-md flex items-center justify-center"
                >
                  <FiFilter className="mr-2" />
                  Search PGs
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Search Results Section - Shown after search */}
      {/* This would be on your /search page */}
    </div>
  );
}