 function Navbar() {
  return (
    <nav className="bg-slate-900 text-white p-4 flex justify-between items-center sticky top-0 z-50 shadow-lg">
      <h1 className="text-3xl font-bold">
        <span className="text-yellow-500">KSR</span> CONSTRUCTIONS
      </h1>

      <div className="space-x-8">
        <a href="#home" className="hover:text-yellow-500 transition">
          Home
        </a>

        <a href="#services" className="hover:text-yellow-500 transition">
          Services
        </a>

        <a href="#about" className="hover:text-yellow-500 transition">
          About
        </a>

        <a href="#projects" className="hover:text-yellow-500 transition">
          Projects
        </a>

        <a href="#contact" className="hover:text-yellow-500 transition">
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;