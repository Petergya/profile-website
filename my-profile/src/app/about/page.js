"use client";

import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="flex flex-col md:flex-row  items-center justify-between px-6 md:px-20 gap-8 py-12 mt-20 bg-gray-100/60">
      
      <div className="w-full md:w-1/2 relative">
        <Image
          src="/images/about.jpg" 
          alt="About Us"
          width={800}
          height={400}
          className="rounded-md h-[500px] w-[900px]"
        />
      </div>

      {/* Right Section: Text Content */}
      <div className="w-full md:w-1/2 mt-6 md:mt-0">
        <h2 className="text-5xl font-bold text-gray-900 uppercase">About Us</h2>
        <p className="text-gray-700  mt-4">
        Our growth and success at METALLIZ GROUP, built on experience,
spanning decades of international commodity trade, is driven by the
visionary leadership of our founders, bound together with our
unwavering commitment to excellence.




        </p>
        <p className="text-gray-700 mt-4">
        As a proficient and experienced procurement specialist in minerals and
metals, we are dedicated to meeting the evolving needs of our clients,
setting new standards in the industry.
        </p>
        <p className="text-gray-700 mt-4">
        The increasing global demand for innovative technologies, requires a
reliable and efficient supply chain. Our clients expect not only top-
grade products but also a seamless and flawless transactional
experience. METALLIZ GROUP is committed to delivering
exceptional results through streamlined processes and a customer-
centric approach.
        </p>
        <p className="text-gray-700 mt-4">
        Our core values are built around customer satisfaction, and we strive to
empower our partners to achieve their goals by providing:<br />

i. Unparalleled access to our extensive global trading networks<br />

ii. Robust financial structures to support their growth<br />
iii. Exceptional products and services that meet the highest
standards
        </p>
      
      
      </div>
    </div>
  );
};

export default AboutUs;

  