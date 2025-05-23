import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import { useParams } from "react-router-dom";
import GlobalApi from "../services/GlobalApi";
import GamePlatform from "../components/GamePlatform";

const DetailGame = () => {
  const { id } = useParams();
  const [game, setGame] = useState(null);

  useEffect(() => {
    GlobalApi.getGameDetail(id).then((resp) => {
      setGame(resp.data);
    });
  }, [id]);
  return (
    <div className="p-6 text-white">
      {game ? (
        <div className="grid grid-col-1 md:grid-cols3 gap-6">
          <h1 className="text-3xl font-bold mb-4">{game.name}</h1>
          <img
            src={game.background_image}
            className="md:h-100 w-full object-cover object-top rounded-lg"
            alt={game.name}
          />

          <div className="col-span-1">
            <h2 className="text-xl font-semibold mb-2">Description</h2>
            <p className="text-gray-300 text-sm text-justify">
              {game.description_raw}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Details</h2>
            <p>
              <strong>Released:</strong> {game.released}
            </p>
            <p>
              <strong>Rating:</strong> {game.rating} / {game.rating_top}
            </p>
            <p>
              <strong>Genres:</strong>{" "}
              {game.genres.map((g) => g.name).join(", ")}
            </p>
            <GamePlatform platforms={game.platforms} />
            {/* <p>
              <strong>Platforms:</strong>{" "}
              {game.platforms.map((p) => p.platform.name).join(", ")}
            </p> */}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DetailGame;
