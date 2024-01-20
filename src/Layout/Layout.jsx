import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <div>
            <div className=' fixed left-0 right-0 top-0 bg-white z-20'>
                <Navbar />
            </div>
            <div className='py-16 text-[#1c1b1b]'>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Layout