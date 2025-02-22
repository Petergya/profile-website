import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const products = [
  {
    id: 1,
    image: "/images/product4.jpg",
    title: "WHEAT (MILLING)",
    description:
      "The United States is the world’s leading wheat exporter. Although the U.S. produces only 10 percent of world wheat, it is consistently the world’s biggest wheat exporter.",
  },
  {
    id: 2,
    image: "/images/product5.jpg",
    title: "SUGAR",
    description:
      "At present, the global production of sugar is in excess of 180 million tonnes annually, with more than one hundred countries producing sugar. The largest of them are Brazil, India, and China.",
  },
  {
    id: 3,
    image: "/images/product3.jpg",
    title: "BITUMEN",
    description:
      "We are a force to reckon with as a trans-national supplier of bitumen with the highest standards. We are always on stand-by to ship to any world port in new steel drums and/or bulk shipments.",
  },
  {
    id: 1,
    image: "/images/product2.jpg",
    title: "WHEAT (MILLING)",
    description:
      "The United States is the world’s leading wheat exporter. Although the U.S. produces only 10 percent of world wheat, it is consistently the world’s biggest wheat exporter.",
  },
  {
    id: 2,
    image: "/images/product1.jpg",
    title: "SUGAR",
    description:
      "At present, the global production of sugar is in excess of 180 million tonnes annually, with more than one hundred countries producing sugar. The largest of them are Brazil, India, and China.",
  },
  {
    id: 3,
    image: "/images/product6.jpg",
    title: "BITUMEN",
    description:
      "We are a force to reckon with as a trans-national supplier of bitumen with the highest standards. We are always on stand-by to ship to any world port in new steel drums and/or bulk shipments.",
  },
];

const ProductSection = () => {
  return (
    <div className="w-full py-12 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between">
        <FaArrowLeft className="text-gray-500 text-2xl cursor-pointer hover:text-black transition" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white shadow-lg p-4">
              <Image
                src={product.image}
                alt={product.title}
                width={300}
                height={200}
                className="w-full object-cover"
              />
              <h3 className="text-lg font-bold mt-4">{product.title}</h3>
              <p className="text-gray-600 mt-2 text-sm ">{product.description}</p>
              <button className="mt-4 flex  p-2 bg-gray-200 items-center text-gray-500 font-semibold hover:underline">
                READ MORE <FaArrowRight className="ml-2 text-xs text-red-500" />
              </button>
            </div>
          ))}
        </div>

        <FaArrowRight className="text-gray-500 text-2xl cursor-pointer hover:text-black transition" />
      </div>
    </div>
  );
};

export default ProductSection;
