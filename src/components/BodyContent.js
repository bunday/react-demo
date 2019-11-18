import React, {Component} from 'react'

class BodyContent extends Component {

    render () {
        return (
            <main className="px-24 py-5">
                <div className="py-4">
                    <h2 className="text-blue-500 text-2xl">Fetch Twitter History on Specific Dates</h2>
                </div>
                <div className="shadow-md py-4 px-2 flex">
                    <div className="w-1/4">
                    <label className="block text-gray-800 font-bold text-sm mb-2">
                        Username
                    </label>
                    <input placeholder="@bundayyo" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"/>
                    </div>

                </div>
            </main>
        )
    }
}

export default BodyContent;