import React from 'react'
import Adminheader from '../Components/Adminheader'
import Adminsidebar from '../Components/Adminsidebar'

function Adminprofile() {
  return (
    <>
    <Adminheader/>
      <div className='md:grid grid-cols-5 gap-2'>
        <div className='col-span-1'>
          <Adminsidebar/>
        </div>
        <div className='col-span-4'>
          <h1 className='text-3xl font-bold text-center my-5'>Settings</h1>
          <div className='md:grid grid-cols-2 gap-5 mx-5 items-center'>
            <div>
              <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quos rerum id iure quo cupiditate sapiente, incidunt reprehenderit quas, corporis fuga dolorem eveniet quaerat inventore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla neque a explicabo! Doloribus, velit aperiam laboriosam eum possimus eos error ut, eveniet debitis vero libero veniam. Veniam minima culpa illo.</p>
              <p className='text-justify mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quos rerum id iure quo cupiditate sapiente, incidunt reprehenderit quas, corporis fuga dolorem eveniet quaerat inventore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla neque a explicabo! Doloribus, velit aperiam laboriosam eum possimus eos error ut, eveniet debitis vero libero veniam. Veniam minima culpa illo.</p>
            </div>
            <div className='rounded bg-blue-100 p-10 flex justify-center items-center flex-col mt-10 md:mt-10'>
              <label htmlFor="adminPic">
                      <input type="file" name='' id='adminPic' className='hidden'/>
                      <img src="https://img.freepik.com/premium-vector/man-character_665280-46970.jpg" width={'200px'} height={'200px'} alt="admin profile" />
                    </label>
                    <div className='mb-3 w-full'>
                      <input type="text" className='p-2 bg-white border border-gray-200 text-black w-full rounded placeholder-gray-600' placeholder='Username' />
                    </div>
                    <div className='mb-3 w-full'>
                      <input type="text" className='p-2 bg-white border border-gray-200 text-black w-full rounded placeholder-gray-600' placeholder='Username' />
                    </div>
                    <div className='mb-3 w-full mt-20'>
                      <input type="text" className='p-2 bg-white border border-gray-200 text-black w-full rounded placeholder-gray-600' placeholder='Username' />
                    </div>
                    <div className='mb-3 w-full flex justify-evenly'>
                      <input type="text" className='p-2 bg-white border border-gray-200 text-black w-full rounded placeholder-gray-600' placeholder='Username' />
                    </div>
            </div>
          </div>
        </div>
        </div>
    </>
  )
}

export default Adminprofile
