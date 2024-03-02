import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import UserAvatar from './UserAvatar';
import { TiEye } from "react-icons/ti";
import { BsDot } from "react-icons/bs";

function BlogCard() {
    const [show, setShow] = useState(false)
    const [defaultImage, setDefaultImage] = useState(false)

    return (
        <Link to='/blog'>
            <div className=''>
                <div className='relative'
                    onMouseMove={() => setShow(true)}
                    onMouseLeave={() => setShow(false)}>
                    <img src="https://www.shutterstock.com/image-photo/bloggingblog-concepts-ideas-white-worktable-600nw-1029506242.jpg"
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
                        <div className='flex items-center gap-3 text-xs'>
                            <p className='flex gap-1 items-center'><TiEye /> 1M</p>
                            <BsDot />
                            <p className='flex gap-1 items-center'><MdFavorite /> 1K</p>
                        </div>
                    </p>
                </div>
                <div className='grid grid-cols-1 gap-5 py-3'>
                    <h1 className='text-xl grid font-ProtestStrike'>How to cook chicken momos and sauce at home!
                        <span className='text-xs'>20th January 2024</span>
                    </h1>
                    <Link to={'/user'}>
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
                    </Link>
                    <p className=' font-semibold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Exercitationem animi sequi reiciendis rem incidunt facere, officiis quis aperiam illo,
                        doloribus blanditiis voluptas ad pariatur.
                        Aliquam nemo enim voluptates dignissimos atque.</p>
                </div>
            </div>
        </Link>
    )
}

export default BlogCard