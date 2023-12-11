import React from 'react'
import ItemContainer from '../Components/ItemContainer'

function Main() {
    return (
        <div>
            <h1 className=' text-center text-black text-xl uppercase'>Select</h1>
            <div className='py-10 grid grid-cols-1 gap-5'>
                <ItemContainer name={'Calculator'} />
                <ItemContainer name={'Stop Watch'} />
                <ItemContainer name={'To Do List'} />
                <ItemContainer name={'Quick Note'} />
            </div>
        </div>
    )
}

export default Main