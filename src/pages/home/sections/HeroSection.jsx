import React from 'react'

function HeroSection() {
  return (
    <div className='relative'>
      <img src={`${import.meta.env.VITE_Banner_Image}`}
        alt="banner"
        className='w-full opacity-70' />
      <p className=' absolute top-1/3 px-20 text-center text-xl text-black font-semibold'>
        Welcome to MadeInHome, your haven for all things handmade and heartcrafted.
        Explore a world of creativity within the comfort of your home, where we share
        inspiring ideas and practical tips on cooking, crafting, painting, sewing,
        and gardening. Join us on a journey of turning everyday moments into extraordinary
        creations, bringing warmth, charm, and a touch of homemade magic to every aspect
        of your life. Embrace the joy of crafting your own unique story,
        one homemade masterpiece at a time. Let's make, create, and cultivate together,
        right from the heart of home.
      </p>
    </div>
  )
}

export default HeroSection