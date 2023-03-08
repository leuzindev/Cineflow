import axios from "axios";

export const MoviesApi = axios.create({
  baseURL: "https://www.omdbapi.com/",

});

export const LoginApi = axios.create({
  baseURL: "https://127.0.0.1:8000/auth/"
});