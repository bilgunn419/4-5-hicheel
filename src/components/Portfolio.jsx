import React from "react";

export default function Portfolio() {
  return (
    <section
      id="home"
      className="bg-gradient-to-b from-gray-100 to-gray-200 py-20 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto bg-white rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center shadow-lg">
        <div className="flex-shrink-0 w-full md:w-1/3 mb-10 md:mb-0">
          <img
            src="https://randomuser.me/api/portraits/men/75.jpg"
            alt="Brooklyn Gilbert"
            className="rounded-3xl object-cover w-full h-auto"
          />
        </div>

        <div className="md:ml-16 flex-1">
          <h1 className="text-5xl font-extrabold mb-4 text-gray-900">
            Hello, I’m <br />
            Brooklyn Gilbert
          </h1>
          <p className="text-gray-600 max-w-xl mb-8">
            I'm a Freelance{" "}
            <span className="text-pink-500 font-semibold">UI/UX Designer</span>{" "}
            and <span className="text-pink-500 font-semibold">Developer</span>{" "}
            based in London, England. I strive to build immersive and beautiful
            web applications through carefully crafted code and user-centric
            design.
          </p>

          <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg transition">
            Say Hello!
          </button>

          <div className="mt-12 flex space-x-8 max-w-md">
            <div className="bg-gray-100 rounded-lg p-6 text-center shadow">
              <p className="text-3xl font-bold">15 Y.</p>
              <p className="text-gray-500">Experience</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 text-center shadow">
              <p className="text-3xl font-bold">250+</p>
              <p className="text-gray-500">Projects</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 text-center shadow">
              <p className="text-3xl font-bold">58</p>
              <p className="text-gray-500">Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
