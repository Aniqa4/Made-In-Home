import React from 'react'
import HeroSection from './sections/HeroSection'
import Categories from './sections/Categories'

function Home() {
  return (
    <div>
      <HeroSection />
      <div className='container lg:mx-auto md:mx-5'>
        <Categories/>
      </div>
    </div>
  )
}

export default Home