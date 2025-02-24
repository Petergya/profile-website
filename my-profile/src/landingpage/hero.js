"use client";

import React, { useState, useEffect } from "react";

const images = [
  "/images/herobg1.jpg",
  "/images/herobg2.jpg",
  "/images/herobg3.jpg"
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [animate, setAnimate] = useState("opacity-0 translate-x-full");

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate("opacity-0 translate-x-full"); // Reset animation
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
        setAnimate("opacity-100 translate-x-0");
      }, 500);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[60vh] md:h-[95vh] bg-cover  transition-all duration-1000 overflow-hidden"
      style={{ backgroundImage: `url(${images[currentImage]})` }}>
      {/* <div className=" inset-0 bg-black bg-opacity-75"></div> */}
      <div className={`absolute top-1/2 left-20 transform -translate-y-1/2 transition-all duration-1000 ${animate}`}>
        <div className="bg-red-600 text-white px-4 py-2 text-sm font-bold w-max ">
        METALLIZ    
        </div>
        <div className="bg-black text-white px-4 py-2 text-lg mt-1 w-max">
        GROUP (UK)
        </div>
        <p className="text-white w-80 font-semibold text-lg ">- Unlocking Global Critical Mineral Solutions
 + Exceptional Geological Consultancy for Reliable Mining Asset Acquisition (on banner)
</p>
      </div>
    </div>
  );
};

export default Hero;
