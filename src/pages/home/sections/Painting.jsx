import React from 'react'
import BlogCard from '../../../components/BlogCard'

function Painting() {
    return (
        <div>
            <div className='grid grid-cols-4 gap-5'>
                <BlogCard/>
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </div>
        </div>
    )
}

export default Painting