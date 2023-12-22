import React from 'react'
import ShowToDo from '../../../components/ShowToDo'

function SeeDoTo() {
    return (
        <div className='border px-10 py-5 w-[400px] min-h-screen'>
            <h1 className='text-center underline pb-5'>My to-do list</h1>
            <ShowToDo
                title={'Project shesh korbo'}
                date={'15-01-2024'}
                description={'Redux r tanstack Query shikhte hobe bruh.'}
            />
        </div>
    )
}

export default SeeDoTo