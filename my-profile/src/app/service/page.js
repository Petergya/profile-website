'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Heroservice from '@/ourService/heroservice';

const images = [
  "/images/service.jpg",
  "/images/service1.jpg",
  "/images/service2.jpg",
  "/images/service3.jpg",
  "/images/service4.jpg",
];

const services = [
  { title: 'Analysis', icon: '📊', description: 'Hampden Sydney College in Virginia looked up one of the more. looked up one of the more' },
  { title: 'App Development', icon: '📱', description: 'Hampden Sydney College in Virginia looked up one of the more. looked up one of the more' },
  { title: 'Tv Production', icon: '📺', description: 'Hampden Sydney College in Virginia looked up one of the more. looked up one of the more' },
  { title: 'Cloud Service', icon: '☁️', description: 'Hampden Sydney College in Virginia looked up one of the more. looked up one of the more' },
];

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
};

export default function ServiceSection() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 10000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white pt-0 pb-16 px-6">
      <Heroservice />
      <motion.div initial="hidden" animate="visible" variants={containerVariants} className="text-center mt-12">
        <h2 className="text-5xl font-extrabold text-black tracking-wide">OUR SERVICE</h2>
        <div className="w-16 h-1 bg-gray-900 mx-auto mt-3"></div>
        <p className="text-gray-500 max-w-2xl mx-auto mt-3">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
        </p>
      </motion.div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <motion.div initial="hidden" animate="visible" variants={containerVariants} className="grid grid-cols-2 col-span-3 gap-6">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="bg-gray-900 text-white p-8 rounded-lg flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: index * 0.2 }}
            >
              <span className="text-4xl">{service.icon}</span>
              <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
              <p className="text-gray-400 text-sm mt-2 text-center">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className="relative col-span-1">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 5 }} 
            className="absolute inset-0"
          >
            <Image
              src={images[currentImage]}
              alt="Service Image"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}





