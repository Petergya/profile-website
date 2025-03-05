import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 relative">
      <div className="container mx-auto px-6 lg:px-32 flex flex-col md:flex-row flex-wrap justify-between items-center md:items-start gap-6">

        {/* Logo */}
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6 text-center md:text-left w-full md:w-auto">

          <Link href="/" passHref>
            <Image
              src="/images/logo1.jpg"
              alt="Logo"
              width={80}
              height={80}
              className="h-auto object-cover cursor-pointer"
            />
          </Link>
          <div className="text-center md:text-left text-sm space-y-2 font-twcen">
            <p className="font-extrabold text-lg font-perpetua">METALLIZ GROUP (UK)</p>
            <p>27 Old Gloucester Street <br />WCIN 3AX</p>
            <p>London, United Kingdom.</p>
            <p className="text-sm mt-2">
              Email:{" "}
              <a href="mailto:enquiries@metallizgroup.uk" className="text-blue-500 hover:text-blue-400">
                enquiries@metallizgroup.uk
              </a>
            </p>
            <p className="text-sm">
              Tel:{" "}
              <a href="tel:+442045714485" className="text-blue-500 hover:text-blue-400">
                +44(0) 204 571 4485
              </a>
            </p>
          </div>
        </div>


        <div className="flex flex-col space-y-2 text-center md:text-left w-full md:w-auto font-twcen">
          <p className="font-bold text-lg">PRODUCTS</p>
          {["BERYLLIUM", "TANTALUM", "NIOBIUM", "COPPER", "TUNGSTEN", "TITANIUM DIOXIDE"].map((product) => (
            <a key={product} href="#" className="hover:text-gray-400 transition">
              {product}
            </a>
          ))}
        </div>


        <div className="flex flex-col space-y-2 text-center md:text-left w-full md:w-auto font-twcen">
          <p className="font-bold text-lg">NAVIGATION</p>
          {["HOME", "PRODUCTS", "SERVICES", "ABOUT US", "CONTACT"].map((navItem) => (
            <a key={navItem} href="#" className="hover:text-gray-400 transition">
              {navItem}
            </a>
          ))}
        </div>
      </div>


      <div className="absolute bottom-0 left-0 w-full h-1 bg-red-600"></div>
    </footer>
  );
};

export default Footer;

