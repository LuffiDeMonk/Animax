import { GetMovies } from '@/helpers/getMovies'
import React from 'react'
import MediaCard from '../home/MediaCard'
import Pagination from './Pagination'


type APIResponse = {
    page: string,
    results: MovieData[],
    total_pages: string,
    totalResults: string
}

type Props = {
    sort: string
    newPage: string
}

export default async function CardContainer({ sort, newPage }: Props) {
    const { results, page, total_pages }: APIResponse = await GetMovies({
        type: 'movie',
        page: newPage,
        sortBy: sort
    })
    return (
        <>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-x-2 gap-y-4'>
                {
                    results.map(item => (
                        <MediaCard index={item.id} posterImage={item.poster_path} title={item.title} type='movie' key={item.id} />
                    ))
                }
            </div>
            <Pagination
                currentPage={page}
                totalPages={total_pages}
                size={6}
            />
        </>
    )
}
