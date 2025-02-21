// import Link from "next/link";

// const Navbar = () => {
//   return (
//     <nav className=" text-white p-4 bg-stone-900">
//       <div className="container mx-auto flex justify-between ">
//         <h1 className="text-xl font-bold">Company Name</h1>
//         <ul className="flex gap-4 justify-center">
//           <li><Link href="/">Home</Link></li>
//           <li><Link href="/products">Products</Link></li>
//           <li><Link href="/service">Service</Link></li>
//           <li><Link href="/about">About</Link></li>
//           <li><Link href="/contact">Contact</Link></li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-stone-900 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-xl font-bold whitespace-nowrap ">Company Name</h1>

        {/* Navigation Links - Centered */}
        <ul className="flex-grow flex justify-center space-x-6">
          <li><Link href="/" className="hover:text-gray-400">Home</Link></li>
          <li><Link href="/products" className="hover:text-gray-400">Products</Link></li>
          <li><Link href="/service" className="hover:text-gray-400">Service</Link></li>
          <li><Link href="/about" className="hover:text-gray-400">About</Link></li>
          <li><Link href="/contact" className="hover:text-gray-400">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
