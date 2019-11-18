import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = (props) => {
    return (
        <header className="bg-blue-500 px-12 py-4 text-white flex justify-between">
           <div className="">
               { props.title}

           </div>
           <div>
               <NavLink activeClassName="active" to='/twitter'> Twitter </NavLink>
               <NavLink activeClassName="active" to='/movies' className="ml-3"> Movies </NavLink>
           </div>
        </header>
    )
}

export default Header;