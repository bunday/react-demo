import React, { Component } from 'react'
import passport from '../img/passport.jpg'
import { FaRetweet, FaReply, FaHeart, FaOpenid, FaExternalLinkAlt } from 'react-icons/fa';
import Form from './Form';

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
            <main className="px-12 py-5 ">
                <div className="py-4">
                    <h2 className="text-blue-500 text-2xl">Fetch Twitter History on Specific Dates</h2>
                </div>
               <div className="flex flex-wrap">
               <div className="w-full lg:w-3/4">
                <Form data={this.state} handleChange={this.handleChange}/>
                <div className="flex flex-wrap w-full mt-4">
                    <div className="shadow-md rounded w-full md:w-1/2 lg:w-1/3">
                        <div>
                            <div className="bg-blue-400 rounded-t text-sm py-2 px-3 text-white flex justify-between">
                                <p>2018-04-16 07:56 AM</p>
                                <a href="#">
                                <FaExternalLinkAlt/>
                                </a>
                            </div>
                            <p className="text-gray-800 text-sm py-2 px-3">
                                Content goes here sdfghfd sdfghrew dertgtre dfg fdsdrftgh trert
                                Content goes here sdfghfd sdfghrew dertgtre dfg fdsdrftgh trert
                                 </p>
                            <div className="py-1 px-3 flex border-t-2">
                                <img src={passport} className="w-12 h-12 mr-1 rounded-full object-contain" />
                                <div>
                                    <p className="text-gray-600 text-sm">
                                        Bundayy Olayinka
                                    </p>
                                    <a href="#" className="text-blue-400"> @bundayyo </a>
                                </div>
                            </div>
                            <div className="bg-blue-100 rounded-b text-sm py-1 px-3 text-gray-700 flex justify-between">
                                <p>Twitter For iPhone</p>
                                <div className="inline-flex text-teal-500">
                                    <FaReply className="mt-1 mr-1" /> 16
                                </div>
                                <div className="inline-flex text-purple-500">
                                    <FaRetweet className="mt-1 mr-1" /> 4
                                </div>
                                <div className="inline-flex text-red-500">
                                    <FaHeart className="mt-1 mr-1" /> 4k
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div className="w-full lg:w-1/4">
                    <div className="shadow-lg md:mt-4 sm:mt-4 lg:ml-4 py-4 px-2">
                        <p className="text-blue-500 text-lg">Latest Trends</p>
                        <p className="text-gray-400 text-sm">Checkout What is Trending</p>

                        <div className="flex flex-wrap pt-4">
                        <div className="text-blue-500 text-sm w-full md:w-1/3 lg:w-full">
                            <a href="#"> #WelcomeToNigeria <span className="text-gray-600"> 500k Tweets</span> </a>
                        </div>
                        </div>
                    </div>
                   
                </div>
               </div>
                
            </main>
        )
    }
}

export default BodyContent;