import {FC} from "react";
import {getMoviesHandler} from "@/services/movieList.service";
import {getMoviesGenreHandler} from "@/services/moviesByGenre.service";
import {IMovie} from "@/models/movie/IMovie";
import {getFilmByTitleHandler} from "@/services/moviesByTitle.service";
import MovieListCardComponent from "@/components/movie-list-card/MovieListCardComponent";

type Props ={
 genre?: string,
    query?: string,
    page: string
}

const ListMovieComponent: FC<Props> = async({genre, query, page})=>{
let movies = [] as IMovie[]

    if(genre){
        movies = await getMoviesGenreHandler({genre, page})
    }else if(query){
        movies = await getFilmByTitleHandler({query, page})
    }else{
        movies = await getMoviesHandler(page)
    }

    return(
        <div>
            {movies.length > 0 && <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 py-6'>{movies.map((movie)=><MovieListCardComponent key={movie.id} movie={movie}/>)}</div>}
        </div>
    )
}
export default ListMovieComponent