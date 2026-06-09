 function Hero() {
  return (
    <section
      id="home"
      className="h-screen bg-cover bg-top flex flex-col justify-center items-center text-center px-6"
      //className="h-[85vh] bg-cover bg-center flex flex-col justify-center items-center text-center px-6"
      style={{
        backgroundImage: "url('/images/b8-arch luxury-villa.jpg')",
      }}
    >
      <div className="bg-black/60 p-8 rounded-xl">
        <h1 className="text-5xl md:text-7xl font-bold text-white">
          Building Dreams With Quality & Trust
        </h1>

        <p className="mt-6 text-lg md:text-2xl text-gray-200 max-w-3xl">
          Residential, Commercial & Turnkey Construction
          Services Across Andhra Pradesh.
        </p>
        <p className="mt-4 text-yellow-400 font-semibold tracking-wide">
  Est. 2001 • Trusted Construction Partner
</p>

         <div className="mt-8 flex gap-4 justify-center">
  <a
    href="#contact"
    className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold"
  >
    Get Free Quote
  </a>

  <a
    href="#projects"
    className="bg-white text-black px-6 py-3 rounded-lg font-semibold"
  >
    View Projects
  </a>
</div>
      </div>
    </section>
  );
}

export default Hero;