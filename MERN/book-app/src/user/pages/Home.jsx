import React from "react";
import { FiSearch } from "react-icons/fi";
import Header from "../components/Header";
import { FaInstagram, FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <div>

      <Header/>

      {/* Navbar */}
      {/* <div className="bg-black text-white flex justify-center gap-6 h-10 text-sm items-center">
        <p className="cursor-pointer hover:text-gray-300">Home</p>
        <p className="cursor-pointer hover:text-gray-300">Books</p>
        <p className="cursor-pointer hover:text-gray-300">Careers</p>
        <p className="cursor-pointer hover:text-gray-300">Contact</p>
      </div> */}

      {/* Hero Section */}
      <section className="w-full min-h-[500px] bg-gray-400 flex items-center justify-center">

        <div className="text-center text-white">

          <h1 className="text-5xl font-serif mb-1">
            Wonderful Gifts
          </h1>

          <p className="text-sm mb-8">
            Give your family and friends a book
          </p>

          {/* Search */}
          <div className="flex items-center bg-white rounded-full overflow-hidden w-[420px] mt-10 shadow">

            <input
              type="text"
              placeholder="Search Books"
              className="flex-1 pl-10 py-3 outline-none border-none text-gray-700"
            />

            <button className="px-6 text-gray-600 text-lg">
              <FiSearch />
            </button>

          </div>

        </div>

      </section>


      {/* New Arrivals */}
      {/* <div className="h-10"></div> */}
      <section className="mt-10 py-9 text-center">

        <p className="text-sm tracking-widest text-gray-500 mb-3">
          NEW ARRIVALS
        </p>

        <h2 className="text-3xl font-serif mb-16">
          Explore Our Latest Collection
        </h2>
        {/* <div className="h-5"></div> */}

        <div className="flex justify-center gap-12 flex-wrap">

          <div className="w-64 border shadow-sm p-4">
            <img
              src="https://images.unsplash.com/photo-1512820790803-83ca734da794"
              alt="book"
              className="w-full h-64 object-cover mb-4"
            />
            <p className="text-blue-700 text-sm">demo...</p>
            <p className="text-gray-700 text-sm">demo...</p>
            <p className="text-gray-900 text-sm">$200</p>
          </div>

          <div className="w-64 border shadow-sm p-4">
            <img
              src="https://plus.unsplash.com/premium_photo-1677187301535-b46cec7b2cc8?q=80&w=1223&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="book"
              className="w-full h-64 object-cover mb-4"
            />
            <p className="text-blue-700 text-sm">d...</p>
            <p className="text-gray-700 text-sm">dge...</p>
            <p className="text-gray-900 text-sm">$9</p>
          </div>

          <div className="w-64 border shadow-sm p-4">
            <img
              src="https://plus.unsplash.com/premium_photo-1669652639337-c513cc42ead6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="book"
              className="w-full h-64 object-cover mb-4"
            />
            <p className="text-blue-700 text-sm">nn...</p>
            <p className="text-gray-700 text-sm">Long Walk to Freedom...</p>
            <p className="text-gray-900 text-sm">$200</p>
          </div>

          <div className="w-64 border shadow-sm p-4">
            <img
              src="https://images.unsplash.com/photo-1524578271613-d550eacf6090"
              alt="book"
              className="w-full h-64 object-cover mb-4"
            />
            <p className="text-blue-700 text-sm">ed...</p>
            <p className="text-gray-700 text-sm">j...</p>
            <p className="text-gray-900 text-sm">$23</p>
          </div>

        </div>

        {/* <div className="h-5"></div> */}
        <button className="mt-6 bg-blue-700 text-white px-10 py-3 text-sm rounded">
          Explore More
        </button>

      </section>


      {/* Featured Authors */}
      <section className="mt-4 py-24 px-10">

        {/* <p className="text-xs text-gray-500 tracking-widest text-center mb-2">
          FEATURED AUTHORS
        </p> */}

        {/* <h2 className="text-3xl font-serif text-center mb-16">
          Captivates with every word
        </h2> */}

{/* <div className="h-10"></div> */}
        <div className="flex justify-center gap-16">
    
          <div className="max-w-xl text-gray-700 text-sm leading-7">

            <p className="text-sm text-gray-500 tracking-widest text-center mb-2">
          FEATURED AUTHORS
        </p>

<h2 className="text-3xl font-serif text-center mb-10">
          Captivates with every word
        </h2>

            <p className="mb-6">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt fuga nostrum illum distinctio
              eum quidem recusandae soluta aliquam laboriosam odit quas, nam molestias fugiat culpa rem
              nulla iste? Modi, molestias. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt earum
              possimus accusantium necessitatibus id neque soluta quibusdam explicabo laborum? Deserunt
              vel quia voluptates dicta incidunt illo fuga pariatur sequi error.
            </p>

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt fuga nostrum illum distinctio
              eum quidem recusandae soluta aliquam laboriosam odit quas, nam molestias fugiat culpa rem
              nulla iste? Modi, molestias. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt earum
              possimus accusantium necessitatibus id neque soluta quibusdam explicabo laborum? Deserunt
              vel quia voluptates dicta incidunt illo fuga pariatur sequi error.
            </p>

          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="author"
              className="w-[520px] h-[400px] object-cover"
            />
          </div>

        </div>

      </section>


      {/* Testimonials */}
      {/* <div className="h-16"></div> */}

      <section className="mt-1 py-10 text-center">

        <p className="text-xs text-gray-500 tracking-widest mb-2">
          TESTIMONIALS
        </p>

        <h2 className="text-3xl font-serif mb-12">
          See What Others Are Saying
        </h2>

        <div className="flex flex-col items-center">

          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
            alt="user"
            className="w-28 h-28 rounded-full object-cover mb-4"
          />

          <p className="text-sm font-medium">
            Treesa Joseph
          </p>

          <p className="text-sm text-gray-600 w-[1300px] mx-auto mt-6 leading-7 text-center text-justify">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore perspiciatis porro eveniet.
  Optio necessitatibus provident autem, quam qui, dicta molestiae quis quia deleniti aliquam
  magnam temporibus mollitia ex repellendus! Dicta. Lorem ipsum dolor sit amet consectetur
  adipisicing elit. Consequuntur, deserunt optio eum dolorum iure consectetur quia facilis
  porro modi placeat ea quis explicabo maxime voluptatum unde animi nemo aperiam quos!Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore perspiciatis porro eveniet.
  Optio necessitatibus provident autem, quam qui, dicta molestiae quis quia deleniti aliquam
  magnam temporibus mollitia ex repellendus! Dicta
</p>


        </div>

      </section>



      {/* Footer */}
      {/* <div className="h-10"></div> */}
<footer className="bg-[#0b1a2f] text-white mt-10 pt-16">

  <div className="max-w-7xl mx-auto px-12">

    <div className="grid md:grid-cols-3 gap-20 text-center md:text-left">

      {/* About */}
      <div className="md:pl-8">
        <h3 className="text-sm font-semibold tracking-widest mb-6">
          ABOUT US
        </h3>

        <p className="text-sm text-gray-300 leading-7 max-w-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
          dolorem veniam deserunt quisquam eius ad hic maxime dicta ipsum nemo
          itaque necessitatibus quas nobis, illum voluptate, pariatur recusandae alias harum!
        </p>
      </div>

      {/* Newsletter */}
      <div className="flex flex-col items-center pl-30">
        <h3 className="text-sm font-semibold tracking-widest mb-6">
          NEWSLETTER
        </h3>

        <p className="text-sm text-gray-300 mb-6">
          Stay updated with our latest trends
        </p>

        <div className="flex w-[280px]">
          <input
            type="email"
            placeholder="Email ID"
            className="w-full px-4 py-2 text-black outline-none"
          />
          <button className="bg-yellow-400 px-4 text-black font-semibold">
            →
          </button>
        </div>
      </div>

      {/* Follow */}
      <div className="flex flex-col items-center md:items-end">
        <h3 className="text-sm font-semibold tracking-widest mb-6">
          FOLLOW US
        </h3>

        <p className="text-sm text-gray-300 mb-6">
          Let us be social
        </p>

        <div className="flex gap-5 text-lg">
          <FaInstagram className="cursor-pointer hover:text-gray-400" />
          <FaTwitter className="cursor-pointer hover:text-gray-400" />
          <FaFacebookF className="cursor-pointer hover:text-gray-400" />
          <FaLinkedinIn className="cursor-pointer hover:text-gray-400" />
        </div>
      </div>

    </div>
  </div>

  {/* Bottom */}
  <div className="mt-12 border-t border-gray-700 pt-4 text-center text-xs text-gray-400">
    Copyright © 2023 All rights reserved | This website is made with by Ansiya kiran
  </div>

</footer>


      

    </div>
  );
}

export default Home;