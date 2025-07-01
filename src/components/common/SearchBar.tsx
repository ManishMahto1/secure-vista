'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

const SearchBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/pg/search?query=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <motion.form 
      onSubmit={handleSearch}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative"
    >
      <input
        type="text"
        placeholder="Search PG by location, amenities..."
        className="w-full pl-12 pr-4 py-2 rounded-full border border-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button
        type="submit"
        className="absolute left-3 top-2.5 text-white hover:text-indigo-500 transition-colors"
      >
        <MagnifyingGlassIcon className="h-5 w-5" />
      </button>
    </motion.form>
  );
};

export default SearchBar;