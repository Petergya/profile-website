import Producthero from "@/ourproducts/producthero";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// const products = [

const products = [
  {
    id: 1,
    image: "/images/product4.jpg",
    title: "Tungsten",
    description:
      "Tungsten is an extremely hard, dense metal used in aerospace, industrial manufacturing, and high-temperature applications. Its exceptional strength and high melting point make it ideal for rocket components, such as nozzles and heat shields, as well as wear-resistant parts.",
    properties: [
      "High density (19.3 g/cm³)",
      "Extremely hard (8.5-9.0 Mohs hardness)",
      "High melting point (3422°C)",
      "High thermal conductivity",
      "Corrosion-resistant",
      "Non-toxic"
    ],
    productForms: [
      "Tungsten rod",
      "Tungsten wire",
      "Tungsten sheet",
      "Tungsten plate",
      "Tungsten powder"
    ]
  },
  {
    id: 2,
    image: "/images/product5.jpg",
    title: "Beryllium",
    description:
      "Beryllium is a versatile, ultra-lightweight metal with exceptional strength and unique nuclear properties. It is 30% lighter than aluminum and 5 times stronger than steel. Beryllium's high thermal conductivity makes it crucial for rocket engines and nuclear devices.",
    properties: [
      "Lightweight (1.85 g/cm³)",
      "High strength-to-weight ratio",
      "Excellent thermal conductivity",
      "High melting point (1287°C)",
      "Corrosion-resistant",
      "Non-magnetic"
    ],
    productForms: [
      "Beryllium sheet",
      "Beryllium plate",
      "Beryllium rod",
      "Beryllium tube",
      "Beryllium wire",
      "Beryllium powder"
    ]
  },
  {
    id: 3,
    image: "/images/product3.jpg",
    title: "Tantalum",
    description:
      "Tantalum is a versatile, corrosion-resistant metal used in electronics, aerospace, and medical devices. Its unique properties make it essential for high-performance applications. Tantalum capacitors are used in electronic devices like smartphones and laptops.",
    properties: [
      "High melting point (2996°C)",
      "High density (16.69 g/cm³)",
      "Excellent corrosion resistance",
      "High conductivity",
      "Ductile and malleable"
    ],
    productForms: [
      "Tantalum wire",
      "Tantalum rod",
      "Tantalum sheet",
      "Tantalum plate",
      "Tantalum tube",
      "Tantalum powder"
    ]
  },
  {
    id: 4,
    image: "/images/product2.jpg",
    title: "Niobium",
    description:
      "Niobium is a high-strength, low-alloy steel additive used in advanced energy and infrastructure projects. It's essential for renewable energy technologies like wind turbines and solar panels. Niobium's high strength-to-weight ratio makes it ideal for building critical infrastructure.",
    properties: [
      "High melting point (2477°C)",
      "High density (8.57 g/cm³)",
      "Excellent corrosion resistance",
      "High conductivity",
      "Ductile and malleable",
      "Ferromagnetic"
    ],
    productForms: [
      "Niobium wire",
      "Niobium rod",
      "Niobium sheet",
      "Niobium plate",
      "Niobium tube",
      "Niobium powder"
    ]
  },
  {
    id: 5,
    image: "/images/product1.jpg",
    title: "Copper",
    description:
      "Copper is a vital component in electric vehicles due to its excellent conductivity and ductility. Copper accounts for 7-10% of the total vehicle weight of electric vehicles. Global demand is guaranteed to surge with growing EV adoption, and the increasing need for electrification in construction projects.",
    properties: [
      "High electrical conductivity (59.6 x 10^7 Siemens/m)",
      "High thermal conductivity (386 W/m-K)",
      "Ductile and malleable",
      "Corrosion-resistant",
      "High melting point (1085°C)",
      "Low reactivity"
    ],
    productForms: [
      "Copper cathodes (electrolytic and fire-refined)",
      "Copper wire (bare and insulated)",
      "Copper tubing (seamless and welded)",
      "Copper sheet and plate (hot-rolled and cold-rolled)",
      "Copper alloys (brass, bronze, and cupro-nickel)",
      "Copper ingots"
    ]
  },
  {
    id: 6,
    image: "/images/product6.jpg",
    title: "Titanium Dioxide (TiO₂)",
    description:
      "Titanium Dioxide is a brilliant white pigment and photocatalyst, used in coatings, plastics, and solar energy applications. Its high refractive index makes it ideal for sunscreen and cosmetics. TiO₂ is also used in water treatment and air purification systems.",
    properties: [
      "High refractive index (2.5-2.7)",
      "Excellent opacity and whiteness",
      "High UV resistance and stability",
      "Inert and non-toxic",
      "High melting point (1830°C)",
      "Low electrical conductivity"
    ],
    productForms: [
      "TiO₂ powder",
      "TiO₂ pigment (coated and uncoated)",
      "TiO₂ masterbatches (plastics and coatings)",
      "TiO₂ dispersions (aqueous and non-aqueous)",
      "Ilmenite  (TiO₂ 50% - 65%)"
    ]
  }
];


const ProductSection = () => {
  return (
    <div>
      <Producthero />
      <div className="w-full py-12 bg-gray-100 items-center">
      <h2 className="font-semibold text-gray-800 text-3xl text-center my-5 mb-5 tracking-wide">
          OUR PRODUCTS
        </h2>
        <div className="w-16 h-1 bg-gray-900 mx-auto mt-3"></div>

       
        <div className="container mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between mt-6">
          <FaArrowLeft className="text-gray-500 text-2xl cursor-pointer hover:text-black transition" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={`${product.id}-${index}`}
                className="bg-white shadow-lg p-4 rounded-lg transition-transform transform duration-1000 ease-in-out hover:scale-105"
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  width={300}
                  height={200}
                  className="w-full object-cover rounded-lg"
                />
                <h3 className="text-lg font-bold mt-4">{product.title}</h3>
                <p className="text-gray-600 mt-2 text-sm font-twcen ">
                  {product.description}
                </p>
                {product.properties && (
                  <ul className="mt-2 text-gray-600 text-sm font-twcen">
                    <strong>Properties:</strong>
                    {product.properties.map((prop, i) => (
                      <li key={i}>- {prop}</li>
                    ))}
                  </ul>
                )}
                {product.productForms && (
                  <ul className="mt-2 text-gray-600 text-sm font-twcen">
                    <strong>Product Forms:</strong>
                    {product.productForms.map((form, i) => (
                      <li key={i}>- {form}</li>
                    ))}
                  </ul>
                )}
                {/* <button className="mt-4 flex p-2 bg-gray-200 items-center text-gray-500 font-semibold hover:underline">
                  READ MORE <FaArrowRight className="ml-2 text-xs text-red-500" />
                </button> */}
              </div>
            ))}
          </div>
          <FaArrowRight className="text-gray-500 text-2xl cursor-pointer hover:text-black transition" />
        </div>
      </div>
    </div>
  );
};

export default ProductSection;

