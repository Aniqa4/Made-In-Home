import React from 'react'
import '../Styles/Styles.css'

function ItemContainer({ name }) {
    return (
        <div className=' bg-purple rounded'>
            <p className='text-center text-white text-xl py-5 hover:bg-purple-950 hover:rounded'>{name}</p>
        </div>
    )
}

export default ItemContainer