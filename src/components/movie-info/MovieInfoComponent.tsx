import {FC} from "react";
import {getMovieSingleHandler} from "@/services/movieSingle.service";
import {imageBaseURL} from "@/services/api.service";
import StarsRatingComponent from "@/components/stars-rating/StarsRatingComponent";
import GenreComponent from "@/components/genre/GenreComponent";
import ProductionCountryComponent from "@/components/production-country/ProductionCountryComponent";
import CountryComponent from "@/components/country/CountryComponent";
import CompanyComponent from "@/components/company/CompanyComponent";
import SpokenLanguageComponent from "@/components/spoken-language/SpokenLanguageComponent";


type Props ={
    id: string
}

const MovieInfoComponent: FC<Props> =async({id})=>{

    const movieSingle = await getMovieSingleHandler(id)

    return(
        <div className='text-gray-200 ml-36 px-10 py-6 grid grid-cols-2'>
            <div>
            {movieSingle.backdrop_path && <img className='w-96' src={imageBaseURL + movieSingle.backdrop_path} alt='backdrop'/>}</div>
            <div>
            {movieSingle.title && <p> title: {movieSingle.title}</p>}
            {movieSingle.original_title && <p>Original Title: {movieSingle.original_title}</p>}
            {movieSingle.release_date && <p> release date: {movieSingle.release_date}</p>}
            {movieSingle.original_language && <p> original language: {movieSingle.original_language}</p>}
            {typeof movieSingle.popularity === 'number' && <p>popularity: { movieSingle.popularity}</p>}
            {movieSingle.overview && <p>overview: {movieSingle.overview}</p>}
            {movieSingle.belongs_to_collection?.name && <p> {movieSingle.belongs_to_collection.name}</p>}
            {typeof movieSingle.budget === 'number' && <p>budget: {movieSingle.budget}</p>}
            {typeof movieSingle.revenue === 'number' && <p>revenue: {movieSingle.revenue}</p>}
            {typeof movieSingle.runtime === 'number' && <p>runtime: {movieSingle.runtime}</p>}
            {movieSingle.status && <p>status: {movieSingle.status}</p>}
            {movieSingle.tagline && <p>tagline: {movieSingle.tagline}</p>}
            {movieSingle.homepage &&  <p>{movieSingle.homepage}</p>}
            { movieSingle.spoken_languages && <div><h4>spoken languages</h4>{movieSingle.spoken_languages.map((item, index)=><SpokenLanguageComponent key={index} item={item}/>)}</div>}
            {movieSingle.production_companies && <div><h4>production companies</h4> {movieSingle.production_companies.map((company)=> < CompanyComponent key={company.id} company={company}/>)}</div>}
            {movieSingle.imdb_id && <p> imdb.id: {movieSingle.imdb_id}</p>}
            {movieSingle.origin_country && <div> <h4>origin country</h4> {movieSingle.origin_country.map((country, index)=><CountryComponent key={index} country={country}/>)}</div>}
            {movieSingle.production_countries && <div><h4>production countries</h4> {movieSingle.production_countries.map((production, index)=><ProductionCountryComponent key={index} production={production}/>)}</div>}
            {movieSingle.genres && <div> {movieSingle.genres.map((item) => <GenreComponent key={item.id} genre={item.id}/>)}</div>}
            {typeof  movieSingle.vote_average === 'number' && <StarsRatingComponent movie={movieSingle.vote_average}/>}
            {typeof movieSingle.vote_count === 'number' && <p> vote count: {movieSingle.vote_count}</p>}
        </div>

        </div>
    )
}
export default MovieInfoComponent