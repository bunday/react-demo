import React, { Component } from 'react'
import passport from '../img/passport.jpg'

class BodyContent extends Component {

    state = {
        username: '',
        startDate: '',
        endDate: ''
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }

    render() {
        return (
            <main className="px-12 py-5">
                <div className="py-4">
                    <h2 className="text-blue-500 text-2xl">Fetch Twitter History on Specific Dates</h2>
                </div>
                <div className="shadow-md py-4 px-2 flex">
                    <div className="w-1/4 px-2">
                        <label className="block text-gray-800 font-bold text-sm mb-2">
                            Username
                        </label>
                        <input placeholder="@bundayyo" type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" value={this.state.username} name="username" onChange={this.handleChange} />
                    </div>
                    <div className="w-1/4 px-2">
                        <label className="block text-gray-800 font-bold text-sm mb-2">
                            From
                        </label>
                        <input placeholder="01-01-2018" type="date" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" value={this.state.startDate} name="startDate" onChange={this.handleChange} />
                    </div>
                    <div className="w-1/4 px-2">
                        <label className="block text-gray-800 font-bold text-sm mb-2">
                            To
                        </label>
                        <input placeholder="01-01-2019" type="date" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" value={this.state.endDate} name="endDate" onChange={this.handleChange} />
                    </div>
                    <div className="w-1/4 px-2">
                        <button className="bg-blue-500 px-4 py-2 rounded text-white mt-8">
                            Fetch
                        </button>
                    </div>

                </div>
                <div className="flex mt-4">
                    {/* Username: usernamee */}

                    {/* <div>
                        <meta name="twitter:card" content="summary" />
                        <meta name="twitter:site" content="@flickr" />
                        <meta name="twitter:title" content="Small Island Developing States Photo Submission" />
                        <meta name="twitter:description" content="View the album on Flickr." />
                        <meta name="twitter:image" content="https://farm6.staticflickr.com/5510/14338202952_93595258ff_z.jpg" />
                    </div> */}
                    <div className="shadow-md rounded w-1/3">
                        <div>
                            <p className="bg-blue-400 rounded-t text-sm py-2 px-3 text-white">2018-04-16 07:56 AM</p>
                            <p className="text-gray-700 py-2 px-3">Content goes here sdfghfd sdfghrew dertgtre dfg fdsdrftgh trert </p>
                            <div className="py-2 px-3 flex">
                                <img src={passport} className="w-12 h-12 mr-1 rounded-full object-contain" />
                                <div>
                                    <p className="text-gray-600 text-sm">
                                        Bundayy Olayinka
                            </p>
                                    <a href="#" className="text-blue-400"> @bundayyo </a>
                                </div>
                            </div>
                            <p className="bg-blue-100 rounded-b text-center text-sm py-1 px-3 text-gray-700">Twitter For iPhone</p>

                        </div>
                    </div>

                </div>
            </main>
        )
    }
}

export default BodyContent;