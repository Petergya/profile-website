"use client";

import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="mt-28 bg-gray-100/60 py-12 px-6 md:px-20">
      {/* Heading Section */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800 uppercase">About Us</h2>
        <div className="w-16 h-1 bg-gray-900 mx-auto mt-3"></div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center mt-4">
          <Image
            src="/images/about.jpg"
            alt="About Us"
            width={800}
            height={400}
            className="rounded-md shadow-lg h-[518px] w-[900px]"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 text-gray-700 text-lg   mt-4 font-twcen">
          <p>
            Our growth and success at <b className="font-perpetua">METALLIZ GROUP</b>, built on experience
            spanning decades of international commodity trade, is driven by the
            visionary leadership of our founders, bound together with our unwavering
            commitment to excellence.
          </p>
          <p className="mt-4">
            As a proficient and experienced procurement specialist in minerals and
            metals, we are dedicated to meeting the evolving needs of our clients,
            setting new standards in the industry.
          </p>
          <p className="mt-4">
            The increasing global demand for innovative technologies requires a
            reliable and efficient supply chain. Our clients expect not only top-
            grade products but also a seamless and flawless transactional experience.
            <b className="font-perpetua"> METALLIZ GROUP</b> is committed to delivering exceptional results
            through streamlined processes and a customer-centric approach.
          </p>
          <p className="mt-4">
            Our core values are built around customer satisfaction, and we strive to
            empower our partners to achieve their goals by providing:
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>Unparalleled access to our extensive global trading networks</li>
            <li>Robust financial structures to support their growth</li>
            <li>Exceptional products and services that meet the highest standards</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
