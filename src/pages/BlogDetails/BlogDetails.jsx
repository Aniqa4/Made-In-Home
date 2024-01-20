import React, { useState } from 'react'
import UserAvatar from '../../components/UserAvatar'

function BlogDetails() {
    const [defaultImage, setDefaultImage] = useState(false)
    
    return (
        <div className='container mx-auto py-10'>
            <div className='grid grid-cols-2 gap-10'>
                <div className=' text-xl'>
                    <p className=' text-3xl font-semibold'>Title of the Blog</p>
                    <div className='flex items-center gap-2 py-5'>
                        <img src=""
                            alt="User Image"
                            onError={() => setDefaultImage(true)}
                            className={defaultImage ? 'hidden' : 'rounded-full w-8 h-8'} />
                        {
                            defaultImage && <UserAvatar />
                        }
                        <p className='font-semibold cursor-pointer'>Name of the writer</p>
                    </div>
                    <p>Category: Name of the Category</p>
                    <p>Posted on: 20th January 2024</p>
                    <p>View: 1M</p>
                    <p>Likes: 1K</p>
                    <p className='border border-[#1c1b1b] text-center rounded py-1 mt-5'>Save</p>
                    <p className='border border-[#1c1b1b] text-center rounded py-1 mt-5'>Share</p>
                </div>
                <img src="https://www.lightstalking.com/wp-content/uploads/backlit-beach-color-258109-3-1024x576.jpg"
                    alt="cover photo"
                />
            </div>
            <div>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident corporis, accusantium commodi voluptatibus sed ut exercitationem, dolorem odit placeat tempore unde totam maxime harum, quod sint eum vel? Omnis, architecto!
            </div>
        </div>
    )
}

export default BlogDetails