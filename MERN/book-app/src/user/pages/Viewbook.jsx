import React, { useState } from "react";
import { FaEye, FaCamera, FaTimes, FaArrowLeft } from "react-icons/fa";
import Header from "../components/Header";

function Viewbook() {
  const [showModal, setShowModal] = useState(false);

  return (
     
    <>

    <Header />

    <div className="bg-gray-100 min-h-screen flex justify-center items-start pt-16">

      {/* CARD */}
      <div className="bg-white w-[950px] h-[400px] rounded shadow-md flex relative">

        {/* IMAGE */}
        <div className="w-[260px] h-full">
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/81h2gWPTYJL.jpg"
            alt=""
            className="w-full h-full object-cover rounded-l"
          />
        </div>

        {/* CONTENT */}
        <div className="flex-1 px-6 py-5 flex flex-col justify-between">

          <div>
            {/* CENTER TITLE */}
            <div className="text-center">
              <h2 className="text-2xl font-semibold">Becoming</h2>
              <p className="text-blue-500 text-sm mb-4">
                - Michelle Obama
              </p>
            </div>

            {/* DETAILS */}
            <div className="grid grid-cols-2 gap-y-2 text-sm">
              <p>Publisher : Crown (North America)</p>
              <p>Language : English</p>
              <p>Seller Mail : neel@gmail.com</p>
              <p>No. of pages : 448</p>
              <p>Real Price : ₹ 25</p>
              <p>ISBN : 978-1-5247-6313-8</p>
            </div>

            {/* DESCRIPTION */}
            <p className="text-sm mt-4 text-gray-600 leading-relaxed">
              Becoming is a deeply personal memoir by Michelle Obama,
              chronicling her journey from her childhood on the South Side
              of Chicago to her years as a working professional balancing
              career and family. It also reflects her time as the First Lady
              of the United States, where she inspired millions through her
              advocacy for education, health, and empowerment.
            </p>
          </div>

          {/* BUTTONS */}
          <div className="flex justify-end gap-3">
            <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded">
              <FaArrowLeft />
              Back
            </button>

            <button className="bg-green-600 text-white px-4 py-2 rounded">
              Buy ₹ 23
            </button>
          </div>
        </div>

        {/* Eye Icon */}
        <div
          className="absolute top-3 right-3 cursor-pointer text-gray-500"
          onClick={() => setShowModal(true)}
        >
          <FaEye size={18} />
        </div>
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 backdrop-blur-[1px] flex items-start justify-center pt-45">

          <div className="bg-white w-[600px] rounded shadow-lg">

            {/* HEADER */}
            <div className="bg-blue-900 text-white px-4 py-2 flex justify-between items-center">
              <h2 className="text-sm font-semibold">Book Photos</h2>
              <FaTimes
                className="cursor-pointer"
                onClick={() => setShowModal(false)}
              />
            </div>

            {/* BODY */}
            <div className="p-4">

              <div className="flex items-center text-blue-500 text-sm mb-3">
                <FaCamera className="mr-2" />
                <p>Camera click of the book in the hand of seller</p>
              </div>

              <div className="flex gap-3">
                <img
                  src="https://images-na.ssl-images-amazon.com/images/I/81h2gWPTYJL.jpg"
                  className="w-1/2 h-44 object-cover rounded"
                  alt=""
                />
                <img
                  src="https://images-na.ssl-images-amazon.com/images/I/81h2gWPTYJL.jpg"
                  className="w-1/2 h-44 object-cover rounded"
                  alt=""
                />
              </div>

            </div>
          </div>
        </div>
      )}
    </div>

    </>
  );
}

export default Viewbook;