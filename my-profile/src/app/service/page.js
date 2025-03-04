"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Heroservice from "@/ourService/heroservice";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
};

export default function ServiceSection() {
  return (
    <section className="bg-white pt-0 pb-16 px-6">
      {/* Hero Service for all screen sizes */}
      <Heroservice />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="text-center mt-12"
      >
        <h2 className="font-semibold text-gray-800 text-3xl text-center my-5 mb-5 tracking-wide">
          OUR SERVICE
        </h2>
        <div className="w-16 h-1 bg-gray-900 mx-auto mt-3"></div>
        <p className="text-lg font-semibold mt-3">
          Geological Asset/Resource Consultancy
        </p>
        <p className="text-gray-500 font-twcen text-lg max-w-2xl mx-auto mt-3">
          Unlocking Mining Potential with Cutting-Edge Technology.
        </p>
      </motion.div>

      {/* Image and Text Layout */}
      <div className="mt-16 flex flex-col lg:flex-row items-center gap-10 max-w-6xl mx-auto">
        {/* Image Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInLeft}
          className="lg:w-1/2 flex justify-center"
        >
          <Image
            src="/images/service.jpg"
            alt="Service Image"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInRight}
          className="lg:w-1/2 p-8 rounded-lg shadow-lg"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Our Expertise
          </h3>
          <p className="text-gray-700 text-lg font-twcen leading-relaxed">
            Our partnership with an EU-funded project provides access to
            cutting-edge Hyperspectral imaging technology. This innovative
            approach enables us to:
          </p>
          <ul className="list-disc list-inside text-gray-700 font-twcen text-lg mt-4 ">
            <li>Accurately identify mineral types and compositions</li>
            <li>Quantify mineral volumes</li>
            <li>Detect subtle changes in mineralogy</li>
            <li>
              Conclusive Ground-Truthing geochemistry via extensive sampling and
              grading
            </li>
          </ul>
          <p className="mt-4 text-gray-700 font-twcen text-lg">
            This technology empowers our team to provide detailed, data-driven
            insights, reducing uncertainty and risk in mining asset acquisition.
          </p>
        </motion.div>
      </div>

      {/* Additional Details */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="max-w-6xl mx-auto mt-16 p-8 rounded-lg shadow-lg"
      >
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">
          Benefits of Our Service
        </h3>
        <ul className="list-disc list-inside text-gray-700 font-twcen text-lg">
          <li>Unparalleled accuracy in mineral resource assessments</li>
          <li>
            Comprehensive evaluations covering all critical aspects of mining
            assets
          </li>
          <li>
            Data-driven decision making for informed investment and acquisition
            strategies
          </li>
        </ul>

        <h3 className="text-2xl font-semibold text-gray-800 mt-8">
          {" "}
          Matchmaking: Client + Buyer/Investor{" "}
        </h3>
        <p className="text-gray-700 leading-relaxed mt-4 font-twcen text-lg">
          Our goal is not just to assess mining assets, but to facilitate
          successful transactions. We leverage our deep understanding of the
          geological, regulatory, financial, and social landscapes of the mining
          industry to connect clients with capable and outstanding investors.
        </p>
        <p className="text-gray-700 mt-4 font-twcen text-lg">
          Contact us today to discuss your project requirements and learn more
          about our innovative approach to unlocking mining potential.
        </p>
      </motion.div>
    </section>
  );
}
