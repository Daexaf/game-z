import React, { useEffect, useState } from "react";
import GenreList from "../components/GenreList";
import GlobalApi from "../services/GlobalApi";
import Banner from "../components/Banner";
import TrendingGames from "../components/TrendingGames";

const Home = () => {
  const [allGameList, setAllGameList] = useState();
  useEffect(() => {
    getAllGamesList();
  }, []);

  const getAllGamesList = () => {
    GlobalApi.getAllGames.then((resp) => {
      console.log(resp.data.results);
      setAllGameList(resp.data.results);
    });
  };
  return (
    <div className="grid grid-cols-4 px-8">
      <div className="hidden md:block">
        <GenreList />
      </div>
      <div className="col-span-4 md:col-span-3">
        {allGameList?.length > 0 ? (
          <div>
            <Banner gameBanner={allGameList[0]} />
            <TrendingGames gameList={allGameList} />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Home;
