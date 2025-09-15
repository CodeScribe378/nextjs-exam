import {IMovie} from "@/models/movie/IMovie";

export interface IResponseMovie{
    page: number,
    results: IMovie[],
    total_pages: number,
    total_results: number
}

