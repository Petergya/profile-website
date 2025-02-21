// const Footer = () => {
//     return (
//       <footer className="bg-gray-800  text-center p-32 ">
//         <p>© {new Date().getFullYear()} Company Name. All rights reserved.</p>
//       </footer>
//     );
//   };
  
//   export default Footer;


import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 relative">
      <div className="container mx-auto px-6 lg:px-32 flex flex-col md:flex-row justify-around items-center md:items-start">
        
        {/* Left Section - Logo & Copyright */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <Image src="/images/logo.png" alt="Suizze Allianz Group" width={150} height={50} />
          <p className="mt-2 text-sm">© Suizze Allianz Group. <br />All rights reserved.</p>
        </div>

        {/* Center Section - Navigation Links */}
        <div className="flex flex-col space-y-2 text-center md:text-left">
          <a href="#" className="hover:text-gray-400">HOME</a>
          <a href="#" className="hover:text-gray-400">PRODUCTS</a>
          <a href="#" className="hover:text-gray-400">SERVICES</a>
          <a href="#" className="hover:text-gray-400">ABOUT</a>
          <a href="#" className="hover:text-gray-400">CONTACT</a>
        </div>

        {/* Right Section - Contact Info */}
        <div className="text-center md:text-left text-sm space-y-2">
          <p>Tel: +44(0) 0207 608 5500</p>
          <p>Email: admin@sulzergroup.com</p>
          <p>20-22 Wenlock Road, <br />London, United Kingdom.<br />N1 7UG</p>
        </div>
      </div>

      {/* Red Bottom Line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-red-600"></div>
    </footer>
  );
};

export default Footer;

  