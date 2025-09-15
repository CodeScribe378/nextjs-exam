import {IDetailMovie} from "@/models/detail-movie/IDetailMovie";
import {axiosInstance} from "@/services/api.service";

//TMBD
export const getMovieSingle = async (id:string): Promise <IDetailMovie>=>{
    const {data} = await axiosInstance.get<IDetailMovie>('/3/movie/' + id)
    return data
}

//API
export const getMovieSingleHandler = async(id:string): Promise<IDetailMovie>=>{
    return await fetch('http://localhost:3000/' + id + '/api')
        .then((value)=>value.json())

}

