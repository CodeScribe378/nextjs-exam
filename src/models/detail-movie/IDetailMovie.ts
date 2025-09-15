export interface IDetailMovie {
    adult: boolean;
    backdrop_path: string | null;
    belongs_to_collection: {
        id: number;
        name: string | null;
        poster_path: string | null;
        backdrop_path: string | null;
    } | null;
    budget: number | null;
    genres: IGenres [] | null;
    homepage: string | null;
    id: number;
    imdb_id: string | null;
    origin_country: string[] | null;
    original_language: string | null;
    original_title: string | null;
    overview: string | null;
    popularity: number | null;
    poster_path: string | null;
    production_companies: IProduction_companies [] | null
    production_countries: IProduction_countries [] | null
    release_date: string | null;
    revenue: number | null;
    runtime: number | null;
    spoken_languages: ISpoken_languages [] | null
    status: string | null;
    tagline: string | null;
    title: string | null;
    video: boolean
    vote_average: number | null;
    vote_count: number | null;
}

export interface IGenres {
    id: number,
    name: string
}
export interface IProduction_companies {
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
}
export interface IProduction_countries{
    iso_3166_1: string;
    name: string;
}
export interface ISpoken_languages {
    english_name: string;
    iso_639_1: string;
    name: string;
}