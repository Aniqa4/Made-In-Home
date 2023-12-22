import React from 'react'
import ItemContainer from '../../../components/ItemContainer'

function Main() {
    return (
        <div className='pt-10'>
            <h1 className=' text-center text-black text-xl uppercase'>Select</h1>
            <div className='py-10 grid grid-cols-4 gap-5'>
                <ItemContainer name={'Calculator'} link={'/calculator'}/>
                <ItemContainer name={'To Do List'} link={'/to-do'}/>
                <ItemContainer name={'Stop Watch'} />
                <ItemContainer name={'Quick Note'} />
            </div>
        </div>
    )
}

export default Main