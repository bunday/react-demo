import React from "react";

const Trend = ({ trend }) => {
  return (
    <div className="text-blue-500 text-sm w-full md:w-1/3 lg:w-full">
      <a href={`${trend.url}`} rel="noopener noreferrer" target="_blank">
        {" "}
        {`${trend.name}`}
        <span className="text-gray-600"> {trend.tweet_volume} Tweets</span>
      </a>
    </div>
  );
};

export default Trend;
