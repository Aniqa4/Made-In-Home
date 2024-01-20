import React from 'react'
import HeroSection from './sections/HeroSection'
import Categories from './sections/categories/CategoriesLayout'
import { Link } from 'react-scroll'
import PopularBlogs from './sections/PopularBlogs'
import FavoriteBlogs from './sections/FavoriteBlogs'

function Home() {
  return (
    <div>
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