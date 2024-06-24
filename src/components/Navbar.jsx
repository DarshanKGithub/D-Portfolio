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
      <div className="bg-black p-5 flex justify-center items-center">
        <Link
          className="text-lg font-bold flex relative left-"
          onClick={handleClick}
        >
          DKODER
        </Link>
        <div className="md:hidden absolute flexbox left-3">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
        <div
          className={`flex-col md:flex md:flex-row md:items-center relative md:static right-11 top-111 md:bg-transparent w-full md:w-auto transition-all duration-300 ease-in-out ${
            isOpen ? "top-16 opacity-100" : "top-[-490px] opacity-0"
          } md:opacity-100`}
        >
          <Link
            className="hover:text-red-900 p-2 md:p-0 md:ml-4"
            to="/"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            className="hover:text-red-900 p-2 md:p-0 md:ml-4"
            to="/about"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>

          <Link
            className="hover:text-red-900 p-2 md:p-0 md:ml-4"
            to="/projects"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link
            className="hover:text-red-900 p-2 md:p-0 md:ml-4"
            to="/resume"
            onClick={() => setIsOpen(false)}
          >
            Resume
          </Link>
          <span
            href="/contacts"
            className="hover:text-red-900 p-2 md:p-0 md:ml-4 cursor-pointer"
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
