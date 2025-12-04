import React from "react";

export default function Hazel() {
  return (
    <div className="font-sans">
      {/* Hero */}
      <section className="bg-rose-300 text-white p-10">
        <h1 className="text-4xl font-serif max-w-2xl">
          I’m a <span className="font-semibold">Scientist</span> and Speaker who is interested in the
          psychology of greed.
        </h1>

        <div className="mt-10">
          <h3 className="font-semibold">My Mission</h3>
          <p className="text-sm mt-2 max-w-md">
            This is my mission. Maecenas a varius odio egestas auctor. Praesent facilisis, ex a gravida
            ultricies.
          </p>
        </div>

        <div className="mt-10">
          <h3 className="font-semibold mb-2">Specialties</h3>
          <ul className="text-sm grid grid-cols-2 gap-1 max-w-sm">
            <li>Public Speaking</li>
            <li>Data Analysis</li>
            <li>Writing & Editing</li>
            <li>Programming</li>
          </ul>
        </div>
      </section>

      {/* Blog */}
      <section className="p-10">
        <h2 className="font-semibold mb-4">Tech Blog</h2>

        <div className="space-y-4">
          <div>
            <h4 className="font-semibold">This Is Your Brain On Helium</h4>
            <p className="text-xs text-gray-500">May 12, 2025</p>
          </div>

          <div>
            <h4 className="font-semibold">In Search Of Intelligence</h4>
            <p className="text-xs text-gray-500">June 2, 2025</p>
          </div>

          <div>
            <h4 className="font-semibold">Should Public Transit Be Free?</h4>
            <p className="text-xs text-gray-500">March 17, 2025</p>
          </div>
        </div>
      </section>

      {/* Speaking Events */}
      <section className="bg-amber-100 p-10">
        <h2 className="font-semibold mb-4">Speaking Events</h2>

        <ul className="text-sm space-y-3">
          <li>
            <strong>NY Economics Forum</strong> — August 25th, 2025
          </li>
          <li>
            <strong>Emerging Tech Meet-Up</strong> — August 25th, 2025
          </li>
          <li>
            <strong>Creative Code Meetup</strong> — August 22nd, 2025
          </li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white text-center p-6 text-sm">
        Made with ❤️
      </footer>
    </div>
  );
}
