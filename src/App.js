import React from "react";
import { FaHeart } from 'react-icons/fa';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="">
      <div className="flex flex-col">
        <div className="flex">
          <div className="w-1/2 bg-green-600 py-48 h-full">
            <div className="flex flex-col items-center">
            <Link  to='/twitter' className="bg-white text-green-600 py-2 px-4 m-4 rounded-lg hover:bg-green-700 hover:text-white">
                Visit Movies Section
              </Link>
            </div>
          </div>
          <div className="w-1/2 bg-blue-600 py-48 h-full">
            <div className="flex flex-col items-center">
              <Link  to='/twitter' className="bg-white text-blue-600 py-2 px-4 m-4 rounded-lg hover:bg-blue-700 hover:text-white">
                Visit Twitter Section
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center text-purple-600 p-4">
          <p className="inline-flex">Designed with <FaHeart className="m-1" />  by <a href="https://twitter.com/bundayyo" rel="noopener noreferrer" target="_blank"> @bundayyo </a></p>
        </div>
      </div>
    </div>
  );
}

export default App;
