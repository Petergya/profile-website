



// "use client";
// import Image from "next/image";
// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// const images = [
//   "/images/service1.jpg",
//   "/images/service2.jpg",
//   "/images/service3.jpg",
//   "/images/service4.jpg",
// ];

// const cardVariants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
// };

// export default function Service() {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="p-10 mt-20 font-sans max-w-6xl mx-auto">
//       {/* Header Section */}
//       <header className="relative text-center mb-10 bg-cover bg-center h-64 flex flex-col items-center justify-center text-white" style={{ backgroundImage: 'url(/images/service1.jpg)' }}>
//         <div className="absolute inset-0 bg-black bg-opacity-50"></div>
//         <h1 className="text-5xl font-bold mb-5 relative z-10">OUR SERVICE</h1>
//         <p className="text-lg text-gray-300 relative z-10 max-w-2xl">
//           Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
//         </p>
//       </header>

//       {/* Body Section */}
//       <div className="flex flex-col md:flex-row gap-10">
//         {/* Services Grid (Left Side) */}
//         <motion.div className="flex-1" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={cardVariants}>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//             {/* Service Cards */}
//             {[
//               { title: "Analysis", description: "Hampden Sydney College in Virginia looked up one of the more, looked up one of the more" },
//               { title: "App Development", description: "Hampden Sydney College in Virginia looked up one of the more, looked up one of the more" },
//               { title: "TV Production", description: "Hampden Sydney College in Virginia looked up one of the more, looked up one of the more" },
//               { title: "Cloud Service", description: "Hampden Sydney College in Virginia looked up one of the more, looked up one of the more" },
//             ].map((service, idx) => (
//               <motion.div
//                 key={idx}
//                 variants={cardVariants}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 whileHover={{ scale: 1.05 }}
//                 className="bg-gray-100 p-5 rounded-lg text-center shadow-lg"
//               >
//                 <h2 className="text-2xl font-semibold mb-3">{service.title}</h2>
//                 <p className="text-gray-600">{service.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         {/* Image (Right Side) */}
//         <div className="flex-1 text-center relative overflow-hidden">
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -50 }}
//             transition={{ duration: 0.8 }}
//             className="w-full h-full"
//           >
//             <Image src={images[index]} alt="Service Image" width={500} height={300} className="rounded-lg mx-auto" />
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const images = [
  "/images/service1.jpg",
  "/images/service2.jpg",
  "/images/service3.jpg",
  "/images/service4.jpg",
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } }, // Slower duration and added delay
};

export default function Service() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Increased interval to 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-10 mt-20 font-sans max-w-6xl mx-auto">
      {/* Header Section */}
      <header className="relative text-center mb-10 bg-cover bg-center h-64 flex flex-col items-center justify-center text-white" style={{ backgroundImage: 'url(/images/service1.jpg)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="text-5xl font-bold mb-5 relative z-10">Geological Asset/Resource Consultancy</h1>
        <p className="text-lg text-gray-300 relative z-10 max-w-2xl">
        Unlocking Mining Potential with Cutting-Edge Technology.
        </p>
      </header>

      {/* Body Section */}
      <div className="flex flex-col md:flex-row gap-10">
        {/* Services Grid (Left Side) */}
        <motion.div className="flex-1" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={cardVariants}>
          <h1 className="text-2xl font-bold mb-4">Our partnership with an EU-funded project provides access to cutting-
edge Hyperspectral imaging technology. This innovative approach
enables us to:</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Service Cards */}
            {[
              { title: "Analysis", description: "Hampden Sydney College in Virginia looked up one of the more, looked up one of the more" },
              { title: "App Development", description: "Hampden Sydney College in Virginia looked up one of the more, looked up one of the more" },
              { title: "TV Production", description: "Hampden Sydney College in Virginia looked up one of the more, looked up one of the more" },
              { title: "Cloud Service", description: "Hampden Sydney College in Virginia looked up one of the more, looked up one of the more" },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, transition: { duration: 0.5 } }} // Slower hover effect
                className="bg-gray-100 p-5 rounded-lg text-center shadow-lg"
              >
                <h2 className="text-2xl font-semibold mb-3">{service.title}</h2>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Image (Right Side) */}
        <div className="flex-1 mt-20 justify-center items-center text-center relative overflow-hidden">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 1.5 }} // Slower transition for image change
            className="w-full h-full"
          >
            <Image src={images[index]} alt="Service Image" width={500} height={300} className="rounded-lg mx-auto" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}