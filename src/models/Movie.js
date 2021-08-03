



export class Movie {

constructor(data){
  this.id = data.id
  this.title = data.title
  this.overview = data.overview
  this.poster = 'https://image.tmdb.org/t/p/w500'+ data.poster_path
  this.poster2 = 'https://image.tmdb.org/t/p/w500'+ data.backdrop_path
  this.score = data.vote_average
}


}