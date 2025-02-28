"use client"
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi"; // Importing icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(""); // State to track active link

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsOpen(false); // Close the mobile menu on link click
  };

  return (
    <nav className="w-full bg-white top-0 left-0 right-0 z-50 p-4 fixed shadow-md">
      <div className="container mx-auto flex items-center justify-between">

        {/* Logo Section */}
        <div className="flex items-center gap-2">

          <Link href="/" passHref>
            <Image
              src="/images/logo.jpg"
              alt="Logo"
              width={50}
              height={50}
              className="h-auto object-cover cursor-pointer"
            />
          </Link>
          <h1 className="text-xl font-bold whitespace-nowrap font-perpetua">METALLIZ GROUP (UK)</h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className={`relative font-semibold text-black hover:text-blue-900 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-blue-900 before:transition-all before:duration-300 hover:before:w-full ${activeLink === "/" ? "text-red-600" : ""}`}
            onClick={() => handleLinkClick("/")}
          >
            HOME
          </Link>
          <Link
            href="/products"
            className={`relative font-semibold text-black hover:text-blue-900 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-blue-900 before:transition-all before:duration-300 hover:before:w-full ${activeLink === "/products" ? "text-red-600" : ""}`}
            onClick={() => handleLinkClick("/products")}
          >
            PRODUCTS
          </Link>
          <Link
            href="/service"
            className={`relative font-semibold text-black hover:text-blue-900 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-blue-900 before:transition-all before:duration-300 hover:before:w-full ${activeLink === "/service" ? "text-red-600" : ""}`}
            onClick={() => handleLinkClick("/service")}
          >
            SERVICES
          </Link>
          <Link
            href="/about"
            className={`relative font-semibold text-black hover:text-blue-900 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-blue-900 before:transition-all before:duration-300 hover:before:w-full ${activeLink === "/about" ? "text-red-600" : ""}`}
            onClick={() => handleLinkClick("/about")}
          >
            ABOUT
          </Link>
          <Link
            href="/contact"
            className={`relative font-semibold text-black hover:text-blue-900 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-blue-900 before:transition-all before:duration-300 hover:before:w-full ${activeLink === "/contact" ? "text-red-600" : ""}`}
            onClick={() => handleLinkClick("/contact")}
          >
            CONTACT
          </Link>
        </div>

        {/* Hamburger Menu - Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {isOpen ? <FiX size={30} /> : <FiMenu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`${isOpen ? "block" : "hidden"
          } absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-4 md:hidden`}
      >
        <Link
          href="/"
          className={`font-semibold text-black hover:text-blue-900 py-2 ${activeLink === "/" ? "text-red-600" : ""}`}
          onClick={() => handleLinkClick("/")}
        >
          HOME
        </Link>
        <Link
          href="/products"
          className={`font-semibold text-black hover:text-blue-900 py-2 ${activeLink === "/products" ? "text-red-600" : ""}`}
          onClick={() => handleLinkClick("/products")}
        >
          PRODUCTS
        </Link>
        <Link
          href="/service"
          className={`font-semibold text-black hover:text-blue-900 py-2 ${activeLink === "/service" ? "text-red-600" : ""}`}
          onClick={() => handleLinkClick("/service")}
        >
          SERVICES
        </Link>
        <Link
          href="/about"
          className={`font-semibold text-black hover:text-blue-900 py-2 ${activeLink === "/about" ? "text-red-600" : ""}`}
          onClick={() => handleLinkClick("/about")}
        >
          ABOUT
        </Link>
        <Link
          href="/contact"
          className={`font-semibold text-black hover:text-blue-900 py-2 ${activeLink === "/contact" ? "text-red-600" : ""}`}
          onClick={() => handleLinkClick("/contact")}
        >
          CONTACT
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;




