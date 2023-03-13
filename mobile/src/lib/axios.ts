import axios from "axios";

export const MoviesApi = axios.create({
  baseURL: "https://www.omdbapi.com/",

});

export const LoginApi = axios.create({
  baseURL: "https://f219-45-167-155-105.ngrok.io/auth/",
});