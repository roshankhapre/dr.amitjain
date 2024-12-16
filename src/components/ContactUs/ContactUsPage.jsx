import React from "react";

const ContactUsPage = () => {
  return (
    <div className="bg-gray-100 font-sans">
      {/* Hero Section */}
      <section
        className="bg-gradient-to-r from-indigo-600 to-purple-500 text-white py-20 text-center"
        role="region"
        aria-label="Contact Us Hero"
      >
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            Contact Us
          </h1>
          <p className="text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Reach out to Dr. Amit Jain for expert care and personalized
            consultations.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 md:px-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-14">
            <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
              Get in Touch
            </h2>
            <p className="text-center text-gray-600 mb-10">
              Fill out the form below, and we will respond promptly.
            </p>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="col-span-1">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                />
              </div>
              {/* Email */}
              <div className="col-span-1">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="john.doe@example.com"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                />
              </div>
              {/* Phone */}
              <div className="col-span-1">
                <label
                  htmlFor="phone"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                />
              </div>
              {/* Subject */}
              <div className="col-span-1">
                <label
                  htmlFor="subject"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Enter the subject"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                />
              </div>
              {/* Message */}
              <div className="col-span-2">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Write your message here..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                ></textarea>
              </div>
              {/* Submit Button */}
              <div className="col-span-2 text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-indigo-600 to-purple-500 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transform transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
            Contact Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Phone */}
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl transition duration-300">
              <div className="text-indigo-500 text-5xl mb-4">
                <i className="fas fa-phone-alt"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Phone</h3>
              <p className="text-gray-600">+91 98765 43210</p>
            </div>
            {/* Email */}
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl transition duration-300">
              <div className="text-indigo-500 text-5xl mb-4">
                <i className="fas fa-envelope"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Email</h3>
              <p className="text-gray-600">contact@dramitsclinic.com</p>
            </div>
            {/* Address */}
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl transition duration-300">
              <div className="text-indigo-500 text-5xl mb-4">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Address</h3>
              <p className="text-gray-600">
                123 Health Street, Wellness City, India
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Integration */}
      <section className="py-16">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
            Visit Us
          </h2>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              title="Google Maps Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.4318783425164!2d75.845478!3d22.71415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDQyJzUwLjkiTiA3NcKwNTAnNDMuNyJF!5e0!3m2!1sen!2sin!4v1713380000000"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUsPage;
