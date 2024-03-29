import React from 'react'
import BlogCard from '../../../../components/BlogCard'
import { FaLongArrowAltLeft } from "react-icons/fa";

function AllCategories() {
  return (
    <div>
      <div className='grid grid-cols-6 gap-5'>
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
      <p className='py-10 cursor-pointer flex justify-center items-center gap-3'>View More
        <span className=' animate-pulse'><FaLongArrowAltLeft /></span>
      </p>
    </div>
  )
}

export default AllCategories