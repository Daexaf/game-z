import axios from "axios";

const key = "11c7297efc8d41df81aea832792d5f93";

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api/",
});

const getGenreList = axiosInstance.get("/genres?key=" + key);

const getAllGames = axiosInstance.get("/games?key=" + key);

const getGameListByGenreId = (id) =>
  axiosInstance.get(`/games?key=${key}&genres=${id}`);

const getGameDetail = (id) => axiosInstance.get(`/games/${id}?key=${key}`);

export default {
  getGenreList,
  getAllGames,
  getGameListByGenreId,
  getGameDetail,
};
