import React from "react";
import skinCareImage from "../../assests/beautiful-young-woman-white-bathrobe-posing-white-wall.webp";

const services = [
  {
    title: "Acne and Scar Treatment",
    description:
      "Advanced solutions to clear acne and reduce scars, leaving your skin smooth and radiant.",
  },
  {
    title: "Anti-Aging Solutions",
    description:
      "Personalized treatments to reduce fine lines, wrinkles, and restore youthful skin.",
  },
  {
    title: "Skin Rejuvenation",
    description:
      "State-of-the-art therapies to revitalize and brighten dull skin for a natural glow.",
  },
  {
    title: "Pigmentation Treatment",
    description:
      "Effective treatments to target hyperpigmentation, dark spots, and uneven skin tone.",
  },
  {
    title: "Laser Hair Removal",
    description:
      "Safe and efficient laser treatments for long-lasting hair removal on all skin types.",
  },
  {
    title: "Chemical Peels",
    description:
      "Custom chemical peel treatments to exfoliate, smooth, and rejuvenate your skin.",
  },
];

const benefits = [
  "Customized skin care treatments for all skin types",
  "Latest technology and safe, effective therapies",
  "Personalized care by expert dermatologists",
  "Proven solutions for various skin concerns",
  "Comprehensive consultations for long-term results",
  "Thousands of satisfied patients with glowing skin",
];

const SkinCarePage = () => {
  return (
    <div className="bg-gray-50 font-sans">
      {/* Hero Section */}
      <section
        className="bg-gradient-to-r from-pink-600 to-pink-400 text-white py-20 px-6 text-center"
        role="region"
        aria-label="Hero Section"
      >
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Skin Care Treatments
          </h1>
          <p className="text-lg md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your skin with expert care and advanced treatments
            designed to enhance your natural beauty.
          </p>
          <a
            href="#book-appointment"
            className="inline-block bg-white text-pink-600 font-semibold py-3 px-8 rounded-full hover:bg-pink-100 transition duration-300 shadow-lg"
          >
            Book an Appointment
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-6 md:px-12 py-16">
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <img
              src={skinCareImage}
              alt="Skin Care Treatments"
              className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6">
              Expert Solutions for Healthy, Glowing Skin
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              At <strong>Dr. Amit Jain's Clinic</strong>, we offer tailored skin
              care treatments to address a wide range of skin concerns. Our
              expert dermatologists use the latest technologies to help you
              achieve clear, glowing, and healthy skin.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Whether it's acne, pigmentation, or anti-aging solutions, we
              ensure treatments are personalized to your unique needs for
              long-term results.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-8">
            Our Skin Care Services
          </h2>
          <p className="text-gray-600 mb-12 max-w-xl mx-auto">
            Explore a range of treatments that cater to all your skin care
            needs, ensuring radiant and healthy skin.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-2xl transition duration-300"
              >
                <h3 className="text-2xl font-bold text-pink-600 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-pink-50 py-16">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center hover:scale-105 transition-transform duration-300"
              >
                <p className="text-gray-800 font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="book-appointment"
        className="bg-gradient-to-r from-pink-600 to-pink-400 text-white py-16 px-6 text-center"
        role="region"
        aria-label="Book Appointment"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Transform Your Skin?
        </h2>
        <p className="text-lg mb-6">
          Schedule a consultation with Dr. Amit Jain and let our experts help
          you achieve beautiful, glowing skin.
        </p>
        <a
          href="/book-appointment"
          className="inline-block bg-white text-pink-600 font-semibold py-3 px-8 rounded-full hover:bg-pink-100 transition duration-300 shadow-lg"
        >
          Book Now
        </a>
      </section>
    </div>
  );
};

export default SkinCarePage;
