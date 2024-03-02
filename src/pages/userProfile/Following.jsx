import React, { useState } from 'react'
import './modalStyle.css'
import { IoMdClose } from "react-icons/io";

function Following() {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <button onClick={() => setOpen(true)}>100 Following</button>
            {
                open &&
                <div onClick={() => setOpen(false)} className='modal fixed inset-0 flex justify-center items-center z-10 overflow-hidden'>
                    <div onClick={() => setOpen(true)} className=' bg-white p-10 rounded relative'>
                        <p>Aniqa</p>
                        <p>Aniqa</p>
                        <p>Aniqa</p>
                        <p>Aniqa</p>
                        <p onClick={() => setOpen(false)}
                            className=' absolute -top-3 -right-3 bg-red-800 
                            w-7 h-7 rounded-full flex items-center justify-center text-white'><IoMdClose /></p>
                    </div>
                </div>
            }
        </div>
    )
}

export default Following