import {getMovies, getMoviesPage} from "@/services/movieList.service";
import {getListMovieTypeGenre, getMoviesGenre, getMoviesPagesGenre} from "@/services/moviesByGenre.service";
import {getFilmByTitle, getMaxPageTitle} from "@/services/moviesByTitle.service";
import {IMovie} from "@/models/movie/IMovie";


export const GET = async(request: Request)=>{
    const {searchParams} = new URL(request.url)
    const page = searchParams.get('page') || '1'
    const genre = searchParams.get('genre')||''
    const query = searchParams.get('query') || ''

   let moviesByGenres: IMovie[]  = []
    let moviesGenrePage: number = 0
    let filmByTitle: IMovie[] =[]
    let maxPageTitle: number = 0
    let movies: IMovie[] =  []
    let moviesListPage = 0

    const listMovieTypeGenre = await getListMovieTypeGenre()
    if (!genre && !query){
         movies = await getMovies(page)
         moviesListPage = await getMoviesPage()
    }

    if(genre){
         moviesByGenres = await getMoviesGenre({genre, page})
         moviesGenrePage = await getMoviesPagesGenre(genre)

    }

    if(query){
       filmByTitle = await getFilmByTitle({query, page})
         maxPageTitle = await getMaxPageTitle(query)
    }
    return Response.json({moviesListPage, movies, moviesByGenres, moviesGenrePage, listMovieTypeGenre, filmByTitle, maxPageTitle})
}





