import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar({ scrollToContact }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="text-white">
      <div className="bg-black p-5 flex justify-between items-center">
        <Link className="text-lg font-bold" onClick={handleClick}>
          DKODER
        </Link>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
        <div
          className={`absolute md:relative md:flex md:flex-row md:items-center bg-black md:bg-transparent w-full md:w-auto transition-all duration-300 ease-in-out ${
            isOpen ? "top-16 opacity-100 z-50" : "top-[-490px] opacity-0 z-[-1]"
          } md:opacity-100 md:top-0`}
        >
          <Link
            className="block md:inline-block hover:text-red-900 p-2 md:p-0 md:ml-4"
            to="/"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            className="block md:inline-block hover:text-red-900 p-2 md:p-0 md:ml-4"
            to="/about"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            className="block md:inline-block hover:text-red-900 p-2 md:p-0 md:ml-4"
            to="/projects"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link
            className="block md:inline-block hover:text-red-900 p-2 md:p-0 md:ml-4"
            to="/resume"
            onClick={() => setIsOpen(false)}
          >
            Resume
          </Link>
          <span
            className="block md:inline-block hover:text-red-900 p-2 md:p-0 md:ml-4 cursor-pointer"
            onClick={() => {
              scrollToContact();
              setIsOpen(false);
            }}
          >
            Contact
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
