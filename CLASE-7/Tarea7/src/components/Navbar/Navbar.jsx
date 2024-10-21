import React from 'react'

import { NavLink } from 'react-router-dom'


const Navbar = () => {
    return (
        <div>
            <ul>
                <li>
                    <NavLink to='/' className={({ isActive }) => (isActive ? 'error' : '')}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/about' className={({ isActive }) => (isActive ? 'error' : '')}>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/CharacterPage' className={({ isActive }) => (isActive ? 'error' : '')}>
                    CharacterPage
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/EpisodesPage' className={({ isActive }) => (isActive ? 'error' : '')}>
                    EpisodesPage
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navbar