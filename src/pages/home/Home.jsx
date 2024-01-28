import React from 'react'
import HeroSection from './sections/HeroSection'
import Categories from './sections/categories/CategoriesLayout'
import PopularBlogs from './sections/PopularBlogs'
import FavoriteBlogs from './sections/FavoriteBlogs'
import Navbar from '../../components/Navbar'

function Home() {
  return (
    <div>
      <div className=' fixed left-0 right-0 top-0 z-20'>
        <Navbar />
      </div>
      <HeroSection />
      <div className='container lg:mx-auto md:mx-5'>
        <PopularBlogs />
        <FavoriteBlogs />
        <Categories />
      </div>
    </div>
  )
}

export default Home