
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 relative">
      <div className="container mx-auto px-6 lg:px-32 flex flex-col md:flex-row justify-around items-center md:items-start">
        
        {/* Left Section - Logo & Copyright */}
        <div className="flex justify-around items-center space-x-6 text-center md:text-left mb-6 md:mb-0">
          <Image src="/images/logo.jpg" alt="Suizze Allianz Group" width={80} height={80} />
          
          <div className="text-center md:text-left text-sm space-y-2">
            <p>METALLIZ GROUP (UK)</p>
            <p>27 Old Gloucester Street <br />WCIN 3AX</p>
            <p>London, United Kingdom.</p>
            <p className="text-sm mt-2">
              Email:{" "}
              <a href="mailto:admin@richfieldgroup.co.uk" className="text-blue-600">
              info@metallizgroup.uk
              </a>
            </p>
            <p className="text-sm">
              Tel:{" "}
              <a href="tel:+442076085500" className="text-blue-600">
              Tel: +44(0) 204 571 4485 
              </a>
            </p>
          
        </div>
        </div>

        {/* Center Section - Navigation Links */}
        <div className="flex flex-col space-y-2 text-center md:text-left">
          <a href="#" className="hover:text-gray-400">PRODUCTS</a>
          <a href="#" className="hover:text-gray-400">BERYLLIUM</a>
          <a href="#" className="hover:text-gray-400">TANTALUM</a>
          <a href="#" className="hover:text-gray-400">NIOBIUM</a>
          <a href="#" className="hover:text-gray-400">COPPER</a>
          <a href="#" className="hover:text-gray-400">TUNGSTEN</a>
          <a href="#" className="hover:text-gray-400">TITIANUM DIOXIDE</a>
        </div>

       
         <div className="flex flex-col space-y-2 text-center md:text-left">
          <a href="#" className="hover:text-gray-400">NAVIGATION</a>
          <a href="#" className="hover:text-gray-400">Home</a>
          <a href="#" className="hover:text-gray-400">Products</a>
          <a href="#" className="hover:text-gray-400">Services</a>
          <a href="#" className="hover:text-gray-400">About Us</a>
          <a href="#" className="hover:text-gray-400">Contact</a>
          
        </div>
      </div>

      {/* Red Bottom Line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-red-600"></div>
    </footer>
  );
};

export default Footer;

  