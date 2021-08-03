import axios from "axios";

export const movieApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3/search/movie?api_key=545c6ef058e65396849dfbbf381cbca3&&include_adult=false',
  timeout: 5000
})