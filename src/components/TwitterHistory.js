import React, { Component } from 'react'
import Form from './Form';
import TweetCard from './TweetCard';
import Trend from './Trend';

class TwitterHistory extends Component {

    state = {
        username: '',
        startDate: '',
        endDate: ''
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }

    handleSubmission = (event) => {
        event.preventDefault();
        console.log(this.state)
    }



    render() {
        return (
            <main className="px-12 py-5 ">
                <div className="py-4">
                    <h2 className="text-blue-500 text-2xl">Fetch Twitter History on Specific Dates</h2>
                </div>
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-3/4">
                        <Form data={this.state} handleChange={this.handleChange} handleSubmission={this.handleSubmission} />
                        <div className="flex flex-wrap w-full mt-4">
                            <TweetCard />
                        </div>
                    </div>
                    <div className="w-full lg:w-1/4">
                        <div className="shadow-lg md:mt-4 sm:mt-4 lg:ml-4 py-4 px-2">
                            <p className="text-blue-500 text-lg">Latest Trends</p>
                            <p className="text-gray-400 text-sm">Checkout What is Trending</p>

                            <div className="flex flex-wrap pt-4">
                                <Trend />
                            </div>
                        </div>

                    </div>
                </div>

            </main>
        )
    }
}

export default TwitterHistory;