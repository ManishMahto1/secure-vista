// File: secure-vista/src/app/page.tsx
"use client";
import React from "react";
import ServicesPage from "@/components/landing/ServicesPage";
import OurApproach from "@/components/landing/OurApproach";
export default function Home() {
  return (
    <main className="min-h-screen"> 
      
      
    {/*   <section className="bg-gray-100">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-8">Welcome to SecureVista</h1>
          <p className="text-lg text-center mb-4">Your trusted partner in security solutions.</p>
          <p className="text-center">Explore our services and find the perfect security solution for your needs.</p>
        </div>
      </section>
 */}


     <ServicesPage/>
      <OurApproach />
   
    </main>
  );
}
