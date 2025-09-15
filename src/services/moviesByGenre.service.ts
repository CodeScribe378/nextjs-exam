import {axiosInstance, localBaseUrlApi} from "@/services/api.service";
import {IResponseMovie} from "@/models/response-movie/IResponseMovie";
import {IMovie} from "@/models/movie/IMovie";
import {IMovieList} from "@/models/movie-list/IMovieList";
import {IMovieListResponse} from "@/models/movie-list-response/IMovieListResponse";
import {IMovieApiResponse} from "@/models/movie-api-response/IMovieApiResponse";

type TMoviesGenreURL={
    genre: string,
    page: string
}
//TMBD API

export const getMoviesGenre = async ({ genre, page }: TMoviesGenreURL): Promise<IMovie[]> => {
    const { data } = await axiosInstance.get<IResponseMovie>('/3/discover/movie?' + 'with_genres=' + genre + '&page=' + page);
    return data.results;
};
export const getMoviesPagesGenre = async (genre: string): Promise<number> => {
    const { data } = await axiosInstance.get<IResponseMovie>('/3/discover/movie?' + 'with_genres=' + genre + '&page=1');
    return data.total_pages;
};

export const getListMovieTypeGenre = async (): Promise<IMovieList[]>=>{
    const {data} =await axiosInstance.get<IMovieListResponse>('/3/genre/movie/list?language=en')
    return data.genres
}

//localApi

export const getMoviesGenreHandler = async({genre, page}: TMoviesGenreURL): Promise<IMovie[]>=>{
    const response: IMovieApiResponse = await fetch(localBaseUrlApi + '?genre=' + genre + '&' + 'page=' + page, {cache: 'no-cache'})
        .then((value)=>value.json())
    return response.moviesByGenres
}

export const getMoviesPagesGenreHandler = async(genre: string): Promise<number>=>{
    const response: IMovieApiResponse = await fetch(localBaseUrlApi + '?genre=' + genre +'&page=1', {cache: 'no-cache'})
        .then((value)=>value.json())
    return response.moviesGenrePage
}

export const getListMovieTypeGenreHandler = async(): Promise<IMovieList[]>=>{
    const response: IMovieApiResponse = await fetch(localBaseUrlApi +'?', {cache: 'no-cache'})
        .then((value)=>value.json())
    return response.listMovieTypeGenre

}




