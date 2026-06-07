 function About() {
  return (
    <section
      id="about"
      className="bg-slate-900 text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">
          About KSR Constructions
        </h2>

        <p className="text-lg text-center max-w-3xl mx-auto text-gray-300">
          KSR Constructions is committed to delivering
          high-quality residential, commercial, and renovation
          projects across Andhra Pradesh. We focus on quality
          workmanship, transparent communication, timely
          delivery, and customer satisfaction.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <h3 className="text-5xl font-bold text-yellow-400">
              50+
            </h3>
            <p className="mt-2">Projects Completed</p>
          </div>

          <div className="text-center">
            <h3 className="text-5xl font-bold text-yellow-400">
              10+
            </h3>
            <p className="mt-2">Years Experience</p>
          </div>

          <div className="text-center">
            <h3 className="text-5xl font-bold text-yellow-400">
              100+
            </h3>
            <p className="mt-2">Happy Clients</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;