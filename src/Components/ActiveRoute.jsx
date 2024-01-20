import React from 'react'
import { NavLink } from 'react-router-dom'

function ActiveRoute({ to, children }) {
    return (
        <NavLink to={to}
            className={({ isActive }) => isActive ?
                'border px-5 py-1 rounded bg-[#1c1b1b] border-[#1c1b1b] text-white'
                : 'border px-5 py-1 rounded border-[#1c1b1b]'}>
            {children}
        </NavLink>
    )
}

export default ActiveRoute