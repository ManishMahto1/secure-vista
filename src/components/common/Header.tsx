'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useAuthContext } from '@/context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiHeart, FiUser, FiSearch, } from 'react-icons/fi';
import Image from 'next/image';
const Header: React.FC = () => {
  const { user, logout } = useAuthContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  

 
  const menuVariants = {
    open: { x: 0, opacity: 1 },
    closed: { x: '100%', opacity: 0 },
  };

  const handleLogout = () => {
    logout();
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm">
      {/* Top Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="https://as1.ftcdn.net/jpg/05/19/67/42/1000_F_519674216_y6iDAZpwziMAVyfzGJxrDmyaCpvnnHmQ.jpg" // Update with PGDeko logo
              alt="PGDeko Logo"
              className="w-8 h-8"
              width={32}
              height={32}
            />
            <div className="leading-none">
              <p className="text-blue-600 font-extrabold text-xl tracking-tight">Secure vista</p>
              <p className="text-[8px] font-semibold text-gray-600 -mt-1 tracking-wide">
                security guard services
              </p>
            </div>
          </Link>

          {/* Desktop Search and Actions */}
          

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="text-gray-700 hover:text-blue-600">
              <FiHeart className="w-6 h-6" />
            </button>
            {user ? (
              <div className="flex items-center space-x-1">
                <FiUser className="w-6 h-6 text-gray-700" />
                <button onClick={logout} className="text-gray-700 hover:text-blue-600">
                  Logout
                </button>
              </div>
            ) : (
              <Link href="/login" className="flex items-center text-gray-700 hover:text-blue-600">
                <FiUser className="w-6 h-6 mr-1" />
                Login / Register
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>

        {/* Navigation Tabs */}
      
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-white shadow-xl md:hidden"
          >
            <div className="p-6">
              {/* Mobile Search */}
              <div className="mb-6">
                <div className="flex rounded-full border border-gray-300 overflow-hidden">
                  <input
                    type="search"
                    placeholder="Search PG..."
                    className="w-full px-4 py-2 text-sm focus:outline-none"
                  />
                  <button className="px-4 py-2 bg-blue-600 text-white">
                    <FiSearch className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Mobile Navigation */}
              <nav className="space-y-4">
                <Link href="/" className="block text-gray-700 hover:text-blue-600">
                  Home
                </Link>
                <Link href="/listings" className="block text-gray-700 hover:text-blue-600">
                  Contacts
                </Link>
                <Link href="/about" className="block text-gray-700 hover:text-blue-600">
                  About Us
                </Link>
                <Link href="/contact" className="block text-gray-700 hover:text-blue-600">
                  Contact Us
                </Link>
              </nav>

              {/* Mobile Auth Section */}
              <div className=" mt-8 pt-6 border-t border-gray-100">
                {user ? (
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center justify-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
                  >
                    <FiUser className="mr-2" /> Logout
                  </button>
                ) : (
                  <Link
                    href="/login"
                    className="border-2  block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg text-center"
                  >
                    Login / Register
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;