import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const products = [
  {
    id: 1,
    image: "/images/product4.jpg",
    title: "Tungsten",
    description:
      "Tungsten is an extremely hard, dense metal used in aerospace, industrial manufacturing, and high-temperature applications. Its exceptional strength and high melting point make it ideal for rocket components, such as nozzles and heat shields, as well as wear-resistant parts. ",
  },
  {
    id: 2,
    image: "/images/product5.jpg",
    title: "Beryllium",
    description:
      "Beryllium is a versatile, ultra-lightweight metal with exceptional strength and unique nuclear properties. It is 30% lighter than aluminum and 5 times stronger than steel. Beryllium's high thermal conductivity makes it crucial for rocket engines and nuclear devices.",
  },
  {
    id: 3,
    image: "/images/product3.jpg",
    title: "Tantalum",
    description:
      "Tantalum is a versatile, corrosion-resistant metal used in electronics, aerospace, and medical devices. Its unique properties make it essential for high-performance applications. Tantalum capacitors are used in electronic devices like smartphones and laptops. ",
  },
  {
    id: 1,
    image: "/images/product2.jpg",
    title: "Niobium",
    description:
      "Niobium is a high-strength, low-alloy steel additive used in advanced energy and infrastructure projects. It's essential for renewable energy technologies like wind turbines and solar panels. Niobium's high strength-to-weight ratio makes it ideal for building critical infrastructure. ",
  },
  {
    id: 2,
    image: "/images/product1.jpg",
    title: "Copper",
    description:
      "Copper is a vital component in electric vehicles due to its excellent conductivity and ductility. Copper accounts for 7-10% of the total vehicle weight of electric vehicles. Global demand is guaranteed to surge with growing EV adoption, and the increasing need for electrification in construction projects. ",
  },
  {
    id: 3,
    image: "/images/product6.jpg",
    title: "Titanium Dioxide (TiO2)",
    description:
      "Titanium Dioxide is a brilliant white pigment and photocatalyst, used in coatings, plastics, and solar energy applications. Its high refractive index makes it ideal for sunscreen and cosmetics. TiO2 is also used in water treatment and air purification systems. ",
  },
];

const ProductSection = () => {
  return (
    <div className="w-full py-12 bg-gray-100 items-center ">
        <h1 className=" font-semibold text-gray-800 text-5xl text-center my-5 mb-5">Our portfolio of specialty minerals:</h1>
      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between">
        <FaArrowLeft className="text-gray-500 text-2xl cursor-pointer hover:text-black transition" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {products.map((product, index) => (
    <div key={`${product.id}-${index}`} className="bg-white shadow-lg p-4">
      <Image
        src={product.image}
        alt={product.title}
        width={300}
        height={200}
        className="w-full object-cover"
      />
      <h3 className="text-lg font-bold mt-4">{product.title}</h3>
      <p className="text-gray-600 mt-2 text-sm">{product.description}</p>
      <button className="mt-4 flex p-2 bg-gray-200 items-center text-gray-500 font-semibold hover:underline">
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
