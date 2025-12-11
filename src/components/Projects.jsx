import React from "react";

const projects = [
  {
    id: 1,
    title: "Project One",
    description: "Short description of project one.",
    image: "https://via.placeholder.com/400x250",
    url: "#",
  },
  {
    id: 2,
    title: "Project Two",
    description: "Short description of project two.",
    image: "https://via.placeholder.com/400x250",
    url: "#",
  },
  {
    id: 3,
    title: "Project Three",
    description: "Short description of project three.",
    image: "https://via.placeholder.com/400x250",
    url: "#",
  },
];

export default function Projects() {
  return (
    <section id="portfolio" className="max-w-7xl mx-auto px-6 py-20 md:px-12">
      <h2 className="text-3xl font-semibold mb-8">Projects</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(({ id, title, description, image, url }) => (
          <a
            key={id}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={image}
              alt={title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="font-semibold text-xl mb-2">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
