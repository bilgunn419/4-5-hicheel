import React from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const handleScroll = (href) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2 font-bold text-xl">
          <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center">
            B
          </div>
          Brooklyn
        </div>
        <nav className="hidden md:flex space-x-6 text-gray-700">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleScroll(link.href)}
              className="hover:text-purple-600 transition"
            >
              {link.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
