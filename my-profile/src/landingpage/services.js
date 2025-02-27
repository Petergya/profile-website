import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const ServiceSection = () => {
  return (
    <div className="w-full bg-gray-100 py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center gap-8">
        
        {/* Left Image */}
        <div className="w-full md:w-1/2">
          <Image
            src="/images/service.jpg"
            alt="Business handshake"
            width={600}
            height={300}
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2">
          <h3 className="text-2xl font-bold ">Geological Asset + Resource Consultancy</h3>
          <h1 className="font-semibold text-gray-800 mt-4 ">Unlocking Global Critical Mineral Solutions </h1>
          <p className="text-gray-600  ">
         In partnership with an EU-funded project, our Geological Asset/Resource Consultancy 
          service offers a comprehensive solution for mining asset acquisition on a global scale. 
          Fusing the power of Hyperspectral imaging and proprietor software, we provide reliable 
          and accurate assessments of mineral resources. 
          </p>
      
         
          <button className=" flex items-center text-gray-500 bg-gray-200 p-2 mt-2 font-semibold hover:underline">
            READ MORE <FaArrowRight className="ml-2 text-xs text-red-500" />
          </button>
        </div>

      </div>
    </div>
  );
};

export default ServiceSection;
