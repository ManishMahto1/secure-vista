'use client';

import { motion } from 'framer-motion';


const HeroSection = () => (
  <section className="relative h-[600px] bg-gradient-to-r from-indigo-900 to-violet-800">
    <div className="absolute inset-0 opacity-20   " />
   {/*  bg-[url('/images/texture.png')] */}
   
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="container mx-auto h-full flex items-center px-4 sm:px-6 lg:px-8"
    >
      <div className="text-center w-full max-w-4xl mx-auto space-y-8">
        <motion.h1 
          className="text-4xl sm:text-6xl font-bold text-white mb-6 leading-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Find Your Perfect <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Room or PG</span>
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          
        </motion.div>
      </div>
    </motion.div>
  </section>
);

export default HeroSection;