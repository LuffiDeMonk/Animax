import React from 'react'
import Container from './Container'
import CardSlider from './CardSlider'
import { GetPopularMovies } from '@/helpers/getPopularMovies'

type APIResponse = {
    page: number,
    results: MovieData[]
}


export default async function CategoryCarousel() {
    const getPopularMovies: Promise<APIResponse> = GetPopularMovies()
    const popularMovies = await getPopularMovies
    return (
        <>
            <CardSlider type='movie' data={popularMovies.results} />
        </>
    )
}
