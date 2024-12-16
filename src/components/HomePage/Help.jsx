import React from "react";
import { FaAmbulance, FaUserMd, FaCapsules } from "react-icons/fa";

const Help = () => {
  return (
    <div className="bg-blue-50 py-16 px-6 md:px-16 lg:px-32">
      {/* Section Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-bold text-blue-800">
          We Are Always Ready to Help You & Your Family
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-700">
          Your health is our priority. From expert consultations to reliable
          pharmacy services, we ensure your well-being is always in safe hands.
        </p>
      </div>

      {/* Icons Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Ambulance Icon */}
        <div className="flex flex-col items-center text-center">
          <div className="bg-white p-6 rounded-full shadow-lg text-red-500">
            <FaAmbulance size={50} />
          </div>
          <h3 className="mt-4 text-xl font-semibold text-gray-800">
            Ambulance Services
          </h3>
          <p className="text-gray-600 mt-2">
            Fast and reliable ambulance services available 24/7 for emergencies.
          </p>
        </div>

        {/* Doctor Icon */}
        <div className="flex flex-col items-center text-center">
          <div className="bg-white p-6 rounded-full shadow-lg text-blue-500">
            <FaUserMd size={50} />
          </div>
          <h3 className="mt-4 text-xl font-semibold text-gray-800">
            Expert Doctors
          </h3>
          <p className="text-gray-600 mt-2">
            Consult with our highly experienced doctors for personalized care.
          </p>
        </div>

        {/* Pharmacy Icon */}
        <div className="flex flex-col items-center text-center">
          <div className="bg-white p-6 rounded-full shadow-lg text-green-500">
            <FaCapsules size={50} />
          </div>
          <h3 className="mt-4 text-xl font-semibold text-gray-800">
            Pharmacy Support
          </h3>
          <p className="text-gray-600 mt-2">
            Get access to quality medicines and healthcare products on time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Help;
