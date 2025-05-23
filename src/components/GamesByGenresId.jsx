import React, { useEffect } from "react";
import { IoStarSharp } from "react-icons/io5";
import { FaFire } from "react-icons/fa";
import { GoCommentDiscussion } from "react-icons/go";

function GamesByGenresId({ gameList, selectedGenresName }) {
  useEffect(() => {}, []);
  return (
    <div className="">
      <h2 className="font-bold text-[30px] dark:text-white mt-5 gap-6">
        {selectedGenresName} Games
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
        {gameList.map((item, index) => (
          <div
            key={item.id || index}
            className="bg-[#76a8f75e] p-3 rounded-lg pb-12 h-full hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer"
          >
            <img
              src={item.background_image}
              className="w-full h-[80%] rounded-xl object-cover"
              alt=""
            />
            <h2 className="text-[20px] dark:text-white font-bold ">
              {item.name}
              <span className="p-1 rounded-sm ml-2 text-[10px] bg-green-100 text-green-700 font-medium">
                {item.metacritic}
              </span>
            </h2>
            <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-300 mt-2">
              <span className="flex items-center gap-1 text-[15px]">
                <IoStarSharp className="text-yellow-400" />
                {item.rating}
              </span>
              <span className="flex items-center gap-1 text-[15px]">
                <GoCommentDiscussion className="text-blue-400" />
                {item.reviews_count || 0}
              </span>
              <span className="flex items-center gap-1 text-[15px]">
                <FaFire className="text-red-500" />
                {item.suggestions_count}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GamesByGenresId;
