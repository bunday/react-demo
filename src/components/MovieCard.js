import React from 'react'
import { FaHeart, FaCalendar, FaThumbsUp } from 'react-icons/fa';

const MovieCard = (props) => {
    console.log(props)
    const API_IMAGE_URL = 'https://image.tmdb.org/t/p/w500'
    return (
        <div className="w-1/2">
            <div className=" p-2">
            <img className="rounded-t" src={`${API_IMAGE_URL}${props.movie.poster_path}`} />
            <div className="bg-gray-800 rounded-b text-center">
                <p className="text-white text-2xl py-1">{`${props.movie.title}`}</p>
                <p className="text-white text-md my-2"> {`${props.movie.overview}`}</p>
                <div className="flex bg-gray-900 rounded-b justify-between p-2">
                    <span className="text-purple-300 inline-flex">
                        <FaCalendar className="mt-1 mr-1" /> {`${props.movie.release_date}`}
                    </span>
                    <span className="text-pink-300 inline-flex">
                        <FaHeart className="mt-1 mr-1" /> {`${props.movie.vote_count}`}
                    </span>
                    <span className="text-purple-300 inline-flex">
                        <FaThumbsUp className="mt-1 mr-1" /> {`${props.movie.vote_average}`}%
                                        </span>

                </div>
            </div>
            </div>

        </div>
    )
}

export default MovieCard;