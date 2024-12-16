import React from "react";
import pimpleTreatmentImage from "../../assests/closeup-young-woman-with-towel-head-pimples-face.webp";

const services = [
  {
    title: "Acne and Pimple Removal",
    description:
      "Advanced therapies to effectively reduce pimples and prevent future breakouts, giving you clear skin.",
  },
  {
    title: "Acne Scarring Treatment",
    description:
      "Specialized treatments to minimize acne scars and restore smooth, healthy skin.",
  },
  {
    title: "Chemical Peels",
    description:
      "Custom peels that exfoliate the skin to reduce acne, scars, and dark spots for a refreshed look.",
  },
  {
    title: "Laser Treatment",
    description:
      "State-of-the-art laser therapies to target acne-causing bacteria and improve skin texture.",
  },
  {
    title: "Skin Hydration Therapy",
    description:
      "Restore your skin's moisture balance to prevent acne and keep your skin glowing.",
  },
  {
    title: "Dermatologist Consultation",
    description:
      "Personalized consultation to address acne concerns and create effective treatment plans.",
  },
];

const benefits = [
  "Expert dermatological care tailored to your skin type",
  "Advanced technology and proven acne treatments",
  "Personalized treatment plans for lasting results",
  "Safe and effective therapies with no downtime",
  "Comprehensive consultation and follow-ups",
  "Thousands of success stories with clear, glowing skin",
];

const PimpleTreatmentPage = () => {
  return (
    <div className="bg-gray-50 font-sans">
      {/* Hero Section */}
      <section
        className="bg-gradient-to-r from-purple-600 to-purple-400 text-white py-20 px-6 text-center"
        role="region"
        aria-label="Hero Section"
      >
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Pimple Treatment Services
          </h1>
          <p className="text-lg md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Say goodbye to acne and pimples with advanced, effective treatments
            designed for clear, healthy skin.
          </p>
          <a
            href="#book-appointment"
            className="inline-block bg-white text-purple-600 font-semibold py-3 px-8 rounded-full hover:bg-purple-100 transition duration-300 shadow-lg"
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
              src={pimpleTreatmentImage}
              alt="Pimple Treatment Services"
              className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6">
              Get Clear, Pimple-Free Skin with Expert Care
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              At <strong>Dr. Amit Jain's Clinic</strong>, we specialize in
              effective pimple and acne treatments tailored to your unique skin
              type. Using advanced dermatological solutions, we help you achieve
              long-lasting, clear, and healthy skin.
            </p>
            <p className="text-gray-600 leading-relaxed">
              From acne removal to scar treatment, our customized approach
              ensures visible improvements and lasting results.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-8">
            Our Pimple Treatment Services
          </h2>
          <p className="text-gray-600 mb-12 max-w-xl mx-auto">
            Discover the best treatments to reduce acne, prevent breakouts, and
            restore healthy, glowing skin.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-2xl transition duration-300"
              >
                <h3 className="text-2xl font-bold text-purple-600 mb-4">
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
      <section className="bg-purple-50 py-16">
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
        className="bg-gradient-to-r from-purple-600 to-purple-400 text-white py-16 px-6 text-center"
        role="region"
        aria-label="Book Appointment"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready for Pimple-Free Skin?
        </h2>
        <p className="text-lg mb-6">
          Book an appointment today and let Dr. Amit Jain's expertise help you
          achieve clear, confident skin.
        </p>
        <a
          href="/book-appointment"
          className="inline-block bg-white text-purple-600 font-semibold py-3 px-8 rounded-full hover:bg-purple-100 transition duration-300 shadow-lg"
        >
          Book Now
        </a>
      </section>
    </div>
  );
};

export default PimpleTreatmentPage;
