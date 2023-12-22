import React from 'react'
import PageTitle from '../../components/PageTitle'
import WriteToDo from './sections/WriteToDo'
import SeeDoTo from './sections/SeeDoTo'

function ToDo() {
    return (
        <div>
            <PageTitle title={'To Do'} />
            <div className='pt-10 flex justify-between'>
                <WriteToDo />
                <SeeDoTo />
            </div>
        </div>
    )
}

export default ToDo