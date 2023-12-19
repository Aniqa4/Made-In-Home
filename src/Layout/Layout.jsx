import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
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