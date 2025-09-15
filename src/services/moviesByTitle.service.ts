import {IMovie} from "@/models/movie/IMovie";
import {axiosInstance, localBaseUrlApi} from "@/services/api.service";
import {IResponseMovie} from "@/models/response-movie/IResponseMovie";
import {IMovieApiResponse} from "@/models/movie-api-response/IMovieApiResponse";



type TFilmTitle ={
    query: string,
    page: string
}
//TMBD API
export const getFilmByTitle =async({query, page}: TFilmTitle): Promise<IMovie[]>=>{
    const {data}= await axiosInstance.get<IResponseMovie>('/3/search/movie?query=' + query + '&page=' + page)
    return data.results
}
export const getMaxPageTitle =async(query: string): Promise<number>=>{
    const {data}= await axiosInstance.get<IResponseMovie>('/3/search/movie?query=' + query + '&page=1')
    return data.total_pages
}
//local API
export const getFilmByTitleHandler = async({query, page}: TFilmTitle): Promise<IMovie[]>=>{
    const response: IMovieApiResponse = await fetch(localBaseUrlApi + '?query=' + query + '&page=' + page, {cache: 'no-cache'})
        .then((value)=> value.json())
    return response.filmByTitle
}

export const getMaxPageTitleHandler = async(query: string): Promise<number>=>{
    const response: IMovieApiResponse = await fetch(localBaseUrlApi + '?query=' + query + '&page=1', {cache: 'no-cache'})
        .then((value)=>value.json())
    return response.maxPageTitle
}
