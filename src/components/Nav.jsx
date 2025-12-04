import React, { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { FaCircle } from "react-icons/fa";
const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activelink, setActivelink] = useState("#home");
  const linklist = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#service", label: "Service" },
    { href: "#testimonials", label: "Testimonials" },
  ];
  useEffect(() => {
    const Widthchecker = (second) => {
      setMenuOpen(false);
    };
    Widthchecker();
    window.addEventListener("resize", Widthchecker);
    return () => {
      window.removeEventListener("resize", Widthchecker);
    };
  }, []);

  return (
    <div className="relative">
      <div className="h-15 fixed top-0 lef-0 right-0 w-full bg-white">
        <div className="hidden md:block">
          <div className="flex justify-between items-center">
            <div className="ml-5">
              <FaCircle className="w-10 h-10 fill-amber-500" />
            </div>
            <div className=" flex flex-row justify-around gap-10 m-5 ">
              {linklist.map((link) => (
                <a
                  onClick={() => setActivelink(link.href)}
                  href={link.href}
                  className={` text-sm font-medium relative after:absolute after:bottom-0 after:h-[1px] after:left-0 after:w-0 hover:after:w-full after:bg-blue-500 after:transition-all 1 ${
                    activelink === link.href
                      ? "after:w-full text-blue-900"
                      : "hover:text-gray-500"
                  }   `}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="md:hidden">
          <div className=" flex flex-row justify-between  my-2 mr:5 ">
            <button
              onClick={() => {
                setMenuOpen(!menuOpen);
                setActivelink("#home");
              }}
            >
              {menuOpen ? (
                <HiX className="w-10 h-10" />
              ) : (
                <HiMenu className="w-10 h-10" />
              )}
            </button>
            <div className="ml-5">
              <FaCircle className="w-10 h-10 fill-amber-500" />
            </div>
            {/* {!menuOpen && }
          {menuOpen && <HiX onClick={() => setMenuOpen(!menuOpen)} />} */}
          </div>

          {menuOpen && (
            <div className=" flex flex-col justify-end-safe gap-5 w-1/4 bg-white">
              {linklist.map((link) => (
                <a
                  onClick={() => setActivelink(link.href)}
                  className={` text-sm font-medium  ${
                    activelink === link.href
                      ? "after:w-full text-red-600"
                      : "hover:text-gray-500"
                  }   `}
                  href={link.href}
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
