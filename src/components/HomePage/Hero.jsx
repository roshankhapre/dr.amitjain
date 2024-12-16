import React, { useState, useEffect } from "react";
import { carosule } from "../../assests/assets";

const Hero = () => {
  const slides = [
    {
      image: carosule.homeopathy1,
      title: "Welcome to Jain Homeopathy",
      text: "At Jain Homeopathy, we believe in holistic healing, addressing the root cause of your ailments for long-lasting health and well-being. Experience care that is personalized and effective.",
    },
    {
      image: carosule.homeopathy2,
      title: "Expert Consultation",
      text: "Dr. Amit Jain offers detailed consultations to understand your unique health needs. Get tailored treatment plans that align with your body's natural healing capabilities.",
    },
    {
      image: carosule.homeopathy3,
      title: "Natural Remedies",
      text: "Say goodbye to side effects with safe and natural homeopathy remedies. Regain your vitality with trusted solutions crafted to bring balance to your body and mind.",
    },
    {
      image: carosule.homeopathy4,
      title: "Your Health, Our Priority",
      text: "With years of experience and dedication, we aim to provide compassionate care. Let us help you achieve optimal health, naturally and effectively.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

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
    <div className="relative w-full h-screen overflow-hidden font-sans">
      {/* Carousel Slides */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out transform 
            ${
              index === currentIndex
                ? "opacity-100 scale-100 z-10"
                : "opacity-0 scale-95 z-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80 flex flex-col items-center justify-center text-center text-white px-4 md:px-10">
              <h2 className="text-3xl md:text-8xl font-bold mb-4 animate-fadeIn">
                {slide.title}
              </h2>
              <p className="text-lg md:text-xl font-light max-w-3xl leading-relaxed animate-fadeIn delay-200">
                {slide.text}
              </p>
              <button className="mt-6 px-6 py-3 text-lg font-medium bg-white text-black rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-4 shadow-md hover:scale-110 hover:bg-gray-700 transition-all duration-300 z-20"
        aria-label="Previous Slide"
      >
        &#8592;
      </button>
      <button
        onClick={handleNext}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-4 shadow-md hover:scale-110 hover:bg-gray-700 transition-all duration-300 z-20"
        aria-label="Next Slide"
      >
        &#8594;
      </button>

      {/* Indicators */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3 bg-black/50 px-4 py-2 rounded-full z-20">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-4 h-4 rounded-full cursor-pointer transition-all duration-300 
            ${
              index === currentIndex
                ? "bg-white scale-125 shadow-md"
                : "bg-gray-400 hover:bg-white"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
