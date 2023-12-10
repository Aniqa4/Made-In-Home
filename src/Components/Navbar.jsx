import React from 'react'

function Navbar() {
    return (
        <div className='py-5 border-b'>
            <div className='container mx-auto'>
                <ul className='flex justify-between items-center'>
                    <li className='text-xl text-black'>Tools</li>
                    <li>Login/Register</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar