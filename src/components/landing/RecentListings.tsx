
import PGCard from "../cards/PGCard";

const listings = [
  {
    title: "Modern PG in Andheri",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 7500,
    location: "Mumbai",
  },
  {
    title: "Cozy Room in Noida",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=780&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 5500,
    location: "Delhi NCR",
  },
  {
    title: "Luxury PG in Koramangala",
    image: "https://images.unsplash.com/photo-1564078516393-cf04bd966897?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 9000,
    location: "Bangalore",
  },
];


export default function RecentListings() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Recently Listed</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {listings.map((listing) => (
          <PGCard key={listing.title} {...listing} />
        ))}
      </div>
    </section>
  );
}
