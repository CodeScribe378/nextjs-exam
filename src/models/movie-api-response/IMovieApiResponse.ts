import {IMovie} from "@/models/movie/IMovie";
import {IMovieList} from "@/models/movie-list/IMovieList";

export interface IMovieApiResponse{
    moviesListPage: number
   movies: IMovie[]
 moviesByGenres: IMovie[]
  moviesGenrePage: number
 listMovieTypeGenre: IMovieList[]
filmByTitle: IMovie[]
 maxPageTitle: number
}