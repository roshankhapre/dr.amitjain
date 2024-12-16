import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-gray-200 px-4 py-2 hidden lg:flex justify-between text-sm">
        <div>Jain Homeo Medical, Jangampura (Malganj) In Front Of Porwal Bhawan, BOI Bank, Rathi X-ray,, Indore, M.P</div>
        <div className="flex gap-4">
          <span>+91 9425943429</span>
          <span>email@example.com</span>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          {/* Left */}
          <div className="text-lg font-bold">Dr.AmitJain</div>

          {/* Hamburger Icon */}
          <button
            className="lg:hidden text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            &#9776;
          </button>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex gap-6 font-medium">
            <li>
              <a href="#home" className="hover:text-blue-500">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-blue-500">
                Services
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-500">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-500">
                Contact
              </a>
            </li>
          </ul>

          {/* Right Button */}
          <div className="hidden lg:block">
            <a
              href="#appointment"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Book Appointment
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="lg:hidden flex flex-col ps-5 gap-4 py-4 bg-gray-100">
            <li>
              <a href="#home" className="hover:text-blue-500">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-blue-500">
                Services
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-500">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-500">
                Contact
              </a>
            </li>
            <li>
              <a
                href="#appointment"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Book Appointment
              </a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
