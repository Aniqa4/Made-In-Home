import React from 'react'
import { useState } from 'react'

function BlogCard() {
    const [show, setShow] = useState(false)
    return (
        <div className=''>
            <div className='relative'
                onMouseMove={() => setShow(true)}
                onMouseLeave={() => setShow(false)}>
                <img src="https://assets.bonappetit.com/photos/5e7a6c79edf206000862e452/1:1/w_1519,h_1519,c_limit/Cooking-Home-Collection.jpg"
                    alt="blogTitle"
                    className={show ? 'opacity-70 rounded-xl' : ' rounded-xl'} />
                {
                    show &&
                    <div className='absolute top-[40%] right-[40%]'>
                        <p className=' text-xl font-semibold'>Read</p>
                    </div>
                }
            </div>
            <div className='grid grid-cols-1 gap-2 pt-5'>
                <h1 className='font-semibold'>Blog Title</h1>
                <p>Posted By : User Name</p>
                <p>Category : Cooking</p>
                <p className='bg-[#1c1b1b] text-white text-center rounded py-1'>Read</p>
                <p className='bg-[#1c1b1b] text-white text-center rounded py-1'>Save</p>
            </div>
        </div>
    )
}

export default BlogCard