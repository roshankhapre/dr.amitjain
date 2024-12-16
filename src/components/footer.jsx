import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      {/* Main Footer Content */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-5">
        {/* Section 1: Address */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-blue-400">Address</h3>
          <div className="flex items-start gap-3">
            <FaMapMarkerAlt size={22} className="text-blue-500" />
            <p>123 Main Street, New Delhi, India</p>
          </div>
          <div className="flex items-start gap-3">
            <FaPhoneAlt size={22} className="text-blue-500" />
            <p>+91 9876543210</p>
          </div>
          <div className="flex items-start gap-3">
            <FaEnvelope size={22} className="text-blue-500" />
            <p>contact@dramitjainclinic.com</p>
          </div>

          {/* Social Media Links */}
          <div className="flex gap-4 mt-4">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 p-2 rounded-full text-white transition duration-300"
            >
              <FaInstagram size={22} />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 p-2 rounded-full text-white transition duration-300"
            >
              <FaFacebookF size={22} />
            </a>
          </div>
        </div>

        {/* Section 2: Services */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-blue-400">Services</h3>
          <ul className="space-y-2">
            <li className="flex ">
                <span className="content-center "><MdOutlineKeyboardArrowRight/></span>
              <Link to="/services/sexual-health" className="hover:text-blue-500 transition duration-300">
                Sexual Health
              </Link>
            </li>
            <li className="flex">
            <span className="content-center "><MdOutlineKeyboardArrowRight/></span>
              <Link to="/services/hair-fall" className="hover:text-blue-500 transition duration-300">
                Hair Fall
              </Link>
            </li>
            <li className="flex">
            <span className="content-center "><MdOutlineKeyboardArrowRight/></span>
              <Link to="/services/skin-care" className="hover:text-blue-500 transition duration-300">
                Skin Care
              </Link>
            </li>
            <li className="flex">
            <span className="content-center "><MdOutlineKeyboardArrowRight/></span>
              <Link to="/services/pimple-treatment" className="hover:text-blue-500 transition duration-300">
                Pimple Treatment
              </Link>
            </li>
          </ul>
        </div>

        {/* Section 3: Quick Links */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-blue-400">Quick Links</h3>
          <ul className="space-y-2">
            <li className="flex">
            <span className="content-center "><MdOutlineKeyboardArrowRight/></span>
              <Link to="/" className="hover:text-blue-500 transition duration-300">
                Home
              </Link>
            </li>
            <li className="flex">
            <span className="content-center "><MdOutlineKeyboardArrowRight/></span>
              <Link to="/services" className="hover:text-blue-500 transition duration-300">
                Services
              </Link>
            </li>
            <li className="flex">
            <span className="content-center "><MdOutlineKeyboardArrowRight/></span>
              <Link to="/about" className="hover:text-blue-500 transition duration-300">
                About Us
              </Link>
            </li>
            <li className="flex">
            <span className="content-center "><MdOutlineKeyboardArrowRight/></span>
              <Link to="/contact" className="hover:text-blue-500 transition duration-300">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Section 4: Map Integration */}
        <div>
          <h3 className="text-2xl font-bold text-blue-400 mb-4">Our Location</h3>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Clinic Location"
              className="w-full h-48 sm:h-56 lg:h-64"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.2274729291097!2d77.2090217!3d28.6138958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd338dba4f7b%3A0x2b00d9c7e16eaa68!2sNew%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Dr. Amit Jain’s Homeopathy Clinic. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
