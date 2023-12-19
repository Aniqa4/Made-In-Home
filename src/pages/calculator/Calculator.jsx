import React from 'react'
import '../../Styles/Styles.css'

function Calculator() {
  return (
    <div className='container mx-auto py-10'>
      <h1 className='text-center font-semibold'>Calculator</h1>
      <div className='px-2 py-10 border my-5'>0</div>
      <div className='grid grid-cols-7'>
        <p className='border p-2 bg-purple text-white text-center text-xl hover:bg-purple-900'>1</p>
        <p className='border p-2 bg-purple text-white text-center text-xl hover:bg-purple-900'>2</p>
        <p className='border p-2 bg-purple text-white text-center text-xl hover:bg-purple-900'>3</p>
        <p className='border p-2 bg-purple text-white text-center text-xl hover:bg-purple-900'>4</p>
        <p className='border p-2 bg-purple text-white text-center text-xl hover:bg-purple-900'>5</p>
        <p className='border p-2 bg-purple text-white text-center text-xl hover:bg-purple-900'>6</p>
        <p className='border p-2 bg-purple text-white text-center text-xl hover:bg-purple-900'>7</p>
        <p className='border p-2 bg-purple text-white text-center text-xl hover:bg-purple-900'>8</p>
        <p className='border p-2 bg-purple text-white text-center text-xl hover:bg-purple-900'>9</p>
        <p className='border p-2 bg-purple text-white text-center text-xl hover:bg-purple-900'>0</p>
        <p className='border p-2 bg-purple text-white text-center text-xl hover:bg-purple-900'>+</p>
        <p className='border p-2 bg-purple text-white text-center text-xl hover:bg-purple-900'>-</p>
        <p className='border p-2 bg-purple text-white text-center text-xl hover:bg-purple-900'>x</p>
        <p className='border p-2 bg-purple text-white text-center text-xl hover:bg-purple-900'>/</p>
      </div>
    </div>
  )
}

export default Calculator