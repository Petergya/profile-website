


import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Hero from "@/landingpage/hero"

const products = [
  {
    id: 1,
    image: "/images/product4.jpg",
    title: "Tungsten",
    description:
      "Tungsten is an extremely hard, dense metal used in aerospace, industrial manufacturing, and high-temperature applications. Its exceptional strength and high melting point make it ideal for rocket components, such as nozzles and heat shields, as well as wear-resistant parts. ",
  },
  {
    title: "Quality You Can Trust",
    subtitle: "Durable, Reliable, and Affordable",
    description: "Shop with confidence knowing our products are built to last and exceed your expectations."
  }
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState("opacity-0 translate-x-full");

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate("opacity-0 translate-x-full");
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setAnimate("opacity-100 translate-x-0");
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="w-full h-[60vh] md:h-[95vh] bg-cover mt-20 transition-all duration-1000 overflow-hidden"
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
    >
      <div
        className={`absolute top-3/4 left-20 transform -translate-y-1/2 transition-all duration-1000 ${animate}`}
      >
        <div className="bg-red-600 text-white px-4 py-2 text-sm font-bold w-max">
          {texts[currentIndex].title}
        </div>
        <div className="bg-black text-white px-4 py-2 text-lg mt-1 w-max">
          {texts[currentIndex].subtitle}
        </div>
        <p className="text-white w-80 font-semibold text-lg mt-2">
          {texts[currentIndex].description}
        </p>
      </div>
    </div>
  );
};

const newsData = [
  {
    title: "Top 10 Must-Have Tech Gadgets of the Year",
    description: "Explore the latest and greatest in technology that you need in your life today.",
    category: "Electronics",
    image: "images/product5.jpg",
  },
  {
    title: "Smart Home Essentials: The Future is Here",
    description: "Upgrade your home with smart devices that bring convenience and efficiency.",
    category: "Home Tech",
    image: "images/product1.jpg",
  },
  {
    title: "Best Fitness Gear to Keep You on Track",
    description: "Discover high-performance products designed for your active lifestyle.",
    category: "Health & Fitness",
    image: "images/product2.jpg",
  },
  {
    title: "Gaming Accessories That Will Change Your Experience",
    description: "Enhance your gaming setup with top-tier accessories and peripherals.",
    category: "Gaming",
    image: "images/product3.jpg",
  },
  {
    title: "Eco-Friendly Products for a Sustainable Future",
    description: "Find innovative and environmentally-friendly products that make a difference.",
    category: "Sustainability",
    image: "images/product4.jpg",
  },
  {
    title: "Must-Have Office Gadgets for Productivity",
    description: "Boost efficiency and comfort with these essential office products.",
    category: "Office Tech",
    image: "images/product6.jpg",
  },
];

const ProductSection = () => {
  return (
    <div>
       <Hero />
    <div className="w-full py-12 bg-gray-100 items-center ">
        <h1 className=" font-semibold text-gray-800 text-3xl text-center my-5 mb-5">Our portfolio of specialty minerals:</h1>
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
    </div>
   
  );
};




export default ProductSection;
