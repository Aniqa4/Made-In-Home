import React from 'react'
import HeroSection from './sections/HeroSection'
import Categories from './sections/categories/Categories'
import { Link } from 'react-scroll'

function Home() {
  return (
    <div>
      <HeroSection />
      <div className='container lg:mx-auto md:mx-5'>
        <Link to='categories' smooth={true} duration={500}>
          <Categories />
        </Link>
      </div>
    </div>
  )
}

export default Home