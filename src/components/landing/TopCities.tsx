const cities = [
  {
    name: "Delhi",
    image: "https://plus.unsplash.com/premium_photo-1684863506867-4a33a434e940?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Mumbai",
    image: "https://plus.unsplash.com/premium_photo-1689610231577-8870f9e0312a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Bangalore",
    image: "https://plus.unsplash.com/premium_photo-1675616575255-99f40284212a?q=80&w=868&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Kolkata",
    image: "https://plus.unsplash.com/premium_photo-1684863506867-4a33a434e940?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];


export default function TopCities() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Top Cities</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {cities.map((city) => (
          <div key={city.name} className="rounded-2xl overflow-hidden shadow hover:shadow-lg cursor-pointer group">
            <img src={city.image} alt={city.name} className="w-full h-48 object-cover group-hover:scale-105 transition" />
            <div className="p-3 bg-white text-center font-semibold">{city.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
