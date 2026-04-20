import React, { useContext, useEffect, useState } from 'react'
import { FaPowerOff, FaHome, FaBook, FaBriefcase, FaCog } from "react-icons/fa";
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { getAllBooksAPI } from '../../../services/allAPI';
import { searchContext } from '../../ContextAPI/ShareContext';
import { FaBarsProgress } from 'react-icons/fa6';


function Allbook() {

  const{searchKey,setSearchKey} = useContext(searchContext)

  const[token,setToken] = useState("")
  const[allBooks,setAllBooks] = useState([])
  const[categories,setCategories] = useState([])
  const[tempBooks,setTempBooks] = useState([])



  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      const userToken = sessionStorage.getItem("token")
      setToken(userToken)
      getallBooks(userToken)
    }
  },[searchKey])

  const getallBooks = async(token)=>{
    const reqHeader = {
      "Authorization":`Bearer ${token}`
    }
    const result = await getAllBooksAPI(reqHeader,searchKey)
    if(result.status==200){
      setAllBooks(result.data)
      setTempBooks(result.data)
      // add categories
      const tempCategory = result.data.map(item=>item.category)
      setCategories([...new Set(tempCategory)]);

    }else{
      console.log(result);
      
    }
  }

  const filterBook = (category)=>{
    if(category!="no filter"){
      setAllBooks(tempBooks.filter(item=>item.category==category))
    }else{
      setAllBooks(tempBooks)
    }
  }





  // console.log(allBooks);
  


// console.log(categories);


  return (
    <>

    <Header/>

    {token?<div>
    <div className="bg-gray-100 min-h-screen">

      {/* Header */}
      {/* <div className='bg-white shadow px-6 py-3 flex justify-between items-center'>
        <div className='flex items-center'>
          <img
            width="50"
            height="50"
            src="https://static.vecteezy.com/system/resources/previews/036/437/096/non_2x/illustration-of-book-vector.jpg"
            alt="logo"
          />
          <h1 className='text-2xl font-bold ms-2'>BOOK STORE</h1>
        </div>

        <button className="flex items-center gap-2 border px-4 py-1 rounded hover:bg-black hover:text-white">
          <FaPowerOff size={16} />
          Logout
        </button>
      </div> */}

      {/* Welcome */}
      
      {/* <div className="bg-[#0B1F3A] text-white px-6 py-2 text-right">
        Welcome, Admin!
      </div> */}

      {/* Layout */}
      <div className="flex items-start">

        {/* Sidebar */}
        <div className="w-64 bg-blue-100 p-6 min-h-screen">



         {/* filter */}
         <div className="col-span-1">
              <div className="flex justify-between">
                <h1 className="text-2xl font-semibold">Filter</h1>
                <button  className="text-2xl md:hidden"><FaBarsProgress/></button>
              </div>
              <div className='md:block hidden'>        
                      { categories?.map((item,index)=>(<div key={index}  className="mt-3">
                        <input name='filter' type="radio" id={item} onClick={()=>filterBook(item)} />
                        <label className="ms-3" htmlFor={item} >
                          {item}
                        </label>
                      </div>
                      ))  }           
                <div className="mt-3">
                  <input type="radio" id="noFilter" name="filter" onClick={()=>filterBook("no filter")} />
                  <label className="ms-3">
                    No-Filter
                  </label>
                </div>
              </div>
            </div>

          {/* Profile */}
          {/* <div className="flex flex-col items-center mb-10">
            <img
              src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              className="w-20 h-20 rounded-full mb-2"
              alt="user"
            />
            <h2 className="font-semibold">Ann</h2>
          </div> */}

          {/* Menu */}
          {/* <ul className="space-y-5"> */}

            {/* <li className="flex items-center justify-center gap-3">
              <input type="radio" name="menu" className="mt-[2px]" />
              <FaHome size={16} />
              <span className="w-20 text-left">Home</span>
            </li> */}

            {/* <li className="flex items-center justify-center gap-3 font-semibold">
              <input type="radio" name="menu" defaultChecked className="mt-[2px]" />
              <FaBook size={16} />
              <span className="w-20 text-left">All Books</span>
            </li> */}

            {/* <li className="flex items-center justify-center gap-3">
              <input type="radio" name="menu" className="mt-[2px]" />
              <FaBriefcase size={16} />
              <span className="w-20 text-left">Careers</span>
            </li> */}

            {/* <li className="flex items-center justify-center gap-3">
              <input type="radio" name="menu" className="mt-[2px]" />
              <FaCog size={16} />
              <span className="w-20 text-left">Settings</span>
            </li> */}

          {/* </ul> */}
        </div>

        {/* Content */}
        <div className="flex-1 p-6">

          <h2 className="text-2xl text-center font-serif mb-6">
            All Books
          </h2>

          {/* Tabs */}
          <div className="flex justify-center gap-8 mb-6">
            {/* <button className="text-black font-medium">Book List</button>
            <button className="text-black font-medium">Users</button> */}
            <h1 className='text-xl'>Collections</h1>
          </div>
      
         {/* search box */}
         <div className='flex my-5 justify-center'>
            <input value={searchKey} type='text' className='p-2 border border-gray-200 text-black w-100 placeholder-gray-600' placeholder='Search By Title' onChange={e=>setSearchKey(e.target.value)} />
            <button className='bg-blue-900 text-white p-2'>Search</button>
         </div>

          {/* Books Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

            {/* 1 */}

           { allBooks.length>0?allBooks.map(book=>( <div className="bg-white shadow rounded p-4 text-center" hidden={book.status=='pending' || book.status=='sold'}>
              <img src={book?.imageUrl} className="h-52 w-full object-cover mb-4 rounded" />
              <p className="text-sm text-blue-700 mb-3">{book?.author}</p>
              <p className="text-sm mb-3">{book?.title}</p>
              <Link to={`/view/${book?._id}`} className='bg-blue-800 p-1 text-white mt-5'>View Book</Link>
              {/* <p className="text-blue-600">$20</p> */}
            </div>)):<p className='font-bold'>Loading...</p>}


            {/* 2 */}
            {/* <div className="bg-white shadow rounded p-4 text-center">
              <img src="https://covers.openlibrary.org/b/id/8370221-L.jpg" className="h-52 w-full object-cover mb-4 rounded" />
              <p className="text-sm text-blue-700">Héctor García</p>
              <p className="text-sm">Ikigai</p>
              <p className="text-blue-600">$15</p>
            </div> */}

            {/* 3 */}
            {/* <div className="bg-white shadow rounded p-4 text-center">
              <img src="https://images.unsplash.com/photo-1750859613776-c8209c98c86b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym9vayUyMGF1dGhvcnxlbnwwfHwwfHx8MA%3D%3D" className="h-52 w-full object-cover mb-4 rounded" />
              <p className="text-sm text-blue-700">Morgan Housel</p>
              <p className="text-sm">Psychology of Money</p>
              <p className="text-blue-600">$23</p>
            </div> */}

            {/* 4 */}
            {/* <div className="bg-white shadow rounded p-4 text-center">
              <img src="https://images.unsplash.com/photo-1767775832375-121769ea26be?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym9vayUyMGF1dGhvcnxlbnwwfHwwfHx8MA%3D%3D" className="h-52 w-full object-cover mb-4 rounded" />
              <p className="text-sm text-blue-700">George Orwell</p>
              <p className="text-sm">1984</p>
              <p className="text-blue-600">$18</p>
            </div> */}

            {/* 5 */}
            {/* <div className="bg-white shadow rounded p-4 text-center">
              <img src="https://covers.openlibrary.org/b/id/11192518-L.jpg" className="h-52 w-full object-cover mb-4 rounded" />
              <p className="text-sm text-blue-700">Robert Kiyosaki</p>
              <p className="text-sm">Rich Dad Poor Dad</p>
              <p className="text-blue-600">$18</p>
            </div> */}

            {/* 6 */}
            {/* <div className="bg-white shadow rounded p-4 text-center">
              <img src="https://covers.openlibrary.org/b/id/8231856-L.jpg" className="h-52 w-full object-cover mb-4 rounded" />
              <p className="text-sm text-blue-700">Robin Sharma</p>
              <p className="text-sm">5 AM Club</p>
              <p className="text-blue-600">$19</p>
            </div> */}

            {/* 7 */}
            {/* <div className="bg-white shadow rounded p-4 text-center">
              <img src="https://covers.openlibrary.org/b/id/8281996-L.jpg" className="h-52 w-full object-cover mb-4 rounded" />
              <p className="text-sm text-blue-700">Mark Manson</p>
              <p className="text-sm">Subtle Art</p>
              <p className="text-blue-600">$16</p>
            </div> */}

            {/* 8 */}
            {/* <div className="bg-white shadow rounded p-4 text-center">
              <img src="https://covers.openlibrary.org/b/id/8269251-L.jpg" className="h-52 w-full object-cover mb-4 rounded" />
              <p className="text-sm text-blue-700">Napoleon Hill</p>
              <p className="text-sm">Think & Grow Rich</p>
              <p className="text-blue-600">$22</p>
            </div> */}

          </div>

        </div>

      </div>
    </div>
    </div>:
    <div className='w-full h-screen flex justify-center items-center flex-col'>
      <img className='w-50' src="https://tse4.mm.bing.net/th/id/OIP.KIQNSETsp3AUSMhO_lm8DAHaKj?rs=1&pid=ImgDetMain&o=7&rm=3" alt="lock screen" />
      <p className='text-lg font-bold my-15'>Please <Link to={'/login'}
      className='text-blue-600 underline'>Login</Link> to Explore More.....</p>
    </div>
    }

    </>

  )
}

export default Allbook