import React from 'react'
import BlogCard from '../../../../components/BlogCard'

function Cooking() {
    return (
        <div>
            <div className='grid grid-cols-6 gap-5'>
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </div>
        </div>
    )
}

export default Cooking