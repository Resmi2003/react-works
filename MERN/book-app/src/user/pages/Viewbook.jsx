import React, { useEffect, useState } from "react";
import { FaEye, FaCamera, FaTimes, FaArrowLeft } from "react-icons/fa";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import { makePaymentAPI, viewBookAPI } from "../../../services/allAPI";
import { server_url } from "../../../services/server_url";
import {loadStripe} from '@stripe/stripe-js';


function Viewbook() {
  const [showModal, setShowModal] = useState(false);
  const {id} = useParams()
  const[book,setBook] = useState({})

  useEffect(()=>{
    viewBooks()
  },[])

  const viewBooks = async()=>{
    const token = sessionStorage.getItem("token")
    if(token){
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }
      const result = await viewBookAPI(id,reqHeader)
      if(result.status==200){
        setBook(result.data)
      }else{
        console.log(result);
      }
    }else{
      console.log("error");
      
    }
  }

  // console.log(book);

   const makePayment = async()=>{
      const stripe = await loadStripe('pk_test_51TPFpCCwwHo3qVuHz3oBS6PohYq5mx2gz6H96XTx3ctFjKnkplzJ5j7LES8Zw6eaascpnb39GzZTsIpDVqZ7DdG600QxsOriu1');
      // console.log(stripe);
      const token = sessionStorage.getItem("token")
    if(token){
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }
      const result = await makePaymentAPI(id,reqHeader)
      console.log(result.data);
      const {checkOutURL}=result.data
      window.location.href=checkOutURL

    }else{
      console.log("error");
    }
  }  

  return (
     
    <>

    <Header />

    <div className="bg-gray-100 min-h-screen flex justify-center items-start pt-16">

      {/* CARD */}
      <div className="bg-white w-[950px] h-[400px] rounded shadow-md flex relative">

        {/* IMAGE */}
        <div className="w-[260px] h-full">
          <img
            src={book?.imageUrl}
            alt=""
            className="w-full h-full object-cover rounded-l"
          />
        </div>

        {/* CONTENT */}
        <div className="flex-1 px-6 py-5 flex flex-col justify-between">

          <div>
            {/* CENTER TITLE */}
            <div className="text-center">
              <h2 className="text-2xl font-semibold">{book?.title}</h2>
              <p className="text-blue-500 text-sm mb-4">
                {book?.author}
              </p>
            </div>

            {/* DETAILS */}
            <div className="grid grid-cols-2 gap-y-2 text-sm">
              <p className="font-bold">Publisher : {book?.publisher}</p>
              <p className="font-bold">Language : {book?.language}</p>
              <p className="font-bold">Seller Mail : {book?.sellerMail}</p>
              <p className="font-bold">No. of pages : {book?.pages}</p>
              <p className="font-bold">Real Price : ${book?.price}</p>
              <p className="font-bold">ISBN : {book?.isbn}</p>
              <p className="font-bold">Category : {book?.category}</p>
            </div>

            {/* DESCRIPTION */}
            <p className="text-sm mt-4 text-gray-600 leading-relaxed">
              {book?.abstract}
            </p>
          </div>

          {/* BUTTONS */}
          <div className="flex justify-end gap-3">
            <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded">
              <FaArrowLeft />
              Back
            </button>

            <button onClick={makePayment} className="bg-green-600 text-white px-4 py-2 rounded">
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


            {/* duplicate images */}
              <div className="flex gap-3">

                { book?.uploadImg?.length>0?book.uploadImg.map((filename,index)=>(<img key={index} 
                  src={`${server_url}/uploads/${filename}`}
                  className="w-1/2 h-44 object-cover rounded"
                  alt="book images"
                /> )) : <p>Nothing to display</p>
                }
                


                {/* <img
                  src="https://images-na.ssl-images-amazon.com/images/I/81h2gWPTYJL.jpg"
                  className="w-1/2 h-44 object-cover rounded"
                  alt=""
                /> */}
              </div>

            </div>
          </div>
        </div>
      )}
    </div>

    {/* <button onClick={()=>setShowModal(false)} className="text-gray-400">
    close
    </button> */}

    </>
  );
}

export default Viewbook;