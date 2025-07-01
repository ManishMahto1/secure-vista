'use client';

import { motion } from 'framer-motion';
/* import Image from 'next/image'; */
import { RoomItem } from '@/types/jobs';
const cardVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { scale: 1, opacity: 1 }
};

const FeaturedListings = ({ rooms }: { rooms: RoomItem[] }) => (
  <motion.div 
    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
    variants={cardVariants}
  >
    {rooms.map((room) => (
      <motion.div 
        key={room._id}
        className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
        variants={cardVariants}
        whileHover={{ y: -10 }}
      >
         {/*  <Image 
            src={room.images[0]} 
            alt={room.title} 
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          /> */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80">
            <h3 className="text-xl font-semibold text-white">{room.title}</h3>
            <p className="text-purple-300 font-medium">₹{room.price}/month</p>
          </div>
          <div className="p-6">
            <button className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors">
              View Details
            </button>
          </div>
      </motion.div>
    ))}
  </motion.div>
);

export default FeaturedListings;