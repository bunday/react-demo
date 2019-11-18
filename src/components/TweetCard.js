import React from 'react'
import passport from '../img/passport.jpg'
import { FaRetweet, FaReply, FaHeart, FaExternalLinkAlt } from 'react-icons/fa';

const TweetCard = (props) => {
    return (
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
    )
}

export default TweetCard;