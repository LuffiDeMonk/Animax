import { GetPopularTV } from '@/helpers/getPopularTV'
import React from 'react'
import CardSlider from './CardSlider'

type APIResponse = {
    page: string,
    results: TVData[]
}

export default async function PopularTVCarousel() {
    const getPopularTV: Promise<APIResponse> = GetPopularTV()
    const data = await getPopularTV

    return (
        <>
            <CardSlider data={data.results} type='TV' />
        </>
    )
}
