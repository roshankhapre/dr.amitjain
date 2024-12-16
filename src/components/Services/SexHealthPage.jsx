import React from "react";
import sexproblemImage from "../../assests/my-boyfriend-needs-apologize-angry-young-woman-feeling-upset-with-her-husband-waiting-apology-while-sitting-together-bed.webp";

const services = [
  {
    title: "Erectile Dysfunction",
    description:
      "Personalized treatments to help overcome challenges and improve your confidence.",
  },
  {
    title: "Premature Ejaculation",
    description:
      "Effective solutions to help enhance your intimate experiences.",
  },
  {
    title: "Low Libido",
    description:
      "Expert advice and care for addressing a decreased desire for intimacy.",
  },
  {
    title: "Fertility Issues",
    description:
      "Comprehensive evaluation and treatment options for fertility concerns.",
  },
  {
    title: "STI/STD Treatment",
    description:
      "Confidential testing and treatment for sexually transmitted infections.",
  },
  {
    title: "Counseling Services",
    description:
      "Professional counseling for emotional and psychological well-being.",
  },
];

const benefits = [
  "Confidential and supportive environment",
  "Tailored treatment plans for each patient",
  "Expertise in addressing a wide range of issues",
  "Modern diagnostic tools and technology",
  "Compassionate and understanding care",
  "Proven success in improving patient outcomes",
];

const SexHealthPage = () => {
  return (
    <div className="bg-gray-50 font-sans">
      {/* Hero Section */}
      <section
        className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 px-6 text-center"
        role="region"
        aria-label="Hero Section"
      >
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Sexual Health Services
          </h1>
          <p className="text-lg md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Confidential, expert care tailored to improve your intimate health
            and overall well-being.
          </p>
          <a
            href="#book-appointment"
            className="inline-block bg-white text-blue-800 font-semibold py-3 px-8 rounded-full hover:bg-blue-200 transition duration-300 shadow-lg"
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
              src={sexproblemImage}
              alt="A couple discussing their relationship"
              className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6">
              Comprehensive Care for Sexual Health
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              At <strong>Dr. Amit Jain's Clinic</strong>, we provide expert
              guidance for physical and emotional concerns related to sexual
              health. We ensure a safe, confidential, and professional approach
              to your needs.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our team empowers you with the knowledge, tools, and treatment
              options necessary to enhance your intimate relationships and
              overall quality of life.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-8">
            Services We Offer
          </h2>
          <p className="text-gray-600 mb-12 max-w-xl mx-auto">
            Personalized treatments to address your sexual health concerns in a
            compassionate and supportive environment.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-2xl transition duration-300"
              >
                <h3 className="text-2xl font-bold text-blue-800 mb-4">
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
      <section className="bg-blue-50 py-16">
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
        className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16 px-6 text-center"
        role="region"
        aria-label="Book Appointment"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Take Charge of Your Health Today
        </h2>
        <p className="text-lg mb-6">
          Schedule your confidential appointment now to start your journey to
          better health.
        </p>
        <a
          href="/book-appointment"
          className="inline-block bg-white text-blue-800 font-semibold py-3 px-8 rounded-full hover:bg-blue-200 transition duration-300 shadow-lg"
        >
          Book Now
        </a>
      </section>
    </div>
  );
};

export default SexHealthPage;
