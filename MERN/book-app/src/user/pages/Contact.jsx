import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaPaperPlane } from "react-icons/fa";
import Header from "../components/Header";

function Contact() {
  return (
    <>
      <Header />

      {/* Navbar */}
      {/* <div className="bg-black text-white flex justify-center gap-6 h-10 text-sm items-center">
        <p className="cursor-pointer hover:text-gray-300">Home</p>
        <p className="cursor-pointer hover:text-gray-300">Books</p>
        <p className="cursor-pointer hover:text-gray-300">Careers</p>
        <p className="cursor-pointer hover:text-gray-300">Contact</p>
      </div> */}
    

      <div className="bg-gray-100 min-h-screen">

        {/* Title */}
        <section className="text-center py-10 px-6">
          <h2 className="text-3xl font-serif mb-4">Contacts</h2>

          <p className="text-sm text-gray-600 leading-7 text-center px-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis earum eligendi blanditiis!
            Ipsa dolor aliquam odit consequatur illum ipsam necessitatibus veritatis? Eius dolorem
            corporis ratione. Pariatur provident explicabo cumque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis earum eligendi blanditiis!
            Ipsa dolor aliquam odit consequatur illum ipsam necessitatibus veritatis? Eius dolorem
            corporis ratione. Pariatur provident explicabo cumque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis earum eligendi blanditiis!
            Ipsa dolor aliquam odit consequatur illum ipsam necessitatibus veritatis? Eius dolorem
            corporis ratione. Pariatur provident explicabo cumque.
          </p>
        </section>

        {/* Contact Info */}
        <div className="h-10"></div>
        <div className="flex justify-center items-start gap-32 text-center mb-20 flex-wrap">

          <div className="flex flex-col items-center">
            <div className="bg-gray-200 p-4 rounded-full mb-4">
              <FaMapMarkerAlt />
            </div>
            <p className="text-sm text-gray-700">
              123 Main Street, Apt 4B,<br />
              Anytown, CA 91234
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-gray-200 p-4 rounded-full mb-4">
              <FaPhoneAlt />
            </div>
            <p className="text-sm text-gray-700">
              +91 9876543210
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-gray-200 p-4 rounded-full mb-4">
              <FaEnvelope />
            </div>
            <p className="text-sm text-gray-700">
              bookstore@gmail.com
            </p>
          </div>

        </div>

        {/* Form + Map */}
        <div className="h-10"></div>
        <div className="flex justify-center gap-12 px-6 pb-20 flex-wrap">

          {/* Form */}
          <div className="bg-gray-200 p-8 w-[500px]">

            <h3 className="text-center font-serif mb-6">
              Send me Message
            </h3>

            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Name"
                className="p-3 outline-none text-sm"
              />

              <input
                type="email"
                placeholder="Email Id"
                className="p-3 outline-none text-sm"
              />

              <textarea
                placeholder="Message"
                rows="5"
                className="p-3 outline-none text-sm"
              ></textarea>

              {/* Button */}
              <button className="bg-black text-white py-2 text-sm hover:bg-gray-800 flex items-center justify-center gap-2">
                Send
                <FaPaperPlane className="text-xs mt-[1px]" />
              </button>

            </div>

          </div>

          {/* Map */}
          <div className="w-[500px] h-[410px]">
            <iframe
              title="map"
              src="https://www.google.com/maps?q=Kochi,Kerala&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            ></iframe>
          </div>

        </div>

      </div>
    </>
  );
}

export default Contact;