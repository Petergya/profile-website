import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (

    <nav className="w-full bg-white  top-0 left-0 right-0 z-50 p-2   fixed">

    

      <div className="container flex items-center justify-center text-center gap-64">
        <div>
 {/* Logo - Left Side */}
 <div className="flex justify-center items-center gap-2">
 <div className="">
      <Link href="/landing">
        <Image 
          src="/images/logo.jpg" 
          alt="Logo" 
          width={50} 
          height={50} 
          className="h-auto object-cover cursor-pointer" 
        />
      </Link>
    </div>
 <h1 className="text-2xl font-bold  whitespace-nowrap ">METALLIZ GROUP (UK)</h1>

 </div>
 
        </div>
        
       
        {/* Navigation Links - Centered */}
       
        <div>
  <ul className="flex justify-center items-center gap-4">
    <li>
      <Link
        href="/"
        className="relative font-semibold text-black hover:text-blue-900 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-blue-900 before:transition-all before:duration-300 hover:before:w-full"
      >
        HOME
      </Link>
    </li>
    <li>
      <Link
        href="/products"
        className="relative font-semibold text-black hover:text-blue-900 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-blue-900 before:transition-all before:duration-300 hover:before:w-full"
      >
        PRODUCTS
      </Link>
    </li>
    <li>
      <Link
        href="/service"
        className="relative font-semibold text-black hover:text-blue-900 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-blue-900 before:transition-all before:duration-300 hover:before:w-full"
      >
        SERVICES
      </Link>
    </li>
    <li>
      <Link
        href="/about"
        className="relative font-semibold text-black hover:text-blue-900 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-blue-900 before:transition-all before:duration-300 hover:before:w-full"
      >
        ABOUT
      </Link>
    </li>
    <li>
      <Link
        href="/contact"
        className="relative font-semibold text-black hover:text-blue-900 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-blue-900 before:transition-all before:duration-300 hover:before:w-full"
      >
        CONTACT
      </Link>
    </li>
  </ul>
</div>

      </div>
    </nav>
  );
};

export default Navbar;

