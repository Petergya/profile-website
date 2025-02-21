


import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full bg-red-800  p-4  fixed">
      <div className="container flex items-center justify-center text-center gap-10">
        <div>
 {/* Logo - Left Side */}
 <h1 className="text-xl font-bold  whitespace-nowrap">Company Name</h1>

        </div>
        
       
        {/* Navigation Links - Centered */}
        <div className="  ">
          <ul className="flex justify-center  items-center gap-4">
            <li><Link href="/" className="hover:text-gray-400 ">Home</Link></li>
            <li><Link href="/products" className="hover:text-gray-400 ">Products</Link></li>
            <li><Link href="/service" className="hover:text-gray-400 ">Service</Link></li>
            <li><Link href="/about" className="hover:text-gray-400 ">About</Link></li>
            <li><Link href="/contact" className="hover:text-gray-400 ">Contact</Link></li>
          </ul>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;


