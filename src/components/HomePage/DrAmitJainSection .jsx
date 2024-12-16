import React from "react";
import doctorImage from "../../assests/dramitjain.jpg"; // Replace with Dr. Amit Jain's image

const DrAmitJainSection = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: Image Section */}
          <div className="flex justify-center">
            <img
              src={doctorImage}
              alt="Dr. Amit Jain"
              className="w-3/4 md:w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Right: Text Section */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Dr. Amit Jain
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Dr. Amit Jain is a leading homeopathy specialist committed to
              improving the lives of his patients. With years of experience, he
              offers natural, safe, and effective treatments for a variety of
              health concerns, including <strong>hair fall</strong>,{" "}
              <strong>sexual health issues</strong>, and other chronic
              conditions.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              His approach is rooted in providing personalized care to address
              the root cause of the problem while promoting holistic healing.
            </p>
            <div>
              <button className="px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300">
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrAmitJainSection;
