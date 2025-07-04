import { AuthProvider } from '@/context/AuthContext';

import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import '@/styles/globals.css';

export const metadata = {
  title: 'secure-vista',
  description: 'security guard services',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <AuthProvider>    
           <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}