export default function CallToAction() {
  return (
    <section className="py-20 bg-indigo-50 text-center px-4">
      <h2 className="text-3xl font-bold">Have a job post?</h2>
      <p className="mt-4 text-lg text-gray-600">Join our platform and get your security guard job !</p>
      <div className="mt-6">
        <a href="/dashboard/post" className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 font-medium">
          Post  Jobs
        </a>
      </div>
    </section>
  );
}
