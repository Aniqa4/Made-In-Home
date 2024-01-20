import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import UserAvatar from './UserAvatar';

function BlogCard() {
    const [show, setShow] = useState(false)
    const [defaultImage, setDefaultImage] = useState(false)

    return (
        <Link to='/blog'>
            <div className=''>
                <div className='relative'
                    onMouseMove={() => setShow(true)}
                    onMouseLeave={() => setShow(false)}>
                    <img src="https://www.lightstalking.com/wp-content/uploads/backlit-beach-color-258109-3-1024x576.jpg"
                        alt="blogTitle"
                        className={show ? 'opacity-70 rounded-xl' : ' rounded-xl'} />
                    {
                        show &&
                        <div className='absolute top-[40%] right-[40%]'>
                            <p className=' text-xl font-semibold'>Read</p>
                        </div>
                    }
                    <p className='absolute left-0 bottom-0 right-0 bg-black rounded-b-xl bg-opacity-20 text-white
                    flex justify-end items-baseline p-2'>
                        <span className='hidden'><MdFavorite /></span>
                        <span className=' hover:text-black'><MdFavoriteBorder /></span>
                    </p>
                </div>
                <div className='grid grid-cols-1 gap-1 py-3'>
                    <h1 className='font-semibold text-xl'>Blog Title</h1>
                    <div className='flex items-center gap-2'>
                        <img src=""
                            alt="User Image"
                            onError={() => setDefaultImage(true)}
                            className={defaultImage ? 'hidden' : 'rounded-full w-10 h-10'} />
                        {
                            defaultImage && <UserAvatar />
                        }
                        <p className='font-semibold cursor-pointer'>Name of the writer</p>
                    </div>
                    <p>Posted on: 20th January 2024</p>
                </div>
            </div>
        </Link>
    )
}

export default BlogCard