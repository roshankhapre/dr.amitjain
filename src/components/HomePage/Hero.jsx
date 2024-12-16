import React, { useState } from "react";
import { carosule } from "../../assests/assets";

const Hero = () => {
  const slides = [
    {
      image: carosule.homeopathy1,
      title: "Welcome to Jain Homeopathy",
      text: "Providing holistic healing solutions for better health.",
    },
    {
      image: carosule.homeopathy2,
      title: "Expert Consultation",
      text: "Get personalized treatment plans from Dr. Amit Jain.",
    },
    {
      image: carosule.homeopathy3,
      title: "Natural Remedies",
      text: "Experience the power of natural and safe remedies.",
    },
    {
      image: carosule.homeopathy4,
      title: "Your Health, Our Priority",
      text: "Caring for you with dedication and expertise.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-transform transform duration-700 ease-in-out ${
            index === currentIndex
              ? "translate-x-0 opacity-100 scale-100"
              : "translate-x-full opacity-0 scale-95"
          }`}
          style={{ zIndex: index === currentIndex ? 10 : 0 }}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-6 text-white">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
              {slide.title}
            </h2>
            <p className="text-lg md:text-2xl font-light max-w-3xl">
              {slide.text}
            </p>
          </div>
        </div>
      ))}

      {/* Previous Button */}
      <button
        onClick={handlePrev}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 rounded-full p-4 shadow-lg hover:bg-gray-300 transition duration-300 z-20"
      >
        &#8592;
      </button>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 rounded-full p-4 shadow-lg hover:bg-gray-300 transition duration-300 z-20"
      >
        &#8594;
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-4 h-4 rounded-full cursor-pointer transition-all duration-300 transform ${
              index === currentIndex
                ? "bg-white scale-125 shadow-lg"
                : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
