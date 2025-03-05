"use client";
import React, { useState } from "react";
import Image from "next/image";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSuccess("Failed to send message. Please try again.");
      }
    } catch (error) {
      setSuccess("An error occurred. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="mt-8 font-twcen">
      <div>
        <Image
          src="/images/contact1.jpg"
          alt="Contact"
          width={1300}
          height={100}
          className="h-[250px] object-cover"
        />
      </div>
      <div className="px-4 md:px-16 py-10 max-w-6xl mx-auto">
        <h2 className="text-xl font-bold mb-4 text-center md:text-left">
          GET A QUOTE
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
          <div className="md:col-span-2 space-y-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name*"
                  className="w-full p-3 border border-gray-300 bg-slate-200"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email*"
                  className="w-full p-3 border border-gray-300 bg-slate-200"
                  required
                />
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                className="w-full p-3 border border-gray-300 h-32 bg-slate-200"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-gray-700 text-white px-6 py-2 w-full md:w-auto"
                disabled={loading}
              >
                {loading ? "Sending..." : "SEND"}
              </button>
            </form>
            {success && <p className="text-sm text-green-600">{success}</p>}
          </div>

        
          <div className="md:text-left text-center font-twcen">
            <div className="w-full md:w-48 mx-auto md:mx-0">
              <h3 className="font-bold bg-gray-700 p-3 text-white">
                UNITED KINGDOM
              </h3>
            </div>
            <p className="text-sm mt-2">27 Old Gloucester Street</p>
            <p className="text-sm">WCIN 3AX</p>
            <p className="text-sm">London, United Kingdom.</p>
            {/* <p className="text-sm">N1 7UG</p> */}
            <p className="text-sm mt-2">
              Email:{" "}
              <a
                href="mailto:admin@richfieldgroup.co.uk"
                className="text-blue-600"
              >
                enquiries@metallizgroup.uk
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
      </div>
    </div>
  );
};

export default Contact;
