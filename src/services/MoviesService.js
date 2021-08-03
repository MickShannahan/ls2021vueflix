import { AppState } from "../AppState"
import { Movie } from "../models/Movie"
import { movieApi } from "./AxiosService"



class MoviesService{
 
async getMovies(query = 'spiderman'){
  try {
    const res = await movieApi.get('&query='+ query)
    console.log(res.data)
    AppState.movies = res.data.results.map(movie => new Movie(movie))
  } catch (error) {
    console.error(error)
  }
}

setActiveMovie(movie){
  console.log('setting movie', movie)
  AppState.activeMovie = movie
}


}

export const moviesService = new MoviesService()