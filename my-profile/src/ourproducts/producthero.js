"use client";
import React, { useState, useEffect } from "react";

const images = [
 "/images/image1.jpg",
  "/images/product.jpg",
  "/images/image1.jpg",
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

const producthero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState("opacity-100 translate-x-0");

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
    <div className="relative w-full h-[100vh] lg:mt-24 bg-slate-200 bottom-0 top-0 overflow-hidden">

      <div className="relative w-full h-screen  ">
        <img
          src={images[currentIndex]}
          alt="Hero Image"
          className="absolute inset-0 w-full h-full object-contain lg:object-cover transition-opacity duration-1000"
        />
      </div>





      <div className="absolute  inset-0   ">

      <div
        className={`absolute top-1/2 left-5 md:left-20 mt-6 transform -translate-y-1/2 transition-all duration-1000 ${animate}`}
      >
        <div className="bg-red-600 text-white px-4 py-2 text-xs sm:text-sm md:text-base font-bold w-max">
          {texts[currentIndex].title}
        </div>
        <div className="bg-black text-white px-4 py-2 mt-1 w-max font-semibold text-xs sm:text-sm md:text-base">
          {texts[currentIndex].subtitle}
        </div>
        <p className="text-white w-48 sm:w-60 md:w-80 font-semibold text-xs sm:text-sm md:text-lg mt-2">
          {texts[currentIndex].description}
        </p>
      </div>
      </div>
    </div>

  );
};

export default producthero;



















