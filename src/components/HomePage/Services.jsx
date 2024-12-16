import React from "react";
import { services } from "../../assests/assets"; // Assuming your assets.js exports the images

const Services = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-16 px-6 md:px-16 lg:px-32">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-extrabold text-blue-800 leading-tight">
          Welcome to Dr. Amit Jain’s Homeopathy Clinic
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed mx-auto max-w-4xl">
          With expertise in treating sex-related issues, hair fall, and
          dermatological problems, Dr. Jain provides holistic care tailored to
          your needs. Using natural homeopathic remedies, we focus on the root
          causes of health issues to ensure long-term wellness. Experience
          compassionate care in a confidential environment, and let us help you
          achieve confidence and optimal health.
        </p>
      </div>

      {/* Services Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Service Card 1 */}
        <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <img
            src={services.sexproblem}
            alt="Sexual Health"
            className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute bottom-0 left-0 p-6">
            <h3 className="text-2xl font-bold text-white">Sexual Health</h3>
            <p className="text-white mt-2 text-sm">
              Discover expert solutions for improving sexual health and
              addressing related issues with utmost confidentiality.
            </p>
            <button className="mt-4 inline-block px-4 py-2 text-sm font-medium text-blue-800 bg-white rounded-full hover:bg-blue-800 hover:text-white transition-colors duration-300">
              Read More →
            </button>
          </div>
        </div>

        {/* Service Card 2 */}
        <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <img
            src={services.hairfall}
            alt="Hair Fall"
            className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute bottom-0 left-0 p-6">
            <h3 className="text-2xl font-bold text-white">Hair Fall</h3>
            <p className="text-white mt-2 text-sm">
              Say goodbye to hair fall with personalized homeopathic treatments
              designed for regrowth and healthy hair.
            </p>
            <button className="mt-4 inline-block px-4 py-2 text-sm font-medium text-blue-800 bg-white rounded-full hover:bg-blue-800 hover:text-white transition-colors duration-300">
              Read More →
            </button>
          </div>
        </div>

        {/* Service Card 3 */}
        <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <img
            src={services.skinproblem}
            alt="Skin Care"
            className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute bottom-0 left-0 p-6">
            <h3 className="text-2xl font-bold text-white">Skin Care</h3>
            <p className="text-white mt-2 text-sm">
              Get effective solutions for skin-related concerns to achieve
              healthy, radiant, and glowing skin.
            </p>
            <button className="mt-4 inline-block px-4 py-2 text-sm font-medium text-blue-800 bg-white rounded-full hover:bg-blue-800 hover:text-white transition-colors duration-300">
              Read More →
            </button>
          </div>
        </div>

        {/* Service Card 4 */}
        <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <img
            src={services.pimpleproblem}
            alt="Pimple Treatment"
            className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute bottom-0 left-0 p-6">
            <h3 className="text-2xl font-bold text-white">Pimple Treatment</h3>
            <p className="text-white mt-2 text-sm">
              Treat acne and pimples with advanced homeopathic remedies for
              clear and blemish-free skin.
            </p>
            <button className="mt-4 inline-block px-4 py-2 text-sm font-medium text-blue-800 bg-white rounded-full hover:bg-blue-800 hover:text-white transition-colors duration-300">
              Read More →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
