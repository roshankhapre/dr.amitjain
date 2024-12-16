import React from "react";
import {
  FaStethoscope,
  FaHeartbeat,
  FaUserMd,
  FaLungs,
  FaBrain,
  FaRegSmile, // Replaced FaSkin with FaRegSmile
  FaChild,
  FaAllergies,
  FaHeadSideVirus,
  FaHandHoldingMedical,
  FaCapsules,
  FaHeartBroken,
  FaUserNurse,
} from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "General Treatment",
    icon: FaStethoscope,
    description: "Comprehensive care for all your general health needs.",
  },
  {
    id: 2,
    title: "Skin Problem",
    icon: FaRegSmile, // Using FaRegSmile here
    description: "Treatment for all types of skin conditions and issues.",
  },
  {
    id: 3,
    title: "Infertility",
    icon: FaUserMd,
    description: "Specialized care for infertility and related concerns.",
  },
  {
    id: 4,
    title: "Blood Pressure",
    icon: FaHeartbeat,
    description: "Monitoring and management of blood pressure levels.",
  },
  {
    id: 5,
    title: "Mental Illness",
    icon: FaBrain,
    description: "Professional help for mental health and well-being.",
  },
  {
    id: 6,
    title: "Respiratory Disease",
    icon: FaLungs,
    description: "Treatment for respiratory-related health issues.",
  },
  {
    id: 7,
    title: "Thyroid",
    icon: FaCapsules,
    description: "Thyroid care and hormone balance management.",
  },
  {
    id: 8,
    title: "Allergy",
    icon: FaAllergies,
    description: "Solutions for allergic reactions and prevention.",
  },
  {
    id: 9,
    title: "Migraine",
    icon: FaHeadSideVirus,
    description: "Relief and management of migraine headaches.",
  },
  {
    id: 10,
    title: "Pimple",
    icon: FaUserNurse,
    description: "Effective treatment for acne and skin health.",
  },
  {
    id: 11,
    title: "Ulcer",
    icon: FaHandHoldingMedical,
    description: "Care for ulcers and digestive issues.",
  },
  {
    id: 12,
    title: "Arthritis",
    icon: FaStethoscope,
    description: "Joint and arthritis pain management.",
  },
  {
    id: 13,
    title: "Stones",
    icon: FaHeartBroken,
    description: "Treatment for kidney stones and related issues.",
  },
  {
    id: 14,
    title: "Sex Health",
    icon: FaUserMd,
    description: "Consultation for sexual health concerns and problems.",
  },
  {
    id: 15,
    title: "Hair Problems",
    icon: FaChild,
    description: "Treatment for hair fall and scalp conditions.",
  },
];

const HealthServices = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-6 md:px-12">
        {/* Main Heading */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          We Offer Different Services To Improve Your Health
        </h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Explore a range of services designed to address your health concerns.
          Our specialized treatments ensure comprehensive care for a healthier
          you.
        </p>
        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="flex items-center justify-center h-16 w-16 bg-blue-100 rounded-full mx-auto mb-4">
                <service.icon className="text-blue-600 text-3xl" />
              </div>
              <h2 className="text-xl font-semibold text-gray-800 text-center mb-2">
                {service.title}
              </h2>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HealthServices;
