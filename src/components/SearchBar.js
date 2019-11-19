import React from 'react'

const SearchBar = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className="flex flex-wrap">
        <div className="w-3/4">
            <input name="search" value={props.state.search} onChange={props.handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" placeholder="search..." />
        </div>
        <div className="w-1/4 flex justify-center ">
        <button className="bg-blue-500 px-4 py-2 rounded">Go 💥 </button>
        </div>
        </form>
    )
}
export default SearchBar;