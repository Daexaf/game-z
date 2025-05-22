import React, { useEffect, useState } from "react";
import GlobalApi from "../services/GlobalApi";

function GenreList() {
  const [genreList, setGenreList] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    getGenreList();
  }, []);

  const getGenreList = () => {
    GlobalApi.getGenreList
      .then((resp) => {
        setGenreList(resp.data.results);
      })
      .catch((error) => {
        console.error("Error Fetching data:", error);
      });
  };
  return (
    <>
      <h2 className="text-[30px] font-bold dark:text-white">Genres</h2>
      {genreList.map((item, index) => (
        <div
          onClick={() => {
            setActiveIndex(index);
          }}
          key={item.id}
          className={`flex gap-2 items-center mb-2 cursor-pointer hover:bg-gray-300 p-2 group rounded-lg hover:dark:bg-gray-600 ${
            activeIndex === index ? "bg-gray-300 dark:bg-gray-600" : ""
          }`}
        >
          <img
            src={item.image_background}
            className={`w-[40px] h-[40px] object-cover rounded-lg group-hover:scale-105 transition-all ease-out duration-300 ${
              activeIndex === index ? "bg-gray-300 dark:bg-gray-600" : ""
            }`}
            alt={item.name}
          />
          <h3 className="dark:text-white text-[18px] group-hover:font-bold transition-all ease-out duration-300">
            {item.name}
          </h3>
        </div>
      ))}
    </>
  );
}

export default GenreList;
