import React from 'react'
import { Link } from 'react-scroll'

function HeroSection() {
  return (
    <div className='relative'>
      <img src={`${import.meta.env.VITE_Banner_Image}`}
        alt="banner"
        className='w-full opacity-70' />
      <div className=' absolute top-1/2 left-0 right-0 text-3xl font-ProtestStrike'>
        <div className=' grid justify-center text-center '>
          <p>Welcome to MadeInHome!</p>
          <p> Explore cooking, crafting, painting, sewing, and gardening with us.
            Let's create unique stories and homemade magic together, right from home.
          </p>
        </div>
      </div>
    </div>
  )
}

export default HeroSection