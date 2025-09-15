import {IMovie} from "@/models/movie/IMovie";
import {FC} from "react";
import {imageBaseURL} from "@/services/api.service";



type Props={
    item: IMovie
}

const PosterPreviewComponent: FC<Props> =({item})=>{
    return(
        <div  className='w-60 mt-1'>
            <img  src = {imageBaseURL + item.poster_path} alt='poster'/>
        </div>
    )
}
export default PosterPreviewComponent