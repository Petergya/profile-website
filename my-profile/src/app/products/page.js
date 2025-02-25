"use client";
import React, { useState, useEffect } from "react";

const images = [
  "/images/hero1.jpg",
  "/images/hero2.jpg",
  "/images/hero3.jpg"
];

const texts = [
  {
    title: "Discover Our Latest Innovations",
    subtitle: "Cutting-Edge Products for Every Need",
    description: "Browse our collection of top-quality, high-performance products designed to elevate your experience."
  },
  {
    title: "Upgrade Your Lifestyle",
    subtitle: "Smart Solutions for Modern Living",
    description: "Experience efficiency and convenience with our range of advanced, user-friendly products."
  },
  {
    title: "Quality You Can Trust",
    subtitle: "Durable, Reliable, and Affordable",
    description: "Shop with confidence knowing our products are built to last and exceed your expectations."
  }
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState("opacity-0 translate-x-full");

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
      className="w-full h-[60vh] md:h-[95vh] bg-cover mt-20 transition-all duration-1000 overflow-hidden"
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
    >
      <div
        className={`absolute top-3/4 left-20 transform -translate-y-1/2 transition-all duration-1000 ${animate}`}
      >
        <div className="bg-red-600 text-white px-4 py-2 text-sm font-bold w-max">
          {texts[currentIndex].title}
        </div>
        <div className="bg-black text-white px-4 py-2 text-lg mt-1 w-max">
          {texts[currentIndex].subtitle}
        </div>
        <p className="text-white w-80 font-semibold text-lg mt-2">
          {texts[currentIndex].description}
        </p>
      </div>
    </div>
  );
};

const newsData = [
  {
    title: "Top 10 Must-Have Tech Gadgets of the Year",
    description: "Explore the latest and greatest in technology that you need in your life today.",
    category: "Electronics",
    image: "images/product5.jpg",
  },
  {
    title: "Smart Home Essentials: The Future is Here",
    description: "Upgrade your home with smart devices that bring convenience and efficiency.",
    category: "Home Tech",
    image: "images/product1.jpg",
  },
  {
    title: "Best Fitness Gear to Keep You on Track",
    description: "Discover high-performance products designed for your active lifestyle.",
    category: "Health & Fitness",
    image: "images/product2.jpg",
  },
  {
    title: "Gaming Accessories That Will Change Your Experience",
    description: "Enhance your gaming setup with top-tier accessories and peripherals.",
    category: "Gaming",
    image: "images/product3.jpg",
  },
  {
    title: "Eco-Friendly Products for a Sustainable Future",
    description: "Find innovative and environmentally-friendly products that make a difference.",
    category: "Sustainability",
    image: "images/product4.jpg",
  },
  {
    title: "Must-Have Office Gadgets for Productivity",
    description: "Boost efficiency and comfort with these essential office products.",
    category: "Office Tech",
    image: "images/product6.jpg",
  },
];

const NewsCard = ({ title, description, category, image }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden ">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full uppercase">
          {category}
        </span>
        <h3 className="text-lg font-semibold mt-2">{title}</h3>
        <p className="text-gray-600 text-sm mt-1">{description}</p>
      </div>
    </div>
  );
};

const NewsSection = () => {
  return (
    <section className="py-12 px-6 bg-gray-100 mt-12">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900">
          Latest <span className="text-red-600">Products</span>
        </h2>
        <p className="text-gray-600 mt-2 text-lg">
          Discover the newest products, trends, and innovations to enhance your everyday life.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {newsData.map((news, index) => (
          <NewsCard key={index} {...news} />
        ))}
      </div>
    </section>
  );
};

const HomePage = () => {
  return (
    <div>
      <Hero />
      <NewsSection />
    </div>
  );
};

export default HomePage;
