import {IMovie} from "@/models/movie/IMovie";
import {axiosInstance, localBaseUrlApi} from "@/services/api.service";
import {IResponseMovie} from "@/models/response-movie/IResponseMovie";
import {IMovieApiResponse} from "@/models/movie-api-response/IMovieApiResponse";

//TMBD API

export const getMovies = async(page:string): Promise<IMovie[]>=>{
    const {data}= await axiosInstance.get<IResponseMovie>( '/3/discover/movie?' + '&page=' + page)
    return data.results
}

export const getMoviesPage = async(): Promise<number>=>{
    const {data}= await axiosInstance.get<IResponseMovie>( '/3/discover/movie')
    return data.total_pages
}

//localApi

export const getMoviesHandler = async(page:string): Promise<IMovie[]>=>{
    const response: IMovieApiResponse = await fetch (localBaseUrlApi + '?page=' + page, {cache: 'no-cache'})
        .then((value)=>value.json())
    return response.movies
}


export const getMoviesPageHandler = async(): Promise<number>=>{
   const response: IMovieApiResponse = await fetch(localBaseUrlApi, {cache: 'no-cache'})
       .then((value)=>value.json())
    return response.moviesListPage
}


