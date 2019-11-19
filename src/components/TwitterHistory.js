import React, { Component } from 'react'
import Form from './Form';
import TweetCard from './TweetCard';
import Trend from './Trend';
import Header from './Header';

class TwitterHistory extends Component {

    state = {
        username: '',
        startDate: '',
        endDate: ''
    }
    header = {
        method: 'post',
        headers: new Headers({
            'Authorization':'Bearer AAAAAAAAAAAAAAAAAAAAABWwAwEAAAAAwpR5bj91XGI6HnNczREqg4isd5M%3DEZON7bu5E3dsGhDowTuta7itBPCwS2gpe0r5hHpZyiLJTluu6t',
            'Content-Type':'application/json;charset=utf-8'
        }),
        body: this.data
    }
    data = {
        "query":"from:bundayyo lang:en",
        "maxResults": "100",
        "fromDate":"201909010000", 
        "toDate":"201911152359"
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }

    handleSubmission = (event) => {
        event.preventDefault();
        console.log(this.state)
    }
    componentDidMount() {
        // let grant = new FormData()
        // grant.append('grant_type', 'client_credentials');
        // const oAuthHeader = {
        //     method: 'post',
        //     headers: new Headers({
        //         'Authorization':'Basic WEpzbTRWM3Z1WVE1OWlZczBVUWlEMExKODpUbkpoSzZsbXRlaVB6YUl5d3F0N3dXcXBSUTZZaE84cExyVGdSaFZVYlRYZ2hxM1ZkRw==',
        //         'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'
        //     }),
        //     body: grant
        // }
        // const proxyurl = "https://cors-anywhere.herokuapp.com/";
        // const url = 'https://api.twitter.com/oauth2/token'
        // fetch(
        //     proxyurl + url, 
        //     oAuthHeader)
        //     .then(jsonResponse => jsonResponse.json())
        //     .then(response=> console.log(response));
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = 'https://api.twitter.com/1.1/tweets/search/fullarchive/Dev.json'
        fetch(
            proxyurl + url, 
            this.header)
            .then(jsonResponse => jsonResponse.json())
            .then(response=> console.log(response));
    }



    render() {
        return (
            <div>
                <Header title='Twitter Today in History'/>
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
            </div>
        )
    }
}

export default TwitterHistory;