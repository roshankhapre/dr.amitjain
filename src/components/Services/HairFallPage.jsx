import React from "react";
import hairFallImage from "../../assests/young-woman-problems-with-hair-split-weak-hair-tangled-hair-isolated-gray.webp";

const services = [
  {
    title: "Advanced Hair Fall Treatments",
    description:
      "Cutting-edge treatments to reduce hair fall and promote healthy hair growth.",
  },
  {
    title: "PRP Therapy",
    description:
      "Platelet-Rich Plasma therapy to revitalize hair follicles and stimulate growth.",
  },
  {
    title: "Hair Transplant",
    description:
      "Permanent solutions for hair loss with modern, minimally invasive techniques.",
  },
  {
    title: "Nutritional Counseling",
    description:
      "Personalized dietary advice to ensure your hair gets the nutrients it needs.",
  },
  {
    title: "Dandruff & Scalp Treatment",
    description:
      "Effective treatments to eliminate dandruff and improve scalp health.",
  },
  {
    title: "Medications and Supplements",
    description:
      "Prescription-based solutions to prevent hair loss and strengthen hair.",
  },
];

const benefits = [
  "Customized treatment plans for all stages of hair loss",
  "Safe and proven medical techniques",
  "Experienced specialists in hair fall and restoration",
  "Modern diagnostic tools for accurate assessment",
  "Comprehensive care for scalp and hair health",
  "Thousands of satisfied patients with improved confidence",
];

const HairFallPage = () => {
  return (
    <div className="bg-gray-50 font-sans">
      {/* Hero Section */}
      <section
        className="bg-gradient-to-r from-green-700 to-green-500 text-white py-20 px-6 text-center"
        role="region"
        aria-label="Hero Section"
      >
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Hair Fall Treatments
          </h1>
          <p className="text-lg md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Restore your confidence with expert care and advanced solutions for
            hair fall and hair restoration.
          </p>
          <a
            href="#book-appointment"
            className="inline-block bg-white text-green-700 font-semibold py-3 px-8 rounded-full hover:bg-green-200 transition duration-300 shadow-lg"
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
              src={hairFallImage}
              alt="Hair Fall Treatment Solutions"
              className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6">
              Comprehensive Hair Fall Solutions
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              At <strong>Dr. Amit Jain's Clinic</strong>, we specialize in
              diagnosing and treating hair loss with modern, evidence-based
              approaches. From initial consultation to personalized treatment
              plans, we ensure optimal results for every patient.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Whether your hair fall is due to genetics, stress, or medical
              conditions, our tailored treatments are designed to restore your
              hair health and confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-8">
            Our Hair Fall Treatments
          </h2>
          <p className="text-gray-600 mb-12 max-w-xl mx-auto">
            Discover treatments that effectively tackle hair fall and promote
            lasting results.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-2xl transition duration-300"
              >
                <h3 className="text-2xl font-bold text-green-700 mb-4">
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
      <section className="bg-green-50 py-16">
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
        className="bg-gradient-to-r from-green-700 to-green-500 text-white py-16 px-6 text-center"
        role="region"
        aria-label="Book Appointment"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Start Your Hair Restoration Journey Today
        </h2>
        <p className="text-lg mb-6">
          Schedule your consultation with Dr. Amit Jain to explore the best
          solutions for your hair fall concerns.
        </p>
        <a
          href="/book-appointment"
          className="inline-block bg-white text-green-700 font-semibold py-3 px-8 rounded-full hover:bg-green-200 transition duration-300 shadow-lg"
        >
          Book Now
        </a>
      </section>
    </div>
  );
};

export default HairFallPage;
