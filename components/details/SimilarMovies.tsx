import React from 'react'
import CardSlider from '../home/CardSlider'
import { GetSimilarMovie } from '@/helpers/getSimilarMovie'

type APIResponse = {
    page: number,
    results: MovieData[]
}

export default async function SimilarMovies({ id }: { id: string }) {
    const getSimilarMovies: Promise<APIResponse> = GetSimilarMovie(id)
    const { results } = await getSimilarMovies
    return (
        <>
            <CardSlider data={results} type='movie' />
        </>
    )
}
