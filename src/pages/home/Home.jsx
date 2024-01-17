import React from 'react'
import HeroSection from './sections/HeroSection'
import Newest from './sections/Newest'

function Home() {
  return (
    <div>
      <HeroSection />
      <div className='container lg:mx-auto md:mx-5'>
        <Newest />
      </div>
    </div>
  )
}

export default Home