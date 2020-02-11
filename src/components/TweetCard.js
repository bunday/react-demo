import React from "react";
import { FaRetweet, FaReply, FaHeart, FaExternalLinkAlt } from "react-icons/fa";
import moment from 'moment';

const TweetCard = ({ tweet }) => {
    const formatSource = (source) => {
        return source.substring(
            source.indexOf("nofollow") + 10, 
            source.lastIndexOf("<")
        );
    }
  return (
    <div className="rounded w-full md:w-1/2 lg:w-1/3">
      <div className="shadow m-1">
        <div className="bg-blue-400 rounded-t text-sm py-2 px-3 text-white flex justify-between">
          <p>{`${moment(tweet.created_at).format('MMMM Do YYYY, h:mm:ss a')}`}</p>
          <a href={`https://twitter.com/${tweet.user.screen_name}/status/${tweet.id_str}`} rel="noopener noreferrer" target="_blank">
            <FaExternalLinkAlt />
          </a>
        </div>
        <p className="text-gray-800 text-sm py-2 px-3">
          {tweet.text}
        </p>
        <div className="py-1 px-3 flex border-t-2">
          <img
            src={tweet.user.profile_image_url}
            alt={tweet.user.name}
            className="w-12 h-12 mr-1 rounded-full object-contain"
          />
          <div>
            <p className="text-gray-600 text-sm">{tweet.user.name}</p>
            <a href={`https://twitter.com/${tweet.user.screen_name}`} rel="noopener noreferrer" target="_blank" className="text-blue-400">
            {`@${tweet.user.screen_name}`}
            </a>
          </div>
        </div>
        <div className="bg-blue-100 rounded-b text-sm py-1 px-3 text-gray-700 flex justify-between">
          <p>{formatSource(tweet.source)}</p>
          <div className="inline-flex text-teal-500">
            <FaReply className="mt-1 mr-1" /> {tweet.reply_count}
          </div>
          <div className="inline-flex text-purple-500">
            <FaRetweet className="mt-1 mr-1" /> {tweet.retweet_count}
          </div>
          <div className="inline-flex text-red-500">
            <FaHeart className="mt-1 mr-1" /> {tweet.favorite_count}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TweetCard;
