import React from 'react'
import Title from '../../../components/Title'
import BlogCard from '../../../components/BlogCard'

function PopularBlogs() {
    return (
        <div>
            <Title title={'Popular Now'} />
            <div className='grid grid-cols-6 gap-2'>
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </div>
        </div>
    )
}

export default PopularBlogs