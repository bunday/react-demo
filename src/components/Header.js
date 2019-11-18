import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {
    return (
        <header className="bg-blue-500 px-12 py-4 text-white flex justify-between">
           <div className="">
               { props.title}

           </div>
           <div>
               <Link to='/twitter'> Twitter </Link>
               <Link to='/movies' className="ml-3"> Movies </Link>
           </div>
        </header>
    )
}

export default Header;