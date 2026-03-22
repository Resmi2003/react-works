import React, { useState } from 'react'
import { CiTwitter, CiUser } from 'react-icons/ci'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { FaBarsProgress } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function Header() {

  const[listStatus,setListStatus]=useState(false)

  return (
    <>
    <div className='grid grid-cols-3 p-3'>
      {/* logo */}
      <div className='flex items-center'>
        <img
         width={"50px"}
         height={"50px"}
          src="https://static.vecteezy.com/system/resources/previews/036/437/096/non_2x/illustration-of-book-vector.jpg"
          alt="logo" />
          <h1 className='text-2xl font-bold ms-2 md:hidden'>BOOK STORE</h1>
      </div>
      {/* title */}
      <div className='md:flex justify-center items-center hidden'>
        <h1 className='text-3xl font-bold'>BOOK STORE</h1>
      </div>
      {/* login block */}
      <div className='md:flex justify-end items-center hidden'>
        <FaInstagram />
        <CiTwitter />
        <FaFacebook />
        {/* login link */}
        <Link to={"/login"}>
        <button className='border border-black flex rounded px-3 py-2 ms-3 hover:bg-black hover:text-white'>
          <CiUser />Login
        </button>
        </Link>
      </div>

    </div>


    <nav className='w-full p-3 bg-black text-white md:flex justify-center items-center'>
      {/* menubar & login */}
      <div className='flex justify-between items-center text-2xl md:hidden text-white'>
        <button onClick={()=>setListStatus(true)}><FaBarsProgress className='text-white' /></button>
        {/* login link */}
        <Link to={"/login"}>
        <button className='border border-black rounded px-3 py-2 ms-3 hover:bg-black hover:text-white'>
         <CiUser/> Login
        </button>
        </Link>

        <div className="relative inline-block text-left">
            <button  className="w-full  px-3 py-2 bg-gray-500 shadow-xs hover:bg-gray-50 rounded">
               <img width={'40px'} height={'40px'} style={{borderRadius:'50%'}} className="mx-2" src="http://pluspng.com/img-png/user-png-icon-male-user-icon-512.png" alt="user" />
            </button>
          <div className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-hidden">
              <div className="py-1">
                <Link className="block px-4 py-2 text-sm text-gray-700" to={'/profile'}> Profile </Link>
                <button className="block px-4 py-2 text-sm text-gray-700"> Logout</button>
              </div>
            </div>
          </div>
      </div>

      <ul className={listStatus?"flex flex-col":"md:flex justify-center items-center hidden"}>
        <li className='md:mx-4 mt-3 md:mt-0'><Link to={'/'} >HOME</Link></li>
        <li className='md:mx-4 mt-3 md:mt-0'><Link to={'/all-books'} >BOOKS</Link></li>
        <li className='md:mx-4 mt-3 md:mt-0'><Link to={'/careers'} >CAREERS</Link></li>
        <li className='md:mx-4 mt-3 md:mt-0'><Link to={'/contact'} >CONTACT</Link></li>
      </ul>
    </nav>
      
    </>
  )
}

export default Header

