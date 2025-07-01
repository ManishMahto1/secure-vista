'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { HiHome, HiOfficeBuilding, HiUser } from 'react-icons/hi';
import { useAuthContext } from '@/context/AuthContext';

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, logout } = useAuthContext();

  const sidebarVariants = {
    hover: { scale: 1.02 },
  };

  if (!user) return <div className="text-center py-10">Please log in to access the dashboard.</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-900 flex">
      {/* Sidebar */}
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-64 bg-white/10 backdrop-blur-lg shadow-xl p-6 fixed h-full"
      >
        <h2 className="text-2xl font-bold text-white mb-8">Owner Dashboard</h2>
        <nav className="space-y-4">
          {[
            { href: '/dashboard', text: 'Rooms', icon: <HiOfficeBuilding className="mr-2" /> },
            { href: '/dashboard/profile', text: 'Profile', icon: <HiUser className="mr-2" /> },
            { href: '/', text: 'Home', icon: <HiHome className="mr-2" /> },
          ].map((item) => (
            <motion.div key={item.href} variants={sidebarVariants} whileHover="hover">
              <Link
                href={item.href}
                className="flex items-center text-white hover:text-indigo-200 transition-colors p-2 rounded-lg"
              >
                {item.icon}
                {item.text}
              </Link>
            </motion.div>
          ))}
          <button
            onClick={logout}
            className="w-full text-left text-red-300 hover:text-red-200 transition-colors p-2 rounded-lg"
          >
            Logout
          </button>
        </nav>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 p-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white/10 backdrop-blur-lg rounded-xl shadow-xl p-6"
        >
          {children}
        </motion.div>
      </main>
    </div>
  );
};

export default DashboardLayout;