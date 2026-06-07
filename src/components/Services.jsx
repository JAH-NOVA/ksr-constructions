function Services() {
  const services = [
    "Residential Construction",
    "Commercial Construction",
    "Renovation & Remodeling",
    "Turnkey Projects",
    "Interior Works",
    "Construction Consulting",
  ];

  return (
    <section
      id="services"
      className="py-20 px-6 bg-white"
    >
      <h2 className="text-4xl font-bold text-center mb-12">
        Our Services
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service}
            className="bg-slate-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold mb-3">
              {service}
            </h3>

            <p className="text-gray-600">
              Professional and reliable construction
              solutions delivered with quality,
              safety, and precision.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;