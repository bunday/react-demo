import React, { Component } from "react";
import Form from "./Form";
import TweetCard from "./TweetCard";
import Trend from "./Trend";
import Header from "./Header";
import Notification from "./Notification";
import { connect } from "react-redux";
import { fetchTweets, notifyPortals, fetchTrends } from "../actions";
import moment from "moment";

class TwitterHistory extends Component {
  state = {
    username: "",
    startDate: "",
    endDate: ""
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmission = event => {
    event.preventDefault();
    if (this.state.username.length < 3) {
      this.props.notifyPortals(
        "Enter a Username with 3 or more characters",
        "bg-red-500"
      );
      return;
    }
    let from = moment(this.state.startDate);
    let to = moment(this.state.endDate);
    if (!from.isValid()) {
      this.props.notifyPortals("Enter a valid Start Date", "bg-red-500");
      return;
    }
    if (!to.isValid()) {
      this.props.notifyPortals("Enter a valid End Date", "bg-red-500");
      return;
    }
    if (to.isBefore(from)) {
      this.props.notifyPortals(
        "Start Date must be less than End Date",
        "bg-red-500"
      );
      return;
    }
    this.props.fetchTweets(this.state);
  };

  renderListOfTweets() {
    const { tweets } = this.props;
    if (!tweets.results) return;
    const tweetCards = tweets.results.map(tweet => (
      <TweetCard key={tweet.id} tweet={tweet} />
    ));
    return tweetCards;
  }
  componentDidMount() {
    this.props.fetchTrends();
  }
  renderListOfTrends(){
    const { trends } = this.props;
    if (trends.length < 1) return;
    return trends[0].trends.map(trend => <Trend key={trend.name} trend={trend} />)
  }

  render() {
    return (
      <div>
        <Header title="Twitter Today in History" />
        <main className="px-12 py-5 ">
          <div className="py-4">
            <h2 className="text-blue-500 text-2xl">
              Fetch Twitter History on Specific Dates
            </h2>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full lg:w-3/4">
              <Form
                data={this.state}
                handleChange={this.handleChange}
                handleSubmission={this.handleSubmission}
              />
              {this.props.notify ? (
                <Notification
                  content={this.props.notify.message}
                  style={this.props.notify.style}
                />
              ) : null}
              <div className="flex flex-wrap w-full mt-4">
                {this.renderListOfTweets()}
              </div>
            </div>
            <div className="w-full lg:w-1/4">
              <div className="shadow-lg md:mt-4 sm:mt-4 lg:ml-4 py-4 px-2">
                <p className="text-blue-500 text-lg">Latest Trends</p>
                <p className="text-gray-400 text-sm">
                  Checkout What is Trending
                </p>

                <div className="flex flex-wrap pt-4">
                  { this.renderListOfTrends() }
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { tweets: state.tweets, notify: state.notify, trends: state.trends };
};
export default connect(mapStateToProps, {
  fetchTweets,
  notifyPortals,
  fetchTrends
})(TwitterHistory);
