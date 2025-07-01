'use client';

import Link from 'next/link';
import { useAuthContext } from '@/context/AuthContext';

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuthContext();

  if (!user) return <p>Loading...</p>;

  return (
    <div className="container mx-auto py-8 flex">
      <aside className="w-1/4 p-4 bg-gray-100 rounded-lg mr-6">
        <h2 className="text-xl font-semibold mb-4">Dashboard</h2>
        <ul className="space-y-2">
          <li><Link href="/dashboard/profile" className="hover:text-blue-600">Profile</Link></li>
          <li><Link href="/dashboard/listings" className="hover:text-blue-600">My Listings</Link></li>
        </ul>
      </aside>
      <main className="w-3/4">{children}</main>
    </div>
  );
};

export default DashboardLayout;