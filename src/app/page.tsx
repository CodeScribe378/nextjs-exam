import PaginationComponent from "@/components/pagination/PaginationComponent";
import {FC} from "react";
import ListMovieComponent from "@/components/list-movie/ListMovieComponent";



type Props = {
    searchParams: Promise<{page: string, query?: string, genre?: string}>;
};

const MoviesPage: FC<Props> = async ({ searchParams }) => {
    const awaitedSP = await searchParams;
    const page = awaitedSP.page || '1'
    const query = awaitedSP.query || ''
    const genre = awaitedSP.genre ||''
    return (
        <div>

            <div className='w-full max-w-screen-lg bg-black shadow-lg rounded-lg p-6 mt-10 ml-44'>
                {awaitedSP && <ListMovieComponent page={page}
                    query={query}
                    genre={genre}/>}
                <PaginationComponent />
            </div>
        </div>
    );
};
export default MoviesPage



