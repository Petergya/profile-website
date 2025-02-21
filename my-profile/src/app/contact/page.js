import React from "react";
import Image from "next/image";
const Contact = () => {
  return (

    <div className="mt-8">
     <div className="">
      <Image 
        src="/images/contact1.jpg" 
        alt="Contact" 
        width={1300} 
        height={100} 
        className="h-[250px]  object-cover" 
      />
    </div>
 <div className=" px-4 md:px-16 py-10 max-w-6xl mx-auto">
       
       <h2 className="text-xl font-bold mb-4 text-center md:text-left">GET A QUOTE</h2>
       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         {/* Form Section */}
         <div className="md:col-span-2 space-y-4">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> 
             <input
               type="text"
               placeholder="Name*"
               className="w-full p-3 border border-gray-300 bg-slate-200"
             />
             <input
               type="email"
               placeholder="Email*"
               className="w-full p-3 border border-gray-300 bg-slate-200"
             />
           </div>
           <textarea
             placeholder="Write your message..."
             className="w-full p-3 border border-gray-300 h-32 bg-slate-200"
           ></textarea>
           <button className="bg-gray-700 text-white px-6 py-2 w-full md:w-auto">SEND</button>
         </div>
 
         {/* Contact Info Section */}
         <div className="md:text-left text-center">
           <div className="w-full md:w-48 mx-auto md:mx-0">
             <h3 className="font-bold bg-gray-700 p-3 text-white">United Kingdom</h3>
           </div>
           <p className="text-sm mt-2">Richfield Group (UK) LLP</p>
           <p className="text-sm">20-22 Wenlock Road,</p>
           <p className="text-sm">London, United Kingdom.</p>
           <p className="text-sm">N1 7UG</p>
           <p className="text-sm mt-2">Email: admin@richfieldgroup.co.uk</p>
           <p className="text-sm">Tel: +44(0) 0207 608 5500</p>
         </div>
       </div>
     </div>
    </div>
   
  );
};

export default Contact;
