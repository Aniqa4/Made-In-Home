import React from 'react'
import Title from '../../components/Title'

function Login() {
    return (
        <div className=' min-h-screen'>
            <Title title={'Login'} />
            <form action=""
                className=' w-1/2 mx-auto grid grid-cols-1 gap-5'>
                <input type="text"
                    placeholder='Enter Email'
                    className='border-b py-2 outline-none' />
                <input type="text"
                    placeholder='Enter Password'
                    className='border-b py-2 outline-none' />
                <input type="submit"
                    className='bg-slate-700 text-white py-3' />
            </form>
            <hr className='my-20' />
            <div>
                <p className='text-center'>Already have an account?
                    <span className='underline'> Register</span>
                </p>
            </div>
        </div>
    )
}

export default Login