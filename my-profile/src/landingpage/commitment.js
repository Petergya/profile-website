import Image from "next/image";

const Commitment = () => {
  return (
    <div className="w-full bg-white py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center gap-8">
        {/* Right Content */}
        <div className="w-full md:w-1/2">
          <h3 className="text-2xl font-bold ">Our Commitment to Quality</h3>

          <p className="text-gray-600 ">
            In today&#39;s technology-driven landscape, critical minerals serve
            as the foundation for cutting-edge innovations. We guarantee that
            our products meet the highest quality standards. For added
            assurance, our shipments are accompanied by verified SGS reports,
            confirming authenticity and purity.
          </p>
          <p className="text-gray-600 ">
            Expertise and Experience: Our team of experts has extensive
            experience in the industry, ensuring that our customers receive the
            best possible advice and support.
          </p>
          <p className="text-gray-600 ">
            Continuous Improvement: We continually monitor and improve our
            processes to ensure that we remain at the forefront of the industry.
          </p>
        </div>

        {/* Left Image */}
        <div className="w-full md:w-1/2">
          <Image
            src="/images/commitment 1.jpg"
            alt="Business handshake"
            width={600}
            height={300}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Commitment;
