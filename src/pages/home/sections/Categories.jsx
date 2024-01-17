import React from 'react'
import Title from '../../../components/Title'
import { Link, Outlet } from 'react-router-dom'

function Categories() {
    return (
        <div>
            <Title title={'Explore Blogs By Category'} />
            <div className='flex pb-5 gap-5'>
                <Link to={'/'}>
                    <p className='border px-5 py-1 rounded border-black'>All</p>
                </Link>
                <Link to={'/cooking'}>
                    <p className='border px-5 py-1 rounded border-black'>Cooking</p>
                </Link>
                <Link to={'/painting'}>
                    <p className='border px-5 py-1 rounded border-black'>Painting</p>
                </Link>
                <Link to={'/gardening'}>
                    <p className='border px-5 py-1 rounded border-black'>Gardening</p>
                </Link>
                <Link to={'/crafting'}>
                    <p className='border px-5 py-1 rounded border-black'>Crafting</p>
                </Link>
                <Link to={'/sewing'}>
                    <p className='border px-5 py-1 rounded border-black'>Sewing</p>
                </Link>


            </div>
            <Outlet />
        </div>
    )
}

export default Categories