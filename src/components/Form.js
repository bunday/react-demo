import React from 'react'

const Form = (props) => {
    return (
        <div className="shadow-md w-full py-4 px-2 flex flex-wrap">
            <div className="w-full md:w-1/2 lg:w-1/4 p-2">
                <label className="block text-gray-800 font-bold text-sm mb-2">
                    Username
                        </label>
                <input placeholder="@bundayyo" type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" value={props.data.username} name="username" onChange={props.handleChange} />
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 p-2">
                <label className="block text-gray-800 font-bold text-sm mb-2">
                    From
                        </label>
                <input placeholder="01-01-2018" type="date" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" value={props.data.startDate} name="startDate" onChange={props.handleChange} />
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 p-2">
                <label className="block text-gray-800 font-bold text-sm mb-2">
                    To
                        </label>
                <input placeholder="01-01-2019" type="date" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" value={props.data.endDate} name="endDate" onChange={props.handleChange} />
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 p-2 flex justify-center">
                <button className="bg-blue-500 px-4 py-2 rounded text-white mt-8">
                    Fetch Tweets 🎉
                        </button>
            </div>

        </div>
    )
}

export default Form;