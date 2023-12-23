import React from 'react'
import { Link } from 'react-router-dom'
import { FcTodoList } from "react-icons/fc";

function Navbar() {
    return (
        <div className='py-5 border-b'>
            <div className='container mx-auto'>
                <ul className='flex justify-between items-center'>
                    <li className='text-xl text-black'>
                        <Link to='/'>Tools</Link>
                    </li>
                    <ul className='flex gap-10 items-center'>
                        <li className='text-xl relative flex'>
                            <FcTodoList />
                            <span className=' absolute -top-3 -right-2 text-sm'>0</span>
                        </li>
                        <li><Link to='/login'>Login/Register</Link></li>
                    </ul>
                </ul>
            </div>
        </div>
    )
}

export default Navbar