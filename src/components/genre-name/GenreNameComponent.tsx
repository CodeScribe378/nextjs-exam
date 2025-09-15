import {IMovieList} from "@/models/movie-list/IMovieList";
import {FC} from "react";

type TGenreName={
    action: IMovieList
}
const GenreNameComponent: FC<TGenreName> =({action})=>{
    return(
        <div  className='inline-block px-0.5 py-0 bg-violet-600 text-white rounded hover:bg-blue-600 text-xs' >
            {action.name}
        </div>
    )
}
export default GenreNameComponent