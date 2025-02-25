"use client"; // Required for useState in Next.js

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between py-3 px-6 md:px-12">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Link href="/landing">
            <Image
              src="/images/logo.jpg"
              alt="METALLIZ GROUP (UK) Logo"
              width={35} // Reduced size
              height={35} // Reduced size
              className="h-auto w-auto object-cover cursor-pointer"
            />
          </Link>
          <h1 className="text-lg font-bold text-gray-900">METALLIZ GROUP (UK)</h1>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-6 text-[15px] font-medium">
          {["HOME", "PRODUCTS", "SERVICES", "ABOUT", "CONTACT"].map((item, index) => (
            <li key={index}>
              <Link
                href={`/${item.toLowerCase()}`}
                className="relative text-gray-900 hover:text-red-600 transition-colors duration-300 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-blue-700 before:transition-all before:duration-300 hover:before:w-full"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-gray-900 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`absolute top-16 left-0 w-full bg-white shadow-md transition-transform duration-300 ease-in-out ${
          isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden md:hidden`}
      >
        <ul className="flex flex-col items-center space-y-4 py-4">
          {["HOME", "PRODUCTS", "SERVICES", "ABOUT", "CONTACT"].map((item, index) => (
            <li key={index}>
              <Link
                href={`/${item.toLowerCase()}`}
                className="block w-full text-center text-lg font-semibold text-gray-900 hover:text-blue-700 py-2 px-6 hover:bg-gray-100 transition-all duration-300"
                onClick={() => setIsOpen(false)} // Close menu when clicked
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
