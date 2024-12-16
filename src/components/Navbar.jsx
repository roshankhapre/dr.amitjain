import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownTimeout = useRef(null); // To manage the delay

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleMouseEnter = () => {
    clearTimeout(dropdownTimeout.current); // Clear any pending close action
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200); // Add slight delay to allow smoother hover
  };

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-gray-200 px-4 py-2 hidden lg:flex justify-between text-sm">
        <div>
          Jain Homeo Medical, Jangampura (Malganj) In Front Of Porwal Bhawan,
          BOI Bank, Rathi X-ray, Indore, M.P
        </div>
        <div className="flex gap-4">
          <span>+91 9425943429</span>
          <span>email@example.com</span>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <div className="text-lg font-bold">Dr.AmitJain</div>

          {/* Hamburger Icon */}
          <button
            className="lg:hidden text-2xl"
            onClick={toggleMenu}
            aria-label="Open Menu"
          >
            &#9776;
          </button>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex gap-6 font-medium items-center">
            <li>
              <Link to="/" className="hover:text-blue-800">
                Home
              </Link>
            </li>
            {/* Services Dropdown */}
            <li
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="hover:text-blue-800 focus:outline-none"
                aria-haspopup="true"
              >
                Services
              </button>
              {/* Dropdown Content */}
              <ul
                className={`absolute left-0 mt-2 bg-white shadow-lg rounded border w-48 transition-all duration-300 ease-in-out ${
                  isDropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
              >
                <li>
                  <Link
                    to="/services/sex-health"
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Sex Health
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/hair-fall"
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Hair Fall
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/skin-care"
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Skin Care
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/pimple-treatment"
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Pimple Treatment
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-800">
                About
              </Link>
            </li>
            <li>
              <Link to="/contactus" className="hover:text-blue-800">
                Contact
              </Link>
            </li>
          </ul>

          {/* Appointment Button */}
          <div className="hidden lg:block">
            <Link
              to="/appointment"
              className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-900"
            >
              Book Appointment
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="lg:hidden flex flex-col gap-4 py-4 bg-gray-100 ps-5">
            <li>
              <Link to="/" className="hover:text-blue-800" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            {/* Services Dropdown */}
            <li>
              <button
                className="hover:text-blue-800 focus:outline-none"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Services
              </button>
              {isDropdownOpen && (
                <ul className="ms-4 bg-white border-l-2 border-gray-300">
                  <li>
                    <Link
                      to="/services/sex-health"
                      className="block hover:text-blue-800 py-1"
                      onClick={toggleMenu}
                    >
                      Sex Health
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services/hair-fall"
                      className="block hover:text-blue-800 py-1"
                      onClick={toggleMenu}
                    >
                      Hair Fall
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services/skin-care"
                      className="block hover:text-blue-800 py-1"
                      onClick={toggleMenu}
                    >
                      Skin Care
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services/pimple-treatment"
                      className="block hover:text-blue-800 py-1"
                      onClick={toggleMenu}
                    >
                      Pimple Treatment
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-blue-800"
                onClick={toggleMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contactus"
                className="hover:text-blue-800"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/appointment"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-900"
                onClick={toggleMenu}
              >
                Book Appointment
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
