import axios from "axios";

export const MoviesApi = axios.create({
  baseURL: "https://www.omdbapi.com/",
});
