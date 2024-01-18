import React from 'react'
import { NavLink } from 'react-router-dom'

function ActiveRoute({ to, children }) {
    return (
        <NavLink to={to}
            className={({ isActive }) => isActive ?
                'border px-5 py-1 rounded bg-black border-black text-white'
                : 'border px-5 py-1 rounded border-black'}>
            {children}
        </NavLink>
    )
}

export default ActiveRoute