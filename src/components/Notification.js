import React from 'react'
import { FaInfoCircle } from 'react-icons/fa';

const Notification = (props) => {
    const style = 'inline-flex w-full rounded p-2 mt-4 text-white '
    return (
        <div className={`${style}${props.style}`}>
            <FaInfoCircle className="mt-1 mr-2"/> {props.content}
        </div>
    )
}

export default Notification;