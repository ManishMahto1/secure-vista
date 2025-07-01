'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';
import { FaStar, FaCheckCircle } from 'react-icons/fa';
import { FiArrowRight, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
interface PGListing {
  id: number;
  title: string;
  price: string;
  location: string;
  availability: string;
  imageUrl: string;
  amenities: string[];
  type?: { text: string; color: string; icon?: React.ReactNode };
}

const pgListings: PGListing[] = [
  {
    id: 1,
    title: "Premium Girls PG",
    price: "₹12,000",
    location: "Koramangala, Bangalore",
    availability: "Available from 1st July",
    imageUrl: "https://plus.unsplash.com/premium_photo-1689610231577-8870f9e0312a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    amenities: ["AC", "WiFi", "Laundry", "Meals"],
    type: {
      text: "Premium",
      color: "text-yellow-600",
      icon: <FaStar className="w-3 h-3" />
    },
  },
  {
    id: 2,
    title: "Luxury Co-living Space",
    price: "₹18,000",
    location: "Whitefield, Bangalore",
    availability: "Immediate Occupancy",
    imageUrl: "https://plus.unsplash.com/premium_photo-1687996106214-8f7d9bace659?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    amenities: ["Pool", "Gym", "Housekeeping"],
    type: {
      text: "Verified",
      color: "text-green-600",
      icon: <FaCheckCircle className="w-3 h-3" />
    },
  },
  {
    id: 3,
    title: "Budget Boys PG",
    price: "₹8,000",
    location: "HSR Layout, Bangalore",
    availability: "Available from 15th June",
    imageUrl: "https://plus.unsplash.com/premium_photo-1686852373786-a219c81c9a7f?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    amenities: ["WiFi", "Parking"],
  },
  {
    id: 4,
    title: "Executive PG for Professionals",
    price: "₹15,000",
    location: "Indiranagar, Bangalore",
    availability: "Ready to Move",
    imageUrl: "https://plus.unsplash.com/premium_photo-1684863506867-4a33a434e940?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    amenities: ["AC", "Lift", "Security"],
    type: {
      text: "New Listing",
      color: "text-blue-600",
    },
  },
];

const PGListingCard: React.FC<{ listing: PGListing }> = ({ listing }) => {

  return (
    <div className="min-w-[280px] max-w-[280px] bg-white rounded-lg border border-gray-200 shadow-sm flex-shrink-0 hover:shadow-lg transition-shadow">
      <div className="relative rounded-t-lg overflow-hidden">
        <Image
          src={listing.imageUrl}
          alt={listing.title}
          width={280}
          height={160}
          className="w-full h-40 object-cover"
        />
        <span className="absolute top-3 left-3 bg-white text-[9px] font-semibold text-gray-700 rounded-full px-2 py-[2px]">
          {listing.availability}
        </span>
        {listing.type && (
          <span
            className={`absolute bottom-3 right-3 bg-white text-[10px] font-semibold rounded-full px-2 py-[1px] flex items-center gap-1 ${listing.type.color}`}
          >
            {listing.type.icon}
            <span>{listing.type.text}</span>
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 text-sm mb-1">{listing.title}</h3>
        <p className="text-gray-600 text-xs mb-2 flex items-center gap-1">
          <FiArrowRight className="w-4 h-4" />
          {listing.location}
        </p>
        <div className="flex items-baseline gap-2 mb-3">
          <span className="text-lg font-bold text-blue-600">{listing.price}</span>
          <span className="text-gray-400 text-xs">/month</span>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {listing.amenities.map((amenity) => (
            <span
              key={amenity}
              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
            >
              {amenity}
            </span>
          ))}
        </div>
        <Link href={`pg-details`}>
          <button
            type="button"
            className="w-full bg-blue-600 text-white rounded-md py-2 text-sm font-semibold hover:bg-blue-700 transition-colors"
          >
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

const PGListingSlider: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showArrows, setShowArrows] = useState({
    left: false,
    right: true,
  });

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowArrows({
        left: scrollLeft > 0,
        right: scrollLeft + clientWidth < scrollWidth,
      });
    }
  };

  const handleScroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const cardWidth = 280 + 16; // card width + gap
    const scrollAmount = cardWidth * 2; // Scroll 2 cards at a time

    container.scrollTo({
      left: direction === 'left'
        ? container.scrollLeft - scrollAmount
        : container.scrollLeft + scrollAmount,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  return (
    <div className="py-16 px-4 max-w-7xl mx-auto cursor-pointer">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-gray-900 font-semibold text-lg">Featured PG Listings</h2>
        <Link
          href="/pg-listings"
          className="text-blue-600 font-semibold text-sm flex items-center gap-1 hover:text-blue-700"
        >
          View All
          <FiArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="relative overflow-hidden">
        {/* Navigation Arrows */}
        {showArrows.left && (
          <button
            onClick={() => handleScroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-transform transform hover:scale-110"
            aria-label="Previous listings"
          >
            <FiChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
        )}

        {showArrows.right && (
          <button
            onClick={() => handleScroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-transform transform hover:scale-110"
            aria-label="Next listings"
          >
            <FiChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        )}

        <div
          ref={scrollContainerRef}
          className="flex gap-4 pb-2 overflow-x-hidden"
          onScroll={checkScroll}
          role="region"
          aria-label="PG listings carousel"
        >
          {pgListings.map((listing) => (
            <PGListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default PGListingSlider;