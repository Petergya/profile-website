


"use client";
import React, { useState, useEffect } from "react";

const images = [
  "/images/herro.jpg",
  "/images/herrro.jpg",
  "/images/hero3.jpg"
];

const texts = [
  {
    title: "Pioneering Mineral Solutions",
    subtitle: "Innovative Exploration & Sustainable Mining",
    description: "Leading the way in critical mineral extraction with cutting-edge geological expertise."
  },
  {
    title: "Global Mining Consultancy",
    subtitle: "Expert Advice for Smart Investments",
    description: "Providing in-depth analysis and consultation for strategic mining asset acquisition."
  },
  {
    title: "Sustainable Resource Management",
    subtitle: "Ethical and Eco-friendly Mining Practices",
    description: "Committed to responsible mining solutions for a greener future."
  }
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState("opacity-100 translate-x-0"); // Make text visible initially

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate("opacity-0 translate-x-full");
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setAnimate("opacity-100 translate-x-0");
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="w-full h-[60vh] md:h-[100vh] bg-cover mt-20 transition-all duration-1000 overflow-hidden relative"
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0  bg-opacity-100"></div>

      {/* Hero Text */}
      <div
        className={`absolute top-3/4 left-20 transform -translate-y-1/2 transition-all duration-1000 ${animate}`}
      >
        <div className="bg-red-600 text-white px-4 py-2 text-sm font-bold w-max">
          {texts[currentIndex].title}
        </div>
        <div className="bg-black text-white px-4 py-2 text-lg mt-1 w-max">
          {texts[currentIndex].subtitle}
        </div>
        <p className="text-white w-80 font-semibold text-lg mt-2 font-TW Cen MT">
          {texts[currentIndex].description}
        </p>
      </div>
    </div>
  );
};

export default Hero;

