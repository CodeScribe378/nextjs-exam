import {FC} from "react";
import {IMovie} from "@/models/movie/IMovie";
import PosterPreviewComponent from "@/components/poster-preview/PosterPreviewComponent";
import Link from "next/link";
import GenreComponent from "@/components/genre/GenreComponent";
import StarsRatingComponent from "@/components/stars-rating/StarsRatingComponent";

type TMovieInfoProps={
    movie: IMovie
}

const MovieListCardComponent: FC<TMovieInfoProps> =({movie})=>{

    return(
        <Link href={'/' + movie.id.toString()}>
       <div className='text-xs'>

            {movie.poster_path && <PosterPreviewComponent item={movie}/>}
            <div>
                {movie.original_language && <p> original language: { movie.original_language}</p>}
                {movie.original_title && <p>original title: {movie.original_title}</p>}
                {movie.overview && <p>overview: {movie.overview}</p>}
                {typeof movie.popularity === 'number' && <p>movie popularity: {movie.popularity}</p>}
                { movie.release_date && <p> release date: {movie.release_date}</p>}
                {movie.title && <h4>title: {movie.title}</h4>}
                { typeof movie.video === 'boolean' && <p>video: {movie.video.toString()}</p>}
                { movie.genre_ids && <div>{ movie.genre_ids.map((genre, index) => <GenreComponent key={index} genre={genre}/>)}</div>}
                { typeof movie.vote_average === 'number' &&  <StarsRatingComponent movie={movie.vote_average}/>}
                {typeof movie.vote_count === 'number' && <p> vote count: {movie.vote_count}</p>}
            </div>
    </div>
    </Link>
    )
}

export default MovieListCardComponent

