import {getListMovieTypeGenreHandler} from "@/services/moviesByGenre.service";
import Link from "next/link";
import GenreNameComponent from "@/components/genre-name/GenreNameComponent";

const GenreListComponent =async()=>{

    const genreList = await getListMovieTypeGenreHandler()

    return(
        <div className='grid grid-cols-10 grid-rows-2 gap-0.5 ml-10'>
            {genreList.map((action)=><div key={action.id}>
               <Link href={{pathname: '/', query:{genre: action.id.toString(), page: '1'} }}><GenreNameComponent  action={action}/></Link>
            </div>)}
        </div>
    )
}
export default GenreListComponent

