import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai",
    review:
      "Dr. Amit Jain changed my life! His expertise, kindness, and detailed approach to care made my treatment smooth and effective. Highly recommend him to anyone seeking personalized care.",
    photo: "https://via.placeholder.com/150", // Replace with actual patient image
  },
  {
    id: 2,
    name: "Rahul Verma",
    location: "Delhi",
    review:
      "Dr. Amit Jain is an exceptional doctor. He listens patiently and provides solutions that truly work. I am extremely satisfied with the results.",
    photo: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Anjali Kapoor",
    location: "Pune",
    review:
      "I feel so much better after my treatment. Dr. Jain's professionalism and care gave me confidence. Highly recommended!",
    photo: "https://via.placeholder.com/150",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-100 py-12 px-6">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-blue-600">
          Patient Stories That Inspire Trust
        </h2>
        <p className="text-gray-600 mt-2">
          Why patients choose{" "}
          <span className="text-blue-500">Dr. Amit Jain</span> for exceptional
          care.
        </p>
      </div>

      {/* Testimonials */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white p-6 shadow-lg rounded-lg transform hover:scale-105 transition-transform duration-300"
          >
            <div className="flex items-center mb-4">
              {/* Patient Image */}
              <img
                src={testimonial.photo}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-blue-500"
              />
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>
            </div>
            {/* Review */}
            <p className="text-gray-600 italic mb-4">"{testimonial.review}"</p>
            <div className="flex items-center">
              {/* Star Rating */}
              <div className="text-yellow-400">{"⭐".repeat(5)}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Call To Action */}
      <div className="text-center mt-12">
        <p className="text-lg text-gray-700 mb-4">
          Take the first step towards your health today!
        </p>
        <a
          href="tel:+1234567890"
          className="inline-block bg-blue-800 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
        >
          Schedule Your Appointment
        </a>
      </div>
    </section>
  );
};

export default Testimonials;
