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

        <p className="text-lg text-center max-w-4xl mx-auto text-gray-300 leading-8">
          At KSR Constructions, we specialize in delivering
          high-quality residential, commercial, and turnkey
          construction projects across Andhra Pradesh. Our
          commitment to superior craftsmanship, transparent
          communication, and on-time project delivery has earned
          the trust of homeowners and businesses alike.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-slate-800 p-8 rounded-xl text-center">
            <h3 className="text-5xl font-bold text-yellow-400">
              50+
            </h3>
            <p className="mt-3 text-gray-300">
              Projects Completed
            </p>
          </div>

          <div className="bg-slate-800 p-8 rounded-xl text-center">
            <h3 className="text-4xl font-bold text-yellow-400">
              Est. 2001
              : 20+
            </h3>
            <p className="mt-3 text-gray-300">
              Years Experience
            </p>
          </div>

          <div className="bg-slate-800 p-8 rounded-xl text-center">
            <h3 className="text-5xl font-bold text-yellow-400">
              100+
            </h3>
            <p className="mt-3 text-gray-300">
              Happy Clients
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;