import React from 'react'
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { Link } from 'react-router-dom';

function PageTitle({ title }) {
    return (
        <div className='grid grid-cols-3 items-center font-semibold'>
            <p className='text-xl'><Link to={'/'}><MdOutlineKeyboardBackspace /></Link></p>
            <h1 className='text-center'>{title}</h1>
        </div>
    )
}

export default PageTitle