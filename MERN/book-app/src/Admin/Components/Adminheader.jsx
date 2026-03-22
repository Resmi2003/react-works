import React from 'react'

function Adminheader() {
  return (
    <>
    <div className='flex justify-between items-center p-3 md:px-20'>
      {/* logo */}
      <div className='flex items-center'>
        <img
        width={'50px'}
        height={'50px'}
        src="https://static.vecteezy.com/system/resources/previews/036/437/096/non_2x/illustration-of-book-vector.jpg" alt="logo"
        />
        <h1 className='text-2xl font-bold ms-2'>BOOKSTORE</h1>
      </div>

      {/* logout block */}
      <button className='border border-black rounded px-3 py-2 ms-3 hover:bg-black hover:text-white'>
        {" "}
        Logout{" "}
      </button>
    </div>
    <div className='w-full p-3 bg-black text-white'>
      <p>Welcome,  Admin! You're all set to manage and monitor the system. Let’s get to work!</p>
    </div>
     </>
  )
}

export default Adminheader
