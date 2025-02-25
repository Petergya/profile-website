// "use client";

// import React, { useState, useEffect } from "react";

// const images = [
//   "/images/hero1.jpg",
//   "/images/hero2.jpg",
//   "/images/hero3.jpg"
// ];

// const Hero = () => {
//   const [currentImage, setCurrentImage] = useState(0);
//   const [animate, setAnimate] = useState("opacity-0 translate-x-full");

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setAnimate("opacity-0 translate-x-full"); // Reset animation
//       setTimeout(() => {
//         setCurrentImage((prev) => (prev + 1) % images.length);
//         setAnimate("opacity-100 translate-x-0");
//       }, 500);
//     }, 4000); // Change image every 4 seconds
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="w-full h-[60vh] md:h-[95vh] bg-cover mt-20  transition-all duration-1000 overflow-hidden"
//       style={{ backgroundImage: `url(${images[currentImage]})` }}>
//       {/* <div className=" inset-0 bg-black bg-opacity-75"></div> */}
//       <div className={`absolute top-1/2 left-20 transform -translate-y-1/2 transition-all duration-1000 ${animate}`}>
//         <div className="bg-red-600 text-white px-4 py-2 text-sm font-bold w-max ">
//         METALLIZ    
//         </div>
//         <div className="bg-black text-white px-4 py-2 text-lg mt-1 w-max">
//         GROUP (UK)
//         </div>
//         <p className="text-white w-80 font-semibold text-lg ">Unlocking Global Critical Mineral Solutions
//  + Exceptional Geological Consultancy for Reliable Mining Asset Acquisition (on banner)
// </p>
//       </div>

//     </div>
//   );
// };

// export default Hero;


"use client";

import React, { useState, useEffect } from "react";

const images = [
  "/images/hero1.jpg",
  "/images/hero2.jpg",
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
  const [animate, setAnimate] = useState("opacity-0 translate-y-10");

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate("opacity-0 translate-y-10"); // Reset animation
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setAnimate("opacity-100 translate-y-0");
      }, 500);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="w-full h-[70vh] md:h-[95vh] bg-cover bg-center flex items-center justify-center text-center transition-all duration-1000 overflow-hidden relative"
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div
        className={`relative z-10 bg-white bg-opacity-20 backdrop-blur-sm p-8 rounded-lg text-white shadow-lg transition-all duration-1000 ${animate}`}
      >
        <h1 className="bg-red-600 text-white px-6 py-2 text-lg font-bold inline-block rounded-md">
          {texts[currentIndex].title}
        </h1>
        <h2 className="bg-black text-white px-6 py-2 text-xl mt-2 inline-block rounded-md">
          {texts[currentIndex].subtitle}
        </h2>
        <p className="text-white w-full max-w-lg font-medium text-lg mt-3">
          {texts[currentIndex].description}
        </p>
      </div>
    </div>
  );
};

export default Hero;
