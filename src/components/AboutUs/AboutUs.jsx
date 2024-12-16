import React from "react";
import photo from "../../assests/dramitjain.jpg";
import About from "../../assests/AboutUS.jpg";
import approch from "../../assests/approch.jpg";
import WhyUs from "../../assests/whyUS.webp";
import { FaUserDoctor } from "react-icons/fa6";
import { FiCornerDownLeft } from "react-icons/fi";
import { LuMessageSquarePlus } from "react-icons/lu";
import { FaHeadphones } from "react-icons/fa";

export const AboutUs = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <div className="relative w-full">
        <img
          src={About}
          alt="Hero"
          className="w-full h-[500px]  object-cover brightness-75"
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center text-white px-5">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Welcome to Dr. Amit Jain’s Homeopathy Clinic
          </h1>
          <p className="text-lg md:text-xl max-w-3xl">
            Modern solutions for sex-related concerns, hair restoration, and dermatology care. Experience holistic healing with natural remedies tailored just for you.
          </p>
        </div>
      </div>

      {/* About Section */}
      <div className="flex flex-col md:flex-row gap-10 p-8 items-center">
        <div className="flex justify-center md:w-1/2">
          <img
            src={photo}
            alt="Dr. Amit Jain"
            className="rounded-2xl shadow-lg w-[300px] md:w-[400px] object-cover"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-5 text-blue-800">
            About Dr. Amit Jain’s Homeopathy Clinic
          </h2>
          <p className="text-lg mb-5 leading-relaxed">
            At Dr. Amit Jain’s Homeopathy Clinic, we specialize in addressing
            sex-related concerns, hair restoration, and skin care using
            homeopathy’s natural and holistic approach. With years of experience,
            our focus is on treating the root causes, not just the symptoms.
          </p>
          <ul className="space-y-3 text-lg">
            <li>
              <span className="font-bold text-blue-800">🌿 Holistic:</span> Long-term wellness through natural remedies.
            </li>
            <li>
              <span className="font-bold text-blue-800">🤝 Personalized:</span> Tailored treatments for your unique needs.
            </li>
            <li>
              <span className="font-bold text-blue-800">🔒 Confidential:</span> Private and compassionate care.
            </li>
          </ul>
        </div>
      </div>

      {/* Our Approach */}
      <div className="bg-gray-100 py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-blue-800 text-center mb-8">
            Our Approach
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 text-lg leading-relaxed">
              <p className="mb-6">
                At Dr. Amit Jain’s Homeopathy Clinic, we take a modern, holistic
                approach to health. Unlike conventional treatments, homeopathy
                provides natural, side-effect-free solutions to address root
                causes.
              </p>
              <p>
                We understand that every individual is unique. Our personalized
                treatment plans focus on your physical health, emotional
                well-being, and lifestyle—empowering you to take charge of your
                health with confidence.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src={approch}
                alt="Our Approach"
                className="rounded-2xl shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="flex flex-col md:flex-row bg-blue-800 text-white py-12 px-8 md:px-16">
        <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center">
          <img
            src={WhyUs}
            alt="Why Choose Us"
            className="rounded-2xl shadow-lg object-cover w-full max-w-[500px]"
          />
        </div>
        <div className="md:w-1/2 flex flex-col justify-center text-center md:text-left">
          <h2 className="text-4xl font-bold mb-6">Why Choose Us?</h2>
          <p className="text-lg leading-relaxed mb-6">
            At Dr. Amit Jain’s Homeopathy Clinic, we focus on delivering natural,
            personalized, and holistic treatments to help you achieve lasting
            results. Our proven approach ensures gentle, effective, and
            long-term wellness.
          </p>
          <div className="grid grid-cols-2 gap-8 text-center">
            <div>
              <div className="flex justify-center mb-3 text-4xl">
                <FaUserDoctor />
              </div>
              <p className="font-bold">Experienced Doctor</p>
            </div>
            <div>
              <div className="flex justify-center mb-3 text-4xl">
                <FiCornerDownLeft />
              </div>
              <p className="font-bold">Quality Services</p>
            </div>
            <div>
              <div className="flex justify-center mb-3 text-4xl">
                <LuMessageSquarePlus />
              </div>
              <p className="font-bold">Positive Consultations</p>
            </div>
            <div>
              <div className="flex justify-center mb-3 text-4xl">
                <FaHeadphones />
              </div>
              <p className="font-bold">24/7 Support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
