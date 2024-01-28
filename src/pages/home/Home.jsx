import React, { useEffect, useState } from 'react'
import HeroSection from './sections/HeroSection'
import Categories from './sections/categories/CategoriesLayout'
import PopularBlogs from './sections/PopularBlogs'
import FavoriteBlogs from './sections/FavoriteBlogs'
import Navbar from '../../components/Navbar'

function Home() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    // Attach the event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array to run the effect only once

  return (
    <div>
      <div className={scrolling?' fixed left-0 right-0 top-0 z-20 bg-[#ffffffd8] ':' fixed left-0 right-0 top-0 z-20 '}>
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