import React from 'react'
import Title from '../../components/Title'

function Login() {
    return (
        <div className=' min-h-screen'>
            <Title title={'Login'} />
            <form action=""
                className='border w-1/2 mx-auto'>
                <input type="text"
                    className='border' />
            </form>
        </div>
    )
}

export default Login