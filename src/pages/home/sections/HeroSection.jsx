import React from 'react'
import { TypeAnimation } from 'react-type-animation'

function HeroSection() {
  return (
    <div className='relative'>
      <img src={`${import.meta.env.VITE_Banner_Image}`}
        alt="banner"
        className='w-full opacity-70' />
      <div className=' absolute top-1/3 px-[20%] left-0 right-0 text-2xl'>
        <div className=' grid justify-center text-center font-ProtestStrike'>
          <TypeAnimation
            preRenderFirstString={true}
            sequence={[1000, 'Welcome to MadeInHome', 1000, 'Welcome to']}
            speed={10}
            repeat={Infinity}
          />
          <p> Explore cooking, crafting, painting, sewing, and gardening with us.
            Let's create unique stories and homemade magic together, right from home.
          </p>
        </div>
      </div>
    </div>
  )
}

export default HeroSection