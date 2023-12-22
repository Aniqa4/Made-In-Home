import React from 'react'
import { MdEditNote } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

function ShowToDo({ title, date, description }) {
    return (
        <div className='bg-gray-100 p-5 text-sm'>
            <div className='grid grid-cols-1 gap-2'>
                <h1 className=' font-semibold text-center text-base'>Title: {title}</h1>
                <p>Deadline: <span className=' text-red-700 font-semibold'>{date}</span></p>
                <p>Description: {description}</p>
                <p className='flex items-center gap-3'>
                    <span className='text-xl text-green-700'><MdEditNote /></span>
                    <span className='text-red-700'><RiDeleteBin6Line /></span>
                </p>
            </div>
        </div>
    )
}

export default ShowToDo