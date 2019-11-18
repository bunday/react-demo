import React from 'react'
import notFound from '../img/404.svg'
import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'

const Notfound = () => {
    return (
        <main className="bg-gray-500 h-screen">
            <div className="flex flex-wrap pt-64 px-5">
            <div className="sm:w-2/3 w-full">
                <img src={notFound} />

            </div>
            <div className="sm:w-1/3 sm:p-0 w-full text-center">
                <p className="text-white text-white py-4">We cant figure out where you want to go 🥴</p>
                <Link to='/twitter' className="text-white bg-gray-600 font-bold rounded px-3 py-2">
                   Take me to a safe haven 😌</Link>
            </div>
            </div>
        </main>
    )
}
export default Notfound