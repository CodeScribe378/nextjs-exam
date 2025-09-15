import {FC} from "react";
import MovieInfoComponent from "@/components/movie-info/MovieInfoComponent";
import {Metadata} from "next";



type Props ={
    params: Promise<{id:string}>
}


export const generateMetadata = async({params}: Props): Promise<Metadata>=>{
    const {id} = await params
    return{
        title: 'MoviePage' + id
    }

}
const MoviePage: FC<Props> = async({params})=>{

    const {id} = await params

    return(
        <div>
            {id && <MovieInfoComponent id={id}/>}
        </div>
    )
}
export default MoviePage