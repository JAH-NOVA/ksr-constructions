 function Navbar() {
  return (
    <nav className="bg-slate-900 text-white px-6 py-4 flex justify-between items-center sticky top-0 z-50 shadow-lg">
      <h1 className="text-2xl md:text-3xl font-bold">
        <span className="text-yellow-500">KSR</span> CONSTRUCTIONS
      </h1>

      <div className="hidden md:flex space-x-8 text-lg">
        <a href="#home" className="hover:text-yellow-500 transition duration-300">
          Home
        </a>

        <a href="#services" className="hover:text-yellow-500 transition duration-300">
          Services
        </a>

        <a href="#about" className="hover:text-yellow-500 transition duration-300">
          About
        </a>

        <a href="#projects" className="hover:text-yellow-500 transition duration-300">
          Projects
        </a>

        <a href="#contact" className="hover:text-yellow-500 transition duration-300">
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;