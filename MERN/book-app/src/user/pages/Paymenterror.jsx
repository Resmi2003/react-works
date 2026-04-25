import React from 'react'
import Header from '../components/Header'
import { FaBackward } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Paymenterror() {
  return (
    <div>
      <Header/>
      <div className='container min-h-screen flex justify-center items-center'>
        <div className='md:grid grid-cols-2 px-20 justify-center items-center my-10'>
            <div>
                <h1 className='text-blue-500 md:text-4xl'>Payment Error !!!</h1>
                <p className='text-2xl my-10'>We Apologize for the inconvenience caused and Appreciate your visit to Bookstore...</p>
                <Link to={'/all-books'} className='flex items-center bg-blue-600 w-60 p-2 text-white font-bold'>
                <FaBackward className='me-2' /> Explore More Books!!!</Link>
            </div>
            <div className='flex justify-center items-center'>
                <img src="https://cdn.dribbble.com/users/251873/screenshots/9388228/error-img.gif" alt="payment error" />

            </div>

        </div>

      </div>
    </div>
  )
}

export default Paymenterror

