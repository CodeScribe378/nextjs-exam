'use client'

import {useRouter, useSearchParams} from "next/navigation";
import {useEffect, useState} from "react";
import {getMaxPageTitleHandler} from "@/services/moviesByTitle.service";
import {getMoviesPagesGenreHandler} from "@/services/moviesByGenre.service";
import {getMoviesPageHandler} from "@/services/movieList.service";

const PaginationComponent =()=>{

    const[maxPageQuery, setPageQuery] = useState<number>(1)
    const[maxPageGenre, setPageGenre]= useState<number>(1)
    const[maxPageList, setPageList]= useState<number>(1)

    const params = useSearchParams()
    const router = useRouter()

let page = Number (params.get('page') || '1')
    const genre = params.get('genre') || ''
    const query = params.get('query') || ''

    useEffect(()=>{

        if(query){
        getMaxPageTitleHandler(query)
            .then((value)=>setPageQuery(value))
        }

        if(genre){
            getMoviesPagesGenreHandler(genre)
                .then((value)=>setPageGenre(value))
        }

        if(!query && !genre){
            getMoviesPageHandler()
                .then((value)=>setPageList(value))
        }

    }, [query, genre])

const isDisabled = (query && page >= maxPageQuery) || (genre && page >= maxPageGenre) || (!query && !genre && page >= maxPageList)
    return(
        <div className='ml-96'>
            <button className='mr-5 rounded hover:bg-blue-600'  onClick={()=>{
           if(page > 1) {
            const updated = new URLSearchParams()
               if(query){
                 updated.set('query', query)
                   updated.set('page', (--page).toString())

               }else if(genre){
                   updated.set('genre', genre)
                   updated.set('page', (--page).toString())

               }else {
                   updated.set('page', (--page).toString())
               }
               router.push(`?${updated.toString()}`)

           }
            }}>previous</button>

            <button className='rounded hover:bg-blue-600' disabled={isDisabled} onClick={()=>{
                const updated = new URLSearchParams()
                if(query){
                    updated.set('query', query)
                    updated.set('page', (++page).toString())

                }else if(genre){
                    updated.set('genre', genre)
                    updated.set('page', (++page).toString())

                }else {
                    updated.set('page', (++page).toString())
                }
                router.push(`?${updated.toString()}`)
            }}>next</button>

        </div>
    )
}
export default PaginationComponent

