 function Projects() {
  const projects = [
    {
      title: "Luxury Villa",
      location: "Guntur",
      image: "/images/project1.jpg",
    },
    {
      title: "Commercial Building",
      location: "Vijayawada",
      image: "/images/project2.webp",
    },
    {
      title: "Modern Duplex House",
      location: "Amaravati",
      image: "/images/project3.jpg",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-slate-100">
      <h2 className="text-4xl font-bold text-center mb-12">
        Our Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover"
            />

            <div className="p-6">
              <h3 className="text-xl font-bold">
                {project.title}
              </h3>

              <p className="text-gray-600 mt-2">
                {project.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;