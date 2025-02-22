import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const ServiceSection = () => {
  return (
    <div className="w-full bg-gray-100 py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center gap-8">
        
        {/* Left Image */}
        <div className="w-full md:w-1/2">
          <Image
            src="/images/handshake.jpg"
            alt="Business handshake"
            width={600}
            height={300}
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2">
          <h3 className="text-xl font-bold">VALUE-ADDED SERVICES (FUNDING)</h3>
          <p className="text-gray-600 mt-4 text-sm">
            Often times in the world of commodity trade, there are up-coming firms and agents with genuine 
            and valid purchase requests for bulk commodities, who deal directly with the end-buyer and desire 
            to supply the commodities directly. However, they are hindered by their inability to raise the 
            required payment instruments such as letter of credits.
          </p>
          <p className="text-gray-600 mt-4 text-sm">
            Due to the availability of a world-class funding structure at our disposal, we possess the capability 
            to supply choice commodities to our customers across four continents without many hassles on their part.
          </p>
          <button className="mt-6 flex items-center text-gray-500 bg-gray-200 p-2 font-semibold hover:underline">
            READ MORE <FaArrowRight className="ml-2 text-xs text-red-500" />
          </button>
        </div>

      </div>
    </div>
  );
};

export default ServiceSection;
