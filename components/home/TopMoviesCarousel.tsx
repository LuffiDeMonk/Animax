import { GetTopMovies } from '@/helpers/getTopMovies'
import React from 'react'
import CardSlider from './CardSlider'

type APIResponse = {
    page: number,
    results: MovieData[]
}

export default async function TopMoviesCarousel() {
    const topMovies: Promise<APIResponse> = GetTopMovies()
    const topMoviesData = await topMovies
    return (
        <>
            <CardSlider type='movie' data={topMoviesData.results} />
        </>
    )
}
