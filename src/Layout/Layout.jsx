import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <div>
            <Navbar />
            <div className='container mx-auto pt-10 pb-20 text-[#1c1b1b]'>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Layout