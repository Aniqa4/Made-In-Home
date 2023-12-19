import React from 'react'
import '../Styles/Styles.css'
import { Link } from 'react-router-dom'

function ItemContainer({ name, link }) {
    return (
        <Link to={link}>
            <div className=' bg-purple rounded'>
                <p className='text-center text-white text-xl py-5 hover:bg-purple-950 hover:rounded'>{name}</p>
            </div>
        </Link>
    )
}

export default ItemContainer