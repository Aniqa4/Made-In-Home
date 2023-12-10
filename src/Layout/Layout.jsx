import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <div className=' text-zinc-700'>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout