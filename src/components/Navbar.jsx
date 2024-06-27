import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar({ scrollToContact }) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false); // State to manage menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle menu visibility
  };

  const handleNavLinkClick = () => {
    setIsOpen(false); // Close menu when clicking on a navigation link
  };

  return (
    <div className="bg-black p-4 flex justify-between items-center text-white">
      <div className="flex items-center">
        <Link className="text-lg font-bold" to="/">
          DKODER
        </Link>
      </div>

      {/* Hamburger menu for mobile */}
      <div className="md:hidden">
        <button className="text-white" onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>

        {/* Dropdown menu for mobile */}
        {isOpen && (
          <div className="absolute right-0 top-14 w-48 bg-black rounded-lg shadow-lg py-2 z-50">
            <MobileNavLink
              href="/"
              text="Home"
              handleClick={handleNavLinkClick}
            />
            <MobileNavLink
              href="/about"
              text="About"
              handleClick={handleNavLinkClick}
            />
            <MobileNavLink
              href="/projects"
              text="Projects"
              handleClick={handleNavLinkClick}
            />
            <MobileNavLink
              href="/resume"
              text="Resume"
              handleClick={handleNavLinkClick}
            />
            <span
              className="block px-4 py-2 text-sm text-white cursor-pointer hover:text-red-900"
              onClick={() => {
                scrollToContact();
                setIsOpen(false);
              }}
            >
              Contact
            </span>
          </div>
        )}
      </div>

      {/* Desktop navigation */}
      <div className="hidden md:flex justify-center flex-grow space-x-4">
        <NavLink href="/" text="Home" handleClick={handleNavLinkClick} />
        <NavLink href="/about" text="About" handleClick={handleNavLinkClick} />
        <NavLink href="/projects" text="Projects" handleClick={handleNavLinkClick} />
        <NavLink href="/resume" text="Resume" handleClick={handleNavLinkClick} />
        <span
          className="hover:text-red-900 cursor-pointer"
          onClick={scrollToContact}
        >
          Contact
        </span>
      </div>
    </div>
  );
}

const NavLink = ({ href, text, handleClick }) => {
  const navigate = useNavigate();

  const handleNavLinkClick = (event) => {
    event.preventDefault();
    navigate(href);
    handleClick(); // Close menu
  };

  return (
    <a
      href={href}
      className="hover:text-red-900 cursor-pointer"
      onClick={handleNavLinkClick}
    >
      {text}
    </a>
  );
};

const MobileNavLink = ({ href, text, handleClick }) => {
  const navigate = useNavigate();

  const handleMobileNavLinkClick = () => {
    navigate(href);
    handleClick(); // Close menu
  };

  return (
    <span
      className="block px-4 py-2 text-sm text-white cursor-pointer hover:text-red-900"
      onClick={handleMobileNavLinkClick}
    >
      {text}
    </span>
  );
};

export default Navbar;
